"use strict";
const {bal, pin} = require("./account");
let newBal;
// const {mainMenu} = require("./index.js");
//const prompt = require("prompt-sync")();

function getBalance() {
  if (~~newBal > 0) {
    console.log(`Your balance is ${newBal}.`);
  }
  else {
    console.log(`Your balance is ${bal}.`);
  }
}

function deposit(depositAmount) {
  newBal = ~~bal + ~~depositAmount;
  console.log(newBal);
  console.log(`Your deposit of ${depositAmount} has been completed. Your balance is now ${newBal}.`);
  return newBal;
}

function withdraw(withdrawalAmount) {
  newBal = ~~bal - ~~withdrawalAmount;
  console.log(newBal);
  console.log(`Your withdrawal of ${withdrawalAmount} has been completed. Your balance is now ${newBal}.`);
  return newBal;
}

function validatePin(enteredPin) {
  //Return value should be a Boolean (true or false)
  if (enteredPin == pin) {
    return true;
  }
  else if (enteredPin != pin) {
    return false;
  }
}

//TODO: Export these functions
module.exports = {
  getBalance, 
  deposit, 
  withdraw,
  validatePin
};
