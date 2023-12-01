/* eslint-disable linebreak-style */
class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
    <div class="app-bar__menu">
      <button id="hamburgerButton"  tabindex="0">☰</button>
    </div>
    <div class="app-bar__brand">
      <h1>Ajif's Restaurant</h1>
    </div>
    <nav id="navigationDrawer" class="app-bar__navigation" tabindex="0">
       <ul>
        <li><a href="#/restaurant-list">Home</a></li>
         <li><a href="#/like">Liked</a></li>
         <li><a href="https://github.com/ArvinAjifTechnology/ArvinAjifTechnology/tree/main">About Us</a></li>
      </ul>
    </nav>
     <nav-bar></nav-bar>
  </header>
    `;
  }
}

customElements.define('my-navbar', Navbar);
