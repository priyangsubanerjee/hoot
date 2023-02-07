const reactBtn1 = document.getElementById("reactButton_1");
const reactBtn2 = document.getElementById("reactButton_2");

const moreBtn1 = document.getElementById("moreButton_1");
const moreBtn2 = document.getElementById("moreButton_2");

reactBtn1.addEventListener("click", (e) => {
  const reactMenu = e.target.nextElementSibling;
  reactBtn2.nextElementSibling.classList.remove("active");
  moreBtn1.nextElementSibling.classList.remove("active");
  moreBtn2.nextElementSibling.classList.remove("active");
  reactMenu.classList.contains("active")
    ? reactMenu.classList.remove("active")
    : reactMenu.classList.add("active");
});

moreBtn1.addEventListener("click", (e) => {
  const reactMenu = e.target.nextElementSibling;
  reactBtn2.nextElementSibling.classList.remove("active");
  reactBtn1.nextElementSibling.classList.remove("active");
  moreBtn2.nextElementSibling.classList.remove("active");
  reactMenu.classList.contains("active")
    ? reactMenu.classList.remove("active")
    : reactMenu.classList.add("active");
});

reactBtn2.addEventListener("click", (e) => {
  const reactMenu = e.target.nextElementSibling;
  reactBtn1.nextElementSibling.classList.remove("active");
  moreBtn1.nextElementSibling.classList.remove("active");
  moreBtn2.nextElementSibling.classList.remove("active");
  reactMenu.classList.contains("active")
    ? reactMenu.classList.remove("active")
    : reactMenu.classList.add("active");
});

moreBtn2.addEventListener("click", (e) => {
  const reactMenu = e.target.nextElementSibling;
  reactBtn2.nextElementSibling.classList.remove("active");
  reactBtn1.nextElementSibling.classList.remove("active");
  moreBtn1.nextElementSibling.classList.remove("active");
  reactMenu.classList.contains("active")
    ? reactMenu.classList.remove("active")
    : reactMenu.classList.add("active");
});

document.addEventListener("click", (e) => {
  if (
    !e.target.closest("#reactButton_1") &&
    !e.target.closest("#reactButton_2") &&
    !e.target.closest("#moreButton_1") &&
    !e.target.closest("#moreButton_2")
  ) {
    reactBtn1.nextElementSibling.classList.remove("active");
    reactBtn2.nextElementSibling.classList.remove("active");
    moreBtn1.nextElementSibling.classList.remove("active");
    moreBtn2.nextElementSibling.classList.remove("active");
  }
});
