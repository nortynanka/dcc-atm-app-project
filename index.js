"use strict";

/*/I tried to find a way to keep adding/subtracting from the dollar amount that the user ends up with after each deposit and withdrawal, but
I couldn't figure out how to return the updated total every time without assigning it a completely new variable and parameter./*/

const prompt = require("prompt-sync")();
const {getBalance, withdraw, deposit, validatePin} = require("./atm");

accessATM();

function mainMenu() {
  const {newBal} = require("./atm");  
    const userInput = prompt("How would you like to proceed? (balance, deposit, withdrawal, restart, quit)");
    if (userInput === "balance") {
        getBalance();
        return mainMenu();
    }
    if (userInput === "deposit") {
        const userAmount = prompt("Please enter the amount you would like to deposit in whole a dollar amount without a dollar sign or decimal point:");
        deposit(userAmount, newBal);
        return mainMenu();
    }
    if (userInput === "withdrawal") {
        const userAmount = prompt("Please enter the amount you would like to withdraw in a whole dollar amount without a dollar sign or decimal point:");
        withdraw(userAmount, newBal);
        return mainMenu();
    }
    if (userInput === "restart") {
        console.log("Starting over...");
        return accessATM();
    }
    if (userInput === "quit") {
        console.log("Goodbye.");
        return false;
    }
else {
    console.log("That is not a valid option. Please try again.");
    return accessATM();
  }
}

function accessATM() {
  const fourDigitNumber = prompt("Please enter your 4-digit personal identification number:");
  let pinResult = validatePin(fourDigitNumber); {
    if (pinResult === true) {
      console.log("PIN validated successfully. Now directing you to the main menu...");
      mainMenu();
    }
    else if (pinResult === false) {
      console.log("Invalid PIN. Please try again.")
      accessATM();
    }
  }
}