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
      const text1 = cre8("p", { textContent: "You know my inspiration - the GameCube!" }, modal)
      const text2 = cre8("p", { textContent: "What's your favourite game console? Find my about page and you'll be able to email me your answer..." }, modal)
    }, 
  },
  {
    name: "about",
    code: [
      [
        0, 0, 1,
        0, 0, 1,
        1, 1, 1,
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
      let heading = cre8("h1", { textContent: "🎉" }, modal)
      let text1 = cre8("p", { textContent: "If you know anything about websites you might know that I've used a little language called JavaScript to program the magical NavCube. Boy oh boy do I love me some JavaScript." }, modal)
      let text2 = cre8("p", { textContent: "But JavaScript wouldn't be here without it's low-level and syntactically similar ancestor." }, modal)
      let text3 = cre8("p", { textContent: "Hint: draw the letter using 8 squares..." }, modal)
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
    name: "projects",
    code: [
      [
        0, 1, 0,
        1, 1, 1,
        0, 1, 0,
      ],
      [
        0, 1, 0,
        0, 1, 0,
        0, 0, 0,
      ],
      [
        0, 1, 0,
        0, 1, 0,
        0, 0, 0,
      ]
    ],
    action: () => window.location.href = "/projects"
  },
  {
    name: "blog",
    code: [
      [
        1, 1, 1,
        1, 1, 1,
        1, 1, 0,
      ],
      [
        1, 1, 0,
        0, 1, 1,
        0, 0, 0,
      ],
      [
        0, 1, 1,
        1, 1, 0,
        0, 0, 0,
      ]
    ],
    action: () => window.location.href = "/blog#congratulations"
  }
]

export { cellCodes }