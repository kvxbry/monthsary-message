document.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelector(".heart");
  const message = document.querySelector(".message");
  const instruction = document.querySelector(".instruction");

 
  heart.addEventListener("click", () => {
    const isOpen = message.classList.contains("open");

    if (isOpen) {
      message.classList.remove("open");
      message.classList.add("closed");
      heart.classList.remove("hidden");
      instruction.textContent = "Click the heart to open 💌";
    } else {
      message.classList.add("open");
      message.classList.remove("closed");
      heart.classList.add("hidden");
      instruction.textContent = "Click the heart to close ❤️";
  }
});

});