/* eslint-disable linebreak-style */
class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <div class="footer-copyright" tabindex="0">
      <div class="container">
      <p>Copyright &#169; 2023 - Ajif's Restaurants</p>
    </div>
  </div>
  </footer>
  `;
  }
}

customElements.define('my-footer', Footer);
