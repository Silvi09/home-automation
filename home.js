function forgot_password() 
{
	document.getElementById('login-box').style.display="none";
	document.getElementById('signup-box').style.display="none";
	document.getElementById('dashboard').style.display="none";
	document.getElementById('navigationbar').style.display="none";
	document.getElementById('password-box').style.display="block";

}

function signup() 
{
	document.getElementById('login-box').style.display="none";
	document.getElementById('password-box').style.display="none";
	document.getElementById('dashboard').style.display="none";
	document.getElementById('navigationbar').style.display="none";
	document.getElementById('signup-box').style.display="block";
}

function dashboard()
{
	document.getElementById('login-box').style.display="none";
	document.getElementById('password-box').style.display="none";
	document.getElementById('signup-box').style.display="none";
	document.getElementById('dashboard').style.display="block";
	document.getElementById('navigationbar').style.display="block";
}
