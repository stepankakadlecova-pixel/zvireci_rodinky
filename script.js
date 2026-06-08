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

const hidingSpots = [
  { left: "7%",  top: "48%", width: "120px", z: 15 },
  { left: "16%", top: "63%", width: "75px",  z: 35 },
  { left: "27%", top: "54%", width: "100px", z: 25 },
  { left: "37%", top: "68%", width: "75px",  z: 35 },
  { left: "48%", top: "55%", width: "110px", z: 25 },
  { left: "58%", top: "70%", width: "75px",  z: 35 },
  { left: "68%", top: "58%", width: "105px", z: 25 },
  { left: "77%", top: "70%", width: "75px",  z: 35 },
  { left: "84%", top: "50%", width: "115px", z: 15 },
  { left: "43%", top: "78%", width: "70px",  z: 35 }
];

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
});

placeAnimalsRandomly();

document.querySelectorAll(".animal").forEach(animal => {
  animal.addEventListener("click", () => {
    if (animal.classList.contains("found")) return;

    foundOrder++;

    animal.classList.add("found");
    animal.style.right = `${20 + foundOrder * 85}px`;

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

function placeAnimalsRandomly() {
  const animals = Array.from(document.querySelectorAll(".animal"));
  const shuffledSpots = shuffle([...hidingSpots]);

  animals.forEach((animal, index) => {
    const spot = shuffledSpots[index];

    animal.style.left = spot.left;
    animal.style.top = spot.top;
    animal.style.width = spot.width;
    animal.style.zIndex = spot.z;
  });
}

function checkWin() {
  if (cubsLeft === 0 && momFound && dadFound) {
    setTimeout(() => {
      winScreen.style.display = "flex";
    }, 1000);
  }
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
