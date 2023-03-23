window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.boxShadow =
      "0 0 10px rgba(0,0,0,0.5)";
  } else {
    document.getElementById("navbar").style.boxShadow = "none";
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fistname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  alert(
    `First Name: ${fistname} \n Last Name: ${lastname} \n Email: ${email} \n Message: ${message}`
  );
});
