const primeNav = document.querySelector('.primary-navigation');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
	primeNav.style.display = 'flex';
	primeNav.style.top = '0';
}

function close() {
	primeNav.style.top = '-100%';
}
