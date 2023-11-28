//Pressing the 'menu' button
menuBtn.addEventListener("click", () => {

    if(isMenuOpened === false && isRotating === false){
        card.tabIndex = "-999"
        if(isFront === true){
            backMenuContainer.style.display = "block"
            backTextContainer.style.display = "none"
            frontMenuContainer.style.display = "none"
            card.click()
            isMenuOpened = true
            backMenuMain.focus()
        }else{
            backMenuContainer.style.display = "none"
            frontMenuContainer.style.display = "block"
            frontTextContainer.style.display = "none"
            card.click()
            isMenuOpened = true
            frontMenuMain.focus()
        }
        printTextArea(frontMenuMain, wList.list)
        printTextArea(backMenuMain, wList.list)
    }else if (isMenuOpened === true && isRotating === false){
        card.tabIndex = "1"
        setTimeout(closeAnimation => {
            backMenuContainer.style.display = "none"
            frontMenuContainer.style.display = "none"
            frontTextContainer.style.display = "flex"
            backTextContainer.style.display = "flex"
        }, 400)
        isMenuOpened = false
        card.click()
        card.focus()
    }
})