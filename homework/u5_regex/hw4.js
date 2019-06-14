// JavaScript Homework #4 - RegEx

// Write a function to enforce the following password rules. The main check should be done through
// RegExp. If a given password passes all the rules the function returns true; Otherwise false.
// These are the rules:
//  at least one uppercase letter
//  at least one number
//  at least one lowercase letters
//  only letters and numbers
//  length is between 6 and 10
var password = 'pAs1sas';
function isValidatedPassword(password) {
  return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.{6,10})[a-zA-Z0-9]+$/.test(
    password
  );
}
console.log(isValidatedPassword(password));
// console.log(/[a-zA-Z]/.test(password));
// ^!@#\$%\^&\*
