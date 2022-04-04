"use strict";
//TODO: Import necessary values from account.js
const {bal, pin} = require("./account");

let newBal;

function getBalance() {
  console.log(bal);
  alert(`Your balance is ${bal}.`);
  //TODO: Return the user to the main menu.
}

function withdraw(withdrawalAmount) {
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
  withdrawAmount = prompt("Please enter the amount you would like to withdraw without a dollar sign:\n0.00");
  console.log(newBal = bal - withdrawalAmount);
  alert(`Your withdrawal of ${withdrawalAmount} has been completed. Your balance is now ${newBal}.`);
  //TODO: Return the user to the main menu.
}

function deposit(depositAmount) {
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
  depositAmount = prompt("Please enter the amount you would like to deposit without a dollar sign:\n0.00")
  console.log(newBal = bal + depositAmount);
  alert(`Your deposit of ${depositAmount} has been completed. Your balance is now ${newBal}.`);
  //TODO: Return the user to the main menu prompt.
}

function validatePin(enteredPin) {
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
  if (enteredPin === pin) {
    let userInput = prompt("PIN successfully validated. What would you like to do?\n(balance, withdrawal, deposit, start over, quit)")
  //TODO: Run main menu switch/case.
  }
  else {
    alert("An invalid PIN has been entered. Please try again.");
  //TODO: Restart app.
  }
}

//TODO: Export these functions
module.export {getBalance, withdraw, deposit, validatePin};
