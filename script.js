let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winner = document.querySelector("h2");
// console.log(winner);
// console.log(boxes);
let value = true;
let winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (value) {
      box.innerHTML = "X";
    } else {
      box.innerHTML = "O";
    }
    value = !value;
    box.disabled = true;
    checkWinner();
  });
});

function checkWinner() {
  for (let pattern of winPatterns) {
    console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        winner.style.display = "block";
        winner.textContent = `Congratulations Player ${pos1} is Winner!🙌`;
        for (let box of boxes) {
          box.disabled = true;
        }
      }
    }
  }
}
reset.addEventListener("click", () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
    value = true;
    winner.innerText = "";
  }
});
