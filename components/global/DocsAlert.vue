<template>
  <div
    :class="{
      [`alert-${variant}`]: true,
      'bg-yellow-50 text-yellow-400 border-yellow-400': variant === 'warning',
      'bg-red-50 text-red-400 border-red-400': variant === 'danger',
      'bg-green-50 text-green-400 border-green-400': variant === 'success',
      'bg-blue-50 text-blue-400 border-blue-400': variant === 'info',
    }"
    class="alert border-l-4 rounded shadow-sm p-4 my-4"
  >
    <div class="flex">
      <div
        :class="{
          'text-yellow-400': variant === 'warning',
          'text-red-400': variant === 'danger',
          'text-green-400': variant === 'success',
          'text-blue-400': variant === 'info',
        }"
        class="icon flex-shrink-0 leading-6"
      >
        <SvgIcon :name="iconName" width="18" height="18" />
      </div>
      <div class="ml-3">
        <div
          :class="{
            'text-yellow-700': variant === 'warning',
            'text-red-700': variant === 'danger',
            'text-green-700': variant === 'success',
            'text-blue-700': variant === 'info',
          }"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import '~/components/icons/warning'
import '~/components/icons/cancel-circle'
import '~/components/icons/checkmark-circle'
import '~/components/icons/info'

export default Vue.extend({
  props: {
    variant: {
      type: String,
      default: 'warning',
      validator: (value) =>
        ['info', 'success', 'warning', 'danger'].includes(value),
    },
  },
  computed: {
    iconName(): string {
      const icons: { [key: string]: string } = {
        info: 'info',
        warning: 'warning',
        success: 'checkmark-circle',
        danger: 'cancel-circle',
      }

      return icons[this.variant]
    },
  },
})
</script>

<style scoped>
.alert {
  a {
    @apply font-medium underline transition ease-in-out duration-150;
  }

  p {
    @apply leading-6;

    color: inherit;
  }

  p:first-child {
    @apply mt-0;
  }

  p:last-child {
    @apply mb-0;
  }

  &.alert-info {
    a {
      @apply text-blue-700;

      &:hover {
        @apply text-blue-600;
      }
    }

    code {
      @apply text-blue-700 bg-blue-200;
    }

    strong {
      @apply text-blue-800;
    }
  }

  &.alert-success {
  }

  &.alert-warning {
    a {
      @apply text-yellow-700;

      &:hover {
        @apply text-yellow-600;
      }
    }

    code {
      @apply text-yellow-700 bg-yellow-200;
    }

    strong {
      @apply text-yellow-800;
    }
  }

  &.alert-danger {
  }
}
</style>
