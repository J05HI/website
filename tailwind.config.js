/*
 * TailwindCSS Configuration File
 *
 * Docs: https://tailwindcss.com/docs/configuration
 * Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('@tailwindcss/ui/colors')

const inlineCodeStyles = {
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
}

const inlineCodeDarkStyles = {
  color: colors['cool-gray']['800'],
  backgroundColor: colors.gray['300'],
}

module.exports = {
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
  },
  theme: {
    darkSelector: '.dark-mode',
    filter: {
      none: 'none',
      blur: 'blur(8px)',
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
          'p > code': inlineCodeStyles,
          'p > strong code': inlineCodeStyles,
          'li > code': inlineCodeStyles,
          'a > code': inlineCodeStyles,
          'td > code': inlineCodeStyles,
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
          'p > code': inlineCodeDarkStyles,
          'p > strong code': inlineCodeDarkStyles,
          'li > code': inlineCodeDarkStyles,
          'a > code': inlineCodeDarkStyles,
          'td > code': inlineCodeDarkStyles,
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
        colors: {
          black: '#000',
          white: '#fff',
          gray: colors['cool-gray'],
        },
      },
    },
  },
  variants: {
    typography: ['responsive', 'dark'],
    display: ['responsive'],
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
      'content/**/*.md',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.ts',
      'locales/**/*.js',
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
