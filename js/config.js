// ============================================
// FUTURADAR - CONFIGURAÇÃO PÚBLICA
// ============================================
// Este arquivo NÃO contém a API key.
// A API key deve ser configurada no serverless proxy.

const CONFIG = {
    // Identidade
    siteName: 'FutRadar',
    siteSlogan: 'Futebol sem complicação',
    siteUrl: window.location.origin, // Ajustar em produção

    // Ambiente
    environment: 'development', // 'development' | 'production'

    // API Proxy (endpoint do serverless que protege a chave)
    apiProxyUrl: '/api/proxy',

    // Cache TTL em segundos
    cacheTTL: {
        competitions: 43200,   // 12 horas
        teams: 43200,          // 12 horas
        standings: 900,        // 15 minutos
        matchesToday: 300,     // 5 minutos
        matchesUpcoming: 1800, // 30 minutos
        matchesRecent: 900,    // 15 minutos
        match: 300,            // 5 minutos
        scorers: 3600,         // 1 hora
    },

    // Competições prioritárias (códigos da football-data.org)
    // Serão preenchidos após descoberta das disponíveis no plano gratuito
    priorityCompetitions: [
        // Exemplo: 'BSA' (Brasileirão Série A)
        // Verificar disponibilidade
    ],

    // Configurações de SEO
    seo: {
        defaultTitle: 'FutRadar — Futebol sem complicação',
        defaultDescription: 'Jogos, resultados, tabelas e ferramentas para acompanhar o futebol.',
        titleTemplate: '%s | FutRadar',
        ogImage: '/assets/images/og-image.png',
        twitterCard: 'summary_large_image',
    },

    // Limites e comportamento
    searchDebounceMs: 500,
    maxSearchResults: 10,
};

export default CONFIG;
