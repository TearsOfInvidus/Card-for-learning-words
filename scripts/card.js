//Setting pairs on the card
function setPair(front, back, pair) {
    frontText.innerText = pair[0].toUpperCase()
    backText.innerText = pair[1].toUpperCase()
}

//Card flip
card.addEventListener("click", () => {

    if(isMenuOpened === false){

        if(isFront === true){
            isFront = false;
        }else{
            isFront = true;
        }
        changeRotation(card, getRotation(card)[0], getRotation(card)[1] + 180)
    }
})

//Pressing "Enter" when the card is focused
card.addEventListener("keydown", (e) => {
    if(document.hasFocus(card) == true && e.key == "Enter") {
        card.click()
    }
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
    isRotating = true
    elem.style.transform = `rotateX(${X}deg) rotateY(${Y}deg)`
    setTimeout(() => {
        isRotating = false
    }, 400)
}

