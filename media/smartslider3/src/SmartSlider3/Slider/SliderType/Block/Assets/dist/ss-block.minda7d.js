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
  var s,
    n = t.document,
    h = (n.documentElement, t.setTimeout),
    o = t.clearTimeout,
    r = i._N2;
  t.requestAnimationFrame,
    n.createElement.bind(n),
    Object.assign,
    navigator.userAgent.indexOf("+http://www.google.com/bot.html") > -1 ||
      i.requestIdleCallback,
    i.cancelIdleCallback;
  (s = function () {
    n.body;
  }),
    "complete" === n.readyState || "interactive" === n.readyState
      ? s()
      : Document &&
        Document.prototype &&
        Document.prototype.addEventListener &&
        Document.prototype.addEventListener !== n.addEventListener
      ? Document.prototype.addEventListener.call(n, "DOMContentLoaded", s)
      : n.addEventListener("DOMContentLoaded", s),
    r.d("SmartSliderBlock", ["SmartSliderAbstract"], function () {
      function t(t, i) {
        (this.type = "block"),
          (this.responsiveClass = r.SmartSliderResponsiveBlock),
          r.SmartSliderAbstract.prototype.constructor.call(this, t, i);
      }
      return (
        (t.prototype = Object.create(r.SmartSliderAbstract.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.initResponsiveMode = function () {
          (this.responsive = new r.SmartSliderResponsiveBlock(
            this,
            this.parameters.responsive
          )),
            this.responsive.start(),
            r.SmartSliderAbstract.prototype.initResponsiveMode.call(this);
        }),
        (t.prototype.initMainAnimation = function () {
          (this.mainAnimation = !1),
            this.isAdmin ||
              this.disabled.postBackgroundAnimations ||
              0 == this.parameters.postBackgroundAnimations ||
              (this.postBackgroundAnimation =
                new r.SmartSliderPostBackgroundAnimation(this, !1));
        }),
        (t.prototype.afterRawSlidesReady = function () {
          if (
            this.parameters.postBackgroundAnimations &&
            this.parameters.postBackgroundAnimations.slides
          ) {
            for (var t = 0; t < this.slides.length; t++)
              this.slides[t].postBackgroundAnimation =
                this.parameters.postBackgroundAnimations.slides[t];
            delete this.parameters.postBackgroundAnimations.slides;
          }
        }),
        (t.prototype.getSlideBackgroundContainer = function () {
          return this.sliderElement.querySelector(".n2-ss-slide").parentNode;
        }),
        t
      );
    }),
    r.d("SmartSliderResponsiveBlock", ["SmartSliderResponsive"], function () {
      function t() {
        r.SmartSliderResponsive.prototype.constructor.apply(this, arguments),
          (this.o = this.sliderElement.classList.contains(
            "n2-ss-full-page--constrain-ratio"
          ));
      }
      return (
        (t.prototype = Object.create(r.SmartSliderResponsive.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.init = function () {
          r.SmartSliderResponsive.prototype.init.call(this),
            (this._cacheEl = {
              slider:
                this.sliderElement.querySelector(
                  ".n2-ss-slider-wrapper-inside"
                ) || this.sliderElement,
            });
        }),
        (t.prototype.calculateResponsiveValues = function () {
          var t = this.slider.visibleRealSlides[0].element,
            i = t.getBoundingClientRect();
          (this.resizeContext.slideSelfWidth = i.width),
            (this.resizeContext.slideSelfHeight = i.height);
          var s = t
            .querySelector(".n2-ss-layers-container")
            .getBoundingClientRect();
          (this.resizeContext.slideWidth = s.width),
            (this.resizeContext.slideHeight = s.height);
          var n = this._cacheEl.slider.getBoundingClientRect();
          if (
            ((this.resizeContext.sliderWidth = n.width),
            (this.resizeContext.sliderHeight = n.height),
            r.SmartSliderResponsive.prototype.calculateResponsiveValues.call(
              this
            ),
            this.o)
          ) {
            var h =
                (this.resizeContext.sliderWidth -
                  this.resizeContext.slideWidth) /
                  -2 +
                "px",
              o =
                (this.resizeContext.sliderHeight -
                  this.resizeContext.slideHeight) /
                  -2 +
                "px";
            r.MW.i(this._cacheEl.slider)["--ss-clip-path"] =
              "inset(" + o + " " + h + " " + o + " " + h + ")";
          }
        }),
        t
      );
    }),
    r.d("ss-block", ["SmartSliderBlock", "SmartSliderResponsiveBlock"]);
})(window);
