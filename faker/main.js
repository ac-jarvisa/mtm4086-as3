// JavaScript Document

window.onload = turtles();

function turtles(){
	
	var randomName = faker.Name.findName();
	var randomAddress = faker.Address.streetAddress();
	var randomPhone = faker.PhoneNumber.phoneNumber();
	var randomEmail = faker.Internet.email();
	var randomCompany = faker.Company.companyName();
	var randomImage = faker.Image.avatar();
	
	document.getElementById("1").value = randomName;
	document.getElementById("2").value = randomAddress;
	document.getElementById("3").value = randomPhone;
	document.getElementById("4").value = randomEmail;
	document.getElementById("5").value = randomCompany;
	document.getElementById("6").src = randomImage;
}