document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the copyright year.
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile navigation menu.
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuToggle && navigation) {
    function closeMenu() {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("open");
    }

    function openMenu() {
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "Close navigation");
      navigation.classList.add("open");
    }

    menuToggle.addEventListener("click", () => {
      const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close the menu after a navigation link is selected.
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close the mobile menu when clicking outside it.
    document.addEventListener("click", (event) => {
      if (
        !menuToggle.contains(event.target) &&
        !navigation.contains(event.target)
      ) {
        closeMenu();
      }
    });

    // Close the menu with the Escape key.
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        menuToggle.getAttribute("aria-expanded") === "true"
      ) {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Reset navigation when switching to desktop layout.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 650) {
        closeMenu();
      }
    });
  }
});