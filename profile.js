let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')
let movieForm = document.querySelector('#form') 
const favColor = () => {
    alert('My favorite color is Green')
}

const favPlace = () => {
    alert('My favorite place is San Diego')
}

const favRitual = () => {
    alert('My favorite ritual is videogames after class')
}

const submitForm = (event) => {
    event.preventDefault()
alert('Im watching what i want')
}

colorBtn.addEventListener('click', favColor)
  

placeBtn.addEventListener('click', favPlace) 


ritualBtn.addEventListener('click', favRitual)

movieForm.addEventListener('submit', submitForm)

