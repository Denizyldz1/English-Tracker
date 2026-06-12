"use strict";

/**
 * KTAuth — oturum/kimlik katmanı (Supabase Auth).
 * Hata merkezde KTSwal ile gösterilir ve Promise reject edilir.
 */
const KTAuth = (() => {

    const LOGIN_PAGE = 'index.html';
    const APP_PAGE = 'app.html';
    const INVALID_LOGIN = 'Invalid login';

    const auth = () => KTConfig.client.auth;
    const redirect = (page) => { globalThis.location.href = page; };

    const mapError = (error) => {
        if (error?.message?.includes(INVALID_LOGIN)) return 'E-posta veya şifre hatalı';
        return error?.message ?? 'Giriş yapılamadı';
    };

    const getSession = async () => {
        const { data } = await auth().getSession();
        return data.session;
    };

    const signIn = async (email, password) => {
        const { error } = await auth().signInWithPassword({ email, password });
        if (error) {
            KTSwal.error(mapError(error));
            return Promise.reject(error);
        }
    };

    const signOut = async () => {
        await auth().signOut();
        redirect(LOGIN_PAGE);
    };

    // app.html koruması: oturum yoksa giriş sayfasına gönder
    const requireAuth = async () => {
        const session = await getSession();
        if (!session) { redirect(LOGIN_PAGE); return null; }
        return session;
    };

    const getUserEmail = async () => (await getSession())?.user?.email ?? '';

    return { getSession, signIn, signOut, requireAuth, getUserEmail, redirect, APP_PAGE };

})();
