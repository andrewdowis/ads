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
const copy3 = require("./assets/images/copy3.png")
const credit = require("./assets/images/credit.png")
// const edition = require("./assets/images/edition.png")
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
      cta.parentNode.appendChild(cta)
      preloader.parentNode.removeChild(preloader)

      // gsap.set(copy3Container, { x: 24, y: 92, width: copy3Img.width, height: copy3Img.height })

      let delay = 0.25
      const ease = Power3.easeInOut
      gsap.set(content, { visibility: "visible", alpha: 0 })

      gsap.to(content, { alpha: 1, ease, duration: delay })
      gsap.from(cta, { alpha: 0, ease, duration: delay * 2 })
      // // gsap.to(header, { x: "+=500", duration: 5 })
      gsap.from(copy1Img, { left: "100%", ease, duration: 1, delay })

      gsap.from(bookImg, { x: -bookImg.offsetWidth, ease, duration: 1, delay })
      gsap.from(logoImg, { alpha: 0, ease, duration: 1, delay: delay + 0.2 })

      delay += 2.5
      gsap.to(copy1Img, { alpha: 0, ease, duration: 0.5, delay })

      delay += 0.5

      gsap.from(copy2Img, { left: "100%", ease, duration: 1, delay })
      delay += 2.5
      gsap.to(copy2Img, { alpha: 0, ease, duration: 0.5, delay })
      delay += 0.5

      gsap.from(copy3Img, { left: "100%", ease: Power1.easeOut, duration: 0.75, delay })
      gsap.from(copy3Img, { alpha: 0, ease, duration: 0.75, delay })
      delay += 0.7

      gsap.from(creditImg, { y: "-=10", ease: Power1.easeOut, duration: 0.5, delay })
      gsap.from(creditImg, { alpha: 0, ease, duration: 0.25, delay })
    }
  }

  const bookImg = new Image2(books, content, onImageLoad, { bottom: "0%" })
  const copy1Img = new Image2(copy1, content, onImageLoad, { x: 25, y: 82 })
  const copy2Img = new Image2(copy2, content, onImageLoad, { x: 25, y: 82 })
  // const editionImg = new Image2(edition, content, onImageLoad, { x: 24, y: 82 })

  // const copy3Container = new Div(content, "copyContainer")

  const copy3Img = new Image2(copy3, content, onImageLoad, { x: 25, y: 55 })
  const creditImg = new Image2(credit, content, onImageLoad, { x: 25, y: 292 })
  const logoImg = new Image2(logo, content, onImageLoad, { x: 25, y: 15 })

  const cta = new Div(content, "cta", { x: 25, y: 354, width: 141, height: 31 })

  const learnMoreWhiteImg = new Image2(learn_more_white, cta, onImageLoad)
  learnMoreWhiteImg.classList = "ctaLight"
  const learnMoreImg = new Image2(learn_more, cta, onImageLoad)
  learnMoreImg.classList = "ctaDark"
}

module.exports = {
  init,
}
