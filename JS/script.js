//toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toggle class active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = () => {
  shoppingCart.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sh = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sh.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  // langsung mengarah ke searchbox
  e.preventDefault();
  // menghentikan aksi default (#)
};

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton1 = document.querySelector(".item-detail-button-1");
const itemDetailButton2 = document.querySelector(".item-detail-button-2");
const itemDetailButton3 = document.querySelector(".item-detail-button-3");

itemDetailButton1.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};
itemDetailButton2.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};
itemDetailButton3.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// untuk fungsi yang sama
// itemDetailButton.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal.style.display = "flex";
//     e.preventDefault();
//   };
// })

// close (x) modal box
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// leave modal box (outer box)
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
