// constant
const toDoInput = document.querySelector("#toDo");
const submitBtn = document.querySelector("#submit");
const toDoListContainer = document.querySelector("#toDoListContainer");

// variables
let toDoList = [];
let numberOfToDo = 0;
let pageContent = `
<div id="checkbox${numberOfToDo}Container" class="checkboxContainer">
<div id="delete${numberOfToDo}" onclick="deleteParent(this)">
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
    <div id="delete${numberOfToDo}" onclick="deleteParent(this)">
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
