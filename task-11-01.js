"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const startChange = document.querySelector('button[data-action="start"]');
const stopChange = document.querySelector('button[data-action="stop"]');
const bodyList = document.querySelector('body');
const min = 0;
const max = colors.length;
let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// изменение цвета фона через Setinterval кнопка Start при клике на кнопку=========================================
startChange.addEventListener('click', ()=>{
  interval = setInterval(() => {
    bodyList.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
    
  }, 1000);
  startChange.disabled = true;
})
// кнопка  остановки смены цвета Stop при клике ================================
stopChange.addEventListener('click', ()=>{
  clearInterval(interval);
  startChange.disabled = false;
});