if (menuTextarea1.value != '') {
    wList.createList(menuTextarea1.value)
    setPair(frontText, backText, wList.currentPair)
} else if (menuTextarea2.value != '') {
    wList.createList(menuTextarea2.value)
    setPair(frontText, backText, wList.currentPair)
}

//Creating a List When Text Changes
menuTextarea1.addEventListener("input", () => {
    wList.createList(menuTextarea1.value)
    menuTextarea2.value = menuTextarea1.value
})

menuTextarea2.addEventListener("input", () => {
    wList.createList(menuTextarea2.value)
    menuTextarea1.value = menuTextarea2.value
})

//Generates a table from a list of pairs
function printList(parentNode, dictionary) {
    parentNode.innerHTML = ""

    const menu2AddPair = document.createElement("div")
    menu2AddPair.classList = "menu2-pair"
    menu2AddPair.innerHTML =
        `
    <input class="menu2-word menu-textbox mtb1" placeholder="WORD"></input>
    <input class="menu2-translation menu-textbox mtb2" placeholder="TRANSLATION"></input>
    <button class="button add">add</button>
    `;

    parentNode.append(menu2AddPair)

    menu2AddPair.querySelector(".add").addEventListener("click", () => {

        if(menu2AddPair.querySelector(".mtb1").value != "" && menu2AddPair.querySelector(".mtb2").value != ""){
            dictionary.addListItem(menu2AddPair.querySelector(".mtb1").value, menu2AddPair.querySelector(".mtb2").value)
            printList(parentNode, dictionary)
        }
    })

    dictionary.list.forEach(element => {
        const menu2Pair = document.createElement("div")
        menu2Pair.classList = "menu2-pair"
        menu2Pair.innerHTML =
            `
        <button class="menu2-word button">${element[0]}</button>
        <button class="menu2-translation button">${element[1]}</button>
        <button class="button del">del</button>
        `;

        const wordBtn = menu2Pair.querySelector(".menu2-word");
        wordBtn.addEventListener("click", () => {

            wordBtn.classList.add("menu2-copy")
            setTimeout(() => {
                wordBtn.classList.remove("menu2-copy")
            }, 400)

            navigator.clipboard.writeText(wordBtn.textContent)
        })

        const translationBtn = menu2Pair.querySelector(".menu2-translation");
        translationBtn.addEventListener("click", () => {
            translationBtn.classList.add("menu2-copy")
            setTimeout(() => {
                translationBtn.classList.remove("menu2-copy")
            }, 400)

            navigator.clipboard.writeText(translationBtn.textContent)
        })

        const delBtn = menu2Pair.querySelector(".del");
        delBtn.addEventListener("click", () => {
            dictionary.list.splice(dictionary.list.indexOf(element), 1)
            printList(parentNode, dictionary)
        })

        parentNode.append(menu2Pair)
    });
}

function printTextArea(parentNode, pairList) {
    parentNode.value = ""
    pairList.forEach(element => {
        parentNode.value += element[0] + "\t" + element[1] + "\n"
    });
}