let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainner = document.querySelector(".msg-containner");
let msg = document.querySelector("#msg");

let turnO = true; // Player O starts

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainner.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1va = boxes[pattern[0]].innerText;
        let pos2va = boxes[pattern[1]].innerText;
        let pos3va = boxes[pattern[2]].innerText;

        if (pos1va !== "" && pos2va !== "" && pos3va !== "") {
            if (pos1va === pos2va && pos2va === pos3va) {
                showWinner(pos1va);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgcontainner.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

newgamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);