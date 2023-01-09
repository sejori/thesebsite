import { cre8 } from './cre8.js'
import { cellCodes } from './cell-codes.js'

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

// PLACEHOLDER "COMPLETED" LOCALSTORAGE
// to be used when unlocking shortcuts is added
const setLocalCompleted = (completed) => localStorage.setItem("completed", JSON.stringify())
const getLocalCompleted = () => {
  const completed = localStorage.getItem("completed")
  if (!completed) return new Array(cellCodes.length).fill(false)
  return JSON.parse(completed)
}

const displayShortcuts = (b) => {
  const shortcuts = document.querySelector("#nav-cube-shortcuts")
  const urlParams = new URLSearchParams(window.location.search)
  const localSetting = localStorage.getItem("cheatCodes")
  
  if (!urlParams.get("cheatCodes") && !localSetting) return false
  
  localStorage.setItem("cheatCodes", true)
  
  return b
    ? shortcuts.style.display = "flex"
    : shortcuts.style.display = "none"
}

const setupNavCube = async (cube, cells, cellData, cellOrder) => {
  
  // only trigger resize once - ignored on homescreen bc conditions
  let small = true;
  
  // add onclick listener to cells
  cells.forEach((pane, i) => pane.forEach((cell, ii) => cell.onclick = () => {
    cell.classList.toggle("highlighted")
    Array.from(cell.classList).some(className => className === "highlighted" ? cellData[i][ii] = 1 : cellData[i][ii] = 0)
    
    // fullscreen cube on subpages
    if (window.location.pathname !== "/" && small) {
      small = false
      
      cube.parentElement.style.height = "100vh";
      cube.parentElement.style.width = "100vw";
    }
    
    checkCells(cube, cellData, cellCodes)
  }))
  
  // scroll to expand & shrink cube on subpages
  if (window.location.pathname !== "/") {
    document.addEventListener('scroll', function() {
      if (window.scrollY === 0 && small) {
        small = false
        
        displayShortcuts(true)
        cube.parentElement.style.height = "100vh";
        return cube.parentElement.style.width = "100vw";  
      }
      if (!small) {
        small = true
        
        displayShortcuts(false)
        cube.parentElement.style.height = "5rem";
        cube.parentElement.style.width = "5rem";   
      }
    });
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
const cellData = cells.map(pane => pane.map(cell => 0))
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