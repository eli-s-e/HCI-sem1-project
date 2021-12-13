function navigationToggle() {
	let nav = document.querySelector('#navigation');
	nav.classList.toggle('active');
}

function settingsToggle() {
	let nav = document.querySelector('#settingslinks');
	nav.classList.toggle('active');
}

//**********functions for checkin process**********
function goToStep2() {
	var step1 = document.getElementById("step1");
	var step2 = document.getElementById("step2");
	var progress = document.getElementById("progress");
	const progresstext = document.getElementById("progresstext");
	step1.style.display = "none";
	step2.style.display = "block";
	progress.style.width = "40%";
	progresstext.innerHTML = "40%";
}

function goToStep3() {
	var step2 = document.getElementById("step2");
	var step3 = document.getElementById("step3");
	var progress = document.getElementById("progress");
	const progresstext = document.getElementById("progresstext");
	step2.style.display = "none";
	step3.style.display = "block";
	progress.style.width = "60%";
	progresstext.innerHTML = "60%";
}

function goToStep4() {
	var step3 = document.getElementById("step3");
	var step4 = document.getElementById("step4");
	var progress = document.getElementById("progress");
	const progresstext = document.getElementById("progresstext");
	step3.style.display = "none";
	step4.style.display = "block";
	progress.style.width = "80%";
	progresstext.innerHTML = "80%";
}

function goToConfirmation() {
	var step4 = document.getElementById("step4");
	var confirmation = document.getElementById("confirmation");
	var progress = document.getElementById("progress_bar");
	step4.style.display = "none";
	confirmation.style.display = "block";
	progress_bar.style.display = "none";
}

function goToLateCheckIn() {
	var confirmation = document.getElementById("confirmation");
	var latecheckin = document.getElementById("latecheckin");
	confirmation.style.display = "none";
	latecheckin.style.display = "block";
}

//pop-ups on confirmation page
function openPopup1() {
	var popup1 = document.getElementById("popup1");
	var popup2 = document.getElementById("popup2");
	popup2.style.display = "none";
	if (popup1.style.display === "none") {
		popup1.style.display = "block";
	}
	else {
		popup1.style.display = "none";
	}
}

function openPopup2() {
	var popup1 = document.getElementById("popup1");
	var popup2 = document.getElementById("popup2");
	popup1.style.display = "none";
	if (popup2.style.display === "none") {
		popup2.style.display = "block";
	}
	else {
		popup2.style.display = "none";
	}
}

function goToComplete() {
	var confirmation = document.getElementById("confirmation");
	var latecheckin = document.getElementById("latecheckin");
	var complete = document.getElementById("complete");
	var back= document.getElementById("back_icon");
	confirmation.style.display = "none";
	latecheckin.style.display = "none";
	complete.style.display = "block";
	back.style.visibility = "hidden";
}

//home page confirmation for epr
function eprConfirmation() {
	var patientinfo = document.getElementById("homepage");
	var eprconfirmation = document.getElementById("eprconfirmation");
	homepage.style.display = "none";
	eprconfirmation.style.display = "block";
}

//show extra information for faq
function faqExpand1() {
	let nav = document.querySelector('#faqexpand1');
	nav.classList.toggle('active');
}
function faqExpand2() {
	let nav = document.querySelector('#faqexpand2');
	nav.classList.toggle('active');
}
function faqExpand3() {
	let nav = document.querySelector('#faqexpand3');
	nav.classList.toggle('active');
}

//show and hide qr code
function toggleQR() {
	let nav = document.querySelector('#popupscreen');
	let nav2 = document.querySelector('#QRpopup');
	nav.classList.toggle('active');
	nav2.classList.toggle('active');
}

//cancel appointment
function toggleCancelPopup() {
	let nav = document.querySelector('#popupscreen');
	let nav2 = document.querySelector('#cancelpopup');
	nav.classList.toggle('active');
	nav2.classList.toggle('active');
}
