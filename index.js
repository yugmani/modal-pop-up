const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");
const overlay = document.querySelector(".overlay");

// function to toggle the hidden class
const toggleModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

// event listeners to toggle hidden class
btnOpenModal.addEventListener("click", toggleModal);
btnCloseModal.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);
