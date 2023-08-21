const { Back, gsap } = require("gsap")

require("./main.scss")
require("./assets/images/test_puppy.png")
require("./assets/images/preloader.gif")

const getElement = id => document.getElementById(id)

function init() {
  console.log(
    `%c duncan hills coffee`,
    `color: black; background-color: lime; font-style: italic; padding: 0px; margin-left: 0px;`
  )
  console.log()

  const content = getElement("cliffwater-content")
  const preloader = getElement("preloader")
  const header = getElement("header-copy")
  const body = getElement("body-copy")
  const img = getElement("puppy")

  preloader.parentNode.removeChild(preloader)

  gsap.set(content, { visibility: "visible" })
  // gsap.to(header, { x: "+=500", duration: 5 })
  gsap.from(body, { opacity: 0, duration: 2, delay: 3 })
  gsap.from(img, { scale: 0, ease: Back.easeOut, duration: 1 })
}

module.exports = {
  init,
}
