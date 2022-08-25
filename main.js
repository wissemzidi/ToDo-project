// constant
const toDoInput = document.querySelector("#toDo");
const submitBtn = document.querySelector("#submit");
const toDoListContainer = document.querySelector("#toDoListContainer");

// variables
let toDoList = [];
let undoContent = [];
let undoContentInnerHtml = [];
let undoNumber = [];
// let numberOfToDo = 0;
let checkedBoxes = [];
function toDoStyle(toDoNumber, inputValue) {
  pageContent = `
  <div id="${toDoNumber}" class="checkboxContainer">
    <div id="delete${toDoNumber}" onclick="deleteParent(this)">
      <img
        onmouseover="this.src
        ='./assets/icons/delete(img).svg'"
        height="20px"
        onmouseout="this.src='./assets/icons/delete.svg'"
        src="./assets/icons/delete.svg"
        alt="X"
      />
    </div>
    <input id="checkbox${toDoNumber}" type="checkbox" onclick="checking(this)"/>
    <label class="label${toDoNumber}" for="checkbox${toDoNumber}">
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
  if (event.key === "Escape") {
    undelete();
  }
});

// functions
function submit() {
  if (!toDoList.includes(toDoInput.value) && toDoInput.value != "") {
    for (let i = 0; i < undoContentInnerHtml.length; i++) {
      if (undoContentInnerHtml[i].includes(toDoInput.value)) {
        if (undoContent.length == 1) {
          undoContentInnerHtml.shift();
          undoContent.shift();
          undoNumber.shift();
        } else if (undoContent.length > 1) {
          undoContentInnerHtml.splice(i, i);
          undoContent.splice(i, i);
          undoNumber.splice(i, i);
        }
      }
    }
    toDoListContainer.innerHTML += toDoStyle(toDoList.length, toDoInput.value);
    toDoList.push(toDoInput.value);
    addingCheckedTag();
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
  toDoInput.value = "";
}

function deleteParent(e) {
  undoContent.unshift(e.parentElement);
  let labelInnerHtml = document
    .querySelector(`.label${e.parentElement.id}`)
    .innerHTML.trim();
  undoContentInnerHtml.unshift(labelInnerHtml);
  if (toDoList.length == 1) {
    toDoList.shift();
  } else if (toDoList.length > 1) {
    toDoList.splice(
      toDoList.indexOf(labelInnerHtml),
      toDoList.indexOf(labelInnerHtml)
    );
  }
  undoNumber.unshift(e.parentElement.id);
  e.parentElement.remove();
}

function undelete() {
  if (undoContent.length != 0) {
    let a = undoNumber.shift();
    let b = undoContent.shift();
    toDoListContainer.innerHTML += `
    <div id="${a}" class="checkboxContainer">
    ${b.innerHTML}
    </div>
    `;
    let labelInnerHtml = document.querySelector(`.label${a}`).innerHTML.trim();
    toDoList.unshift(labelInnerHtml);
    undoContentInnerHtml.shift();
  }
}

function checking(e) {
  let checkboxId = e.id;
  let checkboxNb = checkboxId.slice(8);
  if (e.checked != true) {
    checkedBoxes.splice(
      checkedBoxes.indexOf(checkboxId),
      checkedBoxes.indexOf(checkboxId) + 1
    );
  } else {
    e.checked = true;
    checkedBoxes.push(e.id);
  }
}

function addingCheckedTag() {
  for (let i = 0; i < checkedBoxes.length; i++) {
    document.getElementById(checkedBoxes[i]).checked = true;
  }
}

