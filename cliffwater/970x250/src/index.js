const { Power1, Power3, gsap } = require("gsap")

// loaded assets that aren't used in the js
require("./main.scss")
require("./assets/images/preloader.gif")

const { default: Div } = require("./js/Div")
const { default: Image2 } = require("./js/Image2")

// images
const books = require("./assets/images/books.png")
const copy1 = require("./assets/images/copy1.png")
const copy2 = require("./assets/images/copy2.png")
const credit = require("./assets/images/credit.png")
const edition = require("./assets/images/edition.png")
const learn_more = require("./assets/images/learn_more.png")
const learn_more_white = require("./assets/images/learn_more_white.png")
const logo = require("./assets/images/logo.png")

const getElement = id => document.getElementById(id)

function init() {
  const content = getElement("cliffwater-content")
  const preloader = getElement("preloader")

  let imageLoads = 0
  function onImageLoad() {
    if (++imageLoads === 8) {
      preloader.parentNode.removeChild(preloader)

      gsap.set(copy2Container, { x: 260, y: 37, width: copy2Img.width, height: copy2Img.height })

      let delay = 0.25
      const ease = Power3.easeOut
      gsap.set(content, { visibility: "visible", alpha: 0 })

      gsap.to(content, { alpha: 1, ease, duration: delay })
      // // gsap.to(header, { x: "+=500", duration: 5 })
      gsap.from(copy1Img, { left: "100%", ease, duration: 1, delay })

      gsap.from(bookImg, { x: -bookImg.offsetWidth, ease, duration: 1, delay })
      gsap.from(logoImg, { x: "+=10", alpha: 0, ease, duration: 1, delay: delay + 0.2 })

      delay += 2
      gsap.to(copy1Img, { alpha: 0, ease, duration: 0.5, delay })
      delay += 0.5

      const items = [editionImg, copy2Img, creditImg, cta]
      items.forEach(el => {
        if (el === copy2Img) {
          gsap.from(copy2Img, { y: `-${copy2Img.height + 20}`, ease: Power1.easeOut, duration: 0.75, delay })
          gsap.from(el, { alpha: 0, ease, duration: 0.75, delay })
          delay += 0.25
        } else {
          gsap.from(el, { y: "-=10", ease: Power1.easeOut, duration: 0.25, delay })
          gsap.from(el, { alpha: 0, ease, duration: 0.25, delay })
          delay += 0.1
        }
      })
    }
  }

  const bookImg = new Image2(books, content, onImageLoad)
  const copy1Img = new Image2(copy1, content, onImageLoad, { x: 260, y: 60 })
  const editionImg = new Image2(edition, content, onImageLoad, { x: 260, y: 14 })

  const copy2Container = new Div(content, "copyContainer")

  const copy2Img = new Image2(copy2, copy2Container, onImageLoad)

  const creditImg = new Image2(credit, content, onImageLoad, { x: 260, y: 166 })
  const logoImg = new Image2(logo, content, onImageLoad, { x: 817, y: 210 })

  const cta = new Div(content, "cta", { x: 268, y: 203, width: 126, height: 34 })

  const learnMoreWhiteImg = new Image2(learn_more_white, cta, onImageLoad)
  learnMoreWhiteImg.classList = "ctaLight"
  const learnMoreImg = new Image2(learn_more, cta, onImageLoad)
  learnMoreImg.classList = "ctaDark"
}

module.exports = {
  init,
}
