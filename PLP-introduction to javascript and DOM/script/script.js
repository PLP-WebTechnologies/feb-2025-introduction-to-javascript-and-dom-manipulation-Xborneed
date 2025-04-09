
const apply = document.querySelector("#apply");

const elementh1 = document.querySelector("h1");
elementh1.style.color = "blue ";

const main_content = document.querySelector("main-content");

const toggleBars =document.querySelector(".toggle-bars");

const bar = document.querySelector(".bar");


function myBars(){

 const bar = document.querySelector(".toggle-bars");
    if(bar.style.display != "none"){
        bar.style.transform = "rotate(90deg)";
        bar.style.transition = "0.5s";
}
else{
    bar.style.transform = "rotate(0deg)";
    bar.style.transition = "0.5s";
}
const nav = document.querySelector("nav");

if(nav.style.display != "block"){
nav.style.display = "block";
nav.style.transition = "0.5s";



}
else{
    nav.style.display = "none";
    nav.style.transition = "0.5s";
}




}


function hoverDisplay(){
    const animatedShow = document.querySelector(".visit");

  
    animatedShow.style.backgroundColor = "#fffc";
    animatedShow.style.transform = "scale(1.2) "
  
    animatedShow.style.transition = " 2s ease-in-out";
}


const learnMore = document.querySelector(".learn-more");



learnMore.style.backgroundColor = "#fffb";

function Learn(){
    const learnMore = document.querySelector(".learn-more");
    if(learnMore.style.display != "block"){
        learnMore.style.display = "block";
        learnMore.style.transition = "0.5s";
    }
    else{

    learnMore.style.transform = "translateY(50px)"
  
    learnMore.style.transition = " 0.5s ease-in-out" ;


}

  




