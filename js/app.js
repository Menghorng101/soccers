const iconBar = document.querySelector('.icon-bar');
const navList = document.querySelector('.nav-list');

iconBar.addEventListener('click', function(){
    navList.classList.toggle('active');
});