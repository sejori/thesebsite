import { html } from "../utils/react.ts"

const Header = ({ showCube }: Record<string, string>) => html`
  <header class="row justify-between">
    <div id="nav-cube-shortcuts" class="wrap justify-around align-center">
      <a href="/">
        <h1 id="header-title">
          sejori.net
        </h1>
      </a>
      <div></div>
      <a href="/blog" class="column align-center shortcut-label">
        <!-- <img width="60px" alt="blog-code" src="/images/ss_code_wc.png" /> -->
        BLOG
      </a>
      <a href="/about" class="column align-center shortcut-label">
        <!-- <img width="60px" alt="about-code" src="/images/ss_code_heart.png" /> -->
        ABOUT
      </a>
    </div>
    ${showCube === "true" && html`<div class="header-logo">
      <div id="nav-cube" class="elastic-spin bounce-in" data-tilt data-tilt-scale="1.12" data-tilt-reverse="true"></div>
    </div>`}
  </header>
`

export default Header