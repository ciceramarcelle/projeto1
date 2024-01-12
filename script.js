function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
  }
}

//pegar tag img
//se tiver ligt mode, add opçao light
//se tiver dark, add outra opçao
//substituit a img
