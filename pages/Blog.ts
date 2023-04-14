import { html } from "../utils/react.ts"
import Head from "../components/Head.ts"
import Header, { HeaderCSS } from "../components/Header.ts"
import Footer from "../components/Footer.ts"

const Blog = () => html`
  <${Head} 
    title="The Sebsite | About" 
    desc="Thanks for taking the time to stop by my website - reach out if you would like to talk tech!"
    style="${HeaderCSS}"
  />
  <body>
    <${Header} showCube=true />
    
    <main class="container column align-center"></main>

    <${Footer} />
  </body>
`

export default Blog