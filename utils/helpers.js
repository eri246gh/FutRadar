// ============================================
// FUTURADAR - FUNÇÕES UTILITÁRIAS GERAIS
// ============================================

export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function formatNumber(num) {
    return new Intl.NumberFormat('pt-BR').format(num);
}

export function isMobile() {
    return window.innerWidth < 768;
}

export function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}

export default {
    debounce,
    formatNumber,
    isMobile,
    truncateText
};
