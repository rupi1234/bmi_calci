function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    const bmi = weight / (height * height);
    const resultElement = document.getElementById("result");
    resultElement.textContent = bmi.toFixed(2);
  }
  