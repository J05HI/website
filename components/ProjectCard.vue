<template functional>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <Component
        :is="props.variant === 'simple' ? 'a' : 'NuxtLink'"
        :href="props.variant === 'simple' ? props.project.url : undefined"
        :target="props.variant === 'simple' ? '_blank' : undefined"
        :rel="props.variant === 'simple' ? 'noopener noreferrer' : undefined"
        :to="
          props.variant === 'docs'
            ? parent.localePath({
                name: 'docs-project-slug',
                params: { project: props.project.id },
              })
            : undefined
        "
      >
        <ImageResponsive
          :src-set="
            require(`~/assets/images/projects/${props.project.id}.png?resize&sizes[]=420&sizes[]=840`)
          "
          :src-set-webp="
            require(`~/assets/images/projects/${props.project.id}.png?resize&sizes[]=420&sizes[]=840&format=webp`)
          "
          :src-svg="
            props.project.category === 'open-source'
              ? require(`~/assets/images/projects/${props.project.id}.svg`)
              : undefined
          "
          :width="420"
          :height="221"
          :alt="props.project.title[parent.$i18n.locale]"
          classes="h-48 w-full object-cover"
        />
      </Component>
    </div>
    <div
      class="flex-1 bg-white p-6 flex flex-col justify-between dark:bg-gray-800"
    >
      <div class="flex-1">
        <div class="inline-block">
          <span
            :class="{
              'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50':
                props.project.category === 'open-source',
              'bg-gray-900 text-gray-100':
                props.project.category === 'closed-source',
              'border border-gray-900 dark:border-gray-100':
                props.project.category === 'research',
            }"
            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5"
          >
            {{ parent.$t(`projects.categories.${props.project.category}`) }}
          </span>
        </div>
        <a
          :href="props.project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <h3
            class="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-gray-100"
          >
            {{ props.project.title[parent.$i18n.locale] }}
          </h3>

          <!-- eslint-disable vue/no-v-html -->
          <p
            class="mt-3 text-base leading-6 text-gray-500 dark:text-gray-300"
            v-html="props.project.description[parent.$i18n.locale]"
          />
        </a>
      </div>
    </div>

    <div
      v-if="props.variant === 'docs'"
      class="flex flex-wrap justify-around text-center w-full bg-gray-50 px-4 py-4 sm:px-6 dark:bg-gray-700"
    >
      <a
        :href="props.project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 text-gray-600 font-medium hover:text-gray-900 hover:underline dark:text-gray-200 dark-hover:text-gray-300"
      >
        {{ parent.$t('docs.labels.moreInfo') }}
      </a>
      <NuxtLink
        :to="
          parent.localePath({
            name: 'docs-project-slug',
            params: { project: props.project.id },
          })
        "
        class="flex-1 text-gray-600 font-medium hover:text-gray-900 hover:underline dark:text-gray-200 dark-hover:text-gray-300"
      >
        {{ parent.$t('docs.labels.goToDocs') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
    variant: {
      type: String,
      default: 'simple',
      validator: (value) => ['simple', 'docs'].includes(value),
    },
  },
})
</script>
