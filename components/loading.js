// ============================================
// FUTURADAR - COMPONENTE LOADING
// ============================================

class Loading {
    static render(message = 'Carregando...') {
        return `
            <div class="loading-spinner" role="status" aria-live="polite">
                <div class="spinner"></div>
                <span class="sr-only">${message}</span>
            </div>
        `;
    }
}

export default Loading;
