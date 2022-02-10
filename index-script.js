function changeColor(){

    
    let codeHexColor = "#"

    for(accountant=0; accountant<6; accountant++){
        codeHexColor += listHex[getRandomNumber()]
    }
    
    document.body.style.backgroundColor = codeHexColor
    title.innerHTML = `Código da cor é ${codeHexColor}`

}

function getRandomNumber(){
    return Math.floor(Math.random()*listHex.length)
}

const listHex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
var title = document.querySelector("#text")
const button = document.querySelector("#button")
button.addEventListener("click", changeColor)