const handleSubmit = (e) => {
  e.preventDefault()
  let uName = document.getElementById("inputName")
  let uEmail = document.getElementById("inputEmail")
  let uSubject = document.getElementById("inputSubject")
  let uMessage = document.getElementById("inputMessage")
  let formData = new FormData()
  formData.append("name", uName.value)
  formData.append("email", uEmail.value)
  formData.append("subject", uSubject.value)
  formData.append("message", uMessage.value)
  console.log(formData)
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