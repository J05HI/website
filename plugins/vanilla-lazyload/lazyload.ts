import throttle from 'lodash/throttle'
import VanillaLazyload from 'vanilla-lazyload'
import { loadIntersectionObserver } from '~/utils/intersection-observer'

export class Lazyload {
  private lazyLoadInstance: typeof VanillaLazyload | null = null

  private LazyLoad: typeof VanillaLazyload | null = null

  private isNativeSupported = false

  private throttledUpdate: () => void

  constructor() {
    this.isNativeSupported = 'loading' in HTMLImageElement.prototype

    this.throttledUpdate = throttle(this.updateLazyload, 150)
  }

  async init() {
    if (!this.isNativeSupported) {
      await this._initVanillaLazyload()
    }
  }

  private async _initVanillaLazyload() {
    await loadIntersectionObserver()

    this.LazyLoad = (
      await import(
        /* webpackChunkName: 'vanilla-lazyload' */ 'vanilla-lazyload'
      )
    ).default
  }

  update() {
    this.throttledUpdate()
  }

  private updateLazyload() {
    if (this.isNativeSupported) {
      this.updateNativeLazyload()
    } else {
      this.updateVanillaLazyload()
    }
  }

  private updateNativeLazyload() {
    const imagesSource = document.querySelectorAll<HTMLSourceElement>(
      'source.lazyload'
    )
    imagesSource.forEach((source) => {
      if (source.dataset.srcset && source.srcset !== source.dataset.srcset) {
        source.srcset = source.dataset.srcset
      }
    })

    const images = document.querySelectorAll<HTMLImageElement>(
      'img[loading="lazy"]'
    )
    images.forEach((img) => {
      if (img.dataset.src && img.src !== img.dataset.src) {
        img.src = img.dataset.src
      }

      if (img.dataset.srcset && img.srcset !== img.dataset.srcset) {
        img.srcset = img.dataset.srcset
      }

      img.classList.add('loaded')
    })
  }

  private updateVanillaLazyload() {
    if (this.lazyLoadInstance) {
      this.lazyLoadInstance.update()
    } else if (this.LazyLoad) {
      this.lazyLoadInstance = new this.LazyLoad({
        elements_selector: '.responsive-image .lazy',
      })
    }
  }
}
