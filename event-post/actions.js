const moreOptionButtons = document.querySelectorAll(".moreOptionsButton");
const upVoteButtons = document.querySelectorAll(".upVoteButton");
const downVoteButtons = document.querySelectorAll(".downVoteButton");
const switchMenuBtns = document.querySelectorAll(".switchMenuBtn");
const searchInput = document.querySelector(".searchInput");
const commentContainers = document.querySelector(".commentBox");
const inventoryContainers = document.querySelector(".inventory");
const comments = document.querySelectorAll(".comment");

moreOptionButtons.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    const actionMenuToasts = document.querySelectorAll(".actionMenuToast");
    actionMenuToasts.forEach((actionMenuToast, j) => {
      if (i === j) {
        actionMenuToast.classList.toggle("active");
      } else {
        actionMenuToast.classList.remove("active");
      }
    });
  });
});

upVoteButtons.forEach((button, i) => {
  // uncheck downvote button

  button.addEventListener("click", (e) => {
    const downVoteButton =
      button.parentElement.querySelector(".downVoteButton");
    const downVoteIcon = downVoteButton.querySelector("iconify-icon");
    downVoteIcon.setAttribute("icon", "bx:downvote");

    const icon = button.querySelector("iconify-icon");
    const attribute = icon.getAttribute("icon");

    if (attribute === "bx:upvote") {
      icon.setAttribute("icon", "bxs:upvote");
    } else {
      icon.setAttribute("icon", "bx:upvote");
    }
  });
});

downVoteButtons.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    const upVoteButton = button.parentElement.querySelector(".upVoteButton");
    const upVoteIcon = upVoteButton.querySelector("iconify-icon");
    upVoteIcon.setAttribute("icon", "bx:upvote");

    const icon = button.querySelector("iconify-icon");
    const attribute = icon.getAttribute("icon");

    if (attribute === "bx:downvote") {
      icon.setAttribute("icon", "bxs:downvote");
    } else {
      icon.setAttribute("icon", "bx:downvote");
    }
  });
});

switchMenuBtns.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    const btns = document.querySelectorAll(".switchMenuBtn");
    btns.forEach((btn, j) => {
      if (i === j) {
        btn.classList.add("active");
        if (i === 0) {
          commentContainers.classList.add("active");
          inventoryContainers.classList.remove("active");
        } else if (i === 1) {
          commentContainers.classList.remove("active");
          inventoryContainers.classList.add("active");
        }
      } else {
        btn.classList.remove("active");
      }
    });
  });
});

searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();
  if (searchValue === "") {
    comments.forEach((comment) => {
      comment.classList.add("visible");
    });
    return;
  }
  comments.forEach((comment) => {
    const commentText = comment.querySelector(".commentMessage").textContent;
    if (commentText.toLowerCase().includes(searchValue)) {
      comment.classList.add("visible");
    } else {
      comment.classList.remove("visible");
    }
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".moreOptionsButton")) {
    const actionMenuToasts = document.getElementsByClassName("actionMenuToast");
    for (let j = 0; j < actionMenuToasts.length; j++) {
      actionMenuToasts[j].classList.remove("active");
    }
  }
});
