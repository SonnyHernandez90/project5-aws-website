// main.js - placeholder for now (not anymore )
// main.js — stylesheet toggle with persistence across pages
(function () {
  const styleLink = document.getElementById("site-style");
  const toggleButton = document.getElementById("styleToggle");
  if (!styleLink || !toggleButton) return;

  const STYLE_A = "css/style-a.css";
  const STYLE_B = "css/style-b.css";
  const STORAGE_KEY = "site-style";

  // Apply saved style on page load
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === STYLE_A || saved === STYLE_B) {
    styleLink.setAttribute("href", saved);
  } else {
    styleLink.setAttribute("href", STYLE_A);
    localStorage.setItem(STORAGE_KEY, STYLE_A);
  }

  // Toggle on click
  toggleButton.addEventListener("click", function () {
    const current = styleLink.getAttribute("href");
    const next = current === STYLE_A ? STYLE_B : STYLE_A;
    styleLink.setAttribute("href", next);
    localStorage.setItem(STORAGE_KEY, next);
  });
})();
