altMenuBtn.addEventListener("click", () => {
    const altMenuBtnMark = document.querySelector(".altMenuBtn-mark") //Маркер альтернативного меню

    if(menuType === 0){
        setTimeout(() => {
            frontMenuMain.style.display = "none"
            backMenuMain.style.display = "none"

            menuAltContainer.forEach((e) => {
                e.style.display = "block"
            });

            menuAltList.forEach((e) => { //Заполнение списка пар альтернативного меню элементами
                printList(e, wList)
            })

            altMenuBtnMark.style.display = "block"
            card.focus()
            menuType = 1
        }, 200)
        changeRotation(card, getRotation(card)[0] + 360, getRotation(card)[1])
    }else{
        setTimeout(() => {
            frontMenuMain.style.display = "block"
            backMenuMain.style.display = "block"

            menuAltContainer.forEach((e) => {
                e.style.display = "none"
            });

            altMenuBtnMark.style.display = "none"
            card.focus()
            menuType = 0
        }, 200)
        changeRotation(card, getRotation(card)[0] + 360, getRotation(card)[1])

        printTextArea(frontMenuMain, wList.list)
        printTextArea(backMenuMain, wList.list)
        
    }
})