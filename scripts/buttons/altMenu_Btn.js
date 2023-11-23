altMenuBtn.addEventListener("click", () => {
    let altMenuBtnMark = document.querySelector(".altMenuBtn-mark")
    if(menuType === 0){
        setTimeout(() => {
            menuTextarea1.style.display = "none"
            menuTextarea2.style.display = "none"

            menu2.forEach((e) => {
                e.style.display = "block"
            });
            printList(frontMenu2, wList)
            printList(backMenu2, wList)
            altMenuBtnMark.style.display = "inline"
            card.focus()
            menuType = 1
            
        }, 200)
        changeRotation(card, getRotation(card)[0] + 360, getRotation(card)[1])
    }else{
        setTimeout(() => {
            menuTextarea1.style.display = "block"
            menuTextarea2.style.display = "block"
            menu2.forEach((e) => {
                e.style.display = "none"
            });
            altMenuBtnMark.style.display = "none"
            card.focus()
            menuType = 0
        }, 200)
        changeRotation(card, getRotation(card)[0] + 360, getRotation(card)[1])

        try {
            printTextArea(menuTextarea1, wList.list)
            printTextArea(menuTextarea2, wList.list)
        } catch (error) {
            console.log("Ошибка тут 3");
        }
        
    }
    
})