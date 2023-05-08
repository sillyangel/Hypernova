var password = prompt("Password of the Week", "huh?");
var bootedoff = "https://google.com/"
var cookieName = "myCookie";
var cookieValue = "true";
var cookieExpiration = new Date();
cookieExpiration.setDate(cookieExpiration.getDate() + 7); // Expires in 1 week

if (document.cookie.indexOf(cookieName) == -1) {
  // Cookie doesn't exist, prompt for password
  var password = prompt("Password of the Week", "huh?");
  checkpassword(password);
} else {
  // Cookie exists, don't prompt for password
  console.log("User already authenticated");
}

function checkpassword(passcode) {
  if (passcode == "Ygsin") {
    // Set cookie and redirect to success page
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + cookieExpiration.toUTCString();
  } else {
    // Redirect to error page
    window.location.href = bootedoff;
  }
}
