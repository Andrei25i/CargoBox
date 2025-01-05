const sideBar = document.querySelector('.sidebar')
const body = document.querySelector('body')

function showSideBar() {
    body.style.overflow = 'hidden'
    sideBar.classList.add('open')
}

function hideSidebar() {
    body.style.overflow = 'visible'
    sideBar.classList.remove('open')
}