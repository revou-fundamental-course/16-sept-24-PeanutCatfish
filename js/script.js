
function replaceName() {
    let userName = prompt("Please enter your name:");
    let welcomeMessage = document.getElementById('welcomeMessage');

    if (userName) {
        welcomeMessage.innerText = `Hi ${userName}, Welcome to Our Website!`;
    } else {
        welcomeMessage.innerText = `Hi Anon, Welcome to Our Website!`; 
    }
}
replaceName();


// Untuk Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    const currentTime = new Date().toString();

    document.getElementById('resultTime').innerHTML = `<strong>Current time:</strong> ${currentTime}`;
    document.getElementById('resultName').innerHTML = `<strong>Nama:</strong> ${name}`;
    document.getElementById('resultBirthdate').innerHTML = `<strong>Tanggal Lahir:</strong> ${birthdate}`;
    document.getElementById('resultGender').innerHTML = `<strong>Jenis Kelamin:</strong> ${gender}`;
    document.getElementById('resultMessage').innerHTML = `<strong>Pesan:</strong> ${message}`;
});
