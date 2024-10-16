"use strict";
$(document).ready( () => {

// FOCUS ON OWNER NAME 
$("#ownerName").focus();

// REGISTER BUTTON VALIDATION
$("#registerStay").click ( evt => {
    let isValid = true;


//VALIDATIONS FOR FORM DATA
//NAME
    const ownerName = $("#ownerName").val().trim();
    if (ownerName = "") {
        $("#ownerName").next().text("Owner Name is required.")
        isValid = false;
    }   
        else {
            $("#ownerName").next().text("")
        }
        $("#ownerName").val(ownerName);
// ADDRESS
    const streetAddr = $("#streetAddr").val().trim();
    if (streetAddr = "") {
        $("#streetAddr").next().text("Street Address is required.")
        isValid = false;
    }   
        else {
            $("#streetAddr").next().text("")
        }
        $("#streetAddr").val(streetAddr);
//CITY
    const city = $("#city").val().trim();
    if (city = "") {
        $("#city").next().text("City is required.")
        isValid = false;
    }   
        else {
        $("#city").next().text("")
        }
        $("#city").val(city);
//ZIPCODE
    const zipCodePattern = /\b[0-9]{5}\b/;
    const zipCode = $("#zipCode").val().trim();
    if (zipCode = "") {
        $("#zipCode").next().text("Zip Code is required.")
        isValid = false;
    }
        else if (!zipCodePattern.test(zipCode)) {
        $("#zipCode").next().text("Must be 5 numeric digits.");
        isValid = false;
        }
            else {
                $("#zipCode").next().text("");
            }
            $("#zipCode").val(zipCode);
//PHONE
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/
    const phone = $("#phone").val().trim();
    if (phone == "") {
        $("#phone").next().text("Phone is required.")
        isValid = false 
    }
        else if (!phonePattern.test(phone)) {
            $("#phone").next().text("Use 999-999-9999 format.");
            isValid = false;
        }
        else {
            $("#phone").next().text("");
        }
        $("#phone").val(phone); 
//EMAIL
    const emailPattern =
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email = $("#email").val().trim();
    if (email == "") {
        $("#email").next().text("Email is required.")
        isValid = false 
    }
        else if (!emailPattern.test(email)) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        }
        else {
            $("#email").next().text("");
        }
        $("#email").val(email);
//DROP OFF DATE
const dropOffDate = new Date($("#dropOffDate").val());
    if ($("#dropOffDate").val().trium() == "") {
        $("#dropOffDate").next().text("Drop Off Date is required.")
        isValid = false;
    }
        else if (dropOffDate >= pickUpDate){
            $("#dropOffDate").next().text("Drop Off Date must be after Pick Up Date.");
            isValid = false;
        }
            else {
                $("#dropOffDate").next().text("")
            }

//DROP OFF TIME   
const dropOffTime = $("#dropOffTime").val();
    if (dropOffTime = "") {
        $("#dropOffTime").next().text("Drop Off time is required.")
        isValid = false;
    }
        else {
            $("#dropOffTime").next().text("")
        }
//PICK UP DATE
const pickUpDate = new Date($("#pickUpDate").val());
    if ($("#pickUpDate" = "")) {
        $("#pickUpDate").next().text("Pick Up date is required.")
        isValid = false;
    }
        else if (pickUpDate <= dropOffDate) {
            $("#pickUpDate").next().text("Pick Up date is must be after drop off date")
            isValid = false;
        }
        else {
            $("#pickUpDate").next().text("");
        }

//PICK UP TIME
const pickUpTime = $("#pickUpTime").val();
    if (pickUpTime = "") {
        $("#pickUpTime").next().text("Pick Up Time is required.")
        isValid = false;
    }
        else {
            $("#pickUpTime").next().text("")
        }
//STAY INFORMATOIN
const comments = $("#comments").val().trim();
    if (comments = "") {
        $("#comments").next().text("Stay Information is required.")
        isValid = false;
    }   
        else {
            $("#comments").next().text("")
        }
        $("#comments").val(comments);
//CONTACT NAME
const contactName = $("#contactName").val().trim();
    if (contactName = "") {
        $("#contactName").next().text("Contact Name is required.")
        isValid = false;
    }   
        else {
            $("#contactName").next().text("")
        }
        $("#contactName").val(contactName);
//EMERGENCY PHONE
const contactPhonePattern = /^\d{3}-\d{3}-\d{4}$/
    const contactPhone = $("#contactPhone").val().trim();
    if (contactPhone == "") {
        $("#contactPhone").next().text("Contact Phone is required.")
        isValid = false;
    }
        else if (!contactPhonePattern.test(contactPhone)) {
            $("#contactPhone").next().text("Use 999-999-9999 format.");
            isValid = false;
        }
        else {
            $("#contactPhone").next().text("");
        }
        $("#contactPhone").val(contactPhone); 

//PREVENT DEFAULT IF INVALID
    if (isValid == false) {
        evt.preventDefault();
    }
        else {
            window.location.href = "register.html"
        }

})

})
/*"use strict";
$(document).ready(() => {
    $("#ownerName").focus();

    $("#registerStay").click(evt => {
        let isValid = true;

        // VALIDATIONS FOR FORM DATA
        // NAME
        const ownerName = $("#ownerName").val().trim();
        if (ownerName === "") {
            $("#ownerName").next().text("Owner Name is required.");
            isValid = false;
        } else {
            $("#ownerName").next().text("");
        }
        $("#ownerName").val(ownerName);

        // ADDRESS
        const streetAddr = $("#streetAddr").val().trim();
        if (streetAddr === "") {
            $("#streetAddr").next().text("Street Address is required.");
            isValid = false;
        } else {
            $("#streetAddr").next().text("");
        }
        $("#streetAddr").val(streetAddr);

        // CITY
        const city = $("#city").val().trim();
        if (city === "") {
            $("#city").next().text("City is required.");
            isValid = false;
        } else {
            $("#city").next().text("");
        }
        $("#city").val(city);

        // ZIPCODE
        const zipCodePattern = /\b[0-9]{5}\b/;
        const zipCode = $("#zipCode").val().trim();
        if (zipCode === "") {
            $("#zipCode").next().text("Zip Code is required.");
            isValid = false;
        } else if (!zipCodePattern.test(zipCode)) {
            $("#zipCode").next().text("Must be 5 numeric digits.");
            isValid = false;
        } else {
            $("#zipCode").next().text("");
        }
        $("#zipCode").val(zipCode);

        // PHONE
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const phone = $("#phone").val().trim();
        if (phone === "") {
            $("#phone").next().text("Phone is required.");
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            $("#phone").next().text("Use 999-999-9999 format.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        $("#phone").val(phone);

        // EMAIL
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email === "") {
            $("#email").next().text("Email is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);

        // DROP OFF DATE
        const dropOffDate = new Date($("#dropOffDate").val());
        if ($("#dropOffDate").val().trim() === "") {
            $("#dropOffDate").next().text("Drop Off Date is required.");
            isValid = false;
        } else if (dropOffDate <= pickUpDate) {
            $("#dropOffDate").next().text("Drop Off Date must be after Pick Up Date.");
            isValid = false;
        } else {
            $("#dropOffDate").next().text("");
        }

        // DROP OFF TIME
        const dropOffTime = $("#dropOffTime").val().trim();
        if (dropOffTime === "") {
            $("#dropOffTime").next().text("Drop Off time is required.");
            isValid = false;
        } else {
            $("#dropOffTime").next().text("");
        }

        // PICK UP DATE
        const pickUpDate = new Date($("#pickUpDate").val());
        if ($("#pickUpDate").val().trim() === "") {
            $("#pickUpDate").next().text("Pick Up date is required.");
            isValid = false;
        } else {
            $("#pickUpDate").next().text("");
        }

        if (!isValid) {
            evt.preventDefault();
        }
    });
});

*/