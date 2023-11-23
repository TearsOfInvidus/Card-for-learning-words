//Card
const card = document.querySelector(".card") 
const front = document.querySelector(".front")
const back = document.querySelector(".back")
const frontText = document.querySelector(".front-text")
const backText = document.querySelector(".back-text")

const frontMenu = document.querySelector(".front-menu")
const backMenu = document.querySelector(".back-menu")
const list1 = document.getElementById("list1")
const list2 = document.getElementById("list2")

//Menu
const menu = document.querySelector(".menu")
const menu2 = document.querySelectorAll(".m2-container")
const menuTextarea1 = document.getElementById("list1")
const menuTextarea2 = document.getElementById("list2")
const frontMenu2 = document.querySelector(".front-menu2")
const backMenu2 = document.querySelector(".back-menu2")

//Buttons
const menuBtn = document.querySelector(".menuBtn")
const nextBtn = document.querySelector(".nextBtn")
const altMenuBtn = document.querySelector(".altMenuBtn")

//isFront
let isFront = true
let isMenuOpened = false
let menuType = 0

//isRotating
let isRotating = false