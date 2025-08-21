import { html } from "../utils/react.ts"
import Head from "../components/Head.ts"
import Header from "../components/Header.ts"
import Footer from "../components/Footer.ts"

const About = () => html`
  <${Head} 
    title="Sejori.net | About" 
    desc="Thanks for taking the time to stop by my website - reach out if you would like to talk tech!"
  />
  <body>
    <${Header} />
    
    <main id="about" class="container column align-center">
      <a id="scrolly" href="#about">👇</a>
      <img class="profile-pic align-self-center border-large" src="/images/cartoon-pic.png" alt="Seb" />
      <div class="row justify-center">
        <a href="mailto:seb@sejori.net"><img class="icon" src="/icons/email.svg" alt="email" /></a>
      </div>
      <h1>
        You made it to my about page 🎉
      </h1>
      <p>Thanks for taking the time to stop by my website (congrats if you solved the first puzzle)! </p>
      <p>
        My name is Seb. I was born in 1996 and I've been working as a software engineer in London for the past 8 years. My passions lie in smart, efficient software and systems for positive social change.
      </p>
      <p>
        Need to work out what to cook? Try my AI-powered meal planner: <a href="https://panplan.ai">PanPlan.ai</a>.
      </p>
      <p>
        You can also see my work on <a href="https://github.com/sejori">GitHub</a> or <a href="https://linkedin.com/in/sejori">LinkedIn</a>.
      </p>
      <p>
        I'm a big fan of project-based learning, so I enjoy experimenting, teaching and solving problems.
        Whether in the skatepark, studio or office keep it fun, seriousness breeds burnout. 
        If you have a project you'd like to talk about, get in touch via email above.
      </p>
      <p>
        <b>Hint:</b> my cubic house has a door on the left and a window on the right. I usually leave the window shut but when looking for secrets I tend to open it...
      </p>
    </main>

    <${Footer} />
  </body>
`

export default About

