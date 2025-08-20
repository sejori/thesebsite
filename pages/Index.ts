import { html } from "../utils/react.ts"
import Head from "../components/Head.ts"
import Header from "../components/Header.ts"
import Footer from "../components/Footer.ts"

const Index = () => html`
  <${Head} 
    title="The Sebsite" 
    desc="Welcome to The Sebsite. Navigate by inputting codes into the magical NavCube. Can you solve it?"
  />
  <body>
    <${Header} showCube=false />
    
    <section id="landing" class="full-height column justify-center">
      <div class="tunnel-scene">
        <div class="tunnel-inner">
          <div class="grid-wall grid-wall-back"></div>
          <div class="grid-wall grid-wall-floor"></div>
          <div class="grid-wall grid-wall-left"></div>
          <div class="grid-wall grid-wall-right"></div>
          <div class="grid-wall grid-wall-ceiling"></div>
        </div>
      </div>

      <div id="nav-cube" class="elastic-spin bounce-in" data-tilt data-tilt-scale="1.12" data-tilt-reverse="true"></div>
    </div>
    
    <section id="guide" class="column align-center bg-secondary">
      <a id="scrolly" href="#guide" class="didot">?</a>
      <div class="container">
        <h1>NavCube Cheatsheet</h1>
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