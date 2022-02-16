function init() {
  console.log('js up and running')

  class Grid {
    constructor(width) {
      this.width = width
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

  const playGrid = new Grid(10)
  const gameArray = playGrid.makeGrid()
  console.log('GAME ARRAY', gameArray)
  const width = gameArray.length

  


  const lipStartPosition = 84
  let lipCurrentPosition = 84 // current postition of vaccine 
  const lipClass = 'lipstick'

  function addLipstick(position) {
    gameArray[position].classList.add(lipClass)
  }
  addLipstick(lipStartPosition)

  function removeLip(position) {
    gameArray[position].classList.remove(lipClass)
  }
  addLipstick(lipStartPosition) 
  
  
  let leftPressed = false
  let rightPressed = false

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
      lipCurrentPosition--
    } else if (rightPressed && lipCurrentPosition % width !== width - 1) {
      lipCurrentPosition++
    } else {
      //console.log('InvalidKey')
    }
    
    addLipstick(lipCurrentPosition)
  }




  // // const squaresGrid = document.querySelectorAll('.grid') // select the divs in the grid 
  const startButton = document.querySelector('#start') // select start button 
  const scoreCounter = document.querySelector('#points-display')
  const livesCounter = document.querySelector('#lives-display')
  let score = 0
  let lives = 3
  // // AUDIO
  // // variables for aliens/ DRAGS
  // // Virus
  // const dragClass = 'drags'
  // const dragStartposition = 10
  // let dragCurrentPosition = 10
  // let dragTimer
  
  // const bullet = 'bullet'
  // // const bulletStart = lipCurrentPosition - 10 // inside function addBullet()
  // let bulletCurrentPosition = lipCurrentPosition - 20
  // let bulletTimer
  
  // // Virus 1
  // function addDrags(position) {
  //   gameArray[position].classList.add(dragClass)
  // }
  // //remove virus from grid 
  // function removeDrags(position) {
  //   gameArray[position].classList.remove(dragClass)
  // }
  // addDrags(dragStartposition)
  // let trueOrFalse = true
  // let shootingBullet = false
  // function startGame() {
  //   resetPoints()
  //   startButton.disabled = true

  //   setInterval(() => {
  //     if (dragCurrentPosition === bulletCurrentPosition) {
  //       console.log('HIT')
  //       removeBullet(bulletCurrentPosition)
  //       removeDrags(dragCurrentPosition)
  //       bullethit()
  //       clearInterval(dragTimer)
  //       clearInterval(bulletTimer)
  //       return
  //     }
  //     if (trueOrFalse === true) {
  //       moveRight()
  //     }
  //     if (trueOrFalse === false) {
  //       moveLeft()
  //     } 
  //     return
      
    
  //   }, 1000)
  //   startButton.disabled = false
    
  // }
  
  // function moveRight() {
  //   if (dragCurrentPosition >= width * width - 20) {
  //     removeDrags(dragCurrentPosition)
  //     console.log('point for virus')
  //     counter()
  //     clearInterval(dragTimer)
  //     return
  //   }
    
  //   console.log('alien', dragCurrentPosition)
  //   console.log('bullet', bulletCurrentPosition)
  //   removeDrags(dragCurrentPosition)
  //   dragCurrentPosition = dragCurrentPosition + 1
  //   addDrags(dragCurrentPosition)
  //   if (dragCurrentPosition % width === 0) {
  //     removeDrags(dragCurrentPosition)
  
  //     dragCurrentPosition = (dragCurrentPosition - 1) + width
  //     addDrags(dragCurrentPosition)
  //     clearInterval(dragTimer)
  //     trueOrFalse = false
  //   }
    
  // }
  // function moveLeft() {
    
  //   if (dragCurrentPosition >= width * width - 20) {
  //     removeDrags(dragCurrentPosition)
  //     console.log('point for virus')
  //     counter()
  //     clearInterval(dragTimer)
  //     return
  //   }
  //   removeDrags(dragCurrentPosition)
  //   dragCurrentPosition = dragCurrentPosition - 1
  //   addDrags(dragCurrentPosition)
  //   console.log(dragCurrentPosition)
  //   if (dragCurrentPosition % width === 0) {
  //     removeDrags(dragCurrentPosition)
  //     console.log(dragCurrentPosition)
  //     dragCurrentPosition += width
  //     console.log(dragCurrentPosition)
  //     addDrags(dragCurrentPosition)
  //     clearInterval(dragTimer)
  //     trueOrFalse = true
  //   }
    
  // }
  // function counter() {
  //   lives -= 1
  //   livesCounter.innerText = lives
  //   addDrags(dragStartposition)
  //   console.log(dragCurrentPosition)
  //   if (lives === 0) {
  //     console.log('you lost')
      
  //   }
  // }
  // function bullethit() {
  //   score += 10
  //   scoreCounter.innerText = score 
  // }
  // console.log(bullethit())

  // function resetPoints() {
  //   score = 0
  //   scoreCounter.innerText = score
  // }

  
  // // Shooting motion BULLET
  // // ISSUES: bullet only shoots once
  // // intervall doesn't seem to stop 
  // // space bar will also fire the start button again if mouse not moved 
  // // 
  // //Add bullet to grid 
  // function addBullet(position) {
  //   gameArray[position].classList.add(bullet)
  // }
  
  // function removeBullet(position) {
  //   gameArray[position].classList.remove(bullet)
  // }
  // function shootingBulletYet(event) {
  //   const key = event.keyCode
  //   if (key === 32) {
  //     shootingBullet = true
  //     bulletCurrentPosition = lipCurrentPosition - 20
  //     shootBullet()
  //   }
  //   if (shootingBullet === false) { 
  //     console.log('do nothing')
  //   }
  // }
  // const bulletStartPosition = lipCurrentPosition - 10
  // function shootBullet() {
   
  //   const newInterval = setInterval(() => {
  //     if (shootingBullet === true) {
        
  //       addBullet(bulletStartPosition)
        
  //     }
  //     if (bulletCurrentPosition !== bulletStartPosition) {
        
  //       removeBullet(bulletStartPosition)
  //       removeBullet(bulletCurrentPosition + 10)
  //       addBullet(bulletCurrentPosition)
        
  //       bulletCurrentPosition = bulletCurrentPosition - 10
  //     }
  //     if (bulletCurrentPosition < width) {
        
  //       removeBullet(bulletCurrentPosition + 10)
  //       console.log('clearing interval') 
  //       bulletCurrentPosition = lipCurrentPosition - 20
      
  //       shootingBullet = false
  //       clearInterval(newInterval)
  //     }
      
  //   }, 300)     
  // }
  startButton.addEventListener('click', startGame)
  // document.addEventListener('keydown', shootingBulletYet)
  // console.log('key pressed', shootBullet)
  
  document.addEventListener('keydown', keyDownHandler, false )
  document.addEventListener('keyup', keyUpHandler, false)

}
window.addEventListener('DOMContentLoaded', init)