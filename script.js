// Typing animation in hero section
const phrases = [
  "Innovating One Line at a Time",
  "Empowering businesses through tech",
  "Creative Web & Software Solutions"
];
let currentPhrase = 0;
let charIndex = 0;
const typingSpeed = 100;
const heroTitle = document.getElementById("hero-title");

function typePhrase() {
  if (charIndex < phrases[currentPhrase].length) {
    heroTitle.textContent += phrases[currentPhrase].charAt(charIndex);
    charIndex++;
    setTimeout(typePhrase, typingSpeed);
  } else {
    setTimeout(() => {
      heroTitle.textContent = "";
      charIndex = 0;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      typePhrase();
    }, 2000);
  }
}
if (heroTitle) {
  typePhrase();
}

// Smooth scrolling for nav links
document.querySelectorAll("nav a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Back to top button
const backToTop = document.createElement("button");
backToTop.innerHTML = "⬆";
backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 20px;
  background: #1F6FEB;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  display: none;
  cursor: pointer;
  z-index: 999;
`;
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Menu toggle for mobile nav
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("active");
}
