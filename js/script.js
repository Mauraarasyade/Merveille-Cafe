// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (h) => {
    navbarNav.classList.toggle('active');
    h.preventDefault();
};

// Toggle kelas active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// Ketika seacrh form di klik
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
// Ketika shopping cart menu di klik
document.querySelector('#shopping-cart-button').onclick = (s) => {
    shoppingCart.classList.toggle('active');
    s.preventDefault();
};

// Klik di luar elemen
const hamburger = document.querySelector('#hamburger-menu');
const searchbox = document.querySelector('#search-button');
const cartitem = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!searchbox.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    if(!cartitem.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
});

// Model Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (b) => {
    itemDetailModal.style.display = 'flex';
    b.preventDefault();
    };
})

// Klik Tombol Close di Modal Box
document.querySelector('.modal .close-icon').onclick = (b) => {
    itemDetailModal.style.display = 'none';
    b.preventDefault();
}