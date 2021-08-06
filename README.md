# General Assembly Project 1: Space Invaders (Corona Edition)

## Project Members
Ole Nascimento

## Timeframe
7 days

## Project Brief:  

Build your own version of the classic arcade game Space Invaders from the 80s. The player aims to shoot an invading alien armadam before it reaches the planet's surface using a mounted gun turret. The player can only move left or right. The aliens also move from left to right, and also down each time the reach the side of the screen. The aliens also periodically drop bombs towards the player. Once the player has destroyed a wave of aliens, the game starts again. The aim is to achieve the highest score possible before either being destroyed by the aliens, or allowing them to reach the planet's surface.

### Resources

* [Space Invaders 1978 - Arcade Gameplay - Youtube](https://www.youtube.com/watch?v=MU4psw3ccUI)
* [Space Invaders - Wikipedia](https://en.wikipedia.org/wiki/Space_Invaders)

### Requirements

* The player should be able to clear at least one wave of aliens
* The player's score should be displayed at the end of the game

### Challenges

The main challenge here is the movement of large groups of aliens in formation, and the animation of the bombs and player's shots. There are several approaches here, with collision detection being the more challenging.


## Technologies Used


* JavaScript (ES6)
* HTML5
* CSS3
* Git
* GitHub
* VScode
* Google Fonts

## Space Invaders (Corona Edition)
This is game is inspired by the classic Space Invaders game. The player has to shoot vaccine towards the moving viruses to try and eleminate them.  
If a virus reaches the ground the player looses one life. If the player hits the virus they will gain 10 points. The game ends when the virus has been killed or the player has lost all lives.

<img width="1116" alt="Screenshot 2021-08-06 at 16 23 29" src="https://user-images.githubusercontent.com/16645758/128524885-633cdf80-d352-47be-828b-42edac2820f4.png">

## Deployed version

## LINK


## Code Installation 



## Planning



## Process/ Approach


By Days etc. 
Longest Bit


## Challenges


## Wins 


## Key Learning


## Future Improvements 










space-invaders)

score  board
lives left count board

Grid:
js grid 40X40 grid on 600X600 wrapper 

aliens:
 -worth 10 points - 1 row of  (.class + index?)
a class moveing across the grid 
class add and remove to create movement 
using an intervall to automate alien movement left to right and downwards 
not moving past the grid border with control flow 

gun/ player:
(controlled with arrow keys and space bar) -  

baseline/ ground: 
static line of div  class='base' at the bottom of the grid 

Game 
rows of aliens moving slow from left right - right left AND moving downwards one step each time the border is reached left or right 

 spaceship/ gun can move left or right (arrow keys) 
 also able to shoot upwards in straight line with space bar
if alien is hit one alien is removed (remove class?) 

if player looses 3 lives game is over => aliens win
if all aliens are removed (shot) player wins game ends 


Challenges: 
how to shoot: if space bar pushed => .class intervall starts moving .class across grid until it reaches the border 
OR it reaches a grid (index number) with an object 

aliens movign in formation: 



Functions: 
Basic grid 20X420
Game start function 
Grid 
movement for shooting 
movement for drag queens moving sideways and downwards on loop/ interval . with classes or movement W3 idea. 



drag queens/ aliens movement: 
- 
-starting at position 10
-select all squares in grid .grid with variable array of squares with numbers
- use grid coordinates to move along grid 
numbers +/- 10 = x 
numbers +/- 1 = y 
-create axis x and y 
- movement with x +=1 and y +=1 
- define end of row 

-current postion 10 moving right until end of row 
movign down by one
then movign left until end of row 






let currentPosition = 10 // want it to move to 11 then 12 etc. until 19 then move to 29 then move left to 28, 27 etc. 

https://media.giphy.com/media/co5VLnDuBaURxfDrfW/source.gif
/Users/olecastronascimento/development/sei-project_1/assets/sounds/start.wav

function startGame() {
  // makes this stand alone function here 
    startButton.disabled = true // disable button to stop it from firing again when pressing a key 
    moveRight()
    startButton.disabled = false // add button back in for next time after the function was called 
  }
    
