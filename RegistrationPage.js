function isEmpty(field)
{
	var fieldLength=field.length;
	return (fieldLength==0)?true:false;
}
function validateUserDetails()
{
	var fullName=document.getElementById("name").value;
	var nameRegex=/^[a-zA-z]+([\s][a-zA-Z]+)*$/;
	if(isEmpty(fullName))
	{
		alert("Full Name cannot be left blank");
		return;
	}
	else if(!nameRegex.test(fullName))
	{
		alert("Invalid Name");
		return;
	}
	var email=document.getElementById("email").value;
	var emailRegex=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(isEmpty(email))
	{
		alert("Email cannot be left blank");
		return;
	}
	else if(!emailRegex.test(email))
	{
		alert("Invalid email address");
		return;
	}
	var confirmEmail=document.getElementById("emailMatch").value;
	if(isEmpty(confirmEmail))
	{
		alert("Please confirm your email address");
		return;
	}
	else if(email!=confirmEmail)
	{
		alert("Email mismatch");
		return;
	}
	var mobileNo=document.getElementById("mobileNo.").value;
	var mobileNoLength=mobileNo.length;
	if(isEmpty(mobileNo))
	{
		alert("Mobile Number cannot be left blank");
		return;
	}
	else if(isNaN(mobileNo)||mobileNoLength!=10)
	{
		alert("Invalid Mobile Number");
		return;
	}
	var passWord=document.getElementById("password").value;
	var passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
	if(isEmpty(passWord))
	{
		alert("Password cannot be left blank");
		return;
	}
	else if(!passwordRegex.test(passWord))
	{
		alert("Password should be atleast 8 characters with atleast 1 upper case alphabet, 1 lower case alphabet and a special character");
		return;
	}
	var confirmPassword=document.getElementById("confirmPassword").value;
	if(isEmpty(confirmPassword))
	{
		alert("Please confirm your password");
		return;
	}
	else if(passWord!=confirmPassword)
	{
		alert("passwords do not match");
		return;
	}
	alert("Registration Successful! Please check your email inbox for confirmation");
	alert("Welcome to epam "+fullName+"! please confirm your email through the link sent to your email address "+email+" before you proceed");
	alert("You will now be redirected to login page")
	location.replace("loginPage.html");
}