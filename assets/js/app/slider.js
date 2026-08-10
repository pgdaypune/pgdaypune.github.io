// Events rail arrows. Native scroll-snap does the work; the arrows just nudge by
// one card width + gap. Scoped to each rail's section so multiple rails are safe.
(function () {
  document.querySelectorAll("[data-rail]").forEach(function (rail) {
    var scope = rail.closest("section") || document;
    var step = 314; // 300px card + 14px gap
    var prev = scope.querySelector("[data-rail-prev]");
    var next = scope.querySelector("[data-rail-next]");
    if (prev) prev.addEventListener("click", function () {
      rail.scrollBy({ left: -step, behavior: "smooth" });
    });
    if (next) next.addEventListener("click", function () {
      rail.scrollBy({ left: step, behavior: "smooth" });
    });
  });
})();
