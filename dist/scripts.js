// Accordions toggle
const accordions = document.querySelectorAll('[data-toggle="collapse"]');
const toggleSection = (section) => {
    const accordion = document.querySelector(`[data-target="#${section.id}"]`);
    accordion.classList.toggle("open");
    section.style.opacity = "0";
    section.classList.toggle("hidden");
    section.classList.toggle("duration-500");
    section.classList.toggle("transition");
    if (!section.classList.contains("hidden")) {
        section.style.maxHeight = section.scrollHeight + "px";
        section.style.opacity = "1";
    }
    else {
        section.style.maxHeight = "";
        section.style.opacity = "";
    }
};
const handleAccordionClick = (event) => {
    const section = document.querySelector(event.currentTarget.dataset.target);
    toggleSection(section);
};
const subScribeAccordion = () => {
    unsubScribeAccordion();
    for (const accordion of accordions) {
        accordion.addEventListener("click", handleAccordionClick);
    }
};
const unsubScribeAccordion = () => {
    for (const accordion of accordions) {
        const section = document.querySelector(accordion.dataset.target);
        section.classList.remove("show");
        accordion.removeEventListener("click", handleAccordionClick);
    }
};
// Toggle Search in Header
const toggleSearchHeader = document.querySelector('[data-toggle="header-search"]');
const handleToggleSearchHeader = () => {
    const headerLogo = document.querySelector(".header-logo");
    const headerSearchbar = document.querySelector(".header-searchbar");
    headerLogo.classList.toggle("hidden");
    headerSearchbar.classList.toggle("hidden");
    headerSearchbar.classList.toggle("toggled-mobile");
};
toggleSearchHeader.addEventListener("click", handleToggleSearchHeader);
// General window resize
let resizeTimer;
const windowResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        subScribeAccordion();
        // if (window.innerWidth < 768) {
        //   subScribeAccordionMobile();
        // } else {
        //   subScribeAccordionMobile();
        // }
    }, 200);
};
windowResize();
window.addEventListener("resize", windowResize);
// Menu Mobile
const handleToggleMenuMobile = () => {
    const overlay = document.querySelector("#overlay");
    const menuMobile = document.querySelector("#menu-mobile");
    overlay.classList.toggle("hidden");
    menuMobile.classList.toggle("hidden");
};
const buttonsMenuMobile = document.querySelectorAll(".toggle-menu-mobile");
for (const buttonMenuMobile of buttonsMenuMobile) {
    buttonMenuMobile.addEventListener("click", handleToggleMenuMobile);
}
// Closing sidebar search
const sidebarButton = document.querySelector(".toggle-filter-sidebar");
const handleToggleSidebarSearch = () => {
    const sidebar = document.querySelector(".sidebar-search");
    sidebar.classList.toggle("closed");
};
sidebarButton.addEventListener("click", handleToggleSidebarSearch);
// Closing stuff
window.addEventListener("click", function (event) {
    const headerSearchbar = document.querySelector(".header-searchbar");
    const headerLogo = document.querySelector(".header-logo");
    if (!event.target.dataset.toggle &&
        headerSearchbar.classList.contains("toggled-mobile") &&
        !event.target.matches(".header-searchbar, .header-searchbar *")) {
        headerSearchbar.classList.remove("toggled-mobile");
        headerSearchbar.classList.add("hidden");
        headerLogo.classList.remove("hidden");
    }
    else {
    }
});
