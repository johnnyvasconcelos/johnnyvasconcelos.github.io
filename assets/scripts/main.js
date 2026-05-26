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
  const mobileBtn = document.querySelector(".menu__button");
  const mobileMenu = document.querySelector(".menu__mobile");
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.add("show");
  });
}
