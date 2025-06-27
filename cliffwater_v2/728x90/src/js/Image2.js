const { gsap } = require("gsap")

class Image2 {
  constructor(src, target, complete, props = {}) {
    this.img = new Image()
    this.img.src = src.default

    this.img.onload = () => {
      this.img.width /= 2
      this.img.height /= 2

      gsap.set(this.img, props)

      target.appendChild(this.img)
      complete()
    }

    return this.img
  }
}

export default Image2
