const button = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const flexMenu = document.getElementById('flex-menu');

document.getElementById('menu-btn')
    .addEventListener('click', () => {
        button.classList.toggle('open');
        menu.classList.toggle('flex');
        menu.classList.toggle('flex-col');
        menu.classList.toggle('hidden');
    }
);