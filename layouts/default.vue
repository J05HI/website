<template>
  <div>
    <TheNavbar />

    <main class="main-container">
      <Nuxt />
    </main>

    <TheFooter class="mt-5" />
  </div>
</template>

<script>
import DarkModeFromAMPMixin from '@/components/mixins/DarkModeFromAMP'

export default {
  mixins: [DarkModeFromAMPMixin],
}
</script>
