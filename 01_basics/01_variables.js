const accountId = 123
let accountEmail = "jp@google.com"
var accountPassword ="12345"
accountCity = "Pune"
let accountState;

//accountId = 1222 // not Allowed
accountEmail = "jayp@google.com"
accountPassword ="67895"
accountCity = "Mumbai"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

