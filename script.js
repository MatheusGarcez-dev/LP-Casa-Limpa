// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('nav a');

// Adiciona um ouvinte de evento para cada link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();  // Impede o comportamento padrão do link

    // Obtém o destino do link (o ID da seção)
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Realiza o scroll suave até a seção
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

