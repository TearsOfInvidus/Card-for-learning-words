//Pressing the 'next' button
nextBtn.addEventListener("click", () => {
    if(isMenuOpened === false && isRotating === false && wList.list != ''){
        wList.randomCurrentPair()
        setPair(frontText, backText, wList.currentPair)
        changeRotation(card, getRotation(card)[0] + 360, getRotation(card)[1])
    }
})