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
    const PLAN_URL = 'data/plan.json?v=1';
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

    // Plan içeriği (statik JSON) — jQuery AJAX
    const loadPlan = () => $.getJSON(PLAN_URL);

    // Tamamlanmış görev ID'leri (RLS giriş yapan kullanıcıyla sınırlar)
    const getDoneTaskIds = async () => {
        const data = handle(await table().select('task_id'));
        return (data ?? []).map((row) => row.task_id);
    };

    const markDone = async (taskId) =>
        handle(await table().upsert({ task_id: taskId }));

    const markUndone = async (taskId) =>
        handle(await table().delete().eq('task_id', taskId));

    return { loadPlan, getDoneTaskIds, markDone, markUndone };

})();
