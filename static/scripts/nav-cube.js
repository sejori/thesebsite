import { cre8, throttleEvent } from './utils.js'
import { cellCodes } from './cell-codes.js'

const cheatParam = new URLSearchParams(window.location.search).get("cheatCodes")
const localCheatCodes = 
  (localStorage.getItem("cheatCodes") === "true" || cheatParam === "true") 
  && cheatParam !== "false"


const cre8panes = cube => [
  cre8("div", { className: "pane cube-top-pane" }, cube),
  cre8("div", { className: "pane cube-left-pane" }, cube),
  cre8("div", { className: "pane cube-right-pane" }, cube)
]

const cre8cells = panes => {
  const cells = [ [], [], [] ]
  for (let i = 0; i < 27; i++) {
    if (i < 9) {
      cells[0].push(cre8("span", { className: "cell" }, panes[0]))
    } else if (i < 18) {
      cells[1].push(cre8("span", { className: "cell" }, panes[1])) 
    } else {
      cells[2].push(cre8("span", { className: "cell" }, panes[2])) 
    }
  }
  
  return cells
}

const displayShortcuts = (b) => {
  const shortcuts = document.querySelector("#nav-cube-shortcuts")
  if (!localCheatCodes) return shortcuts.style.display = "none"

  return b 
    ? shortcuts.style.display = "flex"
    : shortcuts.style.display = "none"
}

const setupNavCube = async (cube, cells, cellData, cellOrder) => {
  localStorage.setItem("cheatCodes", localCheatCodes)

  // only trigger resize once - ignored on homescreen bc conditions
  let small = true;

  const enlargeCube = () => {
    small = false
    displayShortcuts(true)
    cube.parentElement.style.height = "100vh";
    cube.parentElement.style.width = "100vw";
  }

  const shrinkCube = () => {
    small = true 
    displayShortcuts(false)
    cube.parentElement.style.height = "5rem";
    cube.parentElement.style.width = "5rem";   
  }
  
  // add onclick listener to cells
  cells.forEach((pane, i) => pane.forEach((cell, ii) => cell.onclick = () => {
    cell.classList.toggle("highlighted")
    Array.from(cell.classList).some(className => {
      className === "highlighted" ? cellData[i][ii] = 1 : cellData[i][ii] = 0
    })
    
    // fullscreen cube on subpages
    if (window.location.pathname !== "/" && small) enlargeCube()
    checkCells(cube, cellData, cellCodes)
  }))
  
  // scroll to expand & shrink cube on subpages
  if (window.location.pathname !== "/") {
    document.addEventListener('scroll', throttleEvent(function() {
      if (window.scrollY === 0 && small) enlargeCube()
      else if (!small) shrinkCube()
    }, 10));
  } else {
    displayShortcuts(true)
  }
  
  // roll starting cells
  for (let i = 0; i < cellOrder.length; i++) {
    await new Promise(res => setTimeout(res, 150))
    cells[cellOrder[i][0]][cellOrder[i][1]].className = "cell highlighted"
    cellData[cellOrder[i][0]][cellOrder[i][1]] = 1
    if (i === cellOrder.length - 1) {
      await new Promise(res => setTimeout(res, 300))
      cells[0][8].classList.toggle("highlighted")
      cellData[0][8] = 1
      cube.className = "wobble"
    }
  }
}

const checkCells = (cube, cellData, cellCodes) => cellCodes.forEach(cellCode => {
  // first make sure top matches then do left then right
  if (cellData[0].every((cell, i) => cell === cellCode.code[0][i])) {
    if (cellData[1].every((cell, i) => cell === cellCode.code[1][i])) {
      if (cellData[2].every((cell, i) => cell === cellCode.code[2][i])) {
        cube.classList.toggle("bounce-in")
        new Promise(res => setTimeout(res, 500)).then(() => {
          cellCode.action()
          cube.classList.toggle("bounce-in")
        })
      }
    }
  }    
})

const cube = document.querySelector("#nav-cube")
const panes = cre8panes(cube)
const cells = cre8cells(panes)
const cellData = cells.map(pane => pane.map(() => 0))
const openingCellOrder = [ 
  [0, 1],
  [0, 0],
  [0, 3],
  [0, 6],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 5],
  [2, 8],
  [2, 7],
  [2, 6],
  [1, 8],
  [1, 7]
]
setupNavCube(cube, cells, cellData, openingCellOrder)