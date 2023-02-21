const notificationButton = document.querySelector(".notification-button");
const notificationPanel = document.querySelector(".notification-popover-panel");

notificationButton.addEventListener("click", () => {
  notificationPanel.classList.toggle("active");
});

// click outside to close

document.addEventListener("click", (e) => {
  if (!e.target.closest(".notification-button")) {
    notificationPanel.classList.remove("active");
  }
});
