//Card
const card = document.querySelector(".card") 
const frontText = document.querySelector(".front-text")
const backText = document.querySelector(".back-text")

//Menu
const menu = document.querySelector(".menu")
const menuTextarea = document.querySelector(".menu-textarea")

//Buttons
const menuBtn = document.querySelector(".menuBtn")
const nextBtn = document.querySelector(".nextBtn")

let wList = new WList
if(menuTextarea.value != '') {
    wList.createList(menuTextarea.value)
    setPair(frontText, backText, wList.currentPair)
}

//Pair list constructor
function WList() {
    this.list = [];
    this.currentPair;

    this.createList = function(text){
        let pairs = []
        let result = []
        pairs = text.replaceAll("/t", "\t").trim().split("\n")

        for(let i = 0; i<pairs.length; i++) {
            result[i] = pairs[i].split("\t")
            result[i][0].trim
            result[i][1].trim
        }
        this.list = result
        this.currentPair = result[0]
    }

    this.randomCurrentPair = function() {
        this.currentPair = this.list[Math.floor(Math.random() * this.list.length)]
    }
}

//Setting pairs on the card
function setPair(front, back, pair) {
    front.innerText = pair[0].toUpperCase()
    back.innerText = pair[1].toUpperCase()
}

//Card flip
card.addEventListener("click", () => {
    changeRotation(card, getRotation(card)[0], getRotation(card)[1] + 180)
})

//Pressing "Enter" when the card is focused
card.addEventListener("keydown", (e) => {
    if(document.hasFocus(card) == true && e.key == "Enter") {
        card.click()
    }
})

//Pressing the 'menu' button
menuBtn.addEventListener("click", () => {

    if(menu.style.display == "none" || menu.style.display == "") {
        menu.style.display = "block"
        menuTextarea.focus()
        card.style.display = "none"
    }else if(card.style.display == "none") {
        menu.style.display = "none"
        card.style.display = "block"
        card.focus()
    }else{
        console.log("Что-то не так (((")
    }
})

//Pressing the 'next' button
nextBtn.addEventListener("click", () => {
    if(wList.list == '' && menuTextarea.value != '') {
        wList.createList(menuTextarea.value)
        setPair(frontText, backText, wList.currentPair)
    }else if(wList.list != '') {
        wList.randomCurrentPair()
        setPair(frontText, backText, wList.currentPair)
    }

    changeRotation(card, getRotation(card)[0] + 360, getRotation(card)[1])
})

//Creating a List When Text Changes
menuTextarea.addEventListener("change", () => {
    wList.createList(menuTextarea.value)
})

//Getting rotation
function getRotation (elem) {
    let rotations
    if(elem.style.transform != ""){
        rotations = elem.style.transform.split(' ')
        rotations[0] = parseInt(rotations[0].match(/\d+/))
        rotations[1] = parseInt(rotations[1].match(/\d+/))
    }else{
        rotations = [0, 0]
    }
    return rotations
}

//Changing rotation
function changeRotation (elem, X = 0, Y = 0) {
    elem.style.transform = `rotateX(${X}deg) rotateY(${Y}deg)`
}