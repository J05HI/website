<template>
  <div
    :class="{
      'rounded-full': rounded,
    }"
    class="overflow-hidden leading-none inline-block responsive-image"
  >
    <Component
      :is="$isAMP ? 'amp-img' : 'img'"
      v-bind="imageProperties"
      class="transition-all ease-in duration-200"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Computed {
  srcset: string
  placeholder: string
  imageProperties: { [key: string]: any }
}

interface Props {
  source: string
  alt: string
  width: string | number
  height: string | number
  classes: string
  fluid: boolean
  rounded: boolean
  placeholderColor: string
  ampLayout: string
}

export default Vue.extend<{}, {}, Computed, Props>({
  props: {
    source: {
      type: [String, Object],
      required: true,
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
    srcset() {
      if (typeof this.source === 'object') {
        // @ts-ignore
        return this.source.srcSet
      } else {
        return undefined
      }
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
      const placeholderColor = this.placeholderColor || this.$config.mainColor
      let properties: { [key: string]: any } = {
        width: `${this.width}`,
        height: `${this.height}`,
        class: {
          'max-w-full h-auto': this.fluid,
          'rounded-full': this.rounded,
          // @ts-ignore
          [this.classes]: true,
        },
        alt: this.alt,
      }

      if (this.$isAMP) {
        properties.src = this.source
        properties.layout = this.ampLayout
      } else {
        properties = {
          ...properties,
          // @ts-ignore
          src: placeholderColor,
          'data-src': this.source,
          // @ts-ignore
          'data-loading': placeholderColor,
          // @ts-ignore
          'data-srcset': this.srcset,
          class: {
            ...properties.class,
            lazy: true,
          },
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
