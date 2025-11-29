let body = document.body;
//! header start

const profileOpen = document.querySelector('.profile');
const userButton = document.getElementById('user-btn');

userButton.addEventListener('click', () => {
  profileOpen.classList.toggle('active');
  searchOpen.classList.remove('active');
});

const searchOpen = document.querySelector('.search-form');
const searchButton = document.getElementById('search-btn');

searchButton.addEventListener('click', () => {
  searchOpen.classList.toggle('active');
  profileOpen.classList.remove('active');
});

//! header end

const sidebar = document.querySelector('.sidebar');
const menuButton = document.getElementById('menu-btn');
const sidebarClose = document.querySelector('.close-btn');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  body.classList.toggle('active');
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (window.innerWidth < 1200) {
    if (e.target.closest('.sidebar') || e.target.closest('#menu-btn')) return;

    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  }
});

window.onscroll = () => {
  profileOpen.classList.remove('active');
  searchOpen.classList.remove('active');

  if (window.innerWidth < 1200) {
    sidebar.classList.remove('active');
    body.classList.remove('active');
  }
};

//! localstrage kullanarak dark mode 
//* getItem ile dark-mode değişkeni ekleniryor
let toggleBtn = document.getElementById('toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

//* setItem ile dark-mode degiskenine enable eklerek dark mode aktif ediliyor
const enableDarkMode = () => {
  toggleBtn.classList.replace('fa-sun', 'fa-moon');
  body.classList.add('dark');
  localStorage.setItem('dark-mode', 'enabled');
};

//* setItem ile dark-mode degiskenine disable eklerek light mode aktif ediliyor
const disableDarkMode = () => {
  toggleBtn.classList.replace('fa-moon', 'fa-sun');
  body.classList.remove('dark');
  localStorage.setItem('dark-mode', 'disabled');
};

//* dark-mod un aktif olma durumu kontrol ederek 
//* kullanici sayfayi yenilese bile dark modede kalmaya devam ediyor
if (darkMode === 'enabled') {
  enableDarkMode();
}

//*butona tiklandiginda dark mode aktif degil(light-mode) ise dark modu aktif eder
toggleBtn.onclick = () => {
  let darkMode = localStorage.getItem('dark-mode');
  if (darkMode === 'disabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};
