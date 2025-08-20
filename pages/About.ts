import { html } from "../utils/react.ts"
import Head from "../components/Head.ts"
import Header from "../components/Header.ts"
import Footer from "../components/Footer.ts"

const About = () => html`
  <${Head} 
    title="The Sebsite | About" 
    desc="Thanks for taking the time to stop by my website - reach out if you would like to talk tech!"
  />
  <body>
    <${Header} showCube=true />
    
    <section id="about" class="container column align-center">
      <img class="profile-pic align-self-center border-large" src="/images/profile_pic.jpg" alt="Seb" />
      <div class="row justify-center">
        <a href="mailto:seb@sejori.net"><img class="icon" src="/icons/gmail.svg" alt="email" /></a>
      </div>
      <h1>
        You made it to my about page 🎉
      </h1>
      <p>Thanks for taking the time to stop by my website (congratulations if you solved the first puzzle)! </p>
      <p>
        My name is Sebastien. I was born in 1996 and work as a software developer, technical educator and open-source contributor, mostly in London.
      </p>
      <p>
        As a big fan of project-based learning, I really enjoy teaching and solving real problems. My passion lies in smart and efficient software and systems engineering, specifically in the application of radical social change (we all know we need it). Keep exploring the site to learn more.
      </p>
      <p>
        Whether in the skatepark, studio or "office" keep it fun, seriousness breeds burnout. If you have a project you'd like to share with me, get in touch via the email button above. You can see more of my work on <a href="https://github.com/sejori">GitHub</a> or <a href="https://linkedin.com/in/sejori">LinkedIn</a>.
      </p>
      <p>
        <b>Hint:</b> my purple cubic house has a white door on the left and a window on the right. I usually leave the window shut but when looking for secrets I tend to open it...
      </p>
    </section>

    <${Footer} />
  </body>
`

export default About

