function checkCreds() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNum = document.getElementById("badgeNum").value;
    var userInfo = firstName + " " + lastName;
    if (userInfo.length > 25 || userInfo.length < 2) {
        document.getElementById("loginStaus").innerHTML = "User Login is invalid, check information and try again!";
    }
    else if (badgeNum > 999 || badgeNum < 99) {
        document.getElementById("loginStatus").innerHTML = "Badge Number Invalid, Please try again!"
    }
    else{
        alert("User Identification Verified, Welcome " + userInfo + "!")
        location.replace("BlastOff.html")
    }
}