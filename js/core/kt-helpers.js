"use strict";

/**
 * KTHelpers — ortak yardımcılar (FRONTEND_STANDARD §6.3).
 */
const KTHelpers = (() => {

    // HTML kaçışlama (XSS) — kullanıcı verisi .html()'e gömülecekse zorunlu.
    const escapeHtml = (str) => $('<div>').text(str ?? '').html();

    // Türkçe tarih formatla
    const formatDate = (dateString, withTime = false) => {
        const date = new Date(dateString);
        if (Number.isNaN(date.getTime())) return '-';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        if (withTime) {
            options.hour = '2-digit';
            options.minute = '2-digit';
        }
        return date.toLocaleString('tr-TR', options);
    };

    // Submit butonunu loading'e al / normale döndür
    const setButtonLoading = ($button) => {
        $button.attr('data-kt-indicator', 'on').prop('disabled', true);
    };

    const resetButton = ($button) => {
        $button.removeAttr('data-kt-indicator').prop('disabled', false);
    };

    // İsim/e-posta baş harfi (avatar için)
    const getInitials = (value) => {
        if (!value) return '';
        return value
            .trim()
            .split(/[\s@.]+/)
            .map((n) => n.charAt(0))
            .join('')
            .slice(0, 2)
            .toUpperCase();
    };

    return { escapeHtml, formatDate, setButtonLoading, resetButton, getInitials };

})();
