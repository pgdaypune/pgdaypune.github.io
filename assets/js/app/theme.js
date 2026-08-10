// Light/dark theme toggle. Dark is the default; the pre-paint script in head
// applies a saved "light" choice. Here we wire the button + persist the choice.
(function () {
  var btn = document.querySelector(".nav__theme");
  if (!btn) return;
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  var colors = { dark: "#0e1116", light: "#ffffff" };

  function current() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function apply(theme, animate) {
    if (animate) {
      root.classList.add("theme-anim");
      window.setTimeout(function () {
        root.classList.remove("theme-anim");
      }, 300);
    }
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    btn.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
    if (meta) meta.setAttribute("content", colors[theme]);
  }

  // Sync the button label / theme-color with whatever the head script applied.
  apply(current(), false);

  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    apply(next, true);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
})();
