const arabasta = document.getElementById("arabasta");
const skypea = document.getElementById("skypea");
const eniesLobby = document.getElementById("enies-lobby");
//punya blender
const modalBg = document.querySelector(".modalbg");
const modalClose = document.querySelector(".close-modal");

arabasta.addEventListener("click", () => {
  modalBg.classList.add("activate-bg");
});

modalClose.addEventListener("click", () => {
  modalBg.classList.remove("activate-bg");
});

//punya hairdryer
const modalBg1 = document.querySelector(".modalbg1");
const modalClose1 = document.querySelector(".close-modal1");

skypea.addEventListener("click", () => {
  modalBg1.classList.add("activate-bg1");
});

modalClose1.addEventListener("click", () => {
  modalBg1.classList.remove("activate-bg1");
});

//punya pencukur
const modalBg2 = document.querySelector(".modalbg2");
const modalClose2 = document.querySelector(".close-modal2");
eniesLobby.addEventListener("click", () => {
  modalBg2.classList.add("activate-bg2");
});

modalClose2.addEventListener("click", () => {
  modalBg2.classList.remove("activate-bg2");
});
