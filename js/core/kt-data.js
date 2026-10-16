"use strict";

/**
 * KTData — veri erişim katmanı (FRONTEND_STANDARD §3.7'deki KTAjax'in
 * Supabase karşılığı). Promise döner, async/await ile tüketilir; hata
 * merkezî olarak KTSwal.error ile gösterilir ve Promise reject edilir.
 *
 * İlerleme modeli: bir görev tamamlandıysa tabloda satırı vardır
 * (işareti kaldırınca satır silinir). user_id'yi DB `default auth.uid()`
 * ile doldurur; RLS, kullanıcıyı kendi satırlarıyla sınırlar.
 */
const KTData = (() => {

    const TABLE = 'task_progress';
    const PROGRAMS_URL = 'data/programs.json?v=e9d31405';
    const ERR_GENERIC = 'Bir hata oluştu, lütfen tekrar deneyin';

    const table = () => KTConfig.client.from(TABLE);

    // Supabase cevabını merkezde değerlendir: hata varsa göster + reject
    const handle = (result) => {
        if (result?.error) {
            KTSwal.error(result.error.message ?? ERR_GENERIC);
            return Promise.reject(result.error);
        }
        return result?.data ?? null;
    };

    // Program kayıt defteri (statik JSON) — jQuery AJAX
    const loadPrograms = () => $.getJSON(PROGRAMS_URL);

    // Bir programın plan içeriği; planUrl registry'den gelir
    const loadPlan = (planUrl) => $.getJSON(planUrl);

    // Tamamlanmış görevler: [{ task_id, updated_at }] (RLS kullanıcıyla sınırlar).
    // updated_at, seri (streak) ve günlük istatistik hesapları için kullanılır.
    const getDoneRows = async () => {
        const data = handle(await table().select('task_id, updated_at'));
        return data ?? [];
    };

    const markDone = async (taskId) =>
        handle(await table().upsert({ task_id: taskId }));

    const markUndone = async (taskId) =>
        handle(await table().delete().eq('task_id', taskId));

    // ─── Aktif programlar (active_programs; satır varsa aktif) ────────
    const ACTIVE_TABLE = 'active_programs';
    const activeTable = () => KTConfig.client.from(ACTIVE_TABLE);
    // PostgREST "tablo yok" kodları (eski/yeni sürüm) — kurulum eksik demek
    const MISSING_TABLE = ['42P01', 'PGRST205'];

    // Aktif program ID'leri: ['ingilizce', ...]. Tablo henüz yoksa null döner
    // (hata gösterilmez; sayfa kurulum ipucu verir).
    const getActivePrograms = async () => {
        const result = await activeTable().select('program_id');
        if (MISSING_TABLE.includes(result?.error?.code)) return null;
        const data = handle(result);
        return (data ?? []).map((r) => r.program_id);
    };

    // ignoreDuplicates: satır varsa dokunma (update policy gerekmez)
    const setProgramActive = async (programId, active) =>
        handle(await (active
            ? activeTable().upsert({ program_id: programId }, { ignoreDuplicates: true })
            : activeTable().delete().eq('program_id', programId)));

    return {
        loadPrograms, loadPlan, getDoneRows, markDone, markUndone,
        getActivePrograms, setProgramActive
    };

})();
