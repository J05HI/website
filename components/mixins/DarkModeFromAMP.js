export default {
  mounted() {
    if ('amp-dark-mode' in this.$route.query) {
      this.$colorMode.preference = 'dark'

      this.$nextTick(() => {
        this.$router.replace(this.$route.fullPath.replace('amp-dark-mode', ''))
      })
    }
  },
}
