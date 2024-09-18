// const btnEl = document.getElementById("calculate");
// const billInput = document.getElementById("bill");
// const tipInput = document.getElementById("tip");
// const totalSpan = document.getElementById("total");

// function calculateTotal() {
//   const billValue = billInput.value;
//   const tipValue = tipInput.value;
//   const totalValue = billValue * (1 + tipValue / 100);
//   totalSpan.innerText = totalValue.toFixed(2);
// }

// btnEl.addEventListener("click", calculateTotal);

// jquery codes
$(document).ready(function() {
  $('#calculate').on('click', function() {
      var billValue = parseFloat($('#bill').val());
      var tipValue = parseFloat($('#tip').val());
      var totalValue = billValue * (1 + tipValue / 100);
      $('#total').text(totalValue.toFixed(2));
  });
});
