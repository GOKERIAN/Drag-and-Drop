let btn = document.querySelector("#btn");
let inp = document.querySelector("#inp");
let boxes = document.querySelectorAll(".box");
let drag = null;
window.onload = () => inp.focus();

btn.addEventListener("click", addDataToBox);
function addDataToBox() {
  if (inp.value != "") {
    const item = document.createElement("p");
    item.setAttribute("draggable", "true");
    item.append(document.createTextNode(inp.value));
    inp.value = "";
    item.classList.add("item");
    boxes[0].appendChild(item);
  }

  dragItem();
}

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });

    boxes.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "black";
        this.style.color = "white";
      });

      box.addEventListener("dragleave", function () {
        this.style.backgroundColor = "white";
        this.style.color = "black";
      });
      box.addEventListener("drop", function () {
        this.appendChild(drag);
        this.style.backgroundColor = "white";
        this.style.color = "black";
      });
    });
  });
}
