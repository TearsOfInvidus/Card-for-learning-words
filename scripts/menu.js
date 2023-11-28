//Creating a List When Text Changes
frontMenuMain.addEventListener("input", () => {
    wList.createList(frontMenuMain.value)
    backMenuMain.value = frontMenuMain.value
})

//Creating a List When Text Changes
backMenuMain.addEventListener("input", () => {
    wList.createList(backMenuMain.value)
    frontMenuMain.value = backMenuMain.value
})

//Добавление пары в список при нажатии add
backMenuAlt.querySelectorAll(".add").forEach((e) => {
    e.addEventListener("click", () => {
        if(backMenuAlt.querySelector(".mtb1").value != "" && backMenuAlt.querySelector(".mtb2").value != ""){
            wList.addListItem(backMenuAlt.querySelector(".mtb1").value, backMenuAlt.querySelector(".mtb2").value)
            
            menuAltList.forEach((e) => { //Заполнение списка пар альтернативного меню элементами
                printList(e, wList)
            })
        }
    })
}) 

//Generates a table from a list of pairs
function printList(parentNode, dictionary) {
    parentNode.innerHTML = ""

    dictionary.list.forEach(element => {
        const menu2Pair = document.createElement("div")
        menu2Pair.classList = "menu-alt-pair"
        menu2Pair.innerHTML =
            `
        <button class="menu-alt-word button" tabindex="1">${element[0]}</button>
        <button class="menu-alt-translation button" tabindex="1">${element[1]}</button>
        <button class="button del" tabindex="1">del</button>
        `;

        const wordBtn = menu2Pair.querySelector(".menu-alt-word");
        wordBtn.addEventListener("click", () => { //Копирование слова при нажатии + Анимация

            wordBtn.classList.add("menu-alt-button-copy")
            setTimeout(() => {
                wordBtn.classList.remove("menu-alt-button-copy")
            }, 400)

            navigator.clipboard.writeText(wordBtn.textContent)
        })

        const translationBtn = menu2Pair.querySelector(".menu-alt-translation");
        translationBtn.addEventListener("click", () => { //Копирование слова при нажатии + Анимация
            translationBtn.classList.add("menu-alt-button-copy")
            setTimeout(() => {
                translationBtn.classList.remove("menu-alt-button-copy")
            }, 400)

            navigator.clipboard.writeText(translationBtn.textContent)
        })

        const delBtn = menu2Pair.querySelector(".del");
        delBtn.addEventListener("click", () => { //Удаление пары и обновление списка при нажатии на del
            dictionary.list.splice(dictionary.list.indexOf(element), 1)
            printList(parentNode, dictionary)
        })

        parentNode.append(menu2Pair)
    });
}

//Вывод списка пар в виде текста с форматированием "text    text\n"
function printTextArea(parentNode, pairList) {
    parentNode.value = ""
    pairList.forEach(element => {
        parentNode.value += element[0] + "\t" + element[1] + "\n"
    });
}