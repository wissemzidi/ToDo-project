// constant
const toDoInput = document.querySelector("#toDo");
const submitBtn = document.querySelector("#submit");
const toDoListContainer = document.querySelector("#toDoListContainer");

// variables
let toDoList = [];

// idk
window.addEventListener("keypress", () => {
  if (event.keyCode == 13) {
    submit();
  }
});

// functions
function submit() {
  if (!toDoList.includes(toDoInput.value) && toDoInput.value != "") {
    toDoList.push(toDoInput.value);
    let pageContent = `
    <div id="checkbox${toDoList.length - 1}Container" class="checkboxContainer">
    <div id="supprimer${toDoList.length - 1}" onclick="deleteParent(this)">
      <img
        onmouseover="this.src
        ='./assets/icons/delete(img).svg'"
        height="20px"
        onmouseout="this.src='./assets/icons/delete.svg'"
        src="./assets/icons/delete.svg"
        alt="X"
      />
    </div>
    <input class="checkbox${toDoList.length - 1}" type="checkbox" />
    <label class="label${toDoList.length - 1}" for="checkbox${
      toDoList.length - 1
    }">
    ${toDoList[toDoList.length - 1]}
    </label>
    </div>
    `;
    toDoListContainer.innerHTML += pageContent;
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

function deleteParent(e) {
  e.parentElement.style.display = "none";
}
