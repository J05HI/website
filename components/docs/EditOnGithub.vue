<template>
  <div class="pt-4 pb-4 lg:px-8 flex border-b dark:border-gray-800">
    <a
      :href="link"
      target="_blank"
      rel="noopener"
      class="text-gray-600 dark:text-gray-400 text-sm font-medium hover:underline flex items-center"
    >
      {{ $t('docs.labels.github') }}
      <SvgIcon
        name="external-link"
        :fill="false"
        width="18"
        height="18"
        class="w-4 h-4 ml-1"
      />
    </a>
  </div>
</template>

<script>
import '~/components/icons/external-link'

export default {
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
  computed: {
    link() {
      const { locale } = this.$i18n
      const { project } = this.$route.params
      const langPrefix = locale !== 'en' ? `/docs/${locale}/` : '/docs/'

      return `https://github.com/juliomrqz/${project}/edit/develop${langPrefix}${this.document.slug}${this.document.extension}`
    },
  },
}
</script>
