const api_url =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const imgBox = document.querySelector(".img-box");
const qrImage = document.querySelector("#qr_image");
const qrText = document.querySelector("#qr_text");
const button = document.querySelector("button");

function generateQrCode() {
  if (qrText.value.length > 0) {
    qrImage.src = api_url + qrText.value;
    imgBox.classList.add("show-img");
  } else {
    // alert("Enter your Text or Link");
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

button.addEventListener("click", generateQrCode);
