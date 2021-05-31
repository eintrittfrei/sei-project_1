# sei-project_1


space-invaders 

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

