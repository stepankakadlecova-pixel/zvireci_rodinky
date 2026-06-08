const levels = [
  {
    name: "liščí rodinka",
    folder: "liska",
    cubCount: 4,
    startTitle: "Najdi 4 liščata",
    startText: "A potom najdi i lišku a lišáka.",
    animals: [
      { file: "fox_dad.png", type: "dad", left: "64%", top: "48%", width: "17%" },
      { file: "fox_mom.png", type: "mom", left: "23%", top: "54%", width: "16%" },
      { file: "fox_cub1.png", type: "cub", left: "13%", top: "70%", width: "8%" },
      { file: "fox_cub2.png", type: "cub", left: "43%", top: "66%", width: "8%" },
      { file: "fox_cub2.png", type: "cub", left: "76%", top: "68%", width: "8%" },
      { file: "fox_cub3.png", type: "cub", left: "55%", top: "75%", width: "8%" }
    ]
  }
];

let shuffledLevels = shuffle([...levels]);
let currentLevelIndex = 0;

let cubsLeft = 0;
let momFound = false;
let dadFound = false;

const startScreen = document.getElementById("startScreen");
const winScreen = document.getElementById("winScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const layersDiv = document.getElementById("layers");
const animalsDiv = document.getElementById("animals");

const bigNumber = document.getElementById("bigNumber");
const startTitle = document.getElementById("startTitle");
const startText = document.getElementById("startText");

const cubsLeftEl = document.getElementById("cubsLeft");
const momStatus = document.getElementById("momStatus");
const dadStatus = document.getElementById("dadStatus");

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  currentLevelIndex++;

  if (currentLevelIndex >= shuffledLevels.length) {
    shuffledLevels = shuffle([...levels]);
    currentLevelIndex = 0;
  }

  winScreen.style.display = "none";
  loadLevel();
  startScreen.style.display = "flex";
});

loadLevel();

function loadLevel() {
  const level = shuffledLevels[currentLevelIndex];

  layersDiv.innerHTML = "";
  animalsDiv.innerHTML = "";

  cubsLeft = level.cubCount;
  momFound = false;
  dadFound = false;

  bigNumber.textContent = level.cubCount;
  startTitle.textContent = level.startTitle;
  startText.textContent = level.startText;

  cubsLeftEl.textContent = cubsLeft;
  momStatus.textContent = "❌";
  dadStatus.textContent = "❌";

  for (let i = 1; i <= 8; i++) {
    const img = document.createElement("img");
    img.src = `images/${level.folder}/${i}.png`;
    img.className = "layer";
    img.style.zIndex = i <= 3 ? i : 20 + i;
    layersDiv.appendChild(img);
  }

  level.animals.forEach(animalData => {
    const img = document.createElement("img");
    img.src = `images/${level.folder}/${animalData.file}`;
    img.className = "animal";
    img.dataset.type = animalData.type;

    img.style.left = animalData.left;
    img.style.top = animalData.top;
    img.style.width = animalData.width;
    img.style.zIndex = 10;

    img.addEventListener("click", () => findAnimal(img));

    animalsDiv.appendChild(img);
  });
}

function findAnimal(animal) {
  if (animal.classList.contains("found")) return;

  animal.classList.add("found");

  const type = animal.dataset.type;

  if (type === "cub") {
    cubsLeft--;
    cubsLeftEl.textContent = cubsLeft;
  }

  if (type === "mom") {
    momFound = true;
    momStatus.textContent = "✅";
  }

  if (type === "dad") {
    dadFound = true;
    dadStatus.textContent = "✅";
  }

  if (cubsLeft === 0 && momFound && dadFound) {
    setTimeout(() => {
      winScreen.style.display = "flex";
    }, 700);
  }
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
