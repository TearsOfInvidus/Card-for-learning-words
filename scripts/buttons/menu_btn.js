//Pressing the 'menu' button
menuBtn.addEventListener("click", () => {

    if(isMenuOpened === false && isRotating === false){
        card.tabIndex = "0"
        if(isFront === true){
            backMenu.style.display = "block";
            frontMenu.style.display = "none";
            card.click();
            isMenuOpened = true;
            list2.focus()
        }else{
            backMenu.style.display = "none";
            frontMenu.style.display = "block";
            card.click();
            isMenuOpened = true;
            list1.focus()
        }
        printTextArea(menuTextarea1, wList.list)
        printTextArea(menuTextarea2, wList.list)
    }else if (isMenuOpened === true && isRotating === false){
        card.tabIndex = "1"
        setTimeout(closeAnimation => {
            backMenu.style.display = "none";
            frontMenu.style.display = "none";
        }, 200)
        isMenuOpened = false;
        card.click(); 
        card.focus()
    }
})