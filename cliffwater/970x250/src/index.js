const { Power1, Power3, gsap } = require("gsap")

require("./main.scss")
require("./assets/images/books.png")
require("./assets/images/preloader.gif")
require("./assets/images/logo.svg")

const getElement = id => document.getElementById(id)

function init() {
  console.log(
    `%c duncan hills coffee`,
    `color: black; Quadground-color: lime; font-style: italic; padding: 0px; margin-left: 0px;`
  )
  console.log()

  const content = getElement("cliffwater-content")
  const preloader = getElement("preloader")

  const logo = getElement("logo")
  const copy1 = getElement("copy1")
  const copy2 = getElement("copy2")
  const book = getElement("book")

  const cta = getElement("cta")
  const edition = getElement("edition")
  const credit = getElement("credit")

  preloader.parentNode.removeChild(preloader)

  gsap.set(content, { visibility: "visible", alpha: 0 })

  let delay = 0.25
  const ease = Power3.easeOut
  gsap.to(content, { alpha: 1, ease, duration: delay })
  // gsap.to(header, { x: "+=500", duration: 5 })
  gsap.from(copy1, { left: "100%", ease, duration: 1, delay })
  gsap.from(book, { x: -book.offsetWidth, ease, duration: 1, delay })
  gsap.from(logo, { x: "+=10", alpha: 0, ease, duration: 1, delay: delay + 0.2 })

  delay += 2
  gsap.to(copy1, { alpha: 0, ease, duration: 0.5, delay })
  delay += 0.5
  gsap.from(copy2, { left: "100%", ease, duration: 1, delay })
  delay += 1

  const items = [edition, credit, cta]
  items.forEach(el => {
    gsap.from(el, { x: "+=20", ease: Power1.easeOut, duration: 0.5, delay })
    gsap.from(el, { alpha: 0, ease, duration: 0.5, delay })
    delay += 0.1
  })
}

module.exports = {
  init,
}
