{
  const darkBtn = document.querySelector(".menu__dark");
  const letters = document.querySelector(".thin");
  darkBtn.addEventListener("click", () => {
    darkBtn.classList.toggle("white-mode");
  });
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
}
