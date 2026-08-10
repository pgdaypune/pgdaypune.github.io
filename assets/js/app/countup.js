// Count stat numbers up from 0 to their value when the .stats block scrolls into
// view (home + about). Preserves suffixes (e.g. "+"), skips non-numeric ("TBA"),
// and respects prefers-reduced-motion. No library.
(function () {
  var groups = document.querySelectorAll(".stats");
  if (!groups.length) return;
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function prep(g) {
    g.querySelectorAll(".stat__n").forEach(function (el) {
      var m = el.textContent.trim().match(/^(\d[\d,]*)(.*)$/);
      if (!m) return; // non-numeric (e.g. TBA) — leave as-is
      el.dataset.cuTarget = m[1].replace(/,/g, "");
      el.dataset.cuSuffix = m[2];
      el.textContent = "0" + m[2];
    });
  }
  function run(g) {
    g.querySelectorAll(".stat__n").forEach(function (el) {
      if (el.dataset.cuTarget === undefined) return;
      var target = parseInt(el.dataset.cuTarget, 10),
        suffix = el.dataset.cuSuffix || "",
        dur = 2000,
        s = null;
      function step(ts) {
        if (!s) s = ts;
        var p = Math.min((ts - s) / dur, 1),
          e = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.textContent = Math.round(e * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
    });
  }

  groups.forEach(prep);
  if (!("IntersectionObserver" in window)) {
    groups.forEach(run);
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          run(en.target);
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  groups.forEach(function (g) {
    io.observe(g);
  });
})();
