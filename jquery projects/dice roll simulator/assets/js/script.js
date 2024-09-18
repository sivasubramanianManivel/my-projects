// const buttonEl = document.getElementById("roll-button");

// const diceEl = document.getElementById("dice");

// const rollHistoryEl = document.getElementById("roll-history");

// let historyList = [];

// function rollDice() {
//   const rollResult = Math.floor(Math.random() * 6) + 1;
//   const diceFace = getDiceFace(rollResult);
//   diceEl.innerHTML = diceFace;
//   historyList.push(rollResult);
//   updateRollHistory();
// }

// function updateRollHistory() {
//   rollHistoryEl.innerHTML = "";
//   for (let i = 0; i < historyList.length; i++) {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
//       historyList[i]
//     )}</span>`;
//     rollHistoryEl.appendChild(listItem);
//   }
// }

// function getDiceFace(rollResult) {
//   switch (rollResult) {
//     case 1:
//       return "&#9856;";
//     case 2:
//       return "&#9857;";
//     case 3:
//       return "&#9858;";
//     case 4:
//       return "&#9859;";
//     case 5:
//       return "&#9860;";
//     case 6:
//       return "&#9861;";
//     default:
//       return "";
//   }
// }

// buttonEl.addEventListener("click", () => {
//   diceEl.classList.add("roll-animation");
//   setTimeout(() => {
//     diceEl.classList.remove("roll-animation");
//     rollDice();
//   }, 1000);
// });

// jquery codes
$(document).ready(function() {
  var $buttonEl = $("#roll-button");
  var $diceEl = $("#dice");
  var $rollHistoryEl = $("#roll-history");

  var historyList = [];

  function rollDice() {
      var rollResult = Math.floor(Math.random() * 6) + 1;
      var diceFace = getDiceFace(rollResult);
      $diceEl.html(diceFace);
      historyList.push(rollResult);
      updateRollHistory();
  }

  function updateRollHistory() {
      $rollHistoryEl.html(""); // Clear previous history
      historyList.forEach(function(result, index) {
          var listItem = `<li>Roll ${index + 1}: <span>${getDiceFace(result)}</span></li>`;
          $rollHistoryEl.append(listItem);
      });
  }

  function getDiceFace(rollResult) {
      switch (rollResult) {
          case 1:
              return "&#9856;";
          case 2:
              return "&#9857;";
          case 3:
              return "&#9858;";
          case 4:
              return "&#9859;";
          case 5:
              return "&#9860;";
          case 6:
              return "&#9861;";
          default:
              return "";
      }
  }

  $buttonEl.on("click", function() {
      $diceEl.addClass("roll-animation");
      setTimeout(function() {
          $diceEl.removeClass("roll-animation");
          rollDice();
      }, 1000);
  });
});
