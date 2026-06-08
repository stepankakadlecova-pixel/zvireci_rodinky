let cubsLeft = 3;
let momFound = false;
let dadFound = false;
let foundOrder = 0;

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

    foundOrder++;

    animal.classList.add("found");

    animal.style.right = `${20 + foundOrder * 80}px`;
    animal.style.bottom = "20px";

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
    }, 1000);
  }
}
