
let configSawo = {
    // should be same as the id of the container created on 3rd step
    containerID: "sawo-container",
    // can be one of 'email' or 'phone_number_sms'
    identifierType: "email",
    // Add the API key copied from 2nd step
    apiKey: "78a54f45-e2a2-40cc-a9c8-8d5ae3f10523",
    // Add a callback here to handle the payload sent by sdk
    onSuccess: (payload) => {
        window.location.href = "index.html";
        console.log(payload)
    },
};

let sawo = new Sawo(configSawo);
sawo.showForm();
