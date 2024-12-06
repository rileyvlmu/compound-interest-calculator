const principalBox = document.querySelector("#principal");
const aprSlider = document.querySelector("#apr");
const aprText = document.querySelector("#aprText");
const periodBox = document.querySelector("#period");
const yearBox = document.querySelector("#years");
const accumulatedBox = document.querySelector("#accumulated");
const amountBox = document.querySelector("#amount");

// Update APR text when slider value changes
aprSlider.addEventListener("input", () => {
  aprText.textContent = aprSlider.value;
  calculate(); // Recalculate when APR changes
});

// Add event listeners to input fields to trigger recalculation
principalBox.addEventListener("input", calculate);
periodBox.addEventListener("input", calculate);
yearBox.addEventListener("input", calculate);

function calculate() {
  // Parse input values as numbers
  const principal = parseFloat(principalBox.value) || 0;
  const apr = parseFloat(aprSlider.value) / 100; // Convert APR from percentage
  const period = parseFloat(periodBox.value) || 1; // Prevent division by zero
  const years = parseFloat(yearBox.value) || 0;

  // Calculate total amount with compound interest
  const total = principal * Math.pow(1 + apr / period, period * years);

  // Calculate accumulated interest
  const accumulatedInterest = total - principal;

  // Update the output fields
  amountBox.textContent = total.toFixed(2); // Total amount
  accumulatedBox.textContent = accumulatedInterest.toFixed(2); // Accumulated interest
}
