const openModalButton = document.querySelector("#openModal");
const modalEl = document.querySelector(".modal");
const modalContentEl = modalEl.querySelector(".modal_content");

openModalButton.addEventListener("click", () => {
  modalEl.classList.add("open");
});

modalContentEl.addEventListener("click", () => [
  modalEl.classList.remove("open"),
]);
