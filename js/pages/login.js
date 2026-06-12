"use strict";

const KTLogin = (() => {

    const SELECTORS = {
        form: '#loginForm',
        email: '#email',
        pw: '#password',
        submit: '#loginSubmit'
    };

    // Giriş JS ile yapıldığı (form submit engellendiği) için tarayıcı klasik
    // "şifreyi kaydet" sezgisini tetikleyemez. Başarılı girişten sonra
    // Credential Management API ile şifreyi açıkça tarayıcıya bildiririz;
    // Chrome/Google şifre yöneticisi böylece kaydetmeyi önerir.
    // (Desteklemeyen tarayıcılarda sessizce atlanır.)
    const saveCredential = async (email, password) => {
        if (!globalThis.PasswordCredential) return;
        try {
            const cred = new globalThis.PasswordCredential({
                id: email, password, name: email
            });
            await navigator.credentials.store(cred);
        } catch {
            // tarayıcı reddederse giriş akışını bozma
        }
    };

    const handleLogin = () => {
        // jQuery this bağlamı gerektiği için function
        $(SELECTORS.form).on('submit', async function (e) {
            e.preventDefault();
            const $btn = $(this).find(SELECTORS.submit);
            const email = $(SELECTORS.email).val().trim();
            const password = $(SELECTORS.pw).val();

            if (!email || !password) {
                KTSwal.warning('E-posta ve şifre gerekli');
                return;
            }

            KTHelpers.setButtonLoading($btn);
            try {
                await KTAuth.signIn(email, password);
                await saveCredential(email, password);
                KTAuth.redirect(KTAuth.HOME_PAGE);
            } finally {
                KTHelpers.resetButton($btn);
            }
        });
    };

    const guardConfig = () => {
        if (!KTConfig.isConfigured()) {
            KTSwal.warning(
                'Supabase ayarlanmamış: js/core/kt-config.js içine Project URL ve anon key girin.');
        }
    };

    const redirectIfLoggedIn = async () => {
        const session = await KTAuth.getSession();
        if (session) KTAuth.redirect(KTAuth.HOME_PAGE);
    };

    return {
        init: () => {
            guardConfig();
            redirectIfLoggedIn();
            handleLogin();
        }
    };

})();

$(() => KTLogin.init());
