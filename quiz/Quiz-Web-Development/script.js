const tombol = document.querySelector("button");
const input = document.getElementById("text");
const list = document.getElementById("list");

function tombolclose(kegiatan) {
  let span = document.createElement("SPAN");
  var x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  kegiatan.appendChild(span);
}
let lst = "";
tombol.addEventListener("click", function () {
  let paragraf = document.createElement("LI");
  lst = input.value;
  if (lst !== "") {
    paragraf.textContent = lst;
    list.appendChild(paragraf);
    input.value = "";
    tombolclose(paragraf);
  }
});

list.addEventListener(
  "click",
  function (siap) {
    if (siap.target.tagName == "LI") {
      siap.target.classList.toggle("checked");
    } else if (siap.target.className == "close") {
      let div = siap.target.parentElement;
      div.remove();
    }
  },
  false,
);
