import { html } from "../utils/react.ts"
import Head from "../components/Head.ts"
import Header from "../components/Header.ts"
import Footer from "../components/Footer.ts"

const Index = () => html`
  <${Head} 
    title="Sejori.net" 
    desc="Welcome to Sejori's website. Navigate by inputting codes into the magical NavCube. Can you solve it?"
  />
  <body>
    <${Header}/>
    
    <section id="guide" class="column align-center bg-secondary">
      <a id="scrolly" href="#guide">👇</a>
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