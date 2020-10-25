
if ('serviceWorker' in navigator){
   navigator.serviceWorker
   .register('./service-worker.js', { scope: './' })
   .then(function(registration){
     console.log("Service Worker Registered", registration);
   })
   .catch(function(err){
     console.log("Service Worker Failed to register", err);
   })
}
function myFunction() {
  var element = document.getElementById("interfacef");
  element.classList.toggle("wrapper");
}
function showme(){
  var e=document.querySelector(".added")
  e.style.visibility= 'visible';
}
function xoraekocolor(){
  var xorae=document.querySelector("#xorae")
  xorae.style.backgroundColor='#f07878';
}
function xoraakocolor(){
  var xoraa=document.querySelector("#xoraa")
  xoraa.style.backgroundColor='#f07878';
}
function xoraokocolor(){
  var xorao=document.querySelector("#xorao")
  xorao.style.backgroundColor='#f07878';
}
function xoraskocolor(){
  var xoras=document.querySelector("#xoras")
  xoras.style.backgroundColor='#f07878';
}
function xorarkocolor(){
  var xorar=document.querySelector("#xorar")
  xorar.style.backgroundColor='#f07878';
}
function xoramkocolor(){
  var xoram=document.querySelector("#xoram")
  xoram.style.backgroundColor='#f07878';
}
