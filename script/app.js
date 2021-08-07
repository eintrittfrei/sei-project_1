function init() {
  console.log('js up and running')
  // Grid
  const grid = document.querySelector('.grid')
  const width = 10
  const cellCount = width * width
  const cells = []
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    grid.appendChild(cell)
    cells.push(cell)
  }
  // Vaccine shooter - position 
  const lipClass = 'lipstick' //
  const lipStartPosition = 84
  let lipCurrentPosition = 84 // current postition of lipstick 
  // const squaresGrid = document.querySelectorAll('.grid') // select the divs in the grid 
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
  
  const bullet = 'bullet'
  const bulletStart = lipCurrentPosition - 10 // inside function addBullet()
  let bulletCurrentPosition = lipCurrentPosition - 20
  let bulletTimer
  
  // Virus 1
  function addDrags(position) {
    cells[position].classList.add(dragClass)
  }
  //remove virus from grid 
  function removeDrags(position) {
    cells[position].classList.remove(dragClass)
  }
  addDrags(dragStartposition)
  let trueOrFalse = true
  let shootingBullet = false
  function startGame() {
    resetPoints()
    startButton.disabled = true

    setInterval(() => {
      if (dragCurrentPosition === bulletCurrentPosition) {
        console.log('HIT')
        removeBullet(bulletCurrentPosition)
        removeDrags(dragCurrentPosition)
        bullethit()
        clearInterval(dragTimer)
        clearInterval(bulletTimer)
        return
      }
      if (trueOrFalse === true) {
        moveRight()
      }
      if (trueOrFalse === false) {
        moveLeft()
      } 
      return
      
    
    }, 1000)
    startButton.disabled = false
    
  }
  
  function moveRight() {
    if (dragCurrentPosition >= width * width - 20) {
      removeDrags(dragCurrentPosition)
      console.log('point for virus')
      counter()
      clearInterval(dragTimer)
      return
    }
    
    console.log('alien', dragCurrentPosition)
    console.log('bullet', bulletCurrentPosition)
    removeDrags(dragCurrentPosition)
    dragCurrentPosition = dragCurrentPosition + 1
    addDrags(dragCurrentPosition)
    if (dragCurrentPosition % width === 0) {
      removeDrags(dragCurrentPosition)
  
      dragCurrentPosition = (dragCurrentPosition - 1) + width
      addDrags(dragCurrentPosition)
      clearInterval(dragTimer)
      trueOrFalse = false
    }
    
  }
  function moveLeft() {
    
    if (dragCurrentPosition >= width * width - 20) {
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
    if (dragCurrentPosition % width === 0) {
      removeDrags(dragCurrentPosition)
      console.log(dragCurrentPosition)
      dragCurrentPosition += width
      console.log(dragCurrentPosition)
      addDrags(dragCurrentPosition)
      clearInterval(dragTimer)
      trueOrFalse = true
    }
    
  }
  function counter() {
    lives -= 1
    livesCounter.innerText = lives
    addDrags(dragStartposition)
    console.log(dragCurrentPosition)
    if (lives === 0) {
      console.log('you lost')
      
    }
  }
  function bullethit() {
    score += 10
    scoreCounter.innerText = score 
  }
  console.log(bullethit())

  function resetPoints() {
    score = 0
    scoreCounter.innerText = score
  }

  function addLipstick(position) {
    cells[position].classList.add(lipClass)
  }
  function removeLip(position) {
    cells[position].classList.remove(lipClass)
  }
  addLipstick(lipStartPosition) 
  function gameController(event) {
    const key = event.keyCode
    removeLip(lipCurrentPosition)
    if (key === 37 && lipCurrentPosition % width !== 0) {
      lipCurrentPosition--
    } else if (key === 39 && lipCurrentPosition % width !== width - 1) {
      lipCurrentPosition++
    } else {
      //console.log('InvalidKey')
    }
    
    addLipstick(lipCurrentPosition)
    
  }
  // Shooting motion BULLET
  // ISSUES: bullet only shoots once
  // intervall doesn't seem to stop 
  // space bar will also fire the start button again if mouse not moved 
  // 
  //Add bullet to grid 
  function addBullet(position) {
    cells[position].classList.add(bullet)
  }
  
  function removeBullet(position) {
    cells[position].classList.remove(bullet)
  }
  function shootingBulletYet(event) {
    const key = event.keyCode
    if (key === 32) {
      shootingBullet = true
      bulletCurrentPosition = lipCurrentPosition - 20
      shootBullet()
    }
    if (shootingBullet === false) { 
      console.log('do nothing')
    }
  }
  const bulletStartPosition = lipCurrentPosition - 10
  function shootBullet() {
   
    const newInterval = setInterval(() => {
      if (shootingBullet === true) {
        
        addBullet(bulletStartPosition)
        
      }
      if (bulletCurrentPosition !== bulletStartPosition) {
        
        removeBullet(bulletStartPosition)
        removeBullet(bulletCurrentPosition + 10)
        addBullet(bulletCurrentPosition)
        
        bulletCurrentPosition = bulletCurrentPosition - 10
      }
      if (bulletCurrentPosition < width) {
        
        removeBullet(bulletCurrentPosition + 10)
        console.log('clearing interval') 
        bulletCurrentPosition = lipCurrentPosition - 20
      
        shootingBullet = false
        clearInterval(newInterval)
      }
      
    }, 300)     
  }
  startButton.addEventListener('click', startGame)
  document.addEventListener('keydown', shootingBulletYet)
  console.log('key pressed', shootBullet)
  document.addEventListener('keyup', gameController)
}
window.addEventListener('DOMContentLoaded', init)