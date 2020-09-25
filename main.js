class Player {
  constructor() {
    this.health = 100;
  }
}

class Enemy {
  constructor() {
    this.health = 100;
  }
}

let player = new Player;
let enemy = new Enemy;

function attackEnemy() {
  const damageValues = [0, 5, 10];
  const damage = damageValues[Math.floor(Math.random() * damageValues.length)];
  enemy.health -= damage;
  console.log("Ememy's Health:" + enemy.health);
}

function attackPlayer() {
  const damageValues = [0, 5, 10];
  const damage = damageValues[Math.floor(Math.random() * damageValues.length)];
  player.health -= damage;
  console.log("Player's Health:" + player.health);
}

attackEnemy();
attackPlayer();
