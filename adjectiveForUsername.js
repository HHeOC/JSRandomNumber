var adj = [
"long",
"short",
"big",
"little",
"large",
"small"
];

var username = prompt("what is your name?");
var description = [Math.floor(Math.random()*adj.length)];
window.alert(username + " is " + adj[description]);