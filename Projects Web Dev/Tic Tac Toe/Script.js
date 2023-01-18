let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgamebtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
let xTurn = true;
let count = 0;

// Disable All Buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  // enable popup
  popupRef.classList.remove("hide");
};

// Enable Alll Buttons for (New Game and Restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //disable Popup
  popupRef.classList.add("hide");
};
// This function is Executed when a player wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};
//  Function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60F; <br> 'O' It's a Draw";
};

// New Game
newgamebtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

//WinLogic
const winChecker = () => {
  // Loop through all win Patterns
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    // Check if elements are filled
    // If 3 Empty elements are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        // If all 3 buttons have same values then pass the value to win Function
        winFunction(element1);
      }
    }
  }
};

// Display X/O on click

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      // Display x
      element.innerText = "X";
      element.disabled = "true";
    } else {
      xTurn = true;
      // Display Y
      element.innerText = "O";
      element.disabled = "true";
    }
    //Increment count on Each click
    count += 1;
    if (count == 9) {
      //Ts's a drew Since there are total of 9 boxed
      drawFunction();
    }
    // Check for Win on every click
    winChecker();
  });
});
//  Enable buttons and disable popup on page
window.onload = enableButtons;
