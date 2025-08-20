import { cre8, cre8modal } from './utils.js'

const cellCodes = [
  {
    name: "Home",
    code: [
      [
        1, 1, 0,
        1, 0, 0,
        1, 0, 1,
      ],
      [
        1, 1, 1,
        0, 0, 0,
        0, 1, 1,
      ],
      [
        1, 1, 1,
        0, 0, 1,
        1, 1, 1,
      ]
    ],
    action: () => window.location.href = "/", 
  },
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
      cre8("h2", { textContent: "The GameCube!" }, modal)
      cre8("p", { textContent: "Ah the nostalgia... games and websites were my inspiration to start learning to code. It's been a long journey since then and I've grown a lot along the way." }, modal)
      cre8("p", { textContent: "The technical world is a deep one full of great people and great ideas but remember not to get deluded by the promise of effortless riches." }, modal)
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
    action: () => window.location.href = "/blog/web-tech"
  },
  {
    name: "completed",
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
    action: () => window.location.href = "/blog/completed?cheatCodes=true"
  },
]

export { cellCodes }