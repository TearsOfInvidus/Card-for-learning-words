const card = document.querySelector(".card") //Карточка
const frontText = document.querySelector(".front-text")
const backText = document.querySelector(".back-text")

const menu = document.querySelector(".menu") //Окно меню
const menuTextarea = document.querySelector(".menu-textarea")

//Кнопки
const menuBtn = document.querySelector(".menuBtn")
const nextBtn = document.querySelector(".nextBtn")

let wList = new WList
if(menuTextarea.value != '') {
    wList.createList(menuTextarea.value)
    setPair(frontText, backText, wList.currentPair)
}

//Конструктор списка пар
function WList() {
    this.list = [];
    this.currentPair;

    this.createList = function(text){
        let pairs = []
        let result = []
        pairs = text.trim().split("\n")

        for(let i = 0; i<pairs.length; i++) {
            result[i] = pairs[i].split("\t")
        }
        this.list = result
        this.currentPair = result[0]
    }

    this.randomCurrentPair = function() {
        this.currentPair = this.list[Math.floor(Math.random() * this.list.length)]
    }
}

//Установка пар на карточку
function setPair(front, back, pair) {
    front.innerText = pair[0]
    back.innerText = pair[1]
}

//Поворот карточки
card.addEventListener("click", () => {
    card.classList.toggle('flipped')
})

//Нажатие на кнопку menu
menuBtn.addEventListener("click", () => {

    if(menu.style.display == "none" || menu.style.display == "") {
        menu.style.display = "block"
        menuTextarea.focus()
        card.style.display = "none"
    }else if(card.style.display == "none") {
        menu.style.display = "none"
        card.style.display = "block"
    }else{
        console.log("Что-то не так (((")
    }
})

//Нажатие на кнопку next
nextBtn.addEventListener("click", () => {
    if(wList.list == '' && menuTextarea.value != '') {
        wList.createList(menuTextarea.value)
        setPair(frontText, backText, wList.currentPair)
    }else if(wList.list != '') {
        wList.randomCurrentPair()
        setPair(frontText, backText, wList.currentPair)
    }
})

//Создание списка при изменении текста
menuTextarea.addEventListener("change", () => {
    wList.createList(menuTextarea.value)
})