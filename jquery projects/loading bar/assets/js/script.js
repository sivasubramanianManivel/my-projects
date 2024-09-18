
// const counterEl = document.querySelector(".counter");

// const barEl = document.querySelector(".loading-bar-front");

// let idx = 0;

// updateNum();

// function updateNum() {
//   counterEl.innerText = idx + "%";
//   barEl.style.width = idx + "%";
//   idx++;
//   if (idx < 101) {
//     setTimeout(updateNum, 20);
//   }
// }


// jquery codes
$(document).ready(function() {
  var $counterEl = $(".counter");
  var $barEl = $(".loading-bar-front");
  
  var idx = 0;
  
  function updateNum() {
      $counterEl.text(idx + "%");
      $barEl.css("width", idx + "%");
      idx++;
      if (idx < 101) {
          setTimeout(updateNum, 20);
      }
  }
  
  updateNum();
});
