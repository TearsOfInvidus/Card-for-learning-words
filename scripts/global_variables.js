//Card
const card = document.querySelector(".card") 
const frontTextContainer = document.querySelector(".front-text-container")
const backTextContainer = document.querySelector(".back-text-container")
const frontText = document.querySelector(".front-text")
const backText = document.querySelector(".back-text")

//Menu
const frontMenuContainer = document.querySelector(".front-menu-container")
const backMenuContainer = document.querySelector(".back-menu-container")
const menu = document.querySelector(".menu")
//Main menu
const frontMenuMain = document.getElementById("front-menu-textarea")
const backMenuMain = document.getElementById("back-menu-textarea")
//Alt menu
const menuAltContainer = document.querySelectorAll(".menu-alt-container")
const frontMenuAlt = document.querySelector(".front-menu-alt")
const backMenuAlt = document.querySelector(".back-menu-alt")
const menuAltList = document.querySelectorAll(".menu-alt-list")

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