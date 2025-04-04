const addButtonEl = document.querySelector("#counterAdd");
const subButtonEl = document.querySelector("#counterSub");
const counterDisplayEl = document.querySelector("#counterDisplay");

let total = 0;
const limit = 20;

const updateCounterDisplay = () => {
  if (total > limit) {
    total = limit;
  }

  if (total < 0) {
    total = 0;
  }

  counterDisplayEl.textContent = total;

  document.body.style.setProperty(
    "background-color",
    `rgb(${(total / limit) * 255}, 64, 0)`
  );
};

addButtonEl.addEventListener("click", () => {
  total += 1;
  updateCounterDisplay();
});

subButtonEl.addEventListener("click", () => {
  total -= 1;
  updateCounterDisplay();
});

updateCounterDisplay();
