class AlertElement extends HTMLElement {
  constructor() {
    super(),
      (this.close = this.close.bind(this)),
      (this.destroyCloseButton = this.destroyCloseButton.bind(this)),
      (this.createCloseButton = this.createCloseButton.bind(this)),
      (this.onMutation = this.onMutation.bind(this)),
      (this.observer = new MutationObserver(this.onMutation)),
      this.observer.observe(this, {
        attributes: !1,
        childList: !0,
        subtree: !0,
      }),
      this.addEventListener("animationend", (t) => {
        "joomla-alert-fade-in" === t.animationName &&
          t.target === this &&
          (this.dispatchEvent(new CustomEvent("joomla.alert.shown")),
          this.style.removeProperty("animationName"));
      }),
      this.addEventListener("animationend", (t) => {
        "joomla-alert-fade-out" === t.animationName &&
          t.target === this &&
          (this.dispatchEvent(new CustomEvent("joomla.alert.closed")),
          this.remove());
      });
  }
  static get observedAttributes() {
    return ["type", "role", "dismiss", "auto-dismiss", "close-text"];
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(t) {
    this.setAttribute("type", t);
  }
  get role() {
    return this.getAttribute("role");
  }
  set role(t) {
    this.setAttribute("role", t);
  }
  get closeText() {
    return this.getAttribute("close-text");
  }
  set closeText(t) {
    this.setAttribute("close-text", t);
  }
  get dismiss() {
    return this.getAttribute("dismiss");
  }
  set dismiss(t) {
    this.setAttribute("dismiss", t);
  }
  get autodismiss() {
    return this.getAttribute("auto-dismiss");
  }
  set autodismiss(t) {
    this.setAttribute("auto-dismiss", t);
  }
  connectedCallback() {
    this.dispatchEvent(new CustomEvent("joomla.alert.show")),
      (this.style.animationName = "joomla-alert-fade-in"),
      (this.type &&
        ["info", "warning", "danger", "success"].includes(this.type)) ||
        this.setAttribute("type", "info"),
      (this.role && ["alert", "alertdialog"].includes(this.role)) ||
        this.setAttribute("role", "alert"),
      this.firstElementChild &&
        "BUTTON" === this.firstElementChild.tagName &&
        ((this.button = this.firstElementChild),
        this.button.classList.contains("joomla-alert--close") &&
          this.button.classList.add("joomla-alert--close"),
        "" === this.button.innerHTML &&
          (this.button.innerHTML = '<span aria-hidden="true">&times;</span>'),
        this.button.hasAttribute("aria-label") ||
          this.button.setAttribute("aria-label", this.closeText)),
      this.hasAttribute("dismiss") && !this.button && this.createCloseButton(),
      this.hasAttribute("auto-dismiss") && this.autoDismiss();
  }
  disconnectedCallback() {
    this.button && this.button.removeEventListener("click", this.close),
      this.observer.disconnect();
  }
  attributeChangedCallback(t, e, s) {
    switch (t) {
      case "type":
        (!s ||
          (s && -1 === ["info", "warning", "danger", "success"].indexOf(s))) &&
          (this.type = "info");
        break;
      case "role":
        (!s || (s && -1 === ["alert", "alertdialog"].indexOf(s))) &&
          (this.role = "alert");
        break;
      case "dismiss":
        (s && "" !== s) || (e && "" !== e)
          ? this.button && "false" === s
            ? this.destroyCloseButton()
            : this.button || "false" === s || this.createCloseButton()
          : this.button && !this.hasAttribute("dismiss")
          ? this.destroyCloseButton()
          : !this.button &&
            this.hasAttribute("dismiss") &&
            this.createCloseButton();
        break;
      case "close-text":
        (s && s === e) ||
          (this.button && this.button.setAttribute("aria-label", s));
        break;
      case "auto-dismiss":
        this.autoDismiss();
    }
  }
  onMutation(t) {
    for (const e of t)
      "childList" === e.type &&
        e.addedNodes.length &&
        this.button &&
        this.firstElementChild !== this.button &&
        this.prepend(this.button);
  }
  close() {
    this.dispatchEvent(new CustomEvent("joomla.alert.close")),
      (this.style.animationName = "joomla-alert-fade-out");
  }
  createCloseButton() {
    (this.button = document.createElement("button")),
      this.button.setAttribute("type", "button"),
      this.button.classList.add("joomla-alert--close"),
      (this.button.innerHTML = '<span aria-hidden="true">&times;</span>'),
      this.button.setAttribute("aria-label", this.closeText),
      this.insertAdjacentElement("afterbegin", this.button),
      this.button.addEventListener("click", this.close);
  }
  destroyCloseButton() {
    this.button &&
      (this.button.removeEventListener("click", this.close),
      this.button.parentNode.removeChild(this.button),
      (this.button = null));
  }
  autoDismiss() {
    const t = parseInt(this.getAttribute("auto-dismiss"), 10);
    setTimeout(this.close, t >= 10 ? t : 3e3);
  }
}
customElements.get("joomla-alert") ||
  customElements.define("joomla-alert", AlertElement);
const getMessageContainer = (t) => {
  let e;
  return t instanceof HTMLElement
    ? t
    : ((e =
        void 0 === t || (t && "#system-message-container" === t)
          ? document.getElementById("system-message-container")
          : document.querySelector(t)),
      e);
};
(Joomla.renderMessages = (t, e, s, i) => {
  const o = getMessageContainer(e);
  (void 0 === s || (s && !1 === s)) && Joomla.removeMessages(o),
    [].slice.call(Object.keys(t)).forEach((e) => {
      let s = e;
      const n = t[e],
        a = document.createElement("joomla-alert");
      ["success", "info", "danger", "warning"].indexOf(e) < 0 &&
        ((s = "notice" === e ? "info" : e),
        (s = "message" === e ? "success" : s),
        (s = "error" === e ? "danger" : s),
        (s = "warning" === e ? "warning" : s)),
        a.setAttribute("type", s),
        a.setAttribute("close-text", Joomla.Text._("JCLOSE")),
        a.setAttribute("dismiss", !0),
        i && parseInt(i, 10) > 0 && a.setAttribute("auto-dismiss", i);
      if (void 0 !== Joomla.Text._(e)) {
        const t = document.createElement("div");
        (t.className = "alert-heading"),
          (t.innerHTML = Joomla.sanitizeHtml(
            `<span class="${e}"></span><span class="visually-hidden">${
              Joomla.Text._(e) ? Joomla.Text._(e) : e
            }</span>`
          )),
          a.appendChild(t);
      }
      const r = document.createElement("div");
      (r.className = "alert-wrapper"),
        n.forEach((t) => {
          r.innerHTML += Joomla.sanitizeHtml(
            `<div class="alert-message">${t}</div>`
          );
        }),
        a.appendChild(r),
        o.appendChild(a);
    });
}),
  (Joomla.removeMessages = (t) => {
    const e = getMessageContainer(t),
      s = [].slice.call(e.querySelectorAll("joomla-alert"));
    s.length &&
      s.forEach((t) => {
        t.close();
      });
  }),
  document.addEventListener("DOMContentLoaded", () => {
    const t = Joomla.getOptions("joomla.messages");
    t &&
      Object.keys(t).map((e) =>
        Joomla.renderMessages(t[e], void 0, !0, void 0)
      );
  });
