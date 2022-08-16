
// initial prompt to use as robots name ( user input)
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 40;
var playerMoney = 10;

// array that houses # and names of enemy robots
var enemyNames = ['Roborto', 'AmyRoid', 'RonBotter'];

var enemyHealth = 50;
var enemyAttack = 12;

// THE DEFINITION

// Entire game function
// argument being passed into function (all data being passed in from global variables)
var fight = function(enemyName) {
  // setting the coditional- if  both are true game runs 
  while (playerHealth > 0 && enemyHealth > 0) {

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
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }// end of skip option code

    // start of fight option code- if skip is false

    // player attacks Enemy- *(Attack #1)*
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      // stops dead robots from continuing to fight--- breaks loop with current data from array
            break;

    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // Attack # 2 -- Enemy attack userBot

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }// end of while loop 
};// end of function definition


// THE CALL

// For loops objective: fight each enemy-robot by looping over them and fighting them one at a time

// Function to start a new game--
var startGame = function() {

// resets player stats when start game is called again
playerHealth = 100;
playerAttack = 10;
playerMoney = 10;  

// tells iterator to start at 0 --- sets condition for the loop to continue --- set ammount of increase of iterator
for (var i = 0; i < enemyNames.length; i++) {

  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    // concatinated message where round # is drawn from iterator location in array
    window.alert("Welcome to Robot Gladiators! Round #" + ( i+ 1) );
   
    //new enemy to fight based on the index of the array-- How we solved issue of fighting array as a whole
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;
// tells fight function to run again with new enemy from indices positon in array. 
    fight(pickedEnemyName);
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
  if ( playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
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

// starts game when page loads
startGame();