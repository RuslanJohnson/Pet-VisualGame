const board = document.querySelector("#board");
const SQUARES = 15 * 20;
const COLORS = [
  "#0BB5FF",
  "#42C0FB",
  "#82CFFD",
  "#63B8FF",
  "#0D4F8B",
  "#1C86EE",
  "#0276FD",
  "#007FFF",
  "#0147FA",
];

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #1d1d1d`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * COLORS.length);
  return COLORS[index];
}
