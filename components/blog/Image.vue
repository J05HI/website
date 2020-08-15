<template functional>
  <ImageResponsive
    :src-set="$options.getSrcSet(props)"
    :width="props.width"
    :height="props.height"
    :classes="props.classes"
    :alt="props.alt"
    class="mt-4 rounded-lg"
  />
</template>

<script lang="ts">
import Vue from 'vue'

interface Props {
  src: string
  alt: string
  width: string | number
  height: string | number
  classes: string
}

export default Vue.extend<Props>({
  functional: true,
  props: {
    src: {
      type: String,
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
  },
  // @ts-ignore
  getSrcSet(props: Props) {
    // TODO: support diferent sizes
    return {
      images: [
        {
          height: Number(props.height),
          width: Number(props.width),
          path: require(`~/assets/images/content/${props.src}`),
        },
      ],
    }
  },
})
</script>
