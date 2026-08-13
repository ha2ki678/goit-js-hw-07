const controls = document.querySelector("#controls");
const numberInput = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = Number(numberInput.value);

  if (amount < 1 || amount > 100 || !Number.isInteger(amount)) {
    return;
  }

  destroyBoxes();
  createBoxes(amount);
  numberInput.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesArray.push(box);
  }

  boxes.append(...boxesArray);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}