const buttonEl = document.querySelector("#new-color-button");
const currentColorEl = document.querySelector("#current-color");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const getRandomHexValue = () => {
  const randomIndex = Math.floor(Math.random() * hexValues.length);
  const randomHexValue = hexValues[randomIndex];
  return randomHexValue;
};

const getRandomHexString = (StringLength) => {
  let hexString = "";

  for (let ii = 0; ii < StringLength; ii++) {
    hexString += getRandomHexValue(StringLength);
  }
  return hexString;
};

buttonEl.addEventListener("click", () => {
  const randomHexString = "#" + getRandomHexString(6);
  console.log(randomHexString.length);

  document.body.style.setProperty("background-color", randomHexString);

  currentColorEl.textContent = randomHexString;
});
