function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(formData){
    var returnval = true;
    clearErrors();
    var fname = document.forms['myForm']["fname"].value;
    if (fname.length < 5){
        seterror("fname", "*Please enter a valid name");
        returnval = false;
    }
    var lname = document.forms['myForm']["lname"].value;
    var email = document.forms['myForm']["email"].value;
    if(email.length < 5){
        seterror("email", "*Please enter a valid email");
        returnval = false;
    }else if (email.length > 20){
        seterror("email", "*Please enter a valid email");
        returnval = false;
    }
    var phone = document.forms['myForm']["phone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    var profession = document.forms['myForm']["profession"].value;
    if (profession.length < 5){
        seterror("profession", "*Please enter a valid profession");
        returnval = false;
    }
    var dob = document.forms['myForm']["dob"].value;
    if (dob === ""){
        seterror("dob", "*Please select your DOB");
        returnval = false;
    }
    var country = document.forms['myForm']["country"].value;
    if (country === ""){
        seterror("country", "*Please select country");
        returnval = false;
    }
    var gender = document.forms['myForm']["genders"];
    var checked = false;
    var selectedGender = "";
    gender.forEach((checkbox)=>{
        if (checkbox.checked === true){
            checked = true;
            selectedGender = checkbox.value;
        } 
    });
    if (!checked) {
        seterror("gender", "*Please select gender");
        returnval = false;
    }
    if(returnval){
        alert(
            "\n" +
            "First Name : " + fname + "\n" + 
            "Last Name : " + lname + "\n" + 
            "Phone No. : " + phone + "\n" +
            "Email Add. : " + email + "\n" +
            "Profession : " + profession + "\n" +
            "Date of Birth : " + dob + "\n" +
            "Country : " + country + "\n" +
            "Gender : " + selectedGender);
    } else {
        return returnval;
    }
}