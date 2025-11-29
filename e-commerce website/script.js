const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const bag = document.getElementById("lg-bag");

bar.addEventListener("click", () => {
  nav.classList.add("active");
});

close.addEventListener("click", (e) => {
  nav.classList.remove("active");
  e.preventDefault();
});
