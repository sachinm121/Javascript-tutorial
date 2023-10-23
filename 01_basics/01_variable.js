const accountId = 202014
let accountEmail = "Sachin@gmail.com"
var accountPassword = "123456"
accountCity = "Agra"

// accountId = 265348 // can not be cahnged
accountEmail = "SM@gmail.com"
accountPassword = "685746"
accountCity = "delhi"
let accountState;

console.log(accountId)

/*
Prefer not to use var
bacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
