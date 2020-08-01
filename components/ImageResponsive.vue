<template>
  <Component
    :is="$isAMP ? 'div' : 'picture'"
    :class="{
      'rounded-full': rounded,
    }"
    class="overflow-hidden leading-none responsive-image block"
  >
    <source
      v-if="!$isAMP && sourceSetWebp"
      type="image/webp"
      :data-srcset="sourceSetWebp"
    />

    <source
      v-if="!$isAMP && srcSvg"
      type="image/svg+xml"
      :data-srcset="srcSvg"
    />

    <Component
      :is="$isAMP ? 'amp-img' : 'img'"
      v-bind="imageProperties"
      class="transition-all ease-in duration-200"
    />
  </Component>
</template>

<script lang="ts">
import Vue from 'vue'

type ResponsiveImage = {
  height: number
  width: number
  srcSet: string
  images: { height: number; width: number; path: string }[]
  src: string
}

interface Computed {
  source: string
  sourceSet: string
  sourceSetWebp?: string
  placeholder: string
  imageProperties: { [key: string]: any }
}

interface Props {
  srcSet: ResponsiveImage
  srcSetWebp?: ResponsiveImage
  srcSvg?: string
  alt: string
  width: string | number
  height: string | number
  classes: string
  fluid: boolean
  rounded: boolean
  placeholderColor: string
  ampLayout: string
}

function generateSrcSet(src: ResponsiveImage, width: string | number) {
  const defaultSrcSetParts = src.images.map((image) => {
    const size = (image.width / parseInt(`${width}`, 10)).toString(10)

    if (size !== '0.5') {
      return `${image.path} ${size}x`
    }
  })

  return defaultSrcSetParts.filter(Boolean).join(',')
}

export default Vue.extend<{}, {}, Computed, Props>({
  props: {
    srcSet: {
      type: Object,
      required: true,
    },
    srcSetWebp: {
      type: Object,
      required: false,
      default: () => undefined,
    },
    srcSvg: {
      type: String,
      default: undefined,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      required: true,
    },
    height: {
      type: [String, Number],
      required: true,
    },
    classes: {
      type: String,
      default: '',
    },
    fluid: {
      type: Boolean,
      default: true,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    placeholderColor: {
      type: String,
      default: null,
    },
    ampLayout: {
      type: String,
      default: 'intrinsic',
    },
  },
  computed: {
    sourceSet() {
      return generateSrcSet(this.srcSet, this.width)
    },
    sourceSetWebp() {
      if (this.srcSetWebp) {
        return generateSrcSet(this.srcSetWebp, this.width)
      } else {
        return undefined
      }
    },
    source() {
      return this.sourceSet.split(',')[0].split(' ')[0]
    },
    placeholder() {
      const width = Number(this.width) * 2
      const height = Number(this.height) * 2
      const placeholderColor = this.placeholderColor || this.$config.mainColor

      const image =
        `<svg width="${width}" height="${height}" ` +
        'xmlns="http://www.w3.org/2000/svg" ' +
        `viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">` +
        `<rect width="100%" height="100%" style="fill:${placeholderColor.toLowerCase()};"></rect>` +
        '</svg>'

      return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(image)}`
    },
    imageProperties() {
      let properties: { [key: string]: any } = {
        width: `${this.width}`,
        height: `${this.height}`,
        class: {
          'w-full h-auto': this.fluid,
          'rounded-full': this.rounded,
          // @ts-ignore
          [this.classes]: true,
        },
        // srcSet: this.sourceSet,
        alt: this.alt,
      }

      if (this.$isAMP) {
        properties.src = this.source
        properties.layout = this.ampLayout
        properties.srcset = this.sourceSet
      } else {
        properties = {
          ...properties,
          // @ts-ignore
          src: this.placeholder,
          'data-src': this.source,
          // @ts-ignore
          'data-srcset': this.sourceSet,
          class: {
            ...properties.class,
            lazy: true,
          },
          // loading: 'lazy'
        }
      }

      return properties
    },
  },
})
</script>

<style>
/* purgecss start ignore */
.responsive-image {
  img {
    &.lazy:not(.loaded) {
      @apply filter-blur;
    }
  }
}
/* purgecss end ignore */
</style>
