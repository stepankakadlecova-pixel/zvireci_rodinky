let cubsLeft = 3;
let momFound = false;
let dadFound = false;

const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");

const winScreen = document.getElementById("winScreen");

const cubsLeftText = document.getElementById("cubsLeft");
const momStatus = document.getElementById("momStatus");
const dadStatus = document.getElementById("dadStatus");

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
});

document.querySelectorAll(".animal").forEach(animal => {
  animal.addEventListener("click", () => {
    if (animal.classList.contains("found")) return;

    animal.classList.add("found");

    const type = animal.dataset.type;

    if (type === "cub") {
      cubsLeft--;
      cubsLeftText.textContent = cubsLeft;
    }

    if (type === "mom") {
      momFound = true;
      momStatus.textContent = "✅";
    }

    if (type === "dad") {
      dadFound = true;
      dadStatus.textContent = "✅";
    }

    checkWin();
  });
});

function checkWin() {
  if (cubsLeft === 0 && momFound && dadFound) {
    setTimeout(() => {
      winScreen.style.display = "flex";
    }, 500);
  }
}
