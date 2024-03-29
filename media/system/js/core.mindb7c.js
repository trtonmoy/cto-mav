const uriAttributes = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  SAFE_URL_PATTERN =
    /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
  DATA_URL_PATTERN =
    /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
  allowedAttribute = (e, t) => {
    const o = e.nodeName.toLowerCase();
    if (t.includes(o))
      return (
        !uriAttributes.has(o) ||
        Boolean(
          SAFE_URL_PATTERN.test(e.nodeValue) ||
            DATA_URL_PATTERN.test(e.nodeValue)
        )
      );
    const n = t.filter((e) => e instanceof RegExp);
    for (let e = 0, t = n.length; e < t; e++) if (n[e].test(o)) return !0;
    return !1;
  };
function sanitizeHtml(e, t, o) {
  if (!e.length) return e;
  if (o && "function" == typeof o) return o(e);
  const n = new window.DOMParser().parseFromString(e, "text/html"),
    r = [].concat(...n.body.querySelectorAll("*"));
  for (let e = 0, o = r.length; e < o; e++) {
    const o = r[e],
      n = o.nodeName.toLowerCase();
    if (!Object.keys(t).includes(n)) {
      o.remove();
      continue;
    }
    const l = [].concat(...o.attributes),
      a = [].concat(t["*"] || [], t[n] || []);
    l.forEach((e) => {
      allowedAttribute(e, a) || o.removeAttribute(e.nodeName);
    });
  }
  return n.body.innerHTML;
}
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i,
  DATA_ATTRIBUTE_PATTERN = /^data-[\w-]*$/i,
  DefaultAllowlist = {
    "*": [
      "class",
      "dir",
      "id",
      "lang",
      "role",
      ARIA_ATTRIBUTE_PATTERN,
      DATA_ATTRIBUTE_PATTERN,
    ],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: [],
    button: ["type"],
    input: [
      "accept",
      "alt",
      "autocomplete",
      "autofocus",
      "capture",
      "checked",
      "dirname",
      "disabled",
      "height",
      "list",
      "max",
      "maxlength",
      "min",
      "minlength",
      "multiple",
      "type",
      "name",
      "pattern",
      "placeholder",
      "readonly",
      "required",
      "size",
      "src",
      "step",
      "value",
      "width",
      "inputmode",
    ],
    select: ["name"],
    textarea: ["name"],
    option: ["value", "selected"],
  };
(window.Joomla = window.Joomla || {}),
  (window.Joomla.editors = window.Joomla.editors || {}),
  (window.Joomla.editors.instances = window.Joomla.editors.instances || {}),
  (window.Joomla.Modal = window.Joomla.Modal || {
    current: "",
    setCurrent: (e) => {
      window.Joomla.current = e;
    },
    getCurrent: () => window.Joomla.current,
  }),
  ((e) => {
    (e.extend = (e, t) => {
      let o = e;
      return (
        null === e && (o = {}),
        [].slice.call(Object.keys(t)).forEach((e) => {
          o[e] = t[e];
        }),
        e
      );
    }),
      (e.optionsStorage = e.optionsStorage || null),
      (e.getOptions = (t, o) => (
        e.optionsStorage || e.loadOptions(),
        void 0 !== e.optionsStorage[t] ? e.optionsStorage[t] : o
      )),
      (e.loadOptions = (t) => {
        if (!t) {
          const t = [].slice.call(
            document.querySelectorAll(".joomla-script-options.new")
          );
          let o = 0;
          if (
            (t.forEach((t) => {
              const n = t.text || t.textContent,
                r = JSON.parse(n);
              r && (e.loadOptions(r), (o += 1)),
                (t.className = t.className.replace(" new", " loaded"));
            }),
            o)
          )
            return;
        }
        e.optionsStorage
          ? t &&
            [].slice.call(Object.keys(t)).forEach((o) => {
              null !== t[o] &&
              "object" == typeof e.optionsStorage[o] &&
              "object" == typeof t[o]
                ? (e.optionsStorage[o] = e.extend(e.optionsStorage[o], t[o]))
                : (e.optionsStorage[o] = t[o]);
            })
          : (e.optionsStorage = t || {});
      }),
      (e.Text = {
        strings: {},
        _: (t, o) => {
          let n = t,
            r = o;
          const l = e.getOptions("joomla.jtext");
          return (
            l && (e.Text.load(l), e.loadOptions({ "joomla.jtext": null })),
            (r = void 0 === r ? n : r),
            (n = n.toUpperCase()),
            void 0 !== e.Text.strings[n] ? e.Text.strings[n] : r
          );
        },
        load: (t) => (
          [].slice.call(Object.keys(t)).forEach((o) => {
            e.Text.strings[o.toUpperCase()] = t[o];
          }),
          e.Text
        ),
      }),
      (e.JText = e.Text),
      (e.submitform = (e, t, o) => {
        let n = t;
        const r = e;
        n || (n = document.getElementById("adminForm")),
          r && (n.task.value = r),
          (n.noValidate = !o),
          o
            ? n.hasAttribute("novalidate") && n.removeAttribute("novalidate")
            : n.setAttribute("novalidate", "");
        const l = document.createElement("input");
        l.classList.add("hidden"),
          (l.type = "submit"),
          n.appendChild(l).click(),
          n.removeChild(l);
      }),
      (e.submitbutton = (t, o, n) => {
        let r = document.querySelector(o || "form.form-validate"),
          l = n;
        if (
          ("string" == typeof o &&
            null === r &&
            (r = document.querySelector(`#${o}`)),
          r)
        ) {
          if (null == l) {
            const e = t.split(".");
            let o = r.getAttribute("data-cancel-task");
            o || (o = `${e[0]}.cancel`), (l = t !== o);
          }
          (l && !document.formvalidator.isValid(r)) || e.submitform(t, r);
        } else e.submitform(t);
      }),
      (e.checkAll = (e, t) => {
        if (!e.form) return !1;
        const o = t || "cb",
          n = [].slice.call(e.form.elements);
        let r = 0;
        return (
          n.forEach((t) => {
            t.type === e.type &&
              0 === t.id.indexOf(o) &&
              ((t.checked = e.checked), (r += t.checked ? 1 : 0));
          }),
          e.form.boxchecked &&
            ((e.form.boxchecked.value = r),
            e.form.boxchecked.dispatchEvent(
              new CustomEvent("change", { bubbles: !0, cancelable: !0 })
            )),
          !0
        );
      }),
      (e.isChecked = (e, t) => {
        let o = t;
        if (
          (void 0 === o
            ? (o = document.getElementById("adminForm"))
            : "string" == typeof t && (o = document.getElementById(t)),
          (o.boxchecked.value = e
            ? parseInt(o.boxchecked.value, 10) + 1
            : parseInt(o.boxchecked.value, 10) - 1),
          o.boxchecked.dispatchEvent(
            new CustomEvent("change", { bubbles: !0, cancelable: !0 })
          ),
          !o.elements["checkall-toggle"])
        )
          return;
        let n,
          r,
          l,
          a = !0;
        for (n = 0, l = o.elements.length; n < l; n++)
          if (
            ((r = o.elements[n]),
            "checkbox" === r.type && "checkall-toggle" !== r.name && !r.checked)
          ) {
            a = !1;
            break;
          }
        o.elements["checkall-toggle"].checked = a;
      }),
      (e.tableOrdering = (t, o, n, r) => {
        let l = r;
        void 0 === l
          ? (l = document.getElementById("adminForm"))
          : "string" == typeof r && (l = document.getElementById(r)),
          (l.filter_order.value = t),
          (l.filter_order_Dir.value = o),
          e.submitform(n, l);
      }),
      (e.listItemTask = (t, o, n = null) => {
        let r = n;
        r = null !== n ? document.getElementById(n) : document.adminForm;
        const l = r[t];
        let a,
          s = 0;
        if (!l) return !1;
        for (; (a = r[`cb${s}`]), a; ) (a.checked = !1), (s += 1);
        return (
          (l.checked = !0), (r.boxchecked.value = 1), e.submitform(o, r), !1
        );
      }),
      (e.replaceTokens = (e) => {
        if (!/^[0-9A-F]{32}$/i.test(e)) return;
        [].slice.call(document.getElementsByTagName("input")).forEach((t) => {
          "hidden" === t.type &&
            "1" === t.value &&
            32 === t.name.length &&
            (t.name = e);
        });
      }),
      (e.request = (t) => {
        let o;
        const n = e.extend(
          { url: "", method: "GET", data: null, perform: !0 },
          t
        );
        try {
          if (
            ((o = new XMLHttpRequest()),
            o.open(n.method, n.url, !0),
            o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            o.setRequestHeader("X-Ajax-Engine", "Joomla!"),
            "GET" !== n.method)
          ) {
            const t = e.getOptions("csrf.token", "");
            t && o.setRequestHeader("X-CSRF-Token", t),
              "string" != typeof n.data ||
                (n.headers && n.headers["Content-Type"]) ||
                o.setRequestHeader(
                  "Content-Type",
                  "application/x-www-form-urlencoded"
                );
          }
          if (
            (n.headers &&
              [].slice.call(Object.keys(n.headers)).forEach((e) => {
                ("Content-Type" === e &&
                  "false" === n.headers["Content-Type"]) ||
                  o.setRequestHeader(e, n.headers[e]);
              }),
            (o.onreadystatechange = () => {
              4 === o.readyState &&
                (200 === o.status
                  ? n.onSuccess && n.onSuccess.call(window, o.responseText, o)
                  : n.onError && n.onError.call(window, o),
                n.onComplete && n.onComplete.call(window, o));
            }),
            n.perform)
          ) {
            if (n.onBefore && !1 === n.onBefore.call(window, o)) return o;
            o.send(n.data);
          }
        } catch (e) {
          return window.console && console.log(e), !1;
        }
        return o;
      }),
      (e.sanitizeHtml = (e, t, o) =>
        sanitizeHtml(
          e,
          null == t ? DefaultAllowlist : { ...DefaultAllowlist, ...t },
          o
        )),
      (e.ajaxErrorsMessages = (t, o) => {
        const n = {};
        if ("parsererror" === o) {
          const o = [];
          let r = t.responseText.trim();
          for (let e = r.length - 1; e >= 0; e--)
            o.unshift(["&#", r[e].charCodeAt(), ";"].join(""));
          (r = o.join("")),
            (n.error = [e.Text._("JLIB_JS_AJAX_ERROR_PARSE").replace("%s", r)]);
        } else
          "nocontent" === o
            ? (n.error = [e.Text._("JLIB_JS_AJAX_ERROR_NO_CONTENT")])
            : "timeout" === o
            ? (n.error = [e.Text._("JLIB_JS_AJAX_ERROR_TIMEOUT")])
            : "abort" === o
            ? (n.error = [e.Text._("JLIB_JS_AJAX_ERROR_CONNECTION_ABORT")])
            : t.responseJSON && t.responseJSON.message
            ? (n.error = [
                `${e.Text._("JLIB_JS_AJAX_ERROR_OTHER").replace(
                  "%s",
                  t.status
                )} <em>${t.responseJSON.message}</em>`,
              ])
            : t.statusText
            ? (n.error = [
                `${e.Text._("JLIB_JS_AJAX_ERROR_OTHER").replace(
                  "%s",
                  t.status
                )} <em>${t.statusText}</em>`,
              ])
            : (n.error = [
                e.Text._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status),
              ]);
        return n;
      });
  })(Joomla);
