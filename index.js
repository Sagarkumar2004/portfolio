console.log("javascript is runing")


const burger = document.getElementById('burger');
const navList =document.getElementsByClassName('navlist');
burger.onclick = function(){
  burger.classList.toggle('active');
  document.querySelector(".navbar").classList.toggle("navbargo");
};

document.querySelector(".navlist").addEventListener("click", function(){
  document.querySelector(".navbar").classList.add("navbargo");
  burger.classList.toggle('active');
 
});

