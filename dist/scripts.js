// Accordions toggle
const accordions = document.querySelectorAll('[data-toggle="collapse"]');
const toggleSection = (section) => {
    const accordion = document
        .querySelector(`[data-target="#${section.id}"]`)
        .closest(".accordion-item");
    accordion.classList.toggle("open");
    section.style.opacity = "0";
    if (!accordion.classList.contains("hidden")) {
        section.style.opacity = "1";
    }
    else {
        section.style.maxHeight = "";
        section.style.opacity = "";
    }
    if (section.id === "filter-color") {
        setTimeout(function () {
            Coloris({
                alpha: false,
                inline: true,
                parent: ".container-color",
                el: ".input-color",
                wrap: true,
                theme: "default",
            });
        }, 500);
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
if (toggleSearchHeader) {
    toggleSearchHeader.addEventListener("click", handleToggleSearchHeader);
}
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
window.addEventListener("resize", windowResize);
// Menu Mobile
const handleToggleMenuMobile = () => {
    const overlay = document.querySelector("#overlay");
    const menuMobile = document.querySelector("#menu-mobile");
    const body = document.querySelector("body");
    overlay.classList.toggle("hidden");
    menuMobile.classList.toggle("hidden");
    body.classList.toggle("overflow-y-hidden");
};
const buttonsMenuMobile = document.querySelectorAll(".toggle-menu-mobile");
for (const buttonMenuMobile of buttonsMenuMobile) {
    buttonMenuMobile.addEventListener("click", handleToggleMenuMobile);
}
// Closing sidebar search
const sidebarButtons = document.querySelectorAll(".toggle-filter-sidebar");
const handleToggleSidebarSearch = () => {
    const container = document.querySelector(".page-with-sidebar");
    container.classList.toggle("open");
};
for (const sidebarButton of sidebarButtons) {
    sidebarButton.addEventListener("click", handleToggleSidebarSearch);
}
// Add to folder element
const itemElements = document.querySelectorAll(".item-element");
const handleToggleToBasket = (event) => {
    const element = event.currentTarget.closest(".item-element");
    element.classList.toggle("selected");
};
for (const itemElement of itemElements) {
    const button = itemElement.querySelector(".folder-item");
    if (button) {
        button.addEventListener("click", handleToggleToBasket);
    }
}
// Closing stuff
window.addEventListener("click", function (event) {
    const headerSearchbar = document.querySelector(".header-searchbar");
    const headerLogo = document.querySelector(".header-logo");
    if (!headerSearchbar || !headerLogo)
        return;
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
// Text Space filter
const handleTextSpace = (event) => {
    const target = event.currentTarget;
    target.classList.toggle("active");
};
const buttonsTextSpace = document.querySelectorAll(".text-space-item");
for (const buttonTextSpace of buttonsTextSpace) {
    buttonTextSpace.addEventListener("click", handleTextSpace);
}
const loadMobile = () => {
    const pageSidebarContainer = document.querySelector(".page-with-sidebar");
    if (window.innerWidth < 1024 && pageSidebarContainer) {
        pageSidebarContainer.classList.toggle("open");
    }
};
// Menu Mobile
const handleToggleMenuSignup = () => {
    const overlay = document.querySelector("#overlay");
    const menuSignup = document.querySelector("#menu-signup");
    const menuMobile = document.querySelector("#menu-mobile");
    if (!menuMobile.classList.contains("hidden")) {
        menuMobile.classList.add("hidden");
        overlay.classList.toggle("hidden");
    }
    const body = document.querySelector("body");
    overlay.classList.toggle("hidden");
    menuSignup.classList.toggle("hidden");
    body.classList.toggle("overflow-y-hidden");
};
const buttonsMenuSignup = document.querySelectorAll(".toggle-menu-signup");
for (const buttonMenuSignup of buttonsMenuSignup) {
    buttonMenuSignup.addEventListener("click", handleToggleMenuSignup);
}
const init = () => {
    loadMobile();
    windowResize();
};
init();
