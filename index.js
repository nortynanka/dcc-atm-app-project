"use strict";
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
const {getBalance, withdraw, deposit, validatePin} = require("./atm");

function accessATM() {
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
  let enteredPin = prompt("Please enter your 4-digit personal identification number:\n0000");
  validatePin(enteredPin);
}

//TODO: Call accessATM function


function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //TODO: Figure out how to jump from main menu to the functions pertaining to each case.
  //TODO: Write a default statement and figure out what should happen when restart/quit are executed and HOW to restart/quit the app.
  //! Remember - we should keep prompting the user for options until they quit!
  switch(userInput = prompt("Welcome authenticated user. How would you like to proceed?\n(balance, deposit, withdrawal, restart, quit)")) {
  case 0:
  //Get current balance
  userInput = "balance";
  break;
  case 1:
  //Make a deposit
  userInput = "deposit";
  break;
  case 2:
  //Make a withdrawal
  userInput = "withdrawal";
  break;
  case 3:
  //Restart
  userInput = "restart";
  break;
  case 4:
  //Quit
  userInput = "quit";
  break;
  default:
  }
}

//TODO: Call mainMenu function to start our app!
