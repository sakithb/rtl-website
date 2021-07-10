let topButton = document.getElementById("btn-back-to-top");
let waButton = document.getElementById("wa-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topButton.style.display = "block";
    waButton.style.display = "block";
  } else {
    topButton.style.display = "none";
    waButton.style.display = "none";
  }
}

topButton.addEventListener("click", backToTop);
waButton.addEventListener("click", function () {
  window.location.href =
    "https://web.whatsapp.com/send?phone=94777036124&text=";
});

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
