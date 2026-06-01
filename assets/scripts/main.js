{
  // dark mode
  const darkBtn = document.querySelector(".menu__dark");
  darkBtn.addEventListener("click", () => {
    darkBtn.classList.toggle("white-mode");
  });
  // h1 typing
  const letters = document.querySelector(".thin");
  const phrase = "performance e SEO";
  const phraseArray = phrase.split("");
  letters.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < phraseArray.length) {
      letters.textContent += phraseArray[i];
      i++;
    } else {
      clearInterval(interval);
      pipeInvoc();
    }
  }, 200);
  function pipeInvoc() {
    letters.innerHTML += "<span class='pipe'>|</span>";
    const pipe = document.querySelector(".pipe");
    setInterval(() => {
      pipe.classList.toggle("opacity");
    }, 800);
  }
  // mobile menu
  const body = document.querySelector("body");
  const mobileBtn = document.querySelector(".menu__button");
  const mobileMenu = document.querySelector(".menu__mobile");
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    body.classList.add("overflow");
  });
  // portfolio modal
  const modalBtn = document.querySelectorAll(".open-modal");
  const modal = document.querySelectorAll(".modal");
  const background = document.querySelector(".background");
  const closeModal = document.querySelectorAll(".close-modal");
  for (let i = 0; i < modal.length; i++) {
    modalBtn[i].addEventListener("click", () => {
      for (let a = 0; a < modal.length; a++) {
        modal[a].classList.remove("show-modal");
      }
      modal[i].classList.add("show-modal");
      background.classList.add("show-background");
      body.classList.add("overflow");
    });
    closeModal[i].addEventListener("click", () => {
      modal[i].classList.remove("show-modal");
      background.classList.remove("show-background");
      body.classList.remove("overflow");
    });
  }
  document.addEventListener("click", (ev) => {
    const event = ev.target;
    if (event.classList.contains("background")) {
      for (let i = 0; i < modal.length; i++) {
        modal[i].classList.remove("show-modal");
        background.classList.remove("show-background");
        body.classList.remove("overflow");
      }
    }
  });
}
