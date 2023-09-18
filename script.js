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
	let currentHours = date.getHours();
	let currentMinutes = date.getMinutes();
	let currentSeconds = date.getSeconds();
  let currentMilliseconds = date.getMilliseconds();

	handHours.style.animationDelay = '-' + (43200/12 * (currentHours%12) + 43200/12 * currentMinutes/60) + 's';
	// Since animation-duration is set to 3600s at .hands-box .minutes
	// We should transform [0, 60] -> [0s, 3600s]
	// Example 1: handle points on 0 -> `-0s`
	// Example 2: handle points on 3 -> `-180s`
	// Example 3: handle points on 60 -> `-3600s`
	// So formula is: 3600 / 60 * currentMinutes + correctionForSeconds
	// correctionForSeconds is number between 0 and 3600 / 60
	handMinutes.style.animationDelay = '-' + (3600 / 60 * (currentMinutes) + 3600/60*currentSeconds/60) + 's';
	handSeconds.style.animationDelay = '-' + (1000*currentSeconds + currentMilliseconds) + 'ms';
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
