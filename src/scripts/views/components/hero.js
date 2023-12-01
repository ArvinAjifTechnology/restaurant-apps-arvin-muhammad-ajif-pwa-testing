/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
    <div class="hero" >
    <div class="hero__inner" tabindex="0">
      <h1 class="hero_title">When Hunger Strikes at Home Alone</h1>
      <p class="hero_tagline">Satisfy your cravings with the finest and most delicious food in the world.
        Explore a world of flavors with Ajif Restaurant.
      </p>
    </div>
    </div>

  `;
  }
}

customElements.define('my-hero', Hero);
