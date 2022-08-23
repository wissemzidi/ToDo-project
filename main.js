// constant
const toDoInput = document.querySelector("#toDo");
const submitBtn = document.querySelector("#submit");
const toDoListContainer = document.querySelector("#toDoListContainer");

// variables
let toDoList = [];
let numberOfToDo = 0;
let pageContent = `
<div id="checkbox${numberOfToDo}Container" class="checkboxContainer">
<div id="supprimer${numberOfToDo}" onclick="deleteParent(this)">
  <img
    onmouseover="this.src
    ='./assets/icons/delete(img).svg'"
    height="20px"
    onmouseout="this.src='./assets/icons/delete.svg'"
    src="./assets/icons/delete.svg"
    alt="X"
  />
</div>
<input class="checkbox${numberOfToDo}" type="checkbox" />
<label class="label${numberOfToDo}" for="checkbox${numberOfToDo}">
${toDoInput.value}
</label>
</div>
`;

// idk
window.addEventListener("keypress", () => {
  if (event.keyCode == 13) {
    submit();
  }
});

// functions
function submit() {
  if (!toDoList.includes(toDoInput.value) && toDoInput.value != "") {
    console.log(numberOfToDo, toDoInput.value);
    toDoList.push(toDoInput.value);
    console.log(toDoList);
    pageContent = `
    <div id="checkbox${numberOfToDo}Container" class="checkboxContainer">
    <div id="supprimer${numberOfToDo}" onclick="deleteParent(this)">
      <img
        onmouseover="this.src
        ='./assets/icons/delete(img).svg'"
        height="20px"
        onmouseout="this.src='./assets/icons/delete.svg'"
        src="./assets/icons/delete.svg"
        alt="X"
      />
    </div>
    <input class="checkbox${numberOfToDo}" type="checkbox" />
    <label class="label${numberOfToDo}" for="checkbox${numberOfToDo}">
    ${toDoInput.value}
    </label>
    </div>
    `;
    toDoListContainer.innerHTML += pageContent;
    numberOfToDo++;
  } else {
    toDoInput.animate(
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0px)" },
      ],
      100
    );
    toDoInput.style.boxShadow = "0 0 10px 0px red";
    setTimeout(() => {
      toDoInput.style.boxShadow = "none";
    }, 1000);
  }
}

let undoContent;
let undoCounter = 0;
function deleteParent(e) {
  undoContent = e.parentElement;
  e.parentElement.remove();
  console.log(undoContent);
  if (undoCounter == 0) {
    undoCounter++;
  }
  console.log(undoCounter);
}

document.addEventListener("keydown", () => {
  if (event.key === "Escape") {
    undelete();
  }
});

function undelete() {
  if (undoCounter == 1) {
    toDoListContainer.innerHTML += `
    <div id="checkbox${numberOfToDo}Container" class="checkboxContainer">
    ${undoContent.innerHTML}
    </div>
    `;
    undoCounter--;
  }
}

// other

/*  Summary :



























// Numbers
console.log(Number("100")); // 100
console.log((10).toString()); // "10"
console.log((100.5555).toFixed(2)); // 100.56
console.log(+"100 wissem"); // NaN
console.log(Number("100 wissem")); // NaN
console.log(parseInt("100.5 wissem")); // 100
console.log(parseFloat("100.5 wissem")); // 100.5
console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.55)); // false
console.log(Number.isInteger(100)); // true
console.log(isNaN("wissem")); // true because its not a number, It's a string
console.log(isNaN("100")); // false because isNaN convert the string to number, It's a number
console.log(Number.isNaN("wissem" / 20)); // true because he checks if the result of "wissem" / 20 is a number or not



// Math
console.log(Math.round(20.5)); // 21
console.log(Math.round(20.2)); // 20
console.log(Math.ceil(99.2)); // 100
console.log(Math.floor(99.9)); // 99
console.log(Math.min(10, 20, 100, -100)); // -100
console.log(Math.max(10, 20, 100, -100)); // 100
console.log(Math.pow(4, 2)); // 16
console.log(Math.random()); // random number between 0 and 1
console.log(Math.trunc(99.9)); // 99
console.log(Math.trunc(99.2)); // 99


// string methods // 1
let Name = "  Wissem  ";
let list = [1, 2, 3, 4, 5];
console.log(Name);
console.log(Name[0]);
console.log(Name[Name.length - 1]); // the last character in the string
console.log(Name.charAt(1)); // the same of []
console.log(Name.charAt(6)); // the same of []
console.log(Name.length);
console.log(Name.trim()); // erase the spaces in the beginning and the end
console.log(Name[0].toUpperCase()); // transform the selected character to upperCase
console.log(Name.toUpperCase()); // transform the word to upperCase
console.log(Name.toLowerCase()); // transform the word to lowerCase


// string methods // 2
let text = "wissem zidi";
console.log(text.indexOf("wissem")); // return the position of the index
console.log(text.indexOf("wissem", 8)); // begin searching from a specified place
console.log(text.indexOf("i")); // return the position of the character
console.log(text.lastIndexOf("")); // length , life hack
console.log(text.lastIndexOf("i")); // begin searching from the end
console.log(text.slice(7)); // slice from 7 to the end
console.log(text.slice(7, 9)); // slice from 7 to 9
console.log(text.slice(-1)); // give the last letter
console.log(text.slice(-4, -2)); // slice the word from -4 to -2
console.log(text.repeat(5)); // repeat the text 5 times
console.log(text.split(" ")); // split the text into a table when he find a " "


// string methods // 3
let text = "Elzero web school";
console.log(text.substring()); // all the text
console.log(text.substring(2, 6)); // from 2 to 6
console.log(text.substring(6, 2)); // from 2 to 6, he switch them
console.log(text.substring(-10)); // -10 = 0
console.log(text.substring(text.length - 5, text.length - 3)); // "ch"
console.log(text.substr()); // from 0 to the end
console.log(text.substr(2, 4)); // from 2 to 2+4 "zero"
console.log(text.substr(-5, 2)); // from -5 to -5+2 "ch"
console.log(text.substr(7, 2)); // from 7 to 6+2 "we"
console.log(text.includes("web")); // true
console.log(text.includes("Elzero", 8)); // false
console.log(text.startsWith("E")); // true ,counting with the length
console.log(text.startsWith("E", 2)); // false ,counting with the length
console.log(text.endsWith("o")); // false ,counting with the length
console.log(text.endsWith("o", 6)) // true ,counting with the length


// logical operator
  ! Not
  && And
  || Or 


// if condition
  if () {          >>      condition ? treatment
  } else if {      >>>      : second condition ? treatment
  } else {         >>>       : treatment
  }                >>


// Nullish Coalescing Operator And Logical Or
let price = 100;
console.log(`price is ${price || "cheap"}`) // if the price = false value
console.log(`price is ${price ?? "cheap"}`) // if the price = null or undefined


// switch statement
let day = 3;


// if day value + type = case
switch (day) {
  default: // default value
    console.log("Unknown Day");
    break;
  case 0: // if value + type of day = case value
    console.log("Monday");
    break;
  case 1:
    console.log("Tuesday");
    break;
  case 2: // if value + type of day = case 2 or case 3 value
  case 3:
    console.log("Thursday");
    break;
}


// Searching arrayd
let myFriends = ["Youssef", "Amin"];
console.log(myFriends);
myFriends.unshift("Omar");  // add the "" to the beginning of the array
console.log(myFriends);
myFriends.push("Mohammed"); // add the "" to the end of the array
console.log(myFriends);
myFriends.shift(); // remove the first string
console.log(myFriends);
myFriends.pop(); // remove the last string
console.log(myFriends);
let first = myFriends.shift();  // the first string in the array
console.log(first)
let last = myFriends.pop()  // the last string in the array
console.log(last)


// sorting arrays
let array = ["10", "-20", "wissem", "omar", 20, 2000, 90];
console.log(array.sort()); // clean the array from a to z
console.log(array.reverse()); // reverse the array


// slicing array => slice() , splice()
let arr = ["Wissem", "Ahmed"];
console.log(arr.slice(0, 1)); // set a new var
arr.splice() // change the array
console.log(arr)
arr.splice(0, 0, "Omar") // adding to the array
console.log(arr)
arr.splice(0, 1) // removing from the array
console.log(arr)
arr.splice(0, 1, "Omar") // replacing from the array
console.log(arr)


// joining arrays
let myFriends = ["wissem", "Ahmed", "Jamal", "Ousseme"];
let myNewFriends = ["Ayoub", "Aymen", "Hamdi"];
let mySchoolFriends = ["Tare", "Jalel"];
console.log(
  myFriends.concat(myNewFriends, mySchoolFriends, "Farah", ["dd", "aa"])
); // concatenate the arrays
console.log(myFriends.join(" ")); // slice the array to strings by the separatore " "











*/

console.log("// End of code //");
function newFunction() {
  return "Elzero";
}
