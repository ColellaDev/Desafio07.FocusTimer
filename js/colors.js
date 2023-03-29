export function Colors({
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
}) {

  function allPrimaryColor() {
    svgBgForest.style.fill = "var(--bt-bg-color)";
    svgIconForest.style.fill = "var(--bt-txt-color";
    svgBgRain.style.fill = "var(--bt-bg-color)";
    svgIconRain.style.fill = "var(--bt-txt-color";
    svgBgCoffeeShop.style.fill = "var(--bt-bg-color)";
    svgIconCoffeeShop.style.fill = "var(--bt-txt-color";
    svgBgFirePlace.style.fill = "var(--bt-bg-color)";
    svgIconFirePlace.style.fill = "var(--bt-txt-color";
    volumeForest.style.background = "var(--bt-txt-color)";
    volumeFirePlace.style.background = "var(--bt-txt-color)";
    volumeRain.style.background = "var(--bt-txt-color)";
    volumeCoffeeShop.style.background = "var(--bt-txt-color)";
  }

  function forestSecundaryColor() {
    svgBgForest.style.fill = "var(--bt-bg-color-hover)";
    svgIconForest.style.fill = "var(--bt-txt-color-hover)";
    volumeForest.style.background = "var(--bt-txt-color-hover)";
  }

  function fireplaceSecundaryColor() {
    svgBgFirePlace.style.fill = "var(--bt-bg-color-hover)";
    svgIconFirePlace.style.fill = "var(--bt-txt-color-hover)";
    volumeFirePlace.style.background = "var(--bt-txt-color-hover)";
  }

  function coffeshopSecundaryColor() {
    svgBgCoffeeShop.style.fill = "var(--bt-bg-color-hover)";
    svgIconCoffeeShop.style.fill = "var(--bt-txt-color-hover)";
    volumeCoffeeShop.style.background = "var(--bt-txt-color-hover)";
  }

  function rainSecundaryColor() {
    svgBgRain.style.fill = "var(--bt-bg-color-hover)";
    svgIconRain.style.fill = "var(--bt-txt-color-hover)";
    volumeRain.style.background = "var(--bt-txt-color-hover)";
  }

  let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    },100)
}

  return {
    allPrimaryColor,
    forestSecundaryColor,
    fireplaceSecundaryColor,
    coffeshopSecundaryColor,
    rainSecundaryColor,
    trans
  };
}
