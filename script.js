const wrapper = document.querySelector(".wrapper"), 
qrInput = document.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImg = document.querySelector(".qr-code img");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue)  return ;    // if the input is empty then return from here
    // console.log(qrValue);

    generateBtn.innerText = "Generating QR Code...";

    // lets update qr according to user input
    // getting a QR code of user entered value using the qrserver
    // API and passing the API returned img src to qrImg
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
        qrImg.addEventListener("load", () => {      //once QR image is loaded
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
   
});


// Lets remove the active class from wrapper if the input field is empty
qrInput.addEventListener("keyup", () => {
      if(!qrInput.value){
        wrapper.classList.remove("active");
      }
});