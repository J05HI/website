/*
 * TailwindCSS Configuration File
 *
 * Docs: https://tailwindcss.com/docs/configuration
 * Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('@tailwindcss/ui/colors')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    filter: {
      none: 'none',
      blur: 'blur(8px)',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: colors['cool-gray'],
      blue: {
        600: colors.blue['600'],
        400: colors.blue['400'],
      },
    },
    typography: {
      default: {
        css: {
          color: colors['cool-gray']['900'],
          a: {
            color: colors.blue['600'],
            textDecoration: 'underline',
            '&:hover': {
              color: colors.blue['500'],
            },
          },
          img: {
            maxWidth: '100%',
            height: 'auto',
          },
          'div img': {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          'p > code': {
            backgroundColor: colors.gray['100'],
            borderRadius: defaultTheme.borderRadius.lg,
            paddingLeft: defaultTheme.spacing['1'],
            paddingRight: defaultTheme.spacing['1'],
            '&:before': {
              content: 'none',
            },
            '&:after': {
              content: 'none',
            },
          },
          'p > strong code': {
            backgroundColor: colors.gray['100'],
            borderRadius: defaultTheme.borderRadius.lg,
            paddingLeft: defaultTheme.spacing['1'],
            paddingRight: defaultTheme.spacing['1'],
            '&:before': {
              content: 'none',
            },
            '&:after': {
              content: 'none',
            },
          },
          '.nuxt-content-highlight pre': {
            borderRadius: defaultTheme.borderRadius.lg,
            fontFamily: defaultTheme.fontFamily.mono,
            fontSize: defaultTheme.fontSize.lg,
          },
          '.nuxt-content-highlight pre code': {
            fontSize: defaultTheme.fontSize.lg,
          },
          '.math-inline': {
            borderRadius: defaultTheme.borderRadius.lg,
            padding: defaultTheme.spacing['1'],
            backgroundColor: colors.gray['100'],
            display: 'inline-block',
          },
        },
      },
      lg: {
        css: {
          '.nuxt-content-highlight pre': {
            fontSize: defaultTheme.fontSize.xl,
          },
          '.nuxt-content-highlight pre code': {
            fontSize: defaultTheme.fontSize.xl,
          },
        },
      },
      xl: {
        css: {
          '.nuxt-content-highlight pre': {
            fontSize: defaultTheme.fontSize['2xl'],
          },
          '.nuxt-content-highlight pre code': {
            fontSize: defaultTheme.fontSize['2xl'],
          },
        },
      },
      dark: {
        css: {
          color: colors['cool-gray']['300'],
          backgroundColor: 'transparent',
          code: {
            color: colors['cool-gray']['300'],
          },
          p: {
            color: colors['cool-gray']['300'],
          },
          'p > code': {
            color: colors['cool-gray']['800'],
            backgroundColor: colors.gray['300'],
          },
          'p > strong code': {
            color: colors['cool-gray']['800'],
            backgroundColor: colors.gray['300'],
          },
          '.math-inline': {
            backgroundColor: colors.gray['800'],
          },
          h1: {
            color: colors['cool-gray']['300'],
          },
          h2: {
            color: colors['cool-gray']['300'],
          },
          h3: {
            color: colors['cool-gray']['300'],
          },
          h4: {
            color: colors['cool-gray']['300'],
          },
          strong: {
            color: colors['cool-gray']['300'],
          },
        },
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    typography: ['responsive', 'dark'],
    maxWidth: ['responsive'],
    filter: ['responsive'],
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-filters'),
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/typography')({
      modifiers: ['lg', 'xl'],
    }),
  ],
  purge: {
    enabled: true,
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
    options: {
      extractors: [
        {
          extractor(content) {
            return content.match(/[\w-/.:]+(?<!:)/g) || []
          },
          extensions: ['html', 'vue', 'js', 'ts'],
        },
      ],
      whitelist: ['dark-mode', 'light-mode', 'nuxt-progress', '__amp'],
      // TODO: Improve the following definitions
      whitelistPatterns: [
        /^svg/,
        /code/,
        /pre/,
        /table$/,
        /* prism */
        /limit/,
        /token/,
        /language/,
        /line-numbers/,
        /^katex/,
        /^math/,
      ],
      whitelistPatternsChildren: [
        /^svg/,
        /code/,
        /pre/,
        /table$/,
        /* prism */
        /limit/,
        /token/,
        /language/,
        /line-numbers/,
        /^katex/,
        /^math/,
      ],
    },
  },
}
