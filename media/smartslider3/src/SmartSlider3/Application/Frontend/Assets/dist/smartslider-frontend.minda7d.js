(function (t) {
  var i = t;
  i._N2 = i._N2 || {
    _r: [],
    _d: [],
    r: function () {
      this._r.push(arguments);
    },
    d: function () {
      this._d.push(arguments);
    },
  };
  var s = t.document,
    h = s.documentElement,
    n,
    o,
    r = t.setTimeout,
    a = t.clearTimeout,
    c = i._N2,
    u = t.requestAnimationFrame,
    f = s.createElement.bind(s),
    l = function () {
      return f("div");
    },
    d = Object.assign,
    m = function (t, i) {
      for (var s = Object(t), h = 1; h < arguments.length; h++) {
        var n = arguments[h];
        if (null !== n && n !== o)
          for (var r in n)
            null !== n[r] &&
              Object.prototype.hasOwnProperty.call(n, r) &&
              ("object" == typeof n[r] &&
              (n[r].constructor === Object || Array.isArray(n[r]))
                ? (Array.isArray(n[r])
                    ? (s[r] = [])
                    : ("object" != typeof s[r] || Array.isArray(s[r])) &&
                      (s[r] = {}),
                  (s[r] = m(s[r], n[r])))
                : (s[r] = n[r]));
      }
      return s;
    },
    v = function (t, i) {
      return t.getAttribute(i);
    },
    p = function (t, i, s) {
      t.setAttribute(i, s);
    },
    b = function (t, i) {
      for (var s in i) p(t, s, i[s]);
    },
    y = function (t, i) {
      t.removeAttribute(i);
    },
    w = function (t, i, s) {
      t.forEach(function (t) {
        p(t, i, s);
      });
    },
    g = function (t, i) {
      t.forEach(function (t) {
        b(t, i);
      });
    },
    S = function (t, i) {
      t.forEach(function (t) {
        F(t, i);
      });
    },
    I = function (t, i) {
      t.forEach(function (t) {
        N(t, i);
      });
    },
    A = function (t, i) {
      return t.dataset[i];
    },
    P = function (t, i, s) {
      t.dataset[i] = s;
    },
    k = function (t, i) {
      delete t.dataset[i];
    },
    O = function (t, s) {
      return i.getComputedStyle(t).getPropertyValue(s);
    },
    C = function (t, i, s) {
      t.style.setProperty(i, s);
    },
    x = function (t, i) {
      for (var s in i) C(t, s, i[s]);
    },
    L = function (t, i) {
      t.style.removeProperty(i);
    },
    M = function (t, i) {
      i.forEach(function (i) {
        L(t, i);
      });
    },
    D = function (t, i, s) {
      t.forEach(function (t) {
        C(t, i, s);
      });
    },
    E = function (t, i) {
      t.forEach(function (t) {
        x(t, i);
      });
    },
    _ = function (t, i) {
      t.forEach(function (t) {
        L(t, i);
      });
    },
    R = function (t) {
      t && t.parentNode && t.parentNode.removeChild(t);
    },
    T = function (t) {
      t.forEach(function (t) {
        R(t);
      });
    },
    F = function (t, i) {
      t.classList.add(i);
    },
    N = function (t, i) {
      t.classList.remove(i);
    },
    z = function (t, i) {
      return t.dispatchEvent(i);
    },
    W = function (t, i, s) {
      return (s = d({ bubbles: !0, cancelable: !0 }, s)), z(t, new Event(i, s));
    },
    Y = function (t, i) {
      return z(t, new Event(i, { bubbles: !1, cancelable: !1 }));
    },
    Z = function (t, i, s) {
      return z(
        t,
        new CustomEvent(i, { bubbles: !1, cancelable: !1, detail: s })
      );
    },
    V = function (t, i, s, h) {
      t.removeEventListener(i, s, h);
    },
    B = function (t) {
      t.forEach(function (t) {
        t();
      }),
        t.splice(0, t.length);
    },
    U = function (t, i, s, h) {
      return (
        (h = h || {}),
        t.addEventListener(i, s, h),
        t.removeEventListener.bind(t, i, s, h)
      );
    },
    j = function (t, i, s, h) {
      (h = h || {}), t.addEventListener(i, s, h);
    },
    G = function (t, i, s) {
      t.addEventListener(i, s, { once: !0 });
    },
    X = function (t, i, s) {
      t.ssEvent &&
        t.ssEvent[i] &&
        t.ssEvent[i].forEach(function (t) {
          t(s);
        });
    },
    H = function (t, i, s) {
      t.ssEvent || (t.ssEvent = {}),
        t.ssEvent[i] || (t.ssEvent[i] = []),
        t.ssEvent[i].push(s);
    },
    q = function (t, i, s) {
      return H(t, i, s), Q.bind(t, i, s);
    },
    Q = function (t, i) {
      if (this.ssEvent && this.ssEvent[t])
        for (var s = this.ssEvent[t], h = s.length - 1; h >= 0; h--)
          s[h] === i && s.splice(h, 1);
    },
    J = function () {
      return h.scrollTop;
    },
    K = function (t) {
      h.scrollTop = t;
    },
    tt = function () {
      return h.scrollLeft;
    },
    it = function (t) {
      return t.getBoundingClientRect().width;
    },
    st = function (t) {
      return t.getBoundingClientRect().height;
    },
    ht = function (t) {
      return s.scrollingElement.scrollTop + t.getBoundingClientRect().top;
    },
    nt = function (t) {
      "complete" === s.readyState || "interactive" === s.readyState
        ? t()
        : Document &&
          Document.prototype &&
          Document.prototype.addEventListener &&
          Document.prototype.addEventListener !== s.addEventListener
        ? Document.prototype.addEventListener.call(s, "DOMContentLoaded", t)
        : s.addEventListener("DOMContentLoaded", t);
    },
    et = function (t, i, s, h) {
      if (Math.abs(t.scrollTop - i) < 1) h && h();
      else {
        s = Math.max(300, s || 300);
        var n = t.scrollTop,
          o = i - n,
          r = performance.now(),
          a = function (i) {
            var c = Math.min(1, (i - r) / s);
            c < 0.5 ? (c *= 2 * c) : (c = (4 - 2 * c) * c - 1),
              (t.scrollTop = n + c * o),
              c < 1 ? requestAnimationFrame(a) : h && h();
          };
        a(r);
      }
    },
    ot = function (t, i, h) {
      var n = s.createElementNS("http://www.w3.org/2000/svg", t);
      return i && (at(n, i), h && h.appendChild(n)), n;
    },
    rt = function (t, i, s) {
      t.setAttributeNS(null, i, s);
    },
    at = function (t, i) {
      for (var s in i) rt(t, s, i[s]);
    },
    ct = function (t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    },
    ut =
      navigator.userAgent.indexOf("+http://www.google.com/bot.html") > -1
        ? function (t) {
            t();
          }
        : i.requestIdleCallback ||
          function (t) {
            return r(t, 1);
          },
    ft =
      i.cancelIdleCallback ||
      function (t) {
        a(t);
      };
  function lt(t) {
    var i = s.getElementById(t);
    if (i && i.sheet) {
      var h,
        n = i.sheet;
      for (h = n.cssRules.length - 1; h >= 0; h--)
        n.cssRules[h].selectorText &&
          n.cssRules[h].selectorText.includes("div#n2-ss-") &&
          n.deleteRule(h);
    }
  }
  nt(function () {
    n = s.body;
  }),
    c.d("SmartSliderBackgrounds", function () {
      function t(t) {
        (this.device = null),
          (this.slider = t),
          (this.hasFixed = !1),
          (this.lazyLoad = parseInt(t.parameters.lazyLoad)),
          (this.lazyLoadNeighbor = parseInt(t.parameters.lazyLoadNeighbor)),
          (this.promise = new Promise(
            function (t) {
              this.resolve = t;
            }.bind(this)
          )),
          this.slider.stages.done("Resized", this.onResized.bind(this)),
          this.slider.stages.done(
            "StarterSlide",
            this.onStarterSlide.bind(this)
          );
      }
      return (
        (t.prototype.preLoad = function (t) {
          Promise.all(t).then(this.resolve);
        }),
        (t.prototype.getBackgroundImages = function () {
          for (var t = [], i = 0; i < this.slider.realSlides.length; i++)
            t.push(this.slider.realSlides[i].background);
          return t;
        }),
        (t.prototype.onResized = function () {
          this.onSlideDeviceChanged(this.slider.responsive.getDeviceMode()),
            j(
              this.slider.sliderElement,
              "SliderDevice",
              function (e) {
                this.onSlideDeviceChanged(e.detail.device);
              }.bind(this)
            );
        }),
        (t.prototype.onStarterSlide = function () {
          1 === this.lazyLoad
            ? ((this.preLoadSlides = this.preloadSlidesLazyNeighbor),
              this.preLoad(
                this.preLoadSlides(
                  this.slider.getVisibleSlides(this.slider.currentSlide)
                )
              ))
            : 2 === this.lazyLoad
            ? ((this.preLoadSlides = this._preLoadSlides),
              this.slider.stages.done(
                "SlidesReady",
                function () {
                  c.r("windowLoad", this.preLoadAll.bind(this));
                }.bind(this)
              ),
              this.preLoad(
                this.preLoadSlides(
                  this.slider.getVisibleSlides(this.slider.currentSlide)
                )
              ))
            : ((this.preLoadSlides = this._preLoadSlides),
              this.preLoad(this.preLoadAll())),
            j(
              this.slider.sliderElement,
              "visibleSlidesChanged",
              this.onVisibleSlidesChanged.bind(this)
            );
        }),
        (t.prototype.onVisibleSlidesChanged = function () {
          (1 !== this.lazyLoad && 2 !== this.lazyLoad) ||
            this.preLoadSlides(this.slider.getVisibleSlides());
        }),
        (t.prototype.onSlideDeviceChanged = function (t) {
          this.device = t;
          for (var i = 0; i < this.slider.visibleRealSlides.length; i++)
            this.slider.visibleRealSlides[i].background &&
              this.slider.visibleRealSlides[i].background.onSlideDeviceChanged(
                t
              );
        }),
        (t.prototype.preLoadAll = function () {
          for (var t = [], i = 0; i < this.slider.visibleRealSlides.length; i++)
            t.push(this.slider.visibleRealSlides[i].preLoad());
          return t;
        }),
        (t.prototype._preLoadSlides = function (t) {
          for (var i = [], s = 0; s < t.length; s++) i.push(t[s].preLoad());
          return i;
        }),
        (t.prototype.preloadSlidesLazyNeighbor = function (t) {
          var i = this._preLoadSlides(t);
          if (this.lazyLoadNeighbor)
            for (
              var s = 0, h = t[0].getPrevious(), n = t[t.length - 1].getNext();
              s < this.lazyLoadNeighbor;

            )
              h && (i.push(h.preLoad()), (h = h.getPrevious())),
                n && (i.push(n.preLoad()), (n = n.getNext())),
                s++;
          if (this.slider.stages.resolved("Visible"))
            for (var o = 0; o < i.length; o++) this.slider.m.addPromise(i[o]);
          return i;
        }),
        t
      );
    }),
    lt("litespeed-optm-css-rules"),
    lt("rocket-critical-css"),
    c.d("SmartSliderLoad", function () {
      var t = performance.now();
      function s(t) {
        this.slider = t;
      }
      return (
        (s.prototype.start = function () {
          this.showSlider();
        }),
        (s.prototype.loadLayerImages = function () {
          var t = [];
          return (
            this.slider.sliderElement
              .querySelectorAll(".n2-ss-layers-container")
              .forEach(function (i) {
                c.ImagesLoaded(i), t.push(c.ImagesLoaded(i));
              }),
            Promise.all(t)
          );
        }),
        (s.prototype.showSlider = function () {
          this.slider.stages.done("ResizeFirst", this.stage1.bind(this));
        }),
        (s.prototype.stage1 = function () {
          (this.slider.responsive.isReadyToResize = !0), this.stage2();
        }),
        (s.prototype.stage2 = function () {
          requestAnimationFrame(
            function () {
              this.slider.responsive.doResize(),
                this.slider.finalizeStarterSlide();
              var i = Promise.all([
                  this.slider.backgrounds.promise,
                  this.loadLayerImages(),
                  this.slider.stages.get("Fonts").getPromise(),
                ]).finally(this.stage3.bind(this)),
                s = r(
                  function () {
                    this.slider.m.addPromise(i);
                  }.bind(this),
                  Math.max(
                    1,
                    this.slider.parameters.loadingTime - (performance.now() - t)
                  )
                );
              i.finally(a.bind(null, s));
            }.bind(this)
          );
        }),
        (s.prototype.stage3 = function () {
          this.slider.responsive.doResize(),
            requestAnimationFrame(
              function () {
                this.slider.initLayerAnimations(),
                  this.slider.stages.resolve("LayerAnimations");
              }.bind(this)
            ),
            this.slider.stages.done("LayerAnimations", this.stage4.bind(this));
        }),
        (s.prototype.stage4 = function () {
          this.slider.stages.resolve("BeforeShow"),
            this.slider.widgets.onReady(),
            c.MW.U(
              function () {
                F(this.slider.responsive.alignElement, "n2-ss-align-visible"),
                  F(this.slider.sliderElement, "n2-ss-loaded"),
                  N(this.slider.sliderElement, "n2notransition"),
                  requestAnimationFrame(function () {
                    W(i, "scroll");
                  }),
                  ut(this.slider.startVisibilityCheck.bind(this.slider), {
                    timeout: 2e3,
                  });
              }.bind(this)
            ),
            this.slider.stages.resolve("Show");
        }),
        s
      );
    }),
    c.d("SmartSliderPlugins", function () {
      function t(t) {
        (this.slider = t), (this.plugins = {});
      }
      (t.prototype.add = function (t, i) {
        this.plugins[t] = new i(this.slider);
      }),
        (t.prototype.get = function (t) {
          return this.plugins[t] || !1;
        });
      var i = {},
        s = [];
      return {
        addPlugin: function (t, h) {
          for (var n = 0; n < s.length; n++) s[n].plugins.add(t, h);
          i[t] = h;
        },
        addSlider: function (h) {
          if (h.plugins === o)
            for (var n in ((h.plugins = new t(h)), i)) h.plugins.add(n, i[n]);
          s.push(h);
        },
      };
    }),
    c.d("ScrollTracker", function () {
      function t() {
        (this.started = !1),
          (this.items = []),
          (this.onScrollCallback = this.onScroll.bind(this));
      }
      return (
        (t.prototype.add = function (t, s, n, o) {
          var r = { el: t, mode: s, onVisible: n, onHide: o, state: "unknown" };
          this.items.push(r),
            this._onScroll(r, Math.max(h.clientHeight, i.innerHeight)),
            this.started || this.start();
        }),
        (t.prototype.start = function () {
          this.started ||
            (i.addEventListener("scroll", this.onScrollCallback, {
              capture: !0,
              passive: !0,
            }),
            (this.started = !0));
        }),
        (t.prototype.onScroll = function (e) {
          for (
            var t = Math.max(h.clientHeight, i.innerHeight), s = 0;
            s < this.items.length;
            s++
          )
            this._onScroll(this.items[s], t);
        }),
        (t.prototype._onScroll = function (t, i) {
          var s = t.el.getBoundingClientRect(),
            h = s.height > 0.7 * i,
            n = !0;
          "partly-visible" === t.mode
            ? ((h && (s.bottom < 0 || s.top >= s.height)) ||
                (!h &&
                  (s.bottom - s.height < 0 || s.top - i + s.height >= 0))) &&
              (n = !1)
            : "not-visible" === t.mode &&
              (n = s.top - i < 0 && s.top + s.height > 0),
            !1 === n
              ? "hidden" !== t.state &&
                ("function" == typeof t.onHide && t.onHide(),
                (t.state = "hidden"))
              : "visible" !== t.state &&
                ("function" == typeof t.onVisible && t.onVisible(),
                (t.state = "visible"));
        }),
        new t()
      );
    }),
    c.d("SmartSliderApi", function () {
      function t() {
        (this.sliders = {}), (this.readys = {}), (this.eventListeners = {});
      }
      (t.prototype.makeReady = function (t, i) {
        if (((this.sliders[t] = i), this.readys[t] !== o))
          for (var s = 0; s < this.readys[t].length; s++)
            this.readys[t][s].call(i, i, i.sliderElement);
      }),
        (t.prototype.ready = function (t, i) {
          this.sliders[t] !== o
            ? i.call(
                this.sliders[t],
                this.sliders[t],
                this.sliders[t].sliderElement
              )
            : (this.readys[t] === o && (this.readys[t] = []),
              this.readys[t].push(i));
        }),
        (t.prototype.on = function (t, i) {
          this.eventListeners[t] === o && (this.eventListeners[t] = []),
            this.eventListeners[t].push(i);
        }),
        (t.prototype.off = function (t, i) {
          if (this.eventListeners[t] !== o)
            for (var s = this.eventListeners[t].length - 1; s >= 0; s--)
              this.eventListeners[t][s] === i &&
                this.eventListeners[t].splice(s, 1);
        }),
        (t.prototype.dispatch = function (t, i) {
          if (this.eventListeners[t] !== o && this.eventListeners[t].length)
            for (var s = this.eventListeners[t].length - 1; s >= 0; s--)
              this.eventListeners[t][s] && this.eventListeners[t][s].call(i, i);
        }),
        (t.prototype.trigger = function (t, i, e) {
          e && e.preventDefault();
          var s = i.split(","),
            h = t.closest(".n2-ss-slide,.n2-ss-static-slide"),
            n = h.ssLastEvent;
          t.ssResetEvents ||
            ((t.ssResetEvents = 1),
            j(
              h,
              "layerAnimationPlayIn",
              function (t) {
                t.ssLastEvent = "";
              }.bind(this, h)
            ));
          for (var o = s.length - 1, r = 0; r < s.length; r++)
            s[r] === n && (o = r);
          (i = o === s.length - 1 ? s[0] : s[o + 1]),
            (h.ssLastEvent = i),
            Y(h, "ss" + i);
        }),
        (t.prototype.applyAction = function (e, t) {
          if (this.isClickAllowed(e)) {
            var i = e.currentTarget,
              s = this.findSliderByElement(i);
            s[t].apply(s, Array.prototype.slice.call(arguments, 2));
          }
        }),
        (t.prototype.applyActionWithClick = function (e) {
          this.isClickAllowed(e) &&
            (c._shouldPreventClick ||
              (e.preventDefault(), this.applyAction.apply(this, arguments)));
        }),
        (t.prototype.isClickAllowed = function (e) {
          var t = e.target.closest(
            'a:not([href="#"]), *[onclick]:not([onclick=""]), *[data-n2click]:not([data-n2click=""]), *[data-n2-lightbox]'
          );
          return !t || e.currentTarget === t || !e.currentTarget.contains(t);
        }),
        (t.prototype.openUrl = function (e, t) {
          if (this.isClickAllowed(e)) {
            var s = A(e.currentTarget, "href");
            if (
              (t === o && (t = A(e.currentTarget, "target")), "_blank" === t)
            ) {
              var h = i.open();
              (h.opener = null), (h.location = s);
            } else n2const.setLocation(s);
          }
        }),
        (t.prototype.openUrlKeyDown = function (e, t) {
          ("Enter" !== e.code && "Space" !== e.code) ||
            !e.target.matches(":not(input,select,textarea)") ||
            this.openUrl(e, t);
        });
      var r = {
        focusOffsetTop: 0,
        to: function (t) {
          var n = s.querySelector(
            "html, body, .n2_iframe_application__content"
          );
          "smooth" === O(h, "scroll-behavior")
            ? (n.scrollTop = t)
            : et(n, t, i.n2ScrollSpeed || 400);
        },
        top: function () {
          r.to(0);
        },
        bottom: function () {
          r.to(n.scrollHeight - i.innerHeight);
        },
        before: function (t) {
          r.to(ht(t) - i.innerHeight);
        },
        after: function (t) {
          r.to(ht(t) + st(t) - r.focusOffsetTop);
        },
        next: function (t, i) {
          var h = s.querySelectorAll(i),
            n = -1;
          h.forEach(function (i, s) {
            if (t === i || i.contains(t)) return (n = s + 1), !1;
          }),
            -1 !== n && n <= h.length && r.element(h[n]);
        },
        previous: function (t, i) {
          var h = s.querySelectorAll(i),
            n = -1;
          h.forEach(function (i, s) {
            if (t === i || i.contains(t)) return (n = s - 1), !1;
          }),
            n >= 0 && r.element(h[n]);
        },
        element: function (t) {
          "string" == typeof t && (t = s.querySelector(t)),
            r.to(ht(t) - r.focusOffsetTop);
        },
      };
      return (
        (t.prototype.scroll = function (e, t) {
          if (this.isClickAllowed(e)) {
            e.preventDefault();
            var s = this.findSliderByElement(e.target);
            s &&
              ((r.focusOffsetTop = s.responsive.focusOffsetTop),
              e.currentTarget.blur()),
              r[t].apply(i, Array.prototype.slice.call(arguments, 2));
          }
        }),
        (t.prototype.findSliderByElement = function (t) {
          return (t = t.closest(".n2-ss-slider")) ? t.ss : null;
        }),
        (i.n2ss = new t()),
        i.n2ss
      );
    }),
    c.d("SmartSliderAbstract", function () {
      function t(s, h) {
        if (
          ((this.editor = null),
          (this.elementID = s),
          i[s] && i[s] instanceof t)
        )
          if (i[s].__sliderElement && !n.contains(i[s].__sliderElement));
          else {
            if (i[s].sliderElement === o)
              return void console.error(
                "Slider [#" + s + "] inited multiple times"
              );
            if (n.contains(i[s].sliderElement))
              return void console.error(
                "Slider [#" + s + "] embedded multiple times"
              );
          }
        (this.stages = new c.Stages()),
          c.d(
            "#" + s,
            function () {
              return this;
            }.bind(this)
          ),
          (this.isAdmin = !!h.admin),
          c.SmartSliderPlugins.addSlider(this),
          (this.id = parseInt(s.replace("n2-ss-", ""))),
          (i[s] = this),
          h.isDelayed !== o && h.isDelayed
            ? nt(
                function () {
                  this.waitForExists(s, h);
                }.bind(this)
              )
            : this.waitForExists(s, h);
      }
      (t.prototype.kill = function () {
        this.killed = !0;
        var t = this.sliderElement.closest(".n2-ss-margin");
        t
          ? R(t)
          : c.r(
              "documentReady",
              function () {
                R(this.sliderElement.closest(".n2-ss-margin"));
              }.bind(this)
            );
        var i = this.sliderElement.closest(".n2-ss-align");
        i
          ? R(i)
          : c.r(
              "documentReady",
              function () {
                R(this.sliderElement.closest(".n2-ss-align"));
              }.bind(this)
            ),
          n2ss.makeReady(this.id, this);
      }),
        (t.prototype.waitForExists = function (t, i) {
          new Promise(function (i) {
            var h = function () {
              var n = s.getElementById(t) || s.getElementById(t + "_t");
              n ? i(n) : r(h, 500);
            };
            h();
          }).then(this.onSliderExists.bind(this, t, i));
        });
      var u = [];
      function f(t, s) {
        if (i.IntersectionObserver)
          new IntersectionObserver(
            function (t, i) {
              for (var h = 0; h < t.length; h++) {
                t[h].isIntersecting && (s(), i.disconnect());
              }
            }.bind(this),
            { rootMargin: "200px 0px 200px 0px" }
          ).observe(t);
        else if ((u.push({ element: t, callback: s }), 1 === u.length)) {
          var h = [],
            n = function () {
              for (var t = 1.4 * i.innerHeight, s = 0; s < u.length; s++)
                if (u[s].element.getBoundingClientRect().y < t) {
                  var o = u[s].callback;
                  u.splice(s, 1), s--, o();
                }
              0 === u.length && (B(h), c.SmartSliderApi.off("SliderResize", n));
            };
          h.push(U(i, "resize", n, { capture: !0 })),
            h.push(U(i, "scroll", n, { capture: !0, passive: !0 })),
            c.SmartSliderApi.on("SliderResize", n),
            n();
        }
      }
      return (
        (t.prototype.onSliderExists = function (t, s, h) {
          if (
            ((this.__sliderElement = h),
            (this.v = h.closest(".n2-section-smartslider")),
            (this.m = this.v.querySelector("ss3-loader")),
            this.stages.resolve("Exists"),
            "TEMPLATE" === h.tagName)
          ) {
            var n = h.parentNode;
            n.removeChild(h);
            var o = A(h, "loadingType"),
              a = h.content.children[0],
              u = function () {
                n.appendChild(a),
                  L(this.v, "height"),
                  this.waitForDimension(a, s),
                  Z(i, "n2Rocket", { sliderElement: a });
              }.bind(this);
            "afterOnLoad" === o
              ? c.r("windowLoad", f.bind(this, this.v, u))
              : "afterDelay" === o
              ? r(u, A(h, "loadingDelay"))
              : u();
          } else this.waitForDimension(h, s);
        }),
        (t.prototype.waitForDimension = function (t, i) {
          n2const.isRTL() &&
            x(t, {
              "--ss-fs": "flex-end",
              "--ss-fe": "flex-start",
              "--ss-r": "row-reverse",
              "--ss-rr": "row",
            });
          var s = new ResizeObserver(
            function () {
              s.disconnect(), this.onSliderHasDimension(t, i);
            }.bind(this)
          );
          s.observe(t);
        }),
        (t.prototype.onSliderHasDimension = function (t, i) {
          this.stages.resolve("HasDimension"),
            (this.killed = !1),
            (this.isVisible = !0),
            (this.responsive = !1),
            (this.mainAnimationLastChangeTime = 0),
            (this.currentSlide = null),
            (this.currentRealSlide = null),
            (this.staticSlides = []),
            (this.slides = []),
            (this.visibleRealSlides = []),
            (this.visibleSlides = []),
            (t.ss = this),
            (this.sliderElement = t),
            (this.needBackgroundWrap = !1),
            (this.blockCarousel = !1),
            (this.parameters = d(
              {
                plugins: [],
                admin: !1,
                playWhenVisible: 1,
                playWhenVisibleAt: 0.5,
                perspective: 1e3,
                callbacks: "",
                autoplay: {},
                blockrightclick: !1,
                maintainSession: 0,
                align: "normal",
                controls: {
                  touch: "horizontal",
                  keyboard: !1,
                  mousewheel: !1,
                  blockCarouselInteraction: 1,
                },
                hardwareAcceleration: !0,
                layerMode: {
                  playOnce: 0,
                  playFirstLayer: 1,
                  mode: "skippable",
                  inAnimation: "mainInEnd",
                },
                parallax: {
                  enabled: 0,
                  mobile: 0,
                  horizontal: "mouse",
                  vertical: "mouse",
                  origin: "enter",
                },
                mainanimation: {},
                randomize: { randomize: 0, randomizeFirst: 0 },
                responsive: {},
                lazyload: { enabled: 0 },
                postBackgroundAnimations: !1,
                initCallbacks: !1,
                titles: [],
                descriptions: [],
                alias: { id: 0, smoothScroll: 0, slideSwitch: 0 },
              },
              i
            )),
            this.stages.resolve("Parameters"),
            (this.disabled = {
              layerAnimations: !1,
              layerSplitTextAnimations: !1,
              backgroundAnimations: !1,
              postBackgroundAnimations: !1,
            }),
            n2const.isSamsungBrowser &&
              ((this.disabled.layerSplitTextAnimations = !0),
              (this.disabled.postBackgroundAnimations = !0),
              this.parameters.postBackgroundAnimations &&
                N(this.sliderElement, "n2-ss-feature-post-bg-loader"));
          try {
            eval(this.parameters.callbacks);
          } catch (t) {
            console.error(t);
          }
          n2ss.makeReady(this.id, this),
            this.isAdmin && (this.changeTo = function () {}),
            (this.load = new c.SmartSliderLoad(this)),
            (this.backgrounds = new c.SmartSliderBackgrounds(this)),
            this.initSlides(),
            "function" == typeof this.parameters.initCallbacks &&
              this.parameters.initCallbacks.call(this),
            this.stages.done("VisibleSlides", this.onSlidesReady.bind(this)),
            requestAnimationFrame(this.initUI.bind(this));
        }),
        (t.prototype.onSlidesReady = function () {
          this.stages.resolve("SlidesReady");
        }),
        (t.prototype.initUI = function () {
          for (var t = 0; t < this.realSlides.length; t++)
            this.realSlides[t].setNext(
              this.realSlides[t + 1 > this.realSlides.length - 1 ? 0 : t + 1]
            );
          this.widgets = new c.SmartSliderWidgets(this);
          var s;
          if (
            (new c.UniversalEnter(
              this.sliderElement,
              function (e) {
                e.target.closest(".n2-full-screen-widget") ||
                  (a(s),
                  !0,
                  F(this.sliderElement, "n2-hover"),
                  this.widgets.setState("hover", !0),
                  G(
                    this.sliderElement,
                    "universalleave",
                    function (e) {
                      e.stopPropagation(),
                        (s = r(
                          function () {
                            !1,
                              N(this.sliderElement, "n2-hover"),
                              this.widgets.setState("hover", !1);
                          }.bind(this),
                          1e3
                        ));
                    }.bind(this)
                  ));
              }.bind(this)
            ),
            this.parameters.carousel || this.initNotCarousel(),
            this.initHideArrow(),
            (this.controls = {}),
            this.initMainAnimationWithLayerAnimation(),
            n2Slow ||
              this.isAdmin ||
              !this.parameters.parallax.enabled ||
              (!this.parameters.parallax.mobile &&
                (this.parameters.parallax.mobile || n2const.isMobile)) ||
              this.ready(
                function () {
                  (this.parallax = new c.LayerParallax(
                    this,
                    this.parameters.parallax
                  )),
                    this.parallax.start(this.currentSlide),
                    j(
                      this.sliderElement,
                      "SlideWillChange",
                      function (e) {
                        this.parallax.start(e.detail.targetSlide.slides[0]);
                      }.bind(this)
                    );
                }.bind(this)
              ),
            this.parameters.blockrightclick &&
              j(this.sliderElement, "contextmenu", function (e) {
                e.preventDefault();
              }),
            this.initMainAnimation(),
            this.initResponsiveMode(),
            !this.killed)
          ) {
            if (
              (j(
                this.sliderElement,
                "touchstart",
                function () {
                  N(this.sliderElement, "n2-has-hover");
                }.bind(this),
                { passive: !0, once: !0 }
              ),
              this.initControls(),
              this.stages.resolve("UIReady"),
              !this.isAdmin)
            ) {
              var h = "click";
              this.hasTouch() && (h = "n2click"),
                this.sliderElement
                  .querySelectorAll('[data-n2click="url"]')
                  .forEach(function (t) {
                    j(t, h, function (e) {
                      n2ss.openUrl(e);
                    }),
                      j(t, "mousedown", function (e) {
                        (2 !== e.which && 4 !== e.which) ||
                          (e.preventDefault(), n2ss.openUrl(e, "_blank"));
                      }),
                      j(t, "keydown", function (e) {
                        n2ss.openUrlKeyDown(e);
                      });
                  });
            }
            this.load.start(),
              j(this.sliderElement, "keydown", function (t) {
                ("Space" !== t.code && "Enter" !== t.code) ||
                  (t.target.matches('[role="button"],[tabindex]') &&
                    t.target.matches(":not(a,input,select,textarea)") &&
                    (t.preventDefault(),
                    t.target.click(),
                    Y(t.target, "n2Activate")));
              }),
              j(this.sliderElement, "mouseleave", function (e) {
                e.currentTarget.blur();
              }),
              i.jQuery &&
                i.jQuery(this.sliderElement).find("[tabindex]").off("focus");
          }
        }),
        (t.prototype.initSlides = function () {
          var t,
            i = this.sliderElement.querySelectorAll(".n2-ss-slide");
          for (t = 0; t < i.length; t++)
            this.slides.push(this.createSlide(i[t], t));
          for (t = 0; t < this.slides.length; t++)
            this.slides[t].init(),
              1 == +A(this.slides[t].element, "first") &&
                (this.originalRealStarterSlide = this.slides[t]);
          (this.realSlides = this.slides),
            (this.visibleSlides = this.slides),
            this.initSlidesEnd();
        }),
        (t.prototype.initSlidesEnd = function () {
          this.afterRawSlidesReady(),
            this.stages.resolve("RawSlides"),
            this.randomize(this.realSlides),
            this.stages.resolve("RawSlidesOrdered"),
            this.p();
        }),
        (t.prototype.p = function () {
          for (
            var t = this.sliderElement.querySelectorAll(".n2-ss-static-slide"),
              i = 0;
            i < t.length;
            i++
          )
            this.staticSlides.push(new c.FrontendSliderStaticSlide(this, t[i]));
        }),
        (t.prototype.createSlide = function (t, i) {
          return new c.FrontendSliderSlide(this, t, i);
        }),
        (t.prototype.afterRawSlidesReady = function () {}),
        (t.prototype.h = function (t, i) {
          Z(this.sliderElement, t, i);
        }),
        (t.prototype.publicDispatchEvent = function (t, i) {
          this.h(t, i), c.SmartSliderApi.dispatch(t, this);
        }),
        (t.prototype.getVisibleSlides = function (t) {
          return t === o && (t = this.currentSlide), [t];
        }),
        (t.prototype.getActiveSlides = function (t) {
          return this.getVisibleSlides(t);
        }),
        (t.prototype.findSlideBackground = function (t) {
          return this.sliderElement.querySelector(
            '.n2-ss-slide-background[data-public-id="' +
              A(t.element, "slidePublicId") +
              '"]'
          );
        }),
        (t.prototype.getRealIndex = function (t) {
          return t;
        }),
        (t.prototype.finalizeStarterSlide = function () {
          var t = this.originalRealStarterSlide;
          if (this.isAdmin) this.finalizeStarterSlideComplete(t);
          else if (this.parameters.randomize.randomizeFirst)
            (t =
              this.visibleRealSlides[
                Math.floor(Math.random() * this.visibleRealSlides.length)
              ]),
              this.finalizeStarterSlideComplete(t);
          else if (i["ss" + this.id] !== o)
            "object" == typeof i["ss" + this.id]
              ? i["ss" + this.id].done(
                  this.overrideStarterSlideIndex.bind(this)
                )
              : this.overrideStarterSlideIndex(i["ss" + this.id]);
          else if (
            !this.isAdmin &&
            this.parameters.maintainSession &&
            i.localStorage !== o
          ) {
            var s = i.localStorage.getItem("ss-" + this.id);
            this.overrideStarterSlideIndex(s),
              j(
                this.sliderElement,
                "mainAnimationComplete",
                function (e) {
                  i.localStorage.setItem(
                    "ss-" + this.id,
                    e.detail.currentSlideIndex
                  );
                }.bind(this)
              );
          } else this.finalizeStarterSlideComplete(t);
        }),
        (t.prototype.overrideStarterSlideIndex = function (t) {
          var i;
          null !== t && this.realSlides[t] && (i = this.realSlides[t]),
            this.finalizeStarterSlideComplete(i);
        }),
        (t.prototype.finalizeStarterSlideComplete = function (t) {
          (t !== o && t.isVisible) || (t = this.visibleRealSlides[0]),
            t !== o
              ? this.finalizeStarterSlideComplete2(t)
              : (this.hide(),
                G(
                  this.sliderElement,
                  "SliderResize",
                  function () {
                    this.finalizeStarterSlideComplete(t);
                  }.bind(this)
                ));
        }),
        (t.prototype.finalizeStarterSlideComplete2 = function (t) {
          t !== this.originalRealStarterSlide &&
            this.originalRealStarterSlide !== o &&
            this.originalRealStarterSlide.unsetActive(),
            this.responsive.onStarterSlide(t),
            this.stages.resolve("StarterSlide");
        }),
        (t.prototype.randomize = function (t) {
          this.parameters.randomize.randomize && this.shuffleSlides(t);
        }),
        (t.prototype.shuffleSlides = function (t) {
          t.sort(function () {
            return 0.5 - Math.random();
          });
          for (var i = t[0].element.parentNode, s = 0; s < t.length; s++)
            i.appendChild(t[s].element), t[s].setIndex(s);
        }),
        (t.prototype.started = function (t) {
          this.stages.done("UIReady", t.bind(this));
        }),
        (t.prototype.ready = function (t) {
          this.stages.done("Show", t.bind(this));
        }),
        (t.prototype.startVisibilityCheck = function () {
          if (
            !this.isAdmin &&
            this.parameters.playWhenVisible &&
            i.IntersectionObserver
          ) {
            var t = this.parameters.playWhenVisibleAt,
              s = t / 2,
              h = 1 - t / 2,
              n = new IntersectionObserver(
                function (t) {
                  t[0].isIntersecting && this._markVisible();
                }.bind(this),
                { rootMargin: -50 * t + "% 0px" }
              );
            n.observe(this.sliderElement);
            var o = new IntersectionObserver(
              function (t) {
                t[0].isIntersecting && this._markVisible();
              }.bind(this),
              { threshold: [s, h] }
            );
            o.observe(this.sliderElement),
              (this.it = [
                n.disconnect.bind(n),
                o.disconnect.bind(o),
                U(
                  this.sliderElement,
                  "pointerover",
                  this._markVisible.bind(this)
                ),
              ]);
          } else this.stages.resolve("Visible");
        }),
        (t.prototype._markVisible = function () {
          this.it && B(this.it), this.stages.resolve("Visible");
        }),
        (t.prototype.visible = function (t) {
          this.stages.done("Visible", t.bind(this));
        }),
        (t.prototype.isPlaying = function () {
          return "ended" !== this.mainAnimation.getState();
        }),
        (t.prototype.focus = function (t) {
          var s = !1;
          if ((this.responsive.parameters.focusUser && !t && (s = !0), s)) {
            var h = J(),
              n = this.responsive.focusOffsetTop,
              o = this.responsive.focusOffsetBottom,
              r = i.innerHeight,
              a = this.sliderElement.getBoundingClientRect(),
              c = a.top - n,
              u = r - a.bottom - o,
              f = this.responsive.parameters.focusEdge,
              l = "";
            "top-force" === f
              ? (l = "top")
              : "bottom-force" === f
              ? (l = "bottom")
              : (c <= 0 && u <= 0) ||
                (c > 0 && u > 0) ||
                (c < 0
                  ? (l =
                      "top" === f
                        ? "top"
                        : "bottom" === f
                        ? "bottom"
                        : -c <= u
                        ? "top"
                        : "bottom")
                  : u < 0 &&
                    (l =
                      "top" === f
                        ? "top"
                        : "bottom" === f || -u <= c
                        ? "bottom"
                        : "top"));
            var d = h;
            if (
              ("top" === l
                ? (d = h - n + a.top)
                : "bottom" === l && (d = h + o + a.bottom - r),
              (d = Math.round(d)) !== h)
            )
              return this._scrollTo(d, Math.abs(h - d));
          }
          return !0;
        }),
        (t.prototype._scrollTo = function (t, n) {
          var o = !1;
          return (
            "smooth" === O(h, "scroll-behavior") &&
              (C(h, "scroll-behavior", ""), (o = !0)),
            (i.nextendScrollFocus = !0),
            new Promise(function (i) {
              et(s.scrollingElement, t, n, i);
            }).then(function () {
              o && C(h, "scroll-behavior", "smooth"),
                (i.nextendScrollFocus = !1);
            })
          );
        }),
        (t.prototype.isChangeCarousel = function (t) {
          return "next" === t
            ? this.currentSlide.index + 1 >= this.slides.length
            : "previous" === t && this.currentSlide.index - 1 < 0;
        }),
        (t.prototype.initNotCarousel = function () {
          this.realSlides[0].setPrevious(!1),
            this.realSlides[this.realSlides.length - 1].setNext(!1);
        }),
        (t.prototype.initHideArrow = function () {
          var t = function (t) {
            this.widgets.setState(
              "nonCarouselFirst",
              !this.getUIPreviousSlide(t)
            ),
              this.widgets.setState("nonCarouselLast", !this.getUINextSlide(t));
          }.bind(this);
          this.stages.done(
            "StarterSlide",
            function () {
              t(this.currentSlide),
                j(
                  this.sliderElement,
                  "SliderResize",
                  function () {
                    t(this.currentSlide);
                  }.bind(this)
                );
            }.bind(this)
          ),
            j(this.sliderElement, "SlideWillChange", function (e) {
              t(e.detail.targetSlide);
            });
        }),
        (t.prototype.next = function (t, i) {
          var s = this.currentSlide.getNext();
          return (
            !(!s || !this.getUINextSlide(this.currentSlide)) &&
            this.changeTo(s.index, !1, t, i)
          );
        }),
        (t.prototype.previous = function (t, i) {
          var s = this.getUIPreviousSlide(this.currentSlide);
          return !!s && this.changeTo(s.index, !0, t, i);
        }),
        (t.prototype.isChangePossible = function (t) {
          var i = !1;
          if ("next" === t) {
            var s = this.currentSlide.getNext();
            s && (i = s.index);
          } else if ("previous" === t) {
            var h = this.currentSlide.getPrevious();
            h && (i = h.index);
          }
          return !1 !== i && i !== this.currentSlide.index;
        }),
        (t.prototype.nextCarousel = function (t, i) {
          return (
            !!this.next(t, i) ||
            this.changeTo(this.getFirstSlide().index, !1, t, i)
          );
        }),
        (t.prototype.getFirstSlide = function () {
          return this.slides[0].isVisible
            ? this.slides[0]
            : this.slides[0].getNext();
        }),
        (t.prototype.getSlideCount = function () {
          for (var t = 0, i = 0; i < this.slides.length; i++)
            this.slides[i].isVisible && t++;
          return t;
        }),
        (t.prototype.directionalChangeToReal = function (t) {
          this.directionalChangeTo(t);
        }),
        (t.prototype.directionalChangeTo = function (t) {
          t > this.currentSlide.index
            ? this.changeTo(t, !1)
            : this.changeTo(t, !0);
        }),
        (t.prototype.changeTo = function (t, i, s, h) {
          if ((t = parseInt(t)) !== this.currentSlide.index) {
            if (!this.slides[t].isVisible)
              return (
                console.error("this slide is not visible on this device"), !1
              );
            this.h("SlideWillChange", { targetSlide: this.slides[t] }),
              this.h("SlideLoading");
            var n = performance.now();
            return (
              Promise.all([
                Promise.all(
                  this.backgrounds.preLoadSlides(
                    this.getVisibleSlides(this.slides[t])
                  )
                ),
                this.focus(s),
              ]).then(
                function () {
                  if (t !== this.currentSlide.index) {
                    if (this.mainAnimationLastChangeTime < n) {
                      this.mainAnimationLastChangeTime = n;
                      var r = this.mainAnimation.getState();
                      if ("ended" === r) {
                        s === o && (s = !1);
                        var a = this.mainAnimation;
                        h !== o && (a = h),
                          this._changeTo(t, i, s, h),
                          a.changeTo(this.currentSlide, this.slides[t], i, s),
                          this._changeCurrentSlide(t);
                      } else
                        ("initAnimation" !== r && "playing" !== r) ||
                          (this.__fastChangeRemoveCallback &&
                            this.__fastChangeRemoveCallback(),
                          (this.__fastChangeRemoveCallback = U(
                            this.sliderElement,
                            "mainAnimationComplete",
                            function () {
                              this.changeTo.call(this, t, i, s, h);
                            }.bind(this),
                            { once: !0 }
                          )),
                          this.mainAnimation.timeScale(
                            2 * this.mainAnimation.timeScale()
                          ));
                    }
                    this.h("SlideLoaded");
                  }
                }.bind(this)
              ),
              !0
            );
          }
          return !1;
        }),
        (t.prototype.setCurrentRealSlide = function (t) {
          this.currentRealSlide = this.currentSlide = t;
        }),
        (t.prototype._changeCurrentSlide = function (t) {
          this.setCurrentRealSlide(this.slides[t]),
            this.h("sliderChangeCurrentSlide");
        }),
        (t.prototype._changeTo = function (t, i, s, h) {}),
        (t.prototype.revertTo = function (t, i) {
          this.slides[i].unsetActive(),
            this.slides[t].setActive(),
            this._changeCurrentSlide(t),
            this.h("SlideWillChange", { targetSlide: this.slides[t] });
        }),
        (t.prototype.forceSetActiveSlide = function (t) {
          t.setActive();
        }),
        (t.prototype.forceUnsetActiveSlide = function (t) {
          t.unsetActive();
        }),
        (t.prototype.updateInsideSlides = function (t) {
          for (var i = 0; i < this.slides.length; i++)
            this.slides[i].setInside(t.indexOf(this.slides[i]) >= 0);
        }),
        (t.prototype.playSlide = function (t) {
          t.playIn();
        }),
        (t.prototype.initMainAnimationWithLayerAnimation = function () {
          "forced" === this.parameters.layerMode.mode &&
            j(
              this.sliderElement,
              "preChangeToPlay",
              function (e) {
                var t = e.detail.currentSlide;
                (e.detail.resolveHandled.handled = !0),
                  G(t.element, "layerAnimationCompleteOut", e.detail.resolve),
                  t.playOut();
              }.bind(this)
            ),
            j(
              this.sliderElement,
              "mainAnimationStart",
              this.onMainAnimationStartSyncLayers.bind(
                this,
                this.parameters.layerMode
              )
            ),
            j(
              this.sliderElement,
              "reverseModeEnabled",
              this.onMainAnimationStartSyncLayersReverse.bind(
                this,
                this.parameters.layerMode
              )
            );
        }),
        (t.prototype.onMainAnimationStartSyncLayers = function (t, e) {
          var i = this.slides[e.detail.currentSlideIndex],
            s = [],
            h = function () {
              B(s);
            };
          "mainInStart" === t.inAnimation
            ? s.push(
                U(
                  i.element,
                  "mainAnimationStartIn",
                  function () {
                    h(), this.playSlide(i);
                  }.bind(this)
                )
              )
            : "mainInEnd" === t.inAnimation &&
              s.push(
                U(
                  i.element,
                  "mainAnimationCompleteIn",
                  function () {
                    h(), this.playSlide(i);
                  }.bind(this)
                )
              ),
            s.push(U(i.element, "mainAnimationStartInCancel", h));
        }),
        (t.prototype.onMainAnimationStartSyncLayersReverse = function (t, e) {
          var i = this.slides[e.detail.reverseSlideIndex],
            s = [],
            h = function () {
              B(s);
            };
          "mainInStart" === t.inAnimation
            ? s.push(
                U(
                  i.element,
                  "mainAnimationStartIn",
                  function () {
                    h(), this.playSlide(i);
                  }.bind(this)
                )
              )
            : "mainInEnd" === t.inAnimation &&
              s.push(
                U(
                  i.element,
                  "mainAnimationCompleteIn",
                  function () {
                    h(), this.playSlide(i);
                  }.bind(this)
                )
              ),
            s.push(U(this.sliderElement, "mainAnimationComplete", h));
        }),
        (t.prototype.findSlideByElement = function (t) {
          var i;
          for (i = 0; i < this.realSlides.length; i++)
            if (this.realSlides[i].element.contains(t))
              return this.realSlides[i];
          for (i = 0; i < this.staticSlides.length; i++)
            if (this.staticSlides[i].element.contains(t))
              return this.staticSlides[i];
          return null;
        }),
        (t.prototype.findSlideIndexByElement = function (t) {
          var i = this.findSlideByElement(t);
          return i || -1;
        }),
        (t.prototype.initMainAnimation = function () {
          this.mainAnimation = !1;
        }),
        (t.prototype.initResponsiveMode = function () {}),
        (t.prototype.hasTouch = function () {
          return "0" != this.parameters.controls.touch;
        }),
        (t.prototype.initControls = function () {
          if (!this.parameters.admin) {
            if (this.hasTouch())
              switch (this.parameters.controls.touch) {
                case "vertical":
                  new c.SmartSliderControlTouchVertical(this);
                  break;
                case "horizontal":
                  new c.SmartSliderControlTouchHorizontal(this);
              }
            this.parameters.controls.keyboard &&
              (this.controls.touch !== o
                ? new c.SmartSliderControlKeyboard(
                    this,
                    this.controls.touch.axis
                  )
                : new c.SmartSliderControlKeyboard(this, "horizontal")),
              this.parameters.controls.mousewheel &&
                new c.SmartSliderControlMouseWheel(
                  this,
                  this.parameters.controls.mousewheel
                ),
              (this.controlAutoplay = new c.SmartSliderControlAutoplay(
                this,
                this.parameters.autoplay
              )),
              c.SmartSliderControlFullscreen.isSupported &&
                (this.controlFullscreen = new c.SmartSliderControlFullscreen(
                  this
                )),
              this.parameters.alias.id &&
                new c.SmartSliderControlAlias(this, this.parameters.alias);
          }
        }),
        (t.prototype.getSlideIndex = function (t) {
          return t;
        }),
        (t.prototype.slideToID = function (t, i, h) {
          for (var n = 0; n < this.realSlides.length; n++)
            if (+this.realSlides[n].id === t)
              return this.slide(this.getSlideIndex(n), i, h);
          var o = s.querySelector('[data-id="' + t + '"]');
          if ((o && (o = o.closest(".n2-ss-slider")), o))
            return (
              this.id === o.ss.id ||
              (et(s.scrollingElement, ht(o), 400), o.ss.slideToID(t, i, !0))
            );
        }),
        (t.prototype.slide = function (t, i, s) {
          return (
            t >= 0 &&
            t < this.slides.length &&
            (i === o
              ? this.parameters.carousel &&
                this.currentSlide.index === this.slides.length - 1 &&
                0 === t
                ? this.next(s)
                : this.currentSlide.index > t
                ? this.changeTo(t, !0, s)
                : this.changeTo(t, !1, s)
              : this.changeTo(t, !i, s))
          );
        }),
        (t.prototype.hide = function () {
          this.isVisible &&
            (F(this.responsive.alignElement, "n2-ss-slider-has-no-slide"),
            this.load.placeholder &&
              F(this.load.placeholder, "n2-ss-slider-has-no-slide"),
            (this.isVisible = !1));
        }),
        (t.prototype.show = function () {
          this.isVisible ||
            (F(this.responsive.alignElement, "n2-ss-slider-has-no-slide"),
            this.load.placeholder &&
              N(this.load.placeholder, "n2-ss-slider-has-no-slide"),
            W(i, "scroll"),
            (this.isVisible = !0));
        }),
        (t.prototype.startAutoplay = function () {
          return (
            this.controlAutoplay !== o &&
            (this.controlAutoplay.setState("pausedSecondary", 0), !0)
          );
        }),
        (t.prototype.pauseAutoplay = function () {
          return (
            this.controlAutoplay !== o &&
            (this.controlAutoplay.setState("pausedSecondary", 1), !0)
          );
        }),
        (t.prototype.initLayerAnimations = function () {
          for (var t = 0; t < this.staticSlides.length; t++)
            this.staticSlides[t].initLayerAnimations();
          for (var i = 0; i < this.realSlides.length; i++)
            this.realSlides[i].initLayerAnimations();
          j(
            this.sliderElement,
            "SliderDeviceOrientation",
            this._deviceSlides.bind(this)
          ),
            j(
              this.sliderElement,
              "SliderResize",
              this._resizeSlides.bind(this)
            ),
            this.isAdmin ||
              (this.parameters.layerMode.playFirstLayer ||
                this.currentSlide.playSpecialEventOnlySetToZero(),
              this.visible(
                function () {
                  this.parameters.layerMode.playFirstLayer
                    ? this.currentSlide.playIn()
                    : this.currentSlide.playSpecialEventOnly();
                }.bind(this)
              ));
        }),
        (t.prototype._deviceSlides = function (e) {
          for (
            var t = e.detail.device, i = 0;
            i < this.staticSlides.length;
            i++
          )
            this.staticSlides[i].setDevice(t);
          for (var s = 0; s < this.realSlides.length; s++)
            this.realSlides[s].setDevice(t);
        }),
        (t.prototype._resizeSlides = function (e) {
          for (
            var t = e.detail.ratios, i = 0;
            i < this.staticSlides.length;
            i++
          )
            this.staticSlides[i].resize(t);
          for (var s = 0; s < this.realSlides.length; s++)
            this.realSlides[s].resize(t);
        }),
        (t.prototype.getSlideBackgroundContainer = function () {}),
        (t.prototype.getPerspective = function () {
          return this.parameters.perspective;
        }),
        (t.prototype.getAnimationAxis = function () {
          return "horizontal";
        }),
        (t.prototype.getDirectionPrevious = function () {
          return n2const.isRTL() && "horizontal" === this.getAnimationAxis()
            ? "next"
            : "previous";
        }),
        (t.prototype.getDirectionNext = function () {
          return n2const.isRTL() && "horizontal" === this.getAnimationAxis()
            ? "previous"
            : "next";
        }),
        (t.prototype.previousWithDirection = function () {
          return this[this.getDirectionPrevious()]();
        }),
        (t.prototype.nextWithDirection = function () {
          return this[this.getDirectionNext()]();
        }),
        (t.prototype.getUIPreviousSlide = function (t) {
          return t.getPrevious();
        }),
        (t.prototype.getUINextSlide = function (t) {
          return t.getNext();
        }),
        (t.prototype.getHorizontalTouchDimension = function () {
          return this.responsive.resizeContext.sliderWidth;
        }),
        (t.prototype.getVerticalTouchDimension = function () {
          return this.responsive.resizeContext.sliderHeight;
        }),
        t
      );
    }),
    c.d("Stages", function () {
      function t() {
        this.stages = {};
      }
      function i(t) {
        (this.n = t),
          (this._isResolved = !1),
          (this._promise = new Promise(
            function (t, i) {
              (this._resolve = t), (this._reject = i);
            }.bind(this)
          )),
          this._promise.then(
            function () {
              this._isResolved = !0;
            }.bind(this)
          );
      }
      return (
        (t.prototype.get = function (t) {
          return (
            this.stages[t] === o && (this.stages[t] = new i(t)), this.stages[t]
          );
        }),
        (t.prototype.resolve = function (t) {
          this.get(t).resolve();
        }),
        (t.prototype.done = function (t, i) {
          var s;
          if ("string" == typeof t) s = this.get(t).getPromise();
          else {
            for (var h = [], n = 0; n < t.length; n++)
              h.push(this.get(t[n]).getPromise());
            s = Promise.all(h);
          }
          s.then(i);
        }),
        (t.prototype.resolved = function (t) {
          return this.get(t).resolved();
        }),
        (i.prototype.getPromise = function () {
          return this._promise;
        }),
        (i.prototype.resolve = function () {
          this.resolved() || this._resolve();
        }),
        (i.prototype.done = function (t) {
          this._promise.then(t);
        }),
        (i.prototype.resolved = function () {
          return this._isResolved;
        }),
        t
      );
    }),
    c.d("SmartSliderWidget", function () {
      "use strict";
      function t(t, i, s) {
        (this.slider = t),
          (this.key = i),
          (this.selector = s),
          this.slider.started(this.register.bind(this));
      }
      return (
        (t.prototype.register = function () {
          this.slider.widgets.has(this.key) ||
            ((this.widget = this.slider.sliderElement.querySelector(
              this.selector
            )),
            this.widget &&
              (this.slider.widgets.register(this.key, this), this.onStart()));
        }),
        (t.prototype.onStart = function () {}),
        (t.prototype.isVisible = function () {
          var t = this.widget.getBoundingClientRect();
          return !(!t.width || !t.height);
        }),
        (t.prototype.getWidth = function () {
          return this.widget.getBoundingClientRect().width;
        }),
        (t.prototype.getHeight = function () {
          return this.widget.getBoundingClientRect().height;
        }),
        t
      );
    }),
    c.d("SmartSliderWidgets", function () {
      function t(t) {
        (this.slider = t),
          (this.sliderElement = t.sliderElement),
          (this.controls = {
            previous: o,
            next: o,
            bullet: o,
            autoplay: o,
            indicator: o,
            bar: o,
            thumbnail: o,
            shadow: o,
            fullscreen: o,
            html: o,
          }),
          (this._controlDimensionRegexp = new RegExp(
            "^(" + Object.keys(this.controls).join("|") + ")(width|height)$",
            "i"
          )),
          (this.excludedSlides = {}),
          (this.states = {
            hover: !1,
            nonCarouselFirst: !1,
            nonCarouselLast: !1,
            currentSlideIndex: -1,
            singleSlide: !1,
          });
      }
      return (
        (t.prototype.register = function (t, i) {
          this.controls[t] = i;
        }),
        (t.prototype.has = function (t) {
          return this.controls[t] !== o;
        }),
        (t.prototype.setState = function (t, i) {
          if (this.states[t] != i) {
            this.states[t] = i;
            var s = t.split(".");
            switch (s[0]) {
              case "hide":
                this.onStateChangeSingle(s[1]);
                break;
              case "nonCarouselFirst":
                this.onStateChangeSingle(this.slider.getDirectionPrevious());
                break;
              case "nonCarouselLast":
                this.onStateChangeSingle(this.slider.getDirectionNext());
                break;
              default:
                this.onStateChangeAll();
            }
          }
        }),
        (t.prototype.onStateChangeAll = function () {
          for (var t in this.controls) this.onStateChangeSingle(t);
        }),
        (t.prototype.onStateChangeSingle = function (t) {
          if (this.controls[t]) {
            var i = !0;
            if (
              (this.controls[t].widget.classList.contains(
                "n2-ss-widget-display-hover"
              ) && (i = this.states.hover),
              i &&
                ((t === this.slider.getDirectionPrevious() &&
                  this.states.nonCarouselFirst) ||
                  (t === this.slider.getDirectionNext() &&
                    this.states.nonCarouselLast)) &&
                (i = !1),
              i)
            ) {
              var s = t + "-" + (this.states.currentSlideIndex + 1);
              this.excludedSlides[s] && (i = !1);
            }
            i &&
              this.states["hide." + t] !== o &&
              this.states["hide." + t] &&
              (i = !1),
              i &&
                this.states.singleSlide &&
                (("previous" !== t &&
                  "next" !== t &&
                  "bullet" !== t &&
                  "autoplay" !== t &&
                  "indicator" !== t) ||
                  (i = !1)),
              this.controls[t].widget.classList.toggle(
                "n2-ss-widget-hidden",
                !i
              );
          }
        }),
        (t.prototype.getVerticalsHeight = function () {
          var t = 0;
          if (this._verticals)
            for (var i = 0; i < this._verticals.length; i++)
              t += this._verticals[i].offsetHeight;
          return t;
        }),
        (t.prototype.onReady = function () {
          (this.advancedElement = this.slider.sliderElement.querySelector(
            ".n2-ss-slider-controls-advanced"
          )),
            (this.requiredVariables = this.advancedElement
              ? (A(this.advancedElement, "variables") || "").split(",")
              : []),
            j(
              this.slider.sliderElement,
              "visibleSlidesChanged",
              function () {
                this.setState(
                  "singleSlide",
                  this.slider.visibleSlides.length <= 1
                );
              }.bind(this)
            ),
            this.setState("singleSlide", this.slider.visibleSlides.length <= 1),
            (this._verticals = this.sliderElement.querySelectorAll(
              '.n2-ss-widget[data-position="above"]:not(.nextend-shadow),.n2-ss-widget[data-position="below"]:not(.nextend-shadow)'
            ));
          var t = !1;
          for (var i in this.controls)
            if (this.controls[i] !== o) {
              var s = A(this.controls[i].widget, "excludeSlides");
              if (s !== o) {
                for (var h = s.split(","), n = h.length - 1; n >= 0; n--) {
                  var r = h[n].split("-");
                  if (2 === r.length) {
                    var a = parseInt(r[0]),
                      c = parseInt(r[1]);
                    if (a <= c) for (var u = a; u <= c; u++) h.push(u);
                  } else h[n] = parseInt(h[n]);
                }
                if (h.length > 0) {
                  for (n = 0; n < h.length; n++)
                    this.excludedSlides[i + "-" + h[n]] = !0;
                  t = !0;
                }
              }
            }
          if (t) {
            var f = function (e) {
              this.setState("currentSlideIndex", e.detail.targetSlide.index);
            }.bind(this);
            f({ detail: { targetSlide: this.slider.currentRealSlide } }),
              j(this.slider.sliderElement, "SlideWillChange", f);
          }
          this.requiredVariables.length &&
            this.advancedElement &&
            (this.flushAdvancedVariables(),
            j(
              this.slider.sliderElement,
              "SliderResize",
              this.flushAdvancedVariables.bind(this)
            )),
            this.onStateChangeAll(),
            this.slider.stages.resolve("WidgetsReady"),
            this.advancedElement &&
              this.slider.stages.done(
                "BeforeShow",
                function () {
                  F(
                    this.advancedElement,
                    "n2-ss-slider-controls-advanced--ready"
                  );
                }.bind(this)
              );
        }),
        (t.prototype.flushAdvancedVariables = function () {
          for (var t = {}, i = 0; i < this.requiredVariables.length; i++)
            t[this.requiredVariables[i]] = this.getAdvancedVariable(
              this.requiredVariables[i]
            );
          for (var s in t) C(this.advancedElement, "--" + s, parseInt(t[s]));
        }),
        (t.prototype.getAdvancedVariable = function (t) {
          var i = this.slider.responsive.resizeContext;
          switch (t) {
            case "outerwidth":
              return it(this.sliderElement.parentNode);
            case "outerheight":
              return st(this.sliderElement.parentNode);
            case "width":
              return i.sliderWidth;
            case "height":
              return i.sliderHeight;
            case "canvaswidth":
              return i.slideWidth;
            case "canvasheight":
              return i.slideHeight;
            case "panewidth":
            case "paneWidth":
              if (i.paneWidth || i.panewidth) return i.paneWidth || i.panewidth;
          }
          var s = t.match(this._controlDimensionRegexp);
          if (s) {
            var h = this.controls[s[1]];
            if (h)
              switch (s[2]) {
                case "width":
                  return h.getWidth();
                case "height":
                  return h.getHeight();
              }
          }
          return 0;
        }),
        (t.prototype.onAdvancedVariableWidgetChanged = function (t) {
          this.advancedElement &&
            (A(this.advancedElement, "variables") || "").match(t) &&
            this.flushAdvancedVariables();
        }),
        t
      );
    }),
    c.d(
      "SmartSliderPluginLightbox",
      ["SmartSliderPlugins", "litebox"],
      function () {
        function t(t) {
          t.isAdmin ||
            ((this.slider = t),
            t.stages.done("Visible", this.onVisible.bind(this)));
        }
        (t.prototype.onVisible = function () {
          if (this.slider.parameters.plugins.lightbox !== o) {
            (this.parameters = d(
              { label: "" },
              this.slider.parameters.plugins.lightbox
            )),
              this.onVisibleRealSlidesChanged(),
              j(
                this.slider.sliderElement,
                "visibleRealSlidesChanged",
                this.onVisibleRealSlidesChanged.bind(this)
              );
            var t = "click";
            this.slider.hasTouch() && (t = "n2click");
            for (var i = 0; i < this.slider.realSlides.length; i++)
              if (this.slider.realSlides[i].getLightboxImage()) {
                var s = this.slider.realSlides[i].element;
                p(s, "data-force-pointer", "zoom-in"),
                  j(
                    s,
                    t,
                    function (t, e) {
                      n2ss.isClickAllowed(e) &&
                        !e.target.classList.contains("smart-slider-overlay") &&
                        r(
                          function () {
                            "ended" === this.slider.mainAnimation.state &&
                              this.openLightbox(t);
                          }.bind(this),
                          10
                        );
                    }.bind(this, this.slider.realSlides[i])
                  );
              }
          }
        }),
          (t.prototype.onVisibleRealSlidesChanged = function () {
            this.lightboxes !== o &&
              this.lightboxes.forEach(function (t) {
                R(t);
              }),
              (this.lightboxes = []);
            for (
              var t = 0, i = 0;
              t < this.slider.visibleRealSlides.length;
              t++
            ) {
              var s = this.slider.visibleRealSlides[t],
                h = s.getLightboxImage();
              if (h) {
                var n = f("a");
                switch (
                  ((n.href = h),
                  (n.className = "nolightbox no-lightbox"),
                  (n.style.display = "none"),
                  (n.slide = s),
                  P(n, "n2Lightbox", ""),
                  P(n, "liteboxGroup", this.slider.id),
                  P(n, "index", i),
                  this.parameters.label)
                ) {
                  case "name":
                    P(n, "title", s.getTitle());
                    break;
                  case "namemore":
                    P(n, "title", s.getTitle()),
                      P(n, "description", s.getDescription());
                }
                s.element.appendChild(n),
                  j(n, "click", function (e) {
                    e.stopPropagation();
                  }),
                  (s.element.lightbox = n),
                  this.lightboxes.push(n),
                  i++;
              }
            }
            n2LightboxSingle(this.lightboxes, {
              blockrightclick: this.slider.parameters.blockrightclick,
              callbackPrev: function () {
                var t = +A(this.currentLightboxedImage, "index") - 1;
                t < 0 && (t = this.lightboxes.length - 1),
                  (this.currentLightboxedImage = this.lightboxes[t]);
                var i = this.currentLightboxedImage.slide;
                this.slider.directionalChangeTo(i.group.index);
              }.bind(this),
              callbackNext: function () {
                var t = +A(this.currentLightboxedImage, "index") + 1;
                t === this.lightboxes.length && (t = 0),
                  (this.currentLightboxedImage = this.lightboxes[t]);
                var i = this.currentLightboxedImage.slide;
                this.slider.directionalChangeTo(i.group.index);
              }.bind(this),
            });
          }),
          (t.prototype.openLightbox = function (t) {
            (this.currentLightboxedImage = t.element.lightbox),
              W(this.currentLightboxedImage, "click");
          }),
          c.SmartSliderPlugins.addPlugin("lightbox", t);
      }
    ),
    c.d(
      "SmartSliderPluginParticleJS",
      ["SmartSliderPlugins", "particlesJS"],
      function () {
        function t(t) {
          (this.slider = t),
            t.stages.done(
              "Parameters",
              function () {
                this.slider.parameters.particlejs &&
                  t.stages.done("BeforeShow", this.onBeforeShow.bind(this));
              }.bind(this)
            );
        }
        (t.prototype.onBeforeShow = function () {
          this.start(this.slider.parameters.particlejs);
        }),
          (t.prototype.start = function (t) {
            if (
              (this.pJS &&
                (this._removeListener && this._removeListener(),
                this.pJS.pJS.fn.vendors.destroypJS()),
              t)
            ) {
              if (!t.mobile && n2const.isPhone) return;
              (t.interactivity = t.interactivity || {}),
                (t.interactivity.detect_on = this.slider.sliderElement),
                (this.pJS = c.particlesJS(
                  this.slider.getSlideBackgroundContainer(),
                  t
                )),
                (this._removeListener = U(
                  this.slider.sliderElement,
                  "SliderResize",
                  function () {
                    this.pJS.pJS.fn.resize();
                  }.bind(this)
                ));
            }
          }),
          c.SmartSliderPlugins.addPlugin("particleJS", t);
      }
    ),
    c.d("SmartSliderMainAnimationAbstract", function () {
      function t(t, i) {
        (this.state = "ended"),
          (this.isTouch = !1),
          (this.isReverseAllowed = !0),
          (this.isReverseEnabled = !1),
          (this.reverseSlideIndex = null),
          (this.isNoAnimation = !1),
          (this.slider = t),
          (this.parameters = d({ duration: 1500, ease: "easeInOutQuint" }, i)),
          (this.parameters.duration = Math.max(
            0.01,
            this.parameters.duration / 1e3
          )),
          (this.sliderElement = t.sliderElement),
          (this.timeline = new c.J({ paused: !0 })),
          j(
            this.sliderElement,
            "mainAnimationStart",
            function (e) {
              (this._revertCurrentSlideIndex = e.detail.previousSlideIndex),
                (this._revertNextSlideIndex = e.detail.currentSlideIndex);
            }.bind(this)
          ),
          this.slider.stages.done("ResponsiveStart", this.init.bind(this));
      }
      return (
        (t.prototype.init = function () {
          this.responsive = this.slider.responsive;
        }),
        (t.prototype.enableReverseMode = function () {
          (this.isReverseEnabled = !0),
            (this.reverseTimeline = new c.J({ paused: !0 })),
            Z(this.slider.sliderElement, "reverseModeEnabled", {
              reverseSlideIndex: this.reverseSlideIndex,
            });
        }),
        (t.prototype.disableReverseMode = function () {
          this.isReverseEnabled = !1;
        }),
        (t.prototype.setTouch = function (t) {
          this.isTouch = t;
        }),
        (t.prototype.setTouchProgress = function (t) {
          this.parameters.duration < 0.3 &&
            (t < 0 ? (t = -1) : t > 0 && (t = 1)),
            "ended" !== this.state &&
              (this.isReverseEnabled
                ? 0 === t
                  ? (this.reverseTimeline.progress(0),
                    this.timeline.progress(t, !1))
                  : t >= 0 && t <= 1
                  ? (this.reverseTimeline.progress(0),
                    this.timeline.progress(t))
                  : t < 0 &&
                    t >= -1 &&
                    (this.timeline.progress(0),
                    this.reverseTimeline.progress(Math.abs(t)))
                : t <= 0
                ? this.timeline.progress(Math.max(t, 1e-6), !1)
                : t >= 0 && t <= 1 && this.timeline.progress(t));
        }),
        (t.prototype.setTouchEnd = function (t, i, s) {
          "ended" !== this.state &&
            (this.isReverseEnabled
              ? this._setTouchEndWithReverse(t, i, s)
              : this._setTouchEnd(t, i, s));
        }),
        (t.prototype._setTouchEnd = function (t, i, s) {
          t && i > 0
            ? (this.fixTouchDuration(this.timeline, i, s), this.timeline.play())
            : (this.revertCB(this.timeline),
              this.fixTouchDuration(this.timeline, 1 - i, s),
              this.timeline.reverse(),
              this.willRevertTo(
                this._revertCurrentSlideIndex,
                this._revertNextSlideIndex
              ));
        }),
        (t.prototype._setTouchEndWithReverse = function (t, i, s) {
          t
            ? i < 0 && this.reverseTimeline.totalDuration() > 0
              ? (this.fixTouchDuration(this.reverseTimeline, i, s),
                this.reverseTimeline.play(),
                this.willRevertTo(
                  this.reverseSlideIndex,
                  this._revertNextSlideIndex
                ))
              : (this.willCleanSlideIndex(this.reverseSlideIndex),
                this.fixTouchDuration(this.timeline, i, s),
                this.timeline.play())
            : (i < 0
                ? (this.revertCB(this.reverseTimeline),
                  this.fixTouchDuration(this.reverseTimeline, 1 - i, s),
                  this.reverseTimeline.reverse())
                : (this.revertCB(this.timeline),
                  this.fixTouchDuration(this.timeline, 1 - i, s),
                  this.timeline.reverse()),
              this.willCleanSlideIndex(this.reverseSlideIndex),
              this.willRevertTo(
                this._revertCurrentSlideIndex,
                this._revertNextSlideIndex
              ));
        }),
        (t.prototype.fixTouchDuration = function (t, i, s) {
          var h = t.totalDuration(),
            n = Math.max(h / 3, Math.min(h, s / Math.abs(i) / 1e3));
          n !== h && t.totalDuration(n);
        }),
        (t.prototype.getState = function () {
          return this.state;
        }),
        (t.prototype.timeScale = function () {
          return arguments.length > 0
            ? (this.timeline.timeScale(arguments[0]), this)
            : this.timeline.timeScale();
        }),
        (t.prototype.changeTo = function (t, i, s, h) {
          if (
            (this._initAnimation(t, i, s),
            (this.state = "initAnimation"),
            this.timeline.paused(!0),
            this.timeline.eventCallback(
              "onStart",
              this.onChangeToStart.bind(this),
              [t, i, h]
            ),
            this.timeline.eventCallback(
              "onComplete",
              this.onChangeToComplete.bind(this),
              [t, i, h]
            ),
            this.timeline.eventCallback("onReverseComplete", null),
            (this.revertCB = function (s) {
              s.eventCallback(
                "onReverseComplete",
                this.onReverseChangeToComplete.bind(this),
                [i, t, h]
              );
            }.bind(this)),
            this.isTouch)
          )
            t.onOutAnimationsPlayed();
          else {
            var n = { handled: !1 };
            new Promise(
              function (s) {
                Z(this.slider.sliderElement, "preChangeToPlay", {
                  resolve: s,
                  resolveHandled: n,
                  currentSlide: t,
                  nextSlide: i,
                }),
                  n.handled || s();
              }.bind(this)
            ).then(
              function () {
                this.play();
              }.bind(this.timeline)
            );
          }
        }),
        (t.prototype.willRevertTo = function (t, i) {
          Z(this.slider.sliderElement, "mainAnimationWillRevertTo", {
            slideIndex: t,
            originalNextSlideIndex: i,
          }),
            G(
              this.sliderElement,
              "mainAnimationComplete",
              this.revertTo.bind(this, t, i)
            );
        }),
        (t.prototype.revertTo = function (t, i) {
          this.slider.revertTo(t, i),
            Y(this.slider.slides[i].element, "mainAnimationStartInCancel");
        }),
        (t.prototype.willCleanSlideIndex = function (t) {
          G(
            this.sliderElement,
            "mainAnimationComplete",
            this.cleanSlideIndex.bind(this, t)
          );
        }),
        (t.prototype.cleanSlideIndex = function () {}),
        (t.prototype._initAnimation = function (t, i, s) {
          this.slider.updateInsideSlides([t, i]);
        }),
        (t.prototype.onChangeToStart = function (t, i, s) {
          this.state = "playing";
          var h = {
            mainAnimation: this,
            previousSlideIndex: t.index,
            currentSlideIndex: i.index,
            isSystem: s,
          };
          this.slider.h("mainAnimationStart", h),
            t.h("mainAnimationStartOut", h),
            i.h("mainAnimationStartIn", h);
        }),
        (t.prototype.onChangeToComplete = function (t, i, s) {
          var h = {
            mainAnimation: this,
            previousSlideIndex: t.index,
            currentSlideIndex: i.index,
            isSystem: s,
          };
          this.clearTimelines(),
            this.disableReverseMode(),
            t.h("mainAnimationCompleteOut", h),
            i.h("mainAnimationCompleteIn", h),
            (this.state = "ended"),
            this.slider.updateInsideSlides([i]),
            s || i.focus(),
            this.slider.h("mainAnimationComplete", h);
        }),
        (t.prototype.onReverseChangeToComplete = function (i, s, h) {
          t.prototype.onChangeToComplete.apply(this, arguments);
        }),
        (t.prototype.clearTimelines = function () {
          (this.revertCB = function () {}),
            this.timeline.clear(),
            this.timeline.timeScale(1);
        }),
        (t.prototype.getEase = function () {
          return this.isTouch ? "linear" : this.parameters.ease;
        }),
        t
      );
    }),
    c.d("SmartSliderPostBackgroundAnimation", function () {
      var t = {
          default: 5,
          superSlow: 20,
          slow: 10,
          normal: 5,
          fast: 3,
          superFast: 1.5,
        },
        i = {
          default: 1,
          superSoft: 0.3,
          soft: 0.6,
          normal: 1,
          strong: 1.5,
          superStrong: 2,
        };
      function s(t, i) {
        (this.tween = null),
          (this.lastTween = null),
          (this.slider = t),
          (this.mainAnimation = i),
          (this.isFirst = !0),
          (this.visibleAddedButNotPlayed = !1),
          (this.parameters = d(
            { data: 0, speed: "default", strength: "default" },
            t.parameters.postBackgroundAnimations
          )),
          this.slider.stages.done("StarterSlide", this.init.bind(this));
      }
      return (
        (s.prototype.init = function () {
          (this.ratios = d(
            { slideW: 1, slideH: 1 },
            this.slider.responsive.ratios
          )),
            (this.backgrounds = this.slider.backgrounds),
            (this.images = this.backgrounds.getBackgroundImages());
          for (var t = 0; t < this.images.length; t++)
            this.images[t].onReady(
              this.initImage.bind(this, t, this.images[t])
            );
          (this.playOnce = this.slider.parameters.layerMode.playOnce),
            (this.playFirst = this.slider.parameters.layerMode.playFirstLayer);
          var i = this.slider.currentSlide.index;
          (this.tween = this.images[i].postBGTween),
            this.playFirst
              ? this.addVisiblePlay()
              : this.tween && this.tween.progress(1, !1),
            j(
              this.slider.sliderElement,
              "mainAnimationStart",
              this.onMainAnimationStart.bind(this)
            ),
            j(
              this.slider.sliderElement,
              "mainAnimationComplete",
              this.stop.bind(this)
            ),
            j(
              this.slider.sliderElement,
              "SliderResize",
              this.onResize.bind(this)
            ),
            j(
              this.slider.sliderElement,
              "mainAnimationWillRevertTo",
              this.onMainAnimationWillRevertTo.bind(this)
            ),
            j(
              this.slider.sliderElement,
              "SlideForceChange",
              function (e) {
                this.prepareToSwitchSlide(
                  e.detail.oldSlide,
                  e.detail.currentSlide
                );
              }.bind(this)
            ),
            N(this.slider.sliderElement, "n2-ss-feature-post-bg-loader");
        }),
        (s.prototype.initImage = function (t, i) {
          i.hasImage()
            ? (i.postBGTween = this.getAnimation(t, i))
            : (i.postBGTween = !1);
        }),
        (s.prototype.addVisiblePlay = function () {
          this.visibleAddedButNotPlayed ||
            ((this.visibleAddedButNotPlayed = !0),
            this.slider.visible(this.play.bind(this)));
        }),
        (s.prototype.onMainAnimationStart = function () {
          (this.isFirst = !1),
            this.mainAnimation.hasBackgroundAnimation() ||
            this.mainAnimation.isTouch
              ? G(
                  this.slider.sliderElement,
                  "mainAnimationComplete",
                  this.play.bind(this)
                )
              : this.play();
        }),
        (s.prototype.onMainAnimationWillRevertTo = function () {
          (this.lastTween = this.tween), (this.tween = !1);
        }),
        (s.prototype.onResize = function (e) {
          this.ratios = d({}, e.detail.ratios);
          for (var t = 0; t < this.images.length; t++) {
            var i = this.images[t].postBGTween;
            i && i.invalidate && i.invalidate();
          }
        }),
        (s.prototype.getAnimation = function (s, h) {
          if (!h.elements.image) return !1;
          var n = this.parameters.data,
            r = this.parameters.speed,
            a = this.parameters.strength;
          if (this.slider.slides[s].postBackgroundAnimation) {
            var u = this.slider.slides[s].postBackgroundAnimation;
            (n = u.data), (r = u.speed), (a = u.strength);
          }
          if (!n) return !1;
          var f = m(
            {},
            n.animations[Math.floor(Math.random() * n.animations.length)]
          );
          f.from.transformOrigin === o &&
            (f.from.transformOrigin = n.transformOrigin);
          const l = c.MW.L(h.elements.image.imageElements);
          c.MW.t(l, {
            transformOrigin: f.from.transformOrigin,
            backfaceVisibility: "hidden",
            transformStyle: "flat",
            overflow: "hidden",
            "will-change": "transform",
          }),
            (f.to.paused = !0);
          for (var d = 0; d < f.strength.length; d++) {
            var v = f.strength[d];
            "scale" === v
              ? ((f.from.scale = 1 + (f.from.scale - 1) * i[a]),
                (f.to.scale = 1 + (f.to.scale - 1) * i[a]))
              : ((f.from[v] *= i[a]), (f.to[v] *= i[a]));
          }
          return (
            f.from.x !== o &&
              (f.from.x = function (t) {
                return this.ratios.slideW * t;
              }.bind(this, f.from.x)),
            f.from.y !== o &&
              (f.from.y = function (t) {
                return this.ratios.slideH * t;
              }.bind(this, f.from.y)),
            f.to.x !== o &&
              (f.to.x = function (t) {
                return this.ratios.slideW * t;
              }.bind(this, f.to.x)),
            f.to.y !== o &&
              (f.to.y = function (t) {
                return this.ratios.slideH * t;
              }.bind(this, f.to.y)),
            n2const.isFirefox &&
              ((f.from.rotationZ = 0.1), (f.to.rotationZ = 0.1)),
            c.MW.t(l, f.from),
            c.MW.flush(),
            c.K.fromTo(l, t[r], f.from, f.to)
          );
        }),
        (s.prototype.prepareToSwitchSlide = function (t, i) {
          t && this.images[t.index].postBGTween
            ? (this.mainAnimation.hasBackgroundAnimation() &&
                this.images[t.index].postBGTween.pause(),
              (this.lastTween = this.images[t.index].postBGTween))
            : (this.lastTween = !1),
            this.images[i.index].postBGTween
              ? (this.tween = this.images[i.index].postBGTween)
              : (this.tween = !1);
        }),
        (s.prototype.play = function () {
          (this.visibleAddedButNotPlayed = !1),
            !this.tween ||
              (this.playOnce && 0 !== this.tween.progress()) ||
              this.tween.play();
        }),
        (s.prototype.stop = function () {
          !this.playOnce && this.lastTween && this.lastTween.pause(0);
        }),
        s
      );
    }),
    c.d("SmartSliderControlAlias", function () {
      "use strict";
      function t(t, s) {
        (this.st = t),
          (this.ht = t.sliderElement),
          (this.nt = t.v),
          (this.et = A(this.nt, "alias")),
          (this.ot = d(
            { id: 0, smoothScroll: 0, slideSwitch: 0, scroll: 1 },
            s
          )),
          this.et &&
            (this.ot.smoothScroll && C(h, "scroll-behavior", "smooth"),
            this.ot.slideSwitch &&
              (this.switchOnLoad(),
              j(
                i,
                "hashchange",
                function () {
                  var t = this.getAnchor();
                  t > 0 &&
                    (1 === this.st.responsive.parameters.focusUser
                      ? ((this.st.responsive.parameters.focusUser = 0),
                        this.switchToSlide(t - 1),
                        (this.st.responsive.parameters.focusUser = 1))
                      : this.switchToSlide(t - 1),
                    this.replaceHash());
                }.bind(this)
              )));
      }
      return (
        (t.prototype.getAnchor = function () {
          var t = i.location.hash.substr(1);
          if (t) {
            if (t === this.et) return !0;
            if (this.ot.slideSwitch && 0 === t.indexOf(this.et)) {
              var s = +t.substr(this.et.length + 1);
              if (s > 0) return s;
            }
          }
          return !1;
        }),
        (t.prototype.switchOnLoad = function () {
          var t = this.getAnchor();
          if (t > 0) {
            var s = t - 1,
              h = i["n2-ss-" + this.st.id];
            h && h.stages.resolved("StarterSlide")
              ? h.stages.done(
                  "BeforeShow",
                  function () {
                    this.switchToSlide(s);
                  }.bind(this)
                )
              : (i["ss" + this.st.id] = s),
              this.replaceHash();
          }
        }),
        (t.prototype.replaceHash = function () {
          var t = "#" + this.et;
          history.replaceState
            ? history.replaceState(null, null, t)
            : (location.hash = t);
        }),
        (t.prototype.switchToSlide = function (t) {
          this.st.slide(t);
        }),
        t
      );
    }),
    c.d("SmartSliderControlAutoplay", function () {
      "use strict";
      function t(t, i) {
        (this.slider = t),
          (this.state = {
            enabled: 1,
            paused: 1,
            pausedSecondary: 0,
            mainAnimationPlaying: 0,
            wait: 0,
          }),
          (this._listeners = []),
          (this.wait = new c.SmartSliderControlAutoplayWait(this)),
          (this._currentCount = 1),
          (this.autoplayToSlide = 0),
          (this.autoplayToSlideIndex = -1),
          (this.parameters = d(
            {
              enabled: 0,
              start: 1,
              duration: 8e3,
              autoplayLoop: 0,
              allowReStart: 0,
              pause: { mouse: "enter", click: !0, mediaStarted: !0 },
              resume: { click: 0, mouse: 0, mediaEnded: !0 },
              interval: 1,
              intervalModifier: "loop",
              intervalSlide: "current",
            },
            i
          )),
          (this.clickHandled = !1),
          (t.controls.autoplay = this),
          this.parameters.enabled
            ? ((this.parameters.duration /= 1e3),
              this.slider.visible(this.onReady.bind(this)))
            : this.disable();
      }
      return (
        (t.prototype.preventClickHandle = function () {
          (this.clickHandled = !0),
            r(
              function () {
                this.clickHandled = !1;
              }.bind(this),
              300
            );
        }),
        (t.prototype.onReady = function () {
          this.rt = !0;
          this.timeline = c.K.to(
            { _progress: 0 },
            this.getSlideDuration(this.slider.currentSlide.index),
            { _progress: 1, paused: !0, onComplete: this.next.bind(this) }
          );
          var t = this.slider.sliderElement;
          this._listeners.push(
            U(
              t,
              "SlideLoading",
              function () {
                this.wait.add("load");
              }.bind(this)
            )
          ),
            this._listeners.push(
              U(
                t,
                "SlideLoaded",
                function (e) {
                  this.wait.resolve("load");
                }.bind(this)
              )
            ),
            this._listeners.push(
              U(
                t,
                "BeforeCurrentSlideChange",
                function () {
                  this.wait.resolveWeak(),
                    this.setState("mainAnimationPlaying", 1);
                }.bind(this)
              )
            ),
            this._listeners.push(
              U(
                t,
                "mainAnimationStart",
                function () {
                  this._currentCount++,
                    this.setState("mainAnimationPlaying", 1),
                    this.wait.resolveWeak();
                }.bind(this)
              )
            ),
            this._listeners.push(
              U(
                t,
                "mainAnimationComplete",
                function (e) {
                  this.timeline.duration(
                    this.getSlideDuration(e.detail.currentSlideIndex)
                  ),
                    (this.rt = !0),
                    this.timeline.pause(0, !1),
                    this.setState("mainAnimationPlaying", 0);
                }.bind(this)
              )
            ),
            this._listeners.push(
              U(
                t,
                "autoplayPause",
                function (e) {
                  this.setState("paused", 1);
                }.bind(this)
              )
            ),
            this._listeners.push(
              U(
                t,
                "autoplayResume",
                function (e) {
                  (this.state.paused ||
                    (0 === parseInt(this.parameters.start) &&
                      0 === parseInt(this.state.paused))) &&
                    (this._currentCount = 1),
                    this.setState("pausedSecondary", 0),
                    this.setState("paused", 0);
                  var t = e.detail.progress;
                  t !== o && this.timeline.progress(t);
                }.bind(this)
              )
            ),
            this._listeners.push(
              U(
                t,
                "CurrentSlideChanged",
                function (e) {
                  this.timeline.duration(
                    this.getSlideDuration(e.detail.currentSlide.index)
                  ),
                    (this.rt = !0),
                    this.timeline.pause(0, !1),
                    this.setState("mainAnimationPlaying", 0);
                }.bind(this)
              )
            ),
            this.initClick(
              this.parameters.pause.click,
              this.parameters.resume.click
            ),
            this.initHover(
              this.parameters.pause.mouse,
              this.parameters.resume.mouse
            ),
            this.initMedia(
              this.parameters.pause.mediaStarted,
              this.parameters.resume.mediaEnded
            ),
            this.slider.stages.resolve("AutoplayReady"),
            this.slider.h("autoplay", { progress: 0 }),
            this.parameters.start || this.setState("pausedSecondary", 1),
            this.setState("paused", 0);
        }),
        (t.prototype.setState = function (t, i) {
          this.state[t] !== i &&
            ((this.state[t] = i),
            this.timeline !== o &&
              (!this.state.enabled ||
              this.state.paused ||
              this.state.pausedSecondary ||
              this.state.wait ||
              this.state.mainAnimationPlaying
                ? (this.timeline.paused() || this.timeline.pause(),
                  this.state.mainAnimationPlaying ||
                    (this.isPaused !== o && this.isPaused) ||
                    ((this.isPaused = !0), this.slider.h("autoplayPaused")))
                : (this.timeline.paused() && this.timeline.play(),
                  (this.isPaused === o || this.isPaused) &&
                    ((this.isPaused = !1), this.slider.h("autoplayStarted")))));
        }),
        (t.prototype.initClick = function (t, i) {
          (t || i) &&
            (this.universalClick = new c.UniversalClick(
              this.slider.sliderElement,
              function (e) {
                this.clickHandled ||
                  (this.state.pausedSecondary
                    ? i && this.setState("pausedSecondary", 0)
                    : t && this.setState("pausedSecondary", 1));
              }.bind(this)
            ));
        }),
        (t.prototype.initHover = function (t, i) {
          if (t || i) {
            var s = !1;
            this._listeners.push(
              U(this.slider.sliderElement, "touchend", function () {
                (s = !0),
                  r(function () {
                    s = !1;
                  }, 300);
              })
            ),
              this._listeners.push(
                U(
                  this.slider.sliderElement,
                  "mouseenter",
                  function (e) {
                    this.state.pausedSecondary
                      ? "enter" === i && this.setState("pausedSecondary", 0)
                      : s ||
                        "enter" !== t ||
                        this.setState("pausedSecondary", 1);
                  }.bind(this)
                )
              ),
              this._listeners.push(
                U(
                  this.slider.sliderElement,
                  "mouseleave",
                  function (e) {
                    this.state.pausedSecondary
                      ? "leave" === i && this.setState("pausedSecondary", 0)
                      : "leave" === t && this.setState("pausedSecondary", 1);
                  }.bind(this)
                )
              );
          }
        }),
        (t.prototype.initMedia = function (t, i) {
          var s = this.slider.sliderElement;
          t
            ? (this._listeners.push(
                U(
                  s,
                  "mediaStarted",
                  function (e) {
                    this.wait.add(e.detail.id);
                  }.bind(this)
                )
              ),
              this._listeners.push(
                U(
                  s,
                  "mediaEnded",
                  function (e) {
                    this.wait.resolve(e.detail.id);
                  }.bind(this)
                )
              ))
            : i &&
              this._listeners.push(
                U(
                  s,
                  "mediaEnded",
                  function () {
                    this.setState("pausedSecondary", 0);
                  }.bind(this)
                )
              );
        }),
        (t.prototype.enableProgress = function () {
          this.timeline &&
            this.timeline.eventCallback(
              "onUpdate",
              function () {
                this.slider.h("autoplay", {
                  progress: this.timeline.progress(),
                });
              }.bind(this)
            );
        }),
        (t.prototype.next = function () {
          if (this.rt) {
            if (
              ((this.rt = !1),
              this.timeline.pause(),
              !this.parameters.autoplayLoop)
            ) {
              switch (this.parameters.intervalModifier) {
                case "slide":
                  this.slideSwitchingSlideCount();
                  break;
                case "slideindex":
                  this.slideSwitchingIndex();
                  break;
                default:
                  this.slideSwitchingLoop();
              }
              this.autoplayToSlide > 0 &&
                this._currentCount >= this.autoplayToSlide &&
                this.limitAutoplay(),
                this.autoplayToSlideIndex >= 0 &&
                  this.slider.slides.length ===
                    this.slider.visibleSlides.length &&
                  (this.autoplayToSlideIndex ===
                    this.slider.currentRealSlide.index + 2 ||
                    (1 === this.autoplayToSlideIndex &&
                      this.slider.currentRealSlide.index +
                        this.autoplayToSlideIndex ===
                        this.slider.slides.length)) &&
                  this.limitAutoplay();
            }
            this.slider.nextCarousel(!0);
          }
        }),
        (t.prototype.slideSwitchingLoop = function () {
          (this.autoplayToSlide =
            this.parameters.interval * this.slider.visibleSlides.length - 1),
            "next" === this.parameters.intervalSlide && this.autoplayToSlide++;
        }),
        (t.prototype.slideSwitchingSlideCount = function () {
          this.autoplayToSlide = this.parameters.interval;
        }),
        (t.prototype.slideSwitchingIndex = function () {
          var t = Math.max(1, this.parameters.interval);
          t > this.slider.slides.length && (t = 1),
            (this.autoplayToSlideIndex = t);
        }),
        (t.prototype.limitAutoplay = function () {
          this.parameters.allowReStart
            ? ((this._currentCount = 0), this.setState("paused", 1))
            : this.disable();
        }),
        (t.prototype.disable = function () {
          this.setState("enabled", 0),
            B(this._listeners),
            this.universalClick &&
              (this.universalClick.remove(), delete this.universalClick),
            this.slider.stages.resolve("AutoplayDestroyed");
        }),
        (t.prototype.getSlideDuration = function (t) {
          var i = this.slider.realSlides[this.slider.getRealIndex(t)],
            s = i.minimumSlideDuration;
          return (
            0 === parseFloat(i.minimumSlideDuration) &&
              (s = this.parameters.duration),
            s
          );
        }),
        t
      );
    }),
    c.d("SmartSliderControlFullscreen", function () {
      "use strict";
      function t(i, h, n) {
        (this.slider = i),
          (this.responsive = this.slider.responsive),
          (this._type = this.responsive.parameters.type),
          (this._upscale = this.responsive.parameters.upscale),
          (this.at = !1),
          (this.ht = this.slider.sliderElement),
          (this.ct = this.ht.closest(".n2-section-smartslider")),
          j(s, t.event, this.fullScreenChange.bind(this));
      }
      return (
        (t.isSupported = !(!s.exitFullscreen && !s.webkitExitFullscreen)),
        t.isSupported &&
          ((t.requestFullscreen =
            h.requestFullscreen || h.webkitRequestFullscreen),
          (t.exitFullscreen = s.exitFullscreen || s.webkitExitFullscreen),
          (t.event = h.requestFullscreen
            ? "fullscreenchange"
            : h.webkitRequestFullscreen
            ? "webkitfullscreenchange"
            : null)),
        (t.prototype.switchState = function () {
          (this.at = !this.at),
            this.at ? this._fullScreen() : this._normalScreen();
        }),
        (t.prototype.requestFullscreen = function () {
          return !this.at && ((this.at = !0), this._fullScreen(), !0);
        }),
        (t.prototype.exitFullscreen = function () {
          return !!this.at && ((this.at = !1), this._normalScreen(), !0);
        }),
        (t.prototype._fullScreen = function () {
          (this.responsive.at = !0),
            (this.responsive.parameters.type = "fullpage"),
            (this.ht.dataset.responsive = this.responsive.parameters.type),
            (this.responsive.parameters.upscale = !0),
            (this._marginLeft =
              this.responsive.containerElement.style.marginLeft),
            (this._marginRight =
              this.responsive.containerElement.style.marginRight),
            x(this.responsive.containerElement, {
              marginLeft: 0,
              marginRight: 0,
            }),
            x(this.ct, {
              width: "100%",
              height: "100%",
              "background-color": i.getComputedStyle(n).backgroundColor,
            }),
            t.requestFullscreen.call(this.ct);
        }),
        (t.prototype._normalScreen = function () {
          t.exitFullscreen.call(s);
        }),
        (t.prototype.fullScreenChange = function () {
          this.isDocumentInFullScreenMode()
            ? (this.slider.h("n2FullScreen"),
              F(h, "n2-in-fullscreen"),
              F(this.slider.sliderElement, "n2-ss-slider--fullscreen"),
              (this.at = !0),
              "auto" === this._type &&
                C(this.slider.responsive.alignElement, "max-width", "none"),
              W(i, "resize"))
            : ((this.responsive.at = !1),
              (this.responsive.parameters.type = this._type),
              (this.ht.dataset.responsive = this._type),
              (this.responsive.parameters.upscale = this._upscale),
              x(this.responsive.containerElement, {
                marginLeft: this._marginLeft,
                marginRight: this._marginRight,
              }),
              x(this.ct, { width: "", height: "", "background-color": "" }),
              N(this.slider.sliderElement, "n2-ss-slider--fullscreen"),
              N(h, "n2-in-fullscreen"),
              "auto" === this._type &&
                L(this.slider.responsive.alignElement, "max-width"),
              W(i, "resize"),
              (this.at = !1),
              this.slider.h("n2ExitFullScreen"));
        }),
        (t.prototype.isDocumentInFullScreenMode = function () {
          return s.fullscreenElement || s.webkitIsFullScreen;
        }),
        t
      );
    }),
    c.d("SmartSliderControlKeyboard", function () {
      "use strict";
      var t;
      function h() {
        (this.controls = []),
          s.addEventListener("keydown", this.onKeyDown.bind(this)),
          s.addEventListener("mousemove", this.onMouseMove.bind(this), {
            capture: !0,
          });
      }
      function o(i, s, n) {
        (this.slider = i),
          (this.parameters = d({}, n)),
          (this.parseEvent =
            "vertical" === s
              ? o.prototype.parseEventVertical
              : o.prototype.parseEventHorizontal),
          t || (t = new h()),
          t.addControl(this),
          j(
            this.slider.sliderElement,
            "SliderKeyDown",
            function (e) {
              this.onKeyDown(e.detail.e);
            }.bind(this)
          ),
          (i.controls.keyboard = this);
      }
      return (
        (h.prototype.onMouseMove = function (e) {
          this.mouseEvent = e;
        }),
        (h.prototype.addControl = function (t) {
          this.controls.push(t);
        }),
        (h.prototype.onKeyDown = function (e) {
          if (
            e.target.tagName.match(/BODY|DIV|IMG/) &&
            !e.target.isContentEditable
          ) {
            var t;
            if (
              this.mouseEvent &&
              (t = this.findSlider(
                s.elementFromPoint(
                  this.mouseEvent.clientX,
                  this.mouseEvent.clientY
                )
              ))
            )
              return void Z(t, "SliderKeyDown", { e: e });
            if (s.activeElement !== n && (t = this.findSlider(s.activeElement)))
              return void Z(t, "SliderKeyDown", { e: e });
            for (var i = 0; i < this.controls.length; i++)
              this.controls[i].onKeyDown(e);
          }
        }),
        (h.prototype.findSlider = function (t) {
          return t
            ? t.classList.contains("n2-ss-slider")
              ? t
              : t.closest(".n2-ss-slider")
            : null;
        }),
        (o.prototype.isSliderOnScreen = function () {
          var t = this.slider.sliderElement.getBoundingClientRect(),
            s = t.height / 2;
          return t.top + s >= 0 && t.top + s <= i.innerHeight;
        }),
        (o.prototype.onKeyDown = function (e) {
          !e.defaultPrevented &&
            this.isSliderOnScreen() &&
            this.parseEvent.call(this, e) &&
            e.preventDefault();
        }),
        (o.prototype.parseEventHorizontal = function (e) {
          switch (e.code) {
            case "ArrowRight":
              return (
                n2const.activeElementBlur(),
                this.slider[n2const.isRTL() ? "previous" : "next"](),
                !0
              );
            case "ArrowLeft":
              return (
                n2const.activeElementBlur(),
                this.slider[n2const.isRTL() ? "next" : "previous"](),
                !0
              );
            default:
              return !1;
          }
        }),
        (o.prototype.parseEventVertical = function (e) {
          switch (e.code) {
            case "ArrowDown":
              return (
                (!this.slider.isChangeCarousel("next") ||
                  !this.slider.parameters.controls.blockCarouselInteraction) &&
                (n2const.activeElementBlur(), this.slider.next(), !0)
              );
            case "ArrowUp":
              return (
                (!this.slider.isChangeCarousel("previous") ||
                  !this.slider.parameters.controls.blockCarouselInteraction) &&
                (n2const.activeElementBlur(), this.slider.previous(), !0)
              );
            default:
              return !1;
          }
        }),
        o
      );
    }),
    c.d("SmartSliderControlMouseWheel", function () {
      "use strict";
      function t(t, i) {
        (this.preventScroll = {
          local: !1,
          curve: !1,
          curveGlobal: !1,
          global: !1,
          localTimeout: !1,
          curveTimeout: !1,
          curveGlobalTimeout: !1,
          globalTimeout: !1,
        }),
          (this.maxDelta = 0),
          (this.slider = t),
          (this.ut = 2 === i ? "deltaX" : "deltaY"),
          s.addEventListener("wheel", this.onGlobalMouseWheel.bind(this), {
            passive: !1,
          }),
          (t.controls.mouseWheel = this);
      }
      return (
        (t.prototype.hasScrollableParentVertical = function (t, s) {
          for (; s && s !== this.slider.sliderElement; ) {
            if (s.scrollHeight > s.clientHeight) {
              var h = i.getComputedStyle(s).overflowY;
              if ("scroll" === h || "auto" === h)
                if (t) {
                  if (s.scrollTop > 0) return !0;
                } else if (s.scrollTop + s.clientHeight < s.scrollHeight)
                  return !0;
            }
            s = s.parentNode;
          }
          return !1;
        }),
        (t.prototype.hasScrollableParentHorizontal = function (t) {
          for (; t && t !== this.slider.sliderElement; ) {
            var s = i.getComputedStyle(t).overflowX;
            if (
              ("scroll" === s || "auto" === s) &&
              t.scrollWidth > t.offsetWidth
            )
              return !0;
            t = t.parentNode;
          }
          return !1;
        }),
        (t.prototype.onGlobalMouseWheel = function (e) {
          e.target.closest(".n2-ss-slider") &&
            0 !== e[this.ut] &&
            (this.onCurveEvent(e),
            this.preventScroll.local ||
            this.preventScroll.curve ||
            Math.abs(e[this.ut]) < this.maxDelta / 2
              ? e.preventDefault()
              : (this.preventScroll.global && e.preventDefault(),
                (this.slider.sliderElement === e.target ||
                  this.slider.sliderElement.contains(e.target)) &&
                  ("deltaY" === this.ut
                    ? e.shiftKey ||
                      this.hasScrollableParentVertical(
                        e.deltaY < 0,
                        e.target
                      ) ||
                      this.onMouseWheel(e)
                    : "deltaX" === this.ut &&
                      (this.hasScrollableParentHorizontal(e.target) ||
                        this.onMouseWheel(e)))));
        }),
        (t.prototype.onMouseWheel = function (e) {
          e[this.ut] < 0
            ? (this.slider.isChangeCarousel("previous") &&
                this.slider.parameters.controls.blockCarouselInteraction) ||
              (this.slider.previous(),
              e.preventDefault(),
              this.startCurveWatcher(e),
              this.local(),
              this.global())
            : e[this.ut] > 0 &&
              ((this.slider.isChangeCarousel("next") &&
                this.slider.parameters.controls.blockCarouselInteraction) ||
                (this.slider.next(),
                e.preventDefault(),
                this.startCurveWatcher(e),
                this.local(),
                this.global()));
        }),
        (t.prototype.startCurveWatcher = function (e) {
          !1 !== this.preventScroll.curve && a(this.preventScroll.curveTimeout),
            this.preventScroll.curveGlobal ||
              ((this.dynamicDelta = !1),
              (this.lastDelta = e[this.ut]),
              (this.preventScroll.curveGlobal = !0),
              (this.preventScroll.curveGlobalTimeout = r(
                function () {
                  (this.preventScroll.curveGlobal = !1), (this.maxDelta = 0);
                }.bind(this),
                500
              ))),
            (this.preventScroll.curve = !0),
            (this.preventScroll.curveTimeout = r(
              this.releaseCurveLock.bind(this),
              1500
            ));
        }),
        (t.prototype.onCurveEvent = function (e) {
          if (this.preventScroll.curveGlobal) {
            this.dynamicDelta ||
              this.lastDelta === e[this.ut] ||
              ((this.lastDelta = e[this.ut]), (this.dynamicDelta = !0));
            var t = Math.abs(e[this.ut]);
            this.preventScroll.curve &&
              this.maxDelta / 2 > t &&
              this.releaseCurveLock(),
              (this.maxDelta = Math.max(this.maxDelta, t)),
              this.preventScroll.curveGlobalTimeout &&
                a(this.preventScroll.curveGlobalTimeout),
              (this.preventScroll.curveGlobalTimeout = r(
                function () {
                  (this.preventScroll.curveGlobal = !1), (this.maxDelta = 0);
                }.bind(this),
                500
              ));
          }
        }),
        (t.prototype.releaseCurveLock = function () {
          (this.preventScroll.curve = !1), a(this.preventScroll.curveTimeout);
        }),
        (t.prototype.local = function () {
          !1 !== this.preventScroll.local && a(this.preventScroll.localTimeout),
            (this.preventScroll.local = !0),
            (this.preventScroll.localTimeout = r(
              function () {
                (this.preventScroll.local = !1),
                  this.dynamicDelta || this.releaseCurveLock();
              }.bind(this),
              1e3
            ));
        }),
        (t.prototype.global = function () {
          !1 !== this.preventScroll.global &&
            a(this.preventScroll.globalTimeout),
            (this.preventScroll.global = !0),
            (this.preventScroll.globalTimeout = r(
              function () {
                this.preventScroll.global = !1;
              }.bind(this),
              1e3
            ));
        }),
        t
      );
    }),
    c.d("SmartSliderControlTouch", function () {
      "use strict";
      function t(t) {
        (this.slider = t),
          (this.interactiveDrag = !0),
          (this.preventMultipleTap = !1),
          (this._animation = t.mainAnimation),
          (this.swipeElement = this.slider.sliderElement.querySelector(
            ".n2_ss__touch_element"
          )),
          (t.controls.touch = this),
          t.stages.done("StarterSlide", this.onStarterSlide.bind(this)),
          j(
            t.sliderElement,
            "visibleSlidesChanged",
            this.onVisibleSlidesChanged.bind(this)
          );
      }
      return (
        (t.prototype.onStarterSlide = function () {
          this.initTouch(),
            j(
              this.slider.sliderElement,
              "sliderChangeCurrentSlide",
              this.updatePanDirections.bind(this)
            );
        }),
        (t.prototype.onVisibleSlidesChanged = function () {
          this.slider.visibleSlides.length > 1
            ? x(this.swipeElement, { cursor: "grab", userSelect: "none" })
            : M(this.swipeElement, ["cursor", "userSelect"]);
        }),
        (t.prototype.initTouch = function () {
          this._animation.isNoAnimation && (this.interactiveDrag = !1),
            (this.eventBurrito = c.EventBurrito(this.swipeElement, {
              mouse: !0,
              axis: "horizontal" === this.axis ? "x" : "y",
              start: this._start.bind(this),
              move: this._move.bind(this),
              end: this._end.bind(this),
            })),
            this.updatePanDirections(),
            (this.cancelKineticScroll = function () {
              this.kineticScrollCancelled = !0;
            }.bind(this));
        }),
        (t.prototype._start = function (t) {
          (this.currentInteraction = {
            type:
              "pointerdown" === t.type
                ? "pointer"
                : "touchstart" === t.type
                ? "touch"
                : "mouse",
            state: d({}, this.state),
            action: "unknown",
            distance: [],
            distanceY: [],
            percent: 0,
            progress: 0,
            scrollTop: J(),
            animationStartDirection: "unknown",
            hadDirection: !1,
            startDistance: 0,
          }),
            this.logDistance(0, 0);
        }),
        (t.prototype._move = function (t, i, s, h) {
          if (!h || "unknown" !== this.currentInteraction.action) {
            this.currentInteraction.direction = this.measure(s);
            var n = this.get(s);
            if (
              ((this.currentInteraction.hadDirection ||
                Math.abs(n) > 10 ||
                Math.abs(s.y) > 10) &&
                (this.logDistance(n, s.y),
                this.currentInteraction.percent < 1 &&
                  this.setTouchProgress(n, s.y),
                "touch" === this.currentInteraction.type &&
                  t.cancelable &&
                  (("switch" !== this.currentInteraction.action &&
                    "hold" !== this.currentInteraction.action) ||
                    (this.currentInteraction.hadDirection = !0))),
              "switch" === this.currentInteraction.action)
            )
              return !0;
          }
          return !1;
        }),
        (t.prototype._end = function (t, i, s, h) {
          if ("switch" === this.currentInteraction.action) {
            var n = h ? 0 : this.measureRealDirection();
            if (this.interactiveDrag)
              this._animation.timeline.progress() < 1 &&
                this._animation.setTouchEnd(
                  n,
                  this.currentInteraction.progress,
                  s.time
                ),
                this._animation.setTouch(!1);
            else
              n &&
                this.callAction(
                  this.currentInteraction.animationStartDirection
                );
            N(this.swipeElement, "n2-grabbing");
          }
          this.onEnd(),
            delete this.currentInteraction,
            Math.abs(s.x) < 10 && Math.abs(s.y) < 10
              ? this.onTap(t)
              : c._preventClick();
        }),
        (t.prototype.onEnd = function () {
          if (
            "scroll" === this.currentInteraction.action &&
            "pointer" === this.currentInteraction.type
          ) {
            var t = this.currentInteraction.distanceY[0],
              i =
                this.currentInteraction.distanceY[
                  this.currentInteraction.distanceY.length - 1
                ],
              h = ((t.d - i.d) / (i.t - t.t)) * 10,
              n = Date.now(),
              o = function () {
                requestAnimationFrame(
                  function () {
                    var t, i;
                    if (
                      !this.kineticScrollCancelled &&
                      h &&
                      ((t = Date.now() - n),
                      (i = h * Math.exp(-t / 325)) > 1 || i < -1)
                    )
                      return K(J() + i), void o();
                    this.onEndKineticScroll();
                  }.bind(this)
                );
              }.bind(this);
            (this.kineticScrollCancelled = !1),
              o(),
              s.addEventListener("pointerdown", this.cancelKineticScroll);
          }
        }),
        (t.prototype.onEndKineticScroll = function () {
          delete this.kineticScrollCancelled,
            s.removeEventListener("pointerdown", this.cancelKineticScroll),
            C(h, "scroll-behavior", "");
        }),
        (t.prototype.setTouchProgress = function (t, i) {
          this.recognizeSwitchInteraction(),
            0 === this.currentInteraction.startDistance &&
              (this.currentInteraction.startDistance = t < 0 ? t + 1 : t - 1);
          var s,
            h = this.getPercent(t - this.currentInteraction.startDistance);
          if (
            ((this.currentInteraction.percent = h),
            "switch" === this.currentInteraction.action)
          ) {
            if (this.interactiveDrag) {
              switch (this.currentInteraction.animationStartDirection) {
                case "up":
                  s = -1 * h;
                  break;
                case "down":
                  s = h;
                  break;
                case "left":
                  s = -1 * h;
                  break;
                case "right":
                  s = h;
              }
              (this.currentInteraction.progress = s),
                this._animation.setTouchProgress(s);
            }
          } else
            ("unknown" !== this.currentInteraction.action &&
              "scroll" !== this.currentInteraction.action) ||
              this.startScrollInteraction(i);
        }),
        (t.prototype.startScrollInteraction = function (t) {
          "vertical" === this.axis &&
            ((this.slider.controlFullscreen &&
              this.slider.controlFullscreen.at) ||
              ((this.currentInteraction.action = "scroll"),
              "pointer" === this.currentInteraction.type &&
                (C(h, "scroll-behavior", "auto"),
                K(Math.max(0, this.currentInteraction.scrollTop - t)))));
        }),
        (t.prototype.recognizeSwitchInteraction = function () {
          if (
            "unknown" === this.currentInteraction.action &&
            this.slider.visibleSlides.length > 1
          )
            if ("ended" === this._animation.state) {
              var t = this.currentInteraction.direction;
              if ("unknown" !== t && this.currentInteraction.state[t]) {
                if (
                  ((this.currentInteraction.animationStartDirection = t),
                  this.interactiveDrag)
                ) {
                  this._animation.setTouch(this.axis);
                  this.callAction(t, !1);
                }
                (this.currentInteraction.action = "switch"),
                  F(this.swipeElement, "n2-grabbing");
              }
            } else
              "playing" === this._animation.state &&
                (this.currentInteraction.action = "hold");
        }),
        (t.prototype.logDistance = function (t, i) {
          this.currentInteraction.distance.length > 3 &&
            (this.currentInteraction.distance.shift(),
            this.currentInteraction.distanceY.shift()),
            this.currentInteraction.distance.push({ d: t, t: Date.now() }),
            this.currentInteraction.distanceY.push({ d: i, t: Date.now() });
        }),
        (t.prototype.measureRealDirection = function () {
          var t = this.currentInteraction.distance[0],
            i =
              this.currentInteraction.distance[
                this.currentInteraction.distance.length - 1
              ];
          return (i.d >= 0 && t.d > i.d) || (i.d < 0 && t.d < i.d) ? 0 : 1;
        }),
        (t.prototype.onTap = function (e) {
          this.preventMultipleTap ||
            (W(e.target, "n2click"),
            (this.preventMultipleTap = !0),
            r(
              function () {
                this.preventMultipleTap = !1;
              }.bind(this),
              500
            ));
        }),
        (t.prototype.updatePanDirections = function () {}),
        (t.prototype.setState = function (t, i) {
          "object" != typeof arguments[0] &&
            (((t = {})[arguments[0]] = arguments[1]), (i = arguments[2]));
          var s = !1;
          for (var h in t)
            this.state[h] !== t[h] && ((this.state[h] = t[h]), (s = !0));
          s &&
            i &&
            this.eventBurrito.supportsPointerEvents &&
            this.syncTouchAction();
        }),
        t
      );
    }),
    c.d(
      "SmartSliderControlTouchHorizontal",
      "SmartSliderControlTouch",
      function () {
        "use strict";
        function t() {
          (this.state = { left: !1, right: !1 }),
            (this.axis = "horizontal"),
            c.SmartSliderControlTouch.prototype.constructor.apply(
              this,
              arguments
            );
        }
        return (
          (t.prototype = Object.create(c.SmartSliderControlTouch.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.callAction = function (t, i) {
            switch (t) {
              case "left":
                return this.slider[n2const.isRTL() ? "previous" : "next"].call(
                  this.slider,
                  i
                );
              case "right":
                return this.slider[n2const.isRTL() ? "next" : "previous"].call(
                  this.slider,
                  i
                );
            }
            return !1;
          }),
          (t.prototype.measure = function (t) {
            return (!this.currentInteraction.hadDirection &&
              Math.abs(t.x) < 10) ||
              0 === t.x ||
              Math.abs(t.x) < Math.abs(t.y)
              ? "unknown"
              : t.x < 0
              ? "left"
              : "right";
          }),
          (t.prototype.get = function (t) {
            return t.x;
          }),
          (t.prototype.getPercent = function (t) {
            return Math.max(
              -0.99999,
              Math.min(0.99999, t / this.slider.getHorizontalTouchDimension())
            );
          }),
          (t.prototype.updatePanDirections = function () {
            var t = this.slider.currentSlide.index,
              i = t + 1 < this.slider.slides.length,
              s = t - 1 >= 0;
            this.slider.parameters.carousel && ((i = !0), (s = !0)),
              n2const.isRTL() && "vertical" !== this.slider.getAnimationAxis()
                ? this.setState({ right: i, left: s }, !0)
                : this.setState({ right: s, left: i }, !0);
          }),
          (t.prototype.syncTouchAction = function () {
            var t = this.state.left || this.state.right ? "pan-y" : "";
            C(this.swipeElement, "touch-action", t),
              i.PointerEventsPolyfill &&
                p(this.swipeElement, "touch-action", t);
          }),
          t
        );
      }
    ),
    c.d(
      "SmartSliderControlTouchVertical",
      "SmartSliderControlTouch",
      function () {
        "use strict";
        function t() {
          (this.state = { up: !1, down: !1 }),
            (this.action = { up: "next", down: "previous" }),
            (this.axis = "vertical"),
            c.SmartSliderControlTouch.prototype.constructor.apply(
              this,
              arguments
            );
        }
        return (
          (t.prototype = Object.create(c.SmartSliderControlTouch.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.callAction = function (t, i) {
            switch (t) {
              case "up":
                return this.slider.next.call(this.slider, i);
              case "down":
                return this.slider.previous.call(this.slider, i);
            }
            return !1;
          }),
          (t.prototype.measure = function (t) {
            return (!this.currentInteraction.hadDirection &&
              Math.abs(t.y) < 1) ||
              0 == t.y ||
              Math.abs(t.y) < Math.abs(t.x)
              ? "unknown"
              : t.y < 0
              ? "up"
              : "down";
          }),
          (t.prototype.get = function (t) {
            return t.y;
          }),
          (t.prototype.getPercent = function (t) {
            return Math.max(
              -0.99999,
              Math.min(0.99999, t / this.slider.getVerticalTouchDimension())
            );
          }),
          (t.prototype.updatePanDirections = function () {
            this.setState(
              {
                down:
                  !this.slider.isChangeCarousel("previous") ||
                  !this.slider.parameters.controls.blockCarouselInteraction,
                up:
                  !this.slider.isChangeCarousel("next") ||
                  !this.slider.parameters.controls.blockCarouselInteraction,
              },
              !0
            );
          }),
          (t.prototype.syncTouchAction = function () {
            var t = this.state.up || this.state.down ? "pan-x" : "";
            C(this.swipeElement, "touch-action", t),
              i.PointerEventsPolyfill &&
                p(this.swipeElement, "touch-action", t);
          }),
          (t.prototype._start = function (t) {
            (this.slider.blockCarousel = !0),
              c.SmartSliderControlTouch.prototype._start.apply(this, arguments);
          }),
          (t.prototype.onEnd = function (t) {
            c.SmartSliderControlTouch.prototype.onEnd.apply(this, arguments),
              (this.slider.blockCarousel = !1);
          }),
          t
        );
      }
    ),
    c.d("SmartSliderControlAutoplayWait", function () {
      "use strict";
      function t(t) {
        (this.autoplay = t), (this.waits = {});
      }
      return (
        (t.Strong = ["lightbox", "load"]),
        (t.prototype.add = function (t) {
          (this.waits[t] = 1), this._refresh();
        }),
        (t.prototype.resolve = function (t) {
          delete this.waits[t], this._refresh();
        }),
        (t.prototype.resolveWeak = function () {
          var i = {};
          for (var s in this.waits)
            1 === this.waits[s] && -1 !== t.Strong.indexOf(s) && (i[s] = 1);
          (this.waits = i), this._refresh();
        }),
        (t.prototype.resolveAll = function () {
          (this.waits = {}), this._refresh();
        }),
        (t.prototype._refresh = function () {
          var t = !1;
          for (var i in this.waits)
            if (this.waits[i]) {
              t = !0;
              break;
            }
          this.autoplay.setState("wait", t);
        }),
        t
      );
    }),
    c.d("SmartSliderSlideBackgroundColor", function () {
      function t(t, i) {
        this.el = i;
      }
      return (
        (t.prototype.getLoadPromise = function () {
          return !0;
        }),
        t
      );
    }),
    c.d("SmartSliderSlideBackgroundImage", function () {
      function t(t, i, s, h) {
        (this.slide = t),
          (this.manager = i),
          (this.background = s),
          (this._promise = new Promise(
            function (t) {
              this._resolve = t;
            }.bind(this)
          )),
          (this.imageElements = Array.from(h));
      }
      return (
        (t.prototype.getLoadPromise = function () {
          return this._promise;
        }),
        (t.prototype.preLoad = function () {
          this.blur = A(this.imageElements[0], "blur");
          const t = A(this.imageElements[0].parentElement, "mode"),
            i = [];
          this.blur &&
            i.push({
              item: this.imageElements[this.imageElements.length - 1],
              blur: this.blur,
            }),
            "blurfit" === t &&
              ((this.blurFitMode = A(this.imageElements[0], "blurfitmode")),
              (this.globalBlurFit = A(this.imageElements[0], "globalblur")),
              (this.editorBlur = A(this.imageElements[0], "bgblur")),
              i.push({
                item: this.imageElements[0],
                blur: this.blurFitMode ? this.globalBlurFit : this.editorBlur,
              })),
            i.length &&
              i.forEach(function (t) {
                x(t.item, {
                  margin: -2 * t.blur + "px",
                  padding: 2 * t.blur + "px",
                }),
                  C(t.item.children[0], "filter", "blur(" + t.blur + "px)");
              });
          var s = this.imageElements[0].querySelector("img");
          (s.loading = "eager"),
            s.complete
              ? this.onImageLoaded(s)
              : (s.addEventListener("load", this.onImageLoaded.bind(this, s)),
                s.addEventListener("error", this.onImageLoaded.bind(this, s)));
        }),
        (t.prototype.onImageLoaded = function (t) {
          "function" == typeof t.decode
            ? (t
                .decode()
                .then(this._resolve.bind(this))
                .catch(
                  function (t) {
                    console.error(t), this._resolve();
                  }.bind(this)
                ),
              r(this._resolve.bind(this), 50))
            : this._resolve();
        }),
        (t.prototype.fadeOut = function () {
          c.K.to(c.MW.L(this.imageElements), 0.3, { opacity: 0 });
        }),
        (t.prototype.onSlideDeviceChanged = function () {}),
        t
      );
    }),
    c.d("SmartSliderSlideBackgroundVideo", function () {
      function t(t, i, s) {
        !t.slider.parameters["background.video.mobile"] && n2const.isPhone
          ? R(s)
          : n2const.isVideoAutoplayAllowed()
          ? ((this.slide = t),
            (this.slider = t.slider),
            (this.background = i),
            (this.video = s),
            (this.isReady = !1),
            (this.state = { ready: !1, scroll: !1, slide: !1, ended: !1 }),
            (this.promise = !1),
            i.elements.image
              ? this.slider.visible(this.load.bind(this))
              : this.load())
          : R(s);
      }
      return (
        (t.prototype.load = function () {
          if (this.video.videoWidth > 0) this.onReady();
          else {
            j(this.video, "error", this.onError.bind(this)),
              j(this.video, "canplay", this.onReady.bind(this)),
              j(this.video, "loadedmetadata", this.onReady.bind(this)),
              this.video.loop ||
                j(this.video, "ended", this.onEnded.bind(this));
            var t = function () {
              r(
                function () {
                  0 === this.video.networkState && this.onError();
                }.bind(this),
                100
              );
            }.bind(this);
            this.video.n2LoadStarted === o
              ? j(this.video, "loadstart", t)
              : t(),
              this.video.load(),
              this.safePlay();
          }
        }),
        (t.prototype.getLoadPromise = function () {
          return !0;
        }),
        (t.prototype.onReady = function (e) {
          this.isReady ||
            ((this.isReady = !0),
            this.safePause(),
            this.slider.ready(
              function () {
                this.setState("ready", !0, !0);
              }.bind(this)
            ),
            this.slider.stages.done(
              "BeforeShow",
              function () {
                this.slide.isActiveWhen() && this.setState("slide", !0, !0);
              }.bind(this)
            ),
            j(
              this.slider.sliderElement,
              "mainAnimationStart",
              function (e) {
                this.setState(
                  "slide",
                  this.slide.isActiveWhen(
                    this.slider.slides[e.detail.currentSlideIndex]
                  ),
                  !0
                );
              }.bind(this)
            ),
            j(
              this.slider.sliderElement,
              "mainAnimationComplete",
              function (e) {
                this.setState(
                  "slide",
                  this.slide.isActiveWhen(
                    this.slider.slides[e.detail.currentSlideIndex]
                  ),
                  !0
                );
              }.bind(this)
            ),
            j(
              this.slider.sliderElement,
              "CurrentSlideChanged",
              function (e) {
                this.setState(
                  "slide",
                  this.slide.isActiveWhen(e.detail.currentSlide),
                  !0
                );
              }.bind(this)
            ),
            A(this.video, "resetSlideChange") &&
              j(
                this.slider.sliderElement,
                "mainAnimationComplete",
                function (e) {
                  this.video.currentTime > 0 &&
                    -1 ===
                      this.slider
                        .getVisibleSlides(
                          this.slider.slides[e.detail.currentSlideIndex]
                        )
                        .indexOf(this.slide) &&
                    ((this.video.currentTime = 0),
                    this.setState("ended", !1, !0));
                }.bind(this)
              ),
            c.ScrollTracker.add(
              this.slide.element,
              "not-visible",
              function () {
                this.setState("scroll", !0, !0);
              }.bind(this),
              function () {
                this.setState("scroll", !1, !0);
              }.bind(this)
            )),
            (e && "canplay" !== e.type) || this.background.fadeOut();
        }),
        (t.prototype.onError = function () {
          R(video);
        }),
        (t.prototype.safeCallback = function (t) {
          this.promise && Promise !== o ? this.promise.then(t).catch(t) : t();
        }),
        (t.prototype.safePlay = function () {
          this.safeCallback(
            function () {
              (this.promise = this.video.play()),
                this.promise &&
                  Promise !== o &&
                  this.promise.catch(
                    function (e) {
                      if ("NotAllowedError" === e.name)
                        var t = function () {
                            B(i), !1 !== this.promise && this.safePlay();
                          }.bind(this),
                          i = [U(n, "click", t), U(n, "touchend", t)];
                    }.bind(this)
                  );
            }.bind(this)
          );
        }),
        (t.prototype.safePause = function () {
          this.safeCallback(
            function () {
              this.video.pause(), (this.promise = !1);
            }.bind(this)
          );
        }),
        (t.prototype.onEnded = function () {
          this.setState("ended", !0, !0);
        }),
        (t.prototype.setState = function (t, i, s) {
          (s = s || !1),
            (this.state[t] = i),
            s &&
              (this.state.ready &&
              !this.state.ended &&
              this.state.slide &&
              this.state.scroll
                ? (this.safePlay(), Y(this.video, "n2playvideo"))
                : this.safePause());
        }),
        t
      );
    }),
    c.d("SmartSliderSlideBackground", function () {
      function t(t, i, s) {
        (this.types = this.types || {
          color: "SmartSliderSlideBackgroundColor",
          image: "SmartSliderSlideBackgroundImage",
          video: "SmartSliderSlideBackgroundVideo",
        }),
          (this.width = 0),
          (this.height = 0),
          (this.slide = t),
          (this.element = i),
          (this.manager = s),
          (this.readyPromise = new Promise(
            function (t) {
              this.readyPromiseResolve = t;
            }.bind(this)
          )),
          (this.promise = new Promise(
            function (t) {
              this.resolve = function () {
                t(), delete this.resolve;
              }.bind(this);
            }.bind(this)
          ));
      }
      return (
        (t.prototype.preloadOnce = function () {
          if (!this.elements) {
            (this.elements = { color: !1, image: !1, video: !1 }),
              (this.currentSrc = ""),
              (this.mode = A(this.element, "mode")),
              (this.opacity = A(this.element, "opacity"));
            var t = this.element.querySelectorAll(
              ".n2-ss-slide-background-image"
            );
            t.length &&
              ((this.elements.image = new c[this.types.image](
                this.slide,
                this.manager,
                this,
                t
              )),
              this.elements.image.preLoad());
            var i = this.element.querySelector(".n2-ss-slide-background-color");
            i && (this.elements.color = new c[this.types.color](this, i));
            var s = this.element.querySelector(".n2-ss-slide-background-video");
            s &&
              (this.elements.video = new c[this.types.video](
                this.slide,
                this,
                s
              ));
            var h = this.slide.slider.parameters.backgroundParallax;
            h &&
              h.strength > 0 &&
              !(
                (n2const.isPhone && !h.mobile) ||
                (n2const.isTablet && !h.tablet)
              ) &&
              this.hasBackground() &&
              (this.slide.slider.stages.done(
                "BeforeShow",
                function () {
                  this.startFixed(h);
                }.bind(this)
              ),
              (this.manager.hasFixed = !0)),
              this.readyPromiseResolve(),
              delete this.readyPromiseResolve,
              delete this.readyPromise;
            var n = [];
            for (var o in this.elements)
              this.elements[o] && n.push(this.elements[o].getLoadPromise());
            Promise.all(n).then(this.resolve);
          }
        }),
        (t.prototype.onReady = function (t) {
          this.readyPromise ? this.readyPromise.then(t) : t();
        }),
        (t.prototype.preLoad = function () {
          return this.preloadOnce(), this.promise;
        }),
        (t.prototype.fadeOut = function () {
          this.hasImage() && this.elements.image.fadeOut();
        }),
        (t.prototype.hasColor = function () {
          return this.elements && this.elements.color;
        }),
        (t.prototype.hasImage = function () {
          return this.elements && this.elements.image;
        }),
        (t.prototype.hasVideo = function () {
          return this.elements && this.elements.video;
        }),
        (t.prototype.hasBackground = function () {
          return (
            this.elements &&
            (this.elements.color || this.elements.image || this.elements.video)
          );
        }),
        (t.prototype.onSlideDeviceChanged = function (t) {
          this.hasImage() && this.elements.image.onSlideDeviceChanged(t);
        }),
        (t.prototype.startFixed = function (t) {
          this.slide.slider.started(
            function () {
              navigator.userAgent.match(/^((?!chrome|android).)*safari/i) ||
                c.FixedBackground.addElement(this.element, t);
            }.bind(this)
          );
        }),
        t
      );
    }),
    c.d("FrontendComponentCommon", ["FrontendComponent"], function () {
      function t(t, i, s, h) {
        (this.wraps = {}),
          (this.skipSelfAnimation = !1),
          c.FrontendComponent.prototype.constructor.apply(this, arguments);
      }
      return (
        (t.prototype = Object.create(c.FrontendComponent.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.init = function (t) {
          (this.stateCBs = []), (this.state = { InComplete: !1 });
          var i = this.layer.querySelector(":scope > .n2-ss-layer-mask");
          switch ((i && (this.wraps.mask = i), A(this.layer, "pm"))) {
            case "absolute":
              this.placement = new c.FrontendPlacementAbsolute(this);
              break;
            case "normal":
              this.placement = new c.FrontendPlacementNormal(this);
              break;
            case "content":
              this.placement = new c.FrontendPlacementContent(this);
              break;
            default:
              this.placement = new c.FrontendPlacementDefault(this);
          }
          (this.animations = A(this.layer, "animv2")),
            c.FrontendComponent.prototype.init.call(this, t);
        }),
        (t.prototype.setState = function (t, i) {
          this.state[t] = i;
          for (var s = 0; s < this.stateCBs.length; s++)
            this.stateCBs[s].call(this, this.state);
        }),
        (t.prototype.addStateCallback = function (t) {
          this.stateCBs.push(t), t.call(this, this.state);
        }),
        (t.prototype.start = function () {
          this.placement.start(),
            c.FrontendComponent.prototype.start.call(this);
          var t = parseFloat(this.get("rotation"));
          t && (c.MW.i(this.layer).layerRotation = t);
        }),
        (t.prototype.onDeviceChange = function (t) {
          c.FrontendComponent.prototype.onDeviceChange.call(this, t);
          for (var i = 0; i < this.children.length; i++)
            this.children[i].onDeviceChange(t);
          this.placement.onDeviceChange(t), this.onAfterDeviceChange(t);
        }),
        (t.prototype.onAfterDeviceChange = function (t) {}),
        (t.prototype.onResize = function (t, i) {
          c.FrontendComponent.prototype.onResize.apply(this, arguments),
            this.placement.onResize(t, i),
            this.animationManager && this.animationManager.onResize();
        }),
        (t.prototype.hasLayerAnimation = function () {
          return this.animationManager !== o;
        }),
        (t.prototype.getAnimatableElement = function () {
          if (!this.ft) {
            this.ft = this.layer;
            var t = A(this.layer, "animatableselector");
            t &&
              ((this.ft = this.ft.querySelector(t)),
              (this.ft.relatedLayer = this.ft));
          }
          return this.ft;
        }),
        (t.prototype.createLayerAnimations = function (t, i) {
          var s = [];
          if (!n2const.isBot) {
            if (!this.skipSelfAnimation) {
              var h = new c.FrontendLayerAnimationManager(
                this,
                this.layer,
                this.getAnimatableElement(),
                this.slide.getPerspective()
              );
              h.setEventBased(this.slide.realSlide, t, i),
                h.hasAnimation()
                  ? ((this.animationManager = h), s.push(h))
                  : this.setState("InComplete", !0);
            }
            s.push.apply(
              s,
              c.FrontendComponent.prototype.createLayerAnimations.call(
                this,
                t,
                i
              )
            );
          }
          return s;
        }),
        (t.prototype.getParallaxNodes = function () {
          var t = [];
          return (
            this.isVisible &&
              (A(this.layer, "ssparallax") && t.push(this.layer),
              t.push.apply(
                t,
                c.FrontendComponent.prototype.getParallaxNodes.call(this)
              )),
            t
          );
        }),
        (t.prototype.addWrap = function (t, i) {
          return this.wraps[t] === o && (this.wraps[t] = i), i;
        }),
        (t.prototype.getContents = function () {
          return [];
        }),
        t
      );
    }),
    c.d("FrontendComponent", function () {
      function t(t, i, s, h) {
        (this.device = ""),
          (this.children = []),
          (this.slide = t),
          (this.parent = i),
          (this.layer = s),
          (s.layer = this),
          (this.isVisible = !0),
          this.init(h);
      }
      return (
        (t.prototype.init = function (t) {
          if (t)
            for (var i = 0; i < t.length; i++) {
              var s = t[i];
              switch (A(s, "sstype")) {
                case "content":
                  this.children.push(
                    new c.FrontendComponentContent(this.slide, this, s)
                  );
                  break;
                case "row":
                  this.children.push(
                    new c.FrontendComponentRow(this.slide, this, s)
                  );
                  break;
                case "col":
                  this.children.push(
                    new c.FrontendComponentCol(this.slide, this, s)
                  );
                  break;
                default:
                  this.children.push(
                    new c.FrontendComponentLayer(this.slide, this, s)
                  );
              }
            }
          this.slide.slider.isAdmin || this.initEvents();
        }),
        (t.prototype.start = function () {
          for (var t = 0; t < this.children.length; t++)
            this.children[t].start();
        }),
        (t.prototype.onDeviceChange = function (t) {
          this.device = t;
        }),
        (t.prototype.onResize = function (t, i) {
          for (var s = 0; s < this.children.length; s++)
            this.children[s].onResize(t, i);
        }),
        (t.prototype.getDevice = function (t, i) {
          var s = A(this.layer, this.device + t);
          return s !== o
            ? s
            : "desktopportrait" !== this.device
            ? A(this.layer, "desktopportrait" + t)
            : i !== o
            ? i
            : 0;
        }),
        (t.prototype.get = function (t) {
          return A(this.layer, t);
        }),
        (t.prototype.initEvents = function () {
          this.initEvent("click", "click"),
            this.initEvent("mouseenter", "mouseenter"),
            this.initEvent("mouseleave", "mouseleave"),
            this.initEvent("play", "n2play"),
            this.initEvent("pause", "n2pause"),
            this.initEvent("stop", "n2stop");
        }),
        (t.prototype.initEvent = function (t, i) {
          var s = this.layer,
            h = A(s, t);
          if (h) {
            var n = A(s, "animatableselector");
            n && (s = s.querySelector(n)),
              s.addEventListener(
                i,
                function (t, e) {
                  eval(t);
                }.bind(this, h)
              ),
              "click" === i && (s.style.cursor = "pointer");
          }
        }),
        (t.prototype.getAnimatableElement = function () {
          return null;
        }),
        (t.prototype.createLayerAnimations = function (t, i) {
          for (var s = [], h = 0; h < this.children.length; h++)
            s.push.apply(s, this.children[h].createLayerAnimations(t, i));
          return s;
        }),
        (t.prototype.getParallaxNodes = function () {
          for (var t = [], i = 0; i < this.children.length; i++)
            t.push.apply(t, this.children[i].getParallaxNodes());
          return t;
        }),
        t
      );
    }),
    c.d("FrontendSlideControls", function () {
      function t(t, i) {
        (this.slider = t),
          (this.element = i),
          (this.element.ssSlide = this),
          (this.status = new c.SlideStatus());
      }
      return (
        (t.prototype.isCurrentlyEdited = function () {
          return this._isCurrentlyEdited;
        }),
        (t.prototype.is = function (t) {
          return this === t;
        }),
        (t.prototype.h = function (t, i) {
          Z(this.element, t, i);
        }),
        (t.prototype.isVisibleWhen = function (t) {
          return !0;
        }),
        (t.prototype.isActiveWhen = function (t) {
          return !0;
        }),
        (t.prototype.isStatic = function () {
          return !1;
        }),
        (t.prototype.initLayerAnimations = function () {
          this.isCurrentlyEdited() ||
            (this.status.set("INITIALIZED"),
            (this.playOnce =
              !this.slider.isAdmin &&
              this.slider.parameters.layerMode.playOnce),
            this.refreshTimelines(),
            this.isStatic()
              ? this.slider.visible(
                  function () {
                    this.playIn();
                  }.bind(this)
                )
              : this.playOnce ||
                j(
                  this.element,
                  "mainAnimationStartInCancel",
                  this.reset.bind(this)
                ));
        }),
        (t.prototype.setDevice = function (t) {
          if (!this.isCurrentlyEdited())
            for (var i = 0; i < this.layerAnimations.length; i++)
              this.layerAnimations[i].setDevice(t);
        }),
        (t.prototype.resize = function (t) {
          this.isCurrentlyEdited() || this.animationsRefreshRatios(t);
        }),
        (t.prototype.animationsRefreshRatios = function (t) {
          for (var i = 0; i < this.layerAnimations.length; i++)
            this.layerAnimations[i].refreshRatio(t.slideW, t.slideH);
        }),
        (t.prototype.refreshTimelines = function () {
          this.slider.isAdmin || !1 === this.slider.disabled.layerAnimations
            ? (this.layerAnimations = this.component.createLayerAnimations(
                this.slider.responsive.ratios.slideW,
                this.slider.responsive.ratios.slideH
              ))
            : (this.layerAnimations = []);
        }),
        (t.prototype.playIn = function () {
          if (this.status.is("INITIALIZED")) {
            this.status.set("PLAYING"), this.onPlay();
            for (var t = 0; t < this.layerAnimations.length; t++)
              this.layerAnimations[t].play();
            Y(this.element, "layerAnimationPlayIn");
          } else this.status.is("SUSPENDED") && this.unsuspend();
        }),
        (t.prototype.onPlay = function () {}),
        (t.prototype.playSpecialEventOnlySetToZero = function () {
          if (this.status.is("INITIALIZED"))
            for (var t = 0; t < this.layerAnimations.length; t++)
              this.layerAnimations[t].playSpecialEventOnlySetToZero();
        }),
        (t.prototype.playSpecialEventOnly = function () {
          if (this.status.is("INITIALIZED")) {
            this.status.set("PLAYING");
            for (var t = 0; t < this.layerAnimations.length; t++)
              this.layerAnimations[t].playSpecialEventOnly();
            Y(this.element, "layerAnimationPlayIn");
          }
        }),
        (t.prototype.playOut = function () {
          if (this.status.is("PLAYING")) {
            for (var t = [], i = 0; i < this.layerAnimations.length; i++)
              this.layerAnimations[i].beforeMainSwitch(t);
            Promise.all(t).then(this.onOutAnimationsPlayed.bind(this));
          } else this.onOutAnimationsPlayed();
        }),
        (t.prototype.onOutAnimationsPlayed = function () {
          this.playOnce
            ? this.status.set("ENDED")
            : this.status.set("INITIALIZED"),
            Y(this.element, "layerAnimationCompleteOut");
        }),
        (t.prototype.suspend = function () {
          for (var t = 0; t < this.layerAnimations.length; t++)
            this.layerAnimations[t].suspend();
          this.status.set("SUSPENDED");
        }),
        (t.prototype.unsuspend = function () {
          if (this.status.is("SUSPENDED")) {
            for (var t = 0; t < this.layerAnimations.length; t++)
              this.layerAnimations[t].unsuspend();
            this.status.set("PLAYING");
          }
        }),
        (t.prototype.reset = function () {
          if (this.layerAnimations) {
            for (var t = 0; t < this.layerAnimations.length; t++)
              this.layerAnimations[t].reset();
            this.status.set("INITIALIZED");
          }
        }),
        (t.prototype.getPerspective = function () {
          return this.slider.getPerspective();
        }),
        t
      );
    }),
    c.d("FixedBackground", function () {
      var t = function () {
        if (!navigator.userAgent.match(/iphone|ipod|ipad|android/i))
          return (t = function () {
            return i.innerHeight;
          })();
        var s,
          n = Math.abs(i.orientation),
          o = { w: 0, h: 0 };
        return (
          ((s = l()).style.position = "fixed"),
          (s.style.height = "100vh"),
          (s.style.width = 0),
          (s.style.top = 0),
          h.appendChild(s),
          (o.w = 90 === n ? s.offsetHeight : i.innerWidth),
          (o.h = 90 === n ? i.innerWidth : s.offsetHeight),
          h.removeChild(s),
          (s = null),
          (t = function () {
            return 90 !== Math.abs(i.orientation) ? o.h : o.w;
          })()
        );
      };
      return {
        _windowHeight: 0,
        isStarted: !1,
        elements: [],
        listeners: [],
        start: function () {
          return (
            !this.isStarted &&
            (this.resize(),
            this.listeners.push(U(i, "load", this.resize.bind(this))),
            this.listeners.push(U(i, "resize", this.resize.bind(this))),
            this.listeners.push(
              U(i, "orientationchange", this.resize.bind(this))
            ),
            this.listeners.push(
              U(s, "scroll", this.render.bind(this), {
                capture: !0,
                passive: !0,
              })
            ),
            (this.isStarted = !0),
            !0)
          );
        },
        end: function () {
          this.isStarted && (B(this.listeners), (this.isStarted = !1));
        },
        addElement: function (t, i) {
          var s = {
            animated: t,
            animatedSMW: c.MW.i(t),
            parent: t.parentNode,
            data: i,
            y: 0,
          };
          this.elements.push(s),
            (s.animatedSMW.backfaceVisibility = "hidden"),
            (s.animatedSMW["will-change"] = "transform"),
            this.start() || this.renderElement(s);
        },
        removeElement: function (t) {
          for (var i = 0; i < this.elements.length; i++)
            if (this.elements[i].animated === t) {
              this.elements.splice(i, 1);
              break;
            }
          0 === this.elements.length && this.end();
        },
        resize: function () {
          (this.windowHeight = t()), this.render();
        },
        render: function () {
          for (var t = 0; t < this.elements.length; t++)
            this.renderElement(this.elements[t]);
        },
        renderElement: function (t) {
          var i = t.parent.getBoundingClientRect(),
            s = 0;
          if (
            (i.top < 0 || i.height > this.windowHeight
              ? (s = i.top / i.height)
              : i.bottom > this.windowHeight &&
                (s = (i.bottom - this.windowHeight) / i.height),
            s <= 1 && s >= -1)
          ) {
            var h = Math.round(s * (-t.data.strength * i.height)) || 0;
            t.y !== h && (this.setY(t.animatedSMW, h), (t.y = h));
          }
        },
        setY: function (t, i) {
          t.y = i;
        },
      };
    }),
    c.d("LayerParallax", function () {
      function t(t, i) {
        (this.ticking = !1),
          (this.active = !1),
          (this.mouseOrigin = !1),
          (this.parallaxedNodes = []),
          (this.parallaxedSlideNodes = null),
          (this._scrollCallback = !1),
          (this._listeners = []),
          (this.firstStart = !0),
          (this.parameters = d(
            {
              mode: "scroll",
              origin: "slider",
              is3D: !1,
              animate: !0,
              scrollmove: "both",
            },
            i
          )),
          /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
            ((this.parameters.is3D = !1),
            (c.MW.X(
              t.sliderElement.querySelectorAll(".n2-ss-layers-container")
            ).perspective = "none")),
          (this.x = this.y = 0),
          (this.levels = {
            1: 0.01,
            2: 0.02,
            3: 0.05,
            4: 0.1,
            5: 0.2,
            6: 0.3,
            7: 0.4,
            8: 0.5,
            9: 0.6,
            10: 0.7,
          }),
          this.parameters.is3D &&
            ((this.rotationX = this.rotationY = 0),
            (this.levelsDeg = {
              1: 2,
              2: 6,
              3: 10,
              4: 15,
              5: 20,
              6: 25,
              7: 30,
              8: 35,
              9: 40,
              10: 45,
            })),
          this.parameters.animate && (this.render = this.animateRender),
          (this.slider = t),
          (this.sliderElement = t.sliderElement),
          (this.lt = this.draw.bind(this));
      }
      return (
        (t.prototype.resize = function () {
          this.refreshSliderDimension();
        }),
        (t.prototype.refreshSliderDimension = function () {
          var t = this.sliderElement.getBoundingClientRect();
          this.dimensions = {
            w2: t.width / 2,
            h2: t.height / 2,
            x: (t.x || t.left) + t.width / 2,
            y: (t.y || t.top) + t.height / 2,
          };
        }),
        (t.prototype.enable = function () {
          (this.active = !0),
            requestAnimationFrame(this.resize.bind(this)),
            this._listeners.push(
              U(this.sliderElement, "SliderResize", this.resize.bind(this))
            );
          var t = -1,
            s = -1;
          switch (
            ((this.mouseX = !1),
            (this.mouseY = !1),
            (this.scrollY = !1),
            this.parameters.horizontal)
          ) {
            case "mouse":
              this.mouseX = !0;
              break;
            case "mouse-invert":
              (this.mouseX = !0), (t = 1);
          }
          switch (this.parameters.vertical) {
            case "mouse":
              this.mouseY = !0;
              break;
            case "mouse-invert":
              (this.mouseY = !0), (s = 1);
              break;
            case "scroll":
              (this.scrollY = !0), (s = 1);
              break;
            case "scroll-invert":
              (this.scrollY = !0), (s = -1);
          }
          if (
            ((this.mouseX || this.mouseY) &&
              (this._listeners.push(
                U(this.sliderElement, "mouseenter", this.mouseEnter.bind(this))
              ),
              this._listeners.push(
                U(
                  this.sliderElement,
                  "mousemove",
                  this.mouseMove.bind(this, t, s)
                )
              ),
              this._listeners.push(
                U(
                  this.sliderElement,
                  "mouseleave",
                  this.mouseLeave.bind(this, !1)
                )
              ),
              this.sliderElement.matches(":hover") && this.mouseEnter(!1)),
            this.scrollY)
          ) {
            var h = -1,
              n = 1;
            switch (this.parameters.scrollmove) {
              case "bottom":
                s > 0 ? (n = 0) : (h = 0);
                break;
              case "top":
                s > 0 ? (h = 0) : (n = 0);
            }
            (this._scrollCallback = this.scroll.bind(this, s, h, n)),
              this._listeners.push(
                U(i, "scroll", this._scrollCallback, {
                  capture: !0,
                  passive: !0,
                })
              ),
              this._listeners.push(U(i, "resize", this._scrollCallback));
          }
        }),
        (t.prototype.disable = function () {
          B(this._listeners), (this.active = !1);
        }),
        (t.prototype.start = function (t) {
          if (
            (null !== this.parallaxedSlideNodes && this.end(), this.firstStart)
          ) {
            if (
              ((this.parallaxedStaticSlideNodes = []), this.slider.staticSlides)
            )
              for (var i = 0; i < this.slider.staticSlides.length; i++)
                this.parallaxedStaticSlideNodes =
                  this.parallaxedStaticSlideNodes.concat(
                    this.slider.staticSlides[i].getParallaxNodes()
                  );
            this.firstStart = !1;
          }
          if (
            ((this.parallaxedSlideNodes = t.getParallaxNodes()),
            (this.parallaxedNodes = this.parallaxedSlideNodes.concat(
              this.parallaxedStaticSlideNodes
            )),
            this.parallaxedNodes.length)
          ) {
            if (
              ((this.dt = c.MW.L(this.parallaxedNodes)), this.parameters.is3D)
            ) {
              var s = this.slider.getPerspective();
              s > 0 &&
                this.parallaxedNodes.forEach(function (t) {
                  c.MW.i(t.parentNode).perspective = s;
                });
            }
            this.active || this.enable(),
              this._scrollCallback && this._scrollCallback();
          } else
            (this.parallaxedNodes = null),
              (this.parallaxedSlideNodes = null),
              this.active && this.disable();
        }),
        (t.prototype.end = function () {
          switch (this.parameters.mode) {
            case "mouse-scroll":
              this.mouseLeave(!0);
              break;
            case "scroll":
              break;
            default:
              this.mouseLeave(!0);
          }
          this.parallaxedNodes = null;
        }),
        (t.prototype.mouseEnter = function (e) {
          this.ticking || (c.l.add(this.lt), (this.ticking = !0)),
            this.refreshSliderDimension(),
            e && "enter" === this.parameters.origin
              ? (this.mouseOrigin = { x: e.clientX, y: e.clientY })
              : (this.mouseOrigin = this.dimensions);
        }),
        (t.prototype.mouseMove = function (t, i, e) {
          !1 !== this.mouseOrigin &&
            (this.mouseX &&
              ((this.x = t * (e.clientX - this.mouseOrigin.x)),
              this.parameters.is3D &&
                (this.rotationY = -this.x / this.dimensions.w2)),
            this.mouseY &&
              ((this.y = i * (e.clientY - this.mouseOrigin.y)),
              this.parameters.is3D &&
                (this.rotationX = this.y / this.dimensions.h2)));
        }),
        (t.prototype.mouseLeave = function (t) {
          this.ticking && (c.l.remove(this.lt), (this.ticking = !1));
          var i = {};
          this.mouseX && (i.parallaxX = 0),
            this.mouseY && (i.parallaxY = 0),
            this.parameters.is3D &&
              (i.parallaxRotationX = i.parallaxRotationY = 0),
            c.K.to(t ? c.MW.L(this.parallaxedSlideNodes) : this.dt, 2, i);
        }),
        (t.prototype.getScrollTopRecursive = function (t, i) {
          return null === t || t.scrollTop === o
            ? i
            : ((i += t.scrollTop), this.getScrollTopRecursive(t.parentNode, i));
        }),
        (t.prototype.scroll = function (t, s, h) {
          this.refreshSliderDimension();
          var n = i.innerHeight,
            o = this.getScrollTopRecursive(this.sliderElement, 0);
          0 < this.dimensions.y + this.dimensions.h2 &&
            n > this.dimensions.y - this.dimensions.h2 &&
            ((this.y = Math.max(
              s,
              Math.min(
                h,
                (2 * (this.dimensions.y + this.dimensions.h2)) /
                  (n + 2 * this.dimensions.h2) -
                  1
              )
            )),
            this.dimensions.y + o < n && (this.y = Math.min(0, this.y)),
            (this.y *= -t * this.dimensions.h2 * 4),
            this.parameters.is3D &&
              (this.rotationX = this.y / this.dimensions.h2),
            this.draw());
        }),
        (t.prototype.draw = function () {
          if (this.parallaxedNodes)
            for (var t = 0; t < this.parallaxedNodes.length; t++) {
              var i = A(this.parallaxedNodes[t], "ssparallax"),
                s = this.levels[i],
                h = {};
              if (this.parameters.is3D) {
                var n = this.levelsDeg[i];
                (h.parallaxRotationX = this.rotationX * n),
                  (h.parallaxRotationY = this.rotationY * n);
              }
              (h.parallaxX = Math.round(this.x * s)),
                (h.parallaxY = Math.round(this.y * s)),
                this.render(this.dt[t], h);
            }
        }),
        (t.prototype.render = function (t, i) {
          t.setValues(i);
        }),
        (t.prototype.animateRender = function (t, i) {
          c.K.to(t, 0.6, i);
        }),
        t
      );
    }),
    c.d("FrontendPlacement", function () {
      function t(t) {
        (this.layer = t), (this.linked = []);
      }
      return (
        (t.prototype.start = function () {}),
        (t.prototype.onDeviceChange = function (t) {}),
        (t.prototype.vt = function () {
          if (this.linked.length) {
            var t = this.layer.layer;
            this._sizePosition = {
              left: t.offsetLeft,
              top: t.offsetTop,
              width: t.offsetWidth,
              height: t.offsetHeight,
            };
          }
        }),
        (t.prototype.onResize = function (t, i) {
          if (this.linked.length) {
            this.vt();
            for (var s = 0; s < this.linked.length; s++)
              this.linked[s].onResizeLinked(t, i);
          }
        }),
        (t.prototype.addLinked = function (t) {
          this.linked.push(t);
        }),
        (t.prototype.isVisible = function () {
          return 1 != +A(this.layer.layer, "hide" + this.layer.device);
        }),
        (t.prototype.getPositionSize = function () {
          return d({}, this._sizePosition);
        }),
        t
      );
    }),
    c.d("FrontendSliderSlide", ["FrontendSliderSlideAbstract"], function () {
      function t(t, i, s) {
        (this.slides = [this]),
          (this.playCount = 0),
          c.FrontendSliderSlideAbstract.prototype.constructor.apply(
            this,
            arguments
          ),
          (this.id = A(i, "id")),
          (this._slideFocus = i.querySelector(".n2-ss-slide--focus")),
          (this.focusableElements = Array.from(
            i.querySelectorAll(
              'a[href]:not([href=""]),link,button,input:not([type="hidden"]),select,textarea,audio[controls],video[controls],[tabindex]:not([tabindex="-1"])'
            )
          ));
        var h = v(i, "tabindex");
        ("0" === h || +h > 0) && this.focusableElements.push(i),
          this.disableFocus(),
          (this.background = !1),
          t.parameters.admin
            ? (this.minimumSlideDuration = 0)
            : ((this.minimumSlideDuration = +A(i, "slideDuration")),
              this.minimumSlideDuration || (this.minimumSlideDuration = 0)),
          (this._isCurrentlyEdited =
            this.slider.parameters.admin &&
            i.classList.contains("n2-ss-currently-edited-slide")),
          this.isCurrentlyEdited()
            ? ((this.layer = i.querySelector(
                '.n2-ss-layer[data-sstype="slide"]'
              )),
              j(
                t.sliderElement,
                "SliderDeviceOrientation",
                function () {
                  this.slider.visibleRealSlides.push(this),
                    (this.isVisible = !0),
                    (this.slider.responsive.visibleRealSlidesChanged = !0),
                    this.h("Visible");
                }.bind(this)
              ))
            : ((this.component = new c.FrontendComponentSectionSlide(
                this,
                t,
                i.querySelector('.n2-ss-layer[data-sstype="slide"]')
              )),
              (this.layer = this.component.layer));
      }
      (t.prototype = Object.create(c.FrontendSliderSlideAbstract.prototype)),
        (t.prototype.constructor = t),
        (t.prototype._setInside = function (t) {
          this.isInside !== t &&
            ((this.isInside = t),
            this.isCurrentlyEdited() ||
              (t
                ? this.status.is("SUSPENDED") && this.unsuspend()
                : !this.slider.parameters.layerMode.playOnce ||
                  this.playCount < 1
                ? this.reset()
                : "skippable" === this.slider.parameters.layerMode.mode &&
                  this.suspend()));
        });
      var i = !1;
      try {
        f("div").focus(
          Object.defineProperty({}, "preventScroll", {
            get: function () {
              i = !0;
            },
          })
        );
      } catch (t) {}
      return (
        (t.prototype.focus = function () {
          i && this._slideFocus.focus({ preventScroll: !0 });
        }),
        (t.prototype.allowFocus = function () {
          for (var t = 0; t < this.focusableElements.length; t++)
            p(this.focusableElements[t], "tabindex", 0);
          y(this.element, "aria-hidden");
        }),
        (t.prototype.disableFocus = function () {
          for (var t = 0; t < this.focusableElements.length; t++)
            p(this.focusableElements[t], "tabindex", -1);
          p(this.element, "aria-hidden", "true");
        }),
        (t.prototype.init = function () {
          var t = this.slider.findSlideBackground(this);
          t &&
            (this.slider.isAdmin
              ? (this.background = new c.SmartSliderSlideBackgroundAdmin(
                  this,
                  t,
                  this.slider.backgrounds
                ))
              : (this.background = new c.SmartSliderSlideBackground(
                  this,
                  t,
                  this.slider.backgrounds
                ))),
            (this.element.ssSlideBackground = this.background);
        }),
        (t.prototype.onDeviceChange = function (t) {
          A(this.element, "hide" + ct(t))
            ? !1 !== this.isVisible &&
              ((this.isVisible = !1),
              (this.slider.responsive.visibleRealSlidesChanged = !0),
              this.h("Hidden"))
            : (this.slider.visibleRealSlides.push(this),
              !0 !== this.isVisible &&
                ((this.isVisible = !0),
                (this.slider.responsive.visibleRealSlidesChanged = !0),
                this.h("Visible")));
        }),
        (t.prototype.hasLayers = function () {
          return this.component.children.length > 0;
        }),
        (t.prototype.getParallaxNodes = function () {
          return this.component.getParallaxNodes();
        }),
        (t.prototype.hasBackgroundVideo = function () {
          return this.background.hasVideo();
        }),
        (t.prototype.hasLink = function () {
          return !!A(this.element, "haslink");
        }),
        (t.prototype.getLightboxImage = function () {
          return A(this.element, "lightboxImage");
        }),
        (t.prototype.onPlay = function () {
          this.playCount++;
        }),
        t
      );
    }),
    c.d("FrontendSliderSlideAbstract", ["FrontendSlideControls"], function () {
      function t(t, i, s) {
        c.FrontendSlideControls.prototype.constructor.call(this, t, i),
          (this.slides = this.slides || []),
          (this.group = this),
          (this.originalIndex = s),
          (this.index = s),
          (this.localIndex = s),
          (this.groupIndex = 0),
          (this.isVisible = !0),
          (this.isInside = -1);
      }
      for (var i in c.FrontendSlideControls.prototype)
        t.prototype[i] = c.FrontendSlideControls.prototype[i];
      return (
        (t.prototype.setIndex = function (t) {
          for (var i = 0; i < this.slides.length; i++)
            this.slides[i]._setIndex(t);
        }),
        (t.prototype._setIndex = function (t) {
          this.localIndex = this.index = t;
        }),
        (t.prototype.preLoad = function () {
          for (var t = [], i = 0; i < this.slides.length; i++)
            t.push(this.slides[i]._preLoad());
          return Promise.all(t);
        }),
        (t.prototype._preLoad = function () {
          return (
            this.element
              .querySelectorAll("[data-lazysrc]")
              .forEach(function (t) {
                p(t, "src", A(t, "lazysrc"));
              }),
            !this.background || this.background.preLoad()
          );
        }),
        (t.prototype.setPrevious = function (t) {
          this.previousSlide = t;
        }),
        (t.prototype.getPrevious = function () {
          var t = this;
          do {
            t = t.previousSlide;
          } while (t && t !== this && !t.isVisible);
          return t;
        }),
        (t.prototype.setNext = function (t) {
          (this.nextSlide = t), t && t.setPrevious(this);
        }),
        (t.prototype.getNext = function () {
          var t = this;
          do {
            t = t.nextSlide;
          } while (t && t !== this && !t.isVisible);
          return t;
        }),
        (t.prototype.getTitle = function () {
          return A(this.slides[0].element, "title") || "";
        }),
        (t.prototype.getDescription = function () {
          return A(this.slides[0].element, "description") || "";
        }),
        (t.prototype.getThumbnail = function () {
          var t = this.slides[0].element.querySelector(
            ".n2-ss-slide-thumbnail"
          );
          return t ? v(t, "src") : "";
        }),
        (t.prototype.hasLink = function () {
          return !1;
        }),
        (t.prototype.setActive = function () {
          this.allowFocus(), F(this.element, "n2-ss-slide-active");
        }),
        (t.prototype.unsetActive = function () {
          this.disableFocus(), N(this.element, "n2-ss-slide-active");
        }),
        (t.prototype.setInside = function (t) {
          for (var i = 0; i < this.slides.length; i++)
            this.slides[i]._setInside(t);
        }),
        (t.prototype._setInside = function (t) {}),
        (t.prototype.focus = function () {}),
        (t.prototype.allowFocus = function () {}),
        (t.prototype.disableFocus = function () {}),
        (t.prototype.isVisibleWhen = function (t) {
          return -1 !== this.slider.getVisibleSlides(t).indexOf(this);
        }),
        (t.prototype.isActiveWhen = function (t) {
          return -1 !== this.slider.getActiveSlides(t).indexOf(this);
        }),
        t
      );
    }),
    c.d("SlideStatus", function () {
      var t = {
        NOT_INITIALIZED: -1,
        INITIALIZED: 0,
        READY_TO_START: 1,
        PLAYING: 2,
        ENDED: 3,
        SUSPENDED: 4,
      };
      function i() {
        this.status = t.NOT_INITIALIZED;
      }
      return (
        (i.prototype.set = function (i) {
          this.status = t[i];
        }),
        (i.prototype.is = function (i) {
          return this.status === t[i];
        }),
        i
      );
    }),
    c.d("FrontendSliderStaticSlide", ["FrontendSlideControls"], function () {
      function t(t, i) {
        c.FrontendSlideControls.prototype.constructor.call(this, t, i),
          (this.slides = [this]),
          (this.isVisible = !0),
          (this._isCurrentlyEdited =
            this.slider.parameters.admin &&
            i.classList.contains("n2-ss-currently-edited-slide")),
          this.isCurrentlyEdited()
            ? (this.layer = i.querySelector(
                '.n2-ss-layer[data-sstype="slide"]'
              ))
            : ((this.component = new c.FrontendComponentSectionSlide(
                this,
                t,
                i.querySelector('.n2-ss-layer[data-sstype="slide"]')
              )),
              (this.layer = this.component.layer)),
          this.init();
      }
      for (var i in c.FrontendSlideControls.prototype)
        t.prototype[i] = c.FrontendSlideControls.prototype[i];
      return (
        (t.prototype.isStatic = function () {
          return !0;
        }),
        (t.prototype.init = function () {
          this.isCurrentlyEdited() ||
            this.slider.stages.done(
              "BeforeShow",
              function () {
                this.initLayerAnimations(),
                  this.slider.visible(
                    function () {
                      this.isVisible && this.playIn();
                    }.bind(this)
                  );
              }.bind(this)
            );
        }),
        (t.prototype.getParallaxNodes = function () {
          return this.component.getParallaxNodes();
        }),
        (t.prototype.onDeviceChange = function (t) {
          A(this.element, "hide" + ct(t))
            ? !1 !== this.isVisible && ((this.isVisible = !1), this.h("Hidden"))
            : !0 !== this.isVisible &&
              ((this.isVisible = !0),
              this.status.is("INITIALIZED") && this.playIn(),
              this.h("Visible"));
        }),
        t
      );
    }),
    c.d("FrontendPlacementAbsolute", ["FrontendPlacement"], function () {
      var t = new (class {
        constructor() {
          (this.bt = new Set()),
            (this.yt = new Set()),
            (this._ = this.O.bind(this));
        }
        add(t) {
          this.bt.add(t);
        }
        invalidate(t) {
          this.yt.add(t), 1 === this.yt.size && c.l.add(this._);
        }
        O() {
          for (let t of this.yt) t.vt();
          for (let t of this.yt) t.onResizeSize();
          for (let t of this.yt) t.onResizePosition();
          this.yt.clear(), c.l.remove(this._);
        }
      })();
      function i(t) {
        (this.parentLayer = !1),
          (this.parentLayerPlacement = !1),
          c.FrontendPlacement.prototype.constructor.apply(this, arguments);
      }
      return (
        (i.prototype = Object.create(c.FrontendPlacement.prototype)),
        (i.prototype.constructor = i),
        (i.prototype.start = function () {
          var i = this.layer.get("parentid");
          if (i) {
            var h = s.getElementById(i);
            h &&
              ((this.parentLayer = h.layer),
              (this.parentLayerPlacement = this.parentLayer.placement),
              this.parentLayerPlacement.addLinked(this),
              (this.onResize = function () {}));
          }
          t.add(this);
        }),
        (i.prototype.isSingleAxis = function () {
          if (this.layer.parent instanceof c.FrontendComponentSectionSlide) {
            if (!this.parentLayer) return !1;
            if (
              this.parentLayer.placement instanceof c.FrontendPlacementAbsolute
            )
              return !1;
          }
          return !0;
        }),
        (i.prototype.vt = function () {
          c.FrontendPlacement.prototype.vt.apply(this, arguments);
          var t = this.layer.layer.parentNode;
          this.wt = { width: t.offsetWidth, height: t.offsetHeight };
        }),
        (i.prototype.onResizeSize = function () {
          var t = c.MW.i(this.layer.layer),
            i = this.gt.slideW,
            s = this.gt.slideH;
          this.isSingleAxis() && (s = i);
          var h = i,
            n = s;
          parseInt(this.layer.get("responsivesize")) || (h = n = 1);
          var o = this.getWidth(h),
            r = "number" == typeof o,
            a = this.getHeight(n),
            u = "number" == typeof a;
          this._sizePosition &&
            (r &&
              ((this._sizePosition.width = o),
              u ||
                (C(this.layer.layer, "width", o + "px"),
                (this._sizePosition.height = this.layer.layer.offsetHeight))),
            u && (this._sizePosition.height = a)),
            (t.width = o + (r ? "px" : "")),
            (t.height = a + (u ? "px" : ""));
        }),
        (i.prototype.onResizePosition = function () {
          var t = this.gt,
            i = this.layer.layer,
            s = c.MW.i(i),
            h = t.slideW,
            n = t.slideH;
          this.isSingleAxis() && (n = h),
            parseInt(this.layer.get("responsiveposition")) || (h = n = 1);
          var o = this.layer.getDevice("left") * h,
            r = this.layer.getDevice("top") * n,
            a = this.layer.getDevice("align"),
            u = this.layer.getDevice("valign");
          if (
            this.parentLayerPlacement &&
            this.parentLayerPlacement.isVisible()
          ) {
            var f = this.parentLayerPlacement.getPositionSize(),
              l = { left: 0, top: 0 };
            if (
              this.parentLayerPlacement instanceof c.FrontendPlacementAbsolute
            ) {
              var d = c.MW.i(this.parentLayerPlacement.layer.layer);
              (f.left += d.xAbs + (d.xPAbs / 100) * f.width),
                (f.top += d.yAbs + (d.yPAbs / 100) * f.height);
            }
            switch (this.layer.getDevice("parentalign")) {
              case "right":
                l.left = f.left + f.width;
                break;
              case "center":
                l.left = f.left + f.width / 2;
                break;
              default:
                l.left = f.left;
            }
            switch (this.layer.getDevice("parentvalign")) {
              case "bottom":
                l.top = f.top + f.height;
                break;
              case "middle":
                l.top = f.top + f.height / 2;
                break;
              default:
                l.top = f.top;
            }
            switch (a) {
              case "right":
                (s.xAbs = Math.round(l.left + o)), (s.xPAbs = -100);
                break;
              case "center":
                (s.xAbs = Math.round(l.left + o)), (s.xPAbs = -50);
                break;
              default:
                (s.xAbs = Math.round(l.left + o)), (s.xPAbs = 0);
            }
            switch (u) {
              case "bottom":
                (s.yAbs = Math.round(l.top + r)), (s.yPAbs = -100);
                break;
              case "middle":
                (s.yAbs = Math.round(l.top + r)), (s.yPAbs = -50);
                break;
              default:
                (s.yAbs = Math.round(l.top + r)), (s.yPAbs = 0);
            }
          } else {
            var m, v;
            switch (a) {
              case "right":
                (m =
                  !this.layer.slide.isStatic &&
                  this.layer.parent instanceof c.FrontendComponentSectionSlide
                    ? this.St.slideWidth
                    : this.wt.width),
                  (s.xAbs = Math.round(m + o)),
                  (s.xPAbs = -100);
                break;
              case "center":
                (m =
                  !this.layer.slide.isStatic &&
                  this.layer.parent instanceof c.FrontendComponentSectionSlide
                    ? this.St.slideWidth
                    : this.wt.width),
                  (s.xAbs = Math.round(m / 2 + o)),
                  (s.xPAbs = -50);
                break;
              default:
                (s.xAbs = Math.round(o)), (s.xPAbs = 0);
            }
            switch (u) {
              case "bottom":
                (v =
                  !this.layer.slide.isStatic &&
                  this.layer.parent instanceof c.FrontendComponentSectionSlide
                    ? this.St.slideHeight
                    : this.wt.height),
                  (s.yAbs = Math.round(v + r)),
                  (s.yPAbs = -100);
                break;
              case "middle":
                (v =
                  !this.layer.slide.isStatic &&
                  this.layer.parent instanceof c.FrontendComponentSectionSlide
                    ? this.St.slideHeight
                    : this.wt.height),
                  (s.yAbs = Math.round(v / 2 + r)),
                  (s.yPAbs = -50);
                break;
              default:
                (s.yAbs = Math.round(r)), (s.yPAbs = 0);
            }
          }
        }),
        (i.prototype.onResize = function (i, s) {
          this.isVisible() &&
            ((this.gt = i),
            (this.St = s),
            t.invalidate(this),
            c.FrontendPlacement.prototype.onResize.apply(this, arguments));
        }),
        (i.prototype.onResizeLinked = function (t, s) {
          i.prototype.onResize.call(this, t, s);
        }),
        (i.prototype.getWidth = function (t) {
          var i = this.layer.getDevice("width");
          return this.isDimensionPropertyAccepted(i) ? i : i * t;
        }),
        (i.prototype.getHeight = function (t) {
          var i = this.layer.getDevice("height");
          return this.isDimensionPropertyAccepted(i) ? i : i * t;
        }),
        (i.prototype.isDimensionPropertyAccepted = function (t) {
          return (t + "").match(/[0-9]+%/) || "auto" === t;
        }),
        i
      );
    }),
    c.d("FrontendPlacementContent", ["FrontendPlacement"], function () {
      function t(t) {
        c.FrontendPlacement.prototype.constructor.apply(this, arguments);
      }
      return (
        (t.prototype = Object.create(c.FrontendPlacement.prototype)),
        (t.prototype.constructor = t),
        t
      );
    }),
    c.d("FrontendPlacementDefault", ["FrontendPlacement"], function () {
      function t(t) {
        c.FrontendPlacement.prototype.constructor.apply(this, arguments);
      }
      return (
        (t.prototype = Object.create(c.FrontendPlacement.prototype)),
        (t.prototype.constructor = t),
        t
      );
    }),
    c.d("FrontendPlacementNormal", ["FrontendPlacement"], function () {
      function t(t) {
        c.FrontendPlacement.prototype.constructor.apply(this, arguments);
      }
      return (
        (t.prototype = Object.create(c.FrontendPlacement.prototype)),
        (t.prototype.constructor = t),
        t
      );
    }),
    c.d("FrontendComponentCol", ["FrontendComponentCommon"], function () {
      function t(t, i, s) {
        (this.content = s.querySelector(".n2-ss-layer-col")),
          c.FrontendComponentCommon.prototype.constructor.call(
            this,
            t,
            i,
            s,
            this.content.querySelectorAll(":scope > .n2-ss-layer")
          );
      }
      return (
        (t.prototype = Object.create(c.FrontendComponentCommon.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.getContents = function () {
          return [this.content];
        }),
        t
      );
    }),
    c.d("FrontendComponentContent", ["FrontendComponentCommon"], function () {
      function t(t, i, s) {
        (this.content = s.querySelector(".n2-ss-section-main-content")),
          c.FrontendComponentCommon.prototype.constructor.call(
            this,
            t,
            i,
            s,
            this.content.querySelectorAll(":scope > .n2-ss-layer")
          );
      }
      return (
        (t.prototype = Object.create(c.FrontendComponentCommon.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.getContents = function () {
          return [this.content];
        }),
        t
      );
    }),
    c.d("FrontendComponentLayer", ["FrontendComponentCommon"], function () {
      function t(t, i, s) {
        c.FrontendComponentCommon.prototype.constructor.call(this, t, i, s);
        var h = s;
        this.wraps.mask && (h = this.wraps.mask),
          (this.item = h.querySelectorAll(":scope > *"));
      }
      return (
        (t.prototype = Object.create(c.FrontendComponentCommon.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.getContents = function () {
          return this.item;
        }),
        t
      );
    }),
    c.d("FrontendComponentRow", ["FrontendComponentCommon"], function () {
      function t(t, i, s) {
        (this.row = s.querySelector(".n2-ss-layer-row")),
          (this.rowInner = s.querySelector(".n2-ss-layer-row-inner")),
          c.FrontendComponentCommon.prototype.constructor.call(
            this,
            t,
            i,
            s,
            this.rowInner.querySelectorAll(":scope > .n2-ss-layer")
          );
      }
      return (
        (t.prototype = Object.create(c.FrontendComponentCommon.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.getContents = function () {
          return [this.row];
        }),
        t
      );
    }),
    c.d("FrontendComponentSectionSlide", ["FrontendComponent"], function () {
      function t(t, i, s) {
        (this.realSlide = t),
          (this.slider = i),
          (this.element = t.element),
          (this.layer = s),
          (this.isStatic = t.isStatic()),
          c.FrontendComponent.prototype.constructor.call(
            this,
            this,
            this,
            s,
            s.querySelectorAll(":scope > .n2-ss-layer")
          ),
          j(
            i.sliderElement,
            "SliderDeviceOrientation",
            function (e) {
              this.onDeviceChange(e.detail.device.toLowerCase());
            }.bind(this)
          ),
          j(
            i.sliderElement,
            "SliderResize",
            function (e) {
              this.onResize(e.detail.ratios, e.detail.responsive.resizeContext);
            }.bind(this)
          ),
          this.start();
      }
      return (
        (t.prototype = Object.create(c.FrontendComponent.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.onDeviceChange = function (t) {
          c.FrontendComponent.prototype.onDeviceChange.call(this, t);
          for (var i = 0; i < this.children.length; i++)
            this.children[i].onDeviceChange(t);
          this.realSlide.onDeviceChange(t);
        }),
        (t.prototype.getPerspective = function () {
          return this.slider.getPerspective();
        }),
        t
      );
    }),
    c.d("FrontendLayerAnimationManager", function () {
      function t(s, h, n, o) {
        (this.status = new c.AnimationStatus()),
          (this.inStatus = !1),
          (this.loopStatus = !1),
          (this.outStatus = !1),
          (this.namespace = "n2-ss-animations-" + t.index++),
          (this.hasSpecialEvent = !1),
          (this.linear = !1),
          (this.layer = s),
          (this.layerElement = h),
          (this.options = {
            repeatable: 0,
            startDelay: 0,
            endDelay: 0,
            loopRepeatSelfOnly: 0,
            inPlayEvent: "",
            loopPlayEvent: "",
            loopPauseEvent: "",
            loopStopEvent: "",
            outPlayEvent: "",
          }),
          (this.promises = {
            in: new c.AnimationPromise(this, "IN"),
            loop: new c.AnimationPromise(this, "LOOP"),
            out: new c.AnimationPromise(this, "OUT"),
            reset: function () {
              this.in.reset(), this.loop.reset(), this.out.reset();
            },
          }),
          (this.animatableElement = n),
          (this.perspective = o),
          this.perspective > 0 &&
            (c.MW.i(this.layerElement.parentNode).perspective =
              this.perspective),
          (this.plugins = new i());
      }
      function i() {
        (this.keys = ["basic", "reveal"]), (this.basic = o), (this.reveal = o);
      }
      return (
        (t.index = 1),
        (t.optimizeFromTo = function (t, i, s, h, n, o) {
          t.fromTo(i, s, h, n, o);
        }),
        (t.prototype.hasAnimation = function () {
          return this.inStatus || this.loopStatus || this.outStatus;
        }),
        (t.prototype.collectRelatedAnimations = function () {
          this.relatedAnimations = {
            needInvalidate: !1,
            setDevice: [],
            updateRatios: [],
            in: [],
            loop: [],
            out: [],
            other: [],
          };
          for (var t = 0; t < i.keys.length; t++) {
            var s = i.keys[t];
            this.options[s] &&
              (this.plugins[s] ||
                this.plugins.initPlugin(
                  s,
                  this.layerElement,
                  this.animatableElement
                ),
              this.plugins[s].collectRelatedAnimations(
                this.relatedAnimations,
                this,
                this.options[s]
              ));
          }
          X(this.layerElement, "collectRelatedAnimations", {
            relatedAnimations: this.relatedAnimations,
          });
        }),
        (t.prototype.needInvalidate = function () {
          this.relatedAnimations.needInvalidate = !0;
        }),
        (t.prototype.onStageReached = function (t) {
          "loop" === t && this.loopStatus && this.loop.play(),
            Y(
              this.layerElement,
              t.charAt(0).toUpperCase() + t.slice(1) + "Started"
            );
        }),
        (t.prototype.setEventBased = function (t, i, s) {
          (this.slide = t),
            (this.horizontalRatio = i),
            (this.verticalRatio = s);
          var h = A(this.layerElement, "animv2");
          h &&
            ("object" != typeof h
              ? this.setOptions(JSON.parse(h))
              : this.setOptions(h)),
            (this.device = this.slide.slider.responsive.getDeviceMode()),
            this.collectRelatedAnimations(),
            this.options.repeatable &&
              "" === this.options.inPlayEvent &&
              ((this.options.inPlayEvent = "layerAnimationPlayIn,OutComplete"),
              "" === this.options.loopPlayEvent &&
                (this.options.loopPlayEvent = "InComplete"),
              "" === this.options.outPlayEvent &&
                (this.options.outPlayEvent = "LoopComplete")),
            "" === this.options.outPlayEvent
              ? "forced" === this.slide.slider.parameters.layerMode.mode
                ? (this.options.outPlayEvent = "OutForced")
                : (this.options.outPlayEvent = "LoopComplete")
              : this.options.outPlayEvent.match(/OutForced/)
              ? (this.options.outPlayEvent = "OutForced")
              : this.options.outPlayEvent.match(
                  /^(.*?,|.*? )?InstantOut(,.*?| .*?)?$/
                ) && (this.options.outPlayEvent = "LoopComplete"),
            "" === this.options.inPlayEvent &&
              (this.options.inPlayEvent = "layerAnimationPlayIn"),
            "" === this.options.loopPlayEvent &&
              (this.options.loopPlayEvent = "InComplete"),
            this.buildTimeline()
              ? (this.updateRatios(i, s),
                this.inStatus
                  ? (this.hasSpecialEvent ||
                      this.options.inPlayEvent.match("layerAnimationPlayIn") ||
                      (this.hasSpecialEvent = !0),
                    this.options.inPlayEvent.match("OutComplete")
                      ? this.promises.in.forceResolve()
                      : this.subscribeEvent(
                          this.options.inPlayEvent,
                          function () {
                            this.status.suspended() ||
                              (this.status.is("INITIALIZED_PLAYING") ||
                              this.status.is("IN_WAIT")
                                ? (this.promises.in.resolveAndCheck(),
                                  delete this.targetStage)
                                : (this.status.isLoop() ||
                                    this.status.isOut() ||
                                    (this.targetStage !== o &&
                                      "in" !== this.targetStage)) &&
                                  (this.status.isIn()
                                    ? delete this.targetStage
                                    : (this.targetStage = "in")));
                          }.bind(this)
                        ))
                  : (this.promises.in.forceResolve(),
                    r(
                      function () {
                        Y(this.layerElement, "layerAnimationPlayLoop");
                      }.bind(this),
                      1
                    )),
                this.loopStatus
                  ? (this.options.loopPlayEvent.match("InComplete")
                      ? this.promises.loop.forceResolve()
                      : (this.hasSpecialEvent || (this.hasSpecialEvent = !0),
                        this.subscribeEvent(
                          this.options.loopPlayEvent,
                          function () {
                            this.status.suspended() ||
                              (this.status.is("LOOP_WAIT")
                                ? this.promises.loop.resolveAndCheck()
                                : this.status.is("LOOP_PAUSED") &&
                                  this.loop.resume());
                          }.bind(this)
                        )),
                    "" !== this.options.loopPauseEvent &&
                      this.subscribeEvent(
                        this.options.loopPauseEvent,
                        this.loop.pause.bind(this.loop)
                      ),
                    "" !== this.options.loopStopEvent &&
                      this.subscribeEvent(
                        this.options.loopStopEvent,
                        this.loop.requestEnd.bind(this.loop, !1)
                      ))
                  : (this.promises.loop.forceResolve(),
                    this.subscribeEvent(
                      "InComplete",
                      this.loopComplete.bind(this)
                    )),
                this.outStatus
                  ? this.options.outPlayEvent.match("LoopComplete")
                    ? this.promises.out.forceResolve()
                    : "OutForced" === this.options.outPlayEvent ||
                      ((this.hasSpecialEvent = !0),
                      this.subscribeEvent(
                        this.options.outPlayEvent,
                        function () {
                          this.status.suspended() ||
                            (this.status.is("OUT_WAIT")
                              ? (this.promises.out.resolveAndCheck(),
                                delete this.targetStage)
                              : this.status.is("LOOP_WAIT")
                              ? (this.promises.loop.resolve(),
                                this.promises.out.resolve(),
                                this.status.set("OUT_WAIT"),
                                this.timeline.seek("OUT").play())
                              : this.status.is("LOOP_PLAYING") ||
                                this.status.is("LOOP_PAUSED")
                              ? (this.promises.out.resolve(),
                                this.loop.requestEnd(!0))
                              : (this.status.isIn() ||
                                  this.status.isLoop() ||
                                  (this.targetStage !== o &&
                                    "out" !== this.targetStage)) &&
                                (this.status.isOut()
                                  ? delete this.targetStage
                                  : (this.targetStage = "out")));
                        }.bind(this)
                      ))
                  : this.promises.out.forceResolve(),
                this.status.set("INITIALIZED"))
              : this.status.set("DISABLED");
        }),
        (t.prototype.play = function () {
          !this.status.suspended() &&
            this.status.is("INITIALIZED") &&
            this.status.set("INITIALIZED_PLAYING"),
            this.timeline.play();
        }),
        (t.prototype.playSpecialEventOnlySetToZero = function () {
          this.hasSpecialEvent ||
            ("OutForced" === this.options.outPlayEvent
              ? this.outStatus
                ? (this.status.set("LOOP_WAIT"), this.timeline.seek("ZERO", !0))
                : (this.status.set("OUT_ENDED"), this.timeline.progress(1, !0))
              : (this.status.set("DISABLED"), this.timeline.progress(1, !0)));
        }),
        (t.prototype.playSpecialEventOnly = function () {
          this.hasSpecialEvent && this.play();
        }),
        (t.prototype.setOptions = function (t) {
          this.options = d(this.options, t);
        }),
        (t.prototype.buildTimeline = function () {
          if (
            !this.relatedAnimations.in.length &&
            !this.relatedAnimations.loop.length &&
            !this.relatedAnimations.out.length
          )
            return !1;
          var t;
          this.timeline = new c.J({ paused: !0 });
          var i = this.options.repeatable ? this.options.startDelay : 0;
          this.timeline.addLabel("IN", i),
            this.linear
              ? this.timeline.set({}, {}, i)
              : (this.timeline.addPause(
                  "+=" + (0.001 + i),
                  this.promises.in.wait.bind(this.promises.in)
                ),
                this.promises.in.addPauseTween(this.timeline.recent()));
          var s = new c.J();
          for (t = 0; t < this.relatedAnimations.in.length; t++)
            this.relatedAnimations.in[t].extendTimeline(s);
          s.totalDuration()
            ? (this.linear ||
                s.eventCallback("onComplete", this.inComplete.bind(this)),
              (this.inStatus = !0),
              this.timeline.add(s))
            : (s.kill(), (this.inStatus = !1)),
            this.timeline.addLabel("ZERO", "+=0.001"),
            (this.loop = new c.AnimationsControllerLoop(
              this,
              this.layerElement
            )),
            (this.loopStatus = this.loop.buildTimeline(this.timeline));
          var h = new c.J();
          for (t = 0; t < this.relatedAnimations.out.length; t++)
            this.relatedAnimations.out[t].extendTimeline(h);
          var n = this.options.repeatable ? this.options.endDelay : 0;
          return (
            h.totalDuration()
              ? (this.linear
                  ? h.set({}, {}, "+=" + n)
                  : (this.timeline.addLabel("OUT", "+=0.001"),
                    this.timeline.addPause(
                      "+=0.002",
                      this.promises.out.wait.bind(this.promises.out)
                    ),
                    this.promises.out.addPauseTween(this.timeline.recent()),
                    h.set({}, {}, "+=" + n),
                    h.eventCallback("onComplete", this.outComplete.bind(this))),
                (this.outStatus = !0),
                this.timeline.add(h))
              : (h.kill(),
                (this.outStatus = !1),
                this.timeline.addLabel("OUT", "+=0.001"),
                this.timeline.set(
                  {},
                  { onComplete: this.outComplete.bind(this) },
                  "+=" + n
                )),
            this.hasAnimation()
          );
        }),
        (t.prototype.setDevice = function (t) {
          if (((this.device = t), this.relatedAnimations.setDevice.length > 0))
            for (var i = 0; i < this.relatedAnimations.setDevice.length; i++)
              this.relatedAnimations.setDevice[i].setDevice(t);
        }),
        (t.prototype.updateRatios = function (t, i) {
          if (
            ((this.horizontalRatio = t),
            (this.verticalRatio = i),
            this.relatedAnimations.updateRatios.length > 0)
          )
            for (var s = 0; s < this.relatedAnimations.updateRatios.length; s++)
              this.relatedAnimations.updateRatios[s].updateRatios(t, i);
        }),
        (t.prototype.refreshRatio = function (t, i) {
          if (
            (this.updateRatios(t, i), this.relatedAnimations.needInvalidate)
          ) {
            var s = this.timeline.time();
            this.timeline.invalidate(),
              this.timeline.progress(1, !0),
              this.timeline.time(s, !0);
          }
        }),
        (t.prototype.setLinear = function (t, i, s, h) {
          return (
            (this.linear = !0),
            (this.horizontalRatio = s),
            (this.verticalRatio = h),
            this.setOptions(t.animations.getData()),
            (this.device = i),
            this.collectRelatedAnimations(),
            this.buildTimeline(),
            this.updateRatios(s, h),
            !!this.relatedAnimations.other.length || this.hasAnimation()
          );
        }),
        (t.prototype.resetToEditor = function () {
          this.plugins.resetToEditor(),
            Y(this.layerElement, "AnimationSetZero");
        }),
        (t.prototype.inComplete = function () {
          this.status.set("IN_ENDED"),
            this.layer.setState("InComplete", !0),
            this.outStatus &&
              this.targetStage !== o &&
              (this.promises.loop.resolve(),
              this.promises.out.resolve(),
              this.status.set("OUT_WAIT"),
              this.timeline.seek("OUT").play()),
            Y(this.layerElement, "InComplete"),
            r(
              function () {
                Y(this.layerElement, "layerAnimationPlayLoop");
              }.bind(this),
              1
            );
        }),
        (t.prototype.loopComplete = function () {
          1 !== this.options.loopRepeatSelfOnly ||
          this.status.is("LOOP_ENDING_FORCED")
            ? (this.status.set("LOOP_ENDED"),
              this.targetStage !== o &&
                (this.promises[this.targetStage].resolve(),
                delete this.targetStage),
              Y(this.layerElement, "LoopComplete"))
            : (this.promises.loop.reset(),
              this.loop.resetForReplay(),
              this.status.set("IN_ENDED"),
              this.timeline.seek("ZERO"));
        }),
        (t.prototype.outComplete = function () {
          this.options.repeatable && this.hasAnimation()
            ? this.status.set("INITIALIZED")
            : this.status.set("OUT_ENDED"),
            Y(this.layerElement, "OutComplete"),
            this.status.is("INITIALIZED") && this.repeat();
        }),
        (t.prototype.repeat = function () {
          this.loopStatus && this.loop.resetForReplay(),
            this.promises.reset(),
            this.targetStage !== o &&
              (this.promises[this.targetStage].resolve(),
              delete this.targetStage),
            this.timeline.seek("IN"),
            this.timeline.timeScale(1);
        }),
        (t.prototype.beforeMainSwitch = function (t) {
          this.status.is("DISABLED") ||
          this.status.is("INITIALIZED") ||
          this.status.is("INITIALIZED_PLAYING") ||
          this.status.is("OUT_ENDED")
            ? this.status.set("DISABLED")
            : this.hasSpecialEvent
            ? Y(this.layerElement, "OutForced")
            : t.push(
                new Promise(
                  function (t) {
                    G(
                      this.layerElement,
                      "OutComplete",
                      function () {
                        this.status.set("DISABLED"), t();
                      }.bind(this)
                    ),
                      this.forcePlayOut();
                  }.bind(this)
                )
              );
        }),
        (t.prototype.forcePlayOut = function () {
          this.status.isIn()
            ? G(
                this.layerElement,
                "InComplete",
                function () {
                  this.promises.out.resolve(),
                    this.outStatus && this.timeline.seek("OUT");
                }.bind(this)
              )
            : this.status.is("LOOP_WAIT")
            ? (this.promises.out.resolve(), this.timeline.play("OUT"))
            : this.status.isLoop()
            ? (this.promises.out.resolve(), this.loop.requestEnd(!0))
            : this.status.is("OUT_WAIT")
            ? this.promises.out.resolveAndCheck()
            : this.status.is("OUT_PAUSED") && this.timeline.play();
        }),
        (t.prototype.reset = function () {
          this.loop && this.loop.reset(),
            this.layer.setState("InComplete", !1),
            this.promises.reset(),
            this.status.suspended() && this.status.suspended(!1),
            this.status.set("INITIALIZED"),
            this.timeline.progress(0, !0).progress(1, !0).pause(0);
        }),
        (t.prototype.suspend = function () {
          this.status.suspended() ||
            (this.status.isPlaying() &&
              (this.status.isLoop() && this.loop.suspend(),
              this.timeline.pause()),
            this.status.suspended(!0));
        }),
        (t.prototype.unsuspend = function () {
          this.status.suspended() &&
            (this.status.suspended(!1),
            this.status.isPlaying() &&
              (this.status.isLoop() && this.loop.unsuspend(),
              this.timeline.play()));
        }),
        (t.prototype.subscribeEvent = function (t, i) {
          for (var s = t.split(","), h = 0; h < s.length; h++)
            if (s[h].length) {
              var n = s[h].replace(/\s/g, "").split("."),
                o = s[h];
              switch (n[0]) {
                case "InComplete":
                case "LoopComplete":
                case "OutComplete":
                case "LoopRoundComplete":
                case "layerAnimationPlayLoop":
                case "LayerClick":
                case "LayerMouseEnter":
                case "LayerMouseLeave":
                  o.match(/^Layer/) &&
                    (o = o.replace(/^Layer/, "").toLowerCase()),
                    j(this.layerElement, o, i);
                  break;
                case "mainAnimationStartIn":
                case "layerAnimationPlayIn":
                case "SlideMouseEnter":
                case "SlideMouseLeave":
                case "SlideClick":
                  o.match(/^Slide/) &&
                    (o = o.replace(/^Slide/, "").toLowerCase()),
                    j(this.slide.element, o, i);
                  break;
                case "SliderMouseEnter":
                case "SliderMouseLeave":
                case "SliderClick":
                  o.match(/^Slider/) &&
                    (o = o.replace(/^Slider/, "").toLowerCase()),
                    j(
                      this.slide.slider.sliderElement,
                      o,
                      function (e) {
                        this.slide.isVisibleWhen() && i();
                      }.bind(this)
                    );
                  break;
                case "OutForced":
                  j(this.layerElement, o, i);
                  break;
                default:
                  var c = { killed: !1, do: 0, cancel: 0 };
                  j(
                    this.slide.element,
                    "ss" + o,
                    function (t) {
                      t.do && a(t.do),
                        (t.do = r(function () {
                          t.killed || i(), (t.killed = !1);
                        }, 50));
                    }.bind(this, c)
                  ),
                    j(
                      this.slide.element,
                      "cancel" + o,
                      function (t) {
                        (t.killed = !0),
                          t.cancel && a(t.cancel),
                          (t.cancel = r(function () {
                            t.killed = !1;
                          }, 70));
                      }.bind(this, c)
                    );
              }
            }
        }),
        (t.prototype.onResize = function () {
          this.plugins.onResize();
        }),
        (i.keys = ["basic", "reveal"]),
        (i.prototype.initPlugin = function (t, i, s) {
          switch (t) {
            case "basic":
              this.basic = new c.FrontendLayerAnimationsBasic(i, s);
              break;
            case "reveal":
              this.reveal = new c.FrontendLayerAnimationsReveal(i, s);
          }
        }),
        (i.prototype.resetToEditor = function () {
          this.basic && this.basic.resetToEditor(),
            this.reveal && this.reveal.resetToEditor();
        }),
        (i.prototype.onResize = function () {
          this.basic && this.basic.onResize(),
            this.reveal && this.reveal.onResize();
        }),
        t
      );
    }),
    c.d("AnimationPromise", function () {
      function t(t, i) {
        (this.manager = t),
          (this.status = t.status),
          (this.stack = i),
          (this._done = !1),
          (this._resolved = !1),
          (this._forced = !1),
          (this.pauseTween = null),
          (this.position = null);
      }
      return (
        (t.prototype.addPauseTween = function (t) {
          (t.stack = this.stack),
            (this.pauseTween = t),
            Object.defineProperty(this.pauseTween, "data", {
              get: function () {
                return this._resolved ? "" : "isPause";
              }.bind(this),
            }),
            (this.position = t.startTime());
        }),
        (t.prototype.resolve = function () {
          this._resolved = !0;
        }),
        (t.prototype.forceResolve = function () {
          (this._forced = !0), this.resolve();
        }),
        (t.prototype.resolved = function () {
          return this._resolved;
        }),
        (t.prototype.reset = function () {
          (this._done = !1), this._forced || (this._resolved = !1);
        }),
        (t.prototype.wait = function () {
          this._done ||
            ((this._done = !0),
            this._resolved
              ? (this.status.set(this.stack + "_PLAYING"),
                this.manager.onStageReached(this.stack))
              : (this.status.set(this.stack + "_WAIT"),
                this.manager.timeline.seek(this.position)));
        }),
        (t.prototype.resolveAndCheck = function () {
          this.resolve(),
            this._done &&
              !this.status.suspended() &&
              this.status.is(this.stack + "_WAIT") &&
              (this.status.set(this.stack + "_PLAYING"),
              this.manager.onStageReached(this.stack),
              this.manager.timeline.paused() && this.manager.timeline.play());
        }),
        t
      );
    }),
    c.d("AnimationsRelated", function () {
      function t(t, i) {
        (this._context = t), (this._extendName = i);
      }
      return (
        (t.prototype.extendTimeline = function (t, i, s) {
          this._context[this._extendName].apply(this._context, arguments);
        }),
        t
      );
    }),
    c.d("AnimationStatus", function () {
      var t = {
        DISABLED: -1,
        NOT_INITIALIZED: 0,
        INITIALIZED: 1,
        INITIALIZED_PLAYING: 10,
        IN_WAIT: 100,
        IN_PLAYING: 110,
        IN_PAUSED: 120,
        IN_ENDED: 190,
        LOOP_WAIT: 200,
        LOOP_PLAYING: 210,
        LOOP_PAUSED: 220,
        LOOP_ENDING: 230,
        LOOP_ENDING_FORCED: 240,
        LOOP_ENDED: 290,
        OUT_WAIT: 300,
        OUT_PLAYING: 310,
        OUT_PAUSED: 320,
        OUT_ENDED: 390,
      };
      function i() {
        (this._suspended = !1), (this.status = 0);
      }
      return (
        (i.prototype.set = function (i) {
          this.status = t[i];
        }),
        (i.prototype.is = function (i) {
          return this.status === t[i];
        }),
        (i.prototype.isIn = function () {
          return this.status >= 100 && this.status < 200;
        }),
        (i.prototype.isLoop = function () {
          return this.status >= 200 && this.status < 300;
        }),
        (i.prototype.isOut = function () {
          return this.status >= 300 && this.status < 400;
        }),
        (i.prototype.isPlaying = function () {
          return this.status % 100 == 10;
        }),
        (i.prototype.suspended = function () {
          return (
            arguments.length && (this._suspended = arguments[0]),
            this._suspended
          );
        }),
        i
      );
    }),
    c.d("FrontendLayerAnimationsAbstract", function () {
      function t(t, i) {
        (this.hasAnimation = !1),
          (this.layerElement = t),
          (this.animatableElement = i),
          (this.It = c.MW.i(i)),
          (this.It.n2AutoAlpha = 1);
      }
      return (
        (t.prototype.onResize = function () {}),
        (t.prototype.resetToEditor = function () {}),
        t
      );
    }),
    c.d(
      "FrontendLayerAnimationsBasic",
      "FrontendLayerAnimationsAbstract",
      function () {
        var t = {
          opacity: 1,
          x: 0,
          y: 0,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          skewX: 0,
          n2blur: 0,
        };
        function i(t) {
          return t.split("|*|").join("% ") + "px";
        }
        function s(i, s) {
          (this.device = "desktopPortrait"),
            c.FrontendLayerAnimationsAbstract.prototype.constructor.call(
              this,
              i,
              s
            ),
            (this.isAbsolute = "absolute" === A(i, "pm")),
            (this.At = !1),
            (this.startValues = d({}, t)),
            (this.hadImmediateRender = !1),
            (this.horizontalRatio = this.verticalRatio = 1),
            (this._requireUpdateRatios = !1);
        }
        (s.prototype = Object.create(
          c.FrontendLayerAnimationsAbstract.prototype
        )),
          (s.prototype.constructor = s),
          (s.prototype.updateRatios = function (t, i) {
            (this.horizontalRatio = t), (this.verticalRatio = i);
          }),
          (s.prototype.optimizeFromTo = function (t, i, s, h, n, o) {
            this.hadImmediateRender
              ? (n.immediateRender = !1)
              : (this.hadImmediateRender = !0),
              c.FrontendLayerAnimationManager.optimizeFromTo(t, i, s, h, n, o);
          }),
          (s.prototype.resetToEditor = function () {
            this.hasAnimation && this.setZero();
          }),
          (s.prototype.setStartValues = function (t) {
            d(this.startValues, t),
              delete this.startValues.duration,
              delete this.startValues.delay,
              delete this.startValues.ease;
          }),
          (s.prototype.setZero = function () {
            this.hasAnimation && this.It.setValues(d({}, t));
          }),
          (s.prototype.collectRelatedAnimations = function (i, s, h) {
            if (
              ((this.device = s.device),
              (this.animationManager = s),
              (this.hasAnimation = !0),
              (this.currentZero = Object.assign({}, t)),
              (this.options = {
                in: d(
                  {
                    specialZero: 0,
                    transformOrigin: "50|*|50|*|0",
                    keyFrames: [],
                  },
                  h.in
                ),
                loop: d(
                  {
                    repeatCount: 0,
                    repeatStartDelay: 0,
                    transformOrigin: "50|*|50|*|0",
                    keyFrames: [],
                  },
                  h.loop
                ),
                out: d(
                  { transformOrigin: "50|*|50|*|0", keyFrames: [] },
                  h.out
                ),
              }),
              this.optimizeKeyFrames(),
              this.At && i.other.push(this),
              this.options.in.keyFrames.length &&
                i.in.push(new c.AnimationsRelated(this, "extendTimelineIn")),
              this.options.loop.keyFrames.length)
            ) {
              var n = new c.AnimationsLayerLoop(
                this,
                s,
                this.layerElement,
                this.It,
                this.options.loop
              );
              i.loop.push(n);
            }
            this.options.out.keyFrames.length &&
              i.out.push(new c.AnimationsRelated(this, "extendTimelineOut")),
              i.setDevice.push(this);
          }),
          (s.prototype.setDevice = function (t) {
            this.device = t;
          }),
          (s.prototype.requireUpdateRatios = function () {
            this._requireUpdateRatios ||
              ((this._requireUpdateRatios = !0),
              this.animationManager.needInvalidate(),
              this.animationManager.relatedAnimations.updateRatios.push(this),
              this.updateRatios(
                this.animationManager.horizontalRatio,
                this.animationManager.verticalRatio
              ));
          }),
          (s.prototype.optimizeKeyFrames = function () {
            var t,
              s,
              h = this.options.in.keyFrames,
              n = this.options.loop.keyFrames,
              o = this.options.out.keyFrames;
            for (
              this.usedProperties = {
                opacity: !1,
                x: !1,
                y: !1,
                z: !1,
                rotationX: !1,
                rotationY: !1,
                rotationZ: !1,
                scaleX: !1,
                scaleY: !1,
                skewX: !1,
                n2blur: !1,
              },
                this.options.in.specialZero &&
                  h.length > 0 &&
                  ((this.currentZero = this._fillKeyFrame(h.pop())),
                  delete this.currentZero.name,
                  delete this.currentZero.duration,
                  delete this.currentZero.delay,
                  delete this.currentZero.ease,
                  (this.currentZero.transformOrigin = i(
                    this.options.in.transformOrigin
                  )),
                  (this.currentZero.rotationX = -this.currentZero.rotationX),
                  (this.currentZero.rotationY = -this.currentZero.rotationY),
                  (this.currentZero.rotationZ = -this.currentZero.rotationZ),
                  (this.At = !0),
                  this.prepareDeviceSpecific(this.currentZero, 1),
                  this.setCurrentZero(),
                  this.setStartValues(this.currentZero)),
                s = 0;
              s < h.length;
              s++
            )
              (t = h[s] = this._fillKeyFrame(h[s])),
                this.prepareDeviceSpecific(t, -1),
                (t.z = -t.z),
                (t.rotationX = -t.rotationX),
                (t.rotationY = -t.rotationY),
                (t.rotationZ = -t.rotationZ);
            for (s = 0; s < n.length; s++)
              (t = n[s] = this._fillKeyFrame(n[s])),
                this.prepareDeviceSpecific(t, 1);
            for (s = 0; s < o.length; s++)
              (t = o[s] = this._fillKeyFrame(o[s])),
                this.prepareDeviceSpecific(t, 1);
            for (
              this._cleanKeyFrame(this.currentZero), s = 0;
              s < h.length;
              s++
            )
              h[s] = this._cleanKeyFrame(h[s]);
            for (s = 0; s < n.length; s++) n[s] = this._cleanKeyFrame(n[s]);
            for (s = 0; s < o.length; s++) o[s] = this._cleanKeyFrame(o[s]);
          });
        var h = {
          opacity: 1,
          x: 0,
          y: 0,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          skewX: 0,
          n2blur: 0,
        };
        (s.prototype._fillKeyFrame = function (t) {
          for (var i in h)
            t[i] !== o && t[i] != h[i] && (this.usedProperties[i] = !0);
          return d(
            {
              duration: 0.8,
              delay: 0,
              ease: "easeOutCubic",
              opacity: 1,
              x: 0,
              y: 0,
              z: 0,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              scaleX: 1,
              scaleY: 1,
              skewX: 0,
              n2blur: 0,
            },
            t
          );
        }),
          (s.prototype._cleanKeyFrame = function (t) {
            for (var i in (delete t.name, this.usedProperties))
              this.usedProperties[i] || delete t[i];
            return t;
          });
        var n = [
          "desktopLandscape",
          "desktopPortrait",
          "tabletLandscape",
          "tabletPortrait",
          "mobileLandscape",
          "mobilePortrait",
        ];
        return (
          (s.prototype.prepareDeviceSpecific = function (t, i) {
            this.prepareDeviceSpecificProp("x", t, i),
              this.prepareDeviceSpecificProp("y", t, i),
              delete t.desktopLandscape,
              delete t.tabletLandscape,
              delete t.tabletPortrait,
              delete t.mobileLandscape,
              delete t.mobilePortrait;
          }),
          (s.prototype.prepareDeviceSpecificProp = function (t, i, s) {
            var h,
              r = { desktopPortrait: i[t] * s },
              a = !1;
            for (h = 0; h < n.length; h++)
              i[n[h]] &&
                i[n[h]][t] !== o &&
                ((r[n[h]] = i[n[h]][t] * s), (a = !0));
            this.isAbsolute
              ? (this.requireUpdateRatios(),
                a
                  ? (this.animationManager.needInvalidate(),
                    (i[t] = function (t) {
                      return t[this.device] === o
                        ? t.desktopPortrait * this.horizontalRatio
                        : t[this.device] * this.horizontalRatio;
                    }.bind(this, r)))
                  : 0 === r.desktopPortrait
                  ? (i[t] = 0)
                  : (i[t] = function (t) {
                      return t * this.horizontalRatio;
                    }.bind(this, r.desktopPortrait)))
              : a
              ? (this.animationManager.needInvalidate(),
                (i[t] = function (t) {
                  return t[this.device] === o
                    ? t.desktopPortrait
                    : t[this.device];
                }.bind(this, r)))
              : (i[t] = r.desktopPortrait);
          }),
          (s.prototype.extendTimelineIn = function (t) {
            (this.It.transformOrigin = i(this.options.in.transformOrigin)),
              this.buildTimelineIn(t, this.options.in.keyFrames);
          }),
          (s.prototype.setCurrentZero = function () {
            var t = d({}, this.currentZero);
            delete t.delay, delete t.duration, this.It.setValues(t);
          }),
          (s.prototype.buildTimelineIn = function (t, i) {
            var s = 0;
            if ((i = m([], i)).length > 0) {
              var h = this._buildAnimationChainIn(i);
              if (h.length > 0)
                for (var n = 0; n < h.length; n++)
                  this.optimizeFromTo(
                    t,
                    this.It,
                    h[n].duration,
                    h[n].from,
                    h[n].to,
                    s
                  ),
                    (s += h[n].duration + h[n].to.delay);
              this.setStartValues(h[0].from);
            }
          }),
          (s.prototype._buildAnimationChainIn = function (t) {
            for (
              var i = [{ from: this.currentZero }], s = t.length - 1;
              s >= 0;
              s--
            ) {
              var h = m({}, t[s]),
                n = h.delay,
                o = h.duration,
                r = h.ease;
              delete h.delay, delete h.duration, delete h.ease;
              var a = i[0].from;
              i.unshift({
                duration: o,
                from: h,
                to: d({}, a, { ease: r, delay: n }),
              });
            }
            return i.pop(), i;
          }),
          (s.prototype.extendTimelineOut = function (t) {
            t.set(this.It, {
              transformOrigin: i(this.options.out.transformOrigin),
              immediateRender: !1,
            }),
              this.buildTimelineOut(t, this.options.out.keyFrames);
          }),
          (s.prototype.buildTimelineOut = function (t, i) {
            var s = 0;
            i = m([], i);
            var h = this._buildAnimationChainOut(i);
            if (h.length > 0)
              for (var n = 0; n < h.length; n++)
                this.optimizeFromTo(
                  t,
                  this.It,
                  h[n].duration,
                  h[n].from,
                  h[n].to,
                  s
                ),
                  (s += h[n].duration + h[n].to.delay);
          }),
          (s.prototype._buildAnimationChainOut = function (t) {
            var i = [],
              s = d({}, this.currentZero);
            delete s.transformOrigin, i.push({ to: s });
            for (var h = 0; h < t.length; h++) {
              var n = m({}, t[h]),
                o = n.duration;
              delete n.duration;
              var r = d({}, i[i.length - 1].to);
              delete r.delay,
                delete r.ease,
                i.push({ duration: o, from: r, to: n });
            }
            return i.shift(), i;
          }),
          s
        );
      }
    ),
    c.d(
      "FrontendLayerAnimationsReveal",
      "FrontendLayerAnimationsAbstract",
      function () {
        var t = {
          from: "top",
          fromease: "easeOutCubic",
          to: "bottom",
          toease: "easeOutCubic",
          content: "",
          duration: 2,
          delay: 0,
          color: "ffffff",
        };
        function i(t, i) {
          c.FrontendLayerAnimationsAbstract.prototype.constructor.call(
            this,
            t,
            i
          );
        }
        return (
          (i.prototype = Object.create(
            c.FrontendLayerAnimationsAbstract.prototype
          )),
          (i.prototype.constructor = i),
          (i.prototype.resetToEditor = function () {
            this.hasAnimation &&
              (this.in || this.out) &&
              (this._destroyGroup("in"),
              this._destroyGroup("out"),
              c.MW.Y(c.MW.i(this.revealedElement), [
                "transform",
                "opacity",
                "n2AutoAlpha",
              ]));
          }),
          (i.prototype.setZero = function () {
            this.hasAnimation &&
              (this.in || this.out) &&
              (this.in && (this.in.clipSMW.visibility = "hidden"),
              this.out && (this.out.clipSMW.visibility = "hidden"),
              c.MW.Y(c.MW.i(this.revealedElement), [
                "transform",
                "opacity",
                "n2AutoAlpha",
              ]));
          }),
          (i.prototype.collectRelatedAnimations = function (t, i, s) {
            (this.animationManager = i),
              (this.in = !1),
              (this.out = !1),
              (s.in === o && s.out === o) ||
                ((this.hasAnimation = !0),
                (this.revealedElement = this.animatableElement.querySelector(
                  ".n2-ss-layer-content,.n2-ss-layer-row,.n2-ss-item,.n2-ss-item-content"
                )),
                this.revealedElement || (this.revealedElement = l()),
                s.in !== o &&
                  ((this.in = this._initGroup("in", s)),
                  t.in.push(new c.AnimationsRelated(this, "extendTimelineIn"))),
                s.out !== o &&
                  ((this.out = this._initGroup("out", s)),
                  t.out.push(
                    new c.AnimationsRelated(this, "extendTimelineOut")
                  )));
          }),
          (i.prototype._initGroup = function (i, s) {
            var h = l();
            h.className = "n2-ss-reveal-clip";
            var n = {
              revealedElement: this.revealedElement,
              revealedElementSMW: c.MW.i(this.revealedElement),
              options: d({}, t, s[i]),
              clip: h,
              clipSMW: c.MW.i(h),
            };
            return (
              (n.revealedElementSMW.n2AutoAlpha = 1),
              this.animatableElement.appendChild(h),
              n
            );
          }),
          (i.prototype._destroyGroup = function (t) {
            this[t] && (R(this[t].clip), delete this[t]);
          }),
          (i.prototype.extendTimelineIn = function (t, i, s) {
            c.FrontendLayerAnimationsRevealAnimation.in(t, this.in);
          }),
          (i.prototype.extendTimelineOut = function (t, i, s) {
            c.FrontendLayerAnimationsRevealAnimation.out(t, this.out);
          }),
          (i.prototype.onResize = function () {
            this.in && Y(this.in.clip, "RevealInternalResize"),
              this.out && Y(this.out.clip, "RevealInternalResize");
          }),
          i
        );
      }
    ),
    c.d("FrontendLayerAnimationsRevealAnimation", function () {
      var t = function (t, i, s) {
          var h, n;
          switch (t) {
            case "curtains-horizontal":
              return (
                (h = l()),
                x(h, { width: "50%", background: "#" + s }),
                (n = h.cloneNode()),
                C(n, "left", "50%"),
                i.appendChild(h),
                i.appendChild(n),
                [h, n]
              );
            case "curtains-vertical":
              return (
                (h = l()),
                x(h, { height: "50%", background: "#" + s }),
                (n = h.cloneNode()),
                C(n, "top", "50%"),
                i.appendChild(h),
                i.appendChild(n),
                [h, n]
              );
            case "curtains-diagonal-1":
              var o = ot(
                "svg",
                {
                  width: 32,
                  height: 32,
                  viewBox: "0 0 32 32",
                  preserveAspectRatio: "none",
                },
                i
              );
              return [
                ot("polygon", { points: "0,0 33,0 0,33", fill: "#" + s }, o),
                ot(
                  "polygon",
                  { points: "32,32 32,-1 -1,32", fill: "#" + s },
                  o
                ),
              ];
            case "curtains-diagonal-2":
              o = ot(
                "svg",
                {
                  width: 32,
                  height: 32,
                  viewBox: "0 0 32 32",
                  preserveAspectRatio: "none",
                },
                i
              );
              return [
                ot("polygon", { points: "0,32 33,32 0,-1", fill: "#" + s }, o),
                ot("polygon", { points: "32,0 32,33 -1,0", fill: "#" + s }, o),
              ];
            case "circle-top":
            case "circle-right":
            case "circle-bottom":
            case "circle-left":
              (h = l()),
                x(h, { "border-radius": "100%", background: "#" + s }),
                i.appendChild(h);
              var r = function (t, i, s) {
                var h;
                switch (i) {
                  case "circle-top":
                  case "circle-bottom":
                    h =
                      2 *
                      Math.ceil(
                        Math.sqrt((s.width * s.width) / 4 + s.height * s.height)
                      );
                    break;
                  case "circle-right":
                  case "circle-left":
                    h =
                      2 *
                      Math.ceil(
                        Math.sqrt(s.width * s.width + (s.height * s.height) / 4)
                      );
                }
                x(t, {
                  "margin-top": -h / 2 + "px",
                  "margin-left": -h / 2 + "px",
                  width: h + "px",
                  height: h + "px",
                });
              }.bind(this, h, t);
              switch (
                (r(i.getBoundingClientRect()),
                j(
                  i,
                  "RevealInternalResize",
                  function (t, i) {
                    i(t.getBoundingClientRect());
                  }.bind(this, i, r)
                ),
                t)
              ) {
                case "circle-top":
                  C(h, "left", "50%");
                  break;
                case "circle-right":
                  x(h, { left: "100%", top: "50%" });
                  break;
                case "circle-bottom":
                  x(h, { left: "50%", top: "100%" });
                  break;
                case "circle-left":
                  C(h, "top", "50%");
              }
              return [h];
          }
          return (h = l()), C(h, "background", "#" + s), i.appendChild(h), [h];
        },
        i = function (t, i, s, n, r, a) {
          var c = h(r, a),
            u = t.totalDuration();
          c.length === o && (c = [c]);
          for (var f = 0; f < c.length; f++)
            c[f].a.transformOrigin &&
              (t.set(i[f], { transformOrigin: c[f].a.transformOrigin }, u),
              delete c[f].a.transformOrigin),
              (c[f].b.ease = n),
              t.fromTo(i[f], s, c[f].a, c[f].b, u);
        },
        s = function (t, i, s, n, r, a, c) {
          var u = h(a, c);
          u.length === o && (u = [u]);
          for (var f = 0; f < u.length; f++)
            u[f].a.transformOrigin &&
              (t.set(i[f], { transformOrigin: u[f].a.transformOrigin }, n),
              delete u[f].a.transformOrigin),
              (u[f].a.ease = r),
              t.fromTo(i[f], s, u[f].b, u[f].a, n);
        },
        h = function (t, i) {
          var s, h, n;
          switch (t) {
            case "top":
              return { a: { yP: -100.1 }, b: { yP: 0 } };
            case "right":
              return { a: { xP: 100.1 }, b: { xP: 0 } };
            case "bottom":
              return { a: { yP: 100.1 }, b: { yP: 0 } };
            case "left":
              return { a: { xP: -100.1 }, b: { xP: 0 } };
            case "skew-top":
              return (
                (s = i.getBoundingClientRect()),
                (h = 20),
                (n = Math.cos(((90 - h) * Math.PI) / 180) * s.width),
                {
                  a: { y: -1 * (s.height + n), skewY: -h },
                  b: { y: 0, skewY: 0 },
                }
              );
            case "skew-right":
              return (
                (s = i.getBoundingClientRect()),
                (h = 20),
                (n = Math.cos(((90 - h) * Math.PI) / 180) * s.height),
                { a: { x: s.width + n, skewX: -h }, b: { x: 0, skewX: 0 } }
              );
            case "skew-bottom":
              return (
                (s = i.getBoundingClientRect()),
                (h = 20),
                (n = Math.cos(((90 - h) * Math.PI) / 180) * s.width),
                { a: { y: s.height + n, skewY: h }, b: { y: 0, skewY: 0 } }
              );
            case "skew-left":
              return (
                (s = i.getBoundingClientRect()),
                (h = 20),
                (n = Math.cos(((90 - h) * Math.PI) / 180) * s.height),
                {
                  a: { x: -1 * (s.width + n), skewX: h },
                  b: { x: 0, skewX: 0 },
                }
              );
            case "rotate-top-left":
              return {
                a: { rotationZ: -90, transformOrigin: "0 0" },
                b: { rotationZ: 0 },
              };
            case "rotate-top-left-":
              return {
                a: { rotationZ: 90, transformOrigin: "0 0" },
                b: { rotationZ: 0 },
              };
            case "rotate-top-right":
              return {
                a: { rotationZ: 90, transformOrigin: "100% 0" },
                b: { rotationZ: 0 },
              };
            case "rotate-top-right-":
              return {
                a: { rotationZ: -90, transformOrigin: "100% 0" },
                b: { rotationZ: 0 },
              };
            case "rotate-bottom-left":
              return {
                a: { rotationZ: 90, transformOrigin: "0 100%" },
                b: { rotationZ: 0 },
              };
            case "rotate-bottom-left-":
              return {
                a: { rotationZ: -90, transformOrigin: "0 100%" },
                b: { rotationZ: 0 },
              };
            case "rotate-bottom-right":
              return {
                a: { rotationZ: -90, transformOrigin: "100% 100%" },
                b: { rotationZ: 0 },
              };
            case "rotate-bottom-right-":
              return {
                a: { rotationZ: 90, transformOrigin: "100% 100%" },
                b: { rotationZ: 0 },
              };
            case "circle-top":
              return {
                a: { scale: 0, transformOrigin: "50% 50%", yP: -5 },
                b: { yP: 0, scale: 1 },
              };
            case "circle-right":
              return {
                a: { scale: 0, transformOrigin: "50% 50%", xP: 5 },
                b: { xP: 0, scale: 1 },
              };
            case "circle-bottom":
              return {
                a: { scale: 0, transformOrigin: "50% 50%", yP: 5 },
                b: { yP: 0, scale: 1 },
              };
            case "circle-left":
              return {
                a: { scale: 0, transformOrigin: "50% 50%", xP: -5 },
                b: { xP: 0, scale: 1 },
              };
            case "curtains-horizontal":
              return [
                { a: { xP: -100 }, b: { xP: 0 } },
                { a: { xP: 100 }, b: { xP: 0 } },
              ];
            case "curtains-vertical":
              return [
                { a: { yP: -100 }, b: { yP: 0 } },
                { a: { yP: 100 }, b: { yP: 0 } },
              ];
            case "curtains-diagonal-1":
            case "curtains-diagonal-2":
              return [
                { a: { xP: -100 }, b: { xP: 0 } },
                { a: { xP: 100 }, b: { xP: 0 } },
              ];
          }
        },
        n = function (t, i) {
          var s = {},
            h = {};
          switch (t) {
            case "fade":
              (s = { opacity: 0 }), (h = { opacity: 1 });
              break;
            case "scale-up":
              (s = { scale: 0.7 }), (h = { scale: 1 });
              break;
            case "scale-down":
              (s = { scale: 1.3 }), (h = { scale: 1 });
              break;
            case "top":
              (s = { yP: -100.1 }), (h = { yP: 0 });
              break;
            case "right":
              (s = { xP: 100.1 }), (h = { xP: 0 });
              break;
            case "bottom":
              (s = { yP: 100.1 }), (h = { yP: 0 });
              break;
            case "left":
              (s = { xP: -100.1 }), (h = { xP: 0 });
              break;
            default:
              return !1;
          }
          return "out" === i ? { from: h, to: s } : { from: s, to: h };
        };
      return {
        in: function (h, r) {
          "no" !== r.options.from && (r.revealedElementSMW.opacity = 0);
          var a = new c.J(),
            u = "no" === r.options.from ? 1 : 2,
            f = r.options.duration / u;
          h.add(a), h.set(r.clipSMW, { visibility: "visible" }, 0);
          var l = c.MW.L(t(r.options.from, r.clip, r.options.color)),
            d = c.MW.L(t(r.options.to, r.clip, r.options.color));
          c.MW.t(l, { visibility: "hidden" }),
            a.set({}, {}, r.options.delay),
            "no" !== r.options.from
              ? (c.MW.t(d, { visibility: "hidden" }),
                a.set(l, { visibility: "visible" }),
                i(a, l, f, r.options.fromease, r.options.from, r.clip),
                a.set(l, { visibility: "hidden" }),
                a.set(d, { visibility: "visible" }))
              : (r.clipSMW.visibility = "visible");
          var m = a.totalDuration(),
            v = n(r.options.content, "in");
          v
            ? (v.from.opacity === o &&
                a.set(r.revealedElementSMW, { opacity: 1 }),
              (v.to.ease = "easeOutCubic"),
              a.fromTo(r.revealedElementSMW, f, v.from, v.to))
            : a.set(r.revealedElementSMW, { opacity: 1 }),
            s(a, d, f, m, r.options.toease, r.options.to, r.clip),
            a.set(d, { visibility: "visible" }),
            a.set(r.clipSMW, { visibility: "hidden" });
        },
        out: function (h, r) {
          var a = new c.J(),
            u = "no" === r.options.to ? 1 : 2,
            f = r.options.duration / u;
          h.add(a), h.set(r.clipSMW, { visibility: "visible" }, 0);
          var l = c.MW.L(t(r.options.from, r.clip, r.options.color)),
            d = c.MW.L(t(r.options.to, r.clip, r.options.color));
          c.MW.t(l, { visibility: "hidden" }),
            c.MW.t(d, { visibility: "hidden" }),
            a.set({}, {}, r.options.delay),
            a.set(l, { visibility: "visible" }),
            i(a, l, f, r.options.fromease, r.options.from, r.clip),
            a.set(l, { visibility: "hidden" });
          var m = a.totalDuration(),
            v = n(r.options.content, "out");
          v
            ? (v.from.opacity === o &&
                a.set(r.revealedElementSMW, { opacity: 0 }),
              (v.to.ease = "easeOutCubic"),
              a.fromTo(r.revealedElementSMW, f, v.from, v.to, m - f))
            : a.set(r.revealedElementSMW, { opacity: 0 }),
            (m = a.totalDuration()),
            a.set(d, { visibility: "visible" }, m),
            s(a, d, f, m, r.options.toease, r.options.to, r.clip),
            a.set(d, { visibility: "hidden" }),
            a.set(r.clipSMW, { visibility: "hidden" });
        },
      };
    }),
    c.d(
      "AnimationsControllerLoop",
      "FrontendLayerAnimationManager",
      function () {
        function t(t, i) {
          (this.animationManager = t),
            (this.status = this.animationManager.status),
            (this.layerElement = i);
        }
        return (
          (t.prototype.reset = function () {
            for (var t = 0; t < this.animations.length; t++)
              this.animations[t].reset();
          }),
          (t.prototype.play = function () {
            if (!this.status.suspended() && this.status.is("LOOP_PLAYING"))
              for (var t = 0; t < this.animations.length; t++)
                this.animations[t].play();
          }),
          (t.prototype.resume = function () {
            for (var t = 0; t < this.animations.length; t++)
              this.animations[t].resume();
            this.status.set("LOOP_PLAYING");
          }),
          (t.prototype.pause = function () {
            if (!this.status.suspended() && this.status.is("LOOP_PLAYING")) {
              for (var t = 0; t < this.animations.length; t++)
                this.animations[t].pause();
              this.status.set("LOOP_PAUSED");
            }
          }),
          (t.prototype.suspend = function () {
            if (!this.status.suspended() && this.status.is("LOOP_PLAYING"))
              for (var t = 1; t < this.animations.length; t++)
                this.animations[t].suspend();
          }),
          (t.prototype.unsuspend = function () {
            if (!this.status.suspended() && this.status.is("LOOP_PLAYING"))
              for (var t = 1; t < this.animations.length; t++)
                this.animations[t].unsuspend();
          }),
          (t.prototype.requestEnd = function (t) {
            if (
              !this.status.suspended() &&
              (this.status.is("LOOP_PLAYING") || this.status.is("LOOP_PAUSED"))
            ) {
              for (var i = 0; i < this.animations.length; i++)
                this.animations[i].requestEnd();
              t
                ? this.status.set("LOOP_ENDING_FORCED")
                : this.status.set("LOOP_ENDING");
            }
          }),
          (t.prototype.markSingleAnimationEnded = function () {
            for (var t = 0; t < this.animations.length; t++)
              if (!this.animations[t].isEnded()) return;
            this.ended();
          }),
          (t.prototype.ended = function () {
            this.animationManager.loopComplete();
          }),
          (t.prototype.resetForReplay = function () {
            for (var t = 0; t < this.animations.length; t++)
              this.animations[t].resetForReplay();
          }),
          (t.prototype.invalidate = function () {
            for (var t = 1; t < this.animations.length; t++)
              this.animations[t].invalidate();
          }),
          (t.prototype.buildTimeline = function (t) {
            this.animations = [];
            for (
              var i = 0;
              i < this.animationManager.relatedAnimations.loop.length;
              i++
            )
              this.animationManager.relatedAnimations.loop[i].setController(
                this,
                i
              ),
                this.animations.push(
                  this.animationManager.relatedAnimations.loop[i]
                );
            if (this.animations.length > 0) {
              this.animationManager.linear ||
                (t.addPause(
                  "+=0.002",
                  this.animationManager.promises.loop.wait.bind(
                    this.animationManager.promises.loop
                  )
                ),
                this.animationManager.promises.loop.addPauseTween(t.recent()));
              var s = t.totalDuration();
              this.animations[0].buildTimeline(t, s);
              for (i = 1; i < this.animations.length; i++)
                this.animations[i].buildTimeline(
                  !!this.animationManager.linear && t,
                  this.animationManager.linear ? s : 0
                );
            }
            return this.animations.length;
          }),
          t
        );
      }
    ),
    c.d("AnimationsLayerLoop", ["AnimationsLoopAbstract"], function () {
      function t(t, i, s, h, n) {
        (this.layerAnimations = t),
          (this.animationManager = i),
          (this.layerElement = s),
          (this.It = h),
          (this.animationData = n.keyFrames),
          (this.transformOrigin =
            n.transformOrigin.split("|*|").join("% ") + "px"),
          (this.repeatCount = n.repeatCount),
          (this.repeatStartDelay = Math.max(0, n.repeatStartDelay)),
          (this.single = !1),
          c.AnimationsLoopAbstract.prototype.constructor.call(
            this,
            parseInt(this.repeatCount)
          );
      }
      return (
        (t.prototype = Object.create(c.AnimationsLoopAbstract.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.playLoopAgain = function () {
          c.AnimationsLoopAbstract.prototype.playLoopAgain.call(this),
            Y(this.layerElement, "LoopRoundComplete");
        }),
        (t.prototype.buildTimeline = function (t, i) {
          var s = this.animationManager.linear ? "linear" : "event";
          (this.timeline = t || new c.J({ paused: !0 })),
            (i += 0.001),
            this.timeline.set(
              this.It,
              { transformOrigin: this.transformOrigin, immediateRender: !1 },
              i
            ),
            this.repeatStartDelay > 0 &&
              ((i += this.repeatStartDelay), this.timeline.set({}, {}, i)),
            this.buildTimelineLoop(i, s, m([], this.animationData)),
            this.animationManager.linear ||
              this.timeline.set({}, { onComplete: this.onComplete.bind(this) });
        }),
        (t.prototype.buildTimelineLoop = function (t, i, s) {
          var h,
            n = this._buildAnimationChainLoop(s);
          if (((this.zero = m({ ease: n[0].to.ease }, n[0])), !this.single)) {
            var o = this.zero.duration / 2;
            c.FrontendLayerAnimationManager.optimizeFromTo(
              this.timeline,
              this.It,
              o,
              d({}, this.layerAnimations.currentZero),
              d({ immediateRender: !1, ease: this.zero.ease }, this.zero.from),
              t
            ),
              (t += o);
          }
          if ("linear" === i) {
            var r = this.repeatCount;
            r < 1 && (r = 1);
            for (var a = 0; a < r; a++)
              for (h = 0; h < n.length; h++)
                c.FrontendLayerAnimationManager.optimizeFromTo(
                  this.timeline,
                  this.It,
                  n[h].duration,
                  d({}, n[h].from),
                  d({ immediateRender: !1 }, n[h].to),
                  t
                ),
                  (t += n[h].duration + (n[h].to.delay ? n[h].to.delay : 0));
          } else if ("event" === i) {
            for (this.timeline.addLabel("LOOP", t), h = 0; h < n.length; h++)
              (n[h].to.immediateRender = !1),
                c.FrontendLayerAnimationManager.optimizeFromTo(
                  this.timeline,
                  this.It,
                  n[h].duration,
                  n[h].from,
                  n[h].to,
                  t
                ),
                (t += n[h].duration + (n[h].to.delay ? n[h].to.delay : 0));
            this.timeline.set({}, { onComplete: this.repeat.bind(this) }, t);
          }
          this.single ||
            c.FrontendLayerAnimationManager.optimizeFromTo(
              this.timeline,
              this.It,
              this.zero.duration / 2,
              d({}, this.zero.from),
              d(
                { immediateRender: !1, ease: this.zero.ease },
                this.layerAnimations.currentZero
              ),
              t
            );
        }),
        (t.prototype._buildAnimationChainLoop = function (t) {
          var i;
          if (1 === t.length) {
            this.single = !0;
            var s = m({}, t[0]);
            ((i = d({}, this.layerAnimations.currentZero)).duration =
              s.duration),
              (i.ease = s.ease),
              (360 !== Math.abs(s.rotationX) &&
                360 !== Math.abs(s.rotationY) &&
                360 !== Math.abs(s.rotationZ)) ||
              (1 != s.opacity && s.opacity !== o) ||
              (0 != s.x && s.x !== o) ||
              (0 != s.y && s.y !== o) ||
              (0 != s.z && s.z !== o) ||
              (1 != s.scaleX && s.scaleX !== o) ||
              (1 != s.scaleY && s.scaleY !== o) ||
              (0 != s.skewX && s.skewX !== o) ||
              (0 != s.n2blur && s.n2blur !== o)
                ? t.push(i)
                : (360 == +s.rotationX
                    ? (s.rotationX = "+=360")
                    : -360 == +s.rotationX && (s.rotationX = "-=360"),
                  360 == +s.rotationY
                    ? (s.rotationY = "+=360")
                    : -360 == +s.rotationY && (s.rotationY = "-=360"),
                  360 == +s.rotationZ
                    ? (s.rotationZ = "+=360")
                    : -360 == +s.rotationZ && (s.rotationZ = "-=360"));
          }
          var h = 0,
            n = [
              {
                duration: t[h].duration,
                from: d({}, this.layerAnimations.currentZero),
                to: t[h],
              },
            ];
          for (h++; h < t.length; h++) {
            var r = (i = t[h]).duration;
            delete i.duration, delete i.name;
            var a = d({}, n[n.length - 1].to);
            delete a.delay,
              delete a.ease,
              n.push({ duration: r, from: a, to: i });
          }
          return (
            this.single ||
              (n.push({
                duration: n[0].duration,
                from: d({}, n[n.length - 1].to),
                to: d({}, n[0].to),
              }),
              n.shift(),
              delete n[0].from.duration),
            n
          );
        }),
        t
      );
    }),
    c.d("AnimationsLoopTimeline", ["AnimationsLoopAbstract"], function () {
      c.AnimationsLoopAbstract.status;
      function t(t, i) {
        (this.manager = t),
          c.AnimationsLoopAbstract.prototype.constructor.call(this, i);
      }
      return (
        (t.prototype = Object.create(c.AnimationsLoopAbstract.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.buildTimeline = function (t, i) {
          (this.timeline = t || new c.J({ paused: !0 })),
            this.controller.animationManager.linear
              ? (this.repeatCount = 0)
              : this.timeline.addLabel("LOOP", i);
          var s = this.manager.getLoopTimeline();
          this.timeline.add(s.paused(0), i),
            this.controller.animationManager.linear ||
              s.eventCallback(
                "onComplete",
                function () {
                  this.repeat() || this.onComplete();
                }.bind(this)
              );
        }),
        (t.prototype.invalidate = function () {
          var t = this.timeline.time();
          this.timeline.invalidate().time(t, !0);
        }),
        t
      );
    }),
    c.d("AnimationsLoopAbstract", function () {
      function t(t) {
        (this.controller = null),
          (this.ending = !1),
          (this.ended = !1),
          (this._counter = 0),
          (this.repeatCount = t),
          (this.timeline = null);
      }
      return (
        (t.prototype.setController = function (t, i) {
          (this.controller = t), (this.index = i);
        }),
        (t.prototype.repeat = function () {
          return (
            this._counter++,
            !!(
              (this.isInfinite() && !1 === this.ending) ||
              this._counter < this.repeatCount
            ) && (this.playLoopAgain(), !0)
          );
        }),
        (t.prototype.playLoopAgain = function () {
          this.timeline.seek("LOOP");
        }),
        (t.prototype.resetCounter = function () {
          this._counter = 0;
        }),
        (t.prototype.isInfinite = function () {
          return 0 === this.repeatCount;
        }),
        (t.prototype.buildTimeline = function (t, i) {}),
        (t.prototype.refresh = function () {}),
        (t.prototype.reset = function () {
          this.resetForReplay(), this.index > 0 && this.timeline.pause(0);
        }),
        (t.prototype.resetForReplay = function () {
          (this.ending = !1), (this.ended = !1), this.resetCounter();
        }),
        (t.prototype.play = function () {
          this.index > 0 && this.timeline.restart(!0);
        }),
        (t.prototype.pause = function () {
          this.timeline.pause();
        }),
        (t.prototype.resume = function () {
          this.timeline.play();
        }),
        (t.prototype.suspend = function () {
          this.timeline.pause();
        }),
        (t.prototype.unsuspend = function () {
          this.timeline.play();
        }),
        (t.prototype.onComplete = function () {
          (this.ended = !0), this.controller.markSingleAnimationEnded();
        }),
        (t.prototype.isEnded = function () {
          return this.ended;
        }),
        (t.prototype.requestEnd = function () {
          this.ended ||
            this.ending ||
            ((this.ending = !0), this.timeline.play());
        }),
        t
      );
    }),
    customElements.define(
      "ss3-fullpage",
      class extends HTMLElement {
        connectedCallback() {
          "100vh" !== this.dataset.basedOn &&
            ((this.Pt = i.n2Height || i.innerHeight),
            x(this, { "--target-height": this.Pt + "px", opacity: 1 }),
            j(i, "resize", this.onResize.bind(this)));
        }
        onResize() {
          this.updateHeight(),
            requestAnimationFrame(this.updateHeight.bind(this));
        }
        updateHeight() {
          var t = i.n2Height || i.innerHeight;
          Math.abs(this.Pt - t) > (this.dataset.threshold || 0) &&
            (C(this, "--target-height", t + "px"), (this.Pt = t));
        }
      }
    ),
    c.d("SmartSliderResponsive", function () {
      let t,
        u = !1;
      function f(t, s) {
        for (var h in ((this.state = { StarterSlide: !1 }),
        (this.isVisible = !0),
        (this.isResetActiveSlideEarly = this.isResetActiveSlideEarly || !1),
        (this.focusOffsetTop = 0),
        (this.focusOffsetBottom = 0),
        (this.minimumSlideHeight = 0),
        (this.at = !1),
        (this.visibleRealSlidesChanged = !0),
        (this.kt = -1),
        (this.Ot = -1),
        (this.Ct = -1),
        (this.xt = -1),
        (this.filters = {
          SliderWidth: [],
          SliderHeight: [],
          SlideHeight: [],
          SliderVerticalCSS: [],
        }),
        (this.parameters = d(
          {
            mediaQueries: {},
            hideOn: {
              desktopLandscape: 0,
              desktopPortrait: 0,
              tabletLandscape: 0,
              tabletPortrait: 0,
              mobileLandscape: 0,
              mobilePortrait: 0,
            },
            onResizeEnabled: !0,
            type: "auto",
            focusUser: 1,
            focusEdge: "auto",
            enabledDevices: {
              desktopLandscape: 1,
              desktopPortrait: 0,
              mobileLandscape: 0,
              mobilePortrait: 0,
              tabletLandscape: 0,
              tabletPortrait: 0,
            },
            breakpoints: [],
            sizes: {
              desktopPortrait: { width: 1200, height: 600, max: 1e4, min: 40 },
            },
            ratioToDevice: {
              Portrait: { tablet: 0, mobile: 0 },
              Landscape: { tablet: 0, mobile: 0 },
            },
            overflowHiddenPage: 0,
            focus: { offsetTop: "", offsetBottom: "" },
          },
          s
        )),
        (this.mediaQueries = {}),
        this.parameters.mediaQueries))
          this.parameters.mediaQueries[h] &&
            (this.mediaQueries[h] = i.matchMedia(
              this.parameters.mediaQueries[h].join(",")
            ));
        (this.parameters.hideOn = i.ssOverrideHideOn || this.parameters.hideOn),
          (this.doThrottledResize = NextendThrottle(
            this.doResize.bind(this),
            50
          )),
          (this.slider = t),
          (this.sliderElement = t.sliderElement),
          (this.Lt = "1" === A(this.sliderElement, "ssLegacyFontScale")),
          this.addFilter(
            "SliderWidth",
            this.filterSliderWidthHorizontalSpacing.bind(this)
          ),
          this.slider.isAdmin ||
            "fullpage" !== this.parameters.type ||
            this.slider.stages.done(
              "WidgetsReady",
              function () {
                var t = this.getVerticalOffsetHeight();
                this.Mt !== t && this.doResize();
              }.bind(this)
            );
      }
      return (
        s.addEventListener(
          "scroll",
          function () {
            t && a(t),
              (u = !0),
              (t = r(function () {
                u = !1;
              }, 300));
          },
          { capture: !0, passive: !0 }
        ),
        (f.DeviceMode = {
          unknown: 0,
          desktoplandscape: 1,
          desktopportrait: 2,
          tabletlandscape: 3,
          tabletportrait: 4,
          mobilelandscape: 5,
          mobileportrait: 6,
        }),
        (f._DeviceMode = {
          0: "unknown",
          1: "desktopLandscape",
          2: "desktopPortrait",
          3: "tabletLandscape",
          4: "tabletPortrait",
          5: "mobileLandscape",
          6: "mobilePortrait",
        }),
        (f._DeviceGroup = {
          desktopLandscape: "desktop",
          desktopPortrait: "desktop",
          tabletLandscape: "tablet",
          tabletPortrait: "tablet",
          mobileLandscape: "mobile",
          mobilePortrait: "mobile",
        }),
        (f.prototype.init = function () {
          this.base = this.parameters.base;
          var t = this.sliderElement.querySelector(
            ".n2-ss-slider-background-video"
          );
          t &&
            (n2const.isVideoAutoplayAllowed()
              ? (t.addEventListener("error", R.bind(null, t), !0),
                t.load(),
                t.play())
              : R(t));
        }),
        (f.prototype.setDeviceID = function (t) {
          (this.deviceID = t), (this.device = f._DeviceMode[t]);
        }),
        (f.prototype.start = function () {
          if (
            (this.slider.stages.done(
              "ResizeFirst",
              function () {
                n2const.fonts.then(
                  function () {
                    this.slider.stages.resolve("Fonts");
                  }.bind(this)
                );
              }.bind(this)
            ),
            (this.normalizeTimeout = null),
            this.setDeviceID(f.DeviceMode.unknown),
            (this.ratios = { slideW: 1, slideH: 1 }),
            (this.horizontalSpacingControls = { right: [], left: [] }),
            (this.horizontalSpacing = { right: 0, left: 0 }),
            (this.staticSizes = {
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
            }),
            (this.alignElement =
              this.slider.sliderElement.closest(".n2-ss-align")),
            (this.v = this.slider.v),
            (this.containerElementPadding = this.sliderElement.parentNode),
            (this.containerElement = this.containerElementPadding.parentNode),
            !this.slider.isAdmin &&
              this.parameters.overflowHiddenPage &&
              D([h, n], "overflow", "hidden"),
            (c._smallestZoom = 320),
            this.initFocusOffsetObserver(),
            this.slider.stages.resolve("ResponsiveStart"),
            this.init(),
            this.parameters.onResizeEnabled)
          ) {
            j(i, "resize", this.onResize.bind(this)), (this.lastROWidth = 0);
            var t = this.containerElement.parentNode,
              s = new ResizeObserver(
                function (t) {
                  this.processResizeObserverRect(t[0].contentRect);
                }.bind(this)
              );
            requestAnimationFrame(
              function () {
                this.processResizeObserverRect(t.getBoundingClientRect()),
                  s.observe(t);
              }.bind(this)
            );
          } else this.onResize();
        }),
        (f.prototype.processResizeObserverRect = function (t) {
          (this.isVisible = !!t.width),
            this.lastROWidth !== t.width &&
              ((this.lastROWidth = t.width), this.internalResize());
        }),
        (f.prototype.internalResize = function () {
          this.onResize();
        }),
        (f.prototype.getDeviceMode = function () {
          return f._DeviceMode[this.deviceID];
        }),
        (f.prototype.getDeviceGroup = function () {
          return f._DeviceGroup[this.getDeviceMode()];
        }),
        (f.prototype.onResize = function (e) {
          (this.kt = i.innerWidth),
            (this.Ot = i.innerHeight),
            this.slider.mainAnimation &&
            "playing" === this.slider.mainAnimation.getState()
              ? this.Dt ||
                ((this.Dt = !0),
                G(
                  this.sliderElement,
                  "mainAnimationComplete",
                  this._onResize.bind(this, e)
                ))
              : this._onResize(e);
        }),
        (f.prototype._onResize = function (e) {
          this.doResize(e), delete this.Dt;
        }),
        (f.prototype.doNormalizedResize = function () {
          this.normalizeTimeout && a(this.normalizeTimeout),
            (this.normalizeTimeout = r(this.doResize.bind(this), 10));
        }),
        (f.prototype.identifyDeviceID = function () {
          for (var t in this.mediaQueries)
            if (this.mediaQueries[t].matches) return f.DeviceMode[t];
          return f.DeviceMode.desktopportrait;
        }),
        (f.prototype.initFocusOffsetObserver = function () {
          if ("" !== this.parameters.focus.offsetTop) {
            var t;
            try {
              t = s.querySelectorAll(this.parameters.focus.offsetTop);
            } catch (t) {
              console.error(
                'The Top CSS selector: "' +
                  this.parameters.focus.offsetTop +
                  '" used in the slider is invalid!'
              );
            }
            if (t && t.length)
              for (
                var i = new ResizeObserver(
                    function (t) {
                      this.focusOffsetTop = 0;
                      for (var i = 0; i < t.length; i++)
                        this.focusOffsetTop +=
                          t[i].target.getBoundingClientRect().height;
                      this.Et();
                    }.bind(this)
                  ),
                  h = 0;
                h < t.length;
                h++
              )
                i.observe(t[h]);
          }
          if ("" !== this.parameters.focus.offsetBottom) {
            var n;
            try {
              n = s.querySelectorAll(this.parameters.focus.offsetBottom);
            } catch (t) {
              console.error(
                'The Bottom CSS selector: "' +
                  this.parameters.focus.offsetBottom +
                  '" used in the slider is invalid!'
              );
            }
            if (n && n.length) {
              var o = new ResizeObserver(
                function (t) {
                  this.focusOffsetBottom = 0;
                  for (var i = 0; i < t.length; i++)
                    this.focusOffsetBottom +=
                      t[i].target.getBoundingClientRect().height;
                  this.Et();
                }.bind(this)
              );
              for (h = 0; h < n.length; h++) o.observe(n[h]);
            }
          }
        }),
        (f.prototype.Et = function () {
          C(
            this.sliderElement,
            "--subtract-vertical-offset",
            (i.n2OffsetTop || this.focusOffsetTop) +
              (i.n2OffsetBottom || this.focusOffsetBottom) +
              "px"
          );
        }),
        (f.prototype.doResize = function (e) {
          if (!this.slider.isAdmin && u && this.Ct === this.kt) {
            const t = Math.abs(this.xt - this.Ot);
            if (t > 0 && t < 100) return;
          }
          (this.Ct = this.kt), (this.xt = this.Ot);
          var t = this.identifyDeviceID();
          if (this.parameters.hideOn[f._DeviceMode[t]])
            return F(this.v, "n2-section-smartslider--hidden"), !1;
          if ((N(this.v, "n2-section-smartslider--hidden"), !this.isVisible))
            return !1;
          var i = !1,
            s = this.device;
          if (
            (this.deviceID !== t &&
              (this.setDeviceID(t),
              s && N(this.sliderElement, "n2-ss-" + s),
              P(this.sliderElement, "deviceMode", this.device),
              F(this.sliderElement, "n2-ss-" + this.device),
              this.slider.h("SliderDevice", {
                lastDevice: s,
                device: this.device,
                group: f._DeviceGroup[this.device],
              }),
              (i = !0),
              this.slider.stages.resolve("Device")),
            this.slider.isAdmin ||
              ("fullpage" === this.parameters.type &&
                ((this.Mt = this.getVerticalOffsetHeight()),
                C(
                  this.sliderElement,
                  "--subtract-vertical-widget",
                  this.Mt + "px"
                ))),
            i &&
              ((this.slider.visibleRealSlides = []),
              this.slider.publicDispatchEvent("SliderDeviceOrientation", {
                slider: this.slider,
                lastDevice: s,
                device: this.device,
                group: f._DeviceGroup[this.device],
              }),
              this.slider.stages.resolve("DeviceOrientation"),
              this.finalizeVisibleSlidesStage1()),
            !this.slider.visibleRealSlides.length)
          )
            return (
              (this.parameters.hideOn[f._DeviceMode[t]] = !0),
              F(this.v, "n2-section-smartslider--hidden"),
              !1
            );
          if (this.slider.isVisible || this.visibleRealSlidesChanged) {
            for (var h = 0; h < this.slider.realSlides.length; h++)
              c.MW.i(this.slider.realSlides[h].element).setValues({
                width: "",
                height: "",
              }),
                x(this.slider.realSlides[h].element, { width: "", height: "" });
            this.resizeStage1Width(),
              this.slider.h("SliderResizeHorizontal"),
              this.resizeStage2Height();
          }
        }),
        (f.prototype.resizeStage1Width = function () {
          this.resizeContext = {};
        }),
        (f.prototype.resizeStage2Height = function () {
          this.finalizeVisibleSlidesStage2(),
            this.calculateResponsiveValues(),
            this.slider.stages.resolve("ResizeFirst"),
            this.triggerResize();
        }),
        (f.prototype.calculateResponsiveValues = function () {
          (this.ratios = {
            slideW: this.resizeContext.slideWidth / this.base.slideWidth,
            slideH: this.resizeContext.slideHeight / this.base.slideHeight,
          }),
            this.Lt &&
              D(
                this.sliderElement.querySelectorAll(
                  '.n2-ss-layer[data-sstype="slide"] > .n2-ss-layer[data-pm="absolute"][data-adaptivefont="0"]'
                ),
                "font-size",
                "calc(" +
                  16 * this.ratios.slideW +
                  "px * var(--ssfont-scale, 1))"
              );
          for (var t = 0; t < this.slider.realSlides.length; t++)
            c.MW.i(this.slider.realSlides[t].element).setValues({
              width: this.resizeContext.slideSelfWidth,
              height: this.resizeContext.slideSelfHeight,
            });
        }),
        (f.prototype.onStarterSlide = function (t) {
          (this.state.StarterSlide = !0),
            this.calibrateActiveSlide(t),
            delete this.targetCurrentSlide;
        }),
        (f.prototype.finalizeVisibleSlidesStage1 = function () {
          this.visibleRealSlidesChanged &&
            (this.slider.visibleRealSlides.sort(function (t, i) {
              return t.index - i.index;
            }),
            this.updateVisibleSlides(),
            this.slider.h("visibleRealSlidesChanged"),
            this.slider.stages.resolve("VisibleRealSlides"),
            this.isResetActiveSlideEarly && this.calibrateActiveSlide());
        }),
        (f.prototype.updateVisibleSlides = function () {
          this.slider.visibleSlides = this.slider.visibleRealSlides;
        }),
        (f.prototype.calibrateActiveSlide = function (t) {
          if (this.state.StarterSlide && this.slider.visibleSlides.length > 0) {
            var i = t || this.slider.currentRealSlide;
            i.isVisible ||
              (i = i.getNext()) ||
              (i = this.slider.currentSlide.getPrevious()),
              this.resetActiveRealSlide(i);
          }
        }),
        (f.prototype.resetActiveRealSlide = function (t) {
          var i, s;
          t && t !== this.slider.currentRealSlide
            ? (this.slider.h("BeforeCurrentSlideChange", t),
              (i = this.slider.currentSlide) &&
                this.slider.forceUnsetActiveSlide(i),
              this.slider.setCurrentRealSlide(t),
              (s = this.slider.currentSlide),
              (this.targetCurrentSlide = s),
              this.slider.forceSetActiveSlide(s),
              this.slider.h("SlideForceChange", {
                oldSlide: i,
                currentSlide: s,
              }))
            : (s = this.slider.currentSlide),
            this.slider.updateInsideSlides([s]);
        }),
        (f.prototype.finalizeVisibleSlidesStage2 = function () {
          this.visibleRealSlidesChanged &&
            ((this.visibleRealSlidesChanged = !1),
            this.isResetActiveSlideEarly || this.calibrateActiveSlide(),
            this.triggerVisibleSlidesChanged(),
            this.targetCurrentSlide !== o &&
              (this.slider.h("SlideWillChange", {
                targetSlide: this.targetCurrentSlide,
              }),
              this.slider.h("CurrentSlideChanged", {
                currentSlide: this.targetCurrentSlide,
              }),
              this.slider.stages.resolved("Visible") &&
                this.slider.playSlide(this.targetCurrentSlide),
              delete this.targetCurrentSlide));
        }),
        (f.prototype.triggerVisibleSlidesChanged = function () {
          this.slider.h("visibleSlidesChanged"),
            this.slider.stages.resolve("VisibleSlides"),
            this.slider.visibleRealSlides.length
              ? this.slider.isVisible || this.slider.show()
              : this.slider.isVisible && this.slider.hide();
        }),
        (f.prototype.getNormalizedModeString = function () {
          return f._DeviceMode[this.deviceID];
        }),
        (f.prototype.triggerResize = function () {
          this.slider.publicDispatchEvent("SliderResize", {
            ratios: this.ratios,
            responsive: this,
          }),
            this.slider.stages.resolve("Resized");
        }),
        (f.prototype.getVerticalOffsetHeight = function () {
          return this.at ? 0 : this.slider.widgets.getVerticalsHeight();
        }),
        (f.prototype.addHorizontalSpacingControl = function (t, i) {
          this.horizontalSpacingControls[t].push(i),
            this.slider.stages.resolved("ResizeFirst") &&
              this.doNormalizedResize();
        }),
        (f.prototype.filterSliderWidthHorizontalSpacing = function (t) {
          for (var i in ((this.horizontalSpacing = { right: 0, left: 0 }),
          this.horizontalSpacingControls))
            for (
              var s = this.horizontalSpacingControls[i], h = s.length - 1;
              h >= 0;
              h--
            ) {
              var n = s[h];
              n.isVisible() &&
                (n.refreshSliderSize(t),
                (this.horizontalSpacing[i] += n.getSize()));
            }
          return (
            x(this.containerElementPadding, {
              paddingLeft: this.horizontalSpacing.left + "px",
              paddingRight: this.horizontalSpacing.right + "px",
            }),
            t - this.horizontalSpacing.left - this.horizontalSpacing.right
          );
        }),
        (f.prototype.addFilter = function (t, i) {
          this.filters[t].push(i);
        }),
        (f.prototype.removeFilter = function (t, i) {
          this.filters[t].push(i);
        }),
        (f.prototype.applyFilter = function (t, i) {
          for (var s = 0; s < this.filters[t].length; s++)
            i = this.filters[t][s].call(this, i);
          return i;
        }),
        f
      );
    }),
    c.d("FrontendItemAnimatedHeading", function () {
      var t = {
        fade: {
          fn: "animateWhole",
          fixedWidth: !0,
          data: {
            duration: 0.6,
            overlap: 0,
            ease: "easeInOutQuad",
            from: { opacity: 0 },
            current: { opacity: 1 },
            to: { opacity: 0 },
          },
        },
        slide: {
          fn: "animateWhole",
          fixedWidth: !0,
          data: {
            duration: 0.6,
            overlap: 0,
            ease: "easeInOutQuad",
            from: { opacity: 0, xP: 100 },
            current: { opacity: 1, xP: 0 },
            to: { opacity: 0, xP: -100 },
          },
        },
        rotating: {
          fn: "animateWhole",
          fixedWidth: !0,
          data: {
            overflow: !0,
            duration: 0.6,
            overlap: 0.2,
            ease: "easeInOutQuad",
            transformOrigin: "50% 100% 0",
            from: { opacity: 0, rotationX: -70 },
            current: { opacity: 1, rotationX: 0 },
            to: { opacity: 0, rotationX: 70 },
          },
        },
        "drop-in": {
          fn: "animateWhole",
          fixedWidth: !0,
          data: {
            overflow: !0,
            duration: 0.6,
            overlap: 0.3,
            ease: "easeInOutQuad",
            from: { opacity: 0, scale: 1.2 },
            current: { opacity: 1, scale: 1 },
            to: { opacity: 0, scale: 0.6 },
          },
        },
        "slide-down": {
          fn: "animateWhole",
          fixedWidth: !0,
          data: {
            duration: 0.6,
            overlap: 0.6,
            ease: "easeInOutQuad",
            from: { opacity: 0, yP: -100 },
            current: { opacity: 1, yP: 0 },
            to: { opacity: 0, yP: 100 },
          },
        },
        typewriter1: {
          fn: "animateTypeWriter",
          data: {
            backspace: function (t) {
              this.timeline.staggerFromTo(
                t,
                0.1 * this.speedModifier,
                { display: "inline-block" },
                { display: "none", immediateRender: !1 },
                -0.1 * this.speedModifier,
                "+=" + this.showDuration
              );
            },
            backspaceDuration: function (t) {
              return (
                this.showDuration +
                0.1 * this.speedModifier +
                0.1 * (t.length - 1) * this.speedModifier
              );
            },
          },
        },
        chars: {
          fn: "animateChars",
          fixedWidth: !0,
          data: {
            duration: 0.4,
            stagger: 0.05,
            ease: "easeOutCubic",
            from: { scale: 0, opacity: 0 },
            current: { scale: 1, opacity: 1 },
            to: { scale: 0, opacity: 0 },
          },
        },
        chars2: {
          fn: "animateChars",
          fixedWidth: !0,
          data: {
            duration: 0.4,
            stagger: 0.05,
            ease: "easeOutCubic",
            from: { rotationY: 90, opacity: 0 },
            current: { rotationY: 0, opacity: 1 },
            to: { rotationY: -90, opacity: 0 },
          },
        },
      };
      function s(t, s) {
        if (
          ((this._t = t),
          (this.Rt = Array.prototype.slice.call(
            this._t.querySelectorAll(".n2-ss-animated-heading-i-text")
          )),
          (this.listeners = []),
          n2Slow || s.disabled.layerAnimations)
        )
          T(this.Rt.slice(1));
        else {
          this.Tt = c.MW.i(t);
          var h = [];
          this.Rt.forEach(function (t) {
            h.push(c.MW.i(t));
          }),
            (this.Ft = h),
            (this.slider = s),
            this.refreshJustifyContent();
          var n = "";
          if (
            (this.Rt.forEach(function (t) {
              n += t.innerHTML.trim();
            }),
            "" !== n)
          ) {
            if (n2const.isParentSameOrigin() && i.parent.tpEditorApp)
              return (
                D(this.Rt, { position: "static", margin: "0 10px" }),
                void D(
                  this._t.querySelectorAll(".n2-ss-animated-heading-i2"),
                  "white-space",
                  "normal"
                )
              );
            (this.Nt = []),
              (this.layerElement = this._t.closest(".n2-ss-layer")),
              this.start();
          }
        }
      }
      return (
        (s.prototype.start = function () {
          this.slider.started(this.started.bind(this));
        }),
        (s.prototype.started = function () {
          (this.color = A(this._t, "color") || "RGBA(255,255,255,1)"),
            (this.currentType = t[A(this._t, "animationType")] || t.slide),
            this.currentType.fixedWidth
              ? (this.animateWidth = 0 == +A(this._t, "animateWidth") ? 0 : 1)
              : (this.animateWidth = 0),
            (this.delay = (+A(this._t, "delay") || 0) / 1e3),
            (this.speedModifier =
              1 / (Math.max(+A(this._t, "speed") || 100, 0) / 100)),
            (this.showDuration =
              Math.max(+A(this._t, "showDuration") || 1500, 0) / 1e3),
            (this.loop = +A(this._t, "loop") || 0),
            (this.totalDuration = 0);
          var i = this.currentType.data,
            s = this.Rt.length,
            h = s;
          switch ((this.loop && h++, this.currentType.fn)) {
            case "animateWhole":
              var n = 0,
                o = 0;
              this.animateWidth
                ? (n = 0.4 * 0.8)
                : (o = i.overlap * this.speedModifier),
                (this.totalDuration =
                  (h - 1) * this.showDuration +
                  2 * (h - 1) * i.duration * this.speedModifier +
                  (h - 1) * n -
                  (h - 1) * o);
              break;
            case "animateTypeWriter":
              for (var r = 0; r < h; r++) {
                var a = this.getSplitTextChars(this.Rt[s === r ? 0 : r]);
                r > 0 &&
                  (this.totalDuration +=
                    0.8 +
                    0.2 * this.speedModifier +
                    0.2 * this.speedModifier * (a.length - 1)),
                  r < h - 1 &&
                    (this.totalDuration += i.backspaceDuration.call(this, a));
              }
              break;
            case "animateChars":
              for (o = 0, r = 0; r < h; r++) {
                a = this.getSplitTextChars(this.Rt[s === r ? 0 : r]);
                r > 0 &&
                  (this.totalDuration += Math.max(
                    o,
                    i.duration * this.speedModifier + (a.length - 1) * i.stagger
                  )),
                  r < h - 1 &&
                    ((this.totalDuration += this.showDuration),
                    (o =
                      i.duration * this.speedModifier +
                      (a.length - 1) * i.stagger));
              }
          }
          this.listeners.push(
            q(
              this.layerElement,
              "collectRelatedAnimations",
              this.collectRelatedAnimations.bind(this)
            )
          ),
            j(
              this.slider.sliderElement,
              "SliderResizeHorizontal",
              function () {
                this.onResize();
              }.bind(this)
            ),
            this.slider.isAdmin && this.onResize();
        }),
        (s.prototype.onResize = function () {
          var t = { height: 0 };
          this.currentType.fixedWidth && !this.animateWidth && (t.width = 0),
            S(this.Rt, "n2-ss-animated-heading-measure-width");
          for (var i = 0; i < this.Rt.length; i++) {
            var s = this.Rt[i],
              h = s.offsetWidth + 1,
              n = s.offsetHeight;
            P(s, "width", h),
              P(s, "height", n),
              (t.height = Math.max(t.height, n)),
              this.currentType.fixedWidth &&
                !this.animateWidth &&
                (t.width = Math.max(t.width, h));
          }
          if (
            (I(this.Rt, "n2-ss-animated-heading-measure-width"),
            this.currentType.fixedWidth && this.animateWidth)
          ) {
            let i;
            (i =
              this.slider.isAdmin || this.loop
                ? this.Rt[0]
                : this.Rt[this.Rt.length - 1]),
              (this.Tt.width = +A(i, "width")),
              (this.Tt.height = t.height),
              this.invalidate();
          } else (this.Tt.width = t.width), (this.Tt.height = t.height);
          this.refreshJustifyContent();
        }),
        (s.prototype.invalidate = function () {
          if (this.timeline) {
            var t = this.timeline.time();
            this.timeline.invalidate().time(t, !0);
          }
        }),
        (s.prototype.collectRelatedAnimations = function (t) {
          var i = t.relatedAnimations;
          1 === this.loop
            ? ((this.loopTimeline = new c.AnimationsLoopTimeline(this, 0)),
              i.loop.push(this.loopTimeline))
            : i.in.push(new c.AnimationsRelated(this, "extendTimeline"));
        }),
        (s.prototype.getTimeline = function () {
          return (
            this.timeline === o
              ? ((this.timeline = new c.J({ paused: 1 })),
                this[this.currentType.fn](this.currentType.data),
                this.timeline.delay(this.delay))
              : this.timeline.invalidate(),
            this.timeline
          );
        }),
        (s.prototype.getLoopTimeline = function () {
          return this.getTimeline();
        }),
        (s.prototype.extendTimeline = function (t, i, s) {
          var h = this.getTimeline();
          t.add(h, 0), h.paused(!1);
        }),
        (s.prototype.getSplitTextChars = function (t) {
          var i = t.splitTextChars;
          if (!i) {
            var s = c.tt(t, !0);
            t.splitTextChars = i = Array.prototype.filter.call(
              s.chars,
              function (t) {
                return 0 === t.children.length;
              }
            );
          }
          return i;
        }),
        (s.prototype.animateChars = function (t) {
          (this.Tt.overflow = "hidden"),
            this.animateWidth &&
              this.timeline.set(this.Tt, {
                width: function () {
                  return A(this, "width");
                }.bind(this.Rt[0]),
                snap: "width",
                rotationZ: "0.00001deg",
              });
          var i = 0,
            s = this.Rt.length,
            h = s;
          this.loop && h++;
          for (var n = 0; n < h; n++) {
            var o = this.Rt[s === n ? 0 : n],
              r = c.MW.L(this.getSplitTextChars(o));
            if (
              (c.MW.t(r, {
                transformPerspective: 1e3,
                "will-change": "transform, opacity",
              }),
              n > 0)
            ) {
              var a = this.timeline.totalDuration() - i;
              this.timeline.staggerFromTo(
                r,
                t.duration * this.speedModifier,
                d({}, t.from),
                d({ immediateRender: n < s, ease: t.ease }, t.current),
                t.stagger,
                a
              ),
                this.animateWidth &&
                  this.timeline.to(
                    this.Tt,
                    this.timeline.recent().duration(),
                    {
                      width: function () {
                        return A(this, "width");
                      }.bind(o),
                    },
                    a
                  );
            }
            n < h - 1 &&
              (this.timeline.staggerFromTo(
                r,
                t.duration * this.speedModifier,
                d({}, t.current),
                d({ immediateRender: 0 === n, ease: t.ease }, t.to),
                t.stagger,
                "+=" + this.showDuration
              ),
              (i = this.timeline.recent().duration()));
          }
          this.Nt.push(function () {
            this.animateWidth && (this.Tt.width = ""), (this.Tt.overflow = "");
          });
        }),
        (s.prototype.displayCursor = function () {
          var t = l(),
            i = c.MW.i(t);
          (t.className = "n2-ss-animated-heading-i-cursor"),
            C(t, "background-color", this.color),
            this.Rt[0].parentNode.appendChild(t);
          var s = new c.J({
            onComplete: function () {
              this.restart();
            },
          });
          s.fromTo(i, 0.1, { opacity: 0 }, { opacity: 1 }, "+=0.5"),
            s.fromTo(
              i,
              0.1,
              { opacity: 1 },
              { opacity: 0, immediateRender: !1 },
              "+=0.5"
            ),
            this.Nt.push(function () {
              s.kill(), R(t);
            });
        }),
        (s.prototype.animateTypeWriter = function (t) {
          c.MW.t(this.Ft, { position: "relative" }),
            this.timeline.set(this.Ft[0], {
              display: "inline-block",
              immediateRender: !0,
            }),
            c.MW.t(this.Ft.slice(1), { display: "none" }),
            this.timeline.set(this.Ft.slice(1), {
              display: "none",
              immediateRender: !0,
            }),
            this.timeline.set(this.getSplitTextChars(this.Rt[0]), {
              display: "inline-block",
              immediateRender: !0,
            });
          var i = this.Ft.length,
            s = i;
          this.loop && s++;
          for (var h = 0; h < s; h++) {
            var n = c.MW.L(this.getSplitTextChars(this.Rt[i === h ? 0 : h]));
            h > 0 &&
              (this.timeline.set(this.Ft[i === h ? 0 : h], {
                display: "inline-block",
                immediateRender: i !== h,
              }),
              this.timeline.staggerFromTo(
                n,
                0.2 * this.speedModifier,
                { display: "none" },
                { display: "inline-block", immediateRender: i !== h },
                0.2 * this.speedModifier,
                "+=0.8"
              )),
              h < s - 1 &&
                (t.backspace.call(this, n, this.Rt[0].parentNode),
                this.timeline.set(this.Ft[i === h ? 0 : h], {
                  display: "none",
                  immediateRender: !1,
                }));
          }
          this.displayCursor();
        }),
        (s.prototype.animateWhole = function (t) {
          t.overflow ? (this.Tt.overflow = "") : (this.Tt.overflow = "hidden"),
            this.animateWidth &&
              this.timeline.set(this.Tt, {
                width: function () {
                  return A(this, "width");
                }.bind(this.Rt[0]),
                immediateRender: !0,
              }),
            (t.transformOrigin = t.transformOrigin || "50% 50% 0"),
            this.timeline.set(c.MW.X(this.Rt), {
              transformOrigin: t.transformOrigin,
              transformPerspective: 1e3,
            });
          var i = this.Rt.length,
            s = i;
          this.loop && s++;
          for (var h = 0; h < s; h++) {
            var n = i === h ? 0 : h,
              o = this.Rt[n];
            if (h > 0) {
              var r = this.timeline.totalDuration();
              if (this.animateWidth) {
                this.timeline.to(
                  this.Tt,
                  0.4,
                  {
                    width: function () {
                      return A(this, "width");
                    }.bind(o),
                  },
                  r - 0.4 * 0.2
                ),
                  (r += 0.4 * 0.8);
              } else r -= t.overlap * this.speedModifier;
              this.timeline.fromTo(
                this.Ft[n],
                t.duration * this.speedModifier,
                d({}, t.from),
                d({ immediateRender: h < i, ease: t.ease }, t.current),
                r
              );
            }
            h < s - 1 &&
              this.timeline.fromTo(
                this.Ft[n],
                t.duration * this.speedModifier,
                d({}, t.current),
                d({ immediateRender: 0 === h, ease: t.ease }, t.to),
                "+=" + this.showDuration
              );
          }
          this.Nt.push(
            function () {
              this.animateWidth && (this.Tt.width = ""),
                (this.Tt.overflow = "");
            }.bind(this)
          );
        }),
        (s.prototype.refreshJustifyContent = function () {
          var t = this._t.parentNode,
            i = "";
          switch (O(t, "text-align")) {
            case "left":
              i = "flex-start";
              break;
            case "center":
              i = "center";
              break;
            case "right":
              i = "flex-end";
              break;
            case "justify":
              i = "space-between";
          }
          c.MW.i(t).justifyContent = i;
        }),
        s
      );
    }),
    c.d("FrontendItemAudio", function () {
      function t(t, i, h) {
        (this.state = {
          slideVisible: !1,
          visible: !1,
          slide: !1,
          play: !1,
          continuePlay: !1,
        }),
          (this.slider = t),
          (this.id = i),
          (this.node = s.getElementById(i)),
          (this.audio = this.node.querySelector("audio")),
          this.audio &&
            ((this.layerElement = this.node.closest(".n2-ss-layer")),
            (this.layer = this.node.closest(".n2-ss-layer").layer),
            (this.slide = this.slider.findSlideByElement(this.node)),
            (this.isStatic = this.slide.isStatic()),
            (this.isPaused = !1),
            (this.lastVolume = 1),
            (this.parameters = d(
              { autoplay: 0, loop: 0, reset: 0, volume: 1, show: 1 },
              h
            )),
            j(this.audio, "play", this.onPlay.bind(this)),
            j(this.audio, "pause", this.onPause.bind(this)),
            j(this.audio, "ended", this.onEnded.bind(this)),
            j(this.audio, "timeupdate", this.onTimeUpdate.bind(this)),
            n2const.isIOS
              ? this.prepareIOS()
              : j(this.audio, "volumechange", this.onVolumechange.bind(this)),
            this.audio.duration >= 0
              ? this.onReady()
              : this.audio.addEventListener(
                  "loadedmetadata",
                  this.onReady.bind(this)
                ));
      }
      return (
        (t.prototype.prepareIOS = function () {
          const t = this.node.querySelectorAll(
            ".n2-ss-item-audio-volume-container,.n2-ss-item-audio-mute,.n2-ss-item-audio-unmute"
          );
          T(t);
        }),
        (t.prototype.setState = function (t, i, s) {
          (s = s || !1),
            (this.state[t] = i),
            s &&
              (this.state.slideVisible &&
              this.state.visible &&
              this.state.play &&
              this.state.slide
                ? this.safePlay()
                : this.safePause());
        }),
        (t.prototype.safePlay = function () {
          this.safeCallback(
            function () {
              (this.promise = this.audio.play()),
                this.promise &&
                  Promise !== o &&
                  this.promise.catch(
                    function (e) {
                      if ("NotAllowedError" === e.name)
                        var t = function () {
                            B(i), !1 !== this.promise && this.safePlay();
                          }.bind(this),
                          i = [U(n, "click", t), U(n, "touchend", t)];
                    }.bind(this)
                  );
            }.bind(this)
          );
        }),
        (t.prototype.safePause = function () {
          this.safeCallback(
            function () {
              this.audio.pause(), (this.promise = !1);
            }.bind(this)
          );
        }),
        (t.prototype.safeCallback = function (t) {
          this.promise && Promise !== o ? this.promise.then(t).catch(t) : t();
        }),
        (t.prototype.initAutoplay = function () {
          this.isStatic
            ? (this.setState("play", !0), this.setState("slide", !0, !0))
            : (j(
                this.slider.sliderElement,
                "mainAnimationComplete",
                function (e) {
                  this.slide.isActiveWhen(
                    this.slider.slides[e.detail.currentSlideIndex]
                  )
                    ? (this.setState("play", !0),
                      this.setState("slide", !0, !0))
                    : this.setState("slide", !1, !0);
                }.bind(this)
              ),
              this.slide.isActiveWhen() &&
                (this.setState("play", !0), this.setState("slide", !0, !0)));
        }),
        (t.prototype.onReady = function () {
          (this.time = this.node.querySelector(".n2-ss-item-audio-time")),
            this.updateTime(),
            (this.audio.volume = this.parameters.volume);
          var t = this.node.querySelector(".n2-ss-item-audio-play");
          t &&
            j(
              t,
              "click",
              function () {
                this.setState("play", !0, !0);
              }.bind(this)
            );
          var i = this.node.querySelector(".n2-ss-item-audio-pause");
          i &&
            j(
              i,
              "click",
              function () {
                this.setState("play", !1, !0);
              }.bind(this)
            );
          var s = this.node.querySelector(".n2-ss-item-audio-mute");
          s &&
            j(
              s,
              "click",
              function () {
                this.audio.volume = 0;
              }.bind(this)
            );
          var h = this.node.querySelector(".n2-ss-item-audio-unmute");
          h &&
            j(
              h,
              "click",
              function () {
                this.audio.volume = this.lastVolume;
              }.bind(this)
            ),
            (this.progress = this.node.querySelector(
              ".n2-ss-item-audio-progress-container"
            )),
            this.progress &&
              (j(
                this.progress,
                "pointerdown",
                function (e) {
                  e.preventDefault(), e.stopPropagation(), this.updateUITime(e);
                  var t = [
                    U(
                      n,
                      "pointermove",
                      function (e) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          this.updateUITime(e);
                      }.bind(this)
                    ),
                    U(
                      n,
                      "pointerup",
                      function (e) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          this.updateUITime(e),
                          B(t);
                      }.bind(this)
                    ),
                    U(n, "pointerleave", function () {
                      B(t);
                    }),
                  ];
                }.bind(this)
              ),
              (this.playhead = this.progress.querySelector(
                ".n2-ss-item-audio-progress-playhead"
              ))),
            (this.volume = this.node.querySelector(
              ".n2-ss-item-audio-volume-container"
            )),
            this.volume &&
              (j(
                this.volume,
                "pointerdown",
                function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    this.updateUIVolume(e);
                  var t = [
                    U(
                      n,
                      "pointermove",
                      function (e) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          this.updateUIVolume(e);
                      }.bind(this)
                    ),
                    U(
                      n,
                      "pointerup",
                      function (e) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          this.updateUIVolume(e),
                          B(t);
                      }.bind(this)
                    ),
                    U(n, "pointerleave", function () {
                      B(t);
                    }),
                  ];
                }.bind(this)
              ),
              (this.volumehead = this.volume.querySelector(
                ".n2-ss-item-audio-volumehead"
              ))),
            new ResizeObserver(
              function (t) {
                var i = t[0].contentRect;
                if (i.width && i.height)
                  this.state.visible || this.setState("visible", !0, !0);
                else if (this.state.visible) {
                  var s = this.state.play;
                  this.setState("visible", !1, !0),
                    s && this.setState("continuePlay", !0);
                }
              }.bind(this)
            ).observe(this.layer.layer),
            this.slide.isVisible && this.setState("slideVisible", !0, !0),
            j(
              this.slide.element,
              "Hidden",
              function () {
                var t = this.state.play;
                this.setState("slideVisible", !1, !0),
                  t && this.setState("continuePlay", !0);
              }.bind(this)
            ),
            j(
              this.slide.element,
              "Visible",
              function () {
                this.setState("slideVisible", !0, !0);
              }.bind(this)
            ),
            this.slider.stages.done(
              "BeforeShow",
              function () {
                this.slide.isActiveWhen() && this.setState("slide", !0, !0);
              }.bind(this)
            ),
            1 == +this.parameters.autoplay &&
              this.slider.visible(this.initAutoplay.bind(this)),
            this.isStatic ||
              (j(
                this.slider.sliderElement,
                "CurrentSlideChanged",
                function (e) {
                  this.onCurrentSlideChange(e.detail.currentSlide);
                }.bind(this)
              ),
              j(
                this.slider.sliderElement,
                "mainAnimationStart",
                function (e) {
                  this.onCurrentSlideChange(
                    this.slider.slides[e.detail.currentSlideIndex]
                  );
                }.bind(this)
              ),
              parseInt(this.parameters.reset) &&
                j(
                  this.slider.sliderElement,
                  "mainAnimationComplete",
                  function (e) {
                    this.audio.currentTime > 0 &&
                      !this.slide.isActiveWhen(
                        this.slider.slides[e.detail.currentSlideIndex]
                      ) &&
                      (this.audio.currentTime = 0);
                  }.bind(this)
                ));
        }),
        (t.prototype.onCurrentSlideChange = function (t) {
          var i = this.slide.isActiveWhen(t);
          i && 1 == +this.parameters.autoplay && this.setState("play", !0),
            this.setState("slide", i, !0);
        }),
        (t.prototype.updateTime = function () {
          this.time &&
            (this.time.innerText =
              this.timeFormat(this.audio.currentTime) +
              " / " +
              this.timeFormat(this.audio.duration));
        }),
        (t.prototype.onPlay = function () {
          (this.isPaused = !1),
            p(this.node, "data-state", "playing"),
            requestAnimationFrame(this.refreshCurrentTime.bind(this)),
            this.isStatic ||
              Z(this.slider.sliderElement, "mediaStarted", { id: this.id }),
            Y(this.layerElement, "n2play");
        }),
        (t.prototype.onPause = function () {
          (this.isPaused = !0),
            p(this.node, "data-state", "paused"),
            Y(this.layerElement, "n2pause"),
            this.state.continuePlay
              ? (this.setState("continuePlay", !1), this.setState("play", !0))
              : this.setState("play", !1);
        }),
        (t.prototype.onEnded = function () {
          1 == +this.parameters.loop
            ? ((this.audio.currentTime = 0), this.safePlay())
            : (this.isStatic ||
                Z(this.slider.sliderElement, "mediaEnded", { id: this.id }),
              Y(this.layerElement, "n2stop"),
              this.setState("play", !1));
        }),
        (t.prototype.onTimeUpdate = function () {
          this.updateTime(),
            this.playhead &&
              C(
                this.playhead,
                "width",
                (this.audio.currentTime / this.audio.duration) * 100 + "%"
              );
        }),
        (t.prototype.onVolumechange = function () {
          this.volumehead &&
            C(this.volumehead, "width", 100 * this.audio.volume + "%"),
            p(this.node, "data-volume", this.audio.volume),
            0 !== this.audio.volume && (this.lastVolume = this.audio.volume);
        }),
        (t.prototype.refreshCurrentTime = function () {
          this.playhead &&
            C(
              this.playhead,
              "width",
              (this.audio.currentTime / this.audio.duration) * 100 + "%"
            ),
            this.isPaused ||
              requestAnimationFrame(this.refreshCurrentTime.bind(this));
        }),
        (t.prototype.updateUITime = function (e) {
          var t = this.progress.getBoundingClientRect();
          this.audio.currentTime =
            this.audio.duration *
            Math.max(
              0,
              Math.min(0.99, Math.round(e.clientX - t.left) / t.width)
            );
        }),
        (t.prototype.updateUIVolume = function (e) {
          var t = this.volume.getBoundingClientRect();
          this.audio.volume = Math.max(
            0,
            Math.min(1, Math.round(e.clientX - t.left) / t.width)
          );
        }),
        (t.prototype.timeFormat = function (t) {
          t = parseInt(t);
          var i = [],
            s = parseInt(t / 60);
          t -= 60 * s;
          var h = parseInt(s / 60);
          return (
            (s -= 60 * h),
            h > 0 && i.push(this.pad(h, 2, 0)),
            i.push(this.pad(s, 2, 0)),
            i.push(this.pad(t, 2, 0)),
            i.join(":")
          );
        }),
        (t.prototype.pad = function (t, i, s) {
          return (
            (s = s || "0"),
            (t += "").length >= i ? t : new Array(i - t.length + 1).join(s) + t
          );
        }),
        t
      );
    }),
    c.d("FrontendItemBeforeAfter", function () {
      class t {
        constructor(t, i) {
          (this.zt = i.interaction),
            (this.Wt = i.labeltype),
            (this.Yt = i.labeltype),
            (this.Zt = s.getElementById(t)),
            (this.Vt = this.Zt.querySelector(".n2-ss-item-ba-container")),
            (this.Bt = this.Zt.querySelectorAll(".n2-ss-item-ba-label")),
            (this.Ut = this.Zt.querySelector(".n2-ss-item-ba-caption")),
            (this.jt = c.MW.i(
              this.Zt.querySelector(".n2-ss-item-ba-image-container--top")
            )),
            (this.Gt = c.MW.i(
              this.Zt.querySelector(".n2-ss-item-ba-image-container--bottom")
            )),
            (this.Xt = c.MW.i(
              this.Zt.querySelector(".n2-ss-item-ba-divider-container")
            )),
            this.Ht(),
            this.qt();
        }
        qt() {
          let t;
          switch (this.zt) {
            case "hover":
              t = "pointerenter";
              break;
            default:
              t = "pointerdown";
          }
          "ontouchstart" in i &&
            (this.Vt.classList.add("n2-ss-item-ba-container-touchaction"),
            (t = "pointerdown")),
            this.Vt.addEventListener(t, (e) => {
              if (!e.isPrimary || ("drag" === this.zt && 0 !== e.button))
                return;
              let t = [],
                s = 0,
                h = !1;
              n2const.isIOS &&
                i.TouchEvent &&
                t.push(
                  U(this.Vt, "touchmove", (i) => {
                    s++,
                      s > 5 &&
                        (!h && this.__preventTouchAction(e, i)
                          ? B(t)
                          : (i.preventDefault(), (h = !0)));
                  })
                ),
                this.setMoveEvents(e),
                t.push(
                  U(n, "pointermove", (e) => {
                    e.isPrimary && this.setMoveEvents(e);
                  })
                ),
                t.push(
                  U(n, "pointerup", (e) => {
                    e.isPrimary &&
                      0 === e.button &&
                      "hover" !== this.zt &&
                      (this.Qt(e), B(t));
                  })
                ),
                t.push(
                  U(n, "pointercancel", (e) => {
                    e.isPrimary && (this.Qt(e), B(t));
                  })
                ),
                t.push(
                  U(this.Vt, "pointerleave", (e) => {
                    e.isPrimary && "drag" !== this.zt && (this.Qt(e), B(t));
                  })
                );
            });
        }
        __preventTouchAction(e, t) {
          const i = t.touches[0].clientX - e.clientX,
            s = t.touches[0].clientY - e.clientY;
          return this.__isScrollable(i, s);
        }
        Qt(e) {
          e && "pointermove" === e.type
            ? F(this.Vt, "divider-moving")
            : N(this.Vt, "divider-moving");
        }
        Ht() {
          this.Bt &&
            "hover" === this.Wt &&
            i.matchMedia("(hover: none)").matches &&
            this.Bt.forEach((t) => {
              N(t, "n2-ss-item-ba-label--show-hover"),
                F(t, "n2-ss-item-ba-label--show-normal");
            }),
            this.Ut &&
              "hover" === this.Yt &&
              i.matchMedia("(hover: none)").matches &&
              (N(this.Ut, "n2-ss-item-ba-caption--show-hover"),
              F(this.Ut, "n2-ss-item-ba-caption--show-normal"));
        }
        setMoveEvents(e) {
          this.Qt(e);
        }
      }
      class h extends t {
        setMoveEvents(e) {
          super.setMoveEvents(e);
          const t = this.Vt.getBoundingClientRect(),
            i = ((e.clientX - t.left) / Math.floor(t.width)) * 100,
            s = Math.max(0, Math.min(100, i));
          (this.Xt.xP = s),
            (this.jt.clipPath = "inset(0 0 0 " + s + "%)"),
            (this.Gt.clipPath =
              "inset(0 calc(" + (100 - s) + "% - .5px) 0 0 )");
        }
        __isScrollable(t, i) {
          return Math.abs(t) < Math.abs(i);
        }
      }
      class o extends t {
        setMoveEvents(e) {
          super.setMoveEvents(e);
          const t = this.Vt.getBoundingClientRect(),
            i = ((e.clientY - t.top) / Math.floor(t.height)) * 100,
            s = Math.max(0, Math.min(100, i));
          (this.Xt.yP = s),
            (this.jt.clipPath = "inset(" + s + "% 0 0 0)"),
            (this.Gt.clipPath =
              "inset(0 0  calc(" + (100 - s) + "% - .5px) 0)");
        }
        __isScrollable(t, i) {
          return Math.abs(t) > Math.abs(i);
        }
      }
      return class {
        constructor(t, i, s) {
          (this.Jt = s), (this.Kt = i), (this.st = t), this.$t();
        }
        $t() {
          switch (this.Jt.direction) {
            case "vertical":
              return new o(this.Kt, this.Jt);
            case "horizontal":
              return new h(this.Kt, this.Jt);
          }
        }
      };
    }),
    c.d("FrontendItemCaption", function () {
      function t(t, i, h, n, o, r) {
        (this.ut = n), (this.ti = 100 * o), (this.ii = r);
        var a = s.getElementById(i);
        a.addEventListener("pointerenter", this.si.bind(this)),
          a.addEventListener("pointerleave", this.hi.bind(this)),
          (this.ni = c.MW.i(a.querySelector("img"))),
          (this.ei = a.querySelector(".n2-ss-item-caption-content")),
          (this.oi = c.MW.i(this.ei)),
          "Fade" === h
            ? (this.oi.setValues({ opacity: 0 }),
              (this.ri = this.ai),
              (this.ci = this.ui))
            : ((this.fi = {}),
              (this.fi[this.ut] = this.ti),
              (this.oi[this.ut] = this.ti));
      }
      return (
        (t.prototype.si = function () {
          this.ri(), this.ii && this.li({ scale: 1.2 });
        }),
        (t.prototype.ri = function () {
          var t = {};
          (t[this.ut] = 0), this.di(t);
        }),
        (t.prototype.hi = function () {
          this.ci(), this.ii && this.li({ scale: 1 });
        }),
        (t.prototype.ci = function () {
          this.di(this.fi);
        }),
        (t.prototype.ai = function () {
          this.di({ opacity: 1 });
        }),
        (t.prototype.ui = function () {
          this.di({ opacity: 0 });
        }),
        (t.prototype.di = function (t) {
          c.K.to(this.oi, 0.5, d(t));
        }),
        (t.prototype.li = function (t) {
          c.K.to(this.ni, 0.5, d(t));
        }),
        t
      );
    }),
    c.d("FrontendItemCountdown", function () {
      function t(t, i) {
        (this.slider = i),
          (this.listeners = []),
          (this.mi = t),
          (this.vi = A(this.mi, "timestamp")),
          (this.layerElement = this.mi.closest(".n2-ss-layer")),
          this.start();
      }
      return (
        (t.prototype.start = function () {
          this.slider.started(this.started.bind(this));
        }),
        (t.prototype.started = function () {
          this.listeners.push(
            q(
              this.layerElement,
              "collectRelatedAnimations",
              this.animate.bind(this)
            )
          );
        }),
        (t.prototype.animate = function () {
          (this.second = this.layerElement.querySelector(
            ".n2-ss-item-countdown_second .n2-ss-item-countdown_number"
          )),
            (this.minute = this.layerElement.querySelector(
              ".n2-ss-item-countdown_minute .n2-ss-item-countdown_number"
            )),
            (this.hour = this.layerElement.querySelector(
              ".n2-ss-item-countdown_hour .n2-ss-item-countdown_number"
            )),
            (this.day = this.layerElement.querySelector(
              ".n2-ss-item-countdown_day .n2-ss-item-countdown_number"
            )),
            u(this.onUpdate.bind(this));
        }),
        (t.prototype.onUpdate = function () {
          let t = Math.max(0, this.vi - Math.floor(new Date().getTime() / 1e3));
          0 === t
            ? this.doAction()
            : (this.refresh(t), (this.pi = u(this.onUpdate.bind(this))));
        }),
        (t.prototype.doAction = function () {
          const t = A(this.mi, "action");
          if ("hideLayer" === t) R(this.layerElement);
          else if ("redirect" === t) {
            const t = A(this.mi, "redirectUrl");
            "" !== t && (i.location.href = t);
          }
        }),
        (t.prototype.refresh = function (t) {
          const i = Math.floor(t / 86400);
          t -= 86400 * i;
          const s = Math.floor(t / 3600);
          t -= 3600 * s;
          const h = Math.floor(t / 60),
            n = (t -= 60 * h);
          this.bi !== i &&
            ((this.bi = i), (this.day.innerText = this.formatNumber(i))),
            this.yi !== s &&
              ((this.yi = s), (this.hour.innerText = this.formatNumber(s))),
            this.wi !== h &&
              ((this.wi = h), (this.minute.innerText = this.formatNumber(h))),
            this.gi !== n &&
              ((this.gi = n), (this.second.innerText = this.formatNumber(n)));
        }),
        (t.prototype.formatNumber = function (t) {
          return t < 10 ? "0" + t : t;
        }),
        t
      );
    }),
    c.d("FrontendItemCounter", function () {
      function t(t, i, h) {
        (this.slider = t),
          (this.data = h),
          (this.currentPercent = this.data.fromPercent),
          (this.listeners = []);
        var n = s.getElementById(i);
        (n.ssCounter = this),
          (this.layerElement = n.closest(".n2-ss-layer")),
          this.data.displayMode &&
            (this.display = n.querySelector(this.data.display)),
          (this.countingDiv = n.querySelector(this.data.counting)),
          this.data.duration > 0 && this.start();
      }
      return (
        (t.prototype.start = function () {
          this.slider.started(this.started.bind(this));
        }),
        (t.prototype.started = function () {
          (this.delay = (+this.data.delay || 0) / 1e3),
            this.listeners.push(
              q(
                this.layerElement,
                "collectRelatedAnimations",
                this.collectRelatedAnimations.bind(this)
              )
            ),
            (this.timeline = new c.J({ paused: 1 }));
          var t = this.update.bind(this),
            i = {
              _percent: this.data.fromPercent,
              get percent() {
                return this._percent;
              },
              set percent(i) {
                (this._percent = i), t(i);
              },
            };
          this.timeline.fromTo(
            i,
            this.data.duration / 1e3,
            { percent: this.data.fromPercent },
            this._animateData(this.data.toPercent)
          );
        }),
        (t.prototype.collectRelatedAnimations = function (t) {
          t.relatedAnimations.in.push(
            new c.AnimationsRelated(this, "extendTimeline")
          );
        }),
        (t.prototype.extendTimeline = function (t, i, s) {
          t.add(this.timeline, this.delay), this.timeline.paused(!1);
        }),
        (t.prototype._animateData = function (t, i) {
          return { percent: t, ease: (i = i || "easeOutExpo") };
        }),
        (t.prototype.update = function (t) {
          switch (((this.currentPercent = t), this.data.displayMode)) {
            case "circle":
              p(this.display, "stroke-dashoffset", (1 - t) * this.data.c);
              break;
            case "width":
              C(this.display, "width", 100 * t + "%");
          }
          this.countingDiv.innerHTML =
            this.data.pre +
            (this.data.min + t * (this.data.total - this.data.min)).toFixed(0) +
            this.data.post;
        }),
        (t.prototype.to = function (t, i) {
          var s = this.update.bind(this),
            h = {
              _percent: this.currentPercent,
              get percent() {
                return this._percent;
              },
              set percent(t) {
                (this._percent = t), s(t);
              },
            };
          c.K.to(h, i / 1e3, this._animateData(t / 100));
        }),
        t
      );
    }),
    c.d("FrontendItemHighlightedHeading", function () {
      function t(t, s) {
        (this.slider = s),
          (this.mi = t),
          (this.wrapper = this.mi.parentNode),
          (this.listeners = []),
          this.refreshJustifyContent(),
          j(
            this.slider.sliderElement,
            "SliderResize",
            this.refreshJustifyContent.bind(this)
          ),
          (this.layerElement = this.mi.closest(".n2-ss-layer")),
          this.clean(),
          n2Slow ||
            s.disabled.layerAnimations ||
            !A(this.mi, "animate") ||
            (n2const.isParentSameOrigin() && i.parent.tpEditorApp) ||
            (this.wrapper
              .querySelectorAll(
                ".n2-ss-highlighted-heading-before,.n2-ss-highlighted-heading-after"
              )
              .forEach(function (t) {
                var i,
                  s = t.innerHTML.split(" "),
                  h = t.className,
                  n = new DocumentFragment();
                "n2-ss-highlighted-heading-after" === h && s.unshift("");
                for (var o = 0; o < s.length; o++)
                  ((i = l()).className = h),
                    (i.innerHTML = s[o] + "&nbsp;"),
                    n.appendChild(i);
                t.parentNode.insertBefore(n, t), R(t);
              }),
            this.start());
      }
      return (
        (t.prototype.clean = function () {}),
        (t.prototype.start = function () {
          this.slider.started(this.started.bind(this));
        }),
        (t.prototype.started = function () {
          (this.delay = (+A(this.mi, "delay") || 0) / 1e3),
            (this.duration =
              Math.max(+A(this.mi, "duration") || 1500, 1) / 1e3),
            (this.loop = +A(this.mi, "loop") || 0);
          var t = +A(this.mi, "loopDelay");
          isFinite(t) || (t = 2e3),
            (this.loopDelay = t / 1e3),
            (this.paths = this.mi.querySelectorAll("path")),
            (this.totalDuration =
              0.6 * this.duration * (this.paths.length - 1) + this.duration),
            this.loop &&
              this.loopDelay >= 0 &&
              (this.totalDuration += this.loopDelay + 0.8),
            this.listeners.push(
              q(
                this.layerElement,
                "collectRelatedAnimations",
                this.collectRelatedAnimations.bind(this)
              )
            );
        }),
        (t.prototype.collectRelatedAnimations = function (t) {
          var i = t.relatedAnimations;
          1 === this.loop
            ? i.loop.push(new c.AnimationsLoopTimeline(this, 0))
            : i.in.push(new c.AnimationsRelated(this, "extendTimeline"));
        }),
        (t.prototype.extendTimeline = function (t) {
          var i = this.getTimeline();
          t.add(i, 0), i.paused(!1);
        }),
        (t.prototype.getTimeline = function () {
          if (this.timeline === o) {
            for (
              var t = new c.J({ paused: 1 }), i = 0;
              i < this.paths.length;
              i++
            )
              this.animatePath(t, this.paths[i], 0.6 * this.duration * i);
            this.loop &&
              this.loopDelay >= 0 &&
              (t.to(
                c.MW.L(this.paths),
                0.4,
                { opacity: 0 },
                "+=" + this.loopDelay
              ),
              t.set({}, {}, "+=0.4")),
              t.delay(this.delay),
              (this.timeline = t);
          }
          return this.timeline;
        }),
        (t.prototype.getLoopTimeline = function () {
          return this.getTimeline();
        }),
        (t.prototype.animatePath = function (t, i, s) {
          var h = c.MW.i(i),
            n = Math.round(1.01 * (i.getTotalLength() || 2e3));
          t.fromTo(h, 0.1, { opacity: 0 }, { opacity: 1 }, s),
            t.fromTo(
              h,
              this.duration,
              { "stroke-dasharray": "0 " + n },
              { "stroke-dasharray": n + " " + n },
              s
            );
        }),
        (t.prototype.refreshJustifyContent = function () {
          var t = "";
          switch (
            i.getComputedStyle(this.wrapper).getPropertyValue("text-align")
          ) {
            case "left":
              t = "flex-start";
              break;
            case "center":
              t = "center";
              break;
            case "right":
              t = "flex-end";
              break;
            case "justify":
              t = "space-between";
          }
          c.MW.i(this.wrapper).justifyContent = t;
        }),
        t
      );
    }),
    c.d("FrontendItemHeadingSplitText", function () {
      var t = {
        opacity: 1,
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
      };
      function i(t, i, h, n, r, a, c, u) {
        if (
          !(
            n2Slow ||
            t.disabled.layerAnimations ||
            t.disabled.layerSplitTextAnimations ||
            (!r && !c)
          )
        ) {
          (this.node = s.getElementById(i)),
            (this.slider = t),
            (this.splitText = !1),
            (this.listeners = []);
          var f = this.node.querySelector("a.n2-ow");
          f && (this.node = f),
            (this.layerElement = this.node.closest(".n2-ss-layer")),
            (this.in = {
              options: !1,
              totalDuration: 0,
              timeline: o,
              invalidate: !1,
            }),
            (this.out = {
              options: !1,
              totalDuration: 0,
              timeline: o,
              invalidate: !1,
            }),
            this.node && this.start(h, n, r, a, c, u);
        }
      }
      return (
        (i.prototype.start = function (t, i, s, h, n, o) {
          this.slider.started(this.started.bind(this, t, i, s, h, n, o));
        }),
        (i.prototype.started = function (t, i, s, h, n, o) {
          var r,
            a,
            u = { chars: 0, words: 0 };
          if (
            (s &&
              ((this.in.options = this.optimize(s.data, h)),
              (u[this.in.options.mode] = 1)),
            n &&
              ((this.out.options = this.optimize(n.data, o)),
              (u[this.out.options.mode] = 1)),
            (this.splitText = c.tt(this.node, u.chars)),
            this.in.options)
          ) {
            switch (
              ((r = this.in.options),
              (a = this.splitText[r.mode].length),
              r.sort)
            ) {
              case "side":
              case "center":
                a = Math.ceil(a / 2);
            }
            this.in.totalDuration = (a - 1) * Math.abs(r.stagger) + r.duration;
          }
          if (this.out.options) {
            switch (
              ((r = this.out.options),
              (a = this.splitText[r.mode].length),
              r.sort)
            ) {
              case "side":
              case "center":
                a = Math.ceil(a / 2);
            }
            this.out.totalDuration = (a - 1) * Math.abs(r.stagger) + r.duration;
          }
          for (var f in ((this.in.options || this.out.options) &&
            this.listeners.push(
              q(
                this.layerElement,
                "collectRelatedAnimations",
                this.collectRelatedAnimations.bind(this)
              )
            ),
          (c.MW.i(this.layerElement).perspective = 1e3),
          (this.node.textRendering = "auto"),
          u))
            u[f] &&
              c.MW.X(this.splitText[f]).setValues({
                "transform-origin": t,
                "backface-visibility": i,
              });
        }),
        (i.prototype.getTimelineIn = function () {
          this.in.timeline = new c.J({ paused: 1 });
          var i = this.in.options,
            s = { ease: i.ease };
          return (
            this._animate(
              this.in.timeline,
              i.mode,
              i.sort,
              i.duration,
              m({}, i.from),
              d(s, t),
              i.stagger
            ),
            this.in.timeline
          );
        }),
        (i.prototype.getTimelineOut = function () {
          this.out.timeline = new c.J({ paused: 1 });
          var i = this.out.options,
            s = { ease: i.ease };
          return (
            this.in.timeline && (s.immediateRender = !1),
            this._animate(
              this.out.timeline,
              i.mode,
              i.sort,
              i.duration,
              m({}, t),
              d(s, i.from),
              -i.stagger
            ),
            this.out.timeline
          );
        }),
        (i.prototype.collectRelatedAnimations = function (t) {
          var i = t.relatedAnimations;
          this.in.options &&
            i.in.push(new c.AnimationsRelated(this, "extendTimelineIn")),
            this.out.options &&
              i.out.push(new c.AnimationsRelated(this, "extendTimelineOut"));
        }),
        (i.prototype.extendTimelineIn = function (t) {
          var i = this.getTimelineIn();
          t.add(i, this.in.options.delay), i.paused(!1);
        }),
        (i.prototype.extendTimelineOut = function (t) {
          var i = this.getTimelineOut();
          t.add(i, this.out.options.delay), i.paused(!1);
        }),
        (i.prototype._animate = function (t, i, s, h, n, o, r) {
          var a = d([], this.splitText[i]),
            u = null,
            f = [];
          switch (s) {
            case "reversed":
              a.reverse();
              break;
            case "random":
              !(function (t, i, s, h) {
                for (s = t.length; s; )
                  (i = (Math.random() * s--) | 0),
                    (h = t[s]),
                    (t[s] = t[i]),
                    (t[i] = h);
              })(a);
              break;
            case "side":
            case "center":
              for (u = []; a.length > 1; ) f.push(a.shift()), u.push(a.pop());
              1 === a.length && f.push(a.shift()),
                (a = f),
                "center" === s && (a.reverse(), u.reverse());
              break;
            case "sideShifted":
            case "centerShifted":
              for (; a.length > 1; ) f.push(a.shift()), f.push(a.pop());
              1 === a.length && f.push(a.shift()),
                (a = f),
                "centerShifted" === s && a.reverse();
          }
          t.staggerFromTo(c.MW.L(a), h, n, o, r, 0),
            u && u.length && t.staggerFromTo(c.MW.L(u), h, n, o, r, 0);
        }),
        (i.prototype.optimize = function (t, i) {
          "lines" === t.mode && (t.mode = "words");
          var s = {
            mode: t.mode,
            sort: t.sort,
            duration: t.duration,
            stagger: t.stagger,
            delay: i,
            from: {},
            ease: t.ease,
          };
          return (
            1 != t.opacity && (s.from.opacity = t.opacity),
            1 != t.scale && (s.from.scale = t.scale),
            0 != t.x && (s.from.x = t.x),
            0 != t.y && (s.from.y = t.y),
            0 != t.rotationX && (s.from.rotationX = t.rotationX),
            0 != t.rotationY && (s.from.rotationY = t.rotationY),
            0 != t.rotationZ && (s.from.rotationZ = t.rotationZ),
            s
          );
        }),
        i
      );
    }),
    c.d("FrontendItemTransition", function () {
      function t(t, i, h) {
        (this.slider = t), (this.animation = h);
        var n = s.getElementById(i);
        j(n, "mouseenter", this["in" + h].bind(this)),
          j(n, "mouseleave", this["out" + h].bind(this)),
          (this.Si = c.MW.L(n.querySelectorAll("img"))),
          (this.Ii = c.MW.i(n.querySelector(".n2-ss-item-transition-inner"))),
          this["init" + h]();
      }
      return (
        (t.prototype.initFade = function () {
          this.Si[1].opacity = 0;
        }),
        (t.prototype.inFade = function () {
          c.K.to(this.Si[1], 0.5, { opacity: 1 }),
            c.K.to(this.Si[0], 0.5, { opacity: 0 });
        }),
        (t.prototype.outFade = function () {
          c.K.to(this.Si[1], 0.5, { opacity: 0 }),
            c.K.to(this.Si[0], 0.5, { opacity: 1 });
        }),
        (t.prototype.initVerticalFlip = function () {
          (this.Ii.perspective = 1e3),
            (this.Si[0].transformPerspective = 1e3),
            (this.Si[1].transformPerspective = 1e3),
            (this.Si[0].rotationX = 0),
            (this.Si[0].backfaceVisibility = "hidden"),
            (this.Si[1].rotationX = 180),
            (this.Si[1].backfaceVisibility = "hidden");
        }),
        (t.prototype.inVerticalFlip = function () {
          c.K.to(this.Si[0], 0.5, { rotationX: -180 }),
            c.K.to(this.Si[1], 0.5, { rotationX: 0 });
        }),
        (t.prototype.outVerticalFlip = function () {
          c.K.to(this.Si[0], 0.5, { rotationX: 0 }),
            c.K.to(this.Si[1], 0.5, { rotationX: 180 });
        }),
        (t.prototype.initHorizontalFlip = function () {
          (this.Ii.perspective = 1e3),
            (this.Si[0].transformPerspective = 1e3),
            (this.Si[1].transformPerspective = 1e3),
            (this.Si[0].rotationY = 0),
            (this.Si[0].backfaceVisibility = "hidden"),
            (this.Si[1].rotationY = 180),
            (this.Si[1].backfaceVisibility = "hidden");
        }),
        (t.prototype.inHorizontalFlip = function () {
          c.K.to(this.Si[0], 0.5, { rotationY: -180 }),
            c.K.to(this.Si[1], 0.5, { rotationY: 0 });
        }),
        (t.prototype.outHorizontalFlip = function () {
          c.K.to(this.Si[0], 0.5, { rotationY: 0 }),
            c.K.to(this.Si[1], 0.5, { rotationY: 180 });
        }),
        t
      );
    }),
    c.d("FrontendItemVideo", function () {
      var t = 1;
      function i(i, h, n, o) {
        (this.state = {
          slideVisible: !1,
          visible: !1,
          scroll: !1,
          slide: !1,
          play: !1,
          continuePlay: !1,
        }),
          (this.counter = t++),
          (this.slider = i),
          (this.playerId = h),
          (this.playerElement = s.getElementById(this.playerId)),
          (this.parameters = d({ autoplay: 0, loop: 0, reset: 0 }, n)),
          (this.slide = i.findSlideByElement(this.playerElement)),
          (this.isStatic = this.slide.isStatic()),
          (this.cover = this.playerElement.parentNode.querySelector(
            ".n2_ss_video_player__cover"
          ));
        var r = +A(this.playerElement, "volume");
        0 === r
          ? ((this.playerElement.volume = 1), (this.playerElement.muted = !0))
          : ((this.playerElement.volume = r), (this.playerElement.muted = !1)),
          this.slider.stages.done(
            "BeforeShow",
            this.initVideoPlayer.bind(this)
          );
      }
      return (
        (i.prototype.fadeOutCover = function () {
          this.coverFadedOut === o &&
            this.cover &&
            ((this.coverFadedOut = !0),
            c.K.to(c.MW.i(this.cover), 0.3, {
              opacity: 0,
              onComplete: function () {
                R(this.cover);
              }.bind(this),
            }));
        }),
        (i.prototype.initVideoPlayer = function () {
          "fill" === A(this.playerElement.parentNode, "aspectRatio") &&
            this.slider.responsive.doThrottledResize();
          var t = this.playerElement.closest(".n2-ss-layer");
          (this.layer = t.layer),
            new ResizeObserver(
              function (t) {
                var i = t[0].contentRect;
                if (i.width && i.height)
                  this.state.visible || this.setState("visible", !0, !0);
                else if (this.state.visible) {
                  var s = this.state.play;
                  this.setState("visible", !1, !0),
                    s && this.setState("continuePlay", !0);
                }
              }.bind(this)
            ).observe(t),
            this.slide.isVisible && this.setState("slideVisible", !0, !0),
            j(
              this.slide.element,
              "Hidden",
              function () {
                var t = this.state.play;
                this.setState("slideVisible", !1, !0),
                  t && this.setState("continuePlay", !0);
              }.bind(this)
            ),
            j(
              this.slide.element,
              "Visible",
              function () {
                this.setState("slideVisible", !0, !0);
              }.bind(this)
            ),
            j(
              this.playerElement,
              "playing",
              function () {
                this.isStatic ||
                  Z(this.slider.sliderElement, "mediaStarted", {
                    id: this.playerId,
                  }),
                  Y(t, "n2play");
              }.bind(this)
            ),
            j(
              this.playerElement,
              "ended",
              function () {
                1 !== parseInt(this.parameters.loop) &&
                  (this.isStatic ||
                    Z(this.slider.sliderElement, "mediaEnded", {
                      id: this.playerId,
                    }),
                  Y(t, "n2stop"),
                  this.setState("play", !1),
                  "next" === this.parameters.ended &&
                    ((s.fullscreenElement || s.webkitFullscreenElement) &&
                      (s.exitFullscreen || s.webkitExitFullscreen).call(s),
                    this.slider.next(!0)));
              }.bind(this)
            ),
            j(
              this.playerElement,
              "pause",
              function () {
                Y(t, "n2pause"),
                  this.state.continuePlay
                    ? (this.setState("continuePlay", !1),
                      this.setState("play", !0))
                    : this.setState("play", !1);
              }.bind(this)
            ),
            this.slide.isActiveWhen() && this.setState("slide", !0, !0),
            1 === parseInt(this.parameters.autoplay) &&
              this.slider.visible(this.initAutoplay.bind(this)),
            this.isStatic ||
              (j(
                this.slider.sliderElement,
                "CurrentSlideChanged",
                function (e) {
                  this.onCurrentSlideChange(e.detail.currentSlide);
                }.bind(this)
              ),
              j(
                this.slider.sliderElement,
                "mainAnimationStart",
                function (e) {
                  this.onCurrentSlideChange(
                    this.slider.slides[e.detail.currentSlideIndex]
                  );
                }.bind(this)
              ),
              parseInt(this.parameters.reset) &&
                j(
                  this.slider.sliderElement,
                  "mainAnimationComplete",
                  function (e) {
                    this.playerElement.currentTime > 0 &&
                      !this.slide.isActiveWhen(
                        this.slider.slides[e.detail.currentSlideIndex]
                      ) &&
                      (this.playerElement.currentTime = 0);
                  }.bind(this)
                )),
            "" !== this.parameters["scroll-pause"]
              ? c.ScrollTracker.add(
                  this.playerElement,
                  this.parameters["scroll-pause"],
                  function () {
                    this.setState("scroll", !0, !0);
                  }.bind(this),
                  function () {
                    this.setState("continuePlay", !0),
                      this.setState("scroll", !1, !0);
                  }.bind(this)
                )
              : this.setState("scroll", !0, !0),
            this.cover &&
              (G(this.cover, "click", this.safePlay.bind(this)),
              G(t, "n2play", this.fadeOutCover.bind(this)));
        }),
        (i.prototype.onCurrentSlideChange = function (t) {
          var i = this.slide.isActiveWhen(t);
          i && 1 == this.parameters.autoplay && this.setState("play", !0),
            this.setState("slide", i, !0);
        }),
        (i.prototype.initAutoplay = function () {
          this.isStatic
            ? (this.setState("play", !0), this.setState("slide", !0, !0))
            : (j(
                this.slider.sliderElement,
                "mainAnimationComplete",
                function (e) {
                  this.slide.isActiveWhen(
                    this.slider.slides[e.detail.currentSlideIndex]
                  )
                    ? (this.setState("play", !0),
                      r(
                        function () {
                          this.setState("slide", !0, !0);
                        }.bind(this),
                        100
                      ))
                    : this.setState("slide", !1, !0);
                }.bind(this)
              ),
              this.slide.isActiveWhen() &&
                (this.setState("play", !0), this.setState("slide", !0, !0)));
        }),
        (i.prototype.setState = function (t, i, s) {
          (s = s || !1),
            (this.state[t] = i),
            s &&
              (this.state.slideVisible &&
              this.state.visible &&
              this.state.play &&
              this.state.slide &&
              this.state.scroll
                ? this.safePlay()
                : this.safePause());
        }),
        (i.prototype.safePlay = function () {
          this.safeCallback(
            function () {
              this.playerElement.readyState < 4 && this.playerElement.load(),
                (this.promise = this.playerElement.play()),
                this.promise &&
                  Promise !== o &&
                  this.promise.catch(
                    function (e) {
                      if ("NotAllowedError" === e.name)
                        var t = function () {
                            B(i), !1 !== this.promise && this.safePlay();
                          }.bind(this),
                          i = [U(n, "click", t), U(n, "touchend", t)];
                    }.bind(this)
                  );
            }.bind(this)
          );
        }),
        (i.prototype.safePause = function () {
          this.safeCallback(
            function () {
              this.playerElement.pause(), (this.promise = !1);
            }.bind(this)
          );
        }),
        (i.prototype.safeCallback = function (t) {
          this.promise && Promise !== o ? this.promise.then(t).catch(t) : t();
        }),
        i
      );
    }),
    c.d("FrontendItemVimeo", function () {
      function t(t, i, h, n, o, r) {
        if (
          ((this.state = {
            slideVisible: !1,
            visible: !1,
            scroll: !1,
            slide: !1,
            InComplete: !1,
            play: !1,
            continuePlay: !1,
          }),
          (this.promise = new Promise(
            function (t) {
              this._resolve = t;
            }.bind(this)
          )),
          (this.slider = t),
          (this.playerId = i),
          (this.playerElement = s.getElementById(this.playerId)),
          (this.cover = this.playerElement.querySelector(
            ".n2_ss_video_player__cover"
          )),
          (this.hasImage = o),
          (this.start = r),
          (this.parameters = d(
            {
              vimeourl: "//vimeo.com/144598279",
              privateid: "",
              autoplay: "0",
              ended: "",
              reset: "0",
              title: "1",
              byline: "1",
              portrait: "0",
              loop: "0",
              color: "00adef",
              volume: "-1",
              dnt: "0",
            },
            n
          )),
          1 === parseInt(this.parameters.autoplay))
        )
          if (navigator.userAgent.toLowerCase().indexOf("android") > -1)
            this.parameters.volume = 0;
          else if (n2const.isIOS) {
            this.parameters.autoplay = 0;
            try {
              "playsInline" in f("video") &&
                ((this.parameters.autoplay = 1), (this.parameters.volume = 0));
            } catch (t) {}
          }
        n2const.isLighthouse || c.r("windowLoad", this.whenLoaded.bind(this));
      }
      var i;
      return (
        (t.prototype.whenLoaded = function () {
          1 === parseInt(this.parameters.autoplay) ||
          !this.hasImage ||
          n2const.isMobile
            ? this.ready(this.initVimeoPlayer.bind(this))
            : this.ready(
                function () {
                  var t = function (e) {
                      B(i),
                        e.preventDefault(),
                        e.stopPropagation(),
                        this.initVimeoPlayer(),
                        this.safePlay();
                    }.bind(this),
                    i = [
                      U(this.playerElement, "click", t),
                      U(this.playerElement, "n2click", t),
                    ];
                }.bind(this)
              );
        }),
        (t.prototype.ready = function (t) {
          i ||
            (i = new Promise(function (t) {
              var i = f("script");
              (i.onload = t),
                (i.src = "https://player.vimeo.com/api/player.js"),
                s.head.appendChild(i);
            })),
            i.then(t);
        }),
        (t.prototype.initVimeoPlayer = function () {
          var t = f("iframe");
          (t.className = "intrinsic-ignore"),
            (t.allow = "fullscreen; autoplay; encrypted-media"),
            (t.id = this.playerId + "-frame"),
            (t.src =
              "https://player.vimeo.com/video/" +
              this.parameters.vimeocode +
              "?autoplay=0&_video&title=" +
              this.parameters.title +
              "&byline=" +
              this.parameters.byline +
              "&background=" +
              this.parameters.background +
              "&portrait=" +
              this.parameters.portrait +
              "&color=" +
              this.parameters.color +
              "&loop=" +
              this.parameters.loop +
              ("-1" == this.parameters.quality
                ? ""
                : "&quality=" + this.parameters.quality) +
              "&dnt=" +
              this.parameters["privacy-enhanced"] +
              ("" !== this.parameters.privateid
                ? "&h=" + this.parameters.privateid
                : "")),
            (t.webkitAllowFullScreen = !0),
            (t.allowFullScreen = !0),
            x(t, {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }),
            this.playerElement.prepend(t),
            (this.player = new Vimeo.Player(t, { autoplay: !1 })),
            (this.promise = this.player.ready()),
            this.slider.stages.done(
              "BeforeShow",
              function () {
                this.promise.then(this.onReady.bind(this));
              }.bind(this)
            );
        }),
        (t.prototype.onReady = function () {
          var t = parseFloat(this.parameters.volume);
          t >= 0 && this.setVolume(t),
            (this.slide = this.slider.findSlideByElement(this.playerElement)),
            (this.isStatic = this.slide.isStatic());
          var i = this.playerElement.closest(".n2-ss-layer");
          (this.layer = i.layer),
            new ResizeObserver(
              function (t) {
                var i = t[0].contentRect;
                if (i.width && i.height)
                  this.state.visible || this.setState("visible", !0, !0);
                else if (this.state.visible) {
                  var s = this.state.play;
                  this.setState("visible", !1, !0),
                    s && this.setState("continuePlay", !0);
                }
              }.bind(this)
            ).observe(this.layer.layer),
            this.slide.isVisible && this.setState("slideVisible", !0, !0),
            j(
              this.slide.element,
              "Hidden",
              function () {
                var t = this.state.play;
                this.setState("slideVisible", !1, !0),
                  t && this.setState("continuePlay", !0);
              }.bind(this)
            ),
            j(
              this.slide.element,
              "Visible",
              function () {
                this.setState("slideVisible", !0, !0);
              }.bind(this)
            ),
            this.cover &&
              (n2const.isMobile &&
                G(this.cover, "click", this.safePlay.bind(this)),
              G(
                i,
                "n2play",
                function () {
                  c.K.to(c.MW.i(this.cover), 0.3, {
                    opacity: 0,
                    onComplete: function () {
                      R(this.cover);
                    }.bind(this),
                  });
                }.bind(this)
              )),
            this.player.on(
              "play",
              function () {
                this.isStatic ||
                  Z(this.slider.sliderElement, "mediaStarted", {
                    id: this.playerId,
                  }),
                  Y(i, "n2play");
              }.bind(this)
            ),
            this.player.on(
              "pause",
              function () {
                Y(i, "n2pause"),
                  this.state.continuePlay
                    ? (this.setState("continuePlay", !1),
                      this.setState("play", !0))
                    : this.setState("play", !1);
              }.bind(this)
            ),
            this.player.on(
              "ended",
              function () {
                this.isStatic ||
                  Z(this.slider.sliderElement, "mediaEnded", {
                    id: this.playerId,
                  }),
                  Y(i, "n2stop"),
                  this.setState("play", !1),
                  "next" === this.parameters.ended &&
                    0 == this.parameters.loop &&
                    ((s.fullscreenElement || s.webkitFullscreenElement) &&
                      (s.exitFullscreen || s.webkitExitFullscreen).call(s),
                    this.slider.next(!0));
              }.bind(this)
            ),
            this.isStatic ||
              (j(
                this.slider.sliderElement,
                "CurrentSlideChanged",
                function (e) {
                  this.onCurrentSlideChange(e.detail.currentSlide);
                }.bind(this)
              ),
              j(
                this.slider.sliderElement,
                "mainAnimationStart",
                function (e) {
                  this.onCurrentSlideChange(
                    this.slider.slides[e.detail.currentSlideIndex]
                  );
                }.bind(this)
              )),
            "" !== this.parameters["scroll-pause"]
              ? c.ScrollTracker.add(
                  this.playerElement,
                  this.parameters["scroll-pause"],
                  function () {
                    this.setState("scroll", !0, !0);
                  }.bind(this),
                  function () {
                    this.setState("continuePlay", !0),
                      this.setState("scroll", !1, !0);
                  }.bind(this)
                )
              : this.setState("scroll", !0, !0),
            this.slide.isActiveWhen() && this.setState("slide", !0, !0),
            1 === parseInt(this.parameters.autoplay) &&
              this.slider.visible(this.initAutoplay.bind(this)),
            this._resolve();
        }),
        (t.prototype.onCurrentSlideChange = function (t) {
          this.slide.isActiveWhen(t)
            ? (1 == this.parameters.autoplay && this.setState("play", !0),
              this.setState("slide", !0, !0))
            : (parseInt(this.parameters.reset) && this.reset(),
              this.setState("slide", !0, !0));
        }),
        (t.prototype.initAutoplay = function () {
          this.layer.addStateCallback(
            function (t) {
              this.setState("InComplete", t.InComplete, !0);
            }.bind(this)
          ),
            this.isStatic
              ? (this.setState("play", !0), this.setState("slide", !0, !0))
              : (j(
                  this.slider.sliderElement,
                  "mainAnimationComplete",
                  function (e) {
                    this.slide.isActiveWhen(
                      this.slider.slides[e.detail.currentSlideIndex]
                    )
                      ? (this.setState("play", !0),
                        this.setState("slide", !0, !0))
                      : this.setState("slide", !1, !0);
                  }.bind(this)
                ),
                this.slide.isActiveWhen() &&
                  (this.setState("play", !0), this.setState("slide", !0, !0)));
        }),
        (t.prototype.setState = function (t, i, s) {
          (s = s || !1),
            (this.state[t] = i),
            s &&
              (this.state.slideVisible &&
              this.state.visible &&
              this.state.play &&
              this.state.slide &&
              this.state.InComplete &&
              this.state.scroll &&
              this.layer.isVisible
                ? this.play()
                : this.pause(),
              this.state.slideVisible &&
              this.state.visible &&
              this.state.slide &&
              this.layer.isVisible
                ? y(this.player.element, "tabindex")
                : p(this.player.element, "tabindex", "-1"));
        }),
        (t.prototype.play = function () {
          Z(this.slider.sliderElement, "mediaStarted", { id: this.playerId }),
            0 != this.start && this.safeSetCurrentTime(this.start),
            this.safePlay(),
            this.player
              .getCurrentTime()
              .then(
                function (t) {
                  t < this.start &&
                    0 != this.start &&
                    this.safeSetCurrentTime(this.start),
                    this.safePlay();
                }.bind(this)
              )
              .catch(
                function (t) {
                  this.safePlay();
                }.bind(this)
              );
        }),
        (t.prototype.pause = function () {
          this.safePause();
        }),
        (t.prototype.reset = function () {
          this.safeSetCurrentTime(this.start);
        }),
        (t.prototype.setVolume = function (t) {
          this.safeCallback(
            function () {
              this.promise = this.player.setVolume(t);
            }.bind(this)
          );
        }),
        (t.prototype.safeSetCurrentTime = function (t) {
          this.safeCallback(
            function () {
              this.promise = this.player.setCurrentTime(t);
            }.bind(this)
          );
        }),
        (t.prototype.safePlay = function () {
          this.safeCallback(
            function () {
              (this.promise = this.player.getPaused()),
                this.safeCallback(
                  function (t) {
                    t && (this.promise = this.player.play());
                  }.bind(this)
                );
            }.bind(this)
          );
        }),
        (t.prototype.safePause = function () {
          this.safeCallback(
            function () {
              (this.promise = this.player.getPaused()),
                this.safeCallback(
                  function (t) {
                    t || (this.promise = this.player.pause());
                  }.bind(this)
                );
            }.bind(this)
          );
        }),
        (t.prototype.safeCallback = function (t) {
          this.promise && Promise !== o ? this.promise.then(t).catch(t) : t();
        }),
        t
      );
    }),
    c.d("FrontendItemYouTube", function () {
      function t(t, i, h, n) {
        (this.state = {
          slideVisible: !1,
          visible: !1,
          scroll: !1,
          slide: !1,
          InComplete: !1,
          play: !1,
          continuePlay: !1,
        }),
          (this.promise = new Promise(
            function (t) {
              this._resolve = t;
            }.bind(this)
          )),
          (this.slider = t),
          (this.playerId = i),
          (this.playerElement = s.getElementById(this.playerId)),
          (this.cover = this.playerElement.querySelector(
            ".n2_ss_video_player__cover"
          )),
          (this.hasImage = n),
          (this.parameters = d(
            {
              youtubeurl: "//www.youtube.com/watch?v=3PPtkRU7D74",
              youtubecode: "3PPtkRU7D74",
              center: 0,
              autoplay: 1,
              ended: "",
              related: "1",
              volume: "-1",
              loop: 0,
              modestbranding: 1,
              reset: 0,
              query: [],
              playsinline: 0,
            },
            h
          )),
          n2const.isLighthouse || c.r("windowLoad", this.whenLoaded.bind(this));
      }
      var h;
      return (
        (t.prototype.whenLoaded = function () {
          if (
            1 === parseInt(this.parameters.autoplay) ||
            !this.hasImage ||
            n2const.isMobile
          )
            this.ready(this.initYoutubePlayer.bind(this));
          else
            var t = function (e) {
                B(i),
                  e.preventDefault(),
                  e.stopPropagation(),
                  this.ready(
                    function () {
                      this.promise.then(this.play.bind(this)),
                        this.initYoutubePlayer();
                    }.bind(this)
                  );
              }.bind(this),
              i = [
                U(this.playerElement, "click", t),
                U(this.playerElement, "n2click", t),
              ];
        }),
        (t.prototype.ready = function (t) {
          if (
            !h &&
            ((h = new Promise(function (t) {
              var s;
              (s =
                i._EPYT_ !== o
                  ? function () {
                      !0 === i._EPADashboard_.initStarted ? t() : r(s, 100);
                    }
                  : function () {
                      i.YT !== o && i.YT.loaded ? t() : r(s, 100);
                    })();
            })),
            i.YT === o)
          ) {
            var n = f("script");
            (n.src = "https://www.youtube.com/iframe_api"),
              s.head.appendChild(n);
          }
          h.then(t);
        }),
        (t.prototype.fadeOutCover = function () {
          this.coverFadedOut === o &&
            this.cover &&
            ((this.coverFadedOut = !0),
            c.K.to(c.MW.i(this.cover), 0.3, {
              opacity: 0,
              onComplete: function () {
                R(this.cover);
              }.bind(this),
            }));
        }),
        (t.prototype.initYoutubePlayer = function () {
          var t = this.playerElement.closest(".n2-ss-layer");
          (this.layer = t.layer),
            this.cover &&
              (n2const.isMobile && G(this.cover, "click", this.play.bind(this)),
              G(t, "n2play", this.fadeOutCover.bind(this))),
            (this.slide = this.slider.findSlideByElement(this.playerElement)),
            (this.isStatic = this.slide.isStatic());
          var h = {
            enablejsapi: 1,
            origin: i.location.protocol + "//" + i.location.host,
            wmode: "opaque",
            rel: 1 - this.parameters.related,
            start: this.parameters.start,
            end: this.parameters.end,
            modestbranding: this.parameters.modestbranding,
            playsinline: this.parameters.playsinline,
          };
          if (1 === parseInt(this.parameters.autoplay))
            if (navigator.userAgent.toLowerCase().indexOf("android") > -1)
              this.parameters.volume = 0;
            else if (n2const.isIOS) {
              this.parameters.autoplay = 0;
              try {
                "playsInline" in f("video") &&
                  ((this.parameters.autoplay = 1),
                  (this.parameters.volume = 0),
                  (h.playsinline = 1));
              } catch (t) {}
            }
          for (var n in (n2const.isIOS &&
            this.parameters.controls &&
            (h.use_native_controls = 1),
          1 == this.parameters.center && (h.controls = 0),
          1 != this.parameters.controls && ((h.autohide = 1), (h.controls = 0)),
          +(
            navigator.platform.toUpperCase().indexOf("MAC") >= 0 &&
            navigator.userAgent.search("Firefox") > -1
          ) && (h.html5 = 1),
          this.parameters.query))
            this.parameters.query.hasOwnProperty(n) &&
              (h[n] = this.parameters.query[n]);
          var o = {
            videoId: this.parameters.youtubecode,
            wmode: "opaque",
            playerVars: h,
            events: {
              onReady: this.onReady.bind(this),
              onStateChange: function (i) {
                switch (i.data) {
                  case YT.PlayerState.PLAYING:
                  case YT.PlayerState.BUFFERING:
                    this.isStatic ||
                      (this.slide.isActiveWhen(this.slider.currentSlide) &&
                        Z(this.slider.sliderElement, "mediaStarted", {
                          id: this.playerId,
                        })),
                      Y(t, "n2play");
                    break;
                  case YT.PlayerState.PAUSED:
                    Y(t, "n2pause"),
                      this.state.continuePlay
                        ? (this.setState("continuePlay", !1),
                          this.setState("play", !0))
                        : this.setState("play", !1);
                    break;
                  case YT.PlayerState.ENDED:
                    1 == this.parameters.loop
                      ? (this.player.seekTo(this.parameters.start),
                        this.player.playVideo())
                      : (this.isStatic ||
                          Z(this.slider.sliderElement, "mediaEnded", {
                            id: this.playerId,
                          }),
                        Y(t, "n2stop"),
                        this.setState("play", !1),
                        "next" === this.parameters.ended &&
                          ((s.fullscreenElement || s.webkitFullscreenElement) &&
                            (s.exitFullscreen || s.webkitExitFullscreen).call(
                              s
                            ),
                          this.slider.next(!0)));
                }
              }.bind(this),
            },
          };
          (this.parameters["privacy-enhanced"] ||
            (i.jQuery && i.jQuery.fn.revolution)) &&
            (o.host = "https://www.youtube-nocookie.com"),
            (this.player = new YT.Player(this.playerId + "-frame", o)),
            1 == this.parameters.center &&
              (C(this.playerElement.parentNode, "overflow", "hidden"),
              this.onResize(),
              j(
                this.slider.sliderElement,
                "SliderResize",
                this.onResize.bind(this)
              ));
        }),
        (t.prototype.onReady = function () {
          this.slider.stages.done("BeforeShow", this.onBeforeShow.bind(this));
        }),
        (t.prototype.onBeforeShow = function () {
          var t = parseFloat(this.parameters.volume);
          t > 0 ? this.setVolume(t) : -1 !== t && this.player.mute(),
            new ResizeObserver(
              function (t) {
                var i = t[0].contentRect;
                if (i.width && i.height)
                  this.state.visible || this.setState("visible", !0, !0);
                else if (this.state.visible) {
                  var s = this.state.play;
                  this.setState("visible", !1, !0),
                    s && this.setState("continuePlay", !0);
                }
              }.bind(this)
            ).observe(this.layer.layer),
            this.slide.isVisible && this.setState("slideVisible", !0, !0),
            j(
              this.slide.element,
              "Hidden",
              function () {
                var t = this.state.play;
                this.setState("slideVisible", !1, !0),
                  t && this.setState("continuePlay", !0);
              }.bind(this)
            ),
            j(
              this.slide.element,
              "Visible",
              function () {
                this.setState("slideVisible", !0, !0);
              }.bind(this)
            ),
            this.slide.isActiveWhen() && this.setState("slide", !0, !0),
            1 == this.parameters.autoplay &&
              this.slider.visible(this.initAutoplay.bind(this)),
            this.isStatic ||
              (j(
                this.slider.sliderElement,
                "CurrentSlideChanged",
                function (e) {
                  this.onCurrentSlideChange(e.detail.currentSlide);
                }.bind(this)
              ),
              j(
                this.slider.sliderElement,
                "mainAnimationStart",
                function (e) {
                  this.onCurrentSlideChange(
                    this.slider.slides[e.detail.currentSlideIndex]
                  );
                }.bind(this)
              ),
              parseInt(this.parameters.reset) &&
                j(
                  this.slider.sliderElement,
                  "mainAnimationComplete",
                  function (e) {
                    this.slide.isActiveWhen(
                      this.slider.slides[e.detail.currentSlideIndex]
                    ) ||
                      (0 !== this.player.getCurrentTime() &&
                        this.player.seekTo(this.parameters.start));
                  }.bind(this)
                )),
            this._resolve(),
            "" !== this.parameters["scroll-pause"]
              ? c.ScrollTracker.add(
                  this.playerElement,
                  this.parameters["scroll-pause"],
                  function () {
                    this.setState("scroll", !0, !0);
                  }.bind(this),
                  function () {
                    this.setState("continuePlay", !0),
                      this.setState("scroll", !1, !0);
                  }.bind(this)
                )
              : this.setState("scroll", !0, !0);
        }),
        (t.prototype.onCurrentSlideChange = function (t) {
          var i = this.slide.isActiveWhen(t);
          i && 1 == this.parameters.autoplay && this.setState("play", !0),
            this.setState("slide", i, !0);
        }),
        (t.prototype.onResize = function () {
          var t = this.playerElement.parentNode.getBoundingClientRect(),
            i = t.width,
            s = t.height + 100,
            h = 16 / 9,
            n = { width: i + "px", height: s + "px", "margin-top": 0 };
          (n[n2const.rtl["margin-left"]] = 0),
            i / s > h
              ? ((n.height = i * h + "px"),
                (n["margin-top"] = (s - i * h) / 2 + "px"))
              : ((n.width = s * h + "px"),
                (n[n2const.rtl["margin-left"]] = (i - s * h) / 2 + "px")),
            x(this.playerElement, n);
        }),
        (t.prototype.initAutoplay = function () {
          this.layer.addStateCallback(
            function (t) {
              this.setState("InComplete", t.InComplete, !0);
            }.bind(this)
          ),
            this.isStatic
              ? (this.setState("play", !0), this.setState("slide", !0, !0))
              : (j(
                  this.slider.sliderElement,
                  "mainAnimationComplete",
                  function (e) {
                    this.slide.isActiveWhen(
                      this.slider.slides[e.detail.currentSlideIndex]
                    )
                      ? (this.setState("play", !0),
                        this.setState("slide", !0, !0))
                      : this.setState("slide", !1, !0);
                  }.bind(this)
                ),
                this.slide.isActiveWhen() &&
                  (this.setState("play", !0), this.setState("slide", !0, !0)));
        }),
        (t.prototype.setState = function (t, i, s) {
          (s = s || !1),
            (this.state[t] = i),
            s &&
              (this.state.slideVisible &&
              this.state.visible &&
              this.state.play &&
              this.state.slide &&
              this.state.InComplete &&
              this.state.scroll
                ? this.play()
                : this.pause());
        }),
        (t.prototype.play = function () {
          this.isStopped() &&
            (this.coverFadedOut === o && r(this.fadeOutCover.bind(this), 200),
            Z(this.slider.sliderElement, "mediaStarted", { id: this.playerId }),
            this.player.playVideo());
        }),
        (t.prototype.pause = function () {
          this.isStopped() || this.player.pauseVideo();
        }),
        (t.prototype.stop = function () {
          this.player.stopVideo();
        }),
        (t.prototype.isStopped = function () {
          switch (this.player.getPlayerState()) {
            case -1:
            case 2:
            case 5:
              return !0;
            default:
              return !1;
          }
        }),
        (t.prototype.setVolume = function (t) {
          this.player.setVolume(100 * t);
        }),
        t
      );
    }),
    c.d("smartslider-frontend");
})(window);
