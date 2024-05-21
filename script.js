function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function navigateTo(section) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('services').style.display = 'none';
    document.getElementById('appointment').style.display = 'none';

    document.getElementById(section).style.display = 'block';
}

document.getElementById('appointment-form').addEventListener('submit', function (event) {
    event.preventDefault();
    navigateTo('services');
});
