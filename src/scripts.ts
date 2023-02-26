// Accordions toggle
const accordions = document.querySelectorAll(
  '[data-toggle="collapse"]'
) as NodeListOf<HTMLElement>;

const toggleSection = (section: HTMLElement) => {
  section.classList.toggle("hidden");
  if (!section.classList.contains("hidden")) {
    section.style.maxHeight = section.scrollHeight + "px";
  } else {
    section.style.maxHeight = "";
  }
};

const handleAccordionClick = (accordion: HTMLElement) => {
  const section = document.querySelector(
    accordion.dataset.target
  ) as HTMLElement;
  toggleSection(section);
};

const subScribeAccordion = () => {
  for (const accordion of accordions) {
    accordion.addEventListener("click", () => handleAccordionClick(accordion));
  }
};

const unsubScribeAccordion = () => {
  for (const accordion of accordions) {
    const section = document.querySelector(
      accordion.dataset.target
    ) as HTMLElement;
    section.classList.remove("show");
    accordion.removeEventListener("click", () =>
      handleAccordionClick(accordion)
    );
  }
};

// Toggle Search in Header
const toggleSearchHeader = document.querySelector(
  '[data-toggle="header-search"]'
) as HTMLElement;
const handleToggleSearchHeader = () => {
  const headerLogo = document.querySelector(".header-logo");
  const headerSearchbar = document.querySelector(".header-searchbar");
  headerLogo.classList.toggle("hidden");
  headerSearchbar.classList.toggle("hidden");
  headerSearchbar.classList.toggle("toggled-mobile");
};
toggleSearchHeader.addEventListener("click", handleToggleSearchHeader);

// General window resize
const windowResize = () => {
  if (window.innerWidth < 768) {
    subScribeAccordion();
  } else {
    unsubScribeAccordion();
  }
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

// Closing stuff
window.addEventListener("click", function (e) {
  const headerSearchbar = document.querySelector(".header-searchbar");
  const headerLogo = document.querySelector(".header-logo");

  if (
    !e.target.dataset.toggle &&
    headerSearchbar.classList.contains("toggled-mobile") &&
    !e.target.matches(".header-searchbar, .header-searchbar *")
  ) {
    headerSearchbar.classList.remove("toggled-mobile");
    headerSearchbar.classList.add("hidden");
    headerLogo.classList.remove("hidden");
  } else {
  }
});
