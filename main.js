function validointi() {
    var postinumeroInput = document.getElementById('numero');
    var emailInput = document.getElementById('sahkoposti');
    var postinumeroError = document.getElementById('postinumeroError');
    var emailError = document.getElementById('emailError');

    postinumeroError.innerHTML = "";

    emailError.innerHTML = "";
    var postinumero = postinumeroInput.value;
    if (isNaN(postinumero) || postinumero === "") {
        postinumeroError.innerHTML = "Anna kelvollinen postinumero.";
        return;
    }

    // Tarkista sähköposti
    var email = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Anna kelvollinen sähköpostiosoite.";
        return;
    }
}
