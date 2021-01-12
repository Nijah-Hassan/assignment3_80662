var colors = ["Green","Orange","Purple","Yellow","Pink"]
console.log(colors);

colors.unshift(prompt("Which color should be on fisrt in List"));
console.log(colors);

colors.push(prompt("Which color should be at the end of the List"));
console.log(colors);

colors.unshift(prompt("Which color should be Two more at fisrt in List"));
console.log(colors);

colors.pop();
console.log(colors);

var index = parseInt(prompt("Which Postion you want change in Index from 0 to 6"));
colors[index] = prompt("What Color Required at Choosen Position");
console.log(colors);

var index2 = parseInt(prompt("Which Postion you want delete from Index 0 to 6"));
colors[index2] = prompt("What Color you want to delete at Choosen Position");
colors[index2] = []
console.log(colors);