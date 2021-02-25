console.log(document);
/*
const heading = document.querySelector('h1');
console.log(heading);
const value = document.querySelector('.value');
console.log("value",value);
const button = document.querySelector('button');
console.log(button,"button");
const area = document.querySelector('.area');
console.log("area",area);
const divStat = document.querySelector('.stat div');
console.log(divStat,"divStat");
const hello = document.querySelector('.hello');
console.log(hello);
const buttons = document.querySelectorAll("button");
console.log(buttons);
*/
// Get a list of all `<h3>` elements
//const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
//for (let element of heading3List.values()) {
 // console.log(element);
//}
/*
const allDivs = document.querySelectorAll('div');
for(let element of allDivs.values()) {
    console.log(element);
}
*/
const allAreas = document.querySelectorAll('div .area');

for (let i = 0; i < allAreas.length; i++) {
    console.log(allAreas[i]);
}