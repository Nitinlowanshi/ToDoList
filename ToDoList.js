const items = document.querySelector("#item");
const ToDolist = document.querySelector("#todo");

items.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        todo(this.value);
        this.value = "";
    }
})

const todo = (item) => {
    const listitems = document.createElement("li");
    listitems.innerHTML = `
   ${item}
   <i class="fa-solid fa-xmark"></i>
   `
    listitems.querySelector("i").addEventListener("click", function () {
        listitems.remove();
    })
    ToDolist.appendChild(listitems);
}