// const countersEl = document.querySelectorAll(".counter");

// countersEl.forEach((counterEl) => {
//   counterEl.innerText = "0";
//   incrementCounter();
//   function incrementCounter() {
//     let currentNum = +counterEl.innerText;
//     const dataCeil = counterEl.getAttribute("data-ceil");
//     const increment = dataCeil / 15;
//     currentNum = Math.ceil(currentNum + increment);

//     if (currentNum < dataCeil) {
//       counterEl.innerText = currentNum;
//       setTimeout(incrementCounter, 50);
//     } else {
//       counterEl.innerText = dataCeil;
//     }
//   }
// });

// jquery codes
$(document).ready(function() {
  $('.counter').each(function() {
    const $counterEl = $(this);
    $counterEl.text('0');
    incrementCounter($counterEl);

    function incrementCounter($counterEl) {
      let currentNum = +$counterEl.text();
      const dataCeil = $counterEl.data('ceil');
      const increment = dataCeil / 15;
      currentNum = Math.ceil(currentNum + increment);

      if (currentNum < dataCeil) {
        $counterEl.text(currentNum);
        setTimeout(() => incrementCounter($counterEl), 50);
      } else {
        $counterEl.text(dataCeil);
      }
    }
  });
});
