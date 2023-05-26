class BlendyBird extends HTMLElement {
  static get tagName() {
    return "ce-blendy-bird";
  }
  constructor() {
    super();

    this.shadow = this.attachShadow({mode: "open"});
    this.shadow.innerHTML = `<h3>Blendy Bird</h3>`;
  }
}

customElements.define(BlendyBird.tagName, BlendyBird);