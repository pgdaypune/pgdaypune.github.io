// Mobile nav toggle. ~12 lines, no library. Keyboard + Escape, closes on link tap.
(function () {
  var btn = document.querySelector(".nav__toggle");
  var menu = document.getElementById("navmenu");
  if (!btn || !menu) return;
  function set(open) {
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("open", open);
  }
  btn.addEventListener("click", function () {
    set(btn.getAttribute("aria-expanded") !== "true");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") set(false);
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") set(false);
  });
})();
