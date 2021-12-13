function navigationToggle() {
	let nav = document.querySelector('#navigation');
	nav.classList.toggle('active');
}

function settingsToggle() {
	let nav = document.querySelector('#settingslinks');
	nav.classList.toggle('active');
}

const mobileVerification = document.querySelector("#mobile");
   const phoneInput = window.intlTelInput(mobileVerification, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });
