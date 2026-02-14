import Splide from "@splidejs/splide"
import { Controller } from "@hotwired/stimulus"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"

export default class SplideController extends Controller {
  connect() {
    console.log("SplideController connected")
    this.splide = new Splide(this.element, {
      type: "loop",
      focus: "center",
      perPage: 3,
      // breakpoints: {
      //   1920: { perPage: 3 },
      //   1400: { perPage: 2 },
      //   780: { perPage: 1 },
      // },
      autoScroll: { speed: 1 },
    })

    this.splide.mount({ AutoScroll })
  }

  disconnect() {
    if (this.splide) {
      this.splide.destroy();
    }
  }
}
