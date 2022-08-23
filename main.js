// constant
const toDoInput = document.querySelector("#toDo");
const submitBtn = document.querySelector("#submit");
const toDoListContainer = document.querySelector("#toDoListContainer");

// variables
let toDoList = [];
let numberOfToDo = 0;

function toDoStyle(numberOfToDo, inputValue) {
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
  ${inputValue}
  </label>
  </div>
  `;
  return pageContent;
}

// idk
window.addEventListener("keypress", () => {
  if (event.keyCode == 13) {
    submit();
  }
});

// functions
function submit() {
  if (!toDoList.includes(toDoInput.value) && toDoInput.value != "") {
    // console.log(numberOfToDo, toDoInput.value);
    toDoList.push(toDoInput.value);
    toDoListContainer.innerHTML += toDoStyle(numberOfToDo, toDoInput.value);
    numberOfToDo++;
    toDoInput.value = "";
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

let undoContent = [];
function deleteParent(e) {
  undoContent.push(e.parentElement);
  e.parentElement.remove();
}

document.addEventListener("keydown", () => {
  if (event.key === "Escape") {
    undelete();
  }
});

function undelete() {
  if (undoContent.length != 0) {
    toDoListContainer.innerHTML += `
    <div id="checkbox${numberOfToDo}Container" class="checkboxContainer">
    ${undoContent.shift().innerHTML}
    </div>
    `;
  }
}
