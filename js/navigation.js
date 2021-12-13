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
	var latecheckin = document.getElementById("latecheckin");
	var complete = document.getElementById("complete");
	latecheckin.style.display = "none";
	complete.style.display = "block";
}
