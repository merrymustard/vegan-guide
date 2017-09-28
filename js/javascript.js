
var my_mail= "v@g.com";
var myPassword= "123456"


var aButtonVar= document.getElementById("enter_button");

aButtonVar.onclick = function (){
	//alert(document.getElementById ("fld_email").value);
	//document.getElementById("fld_email").value = "mymail@mail.com";
	//return false;



	var fldMail = document.getElementById("fld_email");
	var email = fldMail.value;

	var password = document.getElementById("fld_password").value;


	//alert("the email: " + email + " the pass: " + password);

	if(email != my_mail){
		console.log("mail incorrect");
		alert("mail incorrect");
		return false;

	} else if (password != myPassword){



		console.log("password incorrect");
		alert("pass incorrect");
		return false;
	}




	
