

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 40;
var playerMoney = 10;

//this is will show up as a lump of words
var enemyNames = ['Roborto', 'AmyRoid', 'RonBotter'];

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {

  // repeat and execute as long as the enemy is alive
  while(enemyHealth > 0) {
    //prompt asking whether to fight or leave
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;

    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;

    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health ( coditional to check health and give dead or alive message)
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  }
}
}

// The CALL ( the FOR Loop)
// Calling fight function
for (var i = 0; i < enemyNames.length; i++) {
  debugger;

// created a local varible inside for loop, this will serve as a way to keep the robot and values
// for the current data that is iterated on in the EnemyNames array ( vs whole thing)
  var pickedEnemyName = enemyNames[i];

  // resets enemy health values each iteration in for loop 
  enemyHealth = 50;

  // running fight function with singular robots vs whole array . 
  fight(pickedEnemyName);

} 