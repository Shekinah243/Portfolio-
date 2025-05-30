document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.style.opacity = 0;
    header.style.transform = "translateY(-20px)";
    setTimeout(() => {
      header.style.transition = "all 1s ease";
      header.style.opacity = 1;
      header.style.transform = "translateY(0)";
    }, 100);
  
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      section.style.opacity = 0;
      section.style.transform = "translateY(20px)";
      setTimeout(() => {
        section.style.transition = "all 0.8s ease";
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }, 300 + index * 200);
    });
  });
  // Exemple d’animation JS pour un bouton clignotant (si besoin)
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.animated-button');
    btn.addEventListener('mouseover', () => {
      btn.style.transform = "scale(1.1)";
    });
    btn.addEventListener('mouseout', () => {
      btn.style.transform = "scale(1)";
    });
  });