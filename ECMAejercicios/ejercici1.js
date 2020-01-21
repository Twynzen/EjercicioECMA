/*Create an object Employee with properties:

--name as "rajesh"
--phone as 9800000000,
--symbol "email" as "rajesh@gmail.com".

After creating the object, display:

--All the keys of object "employee"
--Only private keys (symbols)
--Only public keys (non sumbol)*/
let email = Symbol();

let Employee = new Object();
    name = "rajesh",
    phone = 9800000000,
    email = "rajesh@gmail.com";



let allKeys = Employee.forEach(function(val){
  return val;
  });


let privateKeys = {};

privateKeys[email] = 123;
return privateKeys[email];

let publicKeys = {};

return publicKeys.name,publicKeys.phone;

module.exports = {Employee, allKeys, privateKeys, publicKeys}
