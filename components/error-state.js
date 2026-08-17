// ============================================
// FUTURADAR - COMPONENTE ERROR STATE
// ============================================

class ErrorState {
    static render(message = 'Ocorreu um erro. Tente novamente.', retryCallback = null) {
        const retryId = `retry-${Date.now()}`;
        setTimeout(() => {
            if (retryCallback && document.getElementById(retryId)) {
                document.getElementById(retryId).addEventListener('click', retryCallback);
            }
        }, 0);
        return `
            <div class="error-state" role="alert">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p>${message}</p>
                ${retryCallback ? `<button id="${retryId}" class="btn btn-primary retry-btn">Tentar novamente</button>` : ''}
            </div>
        `;
    }
}

export default ErrorState;
