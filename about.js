console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
		alert("Submitted Successfully")
}
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


function niceMessage(){
console.log("DUCKTOR SEES YOU")

let img = document.querySelector("myImage");

img.addEventListener('mouseover', () => {
   return  niceMessage
})}



