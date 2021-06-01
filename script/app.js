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
  const lipStartPosition = 84
  let lipCurrentPosition = 84 // current postition of lipstick 


  //const squaresGrid = document.querySelectorAll('.grid') // select the divs in the grid 
  const startButton = document.querySelector('#start') // select start button 
  //const pointsShot = document.querySelector('#points-display') // select points display 
  //const livesLeft = document.querySelectorAll('#lives-display') //select lives display 

  // variables for aliens/ DRAGS
  // DRAG 1
  const dragClass = 'drags'
  const dragStartposition = 10
  let dragCurrentPosition = 10
  let dragTimer

  /*// DRAG 2
  const dragClass2 = 'drags2' 

  // DRAG 3
  const dragClass3 = 'drags3'

  // DRAG 4
  const dragClass4 = 'drags4'

*/


  // All DRAGS Array  DRAGS 1-4

  const allDragsSelected = ['drags', 'drags2', 'drags3', 'drags4']
  console.log(allDragsSelected)
const drags = document.querySelector('.drags', '.drags2', '.drags3', '.drags4')



  // variables for shooting
  const bullet = 'bullet'
  const bulletStart = lipCurrentPosition - 10 
  let bulletCurrentPosition = bulletStart
  let bulletTimer

  // GRID

  for (let i = 0; i < cellCount; i++) {
    //console.log(cells)
    const cell = document.createElement('div')
    cell.innerText = i
    grid.appendChild(cell)
    cells.push(cell)
  }




  //        START GAME 
  //DRAG QUEENS MOVING: WORKING adding DRAG

  // DRAG 1
  function addDrags(position) {
    cells[position].classList.add(dragClass)
    //console.log('lips position passed in ', position)

  }
  //remove drag from grid 
  function removeDrags(position) {
    cells[position].classList.remove(dragClass)
  }

  addDrags(dragCurrentPosition)

/*
  // DRAG 2
  function addDrags2(position) {
    cells[position].classList.add(dragClass2)
    //console.log('lips position passed in ', position)

  }
  //remove drag from grid 
  function removeDrags2(position) {
    cells[position].classList.remove(dragClass2)
  }

  addDrags2(dragCurrentPosition + 1)



  // DRAG 3
  function addDrags3(position) {
    cells[position].classList.add(dragClass3)
    //console.log('lips position passed in ', position)

  }
  //remove drag from grid 
  function removeDrags3(position) {
    cells[position].classList.remove(dragClass3)
  }

  addDrags3(dragCurrentPosition + 2)


  // DRAG 3

  function addDrags4(position) {
    cells[position].classList.add(dragClass4)
    //console.log('lips position passed in ', position)

  }
  //remove drag from grid 
  function removeDrags4(position) {
    cells[position].classList.remove(dragClass4)
  }

  addDrags4(dragCurrentPosition + 3)

*/


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

// 
  /*function startGame(){
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
        dragCurrentPosition = 30 // THEN REPEATS between 20 - 29 
        return
      } 
      addDrags(dragCurrentPosition)
    },1000)
  }
*/
 // ENABLE BACK FROM HERE: 
  function startGame() {
    addDrags(dragStartposition) // makes this stand alone function here 
    moveRight()
  }
    

  // one function movign right + one function moving left 
  //if (dragCurrentPosition % width !== dragCurrentPosition - 1) {
  //clearInterval(dragTimer)
  //return
  // }
  function moveRight() {
    dragTimer = setInterval(() => { 
      removeDrags(dragCurrentPosition)
      dragCurrentPosition = dragCurrentPosition + 1
      addDrags(dragCurrentPosition)
      console.log(dragCurrentPosition)
      if (dragCurrentPosition % width === 0) {
        removeDrags(dragCurrentPosition)
        //console.log(dragCurrentPosition)
        dragCurrentPosition = (dragCurrentPosition - 1) + width 
        addDrags(dragCurrentPosition)
        clearInterval(dragTimer)
        console.log(dragCurrentPosition)
        moveLeft()
      }
    }, 500)
  }

  function moveLeft(){
    dragTimer = setInterval(() => {
      removeDrags(dragCurrentPosition)
      dragCurrentPosition = dragCurrentPosition - 1
      addDrags(dragCurrentPosition)
      //console.log(dragCurrentPosition)
      if (dragCurrentPosition % width === 0) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition = (dragCurrentPosition - 1) + width
        //console.log(dragCurrentPosition)
        addDrags(dragCurrentPosition)
        clearInterval(dragTimer)
        //moveLeft()
      }

    }, 500)
  }
/*
  function startGame3() {
    dragTimer = setInterval(() => {
      removeDrags(dragCurrentPosition)
      dragCurrentPosition = dragCurrentPosition + 1
      addDrags(dragCurrentPosition)
      if (dragCurrentPosition === width + 30) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition = width + 39
        addDrags(dragCurrentPosition)
        clearInterval(dragTimer)
        startGame4()
      }
    }, 200)
  }


  function startGame4(){
    dragTimer = setInterval(() => {
      removeDrags(dragCurrentPosition)
      dragCurrentPosition = dragCurrentPosition - 1
      addDrags(dragCurrentPosition)
      if (dragCurrentPosition === width + 29) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition = 50
        addDrags(dragCurrentPosition)
        clearInterval(dragTimer)
        startGame5()
      }

    }, 200)
  }


  function startGame5(){
    dragTimer = setInterval(() => {
      removeDrags(dragCurrentPosition)
      dragCurrentPosition = dragCurrentPosition + 1
      addDrags(dragCurrentPosition)
      if (dragCurrentPosition === width + 40) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition = + 10
        addDrags(dragCurrentPosition)
        clearInterval(dragTimer)
        startGame6()
      }

    }, 200)
  }

  function startGame6(){
    dragTimer = setInterval(() => {
      removeDrags(dragCurrentPosition)
      dragCurrentPosition = dragCurrentPosition - 1
      addDrags(dragCurrentPosition)
      if (dragCurrentPosition === 60) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition = 70
        addDrags(dragCurrentPosition)
        clearInterval(dragTimer)
        //startGame7()
      }

    }, 200)
  }

*/




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


  // GAME CONTROLLER RU PAUL/ lipstick shooter:   WORKING

  //Add Lipstick to grid 
  function addLipstick(position) {
    cells[position].classList.add(lipClass)
    //console.log(lipClass[position])
  }
  //Remove lipstick from Grid-call to remove
  function removeLip(position) {
    cells[position].classList.remove(lipClass)
  }
  addLipstick(lipStartPosition) //call function to add lipstick 
  //console.log(addLipstick)

  // Move Lipstick shooter 
  function gameController(event) {
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
    console.log(lipCurrentPosition)
  }

  



// Shooting motion BULLET

// ISSUES: bullet only shoots once
// intervall doesn't seem to stop 
// space bar will also fire the start button again if mouse not moved 
// 


  //Add bullet to grid 
  function addBullet(position) {
    cells[position].classList.add(bullet)
    console.log(position)
  }
  //Remove bullet from Grid-call to remove
  function removeBullet(position) {
    cells[position].classList.remove(bullet)
  }
  
  function shootBullet(event){
    const key = event.keyCode
    if ( key  === 32) {
      addBullet(bulletStart)
      bulletTimer = setInterval(() => {
        //console.log('bullet start =>', bulletStart)
        removeBullet(bulletCurrentPosition)
        //console.log('bullet current =>', bulletCurrentPosition)
        bulletCurrentPosition -= width
        addBullet(bulletCurrentPosition)
        if (bulletCurrentPosition <= width) {
          removeBullet(bulletCurrentPosition)
          clearInterval(bulletTimer)
          return
        }
      }, 500)     
    }
    
  }
 

  //addBullet(bulletStart) //call function to add bullet 
  //console.log(addBullet)

  
  // Shooting/ move bullet 
  //function handleShoot(event) {
    //const key = event.keyCode 
    //console.log('current position', lipCurrentPosition)
   
 //const spaceBar = keycode === 32



   // document.addEventListener('keydown', event => {
     // if (event.keycode || key === 32)
    //} )


   /* //console.log('keyCode:', event.keyCode)
    if (key === 32)  {
      addBullet(bulletStart)
    } else if (key === 39 && lipCurrentPosition % width !== width - 1){
      lipCurrentPosition++
    } else {
      //console.log('InvalidKey')
    }
    //console.log('position after redefining', lipCurrentPosition)
    addBullet(bulletStart)
  } */




  // Event listeneners 

  startButton.addEventListener('click', startGame)
  document.addEventListener('keydown', shootBullet)
  document.addEventListener('keyup', gameController)
  
  




  









}

window.addEventListener('DOMContentLoaded', init)