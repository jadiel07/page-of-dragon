function openMenu() {
  if (burgerItens.style.display == "block") {
    burgerItens.style.display = "none";
  } else {
    burgerItens.style.display = "block";
  }
}

const yinYang = document.getElementById("yinYang");
var body = document.getElementById("bodyPage");
var corAlterada = false;
var audio = document.getElementById("audio");

yinYang.addEventListener("click", function () {
  if (corAlterada) {
    body.style.backgroundColor = "";
    body.style.color = "";
    corAlterada = false;
  } else {
    body.classList.add("transition");
    body.style.backgroundColor = "black";
    body.style.color = "white";
    corAlterada = true;
  }
  audio.play();
});
