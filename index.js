const simpleColors = [
  "red", "blue", "violet", "aqua", "antiquewhite", "aquamarine",
  "chocolate", "crimson", "coral", "cyan", "darkcyan", "darkgoldenrod"
]

const hexaColors = [
  "#dba289", "#8e1d0d", "#d04cba", "#b2f49e",
  "#7ec5d5", "#e09e23", "#b0d300", "#25045b",
  "#20b2c4"
]

/* nav buttons */
const simple = document.getElementsByClassName('left-nav');
const hexa = document.getElementsByClassName('right-nav');

/* change colors */
const bgColor = document.getElementById('center');
const text = document.getElementById('colorText');
const wordColor = document.getElementById('wordColor');
const changeButton = document.getElementById('change-button');


const simpleChange = () => {
  if (simple[0].className == "left-nav") {
    simple[0].className = "left-nav active"
    hexa[0].className = "right-nav"
  }
  console.log("simple " + simple[0].className)
}

const hexaChange = () => {
  if (simple[0].className == "left-nav active") {
    simple[0].className = "left-nav"
    hexa[0].className = "right-nav active"
  }
  console.log("hexa " + hexa[0].className)
}


changeButton.addEventListener('click', () => {
  if (simple[0].className == "left-nav active"){
    let randomNumber = Math.floor(Math.random() * simpleColors.length - 1) + 1;
    bgColor.style.background = simpleColors[randomNumber]
    /* arreglar el tema de los colores de las letras */
    wordColor.style.color = simpleColors[randomNumber]
    text.innerHTML = "Background color: " + simpleColors[randomNumber]
    /* console.log(text) */
  } else if (hexa[0].className == "right-nav active") {
    let randomNumber = Math.floor(Math.random()*hexaColors.length - 1) + 1;
    bgColor.style.background = hexaColors[randomNumber]
    text.innerHTML = "Background color: " + hexaColors[randomNumber] 
  }
})