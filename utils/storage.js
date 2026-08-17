// ============================================
// FUTURADAR - LOCALSTORAGE WRAPPER
// ============================================

class Storage {
    static get(key, defaultValue = null) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : defaultValue;
        } catch {
            return defaultValue;
        }
    }

    static set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('Falha ao salvar no localStorage:', e);
        }
    }

    static remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('Falha ao remover do localStorage:', e);
        }
    }

    static clear() {
        try {
            localStorage.clear();
        } catch (e) {
            console.warn('Falha ao limpar localStorage:', e);
        }
    }

    static has(key) {
        try {
            return localStorage.getItem(key) !== null;
        } catch {
            return false;
        }
    }
}

export default Storage;
