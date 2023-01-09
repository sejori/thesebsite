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
      cre8("h3", { textContent: "My inspiration - The GameCube!" }, modal)
      cre8("p", { textContent: "Games and websites were how I learned to code." }, modal)
      cre8("p", { textContent: "Now I'm also interested in network security, asset optimisation and data pipelines, AI and robotics." }, modal)
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
    name: "open-window",
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
    action: () => window.location.href = "/blog/open-window"
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
    action: () => window.location.href = "/blog/tech"
  },
  {
    name: "completed",
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
    action: () => window.location.href = "/blog/completed"
  },
]

export { cellCodes }