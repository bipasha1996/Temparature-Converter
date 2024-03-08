function convertTemp() {
  const inputTemp = parseFloat(document.getElementById("num").value);
  const unit = document.getElementById("unit").value;
  let convertedTemp;
  if (unit === "Celsius") {
    convertedTemp = (inputTemp * 9) / 5 + 32;
    document.getElementById(
      "final"
    ).textContent = `${inputTemp} degrees celsius =${convertedTemp} degrees fahrenheit`;
  } else if (unit === "Fahrenheit") {
    convertedTemp = ((inputTemp - 32) * 5) / 9;
    document.getElementById(
      "final"
    ).textContent = `${inputTemp} degrees fahrenheit = ${convertedTemp} degrees celsius`;
  } else {
    document.getElementById("final").textContent = "Please select a vaild unit";
  }
}
