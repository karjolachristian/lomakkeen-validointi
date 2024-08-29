document.addEventListener('DOMContentLoaded', function() {
    var lomake = document.getElementById('lomake');
    
    lomake.onsubmit = function(e) {
        e.preventDefault();
        var onkoOk = true;

        // Käyttäjä IDn tarkistus
        var kayttajaId = document.getElementById('kayttajaId');
        if (kayttajaId.value.length < 6) {
            naytaVirhe(kayttajaId, 'Liian lyhyt! Vähintään 6 merkkiä, kiitos.');
            onkoOk = false;
        } else {
            piilotaVirhe(kayttajaId);
        }

        // Salasanan tarkistus
        var salasana = document.getElementById('salasana');
        if (salasana.value.length < 6 || !/[0-9]/.test(salasana.value) || 
            !/[A-Z]/.test(salasana.value) || !/[!@£$€&%#]/.test(salasana.value)) {
            naytaVirhe(salasana, 'Salasana ei kelpaa! Tarvitaan numero, iso kirjain ja erikoismerkki.');
            onkoOk = false;
        } else {
            piilotaVirhe(salasana);
        }

        // Postinumeron tarkistus
        var postinro = document.getElementById('postinumero');
        if (postinro.value.length != 5 || isNaN(postinro.value)) {
            naytaVirhe(postinro, 'Postinumeron pitää olla 5 numeroa!');
            onkoOk = false;
        } else {
            piilotaVirhe(postinro);
        }

        // Sähköpostin tarkistus
        var sposti = document.getElementById('email');
        if (!sposti.value.includes('@') || !sposti.value.includes('.')) {
            naytaVirhe(sposti, 'Tarkista sähköpostiosoite!');
            onkoOk = false;
        } else {
            piilotaVirhe(sposti);
        }

        // Muiden pakollisten kenttien tarkistus
        var pakolliset = lomake.querySelectorAll('[required]');
        for (var i = 0; i < pakolliset.length; i++) {
            if (!pakolliset[i].value.trim()) {
                naytaVirhe(pakolliset[i], 'Täytä tämä kenttä!');
                onkoOk = false;
            } else if (!pakolliset[i].hasAttribute('data-error')) {
                piilotaVirhe(pakolliset[i]);
            }
        }

        if (onkoOk) {
            console.log('Hienoa, kaikki näyttää olevan kunnossa!');
        } else {
            console.log('Oho, jotain meni pieleen. Tarkista lomake.');
        }
    };

    function naytaVirhe(elementti, viesti) {
        elementti.style.borderColor = 'red';
        var virheSpan = elementti.nextElementSibling;
        if (!virheSpan || !virheSpan.className.includes('error')) {
            virheSpan = document.createElement('span');
            virheSpan.className = 'error';
            elementti.parentNode.insertBefore(virheSpan, elementti.nextSibling);
        }
        virheSpan.textContent = viesti;
    }

    function piilotaVirhe(elementti) {
        elementti.style.borderColor = '';
        var virheSpan = elementti.nextElementSibling;
        if (virheSpan && virheSpan.className.includes('error')) {
            virheSpan.remove();
        }
    }
});