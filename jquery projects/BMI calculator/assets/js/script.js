// const btnEl = document.getElementById("btn");
// const bmiInputEl = document.getElementById("bmi-result");
// const weightConditionEl = document.getElementById("weight-condition");

// function calculateBMI() {
//   const heightValue = document.getElementById("height").value / 100;
//   const weightValue = document.getElementById("weight").value;

//   const bmiValue = weightValue / (heightValue * heightValue);

//   bmiInputEl.value = bmiValue;

//   if (bmiValue < 18.5) {
//     weightConditionEl.innerText = "Under weight";
//   } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
//     weightConditionEl.innerText = "Normal weight";
//   } else if (bmiValue >= 25 && bmiValue <= 29.9) {
//     weightConditionEl.innerText = "Overweight";
//   } else if (bmiValue >= 30) {
//     weightConditionEl.innerText = "Obesity";
//   }
// }

// btnEl.addEventListener("click", calculateBMI);

// jquery codes
$(document).ready(function() {
  function calculateBMI() {
    const heightValue = $('#height').val() / 100;
    const weightValue = $('#weight').val();

    const bmiValue = weightValue / (heightValue * heightValue);

    $('#bmi-result').val(bmiValue.toFixed(2));

    let weightCondition;
    if (bmiValue < 18.5) {
      weightCondition = "Under weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      weightCondition = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      weightCondition = "Overweight";
    } else if (bmiValue >= 30) {
      weightCondition = "Obesity";
    }

    $('#weight-condition').text(weightCondition);
  }

  $('#btn').click(calculateBMI);
});

