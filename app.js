const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(232, 200, 100, 150);
ctx.arc(282, 150, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(265, 150, 5, 0, 2 * Math.PI);
ctx.arc(300, 150, 5, 0, 2 * Math.PI);
ctx.fill();
