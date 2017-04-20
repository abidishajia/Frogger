// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x =x;
    this.y =y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed *dt;

//This code here 
    if(this.x > 700.5){
        this.x = Math.random();
    } else if (this.x < 0){
        this.x = Math.random();   
    }

   if (player.x +20 > this.x && player.x +20< this.x +40 && player.y+ 20 > this.y && player.y +20< this.y + 40) {
        player.reset(); }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x =x;
    this.y =y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){
 };


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function(){
    this.x = 360;
    this.y = 503;
};

//Adding random rocks to make the game little bit more fun
var Rock = function(x, y) {
    this.x = x;
    this.y = y;

    this.sprite = 'images/Rock.png';
};

Rock.prototype.render = function(){
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
     if (player.x +50> this.x && player.x < this.x +70 && player.y +50> this.y && player.y <this.y + 70) {
       player.reset();  };
};

Rock.prototype.checkCollision = function(){
   
   /* if (player.x +50> this.x && player.x < this.x +70 && player.y +50> this.y && player.y <this.y + 70) {
       player.reset(); 
    } */
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//Enemies
var allEnemies = [];
var enemy1 = new Enemy(0, 25, Math.random() *200);
var enemy2 = new Enemy(0, 125, Math.abs(Math.random() * 256));
var enemy3 = new Enemy(0, 225, Math.random() *200);
var enemy4 = new Enemy(0, 325, Math.random() *200 +150);
var enemy5 = new Enemy(0, 425, Math.random() *100 +90);
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5); 

//Player
var player = new Player(360,503, 20);

//Rocks
var allRocks = [];
var rock1 = new Rock(Math.random()*325, Math.random() * 300);
var rock2 = new Rock(Math.random()*325+325, Math.random() * 300);
var rock3 = new Rock(Math.random()*350+400, Math.random() * 300 + 325);
var rock4 = new Rock(Math.random()*289, Math.random() * 325 + 325);
var rock5 = new Rock(Math.random()*325, Math.random() * 300);
var rock6 = new Rock(Math.random()*325+325, Math.random() * 300);
var rock7 = new Rock(Math.random()*350+400, Math.random() * 300 + 325);
var rock8 = new Rock(Math.random()*289, Math.random() * 325 + 325);
allRocks.push(rock1,rock2, rock3, rock4, rock5, rock6, rock7, rock8); 

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    if(e.keyCode == 37){
        player.x -= player.speed; 
    } else if (e.keyCode ==38){
        player.y -= player.speed;
    } else if(e.keyCode == 39){
        player.x += player.speed;
    } else if (e.keyCode == 40){
        player.y += player.speed;
    }

// Player can't go off the screen
    if(player.x > 650.5){
            player.x = 650.5;
    } else if (player.x < 0){
        player.x = 0;
    } else if (player.y > 600){
        player.y = 600;
    } else if (player.y <=0){
        player.reset();
    }
});
 
