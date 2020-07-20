import VueI18n, { IVueI18n } from 'vue-i18n'
import { RawLocation } from 'vue-router'

import { NuxtRuntimeConfig } from '~/interfaces'

export const getSchemaProfilePage = (
  $i18n: VueI18n & IVueI18n,
  localePath: (route: RawLocation, locale?: string) => string,
  $config: Partial<NuxtRuntimeConfig>
) => ({
  '@context': 'http://www.schema.org',
  '@type': 'ProfilePage',
  inLanguage: $i18n.locale,
  mainContentOfPage: 'https://marquez.co' + localePath('index'),
  about: $i18n.t('slogan'),
  image: 'https://marquez.co' + require('~/assets/images/logotype.jpg'),
  author: {
    '@type': 'person',
    familyName: 'Marquez',
    givenName: 'Julio',
    url: 'https://marquez.co' + localePath('index'),
    email: $config.email,
    gender: 'http://schema.org/Male',
    image: 'https://marquez.co' + require('~/assets/images/profile.jpg'),
    memberOf: [
      {
        '@type': 'Corporation',
        name: 'Aceforth',
        url: 'https://aceforth.com',
      },
      {
        '@type': 'Corporation',
        name: 'CosmosAPI',
        url: 'https://cosmosapi.com',
      },
    ],
  },
  sameAs: [
    'https://linkedin.com/in/juliomrqz/en',
    'https://github.com/juliomrqz',
    'https://twitter.com/juliomrqz',
    'https://www.instagram.com/juliomrqz/',
    'https://themeforest.net/user/julio-marquez',
    'https://www.crunchbase.com/person/julio-marquez',
    'https://dev.to/juliomrqz',
    'https://www.toptal.com/resume/julio-marquez#trust-nothing-but-choice-it-professionals',
    'https://dribbble.com/juliomrqz',
  ],
})
