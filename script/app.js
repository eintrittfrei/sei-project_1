function init() {
  console.log('js up and running')

  // Grid
  const grid = document.querySelector('.grid')
  //console.log(grid)
  const width = 40
  //console.log(width)
  const cellCount = width * width
  //console.log(cellCount)
  const cells = []
  //console.log(cells)

  // Lipstick shooter position 
  const lipClass = 'lipstick'
  const lipStartPosition = 1573 // startign posititon of lipstick 
  let lipCurrentPosition = 0 // current postition of lipstick 


  //The Grid
  for (let i = 0; i < cellCount; i++) {
    //console.log(cells)
    const cell = document.createElement('div')
    cell.innerText = i
    grid.appendChild(cell)
    cells.push(cell)


  }
  //Add Lipstick to grid 
  function addLipstick(position) {
    console.log('position passed in', position)
    cells[position].classList.add(lipClass)
  }

  // Remove lipstick from Grid
  function removeLip(position) {
    cells[position].classList.remove(lipClass)
  }


  addLipstick(lipStartPosition)

  console.log(addLipstick)







  














}

window.addEventListener('DOMContentLoaded', init)