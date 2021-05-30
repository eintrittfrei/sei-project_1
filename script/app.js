function init() {
  console.log('js up and running')



  // Grid
  const grid = document.querySelector('.grid')
  //console.log(grid)
  const width = 10
  //console.log(width)
  const cellCount = width * width
  //console.log(cellCount)
  const cells = []
  //console.log(cells)

  // Lipstick shooter - position 
  const lipClass = 'lipstick' //
  const lipStartPosition = 84 // startign posititon of lipstick 
  let lipCurrentPosition = 84 // current postition of lipstick 


  //const squaresGrid = document.querySelectorAll('.grid') // select the divs in the grid 
  const startButton = document.querySelector('#start') // select start button 
  //const pointsShot = document.querySelector('#points-display') // select points display 
  //const livesLeft = document.querySelectorAll('#lives-display') //select lives display 

  const dragClass = 'drags'
  const dragStartPosition = 10
  let dragCurrentPosition = 10
  let dragTimer







  // GRID

  for (let i = 0; i < cellCount; i++) {
    //console.log(cells)
    const cell = document.createElement('div')
    cell.innerText = i
    grid.appendChild(cell)
    cells.push(cell)
  }



  // GAME CONTROLLER RU PAUL:   

  //Add Lipstick to grid 
  function addLipstick(position) {
    cells[position].classList.add(lipClass)
    //console.log(position)
  }
  //Remove lipstick from Grid-call to remove
  function removeLip(position) {
    cells[position].classList.remove(lipClass)
  }
  addLipstick(lipStartPosition) //call function to add lipstick 
  //console.log(addLipstick)

  // Move Lipstick 
  function handleKeyUp(event) {
    const key = event.keyCode 
    //console.log('current position', lipCurrentPosition)
    removeLip(lipCurrentPosition) 
    //console.log('keyCode:', event.keyCode)
    if (key === 37 && lipCurrentPosition % width !== 0)  {
      lipCurrentPosition--
    } else if (key === 39 && lipCurrentPosition % width !== width - 1){
      lipCurrentPosition++
    } else {
      //console.log('InvalidKey')
    }
    //console.log('position after redefining', lipCurrentPosition)
    addLipstick(lipCurrentPosition)
  }

  


  //DRAG QUEENS MOVING: WORKING adding DRAG

  //Add drag to grid 
  function addDrags(position) {
    cells[position].classList.add(dragClass)
    //console.log('lips position passed in ', position)

  }
  //remove drag from grid 
  function removeDrags(position) {
    cells[position].classList.remove(dragClass)
  }

  addDrags(dragStartPosition)

  /*function startGame(){
    //removeDrags(dragCurrentPosition)
    dragTimer = setInterval(() => {
      if (dragCurrentPosition < 99) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition++
      } else if (dragCurrentPosition === 99) {
        removeDrags(dragCurrentPosition)
        window.alert('GAME OVER')
      }
      addDrags(dragCurrentPosition)
    },1000)
  }
*/


  function startGame(){
    //removeDrags(dragCurrentPosition)
    dragTimer = setInterval(() => {
      if (dragCurrentPosition < 19) { 
        removeDrags(dragCurrentPosition)
        dragCurrentPosition++
      } else if (dragCurrentPosition === 19) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition = 29
      } else if (dragCurrentPosition > 20) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition--
      } else if (dragCurrentPosition === 20) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition = 30 // works until this point 
        return
      } 
      addDrags(dragCurrentPosition)
    },1000)
  }

 /* function startGame2(){
    dragTimer2 = setInterval(() => {
      if (dragCurrentPosition < 39) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition--
      } else if (dragCurrentPosition === 20) {
        removeDrags(dragCurrentPosition)

      }
      //addDrags(dragCurrentPosition)
    }, 1000)

*/



// Shooting motion 



  // Event listeneners 

  startButton.addEventListener('click', startGame)

  document.addEventListener('keyup', handleKeyUp)
  




  














}

window.addEventListener('DOMContentLoaded', init)