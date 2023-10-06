function validation() {
    
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("num").value.trim();

   
    let numLength = phone.length;
    let firstNums = phone.substr(0, 2);
    let lastNums = phone.substr(numLength - 9, 9);
    let num;

    if (numLength < 9) {
        alert("Phone number is too short. Please check again...");
        return false;
    } else if (numLength == 9) {
        num = "94" + phone;
    } else if (numLength == 10) {
        num = "94" + lastNums;
    } else if (numLength > 11) {
        alert("Invalid phone number length. Please check again...");
        return false;
    } else if (numLength == 11 && firstNums != "94") {
        alert("Invalid phone number format. Please check again...");
        return false;
    } else if (numLength == 11 && firstNums == "94") {
        num = phone;
    } else {
        alert("Invalid phone number. Please check again...");
        return false;
    }

    
    if (firstName === "") {
        alert("Please enter your first name.");
        return false;
    }

    
    if (lastName === "") {
        alert("Please enter your last name.");
        return false;
    }

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    window.location.href = "landing.html"; 
    return false;
}
