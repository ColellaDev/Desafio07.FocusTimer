const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const buttonLightTheme = document.querySelector('.lighttheme')
const buttonDarkTheme = document.querySelector('.darktheme')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeshop')
const buttonFirePlace = document.querySelector('.fireplace')

const svgBgForest = document.querySelector('.forest svg path:nth-child(1)')
const svgIconForest = document.querySelector('.forest svg path:nth-child(2)')
const svgBgRain = document.querySelector('.rain svg path:nth-child(1)')
const svgIconRain = document.querySelector('.rain svg path:nth-child(2)')
const svgBgCoffeeShop = document.querySelector('.coffeeshop svg path:nth-child(1)')
const svgIconCoffeeShop = document.querySelector('.coffeeshop svg path:nth-child(2)')
const svgBgFirePlace = document.querySelector('.fireplace svg path:nth-child(1)')
const svgIconFirePlace = document.querySelector('.fireplace svg path:nth-child(2)')

const volumeForest = document.querySelector('#volume-forest')
const volumeRain = document.querySelector('#volume-rain')
const volumeCoffeeShop = document.querySelector('#volume-coffeeshop')
const volumeFirePlace = document.querySelector('#volume-fireplace')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let forestAudio = new Audio("./audio/forest.wav")
let coffeeshopAudio = new Audio("./audio/coffeeshop.wav")
let fireplaceAudio = new Audio("./audio/fireplace.wav")
let rainAudio = new Audio("./audio/rain.wav")

export {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonLightTheme,
    buttonDarkTheme,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFirePlace,
    svgBgForest,
    svgIconForest,
    svgBgRain,
    svgIconRain,
    svgBgCoffeeShop,
    svgIconCoffeeShop,
    svgBgFirePlace,
    svgIconFirePlace,
    volumeForest,
    volumeRain,
    volumeCoffeeShop,
    volumeFirePlace,
    minutesDisplay,
    secondsDisplay,
    forestAudio,
    coffeeshopAudio,
    fireplaceAudio,
    rainAudio 
}