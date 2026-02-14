import Splide from "@splidejs/splide"
import { Controller } from "@hotwired/stimulus"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"

export default class SplideController extends Controller {
  static values = {
    perPage: { type: Number, default: 3 },
    perPage1920: Number,
    perPage1200: Number,
  }

  connect() {
    this.splide = new Splide(this.element, {
      type: "loop",
      focus: "center",
      perPage: this.perPageValue,
      breakpoints: {
        2100: { perPage: 2 },
        1920: { perPage: this.perPage1920Value },
        1200: { perPage: this.perPage1200Value},
        900: { perPage: 1 }
      },
      autoScroll: { speed: 1 },
    })

    this.splide.mount({ AutoScroll })
  }

  disconnect() {
    if (this.splide) {
      this.splide.destroy()
    }
  }
}
