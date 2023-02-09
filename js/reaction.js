const reactBtn = document.getElementsByClassName("reactButton");
const moreBtn = document.getElementsByClassName("moreButton");

for (let i = 0; i < reactBtn.length; i++) {
  reactBtn[i].addEventListener("click", function (e) {
    const menu = document.getElementsByClassName("reactionToast")[i];
    menu.classList.toggle("active");

    const reactionMenu = document.getElementsByClassName("reactionToast");
    for (let j = 0; j < reactionMenu.length; j++) {
      if (j != i) {
        reactionMenu[j].classList.remove("active");
      }
    }

    const moreMenu = document.getElementsByClassName("moreToast");
    for (let j = 0; j < moreMenu.length; j++) {
      moreMenu[j].classList.remove("active");
    }
  });
}

for (let i = 0; i < moreBtn.length; i++) {
  moreBtn[i].addEventListener("click", function (e) {
    const menu = document.getElementsByClassName("moreToast")[i];
    menu.classList.toggle("active");

    const moreMenu = document.getElementsByClassName("moreToast");
    for (let j = 0; j < moreMenu.length; j++) {
      if (j != i) {
        moreMenu[j].classList.remove("active");
      }
    }

    const reactionMenu = document.getElementsByClassName("reactionToast");
    for (let j = 0; j < reactionMenu.length; j++) {
      reactionMenu[j].classList.remove("active");
    }
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".reactButton") && !e.target.closest(".moreButton")) {
    const reactionMenu = document.getElementsByClassName("reactionToast");
    for (let j = 0; j < reactionMenu.length; j++) {
      reactionMenu[j].classList.remove("active");
    }

    const moreMenu = document.getElementsByClassName("moreToast");
    for (let j = 0; j < moreMenu.length; j++) {
      moreMenu[j].classList.remove("active");
    }
  }
});
