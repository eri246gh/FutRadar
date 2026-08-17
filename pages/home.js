// ============================================
// FUTURADAR - PÁGINA INICIAL
// ============================================

import CONFIG from '../js/config.js';
import Loading from '../components/loading.js';
import EmptyState from '../components/empty-state.js';
import ErrorState from '../components/error-state.js';

class HomePage {
    constructor() {
        this.title = CONFIG.seo.defaultTitle;
    }

    async render() {
        // Nesta etapa inicial, a página será renderizada com dados estáticos
        // A integração com a API virá na Etapa 2.
        return `
            <section class="hero">
                <div class="container">
                    <h1 class="hero-title">${CONFIG.siteSlogan}</h1>
                    <p class="hero-subtitle">Jogos, resultados, tabelas e ferramentas para acompanhar o futebol.</p>
                    <div class="hero-actions">
                        <a href="#/jogos" class="btn btn-primary">Ver jogos</a>
                        <a href="#/ferramentas" class="btn btn-secondary">Explorar ferramentas</a>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Jogos de Hoje</h2>
                        <a href="#/jogos" class="section-link">Ver todos</a>
                    </div>
                    <div id="home-matches">
                        ${Loading.render('Carregando jogos...')}
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Classificação</h2>
                        <a href="#/classificacao" class="section-link">Ver tabelas</a>
                    </div>
                    <div id="home-standings">
                        ${Loading.render('Carregando classificação...')}
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Competições</h2>
                        <a href="#/competicoes" class="section-link">Ver todas</a>
                    </div>
                    <div id="home-competitions">
                        ${Loading.render('Carregando competições...')}
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Ferramentas</h2>
                        <a href="#/ferramentas" class="section-link">Todas as ferramentas</a>
                    </div>
                    <div class="section-grid">
                        <a href="#/ferramentas/simulador" class="card" style="text-decoration:none; color:inherit;">
                            <h3>Simulador de Campeonato</h3>
                            <p>Teste resultados e veja como a classificação muda.</p>
                        </a>
                        <a href="#/ferramentas/aproveitamento" class="card" style="text-decoration:none; color:inherit;">
                            <h3>Calculadora de Aproveitamento</h3>
                            <p>Calcule o aproveitamento de qualquer time.</p>
                        </a>
                        <a href="#/ferramentas/comparador" class="card" style="text-decoration:none; color:inherit;">
                            <h3>Comparador de Times</h3>
                            <p>Compare estatísticas entre dois times.</p>
                        </a>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <h2 class="section-title">Perguntas Frequentes</h2>
                    <div class="faq-list">
                        <div class="faq-item">
                            <h3 class="faq-question">O que é o FutRadar?</h3>
                            <p>FutRadar é uma plataforma de informações e ferramentas de futebol, trazendo jogos, resultados, classificações e simuladores.</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">Os dados são atualizados em tempo real?</h3>
                            <p>Os dados são obtidos de fontes oficiais e atualizados periodicamente. Alguns dados podem ter pequeno atraso.</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">O serviço é gratuito?</h3>
                            <p>Sim, o FutRadar é gratuito. Futuramente poderemos oferecer recursos premium.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    async afterRender() {
        // Nesta etapa inicial, apenas simulamos o carregamento
        // A integração real virá na Etapa 2.
        const homeMatches = document.getElementById('home-matches');
        const homeStandings = document.getElementById('home-standings');
        const homeCompetitions = document.getElementById('home-competitions');

        // Simular dados vazios por enquanto
        setTimeout(() => {
            if (homeMatches) homeMatches.innerHTML = EmptyState.render('Nenhum jogo encontrado para hoje.');
            if (homeStandings) homeStandings.innerHTML = EmptyState.render('Nenhuma classificação disponível no momento.');
            if (homeCompetitions) homeCompetitions.innerHTML = EmptyState.render('Nenhuma competição disponível no momento.');
        }, 500);
    }
}

export default HomePage;
