const moreOptionButtons = document.querySelectorAll(".moreOptionsButton");
const upVoteButtons = document.querySelectorAll(".upVoteButton");
const downVoteButtons = document.querySelectorAll(".downVoteButton");

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

document.addEventListener("click", (e) => {
  if (!e.target.closest(".moreOptionsButton")) {
    const actionMenuToasts = document.getElementsByClassName("actionMenuToast");
    for (let j = 0; j < actionMenuToasts.length; j++) {
      actionMenuToasts[j].classList.remove("active");
    }
  }
});
