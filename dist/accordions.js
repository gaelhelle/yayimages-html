const accordions = document.querySelectorAll('[data-toggle="collapse"]');
console.log(accordions);
const toggleSection = (section) => {
    section.classList.toggle("show");
};
const handleAccordionClick = (accordion) => {
    const section = document.querySelector(accordion.dataset.target);
    toggleSection(section);
};
const setupAccordion = () => {
    if (window.innerWidth < 768) {
        for (const accordion of accordions) {
            accordion.addEventListener("click", () => handleAccordionClick(accordion));
        }
    }
    else {
        for (const accordion of accordions) {
            const section = document.querySelector(accordion.dataset.target);
            section.classList.remove("show");
            accordion.removeEventListener("click", () => handleAccordionClick(accordion));
        }
    }
};
setupAccordion();
window.addEventListener("resize", setupAccordion);
