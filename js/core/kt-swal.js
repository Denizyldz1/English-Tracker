"use strict";

/**
 * KTSwal — tüm bildirimler buradan (FRONTEND_STANDARD §3.8).
 * `Swal` global'i SweetAlert2 CDN'inden gelir.
 */
const KTSwal = (() => {

    const baseConfig = {
        buttonsStyling: false,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    };

    const success = (msg, callback) => {
        Swal.fire({ ...baseConfig, text: msg, icon: 'success' })
            .then(() => callback?.());
    };

    const error = (msg) => {
        Swal.fire({
            text: msg,
            icon: 'error',
            buttonsStyling: false,
            confirmButtonText: 'Tamam',
            customClass: { confirmButton: 'btn btn-primary' }
        });
    };

    const warning = (msg) => {
        Swal.fire({
            text: msg,
            icon: 'warning',
            buttonsStyling: false,
            confirmButtonText: 'Tamam',
            customClass: { confirmButton: 'btn btn-primary' }
        });
    };

    const confirm = (text, confirmCallback, title) => {
        Swal.fire({
            title: title ?? 'Emin misiniz?',
            text,
            icon: 'question',
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonText: 'Evet',
            cancelButtonText: 'İptal',
            customClass: {
                confirmButton: 'btn fw-bold btn-primary',
                cancelButton: 'btn fw-bold btn-light'
            }
        }).then((result) => {
            if (result.isConfirmed) confirmCallback?.();
        });
    };

    return { success, error, warning, confirm };

})();
