const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
    event.preventDefault();
    console.log("Form submitted!");

}

messageForm.addEventListener("submit", handleSubmitMessageForm);

const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
    event.preventDefault();

    const formData = new FormData(messageForm);
    const message = formData.get("message");

    fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({message }),
    });
}

app.use(express.json());

app.post("/messages", express.json(), (req, res) => {
    console.log("req.body", req.body);
    res.json("status:"Message received!" });
});

const baseUrl = "https://web-service-c65n.onrender.com/";
