import {
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
} from "./elements.js"
import { Colors } from "./colors.js"
import { Controls } from "./controls.js"

const colors = Colors({
    svgBgForest,
    svgIconForest,
    svgBgRain,
    svgIconRain,
    svgBgCoffeeShop,
    svgIconCoffeeShop,
    svgBgFirePlace,
    svgIconFirePlace,
    volumeForest,
    volumeFirePlace,
    volumeRain,
    volumeCoffeeShop,
})

const controls = Controls({
    secondsDisplay,
    minutesDisplay,
    rainAudio,
    fireplaceAudio,
    coffeeshopAudio,
    forestAudio
})


buttonLightTheme.addEventListener('click', function(){
    colors.trans()
    document.documentElement.setAttribute('data-theme', 'dark')
    buttonLightTheme.classList.add('hide')
    buttonDarkTheme.classList.remove('hide')
})

buttonDarkTheme.addEventListener('click', function(){
    colors.trans()
    document.documentElement.setAttribute('data-theme', 'light')
    buttonDarkTheme.classList.add('hide')
    buttonLightTheme.classList.remove('hide')
})

buttonPlay.addEventListener('click', function() {
    clearTimeout(controls.timerTimeout);
    controls.countdown()
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    controls.pauseMusic()
    colors.allPrimaryColor()
})

buttonPlus.addEventListener('click', function(){
    controls.plus()
})

buttonMinus.addEventListener('click', function(){
    controls.minus()
})

buttonForest.addEventListener(`click`, function(){
    forestAudio.volume = volumeForest.value
    controls.pauseMusic()
    forestAudio.play()
    forestAudio.loop = true

    colors.allPrimaryColor()
    colors.forestSecundaryColor()
})

buttonFirePlace.addEventListener(`click`, function(){
    fireplaceAudio.volume = volumeFirePlace.value
    controls.pauseMusic()
    fireplaceAudio.play()
    fireplaceAudio.loop = true

    colors.allPrimaryColor()
    colors.fireplaceSecundaryColor()
})

buttonCoffeeShop.addEventListener(`click`, function(){
    coffeeshopAudio.volume = volumeCoffeeShop.value
    controls.pauseMusic()
    coffeeshopAudio.play()
    coffeeshopAudio.loop = true

    colors.allPrimaryColor()
    colors.coffeshopSecundaryColor()
})

buttonRain.addEventListener(`click`, function(){
    rainAudio.volume = volumeRain.value
    controls.pauseMusic()
    rainAudio.play()
    rainAudio.loop = true

    colors.allPrimaryColor()
    colors.rainSecundaryColor()
})