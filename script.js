const card = document.querySelector(".card") //Карточка
const menu = document.querySelector(".menu") //Окно меню

//Кнопки
const menuBtn = document.querySelector(".menuBtn")
const nextBtn = document.querySelector(".nextBtn")

let wList = new WList
if(menu.querySelector(".menu-textarea").value != '') {
    wList.createList(menu.querySelector(".menu-textarea").value)
    setPair(document.querySelector(".front-text"), document.querySelector(".back-text"), wList.currentPair)
}

//Конструктор списка пар
function WList() {
    this.list = [];
    this.currentPair;

    this.createList = function(text){
        let pairs = []
        let result = []
        pairs = text.split("\n")

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
        menu.querySelector(".menu-textarea").focus()
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
    if(wList.list == '' && menu.querySelector(".menu-textarea").value != '') {
        wList.createList(menu.querySelector(".menu-textarea").value)
        setPair(document.querySelector(".front-text"), document.querySelector(".back-text"), wList.currentPair)
    }else if(wList.list != '') {
        wList.randomCurrentPair()
        setPair(document.querySelector(".front-text"), document.querySelector(".back-text"), wList.currentPair)
    }
})