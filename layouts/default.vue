<template>
  <div>
    <LazyHydrate when-idle>
      <TheNavbar />
    </LazyHydrate>

    <main class="main-container">
      <Nuxt />
    </main>

    <LazyHydrate when-visible>
      <TheFooter class="mt-5" />
    </LazyHydrate>
  </div>
</template>

<script>
import DarkModeFromAMPMixin from '@/components/mixins/DarkModeFromAMP'

import { LoadSentry } from '@/components/mixins/LoadSentry'

export default {
  mixins: [DarkModeFromAMPMixin, LoadSentry],
}
</script>
