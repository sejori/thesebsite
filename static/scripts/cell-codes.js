import { resetCells } from "./nav-cube.js"

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
        1, 0, 1,
        1, 0, 1,
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
        1, 0, 1,
        1, 0, 1,
      ]
    ],
  action: () => alert("BING! Easter egg alert \n\n🐤 🐰 🐥 🎁 🌈 🦋 🥚\n\nRemember the GameCube? Ah the nostalgia..."), 
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
        1, 1, 1,
        0, 0, 1,
        0, 0, 1,
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
        0, 1, 0,
        0, 1, 0,
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
        0, 0, 0,
        1, 1, 0,
        0, 0, 0,
      ]
    ],
    action: () => window.location.href = "/blog/completed?cheatCodes=true"
  },
  {
    name: "reset",
    code: [
      [
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
      ],
      [
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
      ],
      [
        1, 1, 1,
        1, 1, 1,
        1, 1, 1,
      ]
    ],
    action: () => resetCells()
  },
]

export { cellCodes }