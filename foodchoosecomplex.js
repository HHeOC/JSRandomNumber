var food = [
"Spaghetti",
"Seafood",
"Hamburger",
"Curry",
"Chicken",
"Rice",
"Hot Dog",
"Human",
"Pork",
"Bread",
"Potatoe"
];

var methodChoose = [Math.floor(Math.random()*cooking.length)];
var foodchoose = [Math.floor(Math.random()*food.length)];
window.alert(cooking[methodChoose] +" "+ food[foodchoose]);
