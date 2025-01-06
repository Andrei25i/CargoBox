// Validare formular
document.getElementById('application-form').addEventListener('submit', function(event) {
event.preventDefault(); // Previne trimiterea formularului dacă validarea nu este trecută

// Șterge mesajele de eroare anterioare
document.querySelectorAll('.error-message').forEach(function(msg) {
    msg.style.display = 'none';
});

// Obține valorile câmpurilor
const nume = document.getElementById('nume').value.trim();
const email = document.getElementById('email').value.trim();
const telefon = document.getElementById('telefon').value.trim();
const terms = document.getElementById('terms').checked;

let isValid = true;

// Validarea câmpului „Nume complet”
if (nume === '') {
    document.getElementById('nume-error').textContent = 'Te rugăm să completezi numele.';
    document.getElementById('nume-error').style.display = 'block';
    isValid = false;
}

// Validarea câmpului „Adresă de e-mail”
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (email === '' || !emailRegex.test(email)) {
    document.getElementById('email-error').textContent = 'Te rugăm să introduci o adresă de e-mail validă.';
    document.getElementById('email-error').style.display = 'block';
    isValid = false;
}

 // Validarea câmpului „Număr de telefon”
 const telefonRegex = /^(\+?\d{1,4}[\s\-]?)?(\(?\d{1,3}\)?[\s\-]?)?[\d\s\-]{5,15}$/;
 if (telefon === '' || !telefonRegex.test(telefon)) {
     document.getElementById('telefon-error').textContent = 'Te rugăm să introduci un număr de telefon valid.';
     document.getElementById('telefon-error').style.display = 'block';
     isValid = false;
 }

// Validarea casetei „Sunt de acord cu termenii”
if (!terms) {
    document.getElementById('terms-error').textContent = 'Te rugăm să bifezi căsuța de mai sus.';
    document.getElementById('terms-error').style.display = 'block';
    isValid = false;
}

// Dacă toate validările sunt trecute, formularul poate fi trimis
if (isValid) {
    alert('Formularul a fost trimis cu succes!');
}
});

