<template lang="html">
  <ImageResponsive
    :src-set="srcSet"
    :width="width"
    :height="height"
    :classes="classes"
    :alt="alt"
    class="mt-4 rounded-lg"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
  computed: {
    // sizes(): string {
    //   return [0.5, 1, 1.5, 2]
    //     .map((factor) => `sizes[]=${Number(this.width) * factor}`)
    //     .join('&')
    // },
    srcSet() {
      // TODO: support diferent sizes
      return {
        images: [
          {
            height: Number(this.height),
            width: Number(this.width),
            path: require(`~/assets/images/content/${this.src}`),
          },
        ],
      }
    },
  },
})
</script>
