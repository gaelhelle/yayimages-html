// Accordions toggle
const accordions = document.querySelectorAll(
  '[data-toggle="collapse"]'
) as NodeListOf<HTMLElement>;

const toggleSection = (section: HTMLElement) => {
  const accordion = document.querySelector(`[data-target="#${section.id}"]`);
  const accordionIndicator = accordion.querySelector(".accordion-arrow");

  accordion.classList.toggle("open");
  accordionIndicator.classList.toggle("rotate-180");

  section.style.opacity = "0";
  section.classList.toggle("hidden");
  section.classList.toggle("duration-500");
  section.classList.toggle("transition");

  if (!section.classList.contains("hidden")) {
    section.style.maxHeight = section.scrollHeight + "px";
    section.style.opacity = "1";
  } else {
    section.style.maxHeight = "";
    section.style.opacity = "";
  }
};

const handleAccordionClick = (
  event: MouseEvent & { currentTarget: HTMLElement }
) => {
  const section = document.querySelector(
    event.currentTarget.dataset.target
  ) as HTMLElement;

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
    const section = document.querySelector(
      accordion.dataset.target
    ) as HTMLElement;
    section.classList.remove("show");
    accordion.removeEventListener("click", handleAccordionClick);
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
  overlay.classList.toggle("hidden");
  menuMobile.classList.toggle("hidden");
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
const itemElements = document.querySelectorAll(
  ".item-element"
) as NodeListOf<HTMLElement>;
const handleToggleToBasket = (
  event: MouseEvent & { currentTarget: HTMLElement }
) => {
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
window.addEventListener(
  "click",
  function (event: MouseEvent & { target: HTMLElement }) {
    const headerSearchbar = document.querySelector(".header-searchbar");
    const headerLogo = document.querySelector(".header-logo");

    if (
      !event.target.dataset.toggle &&
      headerSearchbar.classList.contains("toggled-mobile") &&
      !event.target.matches(".header-searchbar, .header-searchbar *")
    ) {
      headerSearchbar.classList.remove("toggled-mobile");
      headerSearchbar.classList.add("hidden");
      headerLogo.classList.remove("hidden");
    } else {
    }
  }
);

const loadMobile = () => {
  if (window.innerWidth < 1024) {
    document.querySelector(".page-with-sidebar").classList.toggle("open");
  }
};

const init = () => {
  loadMobile();
  windowResize();
};

init();
