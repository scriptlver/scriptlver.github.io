const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");
const toggleLang = document.getElementById("toggleLang");

let currentLang = "pt";

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  if (currentTheme === "dark") {
    rootHtml.setAttribute("data-theme", "light");
  } else {
    rootHtml.setAttribute("data-theme", "dark");
  }

  if (toggleTheme) {
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
  }
}

if (toggleTheme) {
  toggleTheme.addEventListener("click", changeTheme);
}

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;

    if (accordionItem) {
      accordionItem.classList.toggle("active");
    }
  });
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

const en = {
  "nav-Home": "Home",
  "nav-Projetos": "Projects",
  "nav-Sobre": "About",
  "nav-Contato": "Contact",

  "hero-title": "<b>Creative Solutions &</b> Full Stack Development",
  "hero-sub":
    "Lavinia Ribeiro, Campina Grande - PB, Full-Stack Developer & Cloud Architect",
  "hero-btn": "View Projects",
  "tech-title": "Knowledge in the main market technologies",
  "projects-h2": "Projects",

  "page-projects-title": "Projects",
  "page-projects-desc":
    "Some of the projects I developed during my academic and professional journey, covering various technologies and development approaches.",

  "less-desc":
    "LessStress is a project aimed at offering accessible and welcoming psychological support, connecting patients and psychology professionals in a safe and intuitive digital environment.",
  "less-li-0": "User login and authentication;",
  "less-li-1": "Patient and psychologist registration;",
  "less-li-2": "Online appointment scheduling;",
  "less-li-3": "Appointment history and notes;",
  "less-li-4": "Interface adapted for desktop and mobile.",

  "locket-desc":
    "A website inspired by Madison Beer's album Locket, designed to offer an immersive, fluid, and modern experience, connecting users to the album in a fully personalized way.",
  "locket-li-0": "Authentication with user registration and login;",
  "locket-li-1": "Profile editing with bio and custom photo;",
  "locket-li-2": "Favorite songs management per user;",
  "locket-li-3": "API integration for data consumption and submission;",
  "locket-li-4": "Responsive interface inspired by the album.",

  "ohtroca-desc":
    "OhTroca is an app created to facilitate McDonald's toy trading, connecting users in a practical, interactive, and fun way to complete their collections easily.",
  "ohtroca-li-0": "Fictional brand for toy collectors;",
  "ohtroca-li-1": "Personal collection registration and management;",
  "ohtroca-li-2": "Intuitive interface to facilitate trades between users;",
  "ohtroca-li-3": "Chat for direct negotiation between users;",
  "ohtroca-li-4": "User rating system.",

  "skyerate-desc":
    "Full Stack platform for rating movies, books, series, music, games, and anime, offering authentication and a rating system to share reviews and discover new content.",
  "skyerate-li-0": "Registration and login with JWT authentication;",
  "skyerate-li-1": "CRUD for different types of media;",
  "skyerate-li-2": "Rating and favorites system;",
  "skyerate-li-3": "Personalized profiles and followers;",
  "skyerate-li-4": "GraphQL API integrated with React.",

  "mochiplush-desc":
    "MochiPlush is a fictional plush toy store created to offer a modern, intuitive, and enjoyable experience, featuring a responsive interface that provides simple, fluid, and accessible navigation.",
  "mochiplush-li-0": "Fictional store for collectible plush toys;",
  "mochiplush-li-1": "Catalog organized by categories and collections;",
  "mochiplush-li-2": "Favorites, cart, and checkout system;",
  "mochiplush-li-3": "Modern, intuitive, and responsive interface;",
  "mochiplush-li-4": "Developed with React and Tailwind CSS.",

  "btn-previa": "Preview",
  "btn-repo": "Repository",
  "btn-ver-todos": "View All Projects",

  "about-h2": "About me",
  "about-p":
    "I am a Full Stack Developer and aspiring Cloud Architect, currently studying Information Systems at Unifacisa, with experience in web development, back-end development, cloud computing, and design. I enjoy turning ideas into fully developed projects, exploring new technologies, and learning through hands-on experience. In 2024, I was recognized as a NASA Space Apps Global Nominee and, together with my team, won 3rd place in the local competition. In 2026, I had the opportunity to become a Google Student Ambassador, expanding my experience with technology, community, and innovation.",
  "about-lang": "English: Intermediate",
  "btn-conectar": "Connect with Me",
  "btn-curriculo": "RESUME",

  "formacao-h3": "Education",
  "formacao-h4": "Information Systems",
  "formacao-data": "Feb 2024 - Present",
  "formacao-inst": "UNIFACISA",
  "formacao-grau": "Undergraduate",

  "exp-h3": "Experience",

  "gemini-h4": "Google Gemini Student Ambassador",
  "gemini-data": "Aug 2026 - Dec 2026",
  "gemini-empresa": "Google",
  "gemini-desc":
    "Participation in the Google Student Ambassador Program 2026, an educational community that connects students from across Brazil to exchange experiences and practical knowledge about Google Gemini and artificial intelligence (AI).",
  "gemini-li-0":
    "Participation in a practical digital training and leadership journey;",
  "gemini-li-1":
    "Sharing experiences and practical knowledge about Google Gemini;",
  "gemini-li-2":
    "Connecting and collaborating with students from different regions of Brazil;",
  "gemini-li-3":
    "Promoting knowledge about artificial intelligence within the community.",

  "cloud-h4": "Cloud Architect (Intern)",
  "cloud-data": "Jan 2026 - Mar 2026",
  "cloud-empresa": "Voler Cloud",
  "cloud-desc":
    "Cloud Architecture internship, supporting the design and implementation of cloud solutions using Google Cloud Platform (GCP).",
  "cloud-li-0": "Cloud architecture definition;",
  "cloud-li-1": "GCP service selection and configuration;",
  "cloud-li-2": "Working with networking, security and cloud best practices;",
  "cloud-li-3": "Cost and performance optimization;",
  "cloud-li-4": "Technical documentation preparation.",

  "cert-h3": "Certifications",

  "acc-0":
    "Galactic Problem Solver - NASA International Space Apps Challenge 2024",
  "acc-1": "Build Infrastructure with Terraform on Google Cloud Skill Badge",
  "acc-2": "Develop Your Google Cloud Network Skill Badge",
  "acc-3": "BootCamp Microsoft AI for Tech - GitHub Copilot",
  "acc-4": "Scrum Fundamentals Certified",
  "acc-5": "Entrepreneurship Program - Ignite 2025",
  "acc-6": "AI Builder with Lovable",
  "acc-7": "Information Technology Security",
  "acc-8": "Fundamentals of Intelligent Sensing Platforms for Industry",
  "acc-9": "Career Essentials in Cybersecurity by Microsoft and LinkedIn",

  "contact-h2": "Contact",
  "contact-p":
    "I'm available for services and new connections. Contact me via email and connect with me through my social networks.",

  footer: "© 2026 Lavinia Ribeiro. All rights reserved.",
};

const pt = {
  "nav-Home": "Home",
  "nav-Projetos": "Projetos",
  "nav-Sobre": "Sobre",
  "nav-Contato": "Contato",

  "hero-title": "<b>Soluções Criativas &</b> Desenvolvimento Full Stack",
  "hero-sub":
    "Lavinia Ribeiro, Campina Grande - PB, Desenvolvedora Full-Stack & Arquiteta de Cloud",
  "hero-btn": "Ver Projetos",
  "tech-title": "Conhecimento nas principais tecnologias do mercado",
  "projects-h2": "Projetos",

  "page-projects-title": "Projetos",
  "page-projects-desc":
    "Alguns dos projetos que desenvolvi durante minha trajetória acadêmica e profissional, abrangendo diferentes tecnologias e abordagens de desenvolvimento.",

  "less-desc":
    "O LessStress é um projeto voltado para oferecer apoio psicológico acessível e acolhedor, conectando pacientes e profissionais da área de psicologia em um ambiente digital seguro e intuitivo.",
  "less-li-0": "Login e autenticação de usuário;",
  "less-li-1": "Cadastro de paciente e psicólogo;",
  "less-li-2": "Agendamento de consultas online;",
  "less-li-3": "Histórico de consultas e anotações;",
  "less-li-4": "Interface adaptada para desktop e mobile.",

  "locket-desc":
    "Locket é um site inspirado no álbum Locket da Madison Beer, desenvolvido para oferecer uma experiência imersiva, fluida e moderna, conectando os usuários ao álbum de forma personalizada.",
  "locket-li-0": "Autenticação com registro e login de usuários;",
  "locket-li-1": "Edição de perfil com bio e foto personalizada;",
  "locket-li-2": "Gerenciamento de músicas favoritas por usuário;",
  "locket-li-3": "Integração com API para consumo e envio de dados;",
  "locket-li-4": "Interface responsiva inspirada no álbum.",

  "ohtroca-desc":
    "O OhTroca é um aplicativo criado para facilitar a troca de brinquedos do McDonald's, conectando usuários de forma prática, interativa e divertida para completar suas coleções.",
  "ohtroca-li-0": "Marca fictícia para colecionadores de brinquedos;",
  "ohtroca-li-1": "Cadastro e gerenciamento de coleção pessoal;",
  "ohtroca-li-2": "Interface intuitiva para facilitar trocas entre usuários;",
  "ohtroca-li-3": "Chat para negociação direta entre usuários;",
  "ohtroca-li-4": "Sistema de avaliações entre usuários.",

  "skyerate-desc":
    "Plataforma Full Stack para avaliações de filmes, livros, séries, músicas, jogos e animes, oferecendo autenticação e sistema de avaliações para compartilhar opiniões e descobrir novos conteúdos.",
  "skyerate-li-0": "Cadastro e login com autenticação JWT;",
  "skyerate-li-1": "CRUD de diferentes tipos de mídia;",
  "skyerate-li-2": "Sistema de avaliações e favoritos;",
  "skyerate-li-3": "Perfis personalizados e seguidores;",
  "skyerate-li-4": "API GraphQL integrada ao React.",

  "mochiplush-desc":
    "O MochiPlush é uma loja fictícia de pelúcias desenvolvida para oferecer uma experiência de compra moderna, intuitiva e agradável por meio de uma interface responsiva e de fácil navegação.",
  "mochiplush-li-0": "Loja fictícia de pelúcias colecionáveis;",
  "mochiplush-li-1": "Catálogo organizado por categorias e coleções;",
  "mochiplush-li-2": "Sistema de favoritos, carrinho e checkout;",
  "mochiplush-li-3": "Interface moderna, intuitiva e responsiva;",
  "mochiplush-li-4": "Desenvolvido com React e Tailwind CSS.",

  "btn-previa": "Prévia",
  "btn-repo": "Repositório",
  "btn-ver-todos": "Ver Todos os Projetos",

  "about-h2": "Sobre mim",
  "about-p":
    "Sou Full Stack Developer e Cloud Architect em formação, estudante de Sistemas de Informação na Unifacisa, com experiência em desenvolvimento web, back-end, cloud e design. Gosto de transformar ideias em projetos completos, explorar novas tecnologias e aprender na prática. Em 2024, fui reconhecida como NASA Space Apps Global Nominee e conquistei, junto com minha equipe, o 3º lugar na competição local. Em 2026, tive a oportunidade de me tornar Embaixadora Estudantil do Google, ampliando minha experiência com tecnologia, comunidade e inovação.",
  "about-lang": "Inglês: Intermediário",
  "btn-conectar": "CONECTE-SE COMIGO",
  "btn-curriculo": "CURRÍCULO",

  "formacao-h3": "Formação",
  "formacao-h4": "Sistemas De Informação",
  "formacao-data": "Fev 2024 - Atualmente",
  "formacao-inst": "UNIFACISA",
  "formacao-grau": "Graduação",

  "exp-h3": "Experiências",

  "gemini-h4": "Embaixadora Estudantil do Google Gemini",
  "gemini-data": "Ago 2026 - Dez 2026",
  "gemini-empresa": "Google",
  "gemini-desc":
    "Participação no Programa Estudantes Embaixadores do Google 2026, uma comunidade educacional que conecta estudantes de todo o país para trocar experiências e aprendizados práticos sobre o Google Gemini e inteligência artificial (IA).",
  "gemini-li-0":
    "Participação em uma jornada prática de capacitação digital e liderança;",
  "gemini-li-1":
    "Compartilhamento de experiências e aprendizados sobre o Google Gemini;",
  "gemini-li-2":
    "Conexão e colaboração com estudantes de diferentes regiões do Brasil;",
  "gemini-li-3":
    "Disseminação de conhecimentos sobre inteligência artificial na comunidade.",

  "cloud-h4": "Arquiteta de Cloud (Estágio)",
  "cloud-data": "Jan 2026 - Mar 2026",
  "cloud-empresa": "Voler Cloud",
  "cloud-desc":
    "Estágio em Arquitetura de Cloud, com suporte ao design e à implementação de soluções em nuvem utilizando a Google Cloud Platform (GCP).",
  "cloud-li-0": "Definição de arquiteturas em nuvem;",
  "cloud-li-1": "Seleção e configuração de serviços GCP;",
  "cloud-li-2": "Atuação com redes, segurança e boas práticas de cloud;",
  "cloud-li-3": "Otimização de custos e performance;",
  "cloud-li-4": "Elaboração de documentação técnica.",

  "cert-h3": "Certificações",

  "acc-0":
    "Galactic Problem Solver - Nasa International Space Apps Challenge 2024",
  "acc-1": "Build Infrastructure with Terraform on Google Cloud Skill Badge",
  "acc-2": "Develop Your Google Cloud Network Skill Badge",
  "acc-3": "BootCamp Microsoft AI for Tech - GitHub Copilot",
  "acc-4": "Scrum Fundamentals Certified",
  "acc-5": "Programa de Empreendedorismo - Ignite 2025",
  "acc-6": "AI Builder com Lovable",
  "acc-7": "Segurança em Tecnologia da Informação",
  "acc-8":
    "Fundamentos das Plataformas de Sensoriamento Inteligente para Indústria",
  "acc-9": "Career Essentials in Cybersecurity by Microsoft and Linkedln",

  "contact-h2": "Contato",
  "contact-p":
    "Estou disponível para serviços e novas conexões. Contate-me via e-mail e conecte-se comigo através das minhas redes sociais.",

  footer: "© 2026 Lavinia Ribeiro. Todos os direitos reservados.",
};

function q(selector) {
  return document.querySelector(selector);
}

function qAll(selector) {
  return document.querySelectorAll(selector);
}

function set(el, key, html = false) {
  if (!el) return;

  const map = currentLang === "en" ? en : pt;

  if (map[key] === undefined) return;

  if (html) {
    el.innerHTML = map[key];
  } else {
    el.textContent = map[key];
  }
}

function applyNavigationTranslation() {
  qAll(".menu__text").forEach((el) => {
    const currentText = el.textContent.trim().toLowerCase();
    const key = Object.keys(pt).find(
      (item) =>
        item.startsWith("nav-") && pt[item].toLowerCase() === currentText,
    );

    const englishKey = Object.keys(en).find(
      (item) =>
        item.startsWith("nav-") && en[item].toLowerCase() === currentText,
    );

    if (currentLang === "en") {
      if (key && en[key]) {
        el.textContent = en[key];
      }
    } else {
      if (englishKey && pt[englishKey]) {
        el.textContent = pt[englishKey];
      }
    }
  });
}

function applyProjectTranslation(card, prefix) {
  if (!card) return;

  set(card.querySelector(".card__description"), `${prefix}-desc`);

  card.querySelectorAll(".card__item").forEach((item, index) => {
    set(item, `${prefix}-li-${index}`);
  });

  const previaButton = card.querySelector(".card__buttons .btn--primary");

  if (previaButton) {
    const textElement = previaButton.querySelector("span");

    if (textElement) {
      set(textElement, "btn-previa");
    } else {
      const translatedText =
        currentLang === "en" ? en["btn-previa"] : pt["btn-previa"];
      previaButton.childNodes.forEach((child) => {
        if (
          child.nodeType === Node.TEXT_NODE &&
          child.textContent.trim() !== ""
        ) {
          child.textContent = translatedText;
        }
      });
    }
  }

  const buttons = card.querySelectorAll(".card__buttons .btn");
  const repoButton = Array.from(buttons).find(
    (button) => !button.classList.contains("btn--primary"),
  );

  if (repoButton) {
    const repoSpan = repoButton.querySelector("span");

    if (repoSpan) {
      set(repoSpan, "btn-repo");
    } else {
      const translatedText =
        currentLang === "en" ? en["btn-repo"] : pt["btn-repo"];
      repoButton.childNodes.forEach((child) => {
        if (
          child.nodeType === Node.TEXT_NODE &&
          child.textContent.trim() !== ""
        ) {
          child.textContent = translatedText;
        }
      });
    }
  }
}

function applyProjectArticlesTranslation() {
  qAll(".project-card").forEach((card) => {
    const title = card.querySelector("h2");
    const description = card.querySelector("p");

    if (!title || !description) return;

    const titleText = title.textContent.trim().toLowerCase();

    if (titleText.includes("less")) {
      set(description, "less-desc");
    } else if (titleText.includes("locket")) {
      set(description, "locket-desc");
    } else if (titleText.includes("ohtroca")) {
      set(description, "ohtroca-desc");
    } else if (titleText.includes("skyerate")) {
      set(description, "skyerate-desc");
    } else if (titleText.includes("mochi")) {
      set(description, "mochiplush-desc");
    }
  });
}

function applyTranslation() {
  applyNavigationTranslation();

  set(q(".main__content1 h1"), "hero-title", true);
  set(q(".main__content1 > p"), "hero-sub");
  set(q(".main__content1 .btn span"), "hero-btn");

  set(q(".technologies h2"), "tech-title");

  set(q(".projects > h2"), "projects-h2");

  set(q(".projects-header h1"), "page-projects-title");
  set(q(".projects-header p"), "page-projects-desc");

  const indexCards = {
    less: q("#card-less-stress"),
    locket: q("#card-locket"),
    ohtroca: q("#card-ohtroca"),
    skyerate: q("#card-skyerate"),
    mochiplush: q("#card-mochiplush"),
  };

  Object.entries(indexCards).forEach(([prefix, card]) => {
    applyProjectTranslation(card, prefix);
  });

  applyProjectArticlesTranslation();

  set(q(".projects > a .btn span"), "btn-ver-todos");

  set(q(".about__description h2"), "about-h2");
  set(q(".about__description > p"), "about-p");
  set(q(".about__description .about__icons span"), "about-lang");

  const descriptionButtons = qAll(".description__buttons .btn span");

  if (descriptionButtons[0]) {
    set(descriptionButtons[0], "btn-conectar");
  }

  if (descriptionButtons[1]) {
    set(descriptionButtons[1], "btn-curriculo");
  }

  const row1 = q(".col1 .row1");

  if (row1) {
    set(row1.querySelector("h3"), "formacao-h3");
    set(row1.querySelector("h4"), "formacao-h4");

    const spans = row1.querySelectorAll(".about__icons span");

    if (spans[0]) {
      set(spans[0], "formacao-data");
    }

    if (spans[1]) {
      set(spans[1], "formacao-inst");
    }

    if (spans[2]) {
      set(spans[2], "formacao-grau");
    }
  }

  const row2 = q(".col1 .row2");

  if (row2) {
    set(row2.querySelector("h3"), "exp-h3");

    const experienceTitles = row2.querySelectorAll(":scope > h4");

    if (experienceTitles[0]) {
      set(experienceTitles[0], "gemini-h4");
    }

    if (experienceTitles[1]) {
      set(experienceTitles[1], "cloud-h4");
    }

    const iconGroups = row2.querySelectorAll(".about__icons");

    if (iconGroups[0]) {
      set(iconGroups[0].querySelector("span"), "gemini-data");
    }

    if (iconGroups[1]) {
      set(iconGroups[1].querySelector("span"), "gemini-empresa");
    }

    if (iconGroups[2]) {
      set(iconGroups[2].querySelector("span"), "cloud-data");
    }

    if (iconGroups[3]) {
      set(iconGroups[3].querySelector("span"), "cloud-empresa");
    }

    const descriptions = row2.querySelectorAll(":scope > span");

    if (descriptions[0]) {
      set(descriptions[0], "gemini-desc");
    }

    if (descriptions[1]) {
      set(descriptions[1], "cloud-desc");
    }

    const lists = row2.querySelectorAll(":scope > ul.about__list");

    if (lists[0]) {
      lists[0].querySelectorAll(".about__item").forEach((item, index) => {
        set(item, `gemini-li-${index}`);
      });
    }

    if (lists[1]) {
      lists[1].querySelectorAll(".about__item").forEach((item, index) => {
        set(item, `cloud-li-${index}`);
      });
    }
  }

  const col2 = q(".col2");

  if (col2) {
    set(col2.querySelector("h3"), "cert-h3");

    const certificates = col2.querySelectorAll(".accordion__header span");

    certificates.forEach((span, index) => {
      const key = `acc-${index}`;

      if (currentLang === "en") {
        if (en[key] !== undefined) {
          span.textContent = en[key];
        }
      } else {
        if (pt[key] !== undefined) {
          span.textContent = pt[key];
        }
      }
    });
  }

  set(q(".contact h2"), "contact-h2");
  set(q(".contact > p"), "contact-p");
  set(q("footer p"), "footer");
}

if (toggleLang) {
  applyTranslation();

  toggleLang.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";

    toggleLang.style.transition = "opacity 0.2s";
    toggleLang.style.opacity = "0.4";

    setTimeout(() => {
      toggleLang.style.opacity = "1";
    }, 200);

    applyTranslation();
  });
}

const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownBtn && dropdownMenu) {
  dropdownBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownMenu.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (
      !dropdownBtn.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("active");
    }
  });
}
