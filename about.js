console.log("hello world");

let image = document.querySelector("#myImage");
let form = document.querySelector('#contact');

function handleSubmit(evt) {
	evt.preventDefault();
		alert("Submitted Successfully")
}

const niceMessage = () => {
	alert(`DUCKTOR SEES YOU`)
}

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', niceMessage)
   



