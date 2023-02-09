const changeBannerBtn = document.getElementById("changeBannerBtn");
const changeAvatarBtn = document.getElementById("changeAvatarBtn");

const bannerImg = document.getElementById("avatarBackgroundImg");
const avatarImg = document.getElementById("avatarImage");

if (changeAvatarBtn) {
  changeAvatarBtn.addEventListener("click", () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = () => {
      const file = fileInput.files[0];
      if (file) {
        avatarImg.src = URL.createObjectURL(file);
      }
    };
    fileInput.click();
  });
}

if (changeBannerBtn) {
  changeBannerBtn.addEventListener("click", () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = () => {
      const file = fileInput.files[0];
      if (file) {
        bannerImg.src = URL.createObjectURL(file);
      }
    };
    fileInput.click();
  });
}
