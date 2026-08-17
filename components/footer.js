// ============================================
// FUTURADAR - COMPONENTE FOOTER
// ============================================

import CONFIG from '../js/config.js';

class Footer {
    render() {
        const year = new Date().getFullYear();
        return `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-brand">
                        <a href="#/" class="logo">
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="14" fill="var(--color-primary)"/>
                                <path d="M9 20L13 12L19 16L23 12V20H9Z" fill="white"/>
                            </svg>
                            <span>${CONFIG.siteName}</span>
                        </a>
                        <p>${CONFIG.siteSlogan}</p>
                    </div>
                    <div class="footer-links">
                        <div class="footer-column">
                            <h3>Futebol</h3>
                            <ul>
                                <li><a href="#/jogos">Jogos</a></li>
                                <li><a href="#/classificacao">Classificação</a></li>
                                <li><a href="#/artilharia">Artilharia</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Competições</h3>
                            <ul>
                                <li><a href="#/competicoes">Todas</a></li>
                                <li><a href="#/times">Times</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Ferramentas</h3>
                            <ul>
                                <li><a href="#/ferramentas/simulador">Simulador</a></li>
                                <li><a href="#/ferramentas/aproveitamento">Calculadora</a></li>
                                <li><a href="#/ferramentas/comparador">Comparador</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${year} ${CONFIG.siteName}. Todos os direitos reservados.</p>
                </div>
            </div>
        `;
    }
}

export default Footer;
