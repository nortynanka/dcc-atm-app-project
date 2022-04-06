"use strict";
const {pin, bal} = require("./account");
let newBal;

function getBalance() {
    console.log(`Your current balance is $${bal}.`)
}

//I want newBal to equal the balance listed on account.js only the first time one of these functions is called:

function deposit(depositAmount) {
  newBal = ~~bal + ~~depositAmount;
  console.log(`Your deposit of $${depositAmount} has been completed. Your balance is now $${newBal}.`);
  return newBal;
}

function withdraw(withdrawalAmount) {
  newBal = ~~bal - ~~withdrawalAmount;
  console.log(`Your withdrawal of $${withdrawalAmount} has been completed. Your balance is now $${newBal}.`);
  return newBal;
}

function validatePin(enteredPin) {
  if (enteredPin == pin) {
    return true;
  }
  else if (enteredPin != pin) {
    return false;
  }
}

module.exports = {
  getBalance, 
  deposit, 
  withdraw,
  validatePin,
}
