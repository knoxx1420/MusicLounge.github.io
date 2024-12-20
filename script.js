function saveFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const message = document.getElementById('message').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    localStorage.setItem('message', message);
}

function retrieveFormData() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const address = localStorage.getItem('address');
    const message = localStorage.getItem('message');

    if (name) document.getElementById('name').value = name;
    if (email) document.getElementById('email').value = email;
    if (phone) document.getElementById('phone').value = phone;
    if (address) document.getElementById('address').value = address;
    if (message) document.getElementById('message').value = message;
}

  window.onload = retrieveFormData;