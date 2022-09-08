//The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
"use strict";

/*=============================================
=            Modal Section          =
=============================================*/

//Select the first element that has a "target" attribute:
//Wrapper target | button icon X | empty did
const modal = document.querySelector("[data-modal]"),
  modalCloseBtn = document.querySelector("[data-modal-close]"),
  modalCloseOverlay = document.querySelector("[data-modal-overlay]");
console.log(modal, modalCloseBtn, modalCloseOverlay);

//feature: add class closed to close modal w css.
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

//modalCloseFunc (effectue la fonction suivante)
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

/*=====  End of Section Modal  ======*/

/*=============================================
=            ToastNotification Section        =
=============================================*/
const notificationToast = document.querySelector("[data-toast]"),
  toastCloseBtn = document.querySelector("[data-toast-close]");
console.log("object");
console.log(notificationToast, toastCloseBtn);

toastCloseBtn.addEventListener("click", (ev) => {
  notificationToast.classList.add("closed");
});
/*=====  End of Section ToastNotification ======*/
