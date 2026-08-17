// ============================================
// FUTURADAR - INICIALIZAÇÃO DA APLICAÇÃO
// ============================================

import CONFIG from './config.js';
import Router from './router.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import HomePage from '../pages/home.js';

class App {
    constructor() {
        this.config = CONFIG;
        this.router = new Router();
        this.header = new Header();
        this.footer = new Footer();
        this.mainContent = document.getElementById('main-content');
        this.headerContainer = document.getElementById('header-container');
        this.footerContainer = document.getElementById('footer-container');
    }

    async init() {
        // Renderizar header e footer
        this.headerContainer.innerHTML = this.header.render();
        this.footerContainer.innerHTML = this.footer.render();
        this.header.afterRender();

        // Registrar rotas
        this.registerRoutes();

        // Iniciar roteador
        await this.router.init();
    }

    registerRoutes() {
        const routes = {
            '/': () => new HomePage(),
            // Outras rotas serão adicionadas nas próximas etapas
        };

        this.router.registerRoutes(routes);
    }
}

// Inicializar aplicação quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', async () => {
    const app = new App();
    await app.init();
});

export default App;
