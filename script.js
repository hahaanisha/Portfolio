document.addEventListener("DOMContentLoaded", function () {
  let t = document.querySelector(".typewriter"),
    e = ["Student", "Full Stack Developer", "Designer", "ML Enthusiast"],
    n = 0,
    $ = 0,
    r = "",
    i = !1;
  !(function l() {
    (r = e[n]),
      i ? $-- : $++,
      (t.textContent = r.substring(0, $)),
      i || $ !== r.length
        ? i && 0 === $ && ((i = !1), (n = (n + 1) % e.length))
        : setTimeout(() => (i = !0), 1e3),
      setTimeout(l, i ? 50 : 100);
  })();
});
