
let menu = document.getElementById('menu-icons');
let navbar = document.getElementsByClassName('navbar')[0];



function openMenu() {

    menu.classList.toggle('fa-circle-xmark');
    navbar.classList.toggle('active');
}

function ScrollWin(){

    menu.classList.remove('fa-circle-xmark');
    navbar.classList.remove('active');

}

window.onscroll = ScrollWin;






