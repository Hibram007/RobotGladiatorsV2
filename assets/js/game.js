// Pseudo code - my notes to self about needs of the App.

// Game States

// " WIN" - player robot has defeated all enemies

// * Fight all enemey -robots
// * Defeat each enemy robot

// "LOSE" - Player robot's health is zero or less

// Global variables

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 40;
var playerMoney = 10;

var enemyNames = ["Roborto", "AmyRoid", "RonBotter"];
 
var enemyHealth = 50;
var enemyAttack = 12;

// LESSON ON LOOPS AND ARRAYS
// for loop examples-- for([ starts iterator]; [conditional statment ( if true statement executes, if false it stops))];
// [Iterator is incremented]) --- sequence is checked again till it fails. ( Hence the "loop")
// for(var i = 0; i < enemyNames.length; i++) {
//   //console logs the data at the curret index
//   console.log(enemyNames[i]);
//   // console logs the index #
//   console.log(i);
//   // console logs a concatenated message where current index data + '---words' + index # + " ---words" is displayed
//   console.log(enemyNames[i] + " is at " + i + " index");
// }

// declaration of fight function
// fight function with parameter(place holder) passed to it. 
var fight = function(enemyName) {
    // alert players of round start
    window.alert("Welcome to Robot Gladiator");
    //prompt asking whether to fight or leave
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
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

// Calling fight function
for(var i = 0;i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}