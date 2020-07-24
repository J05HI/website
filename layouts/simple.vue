<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import { LoadSentry } from '@/components/mixins/LoadSentry'

export default Vue.extend({
  mixins: [LoadSentry],
})
</script>
