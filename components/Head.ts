import { html } from "../utils/index.ts"

const Head = ({ title, desc }: Record<string, string>) => html`
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>${title}</title>
    <link rel="icon" type="image/png" href="/images/ss_code_home.png">
    <meta name="description" content="${desc}">
    
    <!-- import the webpage's stylesheet -->
    <link rel="stylesheet" href="/style.css">
    
      <!-- import the webpage's javascript -->
    <script src="/scripts/cre8.js" type="module" defer></script>
    <script src="/scripts/nav-cube.js" type="module" defer></script>
  </head>
`

export default Head