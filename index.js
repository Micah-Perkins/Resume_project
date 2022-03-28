function showHide() {
    const x = document.getElementById("menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
   
// var number = 5;
// let name = "Micah";

// number = 12
// name = "Pluralsite "
// document.writeln(name + number);
//alert("Hello World");

const formInfo = document.getElementById("formInfo");


let hasJob = false;
if (hasJob) {
//I have a Job
showMessage("Thanks for visiting, I'm currently employed.");
} else {
//I need a Job
showMessage("Please look around, I'm currently looking for a position.");
}

let today = new Date();
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it is the weekend, please be patient with my retun of your email.");
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage() {
    formInfo.innerHTML = "";
}

const documentForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new ContactForm(contactForm);
    contact.send();
});


const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color: #999999;";
    });
    item.addEventListener("mouseleave", function (event) {
        event.target.style = "";
    });
}

