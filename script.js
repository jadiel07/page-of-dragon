//menu hamburger
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

var imgDragon1 = document.getElementById("dragonWhite");
var imgDragon2 = document.getElementById("dragonBlack");
var imagensTrocadas = false;

var conteudoCard = true;
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card0 = document.getElementById("card0");

var audio = document.getElementById("audio");

yinYang.addEventListener("click", function () {
  //alteração na cor tema do site. alterning theme web site
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

  if (imagensTrocadas) {
    imgDragon1.style.display = "block";
    imgDragon2.style.display = "none";
    imagensTrocadas = false;
  } else {
    imgDragon1.style.display = "none";
    imgDragon2.style.display = "block";
    imagensTrocadas = true;
  }
  //audio adicionado ao clicar no yin-yang
  audio.play();
});
