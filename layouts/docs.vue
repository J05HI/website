<template>
  <div class="pt-16">
    <Navbar />
    <main class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-wrap relative">
        <aside
          class="w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white dark:bg-gray-900 lg:bg-transparent"
          :class="{ block: menu, hidden: !menu }"
        >
          <div
            class="lg:sticky lg:top-0 lg:pt-16 lg:-mt-16 overflow-y-scroll h-full lg:h-auto"
          >
            <ul class="p-4 lg:py-8 lg:pl-0 lg:pr-8">
              <li class="mb-4 lg:hidden">
                <SearchInput />
              </li>
              <li
                v-for="(docs, category) in categories"
                :key="category"
                class="mb-4"
              >
                <h3
                  class="mb-2 text-gray-500 dark:text-gray-600 uppercase tracking-wide font-bold text-sm lg:text-xs"
                >
                  {{ category }}
                </h3>
                <ul>
                  <li
                    v-for="doc of docs"
                    :key="doc.slug"
                    class="text-gray-600 dark:text-gray-500"
                  >
                    <NuxtLink
                      :to="toLink(doc.slug)"
                      class="px-2 rounded font-medium py-1 block hover:text-gray-800 dark-hover:text-gray-100"
                      exact-active-class="text-green-600 bg-green-100 hover:text-green-600 dark:text-white dark:bg-green-800 dark-hover:text-white"
                      >{{ doc.title }}</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li class="mb-4 lg:hidden">
                <h3
                  class="mb-2 text-gray-500 dark:text-gray-600 uppercase tracking-wide font-bold text-sm lg:text-xs"
                >
                  More
                </h3>
                <ul class="flex items-center ml-2">
                  <li class="mr-4">
                    <a
                      href="https://twitter.com/juliomrqz"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                      name="Twitter"
                      class="hover:text-green-500"
                    >
                      <SvgIcon
                        name="twitter"
                        width="24"
                        height="24"
                        class="w-6 h-6"
                      />
                    </a>
                  </li>
                  <li class="mr-4">
                    <a
                      :href="githubLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Github"
                      name="Github"
                      class="hover:text-green-500"
                    >
                      <SvgIcon
                        name="github"
                        width="24"
                        height="24"
                        class="w-6 h-6"
                      />
                    </a>
                  </li>
                  <li class="mr-4">
                    <DocsLangSwitcher />
                  </li>
                  <li>
                    <DocsColorSwitcher />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>

        <Nuxt class="w-full lg:w-4/5" />
      </div>
    </main>

    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Navbar from '@/components/docs/Navbar.vue'
import TheFooter from '@/components/docs/TheFooter.vue'
import SearchInput from '@/components/docs/SearchInput.vue'
import DarkModeFromAMPMixin from '@/components/mixins/DarkModeFromAMP'

import '~/components/icons/github'
import '~/components/icons/twitter'

export default Vue.extend({
  components: {
    Navbar,
    TheFooter,
    SearchInput,
  },
  mixins: [DarkModeFromAMPMixin],
  computed: {
    bodyClass() {
      return this.$store.state.menu.open
        ? ['h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto']
        : []
    },
    menu: {
      get() {
        return this.$store.state.menu.open
      },
      set(val) {
        this.$store.commit('menu/toggle', val)
      },
    },
    categories() {
      const { project } = this.$route.params
      return this.$store.state.categories[`${this.$i18n.locale}-${project}`]
    },
    githubLink() {
      const { project } = this.$route.params
      return `https://github.com/juliomrqz/${project}`
    },
  },
  methods: {
    toLink(slug: string) {
      const { project } = this.$route.params

      if (slug === 'index' || slug.toLowerCase() === 'readme') {
        return this.localePath({
          name: 'docs-project-slug',
          params: { project },
        })
      }

      return this.localePath({
        name: 'docs-project-slug',
        params: { slug, project },
      })
    },
  },
  head() {
    // const i18nSeo = this.$nuxtI18nSeo()

    return {
      bodyAttrs: {
        class: [
          // @ts-ignore
          ...this.bodyClass,
          'antialiased text-gray-800 leading-normal bg-white dark:bg-gray-900 dark:text-gray-100',
        ],
      },
      // ...i18nSeo,
    }
  },
})
</script>
