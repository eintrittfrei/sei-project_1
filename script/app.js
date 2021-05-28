function init() {
  console.log('js up and running')

  // Grid
  const grid = document.querySelector('.grid')
  console.log(grid)
  const width = 40
  console.log(width)
  const cellCount = width * width
  console.log(cellCount)
  const cells = []
  console.log(cells)

  // Lipstick shooter position 
  const lipClass = 'lipstick'
  const lipStartPosition = 0
  let lipCurrentPosition = 0

  
  for (let i = 0; i < cellCount; i++) {
    console.log(cells)
    const cell = document.createElement('div')
    cell.innerText = i
    grid.appendChild(cell)
    cells.push(cell)

  }












  














}

window.addEventListener('DOMContentLoaded', init)