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
