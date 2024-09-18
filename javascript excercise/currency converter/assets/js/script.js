var select = document.querySelectorAll(".currency"),
    input_currency = document.getElementById('input_currency'),
    output_currency = document.getElementById('output_currency');

// Fetching and populating currency options
fetch(`https://api.frankfurter.app/currencies`)
  .then((response) => response.json())
  .then((data) => {
    const entries = Object.entries(data);
    for (var i = 0; i < entries.length; i++) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  })
  .catch((error) => {
    console.error('Error fetching currencies:', error);
    // Handle error: Display a message or retry fetch
  });

// Conversion function
function convert() {
  if (select[0].value !== select[1].value) {
    const amount = input_currency.value;
    const fromCurrency = select[0].value;
    const toCurrency = select[1].value;

    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        // Update output_currency input with the converted amount
        output_currency.value = Object.values(data.rates)[0];
      })
      .catch((error) => {
        console.error('Error converting currency:', error);
        // Handle error: Display a message or retry conversion
      });
  } else {
    alert("Please select two different currencies");
  }
}
