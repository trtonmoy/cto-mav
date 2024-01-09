!(function (t) {
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
  var n,
    r,
    s = t.document,
    o = s.documentElement,
    a = t.setTimeout,
    u = t.clearTimeout,
    h = i._N2,
    f = (t.requestAnimationFrame, s.createElement.bind(s)),
    c = Object.assign,
    l = function (t, i) {
      return t.dataset[i];
    },
    v = function (t, i) {
      return t.dispatchEvent(i);
    },
    d = function (t, i, n) {
      return (n = c({ bubbles: !0, cancelable: !0 }, n)), v(t, new Event(i, n));
    },
    p = function (t, i, n, r) {
      return (
        (r = r || {}),
        t.addEventListener(i, n, r),
        t.removeEventListener.bind(t, i, n, r)
      );
    },
    g = function (t) {
      "complete" === s.readyState || "interactive" === s.readyState
        ? t()
        : Document &&
          Document.prototype &&
          Document.prototype.addEventListener &&
          Document.prototype.addEventListener !== s.addEventListener
        ? Document.prototype.addEventListener.call(s, "DOMContentLoaded", t)
        : s.addEventListener("DOMContentLoaded", t);
    },
    m =
      navigator.userAgent.indexOf("+http://www.google.com/bot.html") > -1
        ? function (t) {
            t();
          }
        : i.requestIdleCallback ||
          function (t) {
            return a(t, 1);
          };
  i.cancelIdleCallback;
  g(function () {
    n = s.body;
  }),
    function () {
      "use strict";
      var t = {},
        n = {};
      i.n2Slow =
        navigator.userAgent.indexOf("Chrome-Lighthouse") > -1 &&
        navigator.userAgent.indexOf("Android") > -1;
      var s = [],
        o = !1;
      function u() {
        var t = performance.now(),
          n = s;
        s = [];
        for (
          var r = n.length - 1;
          r >= 0 && (n.pop().call(), !(performance.now() - t > 7));
          r--
        );
        !i.n2Slow && n.length && (i.n2Slow = !0),
          n.unshift.apply(n, s),
          (s = n).length ? m(u, { timeout: 2e3 }) : (o = !1);
      }
      function c(t) {
        s.unshift(t), o || ((o = !0), m(u, { timeout: 2e3 }));
      }
      var l = new Date(),
        v = function () {
          if (i.jQuery) {
            var $ = i.jQuery;
            h.d("$", function () {
              return $;
            });
          } else {
            if ((a(v, 20), new Date().getTime() - l.getTime() > 1e3))
              f("script").src = h._jQueryFallback;
          }
        };
      function d(i) {
        return (
          !(!i || t[i] !== r) &&
          ((t[i] = new Promise(function (t) {
            n[i] = t;
          })),
          "$" === i && v(),
          !0)
        );
      }
      function p(i, r, s) {
        var o = [];
        if (d(i) || n[i]) {
          if (
            ("function" == typeof r
              ? ((s = r), (r = []))
              : "string" == typeof r && (r = [r]),
            (r = r || []).length)
          )
            for (var a = 0; a < r.length; a++) d(r[a]), o.push(t[r[a]]);
          Promise.all(o).then(
            function (t) {
              (h[i] = "function" != typeof s || s.call(h)), t();
            }.bind(this, n[i])
          ),
            delete n[i];
        }
      }
      function g(i, n) {
        var s = [];
        if (
          (n === r ? ((n = i), (i = [])) : "string" == typeof i && (i = [i]),
          (i = i || []))
        )
          for (var o = 0; o < i.length; o++) d(i[o]), s.push(t[i[o]]);
        Promise.all(s).then(function () {
          n.call(h);
        });
      }
      i.N2DISABLESCHEDULER
        ? ((h.d = p), (h.r = g))
        : ((h.d = function (t, i, n) {
            c(p.bind(this, t, i, n));
          }),
          (h.r = function (t, i) {
            c(g.bind(this, t, i));
          }));
      for (var w = 0; w < this._N2._d.length; w++)
        h.d.apply(this, this._N2._d[w]);
      for (var y = 0; y < this._N2._r.length; y++)
        h.r.apply(this, this._N2._r[y]);
    }.call(i),
    (i.NextendThrottle = function (t, i) {
      var n, r;
      return (
        i || (i = 250),
        function () {
          var s = this,
            o = +new Date(),
            h = arguments;
          n && o < n + i
            ? (u(r),
              (r = a(function () {
                (n = o), t.apply(s, h);
              }, i)))
            : ((n = o), t.apply(s, h));
        }
      );
    }),
    (i.NextendDeBounce = function (t, i, n) {
      var r;
      return function () {
        var s = this,
          o = arguments,
          h = function () {
            (r = null), n || t.apply(s, o);
          },
          f = n && !r;
        u(r), (r = a(h, i)), f && t.apply(s, o);
      };
    }),
    h.r("nextend-frontend", function () {
      if (
        (g(function () {
          h.d("documentReady");
        }),
        "complete" === s.readyState)
      )
        h.d("windowLoad");
      else {
        let r;
        const o = navigator.userAgent;
        o.indexOf("Safari") > 0 &&
          -1 === o.indexOf("Chrome") &&
          (r = setInterval(function () {
            ("interactive" !== s.readyState && "complete" !== s.readyState) ||
              (h.d("windowLoad"), clearInterval(r));
          }, 2e3)),
          (t = "load"),
          (n = function () {
            h.d("windowLoad"), clearInterval(r);
          }),
          i.addEventListener(t, n, { once: !0 });
      }
      var t, n;
    }),
    i.ResizeObserver ||
      (i.ResizeObserver = (function () {
        "use strict";
        var t = (function () {
            if ("undefined" != typeof Map) return Map;
            function t(t, i) {
              var n = -1;
              return (
                t.some(function (t, r) {
                  return t[0] === i && ((n = r), !0);
                }),
                n
              );
            }
            return (function () {
              function i() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(i.prototype, "size", {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (i.prototype.get = function (i) {
                  var n = t(this.__entries__, i),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (i.prototype.set = function (i, n) {
                  var r = t(this.__entries__, i);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([i, n]);
                }),
                (i.prototype.delete = function (i) {
                  var n = this.__entries__,
                    r = t(n, i);
                  ~r && n.splice(r, 1);
                }),
                (i.prototype.has = function (i) {
                  return !!~t(this.__entries__, i);
                }),
                (i.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (i.prototype.forEach = function (t, i) {
                  void 0 === i && (i = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var s = r[n];
                    t.call(i, s[1], s[0]);
                  }
                }),
                i
              );
            })();
          })(),
          n = void 0 !== i && void 0 !== s && i.document === s,
          r =
            "undefined" != typeof global && global.Math === Math
              ? global
              : "undefined" != typeof self && self.Math === Math
              ? self
              : void 0 !== i && i.Math === Math
              ? i
              : Function("return this")(),
          o =
            "function" == typeof requestAnimationFrame
              ? requestAnimationFrame.bind(r)
              : function (t) {
                  return a(function () {
                    return t(Date.now());
                  }, 1e3 / 60);
                },
          u = 2;
        function h(t, i) {
          var n = !1,
            r = !1,
            s = 0;
          function h() {
            n && ((n = !1), t()), r && c();
          }
          function f() {
            o(h);
          }
          function c() {
            var t = Date.now();
            if (n) {
              if (t - s < u) return;
              r = !0;
            } else (n = !0), (r = !1), a(f, i);
            s = t;
          }
          return c;
        }
        var f = 20,
          c = [
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "size",
            "weight",
          ],
          l = "undefined" != typeof MutationObserver,
          v = (function () {
            function t() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = h(this.refresh.bind(this), f));
            }
            return (
              (t.prototype.addObserver = function (t) {
                ~this.observers_.indexOf(t) || this.observers_.push(t),
                  this.connected_ || this.connect_();
              }),
              (t.prototype.removeObserver = function (t) {
                var i = this.observers_,
                  n = i.indexOf(t);
                ~n && i.splice(n, 1),
                  !i.length && this.connected_ && this.disconnect_();
              }),
              (t.prototype.refresh = function () {
                this.updateObservers_() && this.refresh();
              }),
              (t.prototype.updateObservers_ = function () {
                var t = this.observers_.filter(function (t) {
                  return t.gatherActive(), t.hasActive();
                });
                return (
                  t.forEach(function (t) {
                    return t.broadcastActive();
                  }),
                  t.length > 0
                );
              }),
              (t.prototype.connect_ = function () {
                n &&
                  !this.connected_ &&
                  (s.addEventListener("transitionend", this.onTransitionEnd_),
                  i.addEventListener("resize", this.refresh),
                  l
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh
                      )),
                      this.mutationsObserver_.observe(s, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (s.addEventListener("DOMSubtreeModified", this.refresh),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (t.prototype.disconnect_ = function () {
                n &&
                  this.connected_ &&
                  (s.removeEventListener(
                    "transitionend",
                    this.onTransitionEnd_
                  ),
                  i.removeEventListener("resize", this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    s.removeEventListener("DOMSubtreeModified", this.refresh),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (t.prototype.onTransitionEnd_ = function (t) {
                var i = t.propertyName,
                  n = void 0 === i ? "" : i;
                c.some(function (t) {
                  return !!~n.indexOf(t);
                }) && this.refresh();
              }),
              (t.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new t()), this.instance_
                );
              }),
              (t.instance_ = null),
              t
            );
          })(),
          d = function (t, i) {
            for (var n = 0, r = Object.keys(i); n < r.length; n++) {
              var s = r[n];
              Object.defineProperty(t, s, {
                value: i[s],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return t;
          },
          p = function (t) {
            return (t && t.ownerDocument && t.ownerDocument.defaultView) || r;
          },
          g = P(0, 0, 0, 0);
        function m(t) {
          return parseFloat(t) || 0;
        }
        function w(t) {
          for (var i = [], n = 1; n < arguments.length; n++)
            i[n - 1] = arguments[n];
          return i.reduce(function (i, n) {
            return i + m(t["border-" + n + "-width"]);
          }, 0);
        }
        function y(t) {
          for (
            var i = {}, n = 0, r = ["top", "right", "bottom", "left"];
            n < r.length;
            n++
          ) {
            var s = r[n],
              o = t["padding-" + s];
            i[s] = m(o);
          }
          return i;
        }
        function b(t) {
          var i = t.getBBox();
          return P(0, 0, i.width, i.height);
        }
        function M(t) {
          var i = t.clientWidth,
            n = t.clientHeight;
          if (!i && !n) return g;
          var r = p(t).getComputedStyle(t),
            s = y(r),
            o = s.left + s.right,
            a = s.top + s.bottom,
            u = m(r.width),
            h = m(r.height);
          if (
            ("border-box" === r.boxSizing &&
              (Math.round(u + o) !== i && (u -= w(r, "left", "right") + o),
              Math.round(h + a) !== n && (h -= w(r, "top", "bottom") + a)),
            !_(t))
          ) {
            var f = Math.round(u + o) - i,
              c = Math.round(h + a) - n;
            1 !== Math.abs(f) && (u -= f), 1 !== Math.abs(c) && (h -= c);
          }
          return P(s.left, s.top, u, h);
        }
        var x =
          "undefined" != typeof SVGGraphicsElement
            ? function (t) {
                return t instanceof p(t).SVGGraphicsElement;
              }
            : function (t) {
                return (
                  t instanceof p(t).SVGElement && "function" == typeof t.getBBox
                );
              };
        function _(t) {
          return t === p(t).document.documentElement;
        }
        function O(t) {
          return n ? (x(t) ? b(t) : M(t)) : g;
        }
        function k(t) {
          var i = t.x,
            n = t.y,
            r = t.width,
            s = t.height,
            o =
              "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            a = Object.create(o.prototype);
          return (
            d(a, {
              x: i,
              y: n,
              width: r,
              height: s,
              top: n,
              right: i + r,
              bottom: s + n,
              left: i,
            }),
            a
          );
        }
        function P(t, i, n, r) {
          return { x: t, y: i, width: n, height: r };
        }
        var S = (function () {
            function t(t) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = P(0, 0, 0, 0)),
                (this.target = t);
            }
            return (
              (t.prototype.isActive = function () {
                var t = O(this.target);
                return (
                  (this.contentRect_ = t),
                  t.width !== this.broadcastWidth ||
                    t.height !== this.broadcastHeight
                );
              }),
              (t.prototype.broadcastRect = function () {
                var t = this.contentRect_;
                return (
                  (this.broadcastWidth = t.width),
                  (this.broadcastHeight = t.height),
                  t
                );
              }),
              t
            );
          })(),
          F = (function () {
            function t(t, i) {
              var n = k(i);
              d(this, { target: t, contentRect: n });
            }
            return t;
          })(),
          C = (function () {
            function i(i, n, r) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new t()),
                "function" != typeof i)
              )
                throw new TypeError(
                  "The callback provided as parameter 1 is not a function."
                );
              (this.callback_ = i),
                (this.controller_ = n),
                (this.callbackCtx_ = r);
            }
            return (
              (i.prototype.observe = function (t) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                if (
                  "undefined" != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(t instanceof p(t).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var i = this.observations_;
                  i.has(t) ||
                    (i.set(t, new S(t)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (i.prototype.unobserve = function (t) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                if (
                  "undefined" != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(t instanceof p(t).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var i = this.observations_;
                  i.has(t) &&
                    (i.delete(t),
                    i.size || this.controller_.removeObserver(this));
                }
              }),
              (i.prototype.disconnect = function () {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (i.prototype.gatherActive = function () {
                var t = this;
                this.clearActive(),
                  this.observations_.forEach(function (i) {
                    i.isActive() && t.activeObservations_.push(i);
                  });
              }),
              (i.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var t = this.callbackCtx_,
                    i = this.activeObservations_.map(function (t) {
                      return new F(t.target, t.broadcastRect());
                    });
                  this.callback_.call(t, i, t), this.clearActive();
                }
              }),
              (i.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (i.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
              }),
              i
            );
          })(),
          A = "undefined" != typeof WeakMap ? new WeakMap() : new t(),
          I = (function () {
            function t(i) {
              if (!(this instanceof t))
                throw new TypeError("Cannot call a class as a function.");
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              var n = v.getInstance(),
                r = new C(i, n, this);
              A.set(this, r);
            }
            return t;
          })();
        return (
          ["observe", "unobserve", "disconnect"].forEach(function (t) {
            I.prototype[t] = function () {
              var i;
              return (i = A.get(this))[t].apply(i, arguments);
            };
          }),
          void 0 !== r.ResizeObserver ? r.ResizeObserver : I
        );
      })()),
    (h.StringHelper = {
      capitalize: function (t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      },
    }),
    (function () {
      var t = function (t) {
          return Symbol.iterator in Object(t);
        },
        i = {
          add: function (t) {
            requestAnimationFrame(t);
          },
          remove: function () {},
        };
      h.l = h.l || i;
      var n,
        s = new (class {
          constructor() {
            (this.g = !1), (this.M = new Set()), (this._ = this.O.bind(this));
          }
          add(t) {
            this.M.add(t), this.g || ((this.g = !0), h.l.add(this._));
          }
          O() {
            for (let t of this.M) t.render ? t.render() : t();
            this.M.clear(), (this.g = !1), h.l.remove(this._);
          }
        })(),
        o = {};
      n =
        /Safari/i.test(navigator.userAgent) &&
        !/Chrom[ei]/i.test(navigator.userAgent)
          ? function (t, i, n, r) {
              var s = "";
              return r && (t || i || n)
                ? "translate3d(" +
                    (t || 0) +
                    "px, " +
                    (i || 0) +
                    "px, " +
                    (n || 0) +
                    "px) "
                : ((t || i) &&
                    (s += "translate(" + (t || 0) + "px, " + (i || 0) + "px) "),
                  n && (s += "translateZ(" + n + "px) "),
                  s);
            }
          : function (t, i, n, r) {
              return t || i || n
                ? "translate3d(" +
                    (t || 0) +
                    "px, " +
                    (i || 0) +
                    "px, " +
                    (n || 0) +
                    "px) "
                : "";
            };
      class a {
        constructor(i, n) {
          t(i) ? (this.k = Array.from(i)) : (this.k = [i]),
            (this.P = c({}, n)),
            (this.S = new Set());
        }
        get scale() {
          return this.scaleX;
        }
        set scale(t) {
          (this.scaleX = t), (this.scaleY = t);
        }
        render() {
          for (let i of this.S) {
            var t = this.P[i];
            switch (i) {
              case "transform":
                t = this.F();
                break;
              case "filter":
                t = this.C();
                break;
              case "n2AutoAlpha":
                0 === this.opacity
                  ? this.A || ((this.A = !0), this.I("data-force-hidden", ""))
                  : this.A && ((this.A = !1), this.R("data-force-hidden"));
                continue;
              case "opacity":
                this.P.n2AutoAlpha &&
                  (0 === t
                    ? this.A || ((this.A = !0), this.I("data-force-hidden", ""))
                    : this.A && ((this.A = !1), this.R("data-force-hidden")));
                break;
              case "width":
              case "height":
              case "perspective":
                "number" == typeof t && (t += "px");
            }
            for (let n of this.k) n.style.setProperty(i, t);
          }
          this.S.clear();
        }
        F() {
          let {
              xP: t,
              yP: i,
              x: s,
              y: o,
              z: a,
              xAbs: u,
              yAbs: h,
              xPAbs: f,
              yPAbs: c,
              parallaxX: l,
              parallaxY: v,
              parallaxRotationX: d,
              parallaxRotationY: p,
              layerRotation: g,
              rotationZ: m,
              rotationY: w,
              rotationX: y,
              scaleX: b,
              scaleY: M,
              scaleZ: x,
              skewX: _,
              skewY: O,
              transformPerspective: k,
              force3D: P,
            } = this.P,
            S = "";
          return (
            k && (S += "perspective(" + k + "px) "),
            (t || i) &&
              (S += "translate(" + (t || 0) + "%, " + (i || 0) + "%) "),
            (u || h) &&
              (S += "translate(" + (u || 0) + "px, " + (h || 0) + "px) "),
            (f || c) &&
              (S += "translate(" + (f || 0) + "%, " + (c || 0) + "%) "),
            (S += n(s, o, a, P)),
            _ && (S += "skewX(" + _ + "deg) "),
            O && (S += "skewY(" + O + "deg) "),
            (l || v) &&
              (S += "translate(" + (l || 0) + "px, " + (v || 0) + "px) "),
            g && (S += "rotate(" + g + "deg) "),
            m && (S += "rotate(" + m + "deg) "),
            (w || p) && (S += "rotateY(" + ((w || 0) + (p || 0)) + "deg) "),
            (y || d) && (S += "rotateX(" + ((y || 0) + (d || 0)) + "deg) "),
            b === r && (b = 1),
            M === r && (M = 1),
            (1 === b && 1 === M) || (S += "scale(" + b + ", " + M + ") "),
            x === r && (x = 1),
            1 !== x && (S += "scaleZ(" + x + ") "),
            S || "translate3d(0, 0, 0)"
          );
        }
        C() {
          let { n2blur: t } = this.P,
            i = "";
          return t > 0.1 && (i = "blur(" + t + "px) "), i || "none";
        }
        I(t, i) {
          for (let n of this.k) (n.relatedLayer || n).setAttribute(t, i);
        }
        R(t) {
          for (let i of this.k) (i.relatedLayer || i).removeAttribute(t);
        }
        setValues(t) {
          for (var i in t) this[i] = t[i];
        }
      }
      class u {
        constructor(t, i) {
          this.T = [];
          for (var n = 0; n < t.length; n++) t[n] && this.T.push(w.i(t[n], i));
        }
        setValues(t) {
          for (var i = 0; i < this.T.length; i++) this.T[i].setValues(t);
        }
      }
      var f = {},
        l = function (t) {
          Object.defineProperty(u.prototype, t, {
            get: function () {
              return this.T[0][t];
            },
            set: function (i) {
              i instanceof Function && (i = i());
              for (var n = 0; n < this.T.length; n++) this.T[n][t] = i;
            },
          });
        },
        v = function (t, i, n) {
          Object.getOwnPropertyDescriptor(a.prototype, t) ||
            (i === r && (i = ""),
            n === r && (n = t),
            f[n] === r && (f[n] = []),
            f[n].push(t),
            (o[t] = i),
            Object.defineProperty(a.prototype, t, {
              get: function () {
                return this.P[t] === r && (this.P[t] = o[t]), this.P[t];
              },
              set: function (i) {
                i instanceof Function && (i = i()),
                  this.P[t] !== i &&
                    ((this.P[t] = i), this.S.add(n), s.add(this));
              },
            }),
            l(t));
        },
        d = function (t, i) {
          Object.defineProperty(a.prototype, t, {
            get: function () {
              return this[i];
            },
            set: function (t) {
              this[i] = t;
            },
          }),
            l(t);
        };
      v("property"),
        v("display"),
        v("z-index", 1),
        v("overflow", "visible"),
        v("overflow-x", "visible"),
        v("backface-visibility", "visible"),
        v("transform-origin", "50% 50% 0"),
        v("opacity", 1),
        v("width", 0),
        v("height", 0),
        v("justify-content"),
        v("background"),
        v("color"),
        v("will-change", ""),
        v("stroke-dasharray", ""),
        v("visibility"),
        v("perspective", 0),
        v("transform-style"),
        v("cursor", ""),
        v("top"),
        v("right"),
        v("bottom"),
        v("left");
      var p = "transform";
      v("force3D", 0, p),
        v("transformPerspective", 0, p),
        v("xP", 0, p),
        v("yP", 0, p),
        v("x", 0, p),
        v("y", 0, p),
        v("z", 0, p),
        v("xAbs", 0, p),
        v("yAbs", 0, p),
        v("xPAbs", 0, p),
        v("yPAbs", 0, p),
        v("scaleX", 1, p),
        v("scaleY", 1, p),
        v("scaleZ", 1, p),
        v("rotationZ", 0, p),
        v("rotationX", 0, p),
        v("rotationY", 0, p),
        v("skewX", 0, p),
        v("skewY", 0, p),
        v("layerRotation", 0, p),
        v("parallaxX", 0, p),
        v("parallaxY", 0, p),
        v("parallaxRotationX", 0, p),
        v("parallaxRotationY", 0, p),
        v("clip-path", "none"),
        v("--ss-clip-path", "none"),
        v("n2blur", 0, "filter"),
        v("n2AutoAlpha", 0),
        d("zIndex", "z-index"),
        d("backfaceVisibility", "backface-visibility"),
        d("transformOrigin", "transform-origin"),
        d("justifyContent", "justify-content"),
        d("transformStyle", "transform-style"),
        d("overflowX", "overflow-x"),
        d("clipPath", "clip-path");
      var g = {
        0: function (t) {
          this.classList.add(t);
        },
        1: function (t) {
          this.classList.remove(t);
        },
      };
      class m {
        constructor(i) {
          t(i) ? (this.k = Array.from(i)) : (this.k = [i]), (this.D = []);
        }
        addClass(t) {
          this.D.push([0, t]), s.add(this);
        }
        removeClass(t) {
          this.D.push([1, t]), s.add(this);
        }
        render() {
          for (var t = 0; t < this.D.length; t++) {
            var i = this.D[t];
            for (let t of this.k) g[i[0]].apply(t, i.splice(1));
          }
          this.D = [];
        }
      }
      var w = (h.MW = {
        B: v,
        i: function (t, i) {
          return t.smw || (t.smw = new a(t, i)), t.smw;
        },
        L: function (t, i) {
          for (var n = [], r = 0; r < t.length; r++) n.push(w.i(t[r], i));
          return n;
        },
        X: function (t, i) {
          return new u(t, i);
        },
        t: function (t, i) {
          t.forEach(function (t) {
            t.setValues(i);
          });
        },
        Y: function (t, i) {
          i.forEach(function (i) {
            f[i] &&
              f[i].forEach(function (i) {
                t[i] = o[i];
              });
          });
        },
        j: function (t, i) {
          s.add(function () {
            t.className.add(i);
          });
        },
        N: function (t, i) {
          s.add(function () {
            t.className.remove(i);
          });
        },
        U: function (t) {
          s.add(t);
        },
        W: function (t) {
          return t.umw || (t.umw = new m(t)), t.umw;
        },
        flush() {
          s.O();
        },
      });
    })(),
    customElements.define(
      "ss3-force-full-width",
      class extends HTMLElement {
        connectedCallback() {
          if (this.isConnected) {
            (n = n || s.body),
              (this.Z = "rtl" === o.getAttribute("dir")),
              (this._width = 0),
              (this._offset = Number.MAX_SAFE_INTEGER),
              (this.V = h.MW.i(this, {
                x: Number.MAX_SAFE_INTEGER,
                opacity: 0,
              }));
            var t = l(this, "overflowX");
            t &&
              "none" !== t &&
              s.querySelectorAll(t).forEach(function (t) {
                h.MW.i(t).overflowX = "hidden";
              });
            var r = n;
            if (i.ssForceFullHorizontalSelector)
              r = i.ssForceFullHorizontalSelector;
            else {
              var a = l(this, "horizontalSelector");
              if (a && "body" !== a)
                try {
                  r = this.closest(a);
                } catch (t) {}
            }
            if (r === n)
              for (
                var u = [
                    ".elementor-section-stretched",
                    '.siteorigin-panels-stretch[data-stretch-type="full-stretched"]',
                    '.siteorigin-panels-stretch[data-stretch-type="full-stretched-padded"]',
                    ".themify_builder_row.fullwidth",
                    '.vce-row[data-vce-stretch-content="true"]',
                  ],
                  f = 0;
                f < u.length;
                f++
              ) {
                var c = this.closest(u[f]);
                if (c) {
                  r = c;
                  break;
                }
              }
            (this.fullWidthTo = r),
              (this.resizeObserver = new ResizeObserver(
                this.doResize.bind(this)
              )),
              this.resizeObserver.observe(this.parentNode),
              i.addEventListener("resize", this.doResize.bind(this));
          }
        }
        doResize() {
          var t = 0,
            r = 0;
          if (this.fullWidthTo) {
            var s = this.fullWidthTo.getBoundingClientRect();
            (r = s.width), (t = this.Z ? -r + s.right : s.left);
          }
          var o,
            a,
            u = r > 0 ? r : n.clientWidth,
            h = i.getComputedStyle(this.parentNode);
          (o = this.Z
            ? u -
              this.parentNode.getBoundingClientRect().right -
              parseInt(h.getPropertyValue("padding-right")) -
              parseInt(h.getPropertyValue("border-right-width")) +
              t
            : -this.parentNode.getBoundingClientRect().left -
              parseInt(h.getPropertyValue("padding-left")) -
              parseInt(h.getPropertyValue("border-left-width")) +
              t),
            (o += a = o % 1),
            (u -= Math.floor(a)),
            (this._width - u <= 0 ||
              this._width - u > 1 ||
              this._offset - o < -1 ||
              this._offset - o >= 0) &&
              (this._offset !== o &&
                ((this.V.x = o),
                (this._offset = o),
                0 !== o && this.classList.add("n2-ss-no-bga-fixed")),
              this._width !== u && ((this.V.width = u), (this._width = u))),
            this.setVisible && this.setVisible();
        }
        setVisible() {
          (this.V.opacity = 1), delete this.setVisible;
        }
      }
    ),
    customElements.define(
      "ss3-loader",
      class extends HTMLElement {
        connectedCallback() {
          this.q = [];
        }
        set display(t) {
          this.G !== t && ((this.G = t), (this.style.display = t));
        }
        show() {
          this.display = "grid";
        }
        addPromise(t) {
          this.q.push(t),
            this.syncStyle(),
            t.finally(this.removePromise.bind(this, t));
        }
        removePromise(t) {
          var i = this.q.indexOf(t);
          i > -1 && (this.q.splice(i, 1), this.syncStyle());
        }
        syncStyle() {
          this.q.length
            ? this.H || (this.H = a(this.show.bind(this), 100))
            : (this.H && (u(this.H), delete this.H), (this.display = ""));
        }
      }
    );
  var w,
    y = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
  (i.n2const = {
    devicePixelRatio: i.devicePixelRatio || 1,
    isFirefox: /Firefox/i.test(navigator.userAgent),
    isIOS: /iPad|iPhone|iPod/.test(navigator.platform) || y,
    isMobile:
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Silk/i.test(
        navigator.userAgent
      ) || y,
    isPhone:
      (/Android/i.test(navigator.userAgent) &&
        /mobile/i.test(navigator.userAgent)) ||
      /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
    isSamsungBrowser: navigator.userAgent.match(/SamsungBrowser/i),
    isBot:
      /bot|googlebot|crawler|spider|robot|crawling|Google Search Console/i.test(
        navigator.userAgent
      ),
    isLighthouse: navigator.userAgent.indexOf("Chrome-Lighthouse") > -1,
    lightboxMobileNewTab: 1,
    isVideoAutoplayAllowed: function () {
      var t = !!(
        navigator.platform.match(/(Win|Mac)/) ||
        !/Mobi/.test(navigator.userAgent) ||
        "playsInline" in f("video") ||
        "webkit-playsinline" in f("video") ||
        (navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./) &&
          parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2]) >=
            53) ||
        navigator.userAgent.match(/Android.*(Firefox|Edge|Opera)/)
      );
      return (
        (i.n2const.isVideoAutoplayAllowed = function () {
          return t;
        }),
        t
      );
    },
    isWaybackMachine: function () {
      var t = void 0 !== i.__wm;
      return (
        (i.n2const.isWaybackMachine = function () {
          return t;
        }),
        t
      );
    },
    setLocation: function (t) {
      "function" == typeof i.zajax_goto ? i.zajax_goto(t) : (i.location = t);
    },
    isParentSameOrigin: function () {
      try {
        return parent.document, !0;
      } catch (t) {}
      return !1;
    },
    activeElementBlur: function () {
      s.activeElement && s.activeElement.blur();
    },
    getScrollbarSize: function () {
      var t = f("div");
      (t.style.visibility = "hidden"),
        (t.style.overflow = "scroll"),
        n.appendChild(t);
      var i = t.offsetHeight - t.clientHeight;
      return (
        n.removeChild(t),
        (n2const.getScrollbarSize = function () {
          return i;
        }),
        i
      );
    },
    fonts: new Promise(function (t) {
      if ("fonts" in s) {
        s.fonts.ready.then(t);
        const i = navigator.userAgent;
        i.indexOf("Safari") > 0 &&
          -1 === i.indexOf("Chrome") &&
          h.r("windowLoad", t);
      } else h.r("windowLoad", t);
    }),
  }),
    (i.n2const.isTablet =
      !i.n2const.isPhone &&
      (/Android|iPad|tablet|Silk/i.test(navigator.userAgent) || y)),
    (i.n2const.rtl =
      ((i.n2const.isRTL = function () {
        return i.n2const.rtl.isRtl;
      }),
      "rtl" === o.getAttribute("dir")
        ? {
            isRtl: !0,
            marginLeft: "marginRight",
            marginRight: "marginLeft",
            "margin-left": "margin-right",
            "margin-right": "margin-left",
            left: "right",
            right: "left",
            modifier: -1,
          }
        : {
            isRtl: !1,
            marginLeft: "marginLeft",
            marginRight: "marginRight",
            "margin-left": "margin-left",
            "margin-right": "margin-right",
            left: "left",
            right: "right",
            modifier: 1,
          })),
    (h._triggerResize =
      ((w = null),
      function () {
        w && u(w),
          (w = a(function () {
            d(i, "resize"), (w = null);
          }, 100));
      })),
    (h._shouldPreventClick = !1),
    (h._preventClick = function () {
      h._shouldPreventClick ||
        ((h._shouldPreventClick = !0),
        a(function () {
          h._shouldPreventClick = !1;
        }, 300));
    }),
    h.d("ImagesLoaded", function () {
      return function (t) {
        var i,
          n = [];
        i = "IMG" === t.tagName ? [t] : t.querySelectorAll("img");
        for (var r = 0; r < i.length; r++) {
          var s = i[r];
          (s.loading = "eager"),
            s.complete
              ? s.naturalWidth ||
                n.push(
                  new Promise(
                    function (t) {
                      a(t, 16);
                    }.bind(s)
                  )
                )
              : n.push(
                  new Promise(
                    function (t, i) {
                      this.addEventListener("load", function () {
                        t();
                      }),
                        this.addEventListener("error", function () {
                          i();
                        });
                    }.bind(s)
                  )
                );
        }
        return Promise.all(n);
      };
    }),
    h.d("UniversalPointer", function () {
      var t = !!i.PointerEvent,
        n = !!i.TouchEvent;
      function s(t, i) {
        (this.el = t),
          (this.handler = i),
          (this.preventMouse = !1),
          (this.timeouts = []),
          (this.localListeners = []),
          (this.globalListeners = []);
      }
      function f(i, r, a) {
        var u = (this.context = new s(i, r));
        u.addGlobalEventListener("click", function (e) {
          u.preventMouse || u.click(e);
        }),
          t
            ? u.addGlobalEventListener("pointerdown", function (t) {
                t.isPrimary &&
                  (u.startComplexInteraction(t.currentTarget),
                  u.addLocalEventListener(o, "pointerup", function (i) {
                    i.isPrimary &&
                      t.pointerId === i.pointerId &&
                      (Math.abs(i.clientX - t.clientX) < 10 &&
                      Math.abs(i.clientY - t.clientY) < 10
                        ? u.click(i)
                        : u.clear(),
                      u.endComplexInteraction());
                  }));
              })
            : n &&
              u.addGlobalEventListener(
                "touchstart",
                function (t) {
                  u.clearTimeouts(),
                    u.startComplexInteraction(t.currentTarget),
                    u.addLocalEventListener(
                      o,
                      "touchend",
                      function (i) {
                        Math.abs(
                          i.changedTouches[0].clientX -
                            t.changedTouches[0].clientX
                        ) < 10 &&
                        Math.abs(
                          i.changedTouches[0].clientY -
                            t.changedTouches[0].clientY
                        ) < 10
                          ? u.click(i)
                          : u.clear(),
                          u.endComplexInteraction();
                      },
                      { passive: !0 }
                    );
                },
                { passive: !0 }
              );
      }
      function l(t, i, n) {
        (this.el = t),
          (this.handler = i),
          (this.leaveOnSecond = n),
          (this.preventMouse = !1),
          (this.isActive = !1),
          (this.timeouts = []),
          (this.localListeners = []),
          (this.globalListeners = []);
      }
      function d(i, r, s) {
        s = c({ leaveOnSecond: !1 }, s);
        var u = (this.context = new l(i, r, s.leaveOnSecond));
        t
          ? (u.addGlobalEventListener("pointerenter", function (e) {
              e.isPrimary &&
                (u.clearTimeouts(),
                u.enter(e) &&
                  "mouse" !== e.pointerType &&
                  (u.addLocalEventListener(o, "pointerdown", function (e) {
                    e.isPrimary && u.testLeave(e.target);
                  }),
                  u.addTimeout(
                    a(function () {
                      u.leave();
                    }, 5e3)
                  )));
            }),
            u.addGlobalEventListener("pointerleave", function (e) {
              e.isPrimary && "mouse" === e.pointerType && u.leave();
            }))
          : (u.addGlobalEventListener("mouseenter", function (e) {
              u.preventMouse || u.enter(e);
            }),
            u.addGlobalEventListener("mouseleave", function () {
              u.preventMouse || u.leave();
            }),
            n &&
              u.addGlobalEventListener(
                "touchstart",
                function (e) {
                  (u.preventMouse = !0),
                    u.clearTimeouts(),
                    u.enter(e) &&
                      (u.addLocalEventListener(o, "touchstart", function (e) {
                        u.testLeave(e.target);
                      }),
                      u.addTimeout(
                        a(function () {
                          u.leave(), (u.preventMouse = !1);
                        }, 5e3)
                      ));
                },
                { passive: !0 }
              ));
      }
      (s.prototype.addTimeout = function (t) {
        this.timeouts.push(t);
      }),
        (s.prototype.clearTimeouts = function () {
          for (var t = 0; t < this.timeouts.length; t++) u(this.timeouts[t]);
          this.timeouts = [];
        }),
        (s.prototype.click = function (e) {
          this.currentTarget !== r &&
            (e = { currentTarget: this.currentTarget, target: this.el }),
            this.handler.call(this.el, e),
            this.clear();
        }),
        (s.prototype.clear = function () {
          for (var t = 0; t < this.localListeners.length; t++)
            this.localListeners[t][0].removeEventListener(
              this.localListeners[t][1],
              this.localListeners[t][2],
              this.localListeners[t][3]
            );
        }),
        (s.prototype.addGlobalEventListener = function (t, i, n) {
          this.globalListeners.push(p(this.el, t, i, n));
        }),
        (s.prototype.addLocalEventListener = function (t, i, n, r) {
          this.localListeners.push([t, i, n, r]), t.addEventListener(i, n, r);
        }),
        (s.prototype.remove = function () {
          this.clear(), this.clearTimeouts();
          for (var t = 0; t < this.globalListeners.length; t++)
            this.globalListeners[t]();
          delete this.globalListeners;
        }),
        (s.prototype.startComplexInteraction = function (t) {
          this.clearTimeouts(),
            (this.preventMouse = !0),
            (this.currentTarget = t);
        }),
        (s.prototype.endComplexInteraction = function () {
          delete this.currentTarget,
            this.addTimeout(
              a(
                function () {
                  this.preventMouse = !1;
                }.bind(this),
                1e3
              )
            );
        }),
        (f.prototype.remove = function () {
          this.context.remove(), delete this.context;
        }),
        (h.UniversalClick = f),
        (l.prototype.enter = function (e) {
          return this.leaveOnSecond && this.isActive
            ? (this.leave(), !1)
            : (this.handler.apply(this.el, arguments),
              (this.isActive = !0),
              !0);
        }),
        (l.prototype.leave = function () {
          this.clearTimeouts();
          for (var t = 0; t < this.localListeners.length; t++)
            this.localListeners[t][0].removeEventListener(
              this.localListeners[t][1],
              this.localListeners[t][2],
              this.localListeners[t][3]
            );
          var i;
          (this.isActive = !1),
            (i = this.el),
            v(i, new Event("universalleave", { bubbles: !1, cancelable: !1 }));
        }),
        (l.prototype.testLeave = function (t) {
          !this.el === t && this.el.contains(t) && this.leave();
        }),
        (l.prototype.addTimeout = function (t) {
          this.timeouts.push(t);
        }),
        (l.prototype.clearTimeouts = function () {
          for (var t = 0; t < this.timeouts.length; t++) u(this.timeouts[t]);
          this.timeouts = [];
        }),
        (l.prototype.addGlobalEventListener = function (t, i, n) {
          this.globalListeners.push(p(this.el, t, i, n));
        }),
        (l.prototype.remove = function () {
          this.isActive && this.leave(), this.clearTimeouts();
          for (var t = 0; t < this.globalListeners.length; t++)
            this.globalListeners[t]();
          delete this.globalListeners;
        }),
        (l.prototype.addLocalEventListener = function (t, i, n, r) {
          this.localListeners.push([t, i, n, r]), t.addEventListener(i, n, r);
        }),
        (d.prototype.remove = function () {
          this.context.remove(), delete this.context;
        }),
        (h.UniversalEnter = d);
    }),
    h.d("EventBurrito", function () {
      var t = function () {
          return !0;
        },
        o = !1;
      return function (u, h) {
        var f = {
          preventDefault: !0,
          preventScroll: !1,
          mouse: !0,
          axis: "x",
          start: t,
          move: t,
          end: t,
          click: t,
        };
        c(f, h);
        var l,
          v,
          g,
          m,
          w = {
            pointerEvents: !(
              (n2const.isIOS && i.TouchEvent) ||
              (!i.PointerEvent && !i.PointerEventsPolyfill)
            ),
          },
          y = {},
          b = {},
          M = [],
          x = !0,
          _ = w.pointerEvents ? 1 : 0,
          O = [
            ["touchstart", "touchmove", "touchend", "touchcancel"],
            [
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointercancel",
              "pointerleave",
            ],
            ["mousedown", "mousemove", "mouseup", "", "mouseleave"],
          ],
          k = [
            function (e) {
              return (
                (e.touches && e.touches.length > 1) ||
                (e.scale && 1 !== e.scale)
              );
            },
            function (e) {
              return (
                !e.isPrimary ||
                (e.buttons && 1 !== e.buttons) ||
                (!f.mouse &&
                  "touch" !== e.pointerType &&
                  "pen" !== e.pointerType)
              );
            },
            function (e) {
              return e.buttons && 1 !== e.buttons;
            },
          ],
          P = function (t, i) {
            var n = t.tagName;
            return (
              "INPUT" === n ||
              "TEXTAREA" === n ||
              "SELECT" === n ||
              "BUTTON" === n ||
              "VIDEO" === n ||
              t.classList.contains("n2_container_scrollable") ||
              t.closest(".n2_container_scrollable")
            );
          };
        function S(t) {
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
        }
        function F(t) {
          b = {
            x: (m ? t.clientX : t.touches[0].clientX) - y.x,
            y: (m ? t.clientY : t.touches[0].clientY) - y.y,
            time: Date.now(),
          };
        }
        function C(e, t) {
          if (
            (e.isPrimary === r || e.isPrimary) &&
            !o &&
            ((l = []), (x = !0), !k[(m = t)](e) && !P(e.target))
          )
            if (
              ("mousedown" === e.type ||
                ("pointerdown" === e.type && "mouse" === e.pointerType)) &&
              e.target.closest(".n2-ss-text")
            ) {
              var i = p(e.target, "click", function (t) {
                i(),
                  Math.abs(e.clientX - t.clientX) < 10 &&
                    Math.abs(e.clientY - t.clientY) < 10 &&
                    d(e.target, "n2click");
              });
              a(i, 2e3);
            } else
              (o = !0),
                0 !== m &&
                  l.push(p(s, O[m][1], A, { passive: !1, capture: !0 })),
                l.push(p(s, O[m][2], R, { passive: !1, capture: !0 })),
                l.push(p(s, O[m][3], R, { passive: !1, capture: !0 })),
                l.push(p(n, O[m][4], I, { passive: !1, capture: !0 })),
                (y = {
                  x: m ? e.clientX : e.touches[0].clientX,
                  y: m ? e.clientY : e.touches[0].clientY,
                  time: Date.now(),
                }),
                (v = r),
                (g = !1),
                (b = { x: 0, y: 0 }),
                f.start(e, y),
                A(e);
        }
        function A(t) {
          (t.isPrimary === r || t.isPrimary) &&
            (("x" === f.axis && ((!f.preventScroll && v) || k[m](t))) ||
              P(t.target) ||
              (F(t),
              (Math.abs(b.x) > 10 || Math.abs(b.y) > 10) && (x = !1),
              (v === r &&
                2 !== m &&
                (v = Math.abs(b.x) < Math.abs(b.y) && !f.preventScroll)) ||
                (f.move(t, y, b, g) && f.preventDefault && S(t))));
        }
        function I(t) {
          t.target === t.currentTarget && R(t);
        }
        function R(t) {
          if (t.isPrimary === r || t.isPrimary) {
            m && F(t), !x && t.target && t.target.blur && t.target.blur();
            for (var i = l.length - 1; i >= 0; i--) l[i]();
            (l = null), f.end(t, y, b, g), (g = !1), (o = !1);
          }
        }
        return (
          M.push(
            p(s, "scroll", function () {
              (i.nextendScrollFocus !== r && i.nextendScrollFocus) || (g = !0);
            })
          ),
          1 === _ && (u.style.touchAction = "y" === f.axis ? "pan-x" : "pan-y"),
          M.push(
            p(
              u,
              O[_][0],
              function (e) {
                C(e, _);
              },
              { passive: !1, capture: !0 }
            )
          ),
          0 === _ &&
            M.push(
              p(
                u,
                O[0][1],
                function (e) {
                  A(e);
                },
                { passive: !1, capture: !0 }
              )
            ),
          M.push(p(u, "dragstart", S)),
          f.mouse &&
            0 === _ &&
            M.push(
              p(u, O[2][0], function (e) {
                C(e, 2);
              })
            ),
          M.push(
            p(u, "click", function (t) {
              x ? f.click(t) : S(t);
            })
          ),
          {
            supportsPointerEvents: w.pointerEvents,
            getClicksAllowed: function () {
              return x;
            },
            kill: function () {
              for (var t = M.length - 1; t >= 0; t--) M[t]();
            },
          }
        );
      };
    }),
    h.d("GSAP", function () {
      var t = i.GreenSockGlobals,
        n = (i.GreenSockGlobals = {});
      !(function (e) {
        "use strict";
        function t(t, e) {
          (t.prototype = Object.create(e.prototype)),
            ((t.prototype.constructor = t).__proto__ = e);
        }
        function n(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function r(t) {
          return "string" == typeof t;
        }
        function s(t) {
          return "function" == typeof t;
        }
        function o(t) {
          return "number" == typeof t;
        }
        function h(t) {
          return void 0 === t;
        }
        function f(t) {
          return "object" == typeof t;
        }
        function c(t) {
          return !1 !== t;
        }
        function l() {
          return void 0 !== i;
        }
        function v(t) {
          return s(t) || r(t);
        }
        function d(t) {
          return (xt = mi(t, ui)) && gn;
        }
        function p(t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        }
        function g(t, e) {
          return !e && console.warn(t);
        }
        function m(t, e) {
          return (t && (ui[t] = e) && xt && (xt[t] = e)) || ui;
        }
        function w() {
          return 0;
        }
        function $(t) {
          var e,
            i,
            n = t[0];
          if ((f(n) || s(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
            for (i = pi.length; i-- && !pi[i].targetTest(n); );
            e = pi[i];
          }
          for (i = t.length; i--; )
            (t[i] && (t[i]._gsap || (t[i]._gsap = new Xi(t[i], e)))) ||
              t.splice(i, 1);
          return t;
        }
        function y(t) {
          return t._gsap || $(xi(t))[0]._gsap;
        }
        function b(t, e, i) {
          return (i = t[e]) && s(i)
            ? t[e]()
            : (h(i) && t.getAttribute && t.getAttribute(e)) || i;
        }
        function M(t, e) {
          return (t = t.split(",")).forEach(e) || t;
        }
        function x(t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        }
        function _(t, e) {
          for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
          return n < i;
        }
        function O(e, t, i) {
          var n,
            r = o(e[1]),
            s = (r ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[s];
          if ((r && (a.duration = e[1]), (a.parent = i), t)) {
            for (n = a; i && !("immediateRender" in n); )
              (n = i.vars.defaults || {}), (i = c(i.vars.inherit) && i.parent);
            (a.immediateRender = c(n.immediateRender)),
              t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
          }
          return a;
        }
        function k() {
          var t,
            e,
            i = fi.length,
            n = fi.slice(0);
          for (ci = {}, t = fi.length = 0; t < i; t++)
            (e = n[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        }
        function P(t, e, i, n) {
          fi.length && k(), t.render(e, i, n), fi.length && k();
        }
        function S(t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(oi).length < 2
            ? e
            : r(t)
            ? t.trim()
            : t;
        }
        function F(t) {
          return t;
        }
        function C(t, e) {
          for (var i in e) i in t || (t[i] = e[i]);
          return t;
        }
        function A(t, e) {
          for (var i in e)
            i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
        }
        function I(t, e) {
          for (var i in e)
            "__proto__" !== i &&
              "constructor" !== i &&
              "prototype" !== i &&
              (t[i] = f(e[i]) ? I(t[i] || (t[i] = {}), e[i]) : e[i]);
          return t;
        }
        function R(t, e) {
          var i,
            n = {};
          for (i in t) i in e || (n[i] = t[i]);
          return n;
        }
        function E(e) {
          var t = e.parent || wt,
            i = e.keyframes ? A : C;
          if (c(e.inherit))
            for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
          return e;
        }
        function T(t, e, i, n) {
          void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
          var r = e._prev,
            s = e._next;
          r ? (r._next = s) : t[i] === e && (t[i] = s),
            s ? (s._prev = r) : t[n] === e && (t[n] = r),
            (e._next = e._prev = e.parent = null);
        }
        function z(t, e) {
          !t.parent ||
            (e && !t.parent.autoRemoveChildren) ||
            t.parent.remove(t),
            (t._act = 0);
        }
        function D(t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
          return t;
        }
        function B(t) {
          return t._repeat
            ? wi(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        }
        function L(t, e) {
          return (
            (t - e._start) * e._ts +
            (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        }
        function X(t) {
          return (t._end = x(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || Zt) || 0)
          ));
        }
        function Y(t, e) {
          var i = t._dp;
          return (
            i &&
              i.smoothChildTiming &&
              t._ts &&
              ((t._start = x(
                i._time -
                  (0 < t._ts
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              X(t),
              i._dirty || D(i, t)),
            t
          );
        }
        function j(t, e) {
          var i;
          if (
            ((e._time || (e._initted && !e._dur)) &&
              ((i = L(t.rawTime(), e)),
              (!e._dur || bi(0, e.totalDuration(), i) - e._tTime > Zt) &&
                e.render(i, !0)),
            D(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (i = t; i._dp; )
                0 <= i.rawTime() && i.totalTime(i._tTime), (i = i._dp);
            t._zTime = -Zt;
          }
        }
        function N(t, e, i, n) {
          return (
            e.parent && z(e),
            (e._start = x(i + e._delay)),
            (e._end = x(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            (function (t, e, i, n, r) {
              void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
              var s,
                o = t[n];
              if (r) for (s = e[r]; o && o[r] > s; ) o = o._prev;
              o
                ? ((e._next = o._next), (o._next = e))
                : ((e._next = t[i]), (t[i] = e)),
                e._next ? (e._next._prev = e) : (t[n] = e),
                (e._prev = o),
                (e.parent = e._dp = t);
            })(t, e, "_first", "_last", t._sort ? "_start" : 0),
            (t._recent = e),
            n || j(t, e),
            t
          );
        }
        function Q(t, e) {
          return (
            (ui.ScrollTrigger || p("scrollTrigger", e)) &&
            ui.ScrollTrigger.create(e, t)
          );
        }
        function U(t, e, i, n) {
          return (
            Zi(t, e),
            t._initted
              ? !i &&
                t._pt &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                Ot !== Ci.frame
                ? (fi.push(t), (t._lazy = [e, n]), 1)
                : void 0
              : 1
          );
        }
        function W(t, e, i, n) {
          var r = t._repeat,
            s = x(e) || 0,
            o = t._tTime / t._tDur;
          return (
            o && !n && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = r ? (r < 0 ? 1e10 : x(s * (r + 1) + t._rDelay * r)) : s),
            o && !n ? Y(t, (t._tTime = t._tDur * o)) : t.parent && X(t),
            i || D(t.parent, t),
            t
          );
        }
        function Z(t) {
          return t instanceof Ni ? D(t) : W(t, t._dur);
        }
        function V(t, e) {
          var i,
            n,
            s = t.labels,
            o = t._recent || yi,
            a = t.duration() >= Wt ? o.endTime(!1) : t._dur;
          return r(e) && (isNaN(e) || e in s)
            ? "<" === (i = e.charAt(0)) || ">" === i
              ? ("<" === i ? o._start : o.endTime(0 <= o._repeat)) +
                (parseFloat(e.substr(1)) || 0)
              : (i = e.indexOf("=")) < 0
              ? (e in s || (s[e] = a), s[e])
              : ((n = +(e.charAt(i - 1) + e.substr(i + 1))),
                1 < i ? V(t, e.substr(0, i - 1)) + n : a + n)
            : null == e
            ? a
            : +e;
        }
        function q(t, e) {
          return t || 0 === t ? e(t) : e;
        }
        function G(t) {
          if ("string" != typeof t) return "";
          var e = ai.exec(t);
          return e ? t.substr(e.index + e[0].length) : "";
        }
        function H(t, e) {
          return (
            t &&
            f(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && f(t[0]))) &&
            !t.nodeType &&
            t !== yt
          );
        }
        function J(t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        }
        function K(t) {
          if (s(t)) return t;
          var i = f(t) ? t : { each: t },
            n = zi(i.ease),
            o = i.from || 0,
            a = parseFloat(i.base) || 0,
            u = {},
            e = 0 < o && o < 1,
            h = isNaN(o) || e,
            c = i.axis,
            l = o,
            v = o;
          return (
            r(o)
              ? (l = v = { center: 0.5, edges: 0.5, end: 1 }[o] || 0)
              : !e && h && ((l = o[0]), (v = o[1])),
            function (t, e, r) {
              var s,
                f,
                d,
                p,
                g,
                m,
                w,
                y,
                b,
                M = (r || i).length,
                _ = u[M];
              if (!_) {
                if (!(b = "auto" === i.grid ? 0 : (i.grid || [1, Wt])[1])) {
                  for (
                    w = -Wt;
                    w < (w = r[b++].getBoundingClientRect().left) && b < M;

                  );
                  b--;
                }
                for (
                  _ = u[M] = [],
                    s = h ? Math.min(b, M) * l - 0.5 : o % b,
                    f = h ? (M * v) / b - 0.5 : (o / b) | 0,
                    y = Wt,
                    m = w = 0;
                  m < M;
                  m++
                )
                  (d = (m % b) - s),
                    (p = f - ((m / b) | 0)),
                    (_[m] = g =
                      c ? Math.abs("y" === c ? p : d) : Ht(d * d + p * p)),
                    w < g && (w = g),
                    g < y && (y = g);
                "random" === o && J(_),
                  (_.max = w - y),
                  (_.min = y),
                  (_.v = M =
                    (parseFloat(i.amount) ||
                      parseFloat(i.each) *
                        (M < b
                          ? M - 1
                          : c
                          ? "y" === c
                            ? M / b
                            : b
                          : Math.max(b, M / b)) ||
                      0) * ("edges" === o ? -1 : 1)),
                  (_.b = M < 0 ? a - M : a),
                  (_.u = G(i.amount || i.each) || 0),
                  (n = n && M < 0 ? Ti(n) : n);
              }
              return (
                (M = (_[t] - _.min) / _.max || 0),
                x(_.b + (n ? n(M) : M) * _.v) + _.u
              );
            }
          );
        }
        function tt(t) {
          var i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
          return function (n) {
            var e = Math.round(parseFloat(n) / t) * t * i;
            return (e - (e % 1)) / i + (o(n) ? 0 : G(n));
          };
        }
        function it(t, i) {
          var n,
            r,
            e = ti(t);
          return (
            !e &&
              f(t) &&
              ((n = e = t.radius || Wt),
              t.values
                ? ((t = xi(t.values)), (r = !o(t[0])) && (n *= n))
                : (t = tt(t.increment))),
            q(
              i,
              e
                ? s(t)
                  ? function (i) {
                      return (r = t(i)), Math.abs(r - i) <= n ? r : i;
                    }
                  : function (i) {
                      for (
                        var e,
                          s,
                          a = parseFloat(r ? i.x : i),
                          u = parseFloat(r ? i.y : 0),
                          h = Wt,
                          f = 0,
                          c = t.length;
                        c--;

                      )
                        (e = r
                          ? (e = t[c].x - a) * e + (s = t[c].y - u) * s
                          : Math.abs(t[c] - a)) < h && ((h = e), (f = c));
                      return (
                        (f = !n || h <= n ? t[f] : i),
                        r || f === i || o(i) ? f : f + G(i)
                      );
                    }
                : tt(t)
            )
          );
        }
        function nt(t, e, i, n) {
          return q(ti(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
            return ti(t)
              ? t[~~(Math.random() * t.length)]
              : (i = i || 1e-5) &&
                  (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i
                    ) *
                      i *
                      n
                  ) / n;
          });
        }
        function rt(e, t, i) {
          return q(i, function (i) {
            return e[~~t(i)];
          });
        }
        function et(t) {
          for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
            (n = t.indexOf(")", e)),
              (r = "[" === t.charAt(e + 7)),
              (i = t.substr(e + 7, n - e - 7).match(r ? oi : ii)),
              (o +=
                t.substr(s, e - s) +
                nt(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)),
              (s = n + 1);
          return o + t.substr(s, t.length - s);
        }
        function st(t, e, i) {
          var n,
            r,
            s,
            o = t.labels,
            a = Wt;
          for (n in o)
            (r = o[n] - e) < 0 == !!i &&
              r &&
              a > (r = Math.abs(r)) &&
              ((s = n), (a = r));
          return s;
        }
        function ot(t) {
          return (
            z(t),
            t.scrollTrigger && t.scrollTrigger.kill(!1),
            t.progress() < 1 && Oi(t, "onInterrupt"),
            t
          );
        }
        function at(t, e, i) {
          return (
            ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
              ? e + (i - e) * t * 6
              : t < 0.5
              ? i
              : 3 * t < 2
              ? e + (i - e) * (2 / 3 - t) * 6
              : e) *
              ki +
              0.5) |
            0
          );
        }
        function ut(t, e, i) {
          var n,
            r,
            s,
            a,
            u,
            h,
            f,
            c,
            l,
            v,
            d = t ? (o(t) ? [t >> 16, (t >> 8) & ki, t & ki] : 0) : Pi.black;
          if (!d) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Pi[t])
            )
              d = Pi[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  (t =
                    "#" +
                    (n = t.charAt(1)) +
                    n +
                    (r = t.charAt(2)) +
                    r +
                    (s = t.charAt(3)) +
                    s +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
              )
                return [
                  (d = parseInt(t.substr(1, 6), 16)) >> 16,
                  (d >> 8) & ki,
                  d & ki,
                  parseInt(t.substr(7), 16) / 255,
                ];
              d = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & ki,
                t & ki,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((d = v = t.match(ii)), e)) {
                if (~t.indexOf("="))
                  return (d = t.match(ni)), i && d.length < 4 && (d[3] = 1), d;
              } else
                (a = (+d[0] % 360) / 360),
                  (u = d[1] / 100),
                  (n =
                    2 * (h = d[2] / 100) -
                    (r = h <= 0.5 ? h * (u + 1) : h + u - h * u)),
                  3 < d.length && (d[3] *= 1),
                  (d[0] = at(a + 1 / 3, n, r)),
                  (d[1] = at(a, n, r)),
                  (d[2] = at(a - 1 / 3, n, r));
            else d = t.match(ii) || Pi.transparent;
            d = d.map(Number);
          }
          return (
            e &&
              !v &&
              ((n = d[0] / ki),
              (r = d[1] / ki),
              (s = d[2] / ki),
              (h = ((f = Math.max(n, r, s)) + (c = Math.min(n, r, s))) / 2),
              f === c
                ? (a = u = 0)
                : ((l = f - c),
                  (u = 0.5 < h ? l / (2 - f - c) : l / (f + c)),
                  (a =
                    f === n
                      ? (r - s) / l + (r < s ? 6 : 0)
                      : f === r
                      ? (s - n) / l + 2
                      : (n - r) / l + 4),
                  (a *= 60)),
              (d[0] = ~~(a + 0.5)),
              (d[1] = ~~(100 * u + 0.5)),
              (d[2] = ~~(100 * h + 0.5))),
            i && d.length < 4 && (d[3] = 1),
            d
          );
        }
        function ht(t) {
          var i = [],
            n = [],
            r = -1;
          return (
            t.split(Si).forEach(function (t) {
              var e = t.match(ri) || [];
              i.push.apply(i, e), n.push((r += e.length + 1));
            }),
            (i.c = n),
            i
          );
        }
        function ft(t, e, i) {
          var n,
            r,
            s,
            o,
            a = "",
            u = (t + a).match(Si),
            h = e ? "hsla(" : "rgba(",
            f = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = ut(t, e, 1)) &&
                h +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            i && ((s = ht(t)), (n = i.c).join(a) !== s.c.join(a)))
          )
            for (o = (r = t.replace(Si, "1").split(ri)).length - 1; f < o; f++)
              a +=
                r[f] +
                (~n.indexOf(f)
                  ? u.shift() || h + "0,0,0,0)"
                  : (s.length ? s : u.length ? u : i).shift());
          if (!r)
            for (o = (r = t.split(Si)).length - 1; f < o; f++) a += r[f] + u[f];
          return a + r[o];
        }
        function ct(t) {
          var e,
            i = t.join(" ");
          if (((Si.lastIndex = 0), Si.test(i)))
            return (
              (e = Fi.test(i)),
              (t[1] = ft(t[1], e)),
              (t[0] = ft(t[0], e, ht(t[1]))),
              !0
            );
        }
        function lt(t, e) {
          for (var i, n = t._first; n; )
            n instanceof Ni
              ? lt(n, e)
              : !n.vars.yoyoEase ||
                (n._yoyo && n._repeat) ||
                n._yoyo === e ||
                (n.timeline
                  ? lt(n.timeline, e)
                  : ((i = n._ease),
                    (n._ease = n._yEase),
                    (n._yEase = i),
                    (n._yoyo = e))),
              (n = n._next);
        }
        function vt(t, e, i, n) {
          void 0 === i &&
            (i = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === n &&
              (n = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var r,
            s = { easeIn: e, easeOut: i, easeInOut: n };
          return (
            M(t, function (t) {
              for (var e in ((Ii[t] = ui[t] = s),
              (Ii[(r = t.toLowerCase())] = i),
              s))
                Ii[
                  r +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = Ii[t + "." + e] = s[e];
            }),
            s
          );
        }
        function dt(e) {
          return function (t) {
            return t < 0.5
              ? (1 - e(1 - 2 * t)) / 2
              : 0.5 + e(2 * (t - 0.5)) / 2;
          };
        }
        function pt(t, i, e) {
          function n(t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Jt((t - o) * s) + 1;
          }
          var r = 1 <= i ? i : 1,
            s = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
            o = (s / Vt) * (Math.asin(1 / r) || 0),
            a =
              "out" === t
                ? n
                : "in" === t
                ? function (t) {
                    return 1 - n(1 - t);
                  }
                : dt(n);
          return (
            (s = Vt / s),
            (a.config = function (i, e) {
              return pt(t, i, e);
            }),
            a
          );
        }
        function gt(e, t) {
          function i(i) {
            return i ? --i * i * ((t + 1) * i + t) + 1 : 0;
          }
          void 0 === t && (t = 1.70158);
          var n =
            "out" === e
              ? i
              : "in" === e
              ? function (t) {
                  return 1 - i(1 - t);
                }
              : dt(i);
          return (
            (n.config = function (t) {
              return gt(e, t);
            }),
            n
          );
        }
        var mt,
          wt,
          yt,
          bt,
          Mt,
          xt,
          _t,
          Ot,
          kt,
          Pt,
          St,
          Ft,
          Ct,
          At,
          It,
          Rt,
          Et,
          Tt,
          zt,
          Dt,
          Bt,
          Lt,
          Xt,
          Yt,
          jt,
          Nt,
          Qt = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          Ut = { duration: 0.5, overwrite: !1, delay: 0 },
          Wt = 1e8,
          Zt = 1 / Wt,
          Vt = 2 * Math.PI,
          qt = Vt / 4,
          Gt = 0,
          Ht = Math.sqrt,
          $t = Math.cos,
          Jt = Math.sin,
          Kt =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          ti = Array.isArray,
          ii = /(?:-?\.?\d|\.)+/gi,
          ni = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          ri = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          ei = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          si = /[+-]=-?[.\d]+/,
          oi = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
          ai = /[\d.+\-=]+(?:e[-+]\d*)*/i,
          ui = {},
          hi = {},
          fi = [],
          ci = {},
          li = {},
          vi = {},
          di = 30,
          pi = [],
          gi = "",
          mi = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
          },
          wi = function (t, e) {
            var i = Math.floor((t /= e));
            return t && i === t ? i - 1 : i;
          },
          yi = { _start: 0, endTime: w },
          bi = function (t, e, i) {
            return i < t ? t : e < i ? e : i;
          },
          Mi = [].slice,
          xi = function (t, e) {
            return !r(t) || e || (!bt && Ai())
              ? ti(t)
                ? (function (t, e, i) {
                    return (
                      void 0 === i && (i = []),
                      t.forEach(function (t) {
                        return (r(t) && !e) || H(t, 1)
                          ? i.push.apply(i, xi(t))
                          : i.push(t);
                      }) || i
                    );
                  })(t, e)
                : H(t)
                ? Mi.call(t, 0)
                : t
                ? [t]
                : []
              : Mi.call(Mt.querySelectorAll(t), 0);
          },
          _i = function (e, t, i, n, r) {
            var s = t - e,
              o = n - i;
            return q(r, function (t) {
              return i + (((t - e) / s) * o || 0);
            });
          },
          Oi = function (t, e, i) {
            var n,
              r,
              s = t.vars,
              o = s[e];
            if (o)
              return (
                (n = s[e + "Params"]),
                (r = s.callbackScope || t),
                i && fi.length && k(),
                n ? o.apply(r, n) : o.call(r)
              );
          },
          ki = 255,
          Pi = {
            aqua: [0, ki, ki],
            lime: [0, ki, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, ki],
            navy: [0, 0, 128],
            white: [ki, ki, ki],
            olive: [128, 128, 0],
            yellow: [ki, ki, 0],
            orange: [ki, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [ki, 0, 0],
            pink: [ki, 192, 203],
            cyan: [0, ki, ki],
            transparent: [ki, ki, ki, 0],
          },
          Si = (function () {
            var t,
              e =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Pi) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
          })(),
          Fi = /hsl[a]?\(/,
          Ci =
            ((Et = Date.now),
            (Tt = 500),
            (zt = 33),
            (Dt = Et()),
            (Bt = Dt),
            (Xt = Lt = 1e3 / 240),
            (At = {
              time: 0,
              frame: 0,
              tick: function () {
                Di(!0);
              },
              deltaRatio: function (t) {
                return It / (1e3 / (t || 60));
              },
              wake: function () {
                _t &&
                  (!bt &&
                    l() &&
                    ((yt = bt = i),
                    (Mt = yt.document || {}),
                    (ui.gsap = gn),
                    (yt.gsapVersions || (yt.gsapVersions = [])).push(
                      gn.version
                    ),
                    d(xt || yt.GreenSockGlobals || (!yt.gsap && yt) || {}),
                    (Ct = yt.requestAnimationFrame)),
                  St && At.sleep(),
                  (Ft =
                    Ct ||
                    function (t) {
                      return a(t, (Xt - 1e3 * At.time + 1) | 0);
                    }),
                  (Pt = 1),
                  Di(2));
              },
              sleep: function () {
                (Ct ? yt.cancelAnimationFrame : u)(St), (Pt = 0), (Ft = w);
              },
              lagSmoothing: function (t, e) {
                (Tt = t || 1e8), (zt = Math.min(e, Tt, 0));
              },
              fps: function (t) {
                (Lt = 1e3 / (t || 240)), (Xt = 1e3 * At.time + Lt);
              },
              add: function (t) {
                Yt.indexOf(t) < 0 && Yt.push(t), Ai();
              },
              remove: function (t) {
                var e;
                ~(e = Yt.indexOf(t)) && Yt.splice(e, 1) && e <= Rt && Rt--;
              },
              _listeners: (Yt = []),
            })),
          Ai = function () {
            return !Pt && Ci.wake();
          },
          Ii = {},
          Ri = /^[\d.\-M][\d.\-,\s]/,
          Ei = /["']/g,
          Ti = function (e) {
            return function (t) {
              return 1 - e(1 - t);
            };
          },
          zi = function (t, e) {
            return (
              (t &&
                (s(t)
                  ? t
                  : Ii[t] ||
                    (function (t) {
                      var e = (t + "").split("("),
                        i = Ii[e[0]];
                      return i && 1 < e.length && i.config
                        ? i.config.apply(
                            null,
                            ~t.indexOf("{")
                              ? [
                                  (function (t) {
                                    for (
                                      var e,
                                        i,
                                        n,
                                        r = {},
                                        s = t
                                          .substr(1, t.length - 3)
                                          .split(":"),
                                        o = s[0],
                                        a = 1,
                                        u = s.length;
                                      a < u;
                                      a++
                                    )
                                      (i = s[a]),
                                        (e =
                                          a !== u - 1
                                            ? i.lastIndexOf(",")
                                            : i.length),
                                        (n = i.substr(0, e)),
                                        (r[o] = isNaN(n)
                                          ? n.replace(Ei, "").trim()
                                          : +n),
                                        (o = i.substr(e + 1).trim());
                                    return r;
                                  })(e[1]),
                                ]
                              : (function (t) {
                                  var e = t.indexOf("(") + 1,
                                    i = t.indexOf(")"),
                                    n = t.indexOf("(", e);
                                  return t.substring(
                                    e,
                                    ~n && n < i ? t.indexOf(")", i + 1) : i
                                  );
                                })(t)
                                  .split(",")
                                  .map(S)
                          )
                        : Ii._CE && Ri.test(t)
                        ? Ii._CE("", t)
                        : i;
                    })(t))) ||
              e
            );
          };
        function Di(t) {
          var e,
            i,
            n,
            r,
            s = Et() - Bt,
            o = !0 === t;
          if (
            (Tt < s && (Dt += s - zt),
            (0 < (e = (n = (Bt += s) - Dt) - Xt) || o) &&
              ((r = ++At.frame),
              (It = n - 1e3 * At.time),
              (At.time = n /= 1e3),
              (Xt += e + (Lt <= e ? 4 : Lt - e)),
              (i = 1)),
            o || (St = Ft(Di)),
            i)
          )
            for (Rt = 0; Rt < Yt.length; Rt++) Yt[Rt](n, It, r, t);
        }
        function Bi(t) {
          return t < Nt
            ? jt * t * t
            : t < 0.7272727272727273
            ? jt * Math.pow(t - 1.5 / 2.75, 2) + 0.75
            : t < 0.9090909090909092
            ? jt * (t -= 2.25 / 2.75) * t + 0.9375
            : jt * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
        }
        M("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
          var i = e < 5 ? e + 1 : e;
          vt(
            t + ",Power" + (i - 1),
            e
              ? function (t) {
                  return Math.pow(t, i);
                }
              : function (t) {
                  return t;
                },
            function (t) {
              return 1 - Math.pow(1 - t, i);
            },
            function (t) {
              return t < 0.5
                ? Math.pow(2 * t, i) / 2
                : 1 - Math.pow(2 * (1 - t), i) / 2;
            }
          );
        }),
          (Ii.Linear.easeNone = Ii.none = Ii.Linear.easeIn),
          vt("Elastic", pt("in"), pt("out"), pt()),
          (jt = 7.5625),
          (Nt = 1 / 2.75),
          vt(
            "Bounce",
            function (t) {
              return 1 - Bi(1 - t);
            },
            Bi
          ),
          vt("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          vt("Circ", function (t) {
            return -(Ht(1 - t * t) - 1);
          }),
          vt("Sine", function (t) {
            return 1 === t ? 1 : 1 - $t(t * qt);
          }),
          vt("Back", gt("in"), gt("out"), gt()),
          (Ii.SteppedEase =
            Ii.steps =
            ui.SteppedEase =
              {
                config: function (t, e) {
                  void 0 === t && (t = 1);
                  var i = 1 / t,
                    n = t + (e ? 0 : 1),
                    r = e ? 1 : 0;
                  return function (t) {
                    return (((n * bi(0, 0.99999999, t)) | 0) + r) * i;
                  };
                },
              }),
          (Ut.ease = Ii["quad.out"]),
          M(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
              return (gi += t + "," + t + "Params,");
            }
          );
        var Li,
          Xi = function (t, e) {
            (this.id = Gt++),
              ((t._gsap = this).target = t),
              (this.harness = e),
              (this.get = e ? e.get : b),
              (this.set = e ? e.getSetter : rn);
          },
          Yi =
            (((Li = ji.prototype).delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (Li.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (Li.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  W(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (Li.totalTime = function (t, e) {
              if ((Ai(), !arguments.length)) return this._tTime;
              var i = this._dp;
              if (i && i.smoothChildTiming && this._ts) {
                for (Y(this, t), !i._dp || i.parent || j(i, this); i.parent; )
                  i.parent._time !==
                    i._start +
                      (0 <= i._ts
                        ? i._tTime / i._ts
                        : (i.totalDuration() - i._tTime) / -i._ts) &&
                    i.totalTime(i._tTime, !0),
                    (i = i.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((0 < this._ts && t < this._tDur) ||
                    (this._ts < 0 && 0 < t) ||
                    (!this._tDur && !t)) &&
                  N(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === Zt) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), P(this, t, e)),
                this
              );
            }),
            (Li.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + B(this)) % this._dur ||
                      (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (Li.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (Li.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      B(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (Li.iteration = function (t, e) {
              var i = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * i, e)
                : this._repeat
                ? wi(this._tTime, i) + 1
                : 1;
            }),
            (Li.timeScale = function (t) {
              if (!arguments.length) return this._rts === -Zt ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? L(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || t === -Zt ? 0 : this._rts),
                (function (t) {
                  for (var e = t.parent; e && e.parent; )
                    (e._dirty = 1), e.totalDuration(), (e = e.parent);
                  return t;
                })(this.totalTime(bi(-this._delay, this._tDur, e), !0))
              );
            }),
            (Li.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t)
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Ai(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            (this._tTime -= Zt) &&
                            Math.abs(this._zTime) !== Zt
                        ))),
                  this)
                : this._ps;
            }),
            (Li.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  !e ||
                    (!e._sort && this.parent) ||
                    N(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (Li.endTime = function (e) {
              return (
                this._start +
                (c(e) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts)
              );
            }),
            (Li.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? L(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (Li.globalTime = function (t) {
              for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
                (i = e._start + i / (e._ts || 1)), (e = e._dp);
              return i;
            }),
            (Li.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), Z(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (Li.repeatDelay = function (t) {
              return arguments.length
                ? ((this._rDelay = t), Z(this))
                : this._rDelay;
            }),
            (Li.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (Li.seek = function (e, t) {
              return this.totalTime(V(this, e), c(t));
            }),
            (Li.restart = function (e, t) {
              return this.play().totalTime(e ? -this._delay : 0, c(t));
            }),
            (Li.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (Li.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (Li.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (Li.resume = function () {
              return this.paused(!1);
            }),
            (Li.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -Zt : 0)),
                  this)
                : this._rts < 0;
            }),
            (Li.invalidate = function () {
              return (this._initted = this._act = 0), (this._zTime = -Zt), this;
            }),
            (Li.isActive = function () {
              var t,
                e = this.parent || this._dp,
                i = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= i &&
                  t < this.endTime(!0) - Zt
                )
              );
            }),
            (Li.eventCallback = function (t, e, i) {
              var n = this.vars;
              return 1 < arguments.length
                ? (e
                    ? ((n[t] = e),
                      i && (n[t + "Params"] = i),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete n[t],
                  this)
                : n[t];
            }),
            (Li.then = function (t) {
              var i = this;
              return new Promise(function (e) {
                function n() {
                  var t = i.then;
                  (i.then = null),
                    s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
                    e(r),
                    (i.then = t);
                }
                var r = s(t) ? t : F;
                (i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
                (!i._tTime && i._ts < 0)
                  ? n()
                  : (i._prom = n);
              });
            }),
            (Li.kill = function () {
              ot(this);
            }),
            ji);
        function ji(t, e) {
          var i = t.parent || wt;
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            W(this, +t.duration, 1, 1),
            (this.data = t.data),
            Pt || Ci.wake(),
            i && N(i, this, e || 0 === e ? e : i._time, 1),
            t.reversed && this.reverse(),
            t.paused && this.paused(!0);
        }
        C(Yi.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -Zt,
          _prom: 0,
          _ps: !1,
          _rts: 1,
        });
        var Ni = (function (i) {
          function a(e, t) {
            var r;
            return (
              void 0 === e && (e = {}),
              ((r = i.call(this, e, t) || this).labels = {}),
              (r.smoothChildTiming = !!e.smoothChildTiming),
              (r.autoRemoveChildren = !!e.autoRemoveChildren),
              (r._sort = c(e.sortChildren)),
              r.parent && j(r.parent, n(r)),
              e.scrollTrigger && Q(n(r), e.scrollTrigger),
              r
            );
          }
          t(a, i);
          var e = a.prototype;
          return (
            (e.to = function (t, e, i, n) {
              return (
                new Hi(t, O(arguments, 0, this), V(this, o(e) ? n : i)), this
              );
            }),
            (e.from = function (t, e, i, n) {
              return (
                new Hi(t, O(arguments, 1, this), V(this, o(e) ? n : i)), this
              );
            }),
            (e.fromTo = function (t, e, i, n, r) {
              return (
                new Hi(t, O(arguments, 2, this), V(this, o(e) ? r : n)), this
              );
            }),
            (e.set = function (t, e, i) {
              return (
                (e.duration = 0),
                (e.parent = this),
                E(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new Hi(t, e, V(this, i), 1),
                this
              );
            }),
            (e.call = function (t, e, i) {
              return N(this, Hi.delayedCall(0, t, e), V(this, i));
            }),
            (e.staggerTo = function (t, e, i, n, r, s, o) {
              return (
                (i.duration = e),
                (i.stagger = i.stagger || n),
                (i.onComplete = s),
                (i.onCompleteParams = o),
                (i.parent = this),
                new Hi(t, i, V(this, r)),
                this
              );
            }),
            (e.staggerFrom = function (e, t, i, n, r, s, o) {
              return (
                (i.runBackwards = 1),
                (E(i).immediateRender = c(i.immediateRender)),
                this.staggerTo(e, t, i, n, r, s, o)
              );
            }),
            (e.staggerFromTo = function (e, t, i, n, r, s, o, a) {
              return (
                (n.startAt = i),
                (E(n).immediateRender = c(n.immediateRender)),
                this.staggerTo(e, t, n, r, s, o, a)
              );
            }),
            (e.render = function (t, e, i) {
              var n,
                r,
                s,
                o,
                a,
                u,
                h,
                f,
                c,
                l,
                v,
                d,
                p = this._time,
                g = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                w = this !== wt && g - Zt < t && 0 <= t ? g : t < Zt ? 0 : t,
                y = this._zTime < 0 != t < 0 && (this._initted || !m);
              if (w !== this._tTime || i || y) {
                if (
                  (p !== this._time &&
                    m &&
                    ((w += this._time - p), (t += this._time - p)),
                  (n = w),
                  (c = this._start),
                  (u = !(f = this._ts)),
                  y && (m || (p = this._zTime), (!t && e) || (this._zTime = t)),
                  this._repeat)
                ) {
                  if (
                    ((v = this._yoyo),
                    (a = m + this._rDelay),
                    this._repeat < -1 && t < 0)
                  )
                    return this.totalTime(100 * a + t, e, i);
                  if (
                    ((n = x(w % a)),
                    w === g
                      ? ((o = this._repeat), (n = m))
                      : ((o = ~~(w / a)) && o === w / a && ((n = m), o--),
                        m < n && (n = m)),
                    (l = wi(this._tTime, a)),
                    !p && this._tTime && l !== o && (l = o),
                    v && 1 & o && ((n = m - n), (d = 1)),
                    o !== l && !this._lock)
                  ) {
                    var b = v && 1 & l,
                      M = b === (v && 1 & o);
                    if (
                      (o < l && (b = !b),
                      (p = b ? 0 : m),
                      (this._lock = 1),
                      (this.render(p || (d ? 0 : x(o * a)), e, !m)._lock = 0),
                      !e && this.parent && Oi(this, "onRepeat"),
                      this.vars.repeatRefresh &&
                        !d &&
                        (this.invalidate()._lock = 1),
                      (p && p !== this._time) ||
                        u != !this._ts ||
                        (this.vars.onRepeat && !this.parent && !this._act))
                    )
                      return this;
                    if (
                      ((m = this._dur),
                      (g = this._tDur),
                      M &&
                        ((this._lock = 2),
                        (p = b ? m : -1e-4),
                        this.render(p, !0)),
                      (this._lock = 0),
                      !this._ts && !u)
                    )
                      return this;
                    lt(this, d);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    (h = (function (t, e, i) {
                      var n;
                      if (e < i)
                        for (n = t._first; n && n._start <= i; ) {
                          if (!n._dur && "isPause" === n.data && n._start > e)
                            return n;
                          n = n._next;
                        }
                      else
                        for (n = t._last; n && n._start >= i; ) {
                          if (!n._dur && "isPause" === n.data && n._start < e)
                            return n;
                          n = n._prev;
                        }
                    })(this, x(p), x(n))) &&
                    (w -= n - (n = h._start)),
                  (this._tTime = w),
                  (this._time = n),
                  (this._act = !f),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = t),
                    (p = 0)),
                  p || !n || e || Oi(this, "onStart"),
                  p <= n && 0 <= t)
                )
                  for (r = this._first; r; ) {
                    if (
                      ((s = r._next),
                      (r._act || n >= r._start) && r._ts && h !== r)
                    ) {
                      if (r.parent !== this) return this.render(t, e, i);
                      if (
                        (r.render(
                          0 < r._ts
                            ? (n - r._start) * r._ts
                            : (r._dirty ? r.totalDuration() : r._tDur) +
                                (n - r._start) * r._ts,
                          e,
                          i
                        ),
                        n !== this._time || (!this._ts && !u))
                      ) {
                        (h = 0), s && (w += this._zTime = -Zt);
                        break;
                      }
                    }
                    r = s;
                  }
                else {
                  r = this._last;
                  for (var _ = t < 0 ? t : n; r; ) {
                    if (
                      ((s = r._prev),
                      (r._act || _ <= r._end) && r._ts && h !== r)
                    ) {
                      if (r.parent !== this) return this.render(t, e, i);
                      if (
                        (r.render(
                          0 < r._ts
                            ? (_ - r._start) * r._ts
                            : (r._dirty ? r.totalDuration() : r._tDur) +
                                (_ - r._start) * r._ts,
                          e,
                          i
                        ),
                        n !== this._time || (!this._ts && !u))
                      ) {
                        (h = 0), s && (w += this._zTime = _ ? -Zt : Zt);
                        break;
                      }
                    }
                    r = s;
                  }
                }
                if (
                  h &&
                  !e &&
                  (this.pause(),
                  (h.render(p <= n ? 0 : -Zt)._zTime = p <= n ? 1 : -1),
                  this._ts)
                )
                  return (this._start = c), X(this), this.render(t, e, i);
                this._onUpdate && !e && Oi(this, "onUpdate", !0),
                  ((w === g && g >= this.totalDuration()) || (!w && p)) &&
                    ((c !== this._start &&
                      Math.abs(f) === Math.abs(this._ts)) ||
                      this._lock ||
                      ((!t && m) ||
                        !((w === g && 0 < this._ts) || (!w && this._ts < 0)) ||
                        z(this, 1),
                      e ||
                        (t < 0 && !p) ||
                        (!w && !p) ||
                        (Oi(
                          this,
                          w === g ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        !this._prom ||
                          (w < g && 0 < this.timeScale()) ||
                          this._prom())));
              }
              return this;
            }),
            (e.add = function (t, e) {
              var i = this;
              if ((o(e) || (e = V(this, e)), !(t instanceof Yi))) {
                if (ti(t))
                  return (
                    t.forEach(function (t) {
                      return i.add(t, e);
                    }),
                    this
                  );
                if (r(t)) return this.addLabel(t, e);
                if (!s(t)) return this;
                t = Hi.delayedCall(0, t);
              }
              return this !== t ? N(this, t, e) : this;
            }),
            (e.getChildren = function (t, e, i, n) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === i && (i = !0),
                void 0 === n && (n = -Wt);
              for (var r = [], s = this._first; s; )
                s._start >= n &&
                  (s instanceof Hi
                    ? e && r.push(s)
                    : (i && r.push(s),
                      t && r.push.apply(r, s.getChildren(!0, e, i)))),
                  (s = s._next);
              return r;
            }),
            (e.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
                if (e[i].vars.id === t) return e[i];
            }),
            (e.remove = function (t) {
              return r(t)
                ? this.removeLabel(t)
                : s(t)
                ? this.killTweensOf(t)
                : (T(this, t),
                  t === this._recent && (this._recent = this._last),
                  D(this));
            }),
            (e.totalTime = function (t, e) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = x(
                      Ci.time -
                        (0 < this._ts
                          ? t / this._ts
                          : (this.totalDuration() - t) / -this._ts)
                    )),
                  i.prototype.totalTime.call(this, t, e),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (e.addLabel = function (t, e) {
              return (this.labels[t] = V(this, e)), this;
            }),
            (e.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (e.addPause = function (t, e, i) {
              var n = Hi.delayedCall(0, e || w, i);
              return (
                (n.data = "isPause"),
                (this._hasPause = 1),
                N(this, n, V(this, t))
              );
            }),
            (e.removePause = function (t) {
              var e = this._first;
              for (t = V(this, t); e; )
                e._start === t && "isPause" === e.data && z(e), (e = e._next);
            }),
            (e.killTweensOf = function (t, e, i) {
              for (var n = this.getTweensOf(t, i), r = n.length; r--; )
                Ui !== n[r] && n[r].kill(t, e);
              return this;
            }),
            (e.getTweensOf = function (t, e) {
              for (var i, n = [], r = xi(t), s = this._first, a = o(e); s; )
                s instanceof Hi
                  ? _(s._targets, r) &&
                    (a
                      ? (!Ui || (s._initted && s._ts)) &&
                        s.globalTime(0) <= e &&
                        s.globalTime(s.totalDuration()) > e
                      : !e || s.isActive()) &&
                    n.push(s)
                  : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i),
                  (s = s._next);
              return n;
            }),
            (e.tweenTo = function (t, e) {
              e = e || {};
              var i = this,
                n = V(i, t),
                r = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                a = e.immediateRender,
                u = Hi.to(
                  i,
                  C(
                    {
                      ease: e.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: n,
                      overwrite: "auto",
                      duration:
                        e.duration ||
                        Math.abs(
                          (n - (r && "time" in r ? r.time : i._time)) /
                            i.timeScale()
                        ) ||
                        Zt,
                      onStart: function () {
                        i.pause();
                        var t =
                          e.duration || Math.abs((n - i._time) / i.timeScale());
                        u._dur !== t && W(u, t, 0, 1).render(u._time, !0, !0),
                          s && s.apply(u, o || []);
                      },
                    },
                    e
                  )
                );
              return a ? u.render(0) : u;
            }),
            (e.tweenFromTo = function (t, e, i) {
              return this.tweenTo(e, C({ startAt: { time: V(this, t) } }, i));
            }),
            (e.recent = function () {
              return this._recent;
            }),
            (e.nextLabel = function (t) {
              return void 0 === t && (t = this._time), st(this, V(this, t));
            }),
            (e.previousLabel = function (t) {
              return void 0 === t && (t = this._time), st(this, V(this, t), 1);
            }),
            (e.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.previousLabel(this._time + Zt);
            }),
            (e.shiftChildren = function (t, e, i) {
              void 0 === i && (i = 0);
              for (var n, r = this._first, s = this.labels; r; )
                r._start >= i && ((r._start += t), (r._end += t)),
                  (r = r._next);
              if (e) for (n in s) s[n] >= i && (s[n] += t);
              return D(this);
            }),
            (e.invalidate = function () {
              var t = this._first;
              for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
              return i.prototype.invalidate.call(this);
            }),
            (e.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, i = this._first; i; )
                (e = i._next), this.remove(i), (i = e);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                D(this)
              );
            }),
            (e.totalDuration = function (t) {
              var e,
                i,
                n,
                r = 0,
                s = this,
                o = s._last,
                a = Wt;
              if (arguments.length)
                return s.timeScale(
                  (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                    (s.reversed() ? -t : t)
                );
              if (s._dirty) {
                for (n = s.parent; o; )
                  (e = o._prev),
                    o._dirty && o.totalDuration(),
                    a < (i = o._start) && s._sort && o._ts && !s._lock
                      ? ((s._lock = 1), (N(s, o, i - o._delay, 1)._lock = 0))
                      : (a = i),
                    i < 0 &&
                      o._ts &&
                      ((r -= i),
                      ((!n && !s._dp) || (n && n.smoothChildTiming)) &&
                        ((s._start += i / s._ts),
                        (s._time -= i),
                        (s._tTime -= i)),
                      s.shiftChildren(-i, !1, -1 / 0),
                      (a = 0)),
                    o._end > r && o._ts && (r = o._end),
                    (o = e);
                W(s, s === wt && s._time > r ? s._time : r, 1, 1),
                  (s._dirty = 0);
              }
              return s._tDur;
            }),
            (a.updateRoot = function (t) {
              if (
                (wt._ts && (P(wt, L(t, wt)), (Ot = Ci.frame)), Ci.frame >= di)
              ) {
                di += Qt.autoSleep || 120;
                var e = wt._first;
                if (
                  (!e || !e._ts) &&
                  Qt.autoSleep &&
                  Ci._listeners.length < 2
                ) {
                  for (; e && !e._ts; ) e = e._next;
                  e || Ci.sleep();
                }
              }
            }),
            a
          );
        })(Yi);
        function Qi(t, e, i, n, o, a) {
          var u, h, c, l;
          if (
            li[t] &&
            !1 !==
              (u = new li[t]()).init(
                o,
                u.rawVars
                  ? e[t]
                  : (function (t, e, i, n, o) {
                      if (
                        (s(t) && (t = Vi(t, o, e, i, n)),
                        !f(t) || (t.style && t.nodeType) || ti(t) || Kt(t))
                      )
                        return r(t) ? Vi(t, o, e, i, n) : t;
                      var a,
                        u = {};
                      for (a in t) u[a] = Vi(t[a], o, e, i, n);
                      return u;
                    })(e[t], n, o, a, i),
                i,
                n,
                a
              ) &&
            ((i._pt = h =
              new cn(i._pt, o, t, 0, 1, u.render, u, 0, u.priority)),
            i !== kt)
          )
            for (
              c = i._ptLookup[i._targets.indexOf(o)], l = u._props.length;
              l--;

            )
              c[u._props[l]] = h;
          return u;
        }
        C(Ni.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Ui,
          Wi = function (t, e, i, n, o, a, u, h, f) {
            s(n) && (n = n(o || 0, t, a));
            var c,
              l = t[e],
              v =
                "get" !== i
                  ? i
                  : s(l)
                  ? f
                    ? t[
                        e.indexOf("set") || !s(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](f)
                    : t[e]()
                  : l,
              d = s(l) ? (f ? nn : tn) : Ki;
            if (
              (r(n) &&
                (~n.indexOf("random(") && (n = et(n)),
                "=" === n.charAt(1) &&
                  (n =
                    parseFloat(v) +
                    parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) +
                    (G(v) || 0))),
              v !== n)
            )
              return isNaN(v * n)
                ? (l || e in t || p(e, n),
                  function (t, e, i, n, r, s, o) {
                    var a,
                      u,
                      h,
                      f,
                      c,
                      l,
                      v,
                      d,
                      p = new cn(this._pt, t, e, 0, 1, on, null, r),
                      g = 0,
                      m = 0;
                    for (
                      p.b = i,
                        p.e = n,
                        i += "",
                        (v = ~(n += "").indexOf("random(")) && (n = et(n)),
                        s && (s((d = [i, n]), t, e), (i = d[0]), (n = d[1])),
                        u = i.match(ei) || [];
                      (a = ei.exec(n));

                    )
                      (f = a[0]),
                        (c = n.substring(g, a.index)),
                        h
                          ? (h = (h + 1) % 5)
                          : "rgba(" === c.substr(-5) && (h = 1),
                        f !== u[m++] &&
                          ((l = parseFloat(u[m - 1]) || 0),
                          (p._pt = {
                            _next: p._pt,
                            p: c || 1 === m ? c : ",",
                            s: l,
                            c:
                              "=" === f.charAt(1)
                                ? parseFloat(f.substr(2)) *
                                  ("-" === f.charAt(0) ? -1 : 1)
                                : parseFloat(f) - l,
                            m: h && h < 4 ? Math.round : 0,
                          }),
                          (g = ei.lastIndex));
                    return (
                      (p.c = g < n.length ? n.substring(g, n.length) : ""),
                      (p.fp = o),
                      (si.test(n) || v) && (p.e = 0),
                      (this._pt = p)
                    );
                  }.call(this, t, e, v, n, d, h || Qt.stringFilter, f))
                : ((c = new cn(
                    this._pt,
                    t,
                    e,
                    +v || 0,
                    n - (v || 0),
                    "boolean" == typeof l ? sn : en,
                    0,
                    d
                  )),
                  f && (c.fp = f),
                  u && c.modifier(u, this, t),
                  (this._pt = c));
          },
          Zi = function t(e, i) {
            var n,
              r,
              s,
              o,
              a,
              u,
              h,
              f,
              l,
              v,
              d,
              p,
              g,
              m = e.vars,
              w = m.ease,
              b = m.startAt,
              M = m.immediateRender,
              x = m.lazy,
              _ = m.onUpdate,
              O = m.onUpdateParams,
              P = m.callbackScope,
              S = m.runBackwards,
              F = m.yoyoEase,
              A = m.keyframes,
              I = m.autoRevert,
              E = e._dur,
              T = e._startAt,
              D = e._targets,
              B = e.parent,
              L = B && "nested" === B.data ? B.parent._targets : D,
              X = "auto" === e._overwrite && !mt,
              Y = e.timeline;
            if (
              (!Y || (A && w) || (w = "none"),
              (e._ease = zi(w, Ut.ease)),
              (e._yEase = F ? Ti(zi(!0 === F ? w : F, Ut.ease)) : 0),
              F &&
                e._yoyo &&
                !e._repeat &&
                ((F = e._yEase), (e._yEase = e._ease), (e._ease = F)),
              !Y)
            ) {
              if (
                ((p = (f = D[0] ? y(D[0]).harness : 0) && m[f.prop]),
                (n = R(m, hi)),
                T && T.render(-1, !0).kill(),
                b)
              )
                if (
                  (z(
                    (e._startAt = Hi.set(
                      D,
                      C(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: B,
                          immediateRender: !0,
                          lazy: c(x),
                          startAt: null,
                          delay: 0,
                          onUpdate: _,
                          onUpdateParams: O,
                          callbackScope: P,
                          stagger: 0,
                        },
                        b
                      )
                    ))
                  ),
                  M)
                ) {
                  if (0 < i) I || (e._startAt = 0);
                  else if (E && !(i < 0 && T))
                    return void (i && (e._zTime = i));
                } else !1 === I && (e._startAt = 0);
              else if (S && E)
                if (T) I || (e._startAt = 0);
                else if (
                  (i && (M = !1),
                  (s = C(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: M && c(x),
                      immediateRender: M,
                      stagger: 0,
                      parent: B,
                    },
                    n
                  )),
                  p && (s[f.prop] = p),
                  z((e._startAt = Hi.set(D, s))),
                  M)
                ) {
                  if (!i) return;
                } else t(e._startAt, Zt);
              for (
                e._pt = 0, x = (E && c(x)) || (x && !E), r = 0;
                r < D.length;
                r++
              ) {
                if (
                  ((h = (a = D[r])._gsap || $(D)[r]._gsap),
                  (e._ptLookup[r] = v = {}),
                  ci[h.id] && fi.length && k(),
                  (d = L === D ? r : L.indexOf(a)),
                  f &&
                    !1 !== (l = new f()).init(a, p || n, e, d, L) &&
                    ((e._pt = o =
                      new cn(
                        e._pt,
                        a,
                        l.name,
                        0,
                        1,
                        l.render,
                        l,
                        0,
                        l.priority
                      )),
                    l._props.forEach(function (t) {
                      v[t] = o;
                    }),
                    l.priority && (u = 1)),
                  !f || p)
                )
                  for (s in n)
                    li[s] && (l = Qi(s, n, e, d, a, L))
                      ? l.priority && (u = 1)
                      : (v[s] = o =
                          Wi.call(
                            e,
                            a,
                            s,
                            "get",
                            n[s],
                            d,
                            L,
                            0,
                            m.stringFilter
                          ));
                e._op && e._op[r] && e.kill(a, e._op[r]),
                  X &&
                    e._pt &&
                    ((Ui = e),
                    wt.killTweensOf(a, v, e.globalTime(0)),
                    (g = !e.parent),
                    (Ui = 0)),
                  e._pt && x && (ci[h.id] = 1);
              }
              u && fn(e), e._onInit && e._onInit(e);
            }
            (e._from = !Y && !!m.runBackwards),
              (e._onUpdate = _),
              (e._initted = (!e._op || e._pt) && !g);
          },
          Vi = function (t, e, i, n, o) {
            return s(t)
              ? t.call(e, i, n, o)
              : r(t) && ~t.indexOf("random(")
              ? et(t)
              : t;
          },
          qi = gi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
          Gi = (qi + ",id,stagger,delay,duration,paused,scrollTrigger").split(
            ","
          ),
          Hi = (function (i) {
            function s(e, t, r, s) {
              var a;
              "number" == typeof t && ((r.duration = t), (t = r), (r = null));
              var u,
                h,
                l,
                d,
                p,
                m,
                y,
                b,
                M = (a = i.call(this, s ? t : E(t), r) || this).vars,
                _ = M.duration,
                O = M.delay,
                k = M.immediateRender,
                P = M.stagger,
                S = M.overwrite,
                F = M.keyframes,
                A = M.defaults,
                I = M.scrollTrigger,
                R = M.yoyoEase,
                T = a.parent,
                z = (ti(e) || Kt(e) ? o(e[0]) : "length" in t) ? [e] : xi(e);
              if (
                ((a._targets = z.length
                  ? $(z)
                  : g(
                      "GSAP target " + e + " not found. https://greensock.com",
                      !Qt.nullTargetWarn
                    ) || []),
                (a._ptLookup = []),
                (a._overwrite = S),
                F || P || v(_) || v(O))
              ) {
                if (
                  ((t = a.vars),
                  (u = a.timeline =
                    new Ni({ data: "nested", defaults: A || {} })).kill(),
                  (u.parent = u._dp = n(a)),
                  (u._start = 0),
                  F)
                )
                  C(u.vars.defaults, { ease: "none" }),
                    F.forEach(function (t) {
                      return u.to(z, t, ">");
                    });
                else {
                  if (((d = z.length), (y = P ? K(P) : w), f(P)))
                    for (p in P) ~qi.indexOf(p) && ((b = b || {})[p] = P[p]);
                  for (h = 0; h < d; h++) {
                    for (p in ((l = {}), t)) Gi.indexOf(p) < 0 && (l[p] = t[p]);
                    (l.stagger = 0),
                      R && (l.yoyoEase = R),
                      b && mi(l, b),
                      (m = z[h]),
                      (l.duration = +Vi(_, n(a), h, m, z)),
                      (l.delay = (+Vi(O, n(a), h, m, z) || 0) - a._delay),
                      !P &&
                        1 === d &&
                        l.delay &&
                        ((a._delay = O = l.delay),
                        (a._start += O),
                        (l.delay = 0)),
                      u.to(m, l, y(h, m, z));
                  }
                  u.duration() ? (_ = O = 0) : (a.timeline = 0);
                }
                _ || a.duration((_ = u.duration()));
              } else a.timeline = 0;
              return (
                !0 !== S || mt || ((Ui = n(a)), wt.killTweensOf(z), (Ui = 0)),
                T && j(T, n(a)),
                (k ||
                  (!_ &&
                    !F &&
                    a._start === x(T._time) &&
                    c(k) &&
                    (function t(i) {
                      return !i || (i._ts && t(i.parent));
                    })(n(a)) &&
                    "nested" !== T.data)) &&
                  ((a._tTime = -Zt), a.render(Math.max(0, -O))),
                I && Q(n(a), I),
                a
              );
            }
            t(s, i);
            var e = s.prototype;
            return (
              (e.render = function (t, e, i) {
                var n,
                  r,
                  s,
                  o,
                  a,
                  u,
                  h,
                  f,
                  c,
                  l = this._time,
                  v = this._tDur,
                  d = this._dur,
                  p = v - Zt < t && 0 <= t ? v : t < Zt ? 0 : t;
                if (d) {
                  if (
                    p !== this._tTime ||
                    !t ||
                    i ||
                    (!this._initted && this._tTime) ||
                    (this._startAt && this._zTime < 0 != t < 0)
                  ) {
                    if (((n = p), (f = this.timeline), this._repeat)) {
                      if (((o = d + this._rDelay), this._repeat < -1 && t < 0))
                        return this.totalTime(100 * o + t, e, i);
                      if (
                        ((n = x(p % o)),
                        p === v
                          ? ((s = this._repeat), (n = d))
                          : ((s = ~~(p / o)) && s === p / o && ((n = d), s--),
                            d < n && (n = d)),
                        (u = this._yoyo && 1 & s) &&
                          ((c = this._yEase), (n = d - n)),
                        (a = wi(this._tTime, o)),
                        n === l && !i && this._initted)
                      )
                        return this;
                      s !== a &&
                        (f && this._yEase && lt(f, u),
                        !this.vars.repeatRefresh ||
                          u ||
                          this._lock ||
                          ((this._lock = i = 1),
                          (this.render(x(o * s), !0).invalidate()._lock = 0)));
                    }
                    if (!this._initted) {
                      if (U(this, t < 0 ? t : n, i, e))
                        return (this._tTime = 0), this;
                      if (d !== this._dur) return this.render(t, e, i);
                    }
                    for (
                      this._tTime = p,
                        this._time = n,
                        !this._act &&
                          this._ts &&
                          ((this._act = 1), (this._lazy = 0)),
                        this.ratio = h = (c || this._ease)(n / d),
                        this._from && (this.ratio = h = 1 - h),
                        !n || l || e || Oi(this, "onStart"),
                        r = this._pt;
                      r;

                    )
                      r.r(h, r.d), (r = r._next);
                    (f &&
                      f.render(t < 0 ? t : !n && u ? -Zt : f._dur * h, e, i)) ||
                      (this._startAt && (this._zTime = t)),
                      this._onUpdate &&
                        !e &&
                        (t < 0 &&
                          this._startAt &&
                          this._startAt.render(t, !0, i),
                        Oi(this, "onUpdate")),
                      this._repeat &&
                        s !== a &&
                        this.vars.onRepeat &&
                        !e &&
                        this.parent &&
                        Oi(this, "onRepeat"),
                      (p !== this._tDur && p) ||
                        this._tTime !== p ||
                        (t < 0 &&
                          this._startAt &&
                          !this._onUpdate &&
                          this._startAt.render(t, !0, !0),
                        (!t && d) ||
                          !(
                            (p === this._tDur && 0 < this._ts) ||
                            (!p && this._ts < 0)
                          ) ||
                          z(this, 1),
                        e ||
                          (t < 0 && !l) ||
                          (!p && !l) ||
                          (Oi(
                            this,
                            p === v ? "onComplete" : "onReverseComplete",
                            !0
                          ),
                          !this._prom ||
                            (p < v && 0 < this.timeScale()) ||
                            this._prom()));
                  }
                } else
                  !(function (t, e, i, n) {
                    var r,
                      s,
                      o,
                      a = t.ratio,
                      u =
                        e < 0 ||
                        (!e &&
                          ((!t._start &&
                            (function t(i) {
                              var e = i.parent;
                              return (
                                e &&
                                e._ts &&
                                e._initted &&
                                !e._lock &&
                                (e.rawTime() < 0 || t(e))
                              );
                            })(t)) ||
                            ((t._ts < 0 || t._dp._ts < 0) &&
                              "isFromStart" !== t.data &&
                              "isStart" !== t.data)))
                          ? 0
                          : 1,
                      h = t._rDelay,
                      f = 0;
                    if (
                      (h &&
                        t._repeat &&
                        ((f = bi(0, t._tDur, e)),
                        (s = wi(f, h)),
                        (o = wi(t._tTime, h)),
                        t._yoyo && 1 & s && (u = 1 - u),
                        s !== o &&
                          ((a = 1 - u),
                          t.vars.repeatRefresh &&
                            t._initted &&
                            t.invalidate())),
                      u !== a || n || t._zTime === Zt || (!e && t._zTime))
                    ) {
                      if (!t._initted && U(t, e, n, i)) return;
                      for (
                        o = t._zTime,
                          t._zTime = e || (i ? Zt : 0),
                          i = i || (e && !o),
                          t.ratio = u,
                          t._from && (u = 1 - u),
                          t._time = 0,
                          t._tTime = f,
                          r = t._pt;
                        r;

                      )
                        r.r(u, r.d), (r = r._next);
                      t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !i && Oi(t, "onUpdate"),
                        f && t._repeat && !i && t.parent && Oi(t, "onRepeat"),
                        (e >= t._tDur || e < 0) &&
                          t.ratio === u &&
                          (u && z(t, 1),
                          i ||
                            (Oi(t, u ? "onComplete" : "onReverseComplete", !0),
                            t._prom && t._prom()));
                    } else t._zTime || (t._zTime = e);
                  })(this, t, e, i);
                return this;
              }),
              (e.targets = function () {
                return this._targets;
              }),
              (e.invalidate = function () {
                return (
                  (this._pt =
                    this._op =
                    this._startAt =
                    this._onUpdate =
                    this._lazy =
                    this.ratio =
                      0),
                  (this._ptLookup = []),
                  this.timeline && this.timeline.invalidate(),
                  i.prototype.invalidate.call(this)
                );
              }),
              (e.kill = function (t, e) {
                if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
                  return (
                    (this._lazy = this._pt = 0), this.parent ? ot(this) : this
                  );
                if (this.timeline) {
                  var i = this.timeline.totalDuration();
                  return (
                    this.timeline.killTweensOf(
                      t,
                      e,
                      Ui && !0 !== Ui.vars.overwrite
                    )._first || ot(this),
                    this.parent &&
                      i !== this.timeline.totalDuration() &&
                      W(this, (this._dur * this.timeline._tDur) / i, 0, 1),
                    this
                  );
                }
                var n,
                  s,
                  o,
                  a,
                  u,
                  h,
                  f,
                  c = this._targets,
                  l = t ? xi(t) : c,
                  v = this._ptLookup,
                  d = this._pt;
                if (
                  (!e || "all" === e) &&
                  (function (t, e) {
                    for (
                      var i = t.length, n = i === e.length;
                      n && i-- && t[i] === e[i];

                    );
                    return i < 0;
                  })(c, l)
                )
                  return "all" === e && (this._pt = 0), ot(this);
                for (
                  n = this._op = this._op || [],
                    "all" !== e &&
                      (r(e) &&
                        ((u = {}),
                        M(e, function (t) {
                          return (u[t] = 1);
                        }),
                        (e = u)),
                      (e = (function (t, e) {
                        var i,
                          n,
                          r,
                          s,
                          o = t[0] ? y(t[0]).harness : 0,
                          a = o && o.aliases;
                        if (!a) return e;
                        for (n in ((i = mi({}, e)), a))
                          if ((n in i))
                            for (r = (s = a[n].split(",")).length; r--; )
                              i[s[r]] = i[n];
                        return i;
                      })(c, e))),
                    f = c.length;
                  f--;

                )
                  if (~l.indexOf(c[f]))
                    for (u in ((s = v[f]),
                    "all" === e
                      ? ((n[f] = e), (a = s), (o = {}))
                      : ((o = n[f] = n[f] || {}), (a = e)),
                    a))
                      (h = s && s[u]) &&
                        (("kill" in h.d && !0 !== h.d.kill(u)) ||
                          T(this, h, "_pt"),
                        delete s[u]),
                        "all" !== o && (o[u] = 1);
                return this._initted && !this._pt && d && ot(this), this;
              }),
              (s.to = function (t, e, i) {
                return new s(t, e, i);
              }),
              (s.from = function (t, e) {
                return new s(t, O(arguments, 1));
              }),
              (s.delayedCall = function (t, e, i, n) {
                return new s(e, 0, {
                  immediateRender: !1,
                  lazy: !1,
                  overwrite: !1,
                  delay: t,
                  onComplete: e,
                  onReverseComplete: e,
                  onCompleteParams: i,
                  onReverseCompleteParams: i,
                  callbackScope: n,
                });
              }),
              (s.fromTo = function (t, e, i) {
                return new s(t, O(arguments, 2));
              }),
              (s.set = function (t, e) {
                return (
                  (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e)
                );
              }),
              (s.killTweensOf = function (t, e, i) {
                return wt.killTweensOf(t, e, i);
              }),
              s
            );
          })(Yi);
        function $i(t, e, i) {
          return t.setAttribute(e, i);
        }
        function Ji(t, e, i, n) {
          n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
        }
        C(Hi.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0,
        }),
          M("staggerTo,staggerFrom,staggerFromTo", function (t) {
            Hi[t] = function () {
              var i = new Ni(),
                e = Mi.call(arguments, 0);
              return (
                e.splice("staggerFromTo" === t ? 5 : 4, 0, 0), i[t].apply(i, e)
              );
            };
          });
        var Ki = function (t, e, i) {
            return (t[e] = i);
          },
          tn = function (t, e, i) {
            return t[e](i);
          },
          nn = function (t, e, i, n) {
            return t[e](n.fp, i);
          },
          rn = function (t, e) {
            return s(t[e]) ? tn : h(t[e]) && t.setAttribute ? $i : Ki;
          },
          en = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
          },
          sn = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          on = function (t, e) {
            var i = e._pt,
              n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
              for (; i; )
                (n =
                  i.p +
                  (i.m
                    ? i.m(i.s + i.c * t)
                    : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
                  n),
                  (i = i._next);
              n += e.c;
            }
            e.set(e.t, e.p, n, e);
          },
          an = function (t, e) {
            for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
          },
          un = function (t, e, i, n) {
            for (var r, s = this._pt; s; )
              (r = s._next), s.p === n && s.modifier(t, e, i), (s = r);
          },
          hn = function (t) {
            for (var e, i, n = this._pt; n; )
              (i = n._next),
                (n.p === t && !n.op) || n.op === t
                  ? T(this, n, "_pt")
                  : n.dep || (e = 1),
                (n = i);
            return !e;
          },
          fn = function (t) {
            for (var e, i, n, r, s = t._pt; s; ) {
              for (e = s._next, i = n; i && i.pr > s.pr; ) i = i._next;
              (s._prev = i ? i._prev : r) ? (s._prev._next = s) : (n = s),
                (s._next = i) ? (i._prev = s) : (r = s),
                (s = e);
            }
            t._pt = n;
          },
          cn =
            ((ln.prototype.modifier = function (t, e, i) {
              (this.mSet = this.mSet || this.set),
                (this.set = Ji),
                (this.m = t),
                (this.mt = i),
                (this.tween = e);
            }),
            ln);
        function ln(t, e, i, n, r, s, o, a, u) {
          (this.t = e),
            (this.s = n),
            (this.c = r),
            (this.p = i),
            (this.r = s || en),
            (this.d = o || this),
            (this.set = a || Ki),
            (this.pr = u || 0),
            (this._next = t) && (t._prev = this);
        }
        M(
          gi +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
          function (t) {
            return (hi[t] = 1);
          }
        ),
          (ui.TweenMax = ui.TweenLite = Hi),
          (ui.TimelineLite = ui.TimelineMax = Ni),
          (wt = new Ni({
            sortChildren: !1,
            defaults: Ut,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (Qt.stringFilter = ct);
        var vn = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            e.forEach(function (t) {
              return (function (t) {
                var e = (t = (!t.name && t.default) || t).name,
                  i = s(t),
                  n =
                    e && !i && t.init
                      ? function () {
                          this._props = [];
                        }
                      : t,
                  r = {
                    init: w,
                    render: an,
                    add: Wi,
                    kill: hn,
                    modifier: un,
                    rawVars: 0,
                  },
                  o = {
                    targetTest: 0,
                    get: 0,
                    getSetter: rn,
                    aliases: {},
                    register: 0,
                  };
                if ((Ai(), t !== n)) {
                  if (li[e]) return;
                  C(n, C(R(t, r), o)),
                    mi(n.prototype, mi(r, R(t, o))),
                    (li[(n.prop = e)] = n),
                    t.targetTest && (pi.push(n), (hi[e] = 1)),
                    (e =
                      ("css" === e
                        ? "CSS"
                        : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                }
                m(e, n), t.register && t.register(gn, n, cn);
              })(t);
            });
          },
          timeline: function (t) {
            return new Ni(t);
          },
          getTweensOf: function (t, e) {
            return wt.getTweensOf(t, e);
          },
          getProperty: function (t, i, e, n) {
            r(t) && (t = xi(t)[0]);
            var s = y(t || {}).get,
              o = e ? F : S;
            return (
              "native" === e && (e = ""),
              t
                ? i
                  ? o(((li[i] && li[i].get) || s)(t, i, e, n))
                  : function (i, e, n) {
                      return o(((li[i] && li[i].get) || s)(t, i, e, n));
                    }
                : t
            );
          },
          quickSetter: function (t, e, i) {
            if (1 < (t = xi(t)).length) {
              var n = t.map(function (t) {
                  return gn.quickSetter(t, e, i);
                }),
                r = n.length;
              return function (t) {
                for (var e = r; e--; ) n[e](t);
              };
            }
            t = t[0] || {};
            var s = li[e],
              o = y(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              u = s
                ? function (n) {
                    var e = new s();
                    (kt._pt = 0),
                      e.init(t, i ? n + i : n, kt, 0, [t]),
                      e.render(1, e),
                      kt._pt && an(1, kt);
                  }
                : o.set(t, a);
            return s
              ? u
              : function (n) {
                  return u(t, a, i ? n + i : n, o, 1);
                };
          },
          isTweening: function (t) {
            return 0 < wt.getTweensOf(t, !0).length;
          },
          defaults: function (t) {
            return (
              t && t.ease && (t.ease = zi(t.ease, Ut.ease)), I(Ut, t || {})
            );
          },
          config: function (t) {
            return I(Qt, t || {});
          },
          registerEffect: function (t) {
            var i = t.name,
              n = t.effect,
              e = t.plugins,
              r = t.defaults,
              s = t.extendTimeline;
            (e || "").split(",").forEach(function (t) {
              return (
                t &&
                !li[t] &&
                !ui[t] &&
                g(i + " effect requires " + t + " plugin.")
              );
            }),
              (vi[i] = function (t, e, i) {
                return n(xi(t), C(e || {}, r), i);
              }),
              s &&
                (Ni.prototype[i] = function (t, e, n) {
                  return this.add(vi[i](t, f(e) ? e : (n = e) && {}, this), n);
                });
          },
          registerEase: function (t, e) {
            Ii[t] = zi(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? zi(t, e) : Ii;
          },
          getById: function (t) {
            return wt.getById(t);
          },
          exportRoot: function (e, t) {
            void 0 === e && (e = {});
            var i,
              n,
              r = new Ni(e);
            for (
              r.smoothChildTiming = c(e.smoothChildTiming),
                wt.remove(r),
                r._dp = 0,
                r._time = r._tTime = wt._time,
                i = wt._first;
              i;

            )
              (n = i._next),
                (!t &&
                  !i._dur &&
                  i instanceof Hi &&
                  i.vars.onComplete === i._targets[0]) ||
                  N(r, i, i._start - i._delay),
                (i = n);
            return N(wt, r, 0), r;
          },
          utils: {
            wrap: function t(e, i, n) {
              var r = i - e;
              return ti(e)
                ? rt(e, t(0, e.length), i)
                : q(n, function (t) {
                    return ((r + ((t - e) % r)) % r) + e;
                  });
            },
            wrapYoyo: function t(e, i, n) {
              var r = i - e,
                s = 2 * r;
              return ti(e)
                ? rt(e, t(0, e.length - 1), i)
                : q(n, function (t) {
                    return (
                      e + (r < (t = (s + ((t - e) % s)) % s || 0) ? s - t : t)
                    );
                  });
            },
            distribute: K,
            random: nt,
            snap: it,
            normalize: function (t, e, i) {
              return _i(t, e, 0, 1, i);
            },
            getUnit: G,
            clamp: function (e, t, i) {
              return q(i, function (i) {
                return bi(e, t, i);
              });
            },
            splitColor: ut,
            toArray: xi,
            mapRange: _i,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (e, t) {
              return function (i) {
                return e(parseFloat(i)) + (t || G(i));
              };
            },
            interpolate: function t(e, i, n, s) {
              var o = isNaN(e + i)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * i;
                  };
              if (!o) {
                var a,
                  u,
                  h,
                  f,
                  c,
                  l = r(e),
                  v = {};
                if ((!0 === n && (s = 1) && (n = null), l))
                  (e = { p: e }), (i = { p: i });
                else if (ti(e) && !ti(i)) {
                  for (h = [], f = e.length, c = f - 2, u = 1; u < f; u++)
                    h.push(t(e[u - 1], e[u]));
                  f--,
                    (o = function (t) {
                      t *= f;
                      var e = Math.min(c, ~~t);
                      return h[e](t - e);
                    }),
                    (n = i);
                } else s || (e = mi(ti(e) ? [] : {}, e));
                if (!h) {
                  for (a in i) Wi.call(v, e, a, "get", i[a]);
                  o = function (t) {
                    return an(t, v) || (l ? e.p : e);
                  };
                }
              }
              return q(n, o);
            },
            shuffle: J,
          },
          install: d,
          effects: vi,
          ticker: Ci,
          updateRoot: Ni.updateRoot,
          plugins: li,
          globalTimeline: wt,
          core: {
            PropTween: cn,
            globals: m,
            Tween: Hi,
            Timeline: Ni,
            Animation: Yi,
            getCache: y,
            _removeLinkedListItem: T,
            suppressOverwrites: function (t) {
              return (mt = t);
            },
          },
        };
        function dn(t, e) {
          for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
            i = i._next;
          return i;
        }
        function pn(t, i) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, n, e) {
              e._onInit = function (t) {
                var e, s;
                if (
                  (r(n) &&
                    ((e = {}),
                    M(n, function (t) {
                      return (e[t] = 1);
                    }),
                    (n = e)),
                  i)
                ) {
                  for (s in ((e = {}), n)) e[s] = i(n[s]);
                  n = e;
                }
                !(function (t, e) {
                  var i,
                    n,
                    r,
                    s = t._targets;
                  for (i in e)
                    for (n = s.length; n--; )
                      (r = (r = t._ptLookup[n][i]) && r.d) &&
                        (r._pt && (r = dn(r, i)),
                        r && r.modifier && r.modifier(e[i], t, s[n], i));
                })(t, n);
              };
            },
          };
        }
        M("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (vn[t] = Hi[t]);
        }),
          Ci.add(Ni.updateRoot),
          (kt = vn.to({}, { duration: 0 }));
        var gn =
          vn.registerPlugin(
            {
              name: "attr",
              init: function (t, e, i, n, r) {
                var s, o;
                for (s in e)
                  (o = this.add(
                    t,
                    "setAttribute",
                    (t.getAttribute(s) || 0) + "",
                    e[s],
                    n,
                    r,
                    0,
                    0,
                    s
                  )) && (o.op = s),
                    this._props.push(s);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
              },
            },
            pn("roundProps", tt),
            pn("modifiers"),
            pn("snap", it)
          ) || vn;
        function mn(t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        }
        function wn(t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        }
        function yn(t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        }
        function bn(t, e) {
          var i = e.s + e.c * t;
          e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
        }
        function Mn(t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        }
        function xn(t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        }
        function _n(t, e, i) {
          return (t.style[e] = i);
        }
        function On(t, e, i) {
          return t.style.setProperty(e, i);
        }
        function kn(t, e, i) {
          return (t._gsap[e] = i);
        }
        function Pn(t, e, i) {
          return (t._gsap.scaleX = t._gsap.scaleY = i);
        }
        function Sn(t, e, i, n, r) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = i), s.renderTransform(r, s);
        }
        function Fn(t, e, i, n, r) {
          var s = t._gsap;
          (s[e] = i), s.renderTransform(r, s);
        }
        function Cn(t, e) {
          var i = $n.createElementNS
            ? $n.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : $n.createElement(t);
          return i.style ? i : $n.createElement(t);
        }
        function An(t, e, i) {
          var n = getComputedStyle(t);
          return (
            n[e] ||
            n.getPropertyValue(e.replace(kr, "-$1").toLowerCase()) ||
            n.getPropertyValue(e) ||
            (!i && An(t, Rr(e) || e, 1)) ||
            ""
          );
        }
        function In() {
          void 0 !== i &&
            i.document &&
            (($n = i.document),
            (Jn = $n.documentElement),
            (tr = Cn("div") || { style: {} }),
            Cn("div"),
            (Cr = Rr(Cr)),
            (Ar = Cr + "Origin"),
            (tr.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (nr = !!Rr("perspective")),
            (Kn = 1));
        }
        function Rn(t) {
          var e,
            i = Cn(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            n = this.parentNode,
            r = this.nextSibling,
            s = this.style.cssText;
          if (
            (Jn.appendChild(i),
            i.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (e = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = Rn);
            } catch (t) {}
          else this._gsapBBox && (e = this._gsapBBox());
          return (
            n && (r ? n.insertBefore(this, r) : n.appendChild(this)),
            Jn.removeChild(i),
            (this.style.cssText = s),
            e
          );
        }
        function En(t, e) {
          for (var i = e.length; i--; )
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
        }
        function Tn(e) {
          var t;
          try {
            t = e.getBBox();
          } catch (i) {
            t = Rn.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === Rn ||
              (t = Rn.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +En(e, ["x", "cx", "x1"]) || 0,
                  y: +En(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        }
        function zn(t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Tn(t));
        }
        function Dn(t, e) {
          if (e) {
            var i = t.style;
            e in Mr && e !== Ar && (e = Cr),
              i.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  i.removeProperty(e.replace(kr, "-$1").toLowerCase()))
                : i.removeAttribute(e);
          }
        }
        function Bn(t, e, i, n, r, s) {
          var o = new cn(t._pt, e, i, 0, 1, s ? xn : Mn);
          return ((t._pt = o).b = n), (o.e = r), t._props.push(i), o;
        }
        function Ln(t, e, i, n) {
          var r,
            s,
            o,
            a,
            u = parseFloat(i) || 0,
            h = (i + "").trim().substr((u + "").length) || "px",
            f = tr.style,
            c = Pr.test(e),
            l = "svg" === t.tagName.toLowerCase(),
            v = (l ? "client" : "offset") + (c ? "Width" : "Height"),
            d = "px" === n,
            p = "%" === n;
          return n === h || !u || Er[n] || Er[h]
            ? u
            : ("px" === h || d || (u = Ln(t, e, i, "px")),
              (a = t.getCTM && zn(t)),
              (!p && "%" !== h) || (!Mr[e] && !~e.indexOf("adius"))
                ? ((f[c ? "width" : "height"] = 100 + (d ? h : n)),
                  (s =
                    ~e.indexOf("adius") || ("em" === n && t.appendChild && !l)
                      ? t
                      : t.parentNode),
                  a && (s = (t.ownerSVGElement || {}).parentNode),
                  (s && s !== $n && s.appendChild) || (s = $n.body),
                  (o = s._gsap) && p && o.width && c && o.time === Ci.time
                    ? x((u / o.width) * 100)
                    : ((!p && "%" !== h) || (f.position = An(t, "position")),
                      s === t && (f.position = "static"),
                      s.appendChild(tr),
                      (r = tr[v]),
                      s.removeChild(tr),
                      (f.position = "absolute"),
                      c && p && (((o = y(s)).time = Ci.time), (o.width = s[v])),
                      x(d ? (r * u) / 100 : r && u ? (100 / r) * u : 0)))
                : ((r = a ? t.getBBox()[c ? "width" : "height"] : t[v]),
                  x(p ? (u / r) * 100 : (u / 100) * r)));
        }
        function Xn(t, e, i, n) {
          var r;
          return (
            Kn || In(),
            e in Fr &&
              "transform" !== e &&
              ~(e = Fr[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            Mr[e] && "transform" !== e
              ? ((r = Lr(t, n)),
                (r =
                  "transformOrigin" !== e
                    ? r[e]
                    : Xr(An(t, Ar)) + " " + r.zOrigin + "px"))
              : ((r = t.style[e]) &&
                  "auto" !== r &&
                  !n &&
                  !~(r + "").indexOf("calc(")) ||
                (r =
                  (zr[e] && zr[e](t, e, i)) ||
                  An(t, e) ||
                  b(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            i && !~(r + "").trim().indexOf(" ") ? Ln(t, e, r, i) + i : r
          );
        }
        function Yn(t, e, i, n) {
          if (!i || "none" === i) {
            var r = Rr(e, t, 1),
              s = r && An(t, r, 1);
            s && s !== i
              ? ((e = r), (i = s))
              : "borderColor" === e && (i = An(t, "borderTopColor"));
          }
          var o,
            a,
            u,
            h,
            f,
            c,
            l,
            v,
            d,
            p,
            g,
            m,
            w = new cn(this._pt, t.style, e, 0, 1, on),
            y = 0,
            b = 0;
          if (
            ((w.b = i),
            (w.e = n),
            (i += ""),
            "auto" == (n += "") &&
              ((t.style[e] = n), (n = An(t, e) || n), (t.style[e] = i)),
            ct((o = [i, n])),
            (n = o[1]),
            (u = (i = o[0]).match(ri) || []),
            (n.match(ri) || []).length)
          ) {
            for (; (a = ri.exec(n)); )
              (l = a[0]),
                (d = n.substring(y, a.index)),
                f
                  ? (f = (f + 1) % 5)
                  : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) ||
                    (f = 1),
                l !== (c = u[b++] || "") &&
                  ((h = parseFloat(c) || 0),
                  (g = c.substr((h + "").length)),
                  (m = "=" === l.charAt(1) ? +(l.charAt(0) + "1") : 0) &&
                    (l = l.substr(2)),
                  (v = parseFloat(l)),
                  (p = l.substr((v + "").length)),
                  (y = ri.lastIndex - p.length),
                  p ||
                    ((p = p || Qt.units[e] || g),
                    y === n.length && ((n += p), (w.e += p))),
                  g !== p && (h = Ln(t, e, c, p) || 0),
                  (w._pt = {
                    _next: w._pt,
                    p: d || 1 === b ? d : ",",
                    s: h,
                    c: m ? m * v : v - h,
                    m: (f && f < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            w.c = y < n.length ? n.substring(y, n.length) : "";
          } else w.r = "display" === e && "none" === n ? xn : Mn;
          return si.test(n) && (w.e = 0), (this._pt = w);
        }
        function jn(t) {
          var e = t.split(" "),
            i = e[0],
            n = e[1] || "50%";
          return (
            ("top" !== i && "bottom" !== i && "left" !== n && "right" !== n) ||
              ((t = i), (i = n), (n = t)),
            (e[0] = Tr[i] || i),
            (e[1] = Tr[n] || n),
            e.join(" ")
          );
        }
        function Nn(t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var i,
              n,
              r,
              s = e.t,
              o = s.style,
              a = e.u,
              u = s._gsap;
            if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
            else
              for (r = (a = a.split(",")).length; -1 < --r; )
                (i = a[r]),
                  Mr[i] && ((n = 1), (i = "transformOrigin" === i ? Ar : Cr)),
                  Dn(s, i);
            n &&
              (Dn(s, Cr),
              u &&
                (u.svg && s.removeAttribute("transform"),
                Lr(s, 1),
                (u.uncache = 1)));
          }
        }
        function Qn(t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        }
        function Un(t) {
          var e = An(t, Cr);
          return Qn(e) ? Dr : e.substr(7).match(ni).map(x);
        }
        function Wn(t, e) {
          var i,
            n,
            r,
            s,
            o = t._gsap || y(t),
            a = t.style,
            u = Un(t);
          return o.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (r = t.transform.baseVal.consolidate().matrix).a,
                r.b,
                r.c,
                r.d,
                r.e,
                r.f,
              ]).join(",")
              ? Dr
              : u
            : (u !== Dr ||
                t.offsetParent ||
                t === Jn ||
                o.svg ||
                ((r = a.display),
                (a.display = "block"),
                ((i = t.parentNode) && t.offsetParent) ||
                  ((s = 1), (n = t.nextSibling), Jn.appendChild(t)),
                (u = Un(t)),
                r ? (a.display = r) : Dn(t, "display"),
                s &&
                  (n
                    ? i.insertBefore(t, n)
                    : i
                    ? i.appendChild(t)
                    : Jn.removeChild(t))),
              e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        }
        function Zn(t, e, i, n, r, s) {
          var o,
            a,
            u,
            h = t._gsap,
            f = r || Wn(t, !0),
            c = h.xOrigin || 0,
            l = h.yOrigin || 0,
            v = h.xOffset || 0,
            d = h.yOffset || 0,
            p = f[0],
            g = f[1],
            m = f[2],
            w = f[3],
            y = f[4],
            b = f[5],
            M = e.split(" "),
            x = parseFloat(M[0]) || 0,
            _ = parseFloat(M[1]) || 0;
          i
            ? f !== Dr &&
              (a = p * w - g * m) &&
              ((u = x * (-g / a) + _ * (p / a) - (p * b - g * y) / a),
              (x = x * (w / a) + _ * (-m / a) + (m * b - w * y) / a),
              (_ = u))
            : ((x =
                (o = Tn(t)).x + (~M[0].indexOf("%") ? (x / 100) * o.width : x)),
              (_ =
                o.y +
                (~(M[1] || M[0]).indexOf("%") ? (_ / 100) * o.height : _))),
            n || (!1 !== n && h.smooth)
              ? ((y = x - c),
                (b = _ - l),
                (h.xOffset = v + (y * p + b * m) - y),
                (h.yOffset = d + (y * g + b * w) - b))
              : (h.xOffset = h.yOffset = 0),
            (h.xOrigin = x),
            (h.yOrigin = _),
            (h.smooth = !!n),
            (h.origin = e),
            (h.originIsAbsolute = !!i),
            (t.style[Ar] = "0px 0px"),
            s &&
              (Bn(s, h, "xOrigin", c, x),
              Bn(s, h, "yOrigin", l, _),
              Bn(s, h, "xOffset", v, h.xOffset),
              Bn(s, h, "yOffset", d, h.yOffset)),
            t.setAttribute("data-svg-origin", x + " " + _);
        }
        function Vn(t, e, i) {
          var n = G(e);
          return x(parseFloat(e) + parseFloat(Ln(t, "x", i + "px", n))) + n;
        }
        function qn(t, e, i, n, s, o) {
          var a,
            u,
            h = 360,
            f = r(s),
            c = parseFloat(s) * (f && ~s.indexOf("rad") ? xr : 1),
            l = o ? c * o : c - n,
            v = n + l + "deg";
          return (
            f &&
              ("short" === (a = s.split("_")[1]) &&
                (l %= h) != l % 180 &&
                (l += l < 0 ? h : -h),
              "cw" === a && l < 0
                ? (l = ((l + 36e9) % h) - ~~(l / h) * h)
                : "ccw" === a &&
                  0 < l &&
                  (l = ((l - 36e9) % h) - ~~(l / h) * h)),
            (t._pt = u = new cn(t._pt, e, i, n, l, wn)),
            (u.e = v),
            (u.u = "deg"),
            t._props.push(i),
            u
          );
        }
        function Gn(t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        }
        function Hn(t, e, i) {
          var n,
            r,
            s,
            o,
            a,
            u,
            h,
            f = Gn({}, i._gsap),
            c = i.style;
          for (r in (f.svg
            ? ((s = i.getAttribute("transform")),
              i.setAttribute("transform", ""),
              (c[Cr] = e),
              (n = Lr(i, 1)),
              Dn(i, Cr),
              i.setAttribute("transform", s))
            : ((s = getComputedStyle(i)[Cr]),
              (c[Cr] = e),
              (n = Lr(i, 1)),
              (c[Cr] = s)),
          Mr))
            (s = f[r]) !== (o = n[r]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
              ((a = G(s) !== (h = G(o)) ? Ln(i, r, s, h) : parseFloat(s)),
              (u = parseFloat(o)),
              (t._pt = new cn(t._pt, n, r, a, u - a, mn)),
              (t._pt.u = h || 0),
              t._props.push(r));
          Gn(n, f);
        }
        (Hi.version = Ni.version = gn.version = "3.6.1"), (_t = 1), l() && Ai();
        var $n,
          Jn,
          Kn,
          tr,
          ir,
          nr,
          rr = Ii.Power0,
          er = Ii.Power1,
          sr = Ii.Power2,
          or = Ii.Power3,
          ar = Ii.Power4,
          ur = Ii.Linear,
          hr = Ii.Quad,
          fr = Ii.Cubic,
          cr = Ii.Quart,
          lr = Ii.Quint,
          vr = Ii.Strong,
          dr = Ii.Elastic,
          pr = Ii.Back,
          gr = Ii.SteppedEase,
          mr = Ii.Bounce,
          wr = Ii.Sine,
          yr = Ii.Expo,
          br = Ii.Circ,
          Mr = {},
          xr = 180 / Math.PI,
          _r = Math.PI / 180,
          Or = Math.atan2,
          kr = /([A-Z])/g,
          Pr = /(?:left|right|width|margin|padding|x)/i,
          Sr = /[\s,\(]\S/,
          Fr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          Cr = "transform",
          Ar = Cr + "Origin",
          Ir = "O,Moz,ms,Ms,Webkit".split(","),
          Rr = function (t, e, i) {
            var n = (e || tr).style,
              r = 5;
            if (t in n && !i) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              r-- && !(Ir[r] + t in n);

            );
            return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? Ir[r] : "") + t;
          },
          Er = { deg: 1, rad: 1, turn: 1 },
          Tr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          zr = {
            clearProps: function (t, e, i, n, r) {
              if ("isFromStart" !== r.data) {
                var s = (t._pt = new cn(t._pt, e, i, 0, 0, Nn));
                return (
                  (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(i), 1
                );
              }
            },
          },
          Dr = [1, 0, 0, 1, 0, 0],
          Br = {},
          Lr = function (t, e) {
            var i = t._gsap || new Xi(t);
            if ("x" in i && !e && !i.uncache) return i;
            var n,
              r,
              s,
              o,
              a,
              u,
              h,
              f,
              c,
              l,
              v,
              d,
              p,
              g,
              m,
              w,
              y,
              b,
              M,
              _,
              O,
              k,
              P,
              S,
              F,
              C,
              A,
              I,
              R,
              E,
              T,
              z,
              D = t.style,
              B = i.scaleX < 0,
              L = "deg",
              X = An(t, Ar) || "0";
            return (
              (n = r = s = u = h = f = c = l = v = 0),
              (o = a = 1),
              (i.svg = !(!t.getCTM || !zn(t))),
              (g = Wn(t, i.svg)),
              i.svg &&
                ((S = !i.uncache && !e && t.getAttribute("data-svg-origin")),
                Zn(t, S || X, !!S || i.originIsAbsolute, !1 !== i.smooth, g)),
              (d = i.xOrigin || 0),
              (p = i.yOrigin || 0),
              g !== Dr &&
                ((b = g[0]),
                (M = g[1]),
                (_ = g[2]),
                (O = g[3]),
                (n = k = g[4]),
                (r = P = g[5]),
                6 === g.length
                  ? ((o = Math.sqrt(b * b + M * M)),
                    (a = Math.sqrt(O * O + _ * _)),
                    (u = b || M ? Or(M, b) * xr : 0),
                    (c = _ || O ? Or(_, O) * xr + u : 0) &&
                      (a *= Math.abs(Math.cos(c * _r))),
                    i.svg &&
                      ((n -= d - (d * b + p * _)), (r -= p - (d * M + p * O))))
                  : ((z = g[6]),
                    (E = g[7]),
                    (A = g[8]),
                    (I = g[9]),
                    (R = g[10]),
                    (T = g[11]),
                    (n = g[12]),
                    (r = g[13]),
                    (s = g[14]),
                    (h = (m = Or(z, R)) * xr),
                    m &&
                      ((S = k * (w = Math.cos(-m)) + A * (y = Math.sin(-m))),
                      (F = P * w + I * y),
                      (C = z * w + R * y),
                      (A = k * -y + A * w),
                      (I = P * -y + I * w),
                      (R = z * -y + R * w),
                      (T = E * -y + T * w),
                      (k = S),
                      (P = F),
                      (z = C)),
                    (f = (m = Or(-_, R)) * xr),
                    m &&
                      ((w = Math.cos(-m)),
                      (T = O * (y = Math.sin(-m)) + T * w),
                      (b = S = b * w - A * y),
                      (M = F = M * w - I * y),
                      (_ = C = _ * w - R * y)),
                    (u = (m = Or(M, b)) * xr),
                    m &&
                      ((S = b * (w = Math.cos(m)) + M * (y = Math.sin(m))),
                      (F = k * w + P * y),
                      (M = M * w - b * y),
                      (P = P * w - k * y),
                      (b = S),
                      (k = F)),
                    h &&
                      359.9 < Math.abs(h) + Math.abs(u) &&
                      ((h = u = 0), (f = 180 - f)),
                    (o = x(Math.sqrt(b * b + M * M + _ * _))),
                    (a = x(Math.sqrt(P * P + z * z))),
                    (m = Or(k, P)),
                    (c = 2e-4 < Math.abs(m) ? m * xr : 0),
                    (v = T ? 1 / (T < 0 ? -T : T) : 0)),
                i.svg &&
                  ((S = t.getAttribute("transform")),
                  (i.forceCSS =
                    t.setAttribute("transform", "") || !Qn(An(t, Cr))),
                  S && t.setAttribute("transform", S))),
              90 < Math.abs(c) &&
                Math.abs(c) < 270 &&
                (B
                  ? ((o *= -1),
                    (c += u <= 0 ? 180 : -180),
                    (u += u <= 0 ? 180 : -180))
                  : ((a *= -1), (c += c <= 0 ? 180 : -180))),
              (i.x =
                n -
                ((i.xPercent =
                  n &&
                  (i.xPercent ||
                    (Math.round(t.offsetWidth / 2) === Math.round(-n)
                      ? -50
                      : 0)))
                  ? (t.offsetWidth * i.xPercent) / 100
                  : 0) +
                "px"),
              (i.y =
                r -
                ((i.yPercent =
                  r &&
                  (i.yPercent ||
                    (Math.round(t.offsetHeight / 2) === Math.round(-r)
                      ? -50
                      : 0)))
                  ? (t.offsetHeight * i.yPercent) / 100
                  : 0) +
                "px"),
              (i.z = s + "px"),
              (i.scaleX = x(o)),
              (i.scaleY = x(a)),
              (i.rotation = x(u) + L),
              (i.rotationX = x(h) + L),
              (i.rotationY = x(f) + L),
              (i.skewX = c + L),
              (i.skewY = l + L),
              (i.transformPerspective = v + "px"),
              (i.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (D[Ar] = Xr(X)),
              (i.xOffset = i.yOffset = 0),
              (i.force3D = Qt.force3D),
              (i.renderTransform = i.svg ? Wr : nr ? Ur : Yr),
              (i.uncache = 0),
              i
            );
          },
          Xr = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          Yr = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              Ur(t, e);
          },
          jr = "0deg",
          Nr = "0px",
          Qr = ") ",
          Ur = function (t, e) {
            var i = e || this,
              n = i.xPercent,
              r = i.yPercent,
              s = i.x,
              o = i.y,
              a = i.z,
              u = i.rotation,
              h = i.rotationY,
              f = i.rotationX,
              c = i.skewX,
              l = i.skewY,
              v = i.scaleX,
              d = i.scaleY,
              p = i.transformPerspective,
              g = i.force3D,
              m = i.target,
              w = i.zOrigin,
              y = "",
              b = ("auto" === g && t && 1 !== t) || !0 === g;
            if (w && (f !== jr || h !== jr)) {
              var M,
                x = parseFloat(h) * _r,
                _ = Math.sin(x),
                O = Math.cos(x);
              (x = parseFloat(f) * _r),
                (s = Vn(m, s, _ * (M = Math.cos(x)) * -w)),
                (o = Vn(m, o, -Math.sin(x) * -w)),
                (a = Vn(m, a, O * M * -w + w));
            }
            p !== Nr && (y += "perspective(" + p + Qr),
              (n || r) && (y += "translate(" + n + "%, " + r + "%) "),
              (!b && s === Nr && o === Nr && a === Nr) ||
                (y +=
                  a !== Nr || b
                    ? "translate3d(" + s + ", " + o + ", " + a + ") "
                    : "translate(" + s + ", " + o + Qr),
              u !== jr && (y += "rotate(" + u + Qr),
              h !== jr && (y += "rotateY(" + h + Qr),
              f !== jr && (y += "rotateX(" + f + Qr),
              (c === jr && l === jr) || (y += "skew(" + c + ", " + l + Qr),
              (1 === v && 1 === d) || (y += "scale(" + v + ", " + d + Qr),
              (m.style[Cr] = y || "translate(0, 0)");
          },
          Wr = function (t, e) {
            var i,
              n,
              r,
              s,
              o,
              a = e || this,
              u = a.xPercent,
              h = a.yPercent,
              f = a.x,
              c = a.y,
              l = a.rotation,
              v = a.skewX,
              d = a.skewY,
              p = a.scaleX,
              g = a.scaleY,
              m = a.target,
              w = a.xOrigin,
              y = a.yOrigin,
              b = a.xOffset,
              M = a.yOffset,
              _ = a.forceCSS,
              O = parseFloat(f),
              k = parseFloat(c);
            (l = parseFloat(l)),
              (v = parseFloat(v)),
              (d = parseFloat(d)) && ((v += d = parseFloat(d)), (l += d)),
              l || v
                ? ((l *= _r),
                  (v *= _r),
                  (i = Math.cos(l) * p),
                  (n = Math.sin(l) * p),
                  (r = Math.sin(l - v) * -g),
                  (s = Math.cos(l - v) * g),
                  v &&
                    ((d *= _r),
                    (o = Math.tan(v - d)),
                    (r *= o = Math.sqrt(1 + o * o)),
                    (s *= o),
                    d &&
                      ((o = Math.tan(d)),
                      (i *= o = Math.sqrt(1 + o * o)),
                      (n *= o))),
                  (i = x(i)),
                  (n = x(n)),
                  (r = x(r)),
                  (s = x(s)))
                : ((i = p), (s = g), (n = r = 0)),
              ((O && !~(f + "").indexOf("px")) ||
                (k && !~(c + "").indexOf("px"))) &&
                ((O = Ln(m, "x", f, "px")), (k = Ln(m, "y", c, "px"))),
              (w || y || b || M) &&
                ((O = x(O + w - (w * i + y * r) + b)),
                (k = x(k + y - (w * n + y * s) + M))),
              (u || h) &&
                ((O = x(O + (u / 100) * (o = m.getBBox()).width)),
                (k = x(k + (h / 100) * o.height))),
              (o =
                "matrix(" +
                i +
                "," +
                n +
                "," +
                r +
                "," +
                s +
                "," +
                O +
                "," +
                k +
                ")"),
              m.setAttribute("transform", o),
              _ && (m.style[Cr] = o);
          };
        M("padding,margin,Width,Radius", function (e, t) {
          var i = "Right",
            n = "Bottom",
            r = "Left",
            s = (
              t < 3 ? ["Top", i, n, r] : ["Top" + r, "Top" + i, n + i, n + r]
            ).map(function (i) {
              return t < 2 ? e + i : "border" + i + e;
            });
          zr[1 < t ? "border" + e : e] = function (e, t, i, n, r) {
            var o, a;
            if (arguments.length < 4)
              return (
                (o = s.map(function (t) {
                  return Xn(e, t, i);
                })),
                5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
              );
            (o = (n + "").split(" ")),
              (a = {}),
              s.forEach(function (t, e) {
                return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
              }),
              e.init(t, a, r);
          };
        });
        var Zr,
          Vr,
          qr = {
            name: "css",
            register: In,
            targetTest: function (t) {
              return t.style && t.nodeType;
            },
            init: function (t, e, i, n, r) {
              var s,
                o,
                a,
                u,
                h,
                f,
                c,
                l,
                v,
                d,
                g,
                m,
                w,
                y,
                b,
                M = this._props,
                x = t.style,
                _ = i.vars.startAt;
              for (c in (Kn || In(), e))
                if (
                  "autoRound" !== c &&
                  ((o = e[c]), !li[c] || !Qi(c, e, i, n, t, r))
                )
                  if (
                    ((h = typeof o),
                    (f = zr[c]),
                    "function" === h && (h = typeof (o = o.call(i, n, t, r))),
                    "string" === h && ~o.indexOf("random(") && (o = et(o)),
                    f)
                  )
                    f(this, t, c, o, i) && (b = 1);
                  else if ("--" === c.substr(0, 2))
                    (s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
                      (o += ""),
                      (Si.lastIndex = 0),
                      Si.test(s) || ((l = G(s)), (v = G(o))),
                      v ? l !== v && (s = Ln(t, c, s, v) + v) : l && (o += l),
                      this.add(x, "setProperty", s, o, n, r, 0, 0, c);
                  else if ("undefined" !== h) {
                    if (
                      (_ && c in _
                        ? ((s =
                            "function" == typeof _[c]
                              ? _[c].call(i, n, t, r)
                              : _[c]),
                          c in Qt.units && !G(s) && (s += Qt.units[c]),
                          "=" === (s + "").charAt(1) && (s = Xn(t, c)))
                        : (s = Xn(t, c)),
                      (u = parseFloat(s)),
                      (d =
                        "string" === h && "=" === o.charAt(1)
                          ? +(o.charAt(0) + "1")
                          : 0) && (o = o.substr(2)),
                      (a = parseFloat(o)),
                      c in Fr &&
                        ("autoAlpha" === c &&
                          (1 === u &&
                            "hidden" === Xn(t, "visibility") &&
                            a &&
                            (u = 0),
                          Bn(
                            this,
                            x,
                            "visibility",
                            u ? "inherit" : "hidden",
                            a ? "inherit" : "hidden",
                            !a
                          )),
                        "scale" !== c &&
                          "transform" !== c &&
                          ~(c = Fr[c]).indexOf(",") &&
                          (c = c.split(",")[0])),
                      (g = c in Mr))
                    )
                      if (
                        (m ||
                          (((w = t._gsap).renderTransform &&
                            !e.parseTransform) ||
                            Lr(t, e.parseTransform),
                          (y = !1 !== e.smoothOrigin && w.smooth),
                          ((m = this._pt =
                            new cn(
                              this._pt,
                              x,
                              Cr,
                              0,
                              1,
                              w.renderTransform,
                              w,
                              0,
                              -1
                            )).dep = 1)),
                        "scale" === c)
                      )
                        (this._pt = new cn(
                          this._pt,
                          w,
                          "scaleY",
                          w.scaleY,
                          d ? d * a : a - w.scaleY
                        )),
                          M.push("scaleY", c),
                          (c += "X");
                      else {
                        if ("transformOrigin" === c) {
                          (o = jn(o)),
                            w.svg
                              ? Zn(t, o, 0, y, 0, this)
                              : ((v = parseFloat(o.split(" ")[2]) || 0) !==
                                  w.zOrigin &&
                                  Bn(this, w, "zOrigin", w.zOrigin, v),
                                Bn(this, x, c, Xr(s), Xr(o)));
                          continue;
                        }
                        if ("svgOrigin" === c) {
                          Zn(t, o, 1, y, 0, this);
                          continue;
                        }
                        if (c in Br) {
                          qn(this, w, c, u, o, d);
                          continue;
                        }
                        if ("smoothOrigin" === c) {
                          Bn(this, w, "smooth", w.smooth, o);
                          continue;
                        }
                        if ("force3D" === c) {
                          w[c] = o;
                          continue;
                        }
                        if ("transform" === c) {
                          Hn(this, o, t);
                          continue;
                        }
                      }
                    else c in x || (c = Rr(c) || c);
                    if (
                      g ||
                      ((a || 0 === a) &&
                        (u || 0 === u) &&
                        !Sr.test(o) &&
                        c in x)
                    )
                      (a = a || 0),
                        (l = (s + "").substr((u + "").length)) !==
                          (v = G(o) || (c in Qt.units ? Qt.units[c] : l)) &&
                          (u = Ln(t, c, s, v)),
                        (this._pt = new cn(
                          this._pt,
                          g ? w : x,
                          c,
                          u,
                          d ? d * a : a - u,
                          g ||
                          ("px" !== v && "zIndex" !== c) ||
                          !1 === e.autoRound
                            ? mn
                            : bn
                        )),
                        (this._pt.u = v || 0),
                        l !== v && ((this._pt.b = s), (this._pt.r = yn));
                    else if (c in x) Yn.call(this, t, c, s, o);
                    else {
                      if (!(c in t)) {
                        p(c, o);
                        continue;
                      }
                      this.add(t, c, t[c], o, n, r);
                    }
                    M.push(c);
                  }
              b && fn(this);
            },
            get: Xn,
            aliases: Fr,
            getSetter: function (t, e, i) {
              var n = Fr[e];
              return (
                n && n.indexOf(",") < 0 && (e = n),
                e in Mr && e !== Ar && (t._gsap.x || Xn(t, "x"))
                  ? i && ir === i
                    ? "scale" === e
                      ? Pn
                      : kn
                    : (ir = i || {}) && ("scale" === e ? Sn : Fn)
                  : t.style && !h(t.style[e])
                  ? _n
                  : ~e.indexOf("-")
                  ? On
                  : rn(t, e)
              );
            },
            core: { _removeProperty: Dn, _getMatrix: Wn },
          };
        (gn.utils.checkPrefix = Rr),
          (Vr = M(
            "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
              "," +
              (Zr = "rotation,rotationX,rotationY,skewX,skewY") +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (t) {
              Mr[t] = 1;
            }
          )),
          M(Zr, function (t) {
            (Qt.units[t] = "deg"), (Br[t] = 1);
          }),
          (Fr[Vr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Zr),
          M(
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
            function (t) {
              var e = t.split(":");
              Fr[e[1]] = Vr[e[0]];
            }
          ),
          M(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              Qt.units[t] = "px";
            }
          ),
          gn.registerPlugin(qr);
        var Gr = gn.registerPlugin(qr) || gn,
          Hr = Gr.core.Tween;
        (e.Back = pr),
          (e.Bounce = mr),
          (e.CSSPlugin = qr),
          (e.Circ = br),
          (e.Cubic = fr),
          (e.Elastic = dr),
          (e.Expo = yr),
          (e.Linear = ur),
          (e.Power0 = rr),
          (e.Power1 = er),
          (e.Power2 = sr),
          (e.Power3 = or),
          (e.Power4 = ar),
          (e.Quad = hr),
          (e.Quart = cr),
          (e.Quint = lr),
          (e.Sine = wr),
          (e.SteppedEase = gr),
          (e.Strong = vr),
          (e.TimelineLite = Ni),
          (e.TimelineMax = Ni),
          (e.TweenLite = Hi),
          (e.TweenMax = Hr),
          (e.default = Gr),
          (e.gsap = Hr);
      })({});
      var r = n.gsap;
      return (
        (i.GreenSockGlobals = t),
        (h.J = r.timeline),
        (h.l = r.ticker),
        (h.K = r),
        h.K
      );
    }),
    h.d("EASE", "GSAP", function () {
      var t = h.K,
        i = {
          easeInQuad: "power1.in",
          easeOutQuad: "power1.out",
          easeInOutQuad: "power1.inOut",
          easeInCubic: "power2.in",
          easeOutCubic: "power2.out",
          easeInOutCubic: "power2.inOut",
          easeInQuart: "power3.in",
          easeOutQuart: "power3.out",
          easeInOutQuart: "power3.inOut",
          easeInQuint: "power4.in",
          easeOutQuint: "power4.out",
          easeInOutQuint: "power4.inOut",
          easeInSine: "sine.in",
          easeOutSine: "sine.out",
          easeInOutSine: "sine.inOut",
          easeInExpo: "expo.in",
          easeOutExpo: "expo.out",
          easeInOutExpo: "expo.inOut",
          easeInCirc: "circ.in",
          easeOutCirc: "circ.out",
          easeInOutCirc: "circ.inOut",
          easeInElastic: "elastic.in",
          easeOutElastic: "elastic.out",
          easeInOutElastic: "elastic.inOut",
          easeInBack: "back.in",
          easeOutBack: "back.out",
          easeInOutBack: "back.inOut",
          easeInBounce: "bounce.in",
          easeOutBounce: "bounce.out",
          easeInOutBounce: "bounce.inOut",
        };
      for (var n in i) t.registerEase(n, t.parseEase(i[n]));
    }),
    (h.tt = function (t, i) {
      i = i || 0;
      var n = t.innerHTML,
        r = !1,
        s = !1,
        o = "",
        a = "",
        u = "";
      function h() {
        o.length && ((u += "<ss-word>" + o + "</ss-word>"), (o = ""));
      }
      function f() {
        a.length && ((o += i ? "<ss-char>" + a + "</ss-char>" : a), (a = ""));
      }
      function c() {
        r && ((u = u.substring(0, r) + " " + u.substr(r)), (r = !1));
      }
      for (var l = 0; l < n.length; l++) {
        var v = n[l],
          d = n[l + 1];
        if (s) (u += v), ">" === v && (s = !1);
        else if ("<" !== v)
          if (/\s/.test(v)) h(), !1 === r && (r = u.length);
          else {
            if ((c(), (a += v), "&" === v)) {
              var p;
              p = "#" === d ? /[0-9]/ : /[0-9a-zA-Z]/;
              for (var g, m = "", w = 1; (g = n[l + w]); ) {
                if (";" === g) {
                  m += g;
                  break;
                }
                if (!p.exec(g)) {
                  m = "";
                  break;
                }
                (m += g), w++;
              }
              if (m) {
                (a += m), (l += w), f();
                continue;
              }
            } else if (a.length > 1) {
              if (65039 === d.charCodeAt(0)) {
                (a += d),
                  (a += n[l + 2]),
                  (a += n[l + 3]),
                  (a += n[l + 4]),
                  (l += 4),
                  f();
                continue;
              }
              if (55356 === d.charCodeAt(0)) {
                (a += d), (a += n[l + 2]), (l += 2), f();
                continue;
              }
            }
            (55296 <= v.charCodeAt(0) &&
              v.charCodeAt(0) <= 56319 &&
              56320 <= d.charCodeAt(0) &&
              d.charCodeAt(0) <= 57343) ||
              f();
          }
        else "/" !== d ? (c(), h(), (r = !1)) : h(), (s = !0), (u += v);
      }
      return (
        h(),
        (t.innerHTML = u),
        {
          words: Array.from(t.querySelectorAll("ss-word")),
          chars: Array.from(t.querySelectorAll("ss-char")),
          revert: function (t, i) {
            t.innerHTML = i;
          }.bind(null, t, n),
        }
      );
    }),
    h.d("nextend-frontend"),
    h.d("n2");
})(window);
