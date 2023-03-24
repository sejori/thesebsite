import { html } from "../utils/react.ts"

const Footer = () => html`
  <footer class="row align-center justify-between">
    <div class="row">
      <a href="/"><p class="icon text-icon">🏠</p></a>
      <a href="#"><p class="icon text-icon">⬆️</p></a>
    </div>
    <div class="row">
      <a target="_blank" href="https://github.com/sebringrose"><img class="icon" src="/icons/github.svg" alt="github" /></a>
      <a target="_blank" href="https://www.linkedin.com/in/sebastien-ringrose-375047134/"><img class="icon" src="/icons/linkedin.svg" alt="linkedin" /></a>
      <a target="_blank" href="https://github.com/edent/SuperTinyIcons/"><p>icons</p></a>
    </div>
  </footer>
`

export default Footer