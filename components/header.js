// ============================================
// FUTURADAR - COMPONENTE HEADER
// ============================================

import CONFIG from '../js/config.js';

class Header {
    constructor() {
        this.header = document.getElementById('header-container');
    }

    render() {
        return `
            <div class="container">
                <a href="#/" class="logo" aria-label="${CONFIG.siteName}">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="14" fill="var(--color-primary)"/>
                        <path d="M9 20L13 12L19 16L23 12V20H9Z" fill="white"/>
                    </svg>
                    <span>${CONFIG.siteName}</span>
                </a>

                <nav class="main-nav" id="main-nav" aria-label="Navegação principal">
                    <ul>
                        <li><a href="#/jogos" data-route="jogos">Jogos</a></li>
                        <li><a href="#/classificacao" data-route="classificacao">Classificação</a></li>
                        <li><a href="#/competicoes" data-route="competicoes">Competições</a></li>
                        <li><a href="#/times" data-route="times">Times</a></li>
                        <li><a href="#/artilharia" data-route="artilharia">Artilharia</a></li>
                        <li><a href="#/ferramentas" data-route="ferramentas">Ferramentas</a></li>
                    </ul>
                </nav>

                <div class="header-actions">
                    <button class="search-toggle" id="search-toggle" aria-label="Buscar">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="7"></circle>
                            <line x1="21" y1="21" x2="16.5" y2="16.5"></line>
                        </svg>
                    </button>
                    <button class="theme-toggle" id="theme-toggle" aria-label="Alternar tema">
                        <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>
                    <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Abrir menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        `;
    }

    afterRender() {
        // Toggle do menu mobile
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const mainNav = document.getElementById('main-nav');
        if (mobileToggle && mainNav) {
            mobileToggle.addEventListener('click', () => {
                mainNav.classList.toggle('mobile-open');
            });
        }

        // Toggle de tema
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Atualizar ícones do tema
        this.updateThemeIcons();

        // Marcar link ativo
        this.highlightActiveLink();
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('futradar-theme', newTheme);
        this.updateThemeIcons();
    }

    updateThemeIcons() {
        const theme = document.documentElement.getAttribute('data-theme');
        const sunIcon = document.querySelector('.icon-sun');
        const moonIcon = document.querySelector('.icon-moon');
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }
    }

    highlightActiveLink() {
        const currentHash = window.location.hash.slice(1) || '/';
        const links = document.querySelectorAll('.main-nav a');
        links.forEach(link => {
            const route = link.getAttribute('href').replace('#/', '');
            if (currentHash.startsWith('/' + route) || (currentHash === '/' && route === '/')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

export default Header;
