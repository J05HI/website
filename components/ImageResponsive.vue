<template functional>
  <Component
    :is="parent.$isAMP ? 'div' : 'picture'"
    :class="{
      'rounded-full': props.rounded,
      [data.staticClass]: !!data.staticClass,
    }"
    class="overflow-hidden leading-none responsive-image block"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <source
      v-if="!parent.$isAMP && props.srcSetWebp"
      type="image/webp"
      :data-srcset="$options.getSourceSetWebp(props)"
      class="lazyload"
    />

    <source
      v-if="!parent.$isAMP && props.srcSvg"
      type="image/svg+xml"
      :data-srcset="props.srcSvg"
      class="lazyload"
    />

    <Component
      :is="parent.$isAMP ? 'amp-img' : 'img'"
      v-bind="$options.getImageProperties(props, parent)"
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

function generatePlaceholder(props: Props, parent: any) {
  const width = Number(props.width) * 2
  const height = Number(props.height) * 2
  const placeholderColor = props.placeholderColor || parent.$config.mainColor

  const image =
    `<svg width="${width}" height="${height}" ` +
    'xmlns="http://www.w3.org/2000/svg" ' +
    `viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">` +
    `<rect width="100%" height="100%" style="fill:${placeholderColor.toLowerCase()};"></rect>` +
    '</svg>'

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(image)}`
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

export default Vue.extend<Props>({
  functional: true,
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
  /** Options */
  // @ts-ignore
  getSourceSetWebp(props: Props) {
    if (props.srcSetWebp) {
      return generateSrcSet(props.srcSetWebp, props.width)
    } else {
      return undefined
    }
  },
  getImageProperties(props: Props, parent: any) {
    const sourceSet = generateSrcSet(props.srcSet, props.width)
    const source = sourceSet.split(',')[0].split(' ')[0]
    const placeholder = generatePlaceholder(props, parent)

    let properties: { [key: string]: any } = {
      width: props.width,
      height: props.height,
      class: {
        'w-full h-auto': props.fluid,
        'rounded-full': props.rounded,
        [props.classes]: true,
      },
      // srcSet: sourceSet,
      alt: props.alt,
    }

    if (parent.$isAMP) {
      properties.src = source
      properties.layout = props.ampLayout
      properties.srcset = sourceSet
    } else {
      properties = {
        ...properties,
        src: placeholder,
        'data-src': source,
        'data-srcset': sourceSet,
        class: {
          ...properties.class,
          lazy: true,
        },
        loading: 'lazy',
      }
    }

    return properties
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
