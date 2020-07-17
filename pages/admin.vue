<template>
  <div id="nc-root">
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  isDev: boolean
}

export default Vue.extend<Data, {}, {}, {}>({
  layout: 'simple',
  amp: false,

  asyncData({ isDev }) {
    return { isDev }
  },

  async mounted() {
    // @ts-ignore
    await this.mountCMS()
  },

  methods: {
    async mountCMS() {
      if (!this.$isAMP) {
        if (process.client) {
          const netlifyCMS = await import(
            /* webpackChunkName: "netlify-cms" */ '~/utils/netlify-cms'
          )
          netlifyCMS.getCMS(this.$config, this.$i18n.locale, this.isDev)
        }
      }
    },
  },

  head() {
    return {
      title: 'Admin',
      meta: [
        {
          name: 'robots',
          content: 'noindex, nofollow',
        },
      ],
    }
  },
})
</script>

<style scoped>
.spinner {
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: #333;
  border-radius: 100%;
  display: inline-block;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  animation-delay: -0.16s;
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
