// In-house typing effect for psql prompts. When a .psql .q query scrolls into
// view it types out its SQL, character by character, with a blinking caret.
//
// Progressive enhancement: the full query text is always in the DOM (no-JS /
// SEO). An inline <head> script adds `qtype` to <html> ONLY when we're going to
// animate — i.e. not reduced-motion and IntersectionObserver is available — and
// the CSS hides `.psql .q` under `html.qtype`. So if this never runs, the text
// just shows normally; nothing is hidden.
(function () {
  if (!document.documentElement.classList.contains("qtype")) return;
  var qs = document.querySelectorAll(".psql .q");
  if (!qs.length) return;

  function type(el) {
    var full = el.textContent;
    el.textContent = "";
    el.classList.add("is-active", "caret");
    var i = 0;
    (function step() {
      i++;
      el.textContent = full.slice(0, i);
      if (i < full.length) {
        setTimeout(step, 16 + Math.random() * 42); // light human jitter
      } else {
        setTimeout(function () { el.classList.remove("caret"); }, 550);
      }
    })();
  }

  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        io.unobserve(entries[i].target);
        type(entries[i].target);
      }
    }
  }, { threshold: 0.6 });

  for (var i = 0; i < qs.length; i++) io.observe(qs[i]);
})();
