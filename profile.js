let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

const favColor = () => {
    alert('My favorite color is Green')
}

const favPlace = () => {
    alert('My favorite place is San Diego')
}

const favRitual = () => {
    alert('My favorite ritual is videogames after class')
}


colorBtn.addEventListener('click', favColor)
  

placeBtn.addEventListener('click', favPlace) 


ritualBtn.addEventListener('click', favRitual)



