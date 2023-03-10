// Accordions toggle
const accordions = document.querySelectorAll(
  '[data-toggle="collapse"]'
) as NodeListOf<HTMLElement>;

const toggleSection = (section: HTMLElement) => {
  const accordion = document
    .querySelector(`[data-target="#${section.id}"]`)
    .closest(".accordion-item");

  accordion.classList.toggle("open");
  section.style.opacity = "0";

  if (!accordion.classList.contains("hidden")) {
    section.style.opacity = "1";
  } else {
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
if (toggleSearchHeader) {
  toggleSearchHeader.addEventListener("click", handleToggleSearchHeader);
}

// General window resize
let resizeTimer;

const windowResize = () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    subScribeAccordion();

    const footer = document.querySelector("#page-footer");

    if (window.innerWidth < 768) {
      for (const accordionFooter of footer.querySelectorAll(
        ".accordion-item"
      )) {
        accordionFooter.classList.remove("open");
      }
    } else {
      for (const accordionFooter of footer.querySelectorAll(
        ".accordion-item"
      )) {
        accordionFooter.classList.add("open");
      }
    }
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

    if (!headerSearchbar || !headerLogo) return;

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

// Text Space filter
const handleTextSpace = (
  event: MouseEvent & { currentTarget: HTMLElement }
) => {
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

const handleInputRadioChange = (event) => {
  const radioId = event.currentTarget.id;
  const radioName = event.currentTarget.name;
  const checked = event.currentTarget.checked;

  if (radioName === "subscription") {
    const stepper = document.querySelector(".plan-stepper");
    if (stepper) {
      stepper.querySelector('[data-step="0"]').classList.add("hidden");
      stepper.querySelector('[data-step="1"]').classList.remove("hidden");
    }
  }

  const radioGroupItems = document.querySelectorAll(
    `input[type='radio'][name='${radioName}']`
  );

  if (radioGroupItems) {
    for (const radioGroupItem of radioGroupItems) {
      const parent = radioGroupItem.parentElement.querySelector("label");
      if (parent) {
        parent.classList.remove("active");

        const children = parent.querySelectorAll("label");
        if (children) {
          for (const child of children) {
            child.classList.remove("active");
          }
        }
      }
    }
  }

  if (checked) {
    const label = document.querySelector(`label[for="${radioId}"]`);
    console.log(label);
    if (!label) return;
    label.classList.add("active");

    /*
    const grandParent = label.parentNode.closest("label");
    if (!grandParent) return;

    const grandParentName = grandParent.htmlFor;
    console.log(grandParentName);

    const grandParentRadio = document.querySelector(
      `input[type="radio"][value="${grandParentName}"]`
    );
    console.log(grandParentName);
    grandParentRadio.checked = true;
    // grandParentRadio.dispatchEvent(new Event("change"));
    */
  }
};

const initInputMask = () => {
  const inputCC = document.getElementById("input-cc-number");
  if (inputCC) {
    const cc_number = IMask(inputCC, { mask: "0000 0000 0000 0000" });
  }

  const inputExpiration = document.getElementById("input-cc-expiration");
  if (inputExpiration) {
    const cc_expiration = IMask(inputExpiration, {
      mask: "MM{/}YY",
      groups: {
        YY: new IMask.MaskedPattern.Group.Range([0, 99]),
        MM: new IMask.MaskedPattern.Group.Range([1, 12]),
      },
    });
  }

  const inputCVC = document.getElementById("input-cc-cvc");
  if (inputCVC) {
    var securitycode_mask = new IMask(inputCVC, {
      mask: "0000",
    });
  }
};

const inputRadios = document.querySelectorAll("input[type='radio']");
for (const inputRadio of inputRadios) {
  inputRadio.addEventListener("change", handleInputRadioChange);
}

const init = () => {
  loadMobile();
  windowResize();
  initInputMask();
};

init();
