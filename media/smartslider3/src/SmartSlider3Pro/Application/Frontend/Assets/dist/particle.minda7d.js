!(function (t) {
  var a = t;
  a._N2 = a._N2 || {
    _r: [],
    _d: [],
    r: function () {
      this._r.push(arguments);
    },
    d: function () {
      this._d.push(arguments);
    },
  };
  var i,
    n,
    s = t.document,
    r = (s.documentElement, t.setTimeout),
    o = t.clearTimeout,
    c = a._N2,
    h = (t.requestAnimationFrame, s.createElement.bind(s));
  Object.assign,
    navigator.userAgent.indexOf("+http://www.google.com/bot.html") > -1 ||
      a.requestIdleCallback,
    a.cancelIdleCallback;
  (n = function () {
    s.body;
  }),
    "complete" === s.readyState || "interactive" === s.readyState
      ? n()
      : Document &&
        Document.prototype &&
        Document.prototype.addEventListener &&
        Document.prototype.addEventListener !== s.addEventListener
      ? Document.prototype.addEventListener.call(s, "DOMContentLoaded", n)
      : s.addEventListener("DOMContentLoaded", n),
    c.d("particlesJS", function () {
      var t = function (t, o) {
        this.pJS = {
          canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight },
          particles: {
            number: { value: 400, density: { enable: !0, value_area: 800 } },
            color: { value: "#fff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#ff0000" },
              polygon: { nb_sides: 5 },
              image: { src: "", width: 100, height: 100 },
            },
            opacity: {
              value: 1,
              random: !1,
              anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
            },
            size: {
              value: 20,
              random: !1,
              anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
            },
            line_linked: {
              enable: !0,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: !0,
              speed: 2,
              direction: "none",
              random: !1,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
            },
            array: [],
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: !0, mode: "grab" },
              onclick: { enable: !0, mode: "push" },
              resize: !0,
            },
            modes: {
              grab: { distance: 100, line_linked: { opacity: 1 } },
              bubble: { distance: 200, size: 80, duration: 0.4 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
            mouse: {},
          },
          retina_detect: !1,
          fn: { interact: {}, modes: {}, vendors: {} },
          tmp: {},
        };
        var c = this.pJS;
        o && Object.deepExtend(c, o),
          (c.tmp.obj = {
            size_value: c.particles.size.value,
            size_anim_speed: c.particles.size.anim.speed,
            move_speed: c.particles.move.speed,
            line_linked_distance: c.particles.line_linked.distance,
            line_linked_width: c.particles.line_linked.width,
            mode_grab_distance: c.interactivity.modes.grab.distance,
            mode_bubble_distance: c.interactivity.modes.bubble.distance,
            mode_bubble_size: c.interactivity.modes.bubble.size,
            mode_repulse_distance: c.interactivity.modes.repulse.distance,
          }),
          (c.fn.retinaInit = function () {
            c.retina_detect && n2const.devicePixelRatio > 1
              ? ((c.canvas.pxratio = n2const.devicePixelRatio),
                (c.tmp.retina = !0))
              : ((c.canvas.pxratio = 1), (c.tmp.retina = !1)),
              (c.canvas.w = c.canvas.el.offsetWidth * c.canvas.pxratio),
              (c.canvas.h = c.canvas.el.offsetHeight * c.canvas.pxratio),
              (c.particles.size.value =
                c.tmp.obj.size_value * c.canvas.pxratio),
              (c.particles.size.anim.speed =
                c.tmp.obj.size_anim_speed * c.canvas.pxratio),
              (c.particles.move.speed =
                c.tmp.obj.move_speed * c.canvas.pxratio),
              (c.particles.line_linked.distance =
                c.tmp.obj.line_linked_distance * c.canvas.pxratio),
              (c.interactivity.modes.grab.distance =
                c.tmp.obj.mode_grab_distance * c.canvas.pxratio),
              (c.interactivity.modes.bubble.distance =
                c.tmp.obj.mode_bubble_distance * c.canvas.pxratio),
              (c.particles.line_linked.width =
                c.tmp.obj.line_linked_width * c.canvas.pxratio),
              (c.interactivity.modes.bubble.size =
                c.tmp.obj.mode_bubble_size * c.canvas.pxratio),
              (c.interactivity.modes.repulse.distance =
                c.tmp.obj.mode_repulse_distance * c.canvas.pxratio);
          }),
          (c.fn.canvasInit = function () {
            c.canvas.ctx = c.canvas.el.getContext("2d");
          }),
          (c.fn.canvasSize = function () {
            (c.canvas.el.width = c.canvas.w),
              (c.canvas.el.height = c.canvas.h),
              c &&
                c.interactivity.events.resize &&
                a.addEventListener("resize", function () {
                  (c.canvas.w = c.canvas.el.offsetWidth),
                    (c.canvas.h = c.canvas.el.offsetHeight),
                    c.tmp.retina &&
                      ((c.canvas.w *= c.canvas.pxratio),
                      (c.canvas.h *= c.canvas.pxratio)),
                    (c.canvas.el.width = c.canvas.w),
                    (c.canvas.el.height = c.canvas.h),
                    c.particles.move.enable ||
                      (c.fn.particlesEmpty(),
                      c.fn.particlesCreate(),
                      c.fn.particlesDraw(),
                      c.fn.vendors.densityAutoParticles()),
                    c.fn.vendors.densityAutoParticles();
                });
          }),
          (c.fn.resize = function () {
            (c.canvas.w = c.canvas.el.offsetWidth),
              (c.canvas.h = c.canvas.el.offsetHeight),
              c.tmp.retina &&
                ((c.canvas.w *= c.canvas.pxratio),
                (c.canvas.h *= c.canvas.pxratio)),
              (c.canvas.el.width = c.canvas.w),
              (c.canvas.el.height = c.canvas.h),
              c.particles.move.enable ||
                (c.fn.particlesEmpty(),
                c.fn.particlesCreate(),
                c.fn.particlesDraw(),
                c.fn.vendors.densityAutoParticles()),
              c.fn.vendors.densityAutoParticles();
          }),
          (c.fn.canvasPaint = function () {
            c.canvas.ctx.fillRect(0, 0, c.canvas.w, c.canvas.h);
          }),
          (c.fn.canvasClear = function () {
            c.canvas.ctx.clearRect(0, 0, c.canvas.w, c.canvas.h);
          }),
          (c.fn.particle = function (t, a, s) {
            if (
              ((this.radius =
                (c.particles.size.random ? Math.random() : 1) *
                c.particles.size.value),
              c.particles.size.anim.enable &&
                ((this.size_status = !1),
                (this.vs = c.particles.size.anim.speed / 100),
                c.particles.size.anim.sync ||
                  (this.vs = this.vs * Math.random())),
              (this.x = s ? s.x : Math.random() * c.canvas.w),
              (this.y = s ? s.y : Math.random() * c.canvas.h),
              this.x > c.canvas.w - 2 * this.radius
                ? (this.x = this.x - this.radius)
                : this.x < 2 * this.radius && (this.x = this.x + this.radius),
              this.y > c.canvas.h - 2 * this.radius
                ? (this.y = this.y - this.radius)
                : this.y < 2 * this.radius && (this.y = this.y + this.radius),
              c.particles.move.bounce && c.fn.vendors.checkOverlap(this, s),
              (this.color = {}),
              "object" == typeof t.value)
            )
              if (t.value instanceof Array) {
                var r =
                  t.value[
                    Math.floor(Math.random() * c.particles.color.value.length)
                  ];
                this.color.rgb = n(r);
              } else
                t.value.r != i &&
                  t.value.g != i &&
                  t.value.b != i &&
                  (this.color.rgb = {
                    r: t.value.r,
                    g: t.value.g,
                    b: t.value.b,
                  }),
                  t.value.h != i &&
                    t.value.s != i &&
                    t.value.l != i &&
                    (this.color.hsl = {
                      h: t.value.h,
                      s: t.value.s,
                      l: t.value.l,
                    });
            else
              "random" == t.value
                ? (this.color.rgb = {
                    r: Math.floor(256 * Math.random()) + 0,
                    g: Math.floor(256 * Math.random()) + 0,
                    b: Math.floor(256 * Math.random()) + 0,
                  })
                : "string" == typeof t.value &&
                  ((this.color = t), (this.color.rgb = n(this.color.value)));
            (this.opacity =
              (c.particles.opacity.random ? Math.random() : 1) *
              c.particles.opacity.value),
              c.particles.opacity.anim.enable &&
                ((this.opacity_status = !1),
                (this.vo = c.particles.opacity.anim.speed / 100),
                c.particles.opacity.anim.sync ||
                  (this.vo = this.vo * Math.random()));
            var o = {};
            switch (c.particles.move.direction) {
              case "top":
                o = { x: 0, y: -1 };
                break;
              case "top-right":
                o = { x: 0.5, y: -0.5 };
                break;
              case "right":
                o = { x: 1, y: -0 };
                break;
              case "bottom-right":
                o = { x: 0.5, y: 0.5 };
                break;
              case "bottom":
                o = { x: 0, y: 1 };
                break;
              case "bottom-left":
                o = { x: -0.5, y: 1 };
                break;
              case "left":
                o = { x: -1, y: 0 };
                break;
              case "top-left":
                o = { x: -0.5, y: -0.5 };
                break;
              default:
                o = { x: 0, y: 0 };
            }
            c.particles.move.straight
              ? ((this.vx = o.x),
                (this.vy = o.y),
                c.particles.move.random &&
                  ((this.vx = this.vx * Math.random()),
                  (this.vy = this.vy * Math.random())))
              : ((this.vx = o.x + Math.random() - 0.5),
                (this.vy = o.y + Math.random() - 0.5)),
              (this.vx_i = this.vx),
              (this.vy_i = this.vy);
            var h = c.particles.shape.type;
            if (
              ("object" == typeof h
                ? h instanceof Array &&
                  (this.shape = h[Math.floor(Math.random() * h.length)])
                : (this.shape = h),
              "image" == this.shape)
            ) {
              var f = c.particles.shape;
              (this.img = {
                src: f.image.src,
                ratio: f.image.width / f.image.height,
              }),
                this.img.ratio || (this.img.ratio = 1),
                "svg" == c.tmp.img_type &&
                  c.tmp.source_svg != i &&
                  (c.fn.vendors.createSvgImg(this),
                  c.tmp.pushing && (this.img.loaded = !1));
            }
          }),
          (c.fn.particle.prototype.draw = function () {
            var t = this;
            if (t.radius_bubble != i) var a = t.radius_bubble;
            else a = t.radius;
            if (t.opacity_bubble != i) var n = t.opacity_bubble;
            else n = t.opacity;
            if (t.color.rgb)
              var s =
                "rgba(" +
                t.color.rgb.r +
                "," +
                t.color.rgb.g +
                "," +
                t.color.rgb.b +
                "," +
                n +
                ")";
            else
              s =
                "hsla(" +
                t.color.hsl.h +
                "," +
                t.color.hsl.s +
                "%," +
                t.color.hsl.l +
                "%," +
                n +
                ")";
            switch (
              ((c.canvas.ctx.fillStyle = s), c.canvas.ctx.beginPath(), t.shape)
            ) {
              case "circle":
                c.canvas.ctx.arc(t.x, t.y, a, 0, 2 * Math.PI, !1);
                break;
              case "edge":
                c.canvas.ctx.rect(t.x - a, t.y - a, 2 * a, 2 * a);
                break;
              case "triangle":
                c.fn.vendors.drawShape(
                  c.canvas.ctx,
                  t.x - a,
                  t.y + a / 1.66,
                  2 * a,
                  3,
                  2
                );
                break;
              case "polygon":
                c.fn.vendors.drawShape(
                  c.canvas.ctx,
                  t.x - a / (c.particles.shape.polygon.nb_sides / 3.5),
                  t.y - a / 0.76,
                  (2.66 * a) / (c.particles.shape.polygon.nb_sides / 3),
                  c.particles.shape.polygon.nb_sides,
                  1
                );
                break;
              case "star":
                c.fn.vendors.drawShape(
                  c.canvas.ctx,
                  t.x - (2 * a) / (c.particles.shape.polygon.nb_sides / 4),
                  t.y - a / 1.52,
                  (2 * a * 2.66) / (c.particles.shape.polygon.nb_sides / 3),
                  c.particles.shape.polygon.nb_sides,
                  2
                );
                break;
              case "image":
                if ("svg" == c.tmp.img_type) var r = t.img.obj;
                else r = c.tmp.img_obj;
                r &&
                  c.canvas.ctx.drawImage(
                    r,
                    t.x - a,
                    t.y - a,
                    2 * a,
                    (2 * a) / t.img.ratio
                  );
            }
            c.canvas.ctx.closePath(),
              c.particles.shape.stroke.width > 0 &&
                ((c.canvas.ctx.strokeStyle = c.particles.shape.stroke.color),
                (c.canvas.ctx.lineWidth = c.particles.shape.stroke.width),
                c.canvas.ctx.stroke()),
              c.canvas.ctx.fill();
          }),
          (c.fn.particlesCreate = function () {
            for (var t = 0; t < c.particles.number.value; t++)
              c.particles.array.push(
                new c.fn.particle(c.particles.color, c.particles.opacity.value)
              );
          }),
          (c.fn.particlesUpdate = function () {
            for (var t = 0; t < c.particles.array.length; t++) {
              var a = c.particles.array[t];
              if (c.particles.move.enable) {
                var i = c.particles.move.speed / 2;
                (a.x += a.vx * i), (a.y += a.vy * i);
              }
              if (
                (c.particles.opacity.anim.enable &&
                  (1 == a.opacity_status
                    ? (a.opacity >= c.particles.opacity.value &&
                        (a.opacity_status = !1),
                      (a.opacity += a.vo))
                    : (a.opacity <= c.particles.opacity.anim.opacity_min &&
                        (a.opacity_status = !0),
                      (a.opacity -= a.vo)),
                  a.opacity < 0 && (a.opacity = 0)),
                c.particles.size.anim.enable &&
                  (1 == a.size_status
                    ? (a.radius >= c.particles.size.value &&
                        (a.size_status = !1),
                      (a.radius += a.vs))
                    : (a.radius <= c.particles.size.anim.size_min &&
                        (a.size_status = !0),
                      (a.radius -= a.vs)),
                  a.radius < 0 && (a.radius = 0)),
                "bounce" == c.particles.move.out_mode)
              )
                var n = {
                  x_left: a.radius,
                  x_right: c.canvas.w,
                  y_top: a.radius,
                  y_bottom: c.canvas.h,
                };
              else
                n = {
                  x_left: -a.radius,
                  x_right: c.canvas.w + a.radius,
                  y_top: -a.radius,
                  y_bottom: c.canvas.h + a.radius,
                };
              switch (
                (a.x - a.radius > c.canvas.w
                  ? ((a.x = n.x_left), (a.y = Math.random() * c.canvas.h))
                  : a.x + a.radius < 0 &&
                    ((a.x = n.x_right), (a.y = Math.random() * c.canvas.h)),
                a.y - a.radius > c.canvas.h
                  ? ((a.y = n.y_top), (a.x = Math.random() * c.canvas.w))
                  : a.y + a.radius < 0 &&
                    ((a.y = n.y_bottom), (a.x = Math.random() * c.canvas.w)),
                c.particles.move.out_mode)
              ) {
                case "bounce":
                  (a.x + a.radius > c.canvas.w || a.x - a.radius < 0) &&
                    (a.vx = -a.vx),
                    (a.y + a.radius > c.canvas.h || a.y - a.radius < 0) &&
                      (a.vy = -a.vy);
              }
              if (
                (s("grab", c.interactivity.events.onhover.mode) &&
                  c.fn.modes.grabParticle(a),
                (s("bubble", c.interactivity.events.onhover.mode) ||
                  s("bubble", c.interactivity.events.onclick.mode)) &&
                  c.fn.modes.bubbleParticle(a),
                (s("repulse", c.interactivity.events.onhover.mode) ||
                  s("repulse", c.interactivity.events.onclick.mode)) &&
                  c.fn.modes.repulseParticle(a),
                c.particles.line_linked.enable ||
                  c.particles.move.attract.enable)
              )
                for (var r = t + 1; r < c.particles.array.length; r++) {
                  var o = c.particles.array[r];
                  c.particles.line_linked.enable &&
                    c.fn.interact.linkParticles(a, o),
                    c.particles.move.attract.enable &&
                      c.fn.interact.attractParticles(a, o),
                    c.particles.move.bounce &&
                      c.fn.interact.bounceParticles(a, o);
                }
            }
          }),
          (c.fn.particlesDraw = function () {
            c.canvas.ctx.clearRect(0, 0, c.canvas.w, c.canvas.h),
              c.fn.particlesUpdate();
            for (var t = 0; t < c.particles.array.length; t++) {
              c.particles.array[t].draw();
            }
          }),
          (c.fn.particlesEmpty = function () {
            c.particles.array = [];
          }),
          (c.fn.particlesRefresh = function () {
            cancelRequestAnimFrame(c.fn.checkAnimFrame),
              cancelRequestAnimFrame(c.fn.drawAnimFrame),
              (c.tmp.source_svg = i),
              (c.tmp.img_obj = i),
              (c.tmp.count_svg = 0),
              c.fn.particlesEmpty(),
              c.fn.canvasClear(),
              c.fn.vendors.start();
          }),
          (c.fn.interact.linkParticles = function (t, a) {
            var i = t.x - a.x,
              n = t.y - a.y,
              s = Math.sqrt(i * i + n * n);
            if (s <= c.particles.line_linked.distance) {
              var r =
                c.particles.line_linked.opacity -
                s /
                  (1 / c.particles.line_linked.opacity) /
                  c.particles.line_linked.distance;
              if (r > 0) {
                var o = c.particles.line_linked.color_rgb_line;
                (c.canvas.ctx.strokeStyle =
                  "rgba(" + o.r + "," + o.g + "," + o.b + "," + r + ")"),
                  (c.canvas.ctx.lineWidth = c.particles.line_linked.width),
                  c.canvas.ctx.beginPath(),
                  c.canvas.ctx.moveTo(t.x, t.y),
                  c.canvas.ctx.lineTo(a.x, a.y),
                  c.canvas.ctx.stroke(),
                  c.canvas.ctx.closePath();
              }
            }
          }),
          (c.fn.interact.attractParticles = function (t, a) {
            var i = t.x - a.x,
              n = t.y - a.y;
            if (Math.sqrt(i * i + n * n) <= c.particles.line_linked.distance) {
              var s = i / (1e3 * c.particles.move.attract.rotateX),
                r = n / (1e3 * c.particles.move.attract.rotateY);
              (t.vx -= s), (t.vy -= r), (a.vx += s), (a.vy += r);
            }
          }),
          (c.fn.interact.bounceParticles = function (t, a) {
            var i = t.x - a.x,
              n = t.y - a.y;
            Math.sqrt(i * i + n * n) <= t.radius + a.radius &&
              ((t.vx = -t.vx), (t.vy = -t.vy), (a.vx = -a.vx), (a.vy = -a.vy));
          }),
          (c.fn.modes.pushParticles = function (t, a) {
            c.tmp.pushing = !0;
            for (var i = 0; i < t; i++)
              c.particles.array.push(
                new c.fn.particle(
                  c.particles.color,
                  c.particles.opacity.value,
                  {
                    x: a ? a.pos_x : Math.random() * c.canvas.w,
                    y: a ? a.pos_y : Math.random() * c.canvas.h,
                  }
                )
              ),
                i == t - 1 &&
                  (c.particles.move.enable || c.fn.particlesDraw(),
                  (c.tmp.pushing = !1));
          }),
          (c.fn.modes.removeParticles = function (t) {
            c.particles.array.splice(0, t),
              c.particles.move.enable || c.fn.particlesDraw();
          }),
          (c.fn.modes.bubbleParticle = function (t) {
            if (
              c.interactivity.events.onhover.enable &&
              s("bubble", c.interactivity.events.onhover.mode)
            ) {
              var a = t.x - c.interactivity.mouse.pos_x,
                n = t.y - c.interactivity.mouse.pos_y,
                r =
                  1 -
                  (l = Math.sqrt(a * a + n * n)) /
                    c.interactivity.modes.bubble.distance;
              function o() {
                (t.opacity_bubble = t.opacity), (t.radius_bubble = t.radius);
              }
              if (l <= c.interactivity.modes.bubble.distance) {
                if (r >= 0 && "mousemove" == c.interactivity.status) {
                  if (
                    c.interactivity.modes.bubble.size != c.particles.size.value
                  )
                    if (
                      c.interactivity.modes.bubble.size > c.particles.size.value
                    ) {
                      (f = t.radius + c.interactivity.modes.bubble.size * r) >=
                        0 && (t.radius_bubble = f);
                    } else {
                      var h = t.radius - c.interactivity.modes.bubble.size,
                        f = t.radius - h * r;
                      t.radius_bubble = f > 0 ? f : 0;
                    }
                  var u;
                  if (
                    c.interactivity.modes.bubble.opacity !=
                    c.particles.opacity.value
                  )
                    if (
                      c.interactivity.modes.bubble.opacity >
                      c.particles.opacity.value
                    )
                      (u = c.interactivity.modes.bubble.opacity * r) >
                        t.opacity &&
                        u <= c.interactivity.modes.bubble.opacity &&
                        (t.opacity_bubble = u);
                    else
                      (u =
                        t.opacity -
                        (c.particles.opacity.value -
                          c.interactivity.modes.bubble.opacity) *
                          r) < t.opacity &&
                        u >= c.interactivity.modes.bubble.opacity &&
                        (t.opacity_bubble = u);
                }
              } else o();
              "mouseleave" == c.interactivity.status && o();
            } else if (
              c.interactivity.events.onclick.enable &&
              s("bubble", c.interactivity.events.onclick.mode)
            ) {
              if (c.tmp.bubble_clicking) {
                (a = t.x - c.interactivity.mouse.click_pos_x),
                  (n = t.y - c.interactivity.mouse.click_pos_y);
                var l = Math.sqrt(a * a + n * n),
                  v =
                    (new Date().getTime() - c.interactivity.mouse.click_time) /
                    1e3;
                v > c.interactivity.modes.bubble.duration &&
                  (c.tmp.bubble_duration_end = !0),
                  v > 2 * c.interactivity.modes.bubble.duration &&
                    ((c.tmp.bubble_clicking = !1),
                    (c.tmp.bubble_duration_end = !1));
              }
              function m(a, n, s, r, o) {
                if (a != n)
                  if (c.tmp.bubble_duration_end)
                    s != i &&
                      ((f =
                        a +
                        (a -
                          (r -
                            (v * (r - a)) /
                              c.interactivity.modes.bubble.duration))),
                      "size" == o && (t.radius_bubble = f),
                      "opacity" == o && (t.opacity_bubble = f));
                  else if (l <= c.interactivity.modes.bubble.distance) {
                    if (s != i) var h = s;
                    else h = r;
                    if (h != a) {
                      var f =
                        r -
                        (v * (r - a)) / c.interactivity.modes.bubble.duration;
                      "size" == o && (t.radius_bubble = f),
                        "opacity" == o && (t.opacity_bubble = f);
                    }
                  } else
                    "size" == o && (t.radius_bubble = i),
                      "opacity" == o && (t.opacity_bubble = i);
              }
              c.tmp.bubble_clicking &&
                (m(
                  c.interactivity.modes.bubble.size,
                  c.particles.size.value,
                  t.radius_bubble,
                  t.radius,
                  "size"
                ),
                m(
                  c.interactivity.modes.bubble.opacity,
                  c.particles.opacity.value,
                  t.opacity_bubble,
                  t.opacity,
                  "opacity"
                ));
            }
          }),
          (c.fn.modes.repulseParticle = function (t) {
            if (
              c.interactivity.events.onhover.enable &&
              s("repulse", c.interactivity.events.onhover.mode) &&
              "mousemove" == c.interactivity.status
            ) {
              var a = t.x - c.interactivity.mouse.pos_x,
                i = t.y - c.interactivity.mouse.pos_y,
                n = Math.sqrt(a * a + i * i),
                r = { x: a / n, y: i / n },
                o = c.interactivity.modes.repulse.distance,
                h =
                  ((b = (1 / o) * (-1 * Math.pow(n / o, 2) + 1) * o * 100),
                  (d = 0),
                  (p = 50),
                  Math.min(Math.max(b, d), p)),
                f = { x: t.x + r.x * h, y: t.y + r.y * h };
              "bounce" == c.particles.move.out_mode
                ? (f.x - t.radius > 0 &&
                    f.x + t.radius < c.canvas.w &&
                    (t.x = f.x),
                  f.y - t.radius > 0 &&
                    f.y + t.radius < c.canvas.h &&
                    (t.y = f.y))
                : ((t.x = f.x), (t.y = f.y));
            } else if (
              c.interactivity.events.onclick.enable &&
              s("repulse", c.interactivity.events.onclick.mode)
            )
              if (
                (c.tmp.repulse_finish ||
                  (c.tmp.repulse_count++,
                  c.tmp.repulse_count == c.particles.array.length &&
                    (c.tmp.repulse_finish = !0)),
                c.tmp.repulse_clicking)
              ) {
                o = Math.pow(c.interactivity.modes.repulse.distance / 6, 3);
                var u = c.interactivity.mouse.click_pos_x - t.x,
                  l = c.interactivity.mouse.click_pos_y - t.y,
                  v = u * u + l * l,
                  m = -o / v;
                v <= o &&
                  (function () {
                    var a = Math.atan2(l, u);
                    if (
                      ((t.vx = m * Math.cos(a)),
                      (t.vy = m * Math.sin(a)),
                      "bounce" == c.particles.move.out_mode)
                    ) {
                      var i = { x: t.x + t.vx, y: t.y + t.vy };
                      (i.x + t.radius > c.canvas.w || i.x - t.radius < 0) &&
                        (t.vx = -t.vx),
                        (i.y + t.radius > c.canvas.h || i.y - t.radius < 0) &&
                          (t.vy = -t.vy);
                    }
                  })();
              } else
                0 == c.tmp.repulse_clicking &&
                  ((t.vx = t.vx_i), (t.vy = t.vy_i));
            var b, d, p;
          }),
          (c.fn.modes.grabParticle = function (t) {
            if (
              c.interactivity.events.onhover.enable &&
              "mousemove" == c.interactivity.status
            ) {
              var a = t.x - c.interactivity.mouse.pos_x,
                i = t.y - c.interactivity.mouse.pos_y,
                n = Math.sqrt(a * a + i * i);
              if (n <= c.interactivity.modes.grab.distance) {
                var s =
                  c.interactivity.modes.grab.line_linked.opacity -
                  n /
                    (1 / c.interactivity.modes.grab.line_linked.opacity) /
                    c.interactivity.modes.grab.distance;
                if (s > 0) {
                  var r = c.particles.line_linked.color_rgb_line;
                  (c.canvas.ctx.strokeStyle =
                    "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")"),
                    (c.canvas.ctx.lineWidth = c.particles.line_linked.width),
                    c.canvas.ctx.beginPath(),
                    c.canvas.ctx.moveTo(t.x, t.y),
                    c.canvas.ctx.lineTo(
                      c.interactivity.mouse.pos_x,
                      c.interactivity.mouse.pos_y
                    ),
                    c.canvas.ctx.stroke(),
                    c.canvas.ctx.closePath();
                }
              }
            }
          }),
          (c.fn.vendors.eventsListeners = function () {
            var t, i, n, s;
            "window" == c.interactivity.detect_on
              ? (c.interactivity.el = a)
              : "parent" == c.interactivity.detect_on
              ? (c.interactivity.el = c.canvas.el.parentNode)
              : "object" == typeof c.interactivity.detect_on
              ? (c.interactivity.el = c.interactivity.detect_on)
              : (c.interactivity.el = c.canvas.el),
              (c.interactivity.events.onhover.enable ||
                c.interactivity.events.onclick.enable) &&
                ((t = c.interactivity.el),
                (i = "mousemove"),
                (n = function (e) {
                  if (c.interactivity.el == a)
                    var t = e.clientX,
                      i = e.clientY;
                  else {
                    var n = c.interactivity.el.getBoundingClientRect();
                    (t = e.clientX - n.left), (i = e.clientY - n.top);
                  }
                  (c.interactivity.mouse.pos_x = t),
                    (c.interactivity.mouse.pos_y = i),
                    c.tmp.retina &&
                      ((c.interactivity.mouse.pos_x *= c.canvas.pxratio),
                      (c.interactivity.mouse.pos_y *= c.canvas.pxratio)),
                    (c.interactivity.status = "mousemove");
                }),
                (s = s || {}),
                t.addEventListener(i, n, s),
                c.interactivity.el.addEventListener("mouseleave", function (e) {
                  (c.interactivity.mouse.pos_x = null),
                    (c.interactivity.mouse.pos_y = null),
                    (c.interactivity.status = "mouseleave");
                })),
              c.interactivity.events.onclick.enable &&
                c.interactivity.el.addEventListener("click", function () {
                  if (
                    ((c.interactivity.mouse.click_pos_x =
                      c.interactivity.mouse.pos_x),
                    (c.interactivity.mouse.click_pos_y =
                      c.interactivity.mouse.pos_y),
                    (c.interactivity.mouse.click_time = new Date().getTime()),
                    c.interactivity.events.onclick.enable)
                  )
                    switch (c.interactivity.events.onclick.mode) {
                      case "push":
                        c.particles.move.enable ||
                        1 == c.interactivity.modes.push.particles_nb
                          ? c.fn.modes.pushParticles(
                              c.interactivity.modes.push.particles_nb,
                              c.interactivity.mouse
                            )
                          : c.interactivity.modes.push.particles_nb > 1 &&
                            c.fn.modes.pushParticles(
                              c.interactivity.modes.push.particles_nb
                            );
                        break;
                      case "remove":
                        c.fn.modes.removeParticles(
                          c.interactivity.modes.remove.particles_nb
                        );
                        break;
                      case "bubble":
                        c.tmp.bubble_clicking = !0;
                        break;
                      case "repulse":
                        (c.tmp.repulse_clicking = !0),
                          (c.tmp.repulse_count = 0),
                          (c.tmp.repulse_finish = !1),
                          r(function () {
                            c.tmp.repulse_clicking = !1;
                          }, 1e3 * c.interactivity.modes.repulse.duration);
                    }
                });
          }),
          (c.fn.vendors.densityAutoParticles = function () {
            if (c.particles.number.density.enable) {
              var t = (c.canvas.el.width * c.canvas.el.height) / 1e3;
              c.tmp.retina && (t /= 2 * c.canvas.pxratio);
              var a =
                  (t * c.particles.number.value) /
                  c.particles.number.density.value_area,
                i = c.particles.array.length - a;
              i < 0
                ? c.fn.modes.pushParticles(Math.abs(i))
                : c.fn.modes.removeParticles(i);
            }
          }),
          (c.fn.vendors.checkOverlap = function (t, a) {
            for (var i = 0; i < c.particles.array.length; i++) {
              var n = c.particles.array[i],
                s = t.x - n.x,
                r = t.y - n.y;
              Math.sqrt(s * s + r * r) <= t.radius + n.radius &&
                ((t.x = a ? a.x : Math.random() * c.canvas.w),
                (t.y = a ? a.y : Math.random() * c.canvas.h),
                c.fn.vendors.checkOverlap(t));
            }
          }),
          (c.fn.vendors.createSvgImg = function (t) {
            var i = c.tmp.source_svg.replace(
                /#([0-9A-F]{3,6})/gi,
                function (a, i, n, s) {
                  if (t.color.rgb)
                    var r =
                      "rgba(" +
                      t.color.rgb.r +
                      "," +
                      t.color.rgb.g +
                      "," +
                      t.color.rgb.b +
                      "," +
                      t.opacity +
                      ")";
                  else
                    r =
                      "hsla(" +
                      t.color.hsl.h +
                      "," +
                      t.color.hsl.s +
                      "%," +
                      t.color.hsl.l +
                      "%," +
                      t.opacity +
                      ")";
                  return r;
                }
              ),
              n = new Blob([i], { type: "image/svg+xml;charset=utf-8" }),
              s = a.URL || a.webkitURL || a,
              r = s.createObjectURL(n),
              o = new Image();
            o.addEventListener("load", function () {
              (t.img.obj = o),
                (t.img.loaded = !0),
                s.revokeObjectURL(r),
                (c.tmp.count_svg = (c.tmp.count_svg || 0) + 1);
            }),
              (o.src = r);
          }),
          (c.fn.vendors.destroypJS = function () {
            cancelAnimationFrame(c.fn.drawAnimFrame),
              t.remove(),
              (pJSDom = null);
          }),
          (c.fn.vendors.drawShape = function (t, a, i, n, s, r) {
            var o = s * r,
              c = s / r,
              h = (180 * (c - 2)) / c,
              f = Math.PI - (Math.PI * h) / 180;
            t.save(), t.beginPath(), t.translate(a, i), t.moveTo(0, 0);
            for (var u = 0; u < o; u++)
              t.lineTo(n, 0), t.translate(n, 0), t.rotate(f);
            t.fill(), t.restore();
          }),
          (c.fn.vendors.exportImg = function () {
            a.open(c.canvas.el.toDataURL("image/png"), "_blank");
          }),
          (c.fn.vendors.loadImg = function (t) {
            if (((c.tmp.img_error = i), "" != c.particles.shape.image.src))
              if ("svg" == t) {
                var a = new XMLHttpRequest();
                a.open("GET", c.particles.shape.image.src),
                  (a.onreadystatechange = function (t) {
                    4 == a.readyState &&
                      (200 == a.status
                        ? ((c.tmp.source_svg = t.currentTarget.response),
                          c.fn.vendors.checkBeforeDraw())
                        : (console.log("Error pJS - Image not found"),
                          (c.tmp.img_error = !0)));
                  }),
                  a.send();
              } else {
                var n = new Image();
                n.addEventListener("load", function () {
                  (c.tmp.img_obj = n), c.fn.vendors.checkBeforeDraw();
                }),
                  (n.src = c.particles.shape.image.src);
              }
            else
              console.log("Error pJS - No image.src"), (c.tmp.img_error = !0);
          }),
          (c.fn.vendors.draw = function () {
            "image" == c.particles.shape.type
              ? "svg" == c.tmp.img_type
                ? c.tmp.count_svg >= c.particles.number.value
                  ? (c.fn.particlesDraw(),
                    c.particles.move.enable
                      ? (c.fn.drawAnimFrame = requestAnimFrame(
                          c.fn.vendors.draw
                        ))
                      : cancelRequestAnimFrame(c.fn.drawAnimFrame))
                  : c.tmp.img_error ||
                    (c.fn.drawAnimFrame = requestAnimFrame(c.fn.vendors.draw))
                : c.tmp.img_obj != i
                ? (c.fn.particlesDraw(),
                  c.particles.move.enable
                    ? (c.fn.drawAnimFrame = requestAnimFrame(c.fn.vendors.draw))
                    : cancelRequestAnimFrame(c.fn.drawAnimFrame))
                : c.tmp.img_error ||
                  (c.fn.drawAnimFrame = requestAnimFrame(c.fn.vendors.draw))
              : (c.fn.particlesDraw(),
                c.particles.move.enable
                  ? (c.fn.drawAnimFrame = requestAnimFrame(c.fn.vendors.draw))
                  : cancelRequestAnimFrame(c.fn.drawAnimFrame));
          }),
          (c.fn.vendors.checkBeforeDraw = function () {
            "image" == c.particles.shape.type
              ? "svg" == c.tmp.img_type && c.tmp.source_svg == i
                ? (c.tmp.checkAnimFrame = requestAnimFrame(check))
                : (cancelRequestAnimFrame(c.tmp.checkAnimFrame),
                  c.tmp.img_error || (c.fn.vendors.init(), c.fn.vendors.draw()))
              : (c.fn.vendors.init(), c.fn.vendors.draw());
          }),
          (c.fn.vendors.init = function () {
            c.fn.retinaInit(),
              c.fn.canvasInit(),
              c.fn.canvasSize(),
              c.fn.canvasPaint(),
              c.fn.particlesCreate(),
              c.fn.vendors.densityAutoParticles(),
              (c.particles.line_linked.color_rgb_line = n(
                c.particles.line_linked.color
              ));
          }),
          (c.fn.vendors.start = function () {
            s("image", c.particles.shape.type)
              ? ((c.tmp.img_type = c.particles.shape.image.src.substr(
                  c.particles.shape.image.src.length - 3
                )),
                c.fn.vendors.loadImg(c.tmp.img_type))
              : c.fn.vendors.checkBeforeDraw();
          }),
          c.fn.vendors.eventsListeners(),
          c.fn.vendors.start();
      };
      function n(t) {
        t = t.replace(
          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
          function (t, a, i, n) {
            return a + a + i + i + n + n;
          }
        );
        var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return a
          ? {
              r: parseInt(a[1], 16),
              g: parseInt(a[2], 16),
              b: parseInt(a[3], 16),
            }
          : null;
      }
      function s(t, a) {
        return a.indexOf(t) > -1;
      }
      return (
        (Object.deepExtend = function (t, a) {
          for (var i in a)
            a[i] && a[i].constructor && a[i].constructor === Object
              ? ((t[i] = t[i] || {}), arguments.callee(t[i], a[i]))
              : (t[i] = a[i]);
          return t;
        }),
        (a.requestAnimFrame =
          a.requestAnimationFrame ||
          a.webkitRequestAnimationFrame ||
          a.mozRequestAnimationFrame ||
          a.oRequestAnimationFrame ||
          a.msRequestAnimationFrame ||
          function (t) {
            a.setTimeout(t, 1e3 / 60);
          }),
        (a.cancelRequestAnimFrame =
          a.cancelAnimationFrame ||
          a.webkitCancelRequestAnimationFrame ||
          a.mozCancelRequestAnimationFrame ||
          a.oCancelRequestAnimationFrame ||
          a.msCancelRequestAnimationFrame ||
          o),
        function (a, i) {
          if (a) {
            var n = h("canvas");
            return (
              (n.className = "n-particles-js-canvas-el"),
              a.appendChild(n),
              new t(n, i)
            );
          }
          return !1;
        }
      );
    });
})(window);
