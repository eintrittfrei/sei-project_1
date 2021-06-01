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
  let lipCurrentPosition = 84 // current postition of lipstick 


  //const squaresGrid = document.querySelectorAll('.grid') // select the divs in the grid 
  const startButton = document.querySelector('#start') // select start button 
  //const pointsShot = document.querySelector('#points-display') // select points display 
  //const livesLeft = document.querySelectorAll('#lives-display') //select lives display 

  // variables for aliens
  const dragClass = 'drags' 
  let dragCurrentPosition = 10
  let dragTimer


  // variables for shooting
  const bullet = 'bullet'
  const bulletStart = lipCurrentPosition 
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



  // GAME CONTROLLER RU PAUL:   

  //Add Lipstick to grid 
  function addLipstick(position) {
    cells[position].classList.add(lipClass)
    //console.log(lipClass[position])
  }
  //Remove lipstick from Grid-call to remove
  function removeLip(position) {
    cells[position].classList.remove(lipClass)
  }
  addLipstick(lipCurrentPosition) //call function to add lipstick 
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

  addDrags(dragCurrentPosition)



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

// BELOW working code: 
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

  function startGame() {
    addDrags(dragCurrentPosition)
    dragTimer = setInterval(() => {
      //if (dragCurrentPosition % width !== dragCurrentPosition - 1) {
      //clearInterval(dragTimer)
      //return
      // }
      removeDrags(dragCurrentPosition)
      dragCurrentPosition = dragCurrentPosition + 1
      addDrags(dragCurrentPosition)
      if (dragCurrentPosition === width + 10) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition = width + 19
        addDrags(dragCurrentPosition)
        clearInterval(dragTimer)
        startGame2()
      }
    }, 200)
  }

  function startGame2(){
    dragTimer = setInterval(() => {
      removeDrags(dragCurrentPosition)
      dragCurrentPosition = dragCurrentPosition - 1
      addDrags(dragCurrentPosition)
      if (dragCurrentPosition === width + 9) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition = width + 20
        addDrags(dragCurrentPosition)
        clearInterval(dragTimer)
        startGame3()
      }

    }, 200)
  }

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
      if (dragCurrentPosition === width + 49) {
        removeDrags(dragCurrentPosition)
        dragCurrentPosition = 69
        addDrags(dragCurrentPosition)
        clearInterval(dragTimer)
        startGame5()
      }

    }, 200)
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



// Shooting motion BULLET
  



  //Add bullet to grid 
  function addBullet(position) {
    cells[position].classList.add(bullet)
    //console.log(position)
  }
  //Remove bullet from Grid-call to remove
  function removeBullet(position) {
    cells[position].classList.remove(bullet)
  }
  
  function shootBullet(event){
    const key = event.keyCode
    if ( key  === 32) {
      addBullet(bulletStart) // shooting on any key pressed not just 32 why? 
    }
    bulletTimer = setInterval(() => {
      removeBullet(bulletCurrentPosition)
      bulletCurrentPosition = bulletCurrentPosition - width
      addBullet(bulletCurrentPosition)
    }, 500) 
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