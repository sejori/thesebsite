import { cre8, cre8modal } from './cre8.js'

const cellCodes = [
  {
    name: "GameCube",
    code: [
      [
        1, 1, 0,
        1, 0, 0,
        1, 0, 1,
      ],
      [
        1, 0, 1,
        1, 0, 0,
        1, 1, 1,
      ],
      [
        1, 1, 1,
        0, 0, 1,
        1, 1, 1,
      ]
    ],
    action: () => {
      const modal = cre8modal()
      const text1 = cre8("h3", { textContent: "My inspiration - The GameCube!" }, modal)
      const text2 = cre8("p", { textContent: "Games and websites were how I learned to code." }, modal)
      const text3 = cre8("p", { textContent: "Now I'm also interested in Network Security, AI and Robotics." }, modal)
    }, 
  },
  {
    name: "about",
    code: [
      [
        0, 1, 1,
        1, 1, 0,
        1, 0, 0,
      ],
      [
        1, 0, 0,
        1, 0, 0,
        1, 1, 1,
      ],
      [
        0, 0, 1,
        0, 0, 1,
        1, 1, 1,
      ]
    ],
    action: () => window.location.href = "/about"
  },
  {
    name: "hint",
    code: [
      [
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
      ],
      [
        1, 1, 1,
        1, 0, 1,
        1, 0, 1,
      ],
      [
        1, 1, 1,
        1, 0, 1,
        1, 1, 1,
      ]
    ],
    action: () => {
      let modal = cre8modal()
      let heading = cre8("h1", { textContent: "Nicely Done!" }, modal)
      let text1 = cre8("p", { textContent: "If you know anything about websites you might know that I've used JavaScript to programme the magical NavCube. Boy oh boy do I love me some JavaScript." }, modal)
      let text2 = cre8("p", { textContent: "But JavaScript wouldn't be here without it's low-level and syntactically similar ancestral programming language." }, modal)
      let text3 = cre8("p", { innerHTML: "<b>hint:</b> Draw the name (or letter) of the language in the middle of the NavCube..." }, modal)
    }
  },
  {
    name: "technologies",
    code: [
      [
        0, 0, 0,
        0, 1, 1,
        0, 1, 0,
      ],
      [
        0, 1, 0,
        0, 1, 1,
        0, 0, 0,
      ],
      [
        0, 0, 0,
        1, 1, 0,
        0, 0, 0,
      ]
    ],
    action: () => window.location.href = "/tech"
  },
  {
    name: "blog",
    code: [
      [
        1, 0, 1,
        0, 0, 0,
        1, 0, 1,
      ],
      [
        1, 0, 1,
        1, 0, 1,
        1, 1, 1,
      ],
      [
        1, 0, 1,
        1, 0, 1,
        1, 1, 1,
      ]
    ],
    action: () => window.location.href = "/blog"
  },
]

export { cellCodes }