// ============================================
// FUTURADAR - ROTEADOR SPA (Hash-based)
// ============================================

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.mainContent = document.getElementById('main-content');
    }

    registerRoutes(routes) {
        this.routes = routes;
    }

    async init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        await this.handleRoute();
    }

    async handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const route = this.routes[hash] || this.routes['/'];
        if (route) {
            this.currentRoute = hash;
            // Limpar conteúdo anterior
            this.mainContent.innerHTML = '';
            // Instanciar página
            const page = route();
            const content = await page.render();
            this.mainContent.innerHTML = content;
            if (page.afterRender) {
                await page.afterRender();
            }
            // Atualizar título
            document.title = page.title || CONFIG.seo.defaultTitle;
            // Scroll para o topo
            window.scrollTo(0, 0);
        } else {
            // Rota não encontrada - redirecionar para home
            window.location.hash = '#/';
        }
    }
}

export default Router;
