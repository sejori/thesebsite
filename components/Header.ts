import { html, css } from "../utils/react.ts"

const Header = ({ showCube }: Record<string, string>) => html`
  <header class="row justify-between">
    <div id="nav-cube-shortcuts" class="wrap justify-around">
      <a href="/" class="column align-center">
        <img width="60px" alt="home-code" src="/images/ss_code_home.png" />
        <p class="shortcut-label">HOME</p>
      </a>
      <a href="/blog" class="column align-center">
        <img width="60px" alt="blog-code" src="/images/ss_code_wc.png" />
        <p class="shortcut-label">BLOG</p>
      </a>
      <a href="/about" class="column align-center">
        <img width="60px" alt="about-code" src="/images/ss_code_heart.png" />
        <p class="shortcut-label">ABOUT</p>
      </a>
    </div>
    ${showCube === "true" && html`<div class="header-logo">
      <div id="nav-cube" class="elastic-spin bounce-in"></div>
    </div>`}
  </header>
`

export const HeaderCSS = css`
  .shortcut-label { 
    text-decoration: none;
    font-size: 0.8rem; 
    color: var(--deepblue); 
    margin: 0.5rem auto; 
  }
`

export default Header