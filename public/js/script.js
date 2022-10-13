console.log('Hey   ');

const pageTitle = document.title;   // select title element
const navBar = document.querySelector('nav')   // select the nav tag
const navLink = document.querySelectorAll('a');   // select all a tags


if (pageTitle == 'Home') {  // display transparent navbar if title == Home
    navBar.classList.remove('navbar-dark');
    navBar.classList.remove('bg-dark');
}

for (var i = 0; i < navLink.length; i++) {
    if (pageTitle == navLink[i].textContent) {
        navLink[i].setAttribute('aria-current', 'page');
        navLink[i].setAttribute('id', 'nav1-link-active')
    }
}
