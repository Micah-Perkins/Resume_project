function sendMessage() {
    if (document.getElementById("fullName").value === "" || document.getElementById("email").value === "")  {
        document.getElementById("formInfo").innerHTML = "Please include your full name and email.";
    } else {
        document.getElementById("formInfo").innerHTML = "Thank you for your interest! (Message feature not yet active)";
    }
}