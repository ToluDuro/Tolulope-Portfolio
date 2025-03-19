document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("show");
});




const emailTemplateId="template_rnycn5n";
const serviceId="service_qt1c6bw";

const nameInput = document.getElementById("name"); 
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitForm = (event) => {
    event.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    const templateParams = {
        name: nameValue,
        email: emailValue,
        message: messageValue,
    };
    emailjs.send(serviceId, emailTemplateId, templateParams)
    .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your message has been sent successfully!");
    })
    .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send your message. Please try again later.");
    });
};
