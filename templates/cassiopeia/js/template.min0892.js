(Joomla = window.Joomla || {}),
  (function (e, t) {
    "use strict";
    function l(e) {
      for (
        var l = (e && e.target ? e.target : t).querySelectorAll(
            "fieldset.btn-group"
          ),
          o = 0;
        o < l.length;
        o++
      ) {
        var n = l[o];
        if (!0 === n.getAttribute("disabled")) {
          n.style.pointerEvents = "none";
          for (var i = n.querySelectorAll(".btn"), r = 0; r < i.length; r++)
            i[r].classList.add("disabled");
        }
      }
    }
    t.addEventListener("DOMContentLoaded", function (e) {
      l(e);
      var o = t.getElementById("back-top");
      if (o) {
        function n() {
          t.body.scrollTop > 20 || t.documentElement.scrollTop > 20
            ? o.classList.add("visible")
            : o.classList.remove("visible");
        }
        n(),
          (window.onscroll = function () {
            n();
          }),
          o.addEventListener("click", function (e) {
            e.preventDefault(), window.scrollTo(0, 0);
          });
      }
      [].slice
        .call(t.head.querySelectorAll('link[rel="lazy-stylesheet"]'))
        .forEach(function (e) {
          e.rel = "stylesheet";
        });
    }),
      t.addEventListener("joomla:updated", l);
  })(Joomla, document);
