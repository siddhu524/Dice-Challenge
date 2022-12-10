var randomnumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomnumber1+".png";
var randomImageSrc="images/"+randomDiceImage;
var Image1=document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImageSrc);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomnumber2+".png";
var randomImageSrc2="images/"+ randomDiceImage2;
var Image2=document.querySelectorAll("img")[1];
Image2.setAttribute("src", randomImageSrc2);

if (randomnumber1>randomnumber2) {
  document.querySelector("h1").innerHTML="Player 1 wins";

}else if (randomnumber1<randomnumber2) {
  document.querySelector("h1").innerHTML="Player 2 wins";

}else {
  document.querySelector("h1").innerHTML="Draw";


}
