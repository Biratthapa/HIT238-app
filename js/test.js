
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
