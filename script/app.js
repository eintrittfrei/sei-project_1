function init() {
  console.log('js up and running')

  // GRID CLASS 

  class Grid {
    constructor(width) {
      this.width = width
    }
    getGridWidth() {
      return this.width
    }
    selectDivForGrid() {
      const grid = document.querySelector('.grid')
      return grid
    }
    calculateCellCount() {
      const cellCount = this.width * this.width
      return cellCount
    }
    createCell(inner) {
      const cell = document.createElement('div')
      cell.innerText = inner
      return cell
    }
    makeGrid() {
      const cells = []
      for (let i = 0; i < this.calculateCellCount(); i++) {
        cells.push(this.selectDivForGrid().appendChild(this.createCell(i)))
      }
      return cells
    }
  } // End of class 

  // VARIABLES 

  const playGrid = new Grid(10)
  const gameArray = playGrid.makeGrid()
  const width = playGrid.getGridWidth()

  const lipStartPosition = 84
  let lipCurrentPosition = 84
  const lipClass = 'lipstick'

  let leftPressed = false
  let rightPressed = false

  const startButton = document.querySelector('#start')
  const scoreCounter = document.querySelector('#points-display')
  const livesCounter = document.querySelector('#lives-display')
  let score = 0
  let lives = 3

  const dragClass = 'drags'
  const dragStartposition = 10
  let dragCurrentPosition = 10
  let dragTimer
  
  const bullet = 'bullet'
  let bulletCurrentPosition = lipCurrentPosition - 20
  let bulletTimer

  

  // GAME CONTROLLER

  function addLipstick(position) {
    gameArray[position].classList.add(lipClass)
  }
  addLipstick(lipStartPosition)

  function removeLip(position) {
    gameArray[position].classList.remove(lipClass)
  }
  addLipstick(lipStartPosition) 
  

  function keyDownHandler(event) {
    if (event.keyCode === 39) {
      Controller()
      return rightPressed = true
    } else if (event.keyCode === 37) {
      Controller()
      return  leftPressed = true
    }
  }

  function keyUpHandler(event) {
    if (event.keyCode === 39) {
      Controller()
      return rightPressed = false
    } else if (event.keyCode === 37) {
      Controller()
      return leftPressed = false
    }
  }

  function Controller() {
    removeLip(lipCurrentPosition)
    if (leftPressed && lipCurrentPosition % width !== 0) {
      console.log(lipCurrentPosition)
      lipCurrentPosition--
    } else if (rightPressed && lipCurrentPosition % width !== width - 1) {
      console.log(lipCurrentPosition)
      lipCurrentPosition++
    } else {
      //console.log('InvalidKey')
    }
    
    addLipstick(lipCurrentPosition)
  }

 
  // VIRUS CONTROLS

  function addDrags(position) {
    gameArray[position].classList.add(dragClass)
  }
  function removeDrags(position) {
    gameArray[position].classList.remove(dragClass)
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
    if (dragCurrentPosition % width === 0) {
      removeDrags(dragCurrentPosition)
      dragCurrentPosition += width
      addDrags(dragCurrentPosition)
      clearInterval(dragTimer)
      trueOrFalse = true
    }
    
  }

  // LIVES COUNTER

  function counter() {
    lives -= 1
    livesCounter.innerText = lives
    addDrags(dragStartposition)
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

  
  // SHOOTING 

  function addBullet(position) {
    gameArray[position].classList.add(bullet)
  }
  
  function removeBullet(position) {
    gameArray[position].classList.remove(bullet)
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

  // EVENT LISTENERS 
  startButton.addEventListener('click', startGame)
  document.addEventListener('keydown', shootingBulletYet)
  console.log('key pressed', shootBullet)
  document.addEventListener('keydown', keyDownHandler, false )
  document.addEventListener('keyup', keyUpHandler, false)

}
window.addEventListener('DOMContentLoaded', init)