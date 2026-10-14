
document.getElementById("eventForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let usn = document.getElementById("usn").value.trim();
    let department = document.getElementById("department").value;
    let selectedEvent = document.getElementById("event").value;
    let type = document.querySelector('input[name="type"]:checked');

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("usnError").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerHTML =
            "Name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML =
            "Email is required";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerHTML =
            "Enter a valid email";
        valid = false;
    }

    if (usn === "") {
        document.getElementById("usnError").innerHTML =
            "USN is required";
        valid = false;
    }

    if (department === "") {
        alert("Please select your department");
        valid = false;
    }

    if (selectedEvent === "") {
        alert("Please select an event");
        valid = false;
    }

    if (!type) {
        alert("Please select participation type");
        valid = false;
    }

    if (valid) {
        document.getElementById("result").innerHTML =
            "Registration Successful!<br>" +
            "Welcome, " + name + "<br>" +
            "Event: " + selectedEvent;

        document.getElementById("eventForm").reset();
    }

});
