'use strict';

const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

for (let i = 1; i <= 12; i++) {
	numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}

numberHours.insertAdjacentHTML('afterbegin', numberElement.join(''));

for (let i = 1; i <= 60; i++) {
	barElement.push(`<span style="--index:${i};"><p></p></span>`);
}

barSeconds.insertAdjacentHTML('afterbegin', barElement.join(''));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime() {
	let date = new Date();
	let currentHours = date.getHours() * 3600;
	let currentMinutes = date.getMinutes() * 60;
	let currentSeconds = date.getSeconds();

	handHours.style.transform = `rotate(${
		currentHours * 30 + currentMinutes / 2
	}deg)`;
	handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;

	handSeconds.style.transform = ` rotate(${currentSeconds * 6}deg)`;

	handHours.style.animationDelay = '-' + currentHours + 's';
	handMinutes.style.animationDelay = '-' + currentMinutes + 's';
	handSeconds.style.animationDelay = '-' + currentSeconds + 's';
}

const dateWindow = document.querySelector('.date-window');

function getCurrentDate() {
	let date = new Date();
	let currentDate = date.getDate();
	console.log(currentDate);

	dateWindow.innerText = currentDate;
}

getCurrentDate();

getCurrentTime();

// setInterval(getCurrentTime, 1000);
