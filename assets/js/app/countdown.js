// Data-driven countdown. Reads the target from the DOM <time datetime> (no date
// duplicated in JS) and writes digits straight into cached element refs every
// second — never re-renders a container, so it can't cancel the events rail's
// in-flight smooth scroll. One timer drives both the hero cells and the
// elephant banner's .days-to-go (same day count, two write targets).
(function () {
  var t = document.querySelector("[data-countdown]");
  if (!t) return;
  var target = new Date(t.getAttribute("datetime")).getTime();
  var d = document.querySelector("[data-days]"),
    h = document.querySelector("[data-hrs]"),
    m = document.querySelector("[data-min]"),
    s = document.querySelector("[data-sec]"),
    ele = document.querySelector(".days-to-go"),
    id;
  function p(n) { return (n < 10 ? "0" : "") + n; }
  function tick() {
    var r = target - Date.now();
    if (r <= 0) {
      if (d) d.textContent = "0";
      if (h) h.textContent = "00";
      if (m) m.textContent = "00";
      if (s) s.textContent = "00";
      if (ele) ele.textContent = "";
      clearInterval(id);
      return;
    }
    var days = Math.floor(r / 864e5);
    if (d) d.textContent = days;
    if (h) h.textContent = p(Math.floor(r / 36e5) % 24);
    if (m) m.textContent = p(Math.floor(r / 6e4) % 60);
    if (s) s.textContent = p(Math.floor(r / 1e3) % 60);
    if (ele) ele.innerHTML = days > 0
      ? "<b>" + days + "</b> " + (days === 1 ? "day" : "days") + " to go!"
      : "Event Today!";
  }
  tick();
  id = setInterval(tick, 1000);
})();
