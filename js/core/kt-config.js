"use strict";

/**
 * KTConfig — Supabase bağlantısı.
 *
 * anon (public) key istemcide durmak üzere tasarlanmıştır; veriyi Row Level
 * Security korur. `service_role` key ASLA buraya konmaz.
 *
 * Kurulum: Supabase Dashboard → Project Settings → API'den Project URL ve
 * "anon public" key'i alıp aşağıya yapıştırın.
 */
const KTConfig = (() => {

    const SUPABASE_URL = 'https://fhtnsronmdcqpjzgaeej.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_HgzvrRlzaubbqU-q4M_W_w_yOSiaLVx';

    const PLACEHOLDERS = ['YOUR-PROJECT', 'YOUR-ANON'];

    const isConfigured = () =>
        !PLACEHOLDERS.some((p) => `${SUPABASE_URL}${SUPABASE_ANON_KEY}`.includes(p));

    // `supabase` global'i CDN script'inden gelir (window.supabase).
    const client = globalThis.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    return { client, isConfigured };

})();
