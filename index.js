/*console.log(document);
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

/*
const allAreas = document.querySelectorAll('div .area');

for (let i = 0; i < allAreas.length; i++) {
    console.log(allAreas[i]);
}
*/
/*
const descriptions = document.querySelectorAll(".description");

for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + '<a href="#">...</a>';
    }
  
    desc.innerHTML = content;
  }
//get all ratings parent and value child from document
  const ratings = document.querySelectorAll(".rating .value");
 //for loop for all of the ratings 
  for (let rating of ratings) {
//rating Value converting from string to float
    let ratingValue = parseFloat(rating.innerText);
// if the rating is greater than 4.7 it wil set the font weight to bold
    if (ratingValue > 4.7) {
// Using classList to add and remove style from CSS page
        rating.classList.add('high-rating');
        rating.classList.remove('value');
        //rating.style.fontWeight = "bold";
 // set the color of ratings greater than 4.7
        rating.style.color = "#3ba17c";
      }
  }
  //Selecting parks from the page
  const parks = document.querySelectorAll(".park");
  //Get the number of parks
  const numberParks = parks.length;
  //Create a new element, in this case it will be a div
  const newElement = document.createElement("div");
// Use innerText to insert text into the new element
newElement.innerText = `${numberParks} exciting parks to visit`;
//Adding style to the element using classList
newElement.classList.add("header-statement");
//Select the header and add the new element with appendChild() method
const header = document.querySelector("header");
header.appendChild(newElement);

// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park");

// Remove that park
//main.removeChild(park);
const headings = document.querySelectorAll("article")
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});
*/
// Select the `nameSorter` link
const nameSorter = document.querySelector("#nameSorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();

  // 1. Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

// Function for sorting by name
const sortByRating = (parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating.stat .value").innerText;
    const parkBRating = parkB.querySelector(".rating.stat .value").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  
  // Function for handling the `nameSorter` click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#nameSorter");
  
  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);