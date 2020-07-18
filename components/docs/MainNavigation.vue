<template>
  <aside
    class="w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white dark:bg-gray-900 lg:bg-transparent"
    :class="{ block: menu, hidden: !menu }"
  >
    <div
      class="overflow-y-scroll lg:sticky lg:top-0 lg:pt-16 lg:-mt-16 h-full lg:h-auto"
    >
      <div class="p-4 pb-0 lg:ml-1 lg:pt-8 lg:pl-0 lg:pr-8">
        <div v-if="!$isAMP">
          <select
            :value="currentProject.id"
            class="block mt-1 form-select w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 lg:hidden sm:text-sm sm:leading-5"
            @input="changeProject"
          >
            <option
              v-for="project in projects"
              :key="`simple-select-${project.id}`"
              :value="project.id"
              >{{ project.title[$i18n.locale] }}</option
            >
          </select>

          <div
            v-click-outside="() => (isProjectSelectOpen = false)"
            class="hidden lg:relative lg:block"
          >
            <span class="inline-block w-full rounded-md shadow-sm">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                class="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-900 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                @click="isProjectSelectOpen = !isProjectSelectOpen"
              >
                <span class="block truncate">
                  {{ currentProject.title[$i18n.locale] }}
                </span>
                <span
                  class="text-gray-400 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                >
                  <SvgIcon
                    name="menu-open"
                    width="20"
                    height="20"
                    class="h-5 w-5"
                  />
                </span>
              </button>
            </span>

            <!-- Select popover, show/hide based on select state. -->
            <div
              v-show="isProjectSelectOpen"
              class="z-10 absolute mt-1 w-full rounded-md bg-white shadow-lg"
            >
              <ul
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-item-3"
                class="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
              >
                <li
                  v-for="project in projects"
                  :id="`advanced-select-${project.id}`"
                  :key="`advanced-select-${project.id}`"
                  :class="{
                    'text-white bg-gray-600': currentProject.id === project.id,
                    'text-gray-900 hover:text-white hover:bg-gray-500':
                      currentProject.id !== project.id,
                  }"
                  role="option"
                  class="cursor-default select-none relative py-2 pl-3 pr-9"
                  @click="gotToProject(project.id)"
                >
                  <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                  <span
                    :class="{
                      'font-semibold': currentProject.id === project.id,
                      'font-normal': currentProject.id !== project.id,
                    }"
                    class="block truncate"
                  >
                    {{ project.title[$i18n.locale] }}
                  </span>

                  <span
                    v-if="currentProject.id === project.id"
                    class="text-white absolute inset-y-0 right-0 flex items-center pr-4"
                  >
                    <SvgIcon name="checkmark" width="14" height="14" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="lg:relative">
            <span class="inline-block w-full rounded-md shadow-sm">
              <NuxtLink
                :to="
                  localePath({
                    name: 'docs',
                    params: { project: currentProject.id },
                  })
                "
                class="block cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-900 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                <span class="block truncate">
                  {{ currentProject.title[$i18n.locale] }}
                </span>
                <span
                  class="text-gray-400 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                >
                  <SvgIcon
                    name="menu-open"
                    width="20"
                    height="20"
                    class="h-5 w-5"
                  />
                </span>
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>

      <ul
        class="min-h-full p-4 lg:min-h-screen lg:ml-1 lg:pb-8 lg:pl-0 lg:pr-8"
      >
        <li class="mb-4 lg:hidden">
          <DocsSearchInput />
        </li>
        <li v-for="(docs, category) in categories" :key="category" class="mb-4">
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
                :to="getToTarget(doc.slug)"
                class="px-2 rounded font-medium py-1 block hover:text-gray-800 dark-hover:text-gray-100"
                exact-active-class="text-gray-800 bg-gray-200 font-semibold hover:text-gray-700 dark:text-white dark:bg-gray-800 dark-hover:text-white"
                active-class
                >{{ doc.title }}</NuxtLink
              >
            </li>
          </ul>
        </li>
        <li class="mb-4 lg:hidden">
          <h3
            class="mb-2 text-gray-500 dark:text-gray-600 uppercase tracking-wide font-bold text-sm lg:text-xs"
          >
            {{ $t('docs.labels.more') }}
          </h3>
          <ul class="flex items-center ml-2">
            <li class="mr-4">
              <a
                :href="githubLink"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                name="Github"
                class="hover:text-gray-500"
              >
                <SvgIcon name="github" width="24" height="24" class="w-6 h-6" />
              </a>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import vClickOutside from 'v-click-outside'

import '~/components/icons/menu-open'
import '~/components/icons/checkmark'

import { docsProjects } from '~/data/projects'
import { DocsProject } from '~/interfaces'

interface Data {
  projects: DocsProject[]
  isProjectSelectOpen: boolean
}

interface Computed {
  currentProject: DocsProject | undefined
  menu: boolean
  categories: { [key: string]: any }[]
  githubLink: string
  projectId: string
}

interface Methods {
  getToTarget: (slug: string) => string
  changeProject: (e: Event) => Promise<void>
  gotToProject: (project: string) => Promise<void>
  fetchCategories: () => Promise<void>
}

export default Vue.extend<Data, Methods, Computed, {}>({
  directives: {
    clickOutside: vClickOutside.directive,
  },

  async fetch() {
    await this.fetchCategories()
  },
  data: () => ({ projects: docsProjects, isProjectSelectOpen: false }),
  computed: {
    currentProject() {
      return docsProjects.find((p) => p.id === this.$route.params.project)
    },
    menu: {
      get() {
        // @ts-ignore
        return this.$store.state.menu.open
      },
      set(val: boolean) {
        // @ts-ignore
        this.$store.commit('menu/toggle', val)
      },
    },
    categories() {
      return this.$store.state.categories[
        `${this.$i18n.locale}-${this.currentProject?.id}`
      ]
    },
    githubLink() {
      return `https://github.com/juliomrqz/${this.currentProject?.id}`
    },
    projectId() {
      return this.$route.params.project
    },
  },

  watch: {
    async $route() {
      this.isProjectSelectOpen = false
      this.$store.commit('menu/toggle', false)

      await this.fetchCategories()
    },
  },

  async mounted() {
    await this.fetchCategories()
  },

  methods: {
    getToTarget(slug: string): string {
      const project = this.projectId

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

    async gotToProject(project: string): Promise<void> {
      await this.$router.push(
        this.localePath({
          name: 'docs-project-slug',
          params: {
            project,
          },
        })
      )
    },

    async changeProject(e: Event): Promise<void> {
      await this.gotToProject((e.target as any).value)
    },

    async fetchCategories() {
      const project = this.projectId

      // fetch categories
      if (process.server) {
        await this.$store.dispatch('fetchCategories', { project })
      }

      // Spa Fallback
      const index = `${this.$i18n.locale}-${project}`

      if (process.client && !this.$store.state.categories[index]) {
        this.$router &&
          this.$nextTick(async () => {
            await this.$store.dispatch('fetchCategories', { project })
          })
      }

      // Hot reload on development
      // @ts-ignore
      if (process.client && process.dev) {
        // @ts-ignore
        window.onNuxtReady(() => {
          window.$nuxt.$on('content:update', () =>
            this.$store.dispatch('fetchCategories', { project })
          )
        })
      }
    },
  },
})
</script>
