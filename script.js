const formEl = document.querySelector("form");
const formInputEl = formEl.querySelector("input");
const listContainer = document.querySelector("#listContainer");
const errorMsg = document.querySelector("#errorMsg");

const retrieveList = JSON.parse(localStorage.getItem("list"));

// local storage not working in github

/* retrieveList.map((list) => {
    toDoList(list);
}); */


formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formInputEl.value === "") {
    errorMsg.classList.remove("exitError");
    errorMsg.classList.add("enterError");

    setTimeout(() => {
      errorMsg.classList.remove("enterError");
      errorMsg.classList.add("exitError");
    }, 2000);
  } else {
    toDoList();
    updateLocalStorage();
  }
});

function toDoList(task) {
    let newTask = formInputEl.value;
    if(task)
    {
        newTask=task
    }
  const liEl = document.createElement("li");
  liEl.classList.add("listStyle");
  const inputEl = document.createElement("input");
  inputEl.classList.add("listInputStyle");
  inputEl.disabled = true;
  inputEl.value = newTask; 
  const iDel = document.createElement("i");
  iDel.setAttribute(
    "class",
    "fa-solid fa-trash cursor-pointer hover:text-red-600"
  );
  const iEdit = document.createElement("i");
  iEdit.setAttribute(
    "class",
    "fa-solid fa-square-pen cursor-pointer hover:text-white"
  );

  liEl.appendChild(inputEl);
  liEl.appendChild(iDel);
  liEl.appendChild(iEdit);
  listContainer.appendChild(liEl);
  formInputEl.value = "";
  iEdit.addEventListener("click", () => {
    inputEl.disabled = false;
    iEdit.style.color = "white";
    inputEl.focus();
    inputEl.addEventListener("change", (e) => {
      if (inputEl.value === "") {
        liEl.remove();
      } else {
        inputEl.value = e.target.value;
        inputEl.disabled = true;
        iEdit.style.color = "black";
        updateLocalStorage();
      }
    });
  });
  iDel.addEventListener("click", (e) => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
    const liELs = document.querySelectorAll('li');
    const list=[];
    liELs.forEach(liEl=>{
        const inputEl = liEl.querySelector('input');
        list.push(inputEl.value);
    })
  localStorage.setItem("list", JSON.stringify(list));
}
