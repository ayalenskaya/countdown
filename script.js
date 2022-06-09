let date = new Date('Jan 1 2023 00:00:00');

function counts() {
let now = new Date();
gap = date - now;

let days = Math.floor(gap / 1000 / 60 / 60 / 24);
let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
let minutes = Math.floor(gap / 1000 / 60 ) % 60;
let seconds = Math.floor(gap / 1000) % 60;

if (gap< 0) {
    document.getElementById('group').innerText = 'С Новым годом!';
} else {
    document.getElementById('d').innerText = days + ' дней';
    document.getElementById('h').innerText = hours + ' часов';
    document.getElementById('m').innerText = minutes + ' минут';
    document.getElementById('s').innerText = seconds + ' секунд';
}

setInterval(counts, 1000)
}

counts();




