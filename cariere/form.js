// Script pentru a schimba textul în funcție de fișierul selectat
const fileInput = document.getElementById('file-upload');
const fileLabel = document.querySelector('.file-upload-button');
const fileName = document.getElementById('file-name');

fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {
        fileLabel.textContent = fileInput.files[0].name; // Afișează numele fișierului
    } else {
        fileLabel.textContent = 'Niciun fișier selectat';
    }
});