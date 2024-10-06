// Rotas de conteúdo dinâmico
const routes = {
    linkedin: '<h1>LinkedIn</h1><p><a href="https://www.linkedin.com/in/lucas-costa-b675762a7/" target="_blank" class="link"><i class="fab fa-linkedin"></i>Visite meu LinkedIn</a></p>',
    github: '<h1>GitHub</h1><p><a href="https://github.com/tucasop" target="_blank" class="link">Visite meu GitHub </a></p>',
    tiktok: '<h1>TikTok</h1><p><a href="https://www.tiktok.com/@lucasboas4" target="_blank" class="link">Visite meu TikTok</a></p>',
    about: "<h1>Sobre Mim</h1><p>Eu sou um homem de 22 anos apaixonado pela tecnologia desde os meus 8 anos. Meu interesse pela programação começou por causa dos jogos e foi crescendo ao longo do tempo. Embora eu não tenha experiência profissional na área, gostaria muito de me aprofundar e aprender mais.</p>",
};

// Função para navegar entre as rotas
function navigate(route) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = routes[route] || "<h1>404</h1><p>Página não encontrada</p>";
    
    // Animação para o conteúdo principal
    anime({
        targets: '#content',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        easing: 'easeInOutQuint'
    });

    // Animação para os parágrafos e links dentro do conteúdo
    anime({
        targets: '#content p, #content a',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeInOutQuint'
    });
}

// Evento para carregar a rota inicial
window.addEventListener("load", () => {
    const initialRoute = window.location.hash.substring(1) || "linkedin";
    navigate(initialRoute);
    
    // Animação inicial para imagem de perfil e botões
    anime({
        targets: ['#profile img', '.button'],
        scale: [0, 1],
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100, {start: 500}),
        duration: 800,
        easing: 'easeOutBack'
    });
});

// Evento para mudar a rota ao alterar o hash na URL
window.addEventListener("hashchange", () => {
    const newRoute = window.location.hash.substring(1);
    navigate(newRoute);
});

// Animação para os links do rodapé
anime({
    targets: '.footer-link',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(100, {start: 1000}),
    duration: 800,
    easing: 'easeInOutCubic'
});