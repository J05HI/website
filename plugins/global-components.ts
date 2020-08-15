import Vue from 'vue'
// @ts-ignore
import BlogImage from '~/components/blog/Image.vue'
import { loadIntersectionObserver } from '~/utils/intersection-observer'

// TODO: https://github.com/nuxt/content/issues/22
Vue.component('BlogImage', BlogImage)

export default async () => {
  await loadIntersectionObserver()
}
