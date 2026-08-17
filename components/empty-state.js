// ============================================
// FUTURADAR - COMPONENTE EMPTY STATE
// ============================================

class EmptyState {
    static render(message = 'Nenhum dado encontrado.') {
        return `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="7"></circle>
                    <line x1="21" y1="21" x2="16.5" y2="16.5"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <p>${message}</p>
            </div>
        `;
    }
}

export default EmptyState;
