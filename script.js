const store = document.getElementById("storeName")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const containder = document.querySelector(".container")
const items = containder.querySelectorAll(".list .item")
const indicator = document.querySelector(".indicators")
const traits = indicator.querySelectorAll("ul li")
const list = containder.querySelector(".list ")
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1


const carColors = ["#cd0000", "#c9ccce", "#efbe37"]; // Ferrari, Porsche, Lamborghini

function updateActiveCar(direction) {
      
    const itemPrevious = containder.querySelector(".list .item.active");
    itemPrevious.classList.remove("active");
    items[active].classList.add("active");

    
    const traitsPrevious = indicator.querySelector("ul li.active");
    traitsPrevious.classList.remove("active");
    traits[active].classList.add("active");

    
    indicator.querySelector(".number").textContent = (`0${active + 1}`);

    
    store.style.color = carColors[active];

   
    list.style.setProperty("--calculation", direction)
}


prevButton.addEventListener("click", () => {
    
    const newDirection = 1          
    
    active = active - 1 < firstPosition ? lastPosition : active - 1
    updateActiveCar(newDirection);   
})


nextButton.addEventListener("click", () => {
    
    const newDirection = -1    
 
    active = active + 1 > lastPosition ? firstPosition : active + 1
    updateActiveCar(newDirection);
})

/* O método classList.toggle verifica se a classe especificada (show, no caso) já está presente no elemento. Se a classe não está presente ela será adicionada. Se a classe já está presente ela será removida. (O mesmo botão adiciona e remove a classe com esse método)  */
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});
