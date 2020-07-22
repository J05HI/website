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

export default {
  mixins: [DarkModeFromAMPMixin],
}
</script>
