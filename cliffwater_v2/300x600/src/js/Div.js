const { gsap } = require("gsap")

class Div {
  constructor(target, classList, props = {}) {
    this.div = document.createElement("div")
    this.div.classList = classList

    target.appendChild(this.div)

    gsap.set(this.div, props)

    return this.div
  }
}

export default Div
