const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark"
    ? rootHtml.setAttribute("data-theme", "light")
    : rootHtml.setAttribute("data-theme", "dark");

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive
      ? accordionItem.classList.remove("active")
      : accordionItem.classList.add("active");
  });
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

const toggleLang = document.getElementById("toggleLang");
let currentLang = "pt";

const en = {
  "hero-title": "<b>Creative Solutions &</b> Full Stack Development",
  "hero-sub": "Lavinia Ribeiro, Campina Grande - PB, Full-Stack Developer & Cloud Architect",
  "hero-btn": "View Projects",
  "tech-title": "Knowledge in the main market technologies",
  "projects-h2": "Projects",
  "less-desc": "LessStress is a project aimed at offering accessible and welcoming psychological support, connecting patients and psychology professionals in a safe and intuitive digital environment.",
  "less-li-0": "User login and authentication;",
  "less-li-1": "Patient and psychologist registration;",
  "less-li-2": "Online appointment scheduling;",
  "less-li-3": "Appointment history and notes;",
  "less-li-4": "Interface adapted for desktop and mobile.",
  "locket-desc": "Locket is a web application inspired by Madison Beer's Locket album.",
  "locket-li-0": "Authentication with user registration and login;",
  "locket-li-1": "Profile editing with bio and custom photo;",
  "locket-li-2": "Favorite songs management per user;",
  "locket-li-3": "API integration for data consumption and submission;",
  "locket-li-4": "Responsive interface inspired by the album.",
  "ohtroca-desc": "OhTroca is an app created to facilitate McDonald's toy trading. It offers users a practical, interactive and fun way to complete their collections.",
  "ohtroca-li-0": "Fictional brand for toy collectors;",
  "ohtroca-li-1": "Personal collection registration and management;",
  "ohtroca-li-2": "Intuitive interface to facilitate trades between users;",
  "ohtroca-li-3": "Chat for direct negotiation between users;",
  "ohtroca-li-4": "User rating system.",
  "skyerate-desc": "Full stack platform for media reviews such as movies, books, series, music and anime.",
  "skyerate-li-0": "Registration and login with JWT authentication;",
  "skyerate-li-1": "CRUD for different types of media;",
  "skyerate-li-2": "Rating and favorites system;",
  "skyerate-li-3": "Personalized profiles and followers;",
  "skyerate-li-4": "GraphQL API integrated with React.",
  "btn-previa": "Preview",
  "btn-repo": "Repository",
  "btn-ver-todos": "View All Projects",
  "about-h2": "About me",
  "about-p": "I'm Lavinia Ribeiro. My interest started early, but it was in high school that I truly dove into the world of technology, exploring web development and design with tools like After Effects and Photoshop. I'm currently studying Information Systems at Unifacisa and seek to combine creativity and logic in technology projects.",
  "about-lang": "English: Intermediate",
  "btn-conectar": "Connect with Me",
  "btn-curriculo": "RESUME",
  "formacao-h3": "Education",
  "formacao-h4": "Information Systems",
  "formacao-data": "Feb 2024 - Present",
  "formacao-inst": "UNIFACISA",
  "formacao-grau": "Undergraduate",
  "exp-h3": "Experience",
  "exp-h4": "Cloud Architect",
  "exp-data": "Jan 2026 - Mar 2026",
  "exp-empresa": "Voler Cloud",
  "exp-desc": "Cloud Architecture internship, supporting the design and implementation of cloud solutions using Google Cloud Platform (GCP).",
  "exp-li-0": "Cloud architecture definition;",
  "exp-li-1": "GCP service selection and configuration;",
  "exp-li-2": "Working with networking, security and cloud best practices;",
  "exp-li-3": "Cost and performance optimization;",
  "exp-li-4": "Technical documentation preparation.",
  "cert-h3": "Certifications",
  "acc-0": "Galactic Problem Solver - Nasa International Space Apps Challenge 2024",
  "acc-1": "Build Infrastructure with Terraform on Google Cloud Skill Badge",
  "acc-2": "Develop Your Google Cloud Network Skill Badge",
  "acc-3": "BootCamp Microsoft AI for Tech - GitHub Copilot",
  "acc-4": "Scrum Fundamentals Certified",
  "acc-5": "Entrepreneurship Program - Ignite 2025",
  "acc-6": "Information Technology Security",
  "acc-7": "Fundamentals of Intelligent Sensing Platforms for Industry",
  "acc-8": "Career Essentials in Cybersecurity by Microsoft and LinkedIn",
  "contact-h2": "Contact",
  "contact-p": "I'm available for services and new connections. Contact me via email and connect with me through my social networks.",
  "footer": "© 2026 Lavinia Ribeiro. All rights reserved.",
  "nav-Projetos": "Projects",
  "nav-Sobre": "About",
  "nav-Contato": "Contact",
};

const pt = {};

function q(sel) { return document.querySelector(sel); }
function qAll(sel) { return document.querySelectorAll(sel); }

function save(key, el, html = false) {
  if (!el) return;
  pt[key] = html ? el.innerHTML : el.textContent.trim();
}

function set(el, key, html = false) {
  if (!el) return;
  const map = currentLang === "en" ? en : pt;
  if (map[key] === undefined) return;
  if (html) el.innerHTML = map[key];
  else el.textContent = map[key];
}

function initTranslation() {
  qAll(".menu__text").forEach((el) => {
    pt["nav-" + el.textContent.trim()] = el.textContent.trim();
  });

  save("hero-title", q(".main__content1 h1"), true);
  save("hero-sub", q(".main__content1 > p"));
  save("hero-btn", q(".main__content1 .btn span"));

  save("tech-title", q(".technologies h2"));

  save("projects-h2", q(".projects > h2"));

  const cards = {
    less: q("#card-less-stress"),
    locket: q("#card-locket"),
    ohtroca: q("#card-ohtroca"),
    skyerate: q("#card-skyerate"),
  };
  Object.entries(cards).forEach(([prefix, card]) => {
    if (!card) return;
    save(prefix + "-desc", card.querySelector(".card__description"));
    card.querySelectorAll(".card__item").forEach((li, i) => save(prefix + "-li-" + i, li));
    const btns = card.querySelectorAll(".card__buttons .btn span");
    if (btns[0]) save("btn-previa", btns[0]);
    if (btns[1]) save("btn-repo", btns[1]);
  });

  save("btn-ver-todos", q(".projects > a .btn span"));

  save("about-h2", q(".about__description h2"));
  save("about-p", q(".about__description > p"));
  save("about-lang", q(".about__description .about__icons span"));

  const descBtns = qAll(".description__buttons .btn span");
  if (descBtns[0]) save("btn-conectar", descBtns[0]);
  if (descBtns[1]) save("btn-curriculo", descBtns[1]);

  const row1 = q(".col1 .row1");
  if (row1) {
    save("formacao-h3", row1.querySelector("h3"));
    save("formacao-h4", row1.querySelector("h4"));
    const spans = row1.querySelectorAll(".about__icons span");
    if (spans[0]) save("formacao-data", spans[0]);
    if (spans[1]) save("formacao-inst", spans[1]);
    if (spans[2]) save("formacao-grau", spans[2]);
  }

  const row2 = q(".col1 .row2");
  if (row2) {
    save("exp-h3", row2.querySelector("h3"));
    save("exp-h4", row2.querySelector("h4"));
    const spans = row2.querySelectorAll(".about__icons span");
    if (spans[0]) save("exp-data", spans[0]);
    if (spans[1]) save("exp-empresa", spans[1]);
    save("exp-desc", row2.querySelector(":scope > span"));
    row2.querySelectorAll(".about__item").forEach((li, i) => save("exp-li-" + i, li));
  }

  const col2 = q(".col2");
  if (col2) {
    save("cert-h3", col2.querySelector("h3"));
    col2.querySelectorAll(".accordion__header span").forEach((sp, i) => {
      pt["acc-" + i] = sp.textContent.trim();
    });
  }

  save("contact-h2", q(".contact h2"));
  save("contact-p", q(".contact > p"));

  save("footer", q("footer p"));
}

function applyTranslation() {
  qAll(".menu__text").forEach((el) => {
    const cur = el.textContent.trim();
    if (currentLang === "en") {
      if (en["nav-" + cur]) el.textContent = en["nav-" + cur];
    } else {
      if (pt["nav-" + cur]) {
        el.textContent = pt["nav-" + cur];
      } else {
        const ptKey = Object.keys(en).find((k) => k.startsWith("nav-") && en[k] === cur);
        if (ptKey) el.textContent = pt[ptKey];
      }
    }
  });

  set(q(".main__content1 h1"), "hero-title", true);
  set(q(".main__content1 > p"), "hero-sub");
  set(q(".main__content1 .btn span"), "hero-btn");

  set(q(".technologies h2"), "tech-title");

  set(q(".projects > h2"), "projects-h2");

  const cards = {
    less: q("#card-less-stress"),
    locket: q("#card-locket"),
    ohtroca: q("#card-ohtroca"),
    skyerate: q("#card-skyerate"),
  };
  Object.entries(cards).forEach(([prefix, card]) => {
    if (!card) return;
    set(card.querySelector(".card__description"), prefix + "-desc");
    card.querySelectorAll(".card__item").forEach((li, i) => set(li, prefix + "-li-" + i));
    const btns = card.querySelectorAll(".card__buttons .btn span");
    if (btns[0]) set(btns[0], "btn-previa");
    if (btns[1]) set(btns[1], "btn-repo");
  });

  set(q(".projects > a .btn span"), "btn-ver-todos");

  set(q(".about__description h2"), "about-h2");
  set(q(".about__description > p"), "about-p");
  set(q(".about__description .about__icons span"), "about-lang");

  const descBtns = qAll(".description__buttons .btn span");
  if (descBtns[0]) set(descBtns[0], "btn-conectar");
  if (descBtns[1]) set(descBtns[1], "btn-curriculo");

  const row1 = q(".col1 .row1");
  if (row1) {
    set(row1.querySelector("h3"), "formacao-h3");
    set(row1.querySelector("h4"), "formacao-h4");
    const spans = row1.querySelectorAll(".about__icons span");
    if (spans[0]) set(spans[0], "formacao-data");
    if (spans[1]) set(spans[1], "formacao-inst");
    if (spans[2]) set(spans[2], "formacao-grau");
  }

  
  const row2 = q(".col1 .row2");
  if (row2) {
    set(row2.querySelector("h3"), "exp-h3");
    set(row2.querySelector("h4"), "exp-h4");
    const spans = row2.querySelectorAll(".about__icons span");
    if (spans[0]) set(spans[0], "exp-data");
    if (spans[1]) set(spans[1], "exp-empresa");
    set(row2.querySelector(":scope > span"), "exp-desc");
    row2.querySelectorAll(".about__item").forEach((li, i) => set(li, "exp-li-" + i));
  }

  const col2 = q(".col2");
  if (col2) {
    set(col2.querySelector("h3"), "cert-h3");
    col2.querySelectorAll(".accordion__header span").forEach((sp, i) => {
      const map = currentLang === "en" ? en : pt;
      if (map["acc-" + i] !== undefined) sp.textContent = map["acc-" + i];
    });
  }

  
  set(q(".contact h2"), "contact-h2");
  set(q(".contact > p"), "contact-p");

  set(q("footer p"), "footer");
}

if (toggleLang) {
  initTranslation();
  toggleLang.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    toggleLang.style.transition = "opacity 0.2s";
    toggleLang.style.opacity = "0.4";
    setTimeout(() => { toggleLang.style.opacity = "1"; }, 200);
    applyTranslation();
  });
}