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

const playerClasses = ["Knight", "Elf", "Dwarf"];
let player = new Player;
let enemy = new Enemy;

function attackEnemy() {
  const damageValues = [0, 5, 10];
  const damage = damageValues[Math.floor(Math.random() * damageValues.length)];
  enemy.health -= damage;
  console.log("Enemy's Health:" + enemy.health);
  console.log(`Enemy took ${damage} damage`)
}

function attackPlayer() {
  const damageValues = [0,1,1,1,1,1,1,2,3,4,10];
  const damage = damageValues[Math.floor(Math.random() * damageValues.length)];
  player.health -= damage;
  console.log("Your Health:" + player.health);
  console.log(`You took ${damage} damage`)
}

function isAlive() {
  if(player.health <= 0) {
    console.log('You have been defeated!')
    attackButton.removeEventListener('click', clickAttack)
  } else if(enemy.health <= 0) {
    console.log('The enemy has been defeated!')
    attackButton.removeEventListener('click', clickAttack)
  }
  else {
    return;
  }
}

function clickAttack(e) {
  attackEnemy();
  attackPlayer();
  isAlive();
}

// attackEnemy();
// attackPlayer();

const attackButton = document.querySelector('.attack');

attackButton.addEventListener('click', clickAttack);
