# General Assembly Project 1

### Overview
This was the first project of the General Assembly Software Engineering Immersive course. It was a solo project where we had to build a game in Vanilla JavaScript from scratch. The game is inspired by the classic Space Invaders game. The player has to shoot a vaccine towards the moving viruses to try and eliminate them. If a virus reaches the ground the player loses one life. If the player hits the virus they will gain 10 points. The game ends when the virus has been killed or the player has lost all lives.

## Project Members
Ole Nascimento https://github.com/eintrittfrei

## Timeframe
7 days

## Project Brief:  

Build your own version of the classic arcade game Space Invaders from the 80s. The player aims to shoot an invading alien armadam before it reaches the planet's surface using a mounted gun turret. The player can only move left or right. The aliens also move from left to right, and also down each time the reach the side of the screen. The aliens also periodically drop bombs towards the player. Once the player has destroyed a wave of aliens, the game starts again. The aim is to achieve the highest score possible before either being destroyed by the aliens, or allowing them to reach the planet's surface.

* The player should be able to clear at least one wave of aliens.
* The player's score should be displayed at the end of the game.

## Technologies Used


* JavaScript (ES6)
* HTML5
* CSS3
* Git
* GitHub
* VScode
* Google Fonts

## Space Invaders (Corona Edition)

## Installation 

Clone or download the repo. In your terminal and open the index.html file in your browser. 

## Deployed version
https://eintrittfrei.github.io/sei-project_1/

### Controls
* Vaccine shooter movements  ← → keys
* Start game: “Start button”
* Shooting: “Space bar”

<img width="1116" alt="Screenshot 2021-08-06 at 16 23 29" src="https://user-images.githubusercontent.com/16645758/128524885-633cdf80-d352-47be-828b-42edac2820f4.png">

## Deployed version
https://eintrittfrei.github.io/sei-project_1/


## Planning
I started by writing out the basic functionality I wanted to achieve as my MVP. I planned out which elements need to be rendered for the basic MVP and drafted a rough plan for each including the grid, the virus, the player(gun), projectiles. The next step was to plan out the different stages of the project and a rough plan of what I would do on each day. I also wrote some basic pseudocode. I also drew a plan of the likely code required for each item's movement on the grid and also the score counter, live counter and collision. 

## Process

Grid and static items 
The first stage was to build out the basic grid for the virus to move across. The grid was created using an empty array. Cells were pushed into the array using a for loop. I used JavaScript to build a 10 X 10 grid.

```javascript
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


```

I applied some basic css styling to the grid to make it visible in the browser. 
I also created classes for all moving parts of the game and used animated and static gif images as background. 
I defined starting positions for the moving parts of the game using let variables. I defined the positions using the index number of the grid array. 

```javascript
// Vaccine shooter - position 
  const lipClass = 'lipstick' //
  const lipStartPosition = 84
  let lipCurrentPosition = 84 // current postition of vaccine 

```

 I then added variables for the start button, score board and projectile and virus using HTML and CSS. I defined ids for the start button, score board and lifes counter to target those with JavaScript. 

Movement lives and scores 
The next step was to create functions for the game movements. I started by coding the adding and removing of the virus to and from its current position and also functions to redefine the current position- right - left and downwards movement. 


```javascript
  // Virus
  const dragClass = 'drags'
  const dragStartposition = 10
  let dragCurrentPosition = 10
  let dragTimer

```
 

Player control 
The player control included the vaccine shooters left and right movement and shooting the vaccine. This functionality is controlled using the arrow keys and spacebar. I first defined a function for the key event by using universal key numbers to identify which key had been pressed. I used a keydown event to ensure the vaccine would be triggered when the key was pressed down and not on release. 

```javascript
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
```


Virus movement 
On pressing the start button the function startGame() is triggered. I created an interval function set to 1000 ms so the virus will move at a speed of one cell per second across the grid. The intervall will keep running if either the virus is hit by a vaccine or it reaches the end of the grid. I defined the movement using basic conditionals to determine when the end of the grid is reached and the virus needs to move down one step before moving in the opposite direction. 

```javascript

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
  
```

Shooting vaccine 
The next task was to create the shooting movement which was triggered by the space bar. 
I created two functions to remove and add the vaccine (projectile) class to the grid. The movement upwards is achieved by using an interval function at a timer of 300ms. Removing the vaccine from its current position, redefining the position and adding it back to the new position until the vaccines position is either at the end of the grid or is equal to the virus position which represents a hit event. 

Hit event 
A hit event is defined by the position of the vaccine and the virus. If both positions are equal the bullethit() function is triggered. 

```javascript
function bullethit() {
    score += 10
    scoreCounter.innerText = score 
  }
  ```

Score counting 
When the bullethit() function is triggered it will do two things: 10 points are added to the players score (score += 10) and will update the inner text of the scoreboard. 

 ```javascript
 function bullethit() {
    score += 10
    scoreCounter.innerText = score 
  }CODE SNIPPET
```

Lives counter
If the virus reaches the end of the grid, the counter() function is triggered. This will deduct one life from the player. (lives - =1) and update the inner text of the live div. It will also trigger the starting position of the virus so the game is reset. 

```javascript
function counter() {
    lives -= 1
    livesCounter.innerText = lives
    addDrags(dragStartposition)
    console.log(dragCurrentPosition)
    if (lives === 0) {
      console.log('you lost')
      
    }
  }
```

## Challenges

Movement across the grid 
Hit events 
Key events 


## Wins 

I learned how to set up a grid with JavaScript and how to make an object move in a game. 
Another win is that even though the game is not yet finished it has the basic functionality and I achieved this almost without help.  

## Bugs

The game still has many  bugs. When shooting a second round of vaccine before the previous one has reached the end of the grid, the virus interval appears to be triggered again which makes it move irregularly and too fast across the grid. 
The hit event is not always detected even when the position was clearly equal for both the virus and the vaccine. 
The movement across the grid is not using all the cells. Some rows are cut short and the virus moves down before having reached the end of the row. 

## Key Learning
I learned about planning and what should be considered in more detail. The value of pseudocode which can be very useful to plan in more detail early on by thinking through the functionality step by step. The biggest learning was problem solving skills. Having to figure out what to do without help instantly available.   

## Future Improvements 
The game is currently still unfinished so I would like to finish the basic MVP to make it playable. This includes correct movement, and correct detection of vaccine hitting the virus. 




