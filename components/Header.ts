import { html } from "../utils/react.ts"

const Header = () => html`
  <header>
    <div id="nav-cube-shortcuts" class="row justify-around align-center">
      <a class="header-title" href="/">
        <h1 class="header-title">
          sejori.net
        </h1>
      </a>
      <div></div>
      <!-- <div> -->
        <a href="/blog" class="column align-center shortcut-label">
          <!-- <img width="60px" alt="blog-code" src="/images/ss_code_wc.png" /> -->
          BLOG
        </a>
      <!-- </div> -->
      <!-- <div> -->
        <a href="/about" class="column align-center shortcut-label">
          <!-- <img width="60px" alt="about-code" src="/images/ss_code_heart.png" /> -->
          ABOUT
        </a>
      <!-- </div> -->
    </div>

    <div class="header-logo">
      <div class="tunnel-scene">
        <div class="tunnel-inner">
          <div class="grid-wall grid-wall-back"></div>
          <div class="grid-wall grid-wall-floor"></div>
          <div class="grid-wall grid-wall-left"></div>
          <div class="grid-wall grid-wall-right"></div>
          <div class="grid-wall grid-wall-ceiling"></div>
        </div>
      </div>

      <div id="nav-cube" class="elastic-spin bounce-in" data-tilt data-tilt-scale="1.12"></div>
    </div>
  </header>
`

export default Header