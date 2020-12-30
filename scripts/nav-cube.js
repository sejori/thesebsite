import { cre8, cre8modal } from './cre8.js'
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

const rollCells = async (cube, cells, cellData, cellOrder) => {
  cells.forEach((pane, i) => pane.forEach((cell, ii) => cell.onclick = () => {
    if (window.location.pathname !== "/") {
      cube.classList.toggle("bounce-in")
      return window.location.href = "/"
    }
    cell.classList.toggle("highlighted")
    Array.from(cell.classList).some(className => className === "highlighted" ? cellData[i][ii] = 1 : cellData[i][ii] = 0)
    checkCells(cube, cellData, cellCodes)
  }))
  
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

const cheatsheet = () => {
  const modal = cre8modal()
  const heading = cre8("h1", { textContent: "Cube Nav cheatsheet" }, modal)
  const text1 = cre8("p", { textContent: "Looks like you're new here. Not to worry, getting around is simple. All you need to do is input shapes into the magical NavCube by tapping on the squares." }, modal)
  const text2 = cre8("p", { textContent: "Is the NavCube really magical? Well, if a cube that transports you around the internet isn't magic then I don't know what is." }, modal)
  const text3 = cre8("p", { textContent: "But what shapes should you create? Maybe your heart would be a good place to start. After that, you'll find hints at the bottom of each page you find - good luck!" }, modal)
  const text4 = cre8("p", { textContent: "hint: for this first shape start with only the bottom and side edges filled in, then complete the shape with 5 top squares..." }, modal)
}

const checkCells = (cube, cellData, cellCodes) => cellCodes.forEach(cellCode => {
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
rollCells(cube, cells, cellData, openingCellOrder)

if (window.location.pathname === "/") document.querySelector("#cheatsheet").addEventListener("click", cheatsheet)