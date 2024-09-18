document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const closeButton = document.querySelector('.close'); 
    const menuList = document.querySelector('nav ul');
    
    menu.addEventListener('click', () => {
        menuList.classList.toggle('showmenu');
    });

    closeButton.addEventListener('click', () => {
        menuList.classList.toggle('showmenu');
    });
});