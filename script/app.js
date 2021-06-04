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

  for (let i = 0; i < cellCount; i++) {
    //console.log(cells)
    const cell = document.createElement('div')
    //cell.innerText = i
    grid.appendChild(cell)
    cells.push(cell)
  }

 

  // Lipstick shooter - position 
  const lipClass = 'lipstick' //
  const lipStartPosition = 84
  let lipCurrentPosition = 84 // current postition of lipstick 


  const squaresGrid = document.querySelectorAll('.grid') // select the divs in the grid 
  //console.log(squaresGrid)
  const startButton = document.querySelector('#start') // select start button 
  const scoreCounter = document.querySelector('#points-display')
  const livesCounter = document.querySelector('#lives-display')
  let score = 0
  let lives = 3


  // AUDIO


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

  //const allDragsSelected = ['drags', 'drags2', 'drags3', 'drags4']
  //console.log(allDragsSelected)
  //const drags = document.querySelector('.drags', '.drags2', '.drags3', '.drags4')
  //console.log(allDragsSelected)

  // variables for shooting
  const bullet = 'bullet'
  const bulletStart = lipCurrentPosition - 10 // inside function addBullet()
  let bulletCurrentPosition = bulletStart
  let bulletTimer

  // GRID

 



  //        START GAME 
  //DRAG QUEENS MOVING: WORKING adding DRAG

  

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
 
// DRAG 1
  function addDrags(position) {
    cells[position].classList.add(dragClass)
    //console.log('lips position passed in ', position)

  }
  //remove drag from grid 
  function removeDrags(position) {
    cells[position].classList.remove(dragClass)
  }
  addDrags(dragStartposition)
  //addDrags(dragCurrentPosition)


  function startGame() {
  // makes this stand alone function here 
    moveRight()
  }
    

  // one function movign right + one function moving left 
  //if (dragCurrentPosition % width !== dragCurrentPosition - 1) {
  //clearInterval(dragTimer)
  //return
  // }
  function moveRight() {
    dragTimer = setInterval(() => { 
      if (dragCurrentPosition === bulletCurrentPosition) {
        removeBullet(bulletCurrentPosition)
        console.log('criteria net')
      }
      if (dragCurrentPosition >= width * width - 20){
        removeDrags(dragCurrentPosition)
        console.log('point for virus')
        counter()
        clearInterval(dragTimer)
        return
      }
     
      removeDrags(dragCurrentPosition)
      dragCurrentPosition = dragCurrentPosition + 1
      addDrags(dragCurrentPosition)
      //console.log(dragCurrentPosition)
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
      if (dragCurrentPosition === bulletCurrentPosition) {
        removeBullet(bulletCurrentPosition)
        console.log('criteria net')
      }
      if (dragCurrentPosition >= width * width - 20){
        removeDrags(dragCurrentPosition)
        console.log('point for virus')
        counter()
        clearInterval(dragTimer)
        return
      }
      
      removeDrags(dragCurrentPosition)
      dragCurrentPosition = dragCurrentPosition - 1
      addDrags(dragCurrentPosition)
      console.log(dragCurrentPosition)
      if (dragCurrentPosition % width === 0 ) {
        removeDrags(dragCurrentPosition)
        console.log(dragCurrentPosition)
        //dragCurrentPosition = (dragCurrentPosition + 1) + width
        dragCurrentPosition += width
        console.log(dragCurrentPosition)
        addDrags(dragCurrentPosition)
        clearInterval(dragTimer)
        moveRight()
      }

    }, 500)
  }

  // counting lives deducted for player and points made/ called in moveRight and left functions: 
  function counter(){ 
    lives -= 1
    livesCounter.innerText = lives
    addDrags(dragStartposition)
    console.log(dragCurrentPosition)
    if (lives === 0){
      console.log('you lost') 
      // works until this point 
    }
  }


  // needs function for points if shooting events work. 



// not working 
  /*function checkHit() {
    if (bulletCurrentPosition === dragCurrentPosition) {
      removeBullet(bulletCurrentPosition)
      removeDrags(dragCurrentPosition)
      clearInterval(dragTimer)
      console.log('HIT')
    }
    
  }*/
  


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
    //console.log(lipCurrentPosition)
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
      addBullet(lipCurrentPosition - 10)
      bulletCurrentPosition = lipCurrentPosition - 10
      bulletTimer = setInterval(() => {
        //console.log('bullet start =>', bulletStart)
        removeBullet(bulletCurrentPosition)
        //console.log('bullet current =>', bulletCurrentPosition)
        bulletCurrentPosition -= width
        addBullet(bulletCurrentPosition)
        
        if (bulletCurrentPosition < 10) {
          //removeBullet(bulletCurrentPosition)
          clearInterval(bulletTimer)
          removeBullet(bulletCurrentPosition)
          return
        }
      }, 200)     
    }
        
  }
 
// 
/* 
  console.log('startbuttom', startButton)
  const audio = document.querySelector('audio')
  console.log('audio')

  function playAudio(event) {
    console.log('buttonclicked')
    audio.src = `../assets/sounds/${event.target.id}.wav`
    audio.play()
  }
*/


// BULLET EVENT

  /*function bulletHitTarget() {
    if (dragCurrentPosition === bulletCurrentPosition) {
      removeDrags(dragCurrentPosition)
    }
  }*/


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





  // SHOOTING ALIENS 









  // Event listeneners 

  startButton.addEventListener('click', startGame)
  document.addEventListener('keydown', shootBullet)
  console.log('key pressed', shootBullet)
  document.addEventListener('keyup', gameController)
  
  





}

window.addEventListener('DOMContentLoaded', init)