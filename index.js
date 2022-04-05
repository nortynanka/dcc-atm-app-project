"use strict";
const prompt = require("prompt-sync")();
const {getBalance, withdraw, deposit, validatePin} = require("./atm");

accessATM();

function mainMenu() {
  const userInput = prompt("How would you like to proceed? (balance, deposit, withdrawal, restart, quit)");
      if (userInput === "balance") {
          getBalance();
          return mainMenu();
      }
      if (userInput === "deposit") {
          const userAmount = prompt("Please enter the amount you would like to deposit in increments of 20 without a dollar sign:");
          deposit(userAmount);
          return mainMenu();
      }
      if (userInput === "withdrawal") {
          const userAmount = prompt("Please enter the amount you would like to withdraw in increments of 20 without a dollar sign:");
          withdraw(userAmount);
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
      console.log("Inavlid PIN. Please try again.")
      accessATM();
    }
  }
}