var bob = require("faker");

var randomName = bob.Name.findName();
var randomAddress = bob.Address.streetAddress();
var randomPhone = bob.PhoneNumber.phoneNumber();
var randomEmail = bob.Internet.email();
var randomCompany = bob.Company.companyName();
var randomImage = bob.Image.avatar();

console.log(randomName);
console.log(randomAddress);
console.log(randomPhone);
console.log(randomEmail);
console.log(randomCompany);
console.log(randomImage);