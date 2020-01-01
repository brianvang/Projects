function validateItems() {
    var firstName = document.forms["contact"]["firstName"];
    var lastName = document.forms["contact"]["lastName"];
    var phone = document.forms["contact"]["phone"];
    var info = document.forms["contact"]["info"];
    
    if (firstName.value == "") {
        alert("First name is needed.");
        firstName.focus();
        return false;
    }
    if (lastName.value == "") {
        alert("Last name is needed.");
        lastName.focus();
        return false;
    }
    if (phone.value == "") {
        alert("Phone number is needed.");
        phone.focus();
        return false;
    }
    if (info.value == "") {
        alert("Please provide additional reasonings.");
        info.focus();
        return false;
    }
}
