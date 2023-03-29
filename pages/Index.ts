import { html } from "../utils/react.ts"
import Head from "../components/Head.ts"
import Header, { HeaderCSS } from "../components/Header.ts"
import Footer from "../components/Footer.ts"

const Index = () => html`
  <${Head} 
    title="The Sebsite" 
    desc="Welcome to The Sebsite. Navigate by inputting codes into the magical NavCube. Can you solve it?"
    style="${HeaderCSS}"
  />
  <body>
    <${Header} showCube=false />
    
    <section id="landing" class="full-height column justify-center">
      <div id="nav-cube" class="elastic-spin bounce-in"></div>
      <div class="container text-center fade-in">
        <h1 class="didot bold">
          Seb Ringrose
        </h1>
        <p class="tomato">
          Web Wizard & Tech Educator
        </p>
      </div>
    </div>
    
    <section id="guide" class="bg-secondary column align-center">
      <a id="scrolly" href="#guide" class="didot">?</a>
      <div class="container">
        <h2>NavCube Cheatsheet</h2>
        <p>Input codes into the magical NavCube by clicking/tapping the tiles.</p>
        <p><i>"Is the NavCube really magical?"</i></p>
        <p>Well, if a cube that transports you around the internet isn't magic then I don't know what is. Find your first hint below.</p>
        <p><b>Hint:</b> always follow your heart, even if it's empty. Start with the bottom and side edges, then create a simple heart outline with the top tiles...</p>
        <p>Too lazy to take the challenge: <a href="/?cheatCodes=true">click here</a>. Changed your mind? <a href="/?cheatCodes=false">reset the challenge</a>.</p>
      </div>
    </div>

    <${Footer} />
  </body>
`

export default Index