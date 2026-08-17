// ============================================
// FUTURADAR - FORMATAÇÃO DE DATAS
// ============================================

export function formatDate(dateString, options = {}) {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    const defaultOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        ...options
    };
    return date.toLocaleDateString('pt-BR', defaultOptions);
}

export function formatTime(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return '';
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

export function formatDateTime(dateString) {
    return `${formatDate(dateString)} ${formatTime(dateString)}`;
}

export default {
    formatDate,
    formatTime,
    formatDateTime
};
