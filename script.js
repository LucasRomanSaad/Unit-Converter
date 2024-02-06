const input = document.getElementById("input");
const btnConverter = document.getElementById("convert-btn");
const lengthResult = document.getElementById("result-length");
const volumeResult = document.getElementById("result-volume");
const massResult = document.getElementById("result-mass");
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const toggleLabel = document.querySelector('.toggle-label');

btnConverter.addEventListener("click", function () {
  const inputValue = input.value;

  const feetValue = (inputValue * 3.281).toFixed(2);
  const metersValue = (inputValue / 3.281).toFixed(2);

  const gallonsValue = (inputValue * 0.3281).toFixed(2);
  const litersValue = (inputValue / 0.3281).toFixed(2);

  const poundsValue = (inputValue * 2.204).toFixed(2);
  const kilogramsValue = (inputValue / 2.204).toFixed(2);

  lengthResult.innerHTML = `${inputValue} meters = ${feetValue} feet | ${inputValue} feet = ${metersValue} meters`;
  volumeResult.innerHTML = `${inputValue} liters = ${gallonsValue} gallons | ${inputValue} gallons = ${litersValue} liters`;
  massResult.innerHTML = `${inputValue} kilos = ${poundsValue} pounds | ${inputValue} pounds = ${kilogramsValue} kilograms`;
});

darkModeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode", darkModeToggle.checked);
  toggleLabel.textContent = darkModeToggle.checked ? "Dark Mode" : "Light Mode";
});


// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
