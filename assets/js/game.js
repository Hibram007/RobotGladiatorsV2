// variables for User Robots

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//log multiple player values
console.log(playerName, playerAttack, playerHealth);

//variables for Enemy Robot
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// declaration of fight function

// Update it to Do Math with operators to actually run fight
var fight = function() {
    // alert players of round start
    window.alert("Welcome to Robot Gladiator");

    // subtract playerAttack from EnemyHealth- use result to update enemyHealth var
enemyHealth = enemyHealth - playerAttack;

    // log result to console to check it worked
console.log(
    playerName + "attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
    // subtract enemyAttack from playerHealth- Use result ot update playerhealth var
playerHealth = playerHealth - enemyAttack;
    // Log a resulting message console to check it worked
console.log(
    enemyName + "attacked" + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
// code to check if user robot has died
if (playerHealth <= 0){
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + "still has" + playerHealth + "health left.");
}

//code to Check Enemy's Health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has" + enemyHealth + " health left."); 
}
};

// Calling fight function
fight();