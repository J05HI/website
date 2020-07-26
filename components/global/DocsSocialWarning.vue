<template>
  <DocsAlert class="warning custom-block">
    <span class="font-bold">
      {{ title[$i18n.locale] }}
    </span>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="message[$i18n.locale]" />
  </DocsAlert>
</template>

<script>
export default {
  data() {
    return {
      title: {
        en: 'Warning',
        es: 'Advertencia',
      },
      message: {
        en:
          'This product is <i>being rebuilt from scratch</i>. Follow me on <a target="_blank" href="https://twitter.com/juliomrqz" rel="noopener noreferrer">Twitter</a> so you can be up-to-date with the new version release date.',
        es:
          'Este producto está <i>siendo reconstruido desde cero</i>. Sígueme en <a target="_blank" href="https://twitter.com/juliomrqz" rel="noopener noreferrer">Twitter</a> para que puedas estar actualizado con la fecha de lanzamiento de la nueva versión.',
      },
    }
  },
}
</script>
