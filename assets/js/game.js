
// Game Functions

// THE DEFINITION
// min and max are there to represent low and top limits
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  
  return value;
};

// Entire game function
// argument being passed into function (all data being passed in from global variables)
var fight = function(enemy) {

  // setting the coditional- if  both are true game runs 
  while (playerInfo.health > 0 && enemy.health > 0) {

    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // skip is evaulted first - if true then stops loop if false then loop continues-- eliminates redundancy

    // if player picks "skip" confirm and then stop the loop
    // this is how you only allow certain inputs to trigger things --- vs random inputs
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        player.Info.money = Math.max(0, player.Info.money - 10);
        console.log("playerMoney", player.Info.money)
        break;
      }
    }// end of skip option code

    // start of fight option code- if skip is false

    // player attacks Enemy- *(Attack #1)*

    // remove enemy's health nased on attatck damage
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      // stops dead robots from continuing to fight--- breaks loop with current data from array
            break;

    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // Attack # 2 -- Enemy attack userBot

    // remove players's health base on enemy attack power
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);

    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }// end of while loop 
  // function to generate a random numeric value
   
};// end of function definition


// THE CALL

// For loops objective: fight each enemy-robot by looping over them and fighting them one at a time

// Function to start a new game--
var startGame = function() {

  // reset player stats 
  playerInfo.reset();

// tells iterator to start at 0 --- sets condition for the loop to continue --- set ammount of increase of iterator
for (var i = 0; i < enemyInfo.length; i++) {

  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {
    // concatinated message where round # is drawn from iterator location in array
    window.alert("Welcome to Robot Gladiators! Round #" + ( i+ 1) );
   
    //new enemy to fight based on the index of the array-- How we solved issue of fighting array as a whole
    var pickedEnemyObj = enemyInfo[i];

    // reset enemyHealth before starting new fight
    // Using Math random to make each enemies health values unique -- will always be in the 40-60 range
    pickedEnemyObj.health = randomNumber(40, 60);

// tells fight function to run again with new enemy from indices positon in array. 
    fight(pickedEnemyObj);

    // if we're not at the last enemy in the array-- gives option for SHOP
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }
    }
  }
  else{
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}
// play again -- allows multiple plays (calling main function from within a sub-function to "replay")
//startGame();

// after the loop ends, player is either dead or out of enemies -- signal to run EndGame
endGame();

}; 

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins! --- Gives end game stats
  if ( playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + player.Info.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle."); 
  }
  //ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}

// Shop function definition
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFIll your health , UPGRADE your attack, or LEAVE the store? Please enter one:'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  // Switch statement for shop function -- acts like an if else statement --- telling function how to proceed based on input
switch (shopOptionPrompt) {
  // defining the acceptible inputs for refill capability
  case "REFILL":
  case "refill":
    //calling the specific object and method for refilling health -- see playerInfo object for reference
    playerInfo.refillHealth();
    // stopping code so that only one option can be selected --- with out break statment both refill and upgrade could be chosen
    break;
  case "UPGRADE":
  case "upgrade":
    playerInfo.upgradeAttack();
    break;
  } // end of switch statement
};// end of shop function

// function to set Player name
var getPlayerName = function() {
  var name = "";

  // For loop and condition code
  // checks if name input is blank or null
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is" + name);
  return name;
};

// Object to incapsulate all the player data
// Placed at the bottom so that RandomNumber function is defined first before its called. 
var playerInfo = {

  name: getPlayerName(),
  health: 100,
  attack: 10, 
  money: 10,
  //reset values that make sure each enemy has new values. --- updates playerInfo Obj
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  // reset for Refill ability in Shop () -- consolidating in one object
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.")
    this.health += 20;
    this.money -= 7;
    }
    else {
      window.alert("You don't have the moola for that!");
    }
  },
  // reset for Upgrade attack abiltity in Shop() - consolidating in one object
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -+ 7;
  }
  else {
    window.alert("You don't have enough money!");
  }
}
};

// Object to encapsulate all enemy data
var enemyInfo = [
  {
  name: "Roborto",
  attack: randomNumber(10, 14)
  },
  {
    name: "AmyRoid",
    attack: randomNumber(10, 14)
  },
  {
    name: "RoboCop",
    attack: randomNumber(10, 14)
  }
];

// starts game when page loads
startGame();