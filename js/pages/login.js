"use strict";

const KTLogin = (() => {

    const SELECTORS = {
        form: '#loginForm',
        email: '#email',
        pw: '#password',
        submit: '#loginSubmit'
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
