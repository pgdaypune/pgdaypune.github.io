// Content-gallery arrows (slider shortcode). Native scroll-snap does the work;
// the arrows nudge the rail by roughly one slide. Self-scoped to each [data-gallery]
// wrapper so several galleries on one page (e.g. Event Pics + Speakers) stay independent.
(function () {
  document.querySelectorAll("[data-gallery]").forEach(function (g) {
    var rail = g.querySelector("[data-gallery-rail]");
    if (!rail) return;
    function step() {
      var s = rail.querySelector(".gslide");
      return (s ? s.getBoundingClientRect().width : 300) + 14; // slide width + gap
    }
    var prev = g.querySelector("[data-gallery-prev]");
    var next = g.querySelector("[data-gallery-next]");
    if (prev) prev.addEventListener("click", function () {
      rail.scrollBy({ left: -step(), behavior: "smooth" });
    });
    if (next) next.addEventListener("click", function () {
      rail.scrollBy({ left: step(), behavior: "smooth" });
    });
  });
})();
