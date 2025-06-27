const { Power1, Power3, gsap } = require("gsap")

// loaded assets that aren't used in the js
require("./main.scss")
require("./assets/images/preloader.gif")

const { default: Div } = require("./js/Div")
const { default: Image2 } = require("./js/Image2")

// images
const copy1 = require("./assets/images/copy1.png")
const copy2 = require("./assets/images/copy2.png")
const copy3 = require("./assets/images/copy3.png")
const slogan = require("./assets/images/slogan.png")
const learn_more = require("./assets/images/learn_more.png")
const learn_more_white = require("./assets/images/learn_more_white.png")
const logo = require("./assets/images/logo.png")
const asOfDate = require("./assets/images/as_of_date.png")
const endframe = require("./assets/images/endframe.jpg")

const getElement = id => document.getElementById(id)

function init() {
  const content = getElement("cliffwater-content")
  const preloader = getElement("preloader")

  let imageLoads = 0
  function onImageLoad() {
    if (++imageLoads === 7) {
      cta.parentNode.appendChild(cta)
      preloader.parentNode.removeChild(preloader)

      let delay = 0.25
      const ease = Power3.easeOut
      gsap.set(content, { visibility: "visible", alpha: 0 })

      gsap.set(asOfDateImg, { x: 25, y: 218, zIndex: 1 })
      gsap.set(copy1Img, { x: 185, y: 85, zIndex: 3 })
      gsap.set(copy2Img, { x: 135, y: 85, zIndex: 4 })
      gsap.set(endframeContainer, { zIndex: 5 })
      gsap.set(endframeImg, { width: 970, height: 250, zIndex: 1 })
      gsap.set(copy3Img, { x: 49, y: 57, zIndex: 2 })
      gsap.set(sloganImg, { x: 53, y: 108, zIndex: 3 })
      gsap.set(cta, { x: 56, y: 158, width: 133, height: 35, zIndex: 4 })
      gsap.set(logoImg, { x: 686, y: 196, zIndex: 20 })
      // gsap.set(logoImg2, { x: 686, y: 196, scale: 1, transformOrigin: "0% 0%", zIndex: 5 })

      gsap.to(content, { alpha: 1, ease, duration: delay })

      const copyImages = [copy1Img, copy2Img]
      copyImages.forEach(el => {
        gsap.from(el, { left: "100%", ease, duration: 1, delay })

        delay += 2
        gsap.to(el, { alpha: 0, ease, duration: 0.5, delay })
        delay += 0.5
      })

      gsap.from(endframeImg, { alpha: 0, ease, duration: 1, delay })
      // gsap.from(logoImg2, { alpha: 0, ease, duration: 1, delay })
      // delay += 0.5

      // gsap.to(logoImg, {
      //   x: 686,
      //   y: 196,
      //   scale: 1,
      //   transformOrigin: "0% 0%",
      //   ease: Power1.easeOut,
      //   duration: 1,
      //   delay,
      // })

      const items = [copy3Img, sloganImg]
      items.forEach(el => {
        gsap.from(el, { left: "100%", ease, duration: 1, delay })
        delay += 0.25
      })

      gsap.from(cta, { alpha: 0, ease, duration: 1, delay })
    }
  }

  // intro frames
  const asOfDateImg = new Image2(asOfDate, content, onImageLoad)

  const copy1Img = new Image2(copy1, content, onImageLoad)

  const copy2Img = new Image2(copy2, content, onImageLoad)

  // end frames
  const endframeContainer = new Div(content, "endframeContainer", { width: 970, height: 250 })
  const endframeImg = new Image2(endframe, endframeContainer, onImageLoad)

  const copy3Img = new Image2(copy3, endframeContainer, onImageLoad)
  const sloganImg = new Image2(slogan, endframeContainer, onImageLoad)

  const cta = new Div(endframeContainer, "cta")
  // const logoImg2 = new Image2(logo, endframeContainer, onImageLoad)

  // common
  const logoImg = new Image2(logo, content, onImageLoad)

  const learnMoreWhiteImg = new Image2(learn_more_white, cta, onImageLoad)
  learnMoreWhiteImg.classList = "ctaLight"
  const learnMoreImg = new Image2(learn_more, cta, onImageLoad)
  learnMoreImg.classList = "ctaDark"
}

module.exports = {
  init,
}
