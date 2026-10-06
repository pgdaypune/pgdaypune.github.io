// Slowly auto-scroll the home schedule list while it is on screen, pause at the
// end, then restart from the top. Pauses on hover/focus/touch so visitors can
// read or scroll by hand. Only acts when the list actually overflows (desktop,
// see .sched-list max-height) and skips prefers-reduced-motion.
(function () {
  var list = document.querySelector(".schedule .sched-list");
  if (!list || !("IntersectionObserver" in window)) return;
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var SPEED = 35,      // px per second
    END_PAUSE = 2000,  // ms to rest at the bottom before restarting
    START_PAUSE = 1200,
    visible = false,
    held = false,
    raf = 0,
    last = 0,
    pos = 0,
    waitUntil = 0;

  function frame(ts) {
    raf = 0;
    if (!visible) return;
    raf = requestAnimationFrame(frame);
    var dt = last ? Math.min(ts - last, 100) : 0;
    last = ts;
    var max = list.scrollHeight - list.clientHeight;
    if (held || max <= 0 || ts < waitUntil) return;
    if (Math.abs(list.scrollTop - pos) > 1) pos = list.scrollTop; // user moved it
    pos += (SPEED * dt) / 1000;
    if (pos >= max) {
      list.scrollTop = max;
      pos = 0;
      waitUntil = ts + END_PAUSE;
      setTimeout(function () {
        if (!held) { list.scrollTop = 0; waitUntil = performance.now() + START_PAUSE; }
      }, END_PAUSE);
      return;
    }
    list.scrollTop = pos;
  }
  function sync() {
    if (visible && !raf) { last = 0; raf = requestAnimationFrame(frame); }
  }
  function hold(v) { return function () { held = v; if (!v) { pos = list.scrollTop; sync(); } }; }

  new IntersectionObserver(function (e) {
    visible = e[0].isIntersecting;
    sync();
  }, { threshold: 0.4 }).observe(list);

  list.addEventListener("mouseenter", hold(true));
  list.addEventListener("mouseleave", hold(false));
  list.addEventListener("focusin", hold(true));
  list.addEventListener("focusout", hold(false));
  list.addEventListener("touchstart", hold(true), { passive: true });
  list.addEventListener("touchend", function () { setTimeout(hold(false), 3000); }, { passive: true });
})();
