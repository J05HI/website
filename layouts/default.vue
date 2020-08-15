<template>
  <div>
    <LazyTheNavbar />

    <main class="main-container">
      <Nuxt />
    </main>

    <LazyTheFooter class="mt-5" />
  </div>
</template>

<script>
import DarkModeFromAMPMixin from '@/components/mixins/DarkModeFromAMP'

import { LoadSentry } from '@/components/mixins/LoadSentry'

export default {
  mixins: [DarkModeFromAMPMixin, LoadSentry],
}
</script>
