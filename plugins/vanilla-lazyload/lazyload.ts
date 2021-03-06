import throttle from 'lodash/throttle'
import { ILazyLoad, ILazyLoadInstance } from 'vanilla-lazyload'
import { loadIntersectionObserver } from '~/utils/intersection-observer'

export class Lazyload {
  private lazyLoadInstance: ILazyLoadInstance | null = null

  private LazyLoad: ILazyLoad | null = null

  private isNativeSupported = false

  private throttledUpdate: () => void

  constructor(isDev: boolean) {
    this.isNativeSupported = 'loading' in HTMLImageElement.prototype

    this.throttledUpdate = throttle(this.updateLazyload, isDev ? 150 : 50)
  }

  async init() {
    if (!this.isNativeSupported) {
      await this._initVanillaLazyload()
    }
  }

  private async _initVanillaLazyload() {
    await loadIntersectionObserver()

    const { default: LazyLoad } = await import(
      /* webpackChunkName: 'vanilla-lazyload' */ 'vanilla-lazyload'
    )

    this.LazyLoad = LazyLoad
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
