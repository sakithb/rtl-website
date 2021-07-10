const handleSubmit = (e) => {
  e.preventDefault()
  let cForm = document.getElementById('contactForm');
  let formData = new FormData(cForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Message successfully submitted')).catch((error) =>
    alert(error))
}

function enableSubmitBtn() {
  document.getElementById("contactSubmitBtn").disabled = false;
}

document.querySelector("#contactForm").addEventListener("submit", handleSubmit);