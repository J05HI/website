<template>
  <div>
    <!-- Cover -->
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="bg-white rounded-lg mt-8 mx-auto max-w-screen-xl px-4 mb-16 sm:mt-12 sm:px-6 md:mt-20 lg:mb-24 xl:mt-24"
    >
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
        >
          <h1
            class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl"
          >
            {{ $t('statusfy.title') }}
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
          >
            {{ $t('statusfy.description') }}
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a
                :href="$t('statusfy.links.docsHome')"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                {{ $t('statusfy.buttons.getStarted') }}
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a
                v-scroll-to="'#features'"
                href="#features"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >{{ $t('statusfy.buttons.learnMore') }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
        >
          <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-lg">
            <div
              class="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"
            >
              <img
                :src="
                  require(`~/assets/images/projects/statusfy/cover-${$i18n.locale}.jpg`)
                "
                :alt="$t('statusfy.title')"
                class="w-full"
                width="1027"
                height="697"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features -->
    <div id="features" class="bg-gray-50 overflow-hidden">
      <div class="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
          <div class="lg:col-span-1">
            <h2
              class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
            >
              {{ $t('statusfy.features.title') }}
            </h2>
            <p
              class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto"
            >
              {{ $t('statusfy.features.description') }}
            </p>
          </div>
          <div
            class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0"
          >
            <div
              v-for="(feature, key, index) in features"
              :key="`feature-${key}`"
              :class="{ 'mt-10 sm:mt-0': index > 0 }"
            >
              <div
                :class="feature.color"
                class="flex items-center justify-center h-12 w-12 rounded-md text-white"
              >
                <!-- <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg> -->

                <SvgIcon
                  :name="`statusfy/${feature.icon}`"
                  :title="$t(`statusfy.features.${key}.title`)"
                  width="24"
                  height="24"
                  class="h-6 w-6"
                />
              </div>
              <div class="mt-5">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  {{ $t(`statusfy.features.${key}.title`) }}
                </h3>
                <p
                  class="mt-2 text-base leading-6 text-gray-500"
                  v-html="$t(`statusfy.features.${key}.description`)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How to use? -->
    <div class="py-16 bg-white overflow-hidden lg:py-24">
      <div
        class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"
      >
        <div class="relative">
          <h2
            class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ $t('statusfy.howToUse.title') }}
          </h2>
          <p
            class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500"
          >
            {{ $t('statusfy.howToUse.description') }}
          </p>
        </div>

        <div class="py-12">
          <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
            <div class="lg:grid lg:grid-cols-4 lg:gap-8">
              <div
                v-for="(how, index) in howToUse"
                :key="`how-to-use-${index}`"
                :class="{ 'mt-10 lg:mt-0': index > 0 }"
              >
                <a
                  :href="$t(`statusfy.howToUse.${how}.link`)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3
                    :class="
                      [
                        'bg-purple-500',
                        'bg-orange-500',
                        'bg-blue-500',
                        'bg-green-500',
                      ][index]
                    "
                    class="flex items-center justify-center text-lg leading-6 font-medium h-12 rounded-md text-white"
                  >
                    {{ $t(`statusfy.howToUse.${how}.title`) }}
                  </h3>
                </a>
                <div class="mt-5">
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <p
                    class="text-base leading-6 text-gray-500"
                    v-html="$t(`statusfy.howToUse.${how}.description`)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sponsoring -->
    <div id="sponsoring" class="bg-blue-900">
      <div class="pt-12 sm:pt-16 lg:pt-24">
        <div class="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto lg:max-w-none">
            <h2
              class="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none"
            >
              {{ $t('statusfy.sponsoring.title') }}
            </h2>

            <!-- eslint-disable-next-line vue/no-v-html -->
            <p
              class="mt-2 text-xl leading-7 max-w-4xl mx-auto text-gray-300"
              v-html="$t('statusfy.sponsoring.description')"
            />
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto lg:max-w-5xl mt-8 sm:mt-12 lg:mt-16">
        <div
          class="rounded-lg bg-white px-6 py-8 sm:p-10 lg:flex lg:items-center"
        >
          <div class="flex-1">
            <div>
              <span
                class="inline-flex py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-white text-gray-800"
              >
                {{ $t('statusfy.sponsoring.reasons.title') }}
              </span>
            </div>
            <div class="mt-4 text-lg leading-7 text-gray-500">
              <ul class="pl-4 list-disc">
                <li>{{ $t('statusfy.sponsoring.reasons.reason1') }}</li>
                <li>{{ $t('statusfy.sponsoring.reasons.reason2') }}</li>
                <li>{{ $t('statusfy.sponsoring.reasons.reason3') }}</li>
                <li>{{ $t('statusfy.sponsoring.reasons.reason4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div class="relative">
          <div class="absolute inset-0 h-3/4 bg-blue-900" />
          <div
            class="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div
              class="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-5"
            >
              <div
                v-for="(plan, index) in sponsoringPlan"
                :key="`plan-${index}`"
                :class="{ 'mt-4 lg:mt-0': index > 0 }"
                class="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <div class="block">
                      <h3
                        class="mt-4 flex items-baseline text-4xl leading-none font-extrabold"
                      >
                        {{ $t(`statusfy.sponsoring.plans.${plan}.title`) }}
                      </h3>

                      <!-- eslint-disable-next-line vue/no-v-html -->
                      <p
                        class="mt-5 text-lg leading-7 text-gray-500"
                        v-html="
                          $t(`statusfy.sponsoring.plans.${plan}.description`)
                        "
                      />
                    </div>
                  </div>
                  <div class="mt-6">
                    <div class="mt-6 rounded-md shadow">
                      <a
                        :class="
                          [
                            'bg-purple-600 hover:bg-purple-500',
                            'bg-blue-600 hover:bg-blue-500',
                            'bg-green-600 hover:bg-green-500',
                          ][index]
                        "
                        href="https://opencollective.com/statusfy#contribute"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                      >
                        {{ $t(`statusfy.sponsoring.plans.${plan}.button`) }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-gray-50">
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          {{ $t(`statusfy.cta.title`) }}

          <br />
          <span class="text-blue-600"
            >{{ $t(`statusfy.cta.description`) }}
          </span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a
              :href="$t('statusfy.links.docsHome')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              {{ $t(`statusfy.buttons.getStarted`) }}
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://github.com/juliomrqz/statusfy"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              {{ $t(`statusfy.buttons.github`) }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div id="faq" class="bg-white">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2
          class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
          {{ $t('statusfy.faq.title') }}
        </h2>
        <div class="mt-6 border-t-2 border-gray-200 pt-6">
          <dl>
            <div
              v-for="(faq, index) in 5"
              :key="`faq-${index}`"
              :class="{ 'mt-8 border-t border-gray-200 pt-6': index > 0 }"
              class="md:grid md:grid-cols-12 md:gap-8"
            >
              <dt
                class="text-base leading-6 font-medium text-gray-900 md:col-span-5"
              >
                {{ $t(`statusfy.faq.question${index}.title`) }}
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <p
                  class="text-base leading-6 text-gray-600"
                  v-html="$t(`statusfy.faq.question${index}.description`)"
                />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- <Subscribe class="mb-10" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '@/components/icons/statusfy'

// import Subscribe from '../../../common/components/Subscribe.vue'
import SeoHead from '~/components/mixins/SeoHead'
// import { Head } from '~/types/interfaces'

export default Vue.extend({
  // components: {
  //   Subscribe,
  // },
  name: 'StatusfyPage',
  mixins: [SeoHead],
  data() {
    const head = {
      title: `Statusfy: ${this.$t('statusfy.title')}`,
      description: `${this.$t('statusfy.description')}`,
      image: require(`~/assets/images/projects/statusfy/og-${this.$i18n.locale}.png`),
    }

    return {
      head,
      features: {
        markdown: {
          icon: 'database-solid',
          color: 'bg-blue-500',
        },
        pwa: {
          icon: 'mobile-alt-solid',
          color: 'bg-purple-500',
        },
        modern: {
          icon: 'js-square-brands',
          color: 'bg-orange-500',
        },
        i18n: {
          icon: 'language-solid',
          color: 'bg-indigo-500',
        },
        customization: {
          icon: 'paint-roller-solid',
          color: 'bg-red-500',
        },
        hosting: {
          icon: 'globe-solid',
          color: 'bg-green-500',
        },
      },
      howToUse: ['write', 'preview', 'build', 'deploy'],
      sponsoringPlan: ['backers', 'sponsors', 'partners'],
    }
  },
})
</script>

<i18n>
{
  "en": {
    "statusfy": {
      "links": {
        "docsHome": "https://docs.statusfy.co/guide/"
      },
      "title": "A marvelous Open Source Status Page system",
      "description": "Statusfy is a Status Page System, easy to use and completely Open Source. You can easily create a fast Static Generated System and easily deploy it to a variety of hosting services.",
      "buttons": {
        "getStarted": "Get Started",
        "learnMore": "Learn More",
        "github": "1.9K+ Github Stars"
      },
      "features": {
        "title": "Features",
        "description": "Statusfy is really easy, you just focus on writing your Incidents Reports and let the magic happen.",
        "markdown": {
          "title": "Markdown Support",
          "description": "Just write Incidents with Markdown and Statusfy will generate a set of HTML content. All features of <strong>GitHub Flavored Markdown</strong> are supported."
        },
        "pwa": {
          "title": "Progressive Web App",
          "description": "Only the critical HTML, CSS, JavaScript, and Data are loaded first. So <strong>clicking around the site feels incredibly fast</strong> without page reloads, even when offline."
        },
        "modern": {
          "title": "Modern Stack",
          "description": "Enjoy the power of modern web technologies: <strong>Vue.js, Webpack and JavaScript</strong>. Write CSS Styles with your favorite preprocessors like Sass, Less or Stylus with auto-prefixing."
        },
        "customization": {
          "title": "Easy Customization",
          "description": "Customize your System with any style specification you may need. Use <strong>your own logo</strong> and easily <strong>change the default theme</strong> with CSS variables or preprocessors. Statusfy allows you to <strong>keep your brand requirements</strong>."
        },
        "i18n": {
          "title": "Multi-language Support",
          "description": "Languages are a key part of who I am. Statusfy was designed with Internationalization in mind, so you can <strong>keep updated your users in any language</strong> with simplicity and speed."
        },
        "hosting": {
          "title": "Hosting Flexibility",
          "description": "Statusfy uses the power of blazing-fast <strong>Static Site Generation</strong>, so you can easily deploy to a variety of hosting services with <strong>no expensive server costs</strong>."
        }
      },
      "howToUse": {
        "title": "How to use Statusfy",
        "description": "Write, Preview, Build and Deploy. That's it!.",
        "write": {
          "title": "Write",
          "description": "Write your Incidents in <strong>Markdown format</strong> with extra attributes.",
          "link": "https://docs.statusfy.co/guide/incidents/"
        },
        "preview": {
          "title": "Preview",
          "description": "Preview your site in <strong>Development Mode</strong> and make sure that changes are right.",
          "link": "https://docs.statusfy.co/guide/commands/#dev"
        },
        "build": {
          "title": "Build",
          "description": "Build a blazing-fast <strong>Static Generated</strong> website.",
          "link": "https://docs.statusfy.co/guide/commands/#build"
        },
        "deploy": {
          "title": "Deploy",
          "description": "Deploy to a variety of hosting services with <strong>no expensive server costs</strong>.",
          "link": "https://docs.statusfy.co/guide/deploy/"
        }
      },
      "sponsoring": {
        "title": "Sponsoring",
        "description": "I love Open Source Projects, I use them every day and <strong>Statusfy is one of my contribution to the Community</strong>, but my resources are limited. If you want to support my work and help me to continue developing this Amazing Project, <strong>please donate</strong>, <i>I will appreciate it</i> ❤️.",
        "reasons": {
          "title": "This is how I use the donations",
          "reason1": "Allow the core team to work on Statusfy.",
          "reason2": "Support external projects in the ecosystem.",
          "reason3": "Cover any other expense.",
          "reason4": "Thank contributors if they invested a large amount of time in contributing."
        },
        "plans": {
          "backers": {
            "title": "Backers",
            "description": "Support me with a monthly donation and help me continue my activities. You can buy me from a coffee ☕️ to a very good hamburger 🍔.",
            "button": "Become a Backer"
          },
          "sponsors": {
            "title": "Sponsors",
            "description": "Become a sponsor and get your logo on the <strong>README on Github</strong> with a link to your site.",
            "button": "Become a Sponsor"
          },
          "partners": {
            "title": "Partners",
            "description": "Become a Partner and get your logo with a link to your site on the <strong>README on Github</strong>, <strong>every page</strong> of the Statusfy <strong>Blog Posts and Documentation Articles</strong>.",
            "button": "Become a Partner"
          }
        }
      },
      "cta": {
        "title": "Interested yet?",
        "description": "It only takes a few minutes to get started!"
      },
      "faq": {
        "title": "Frequently asked questions",
        "question0": {
          "title": "How do you configure this project?",
          "description": "If you want extra details of how to configure and use this project, the full documentation is available at <a href='https://docs.statusfy.co' target='_blank' rel='noopener'>https://docs.statusfy.co</a>."
        },
        "question1": {
          "title": "How do you report a bug or request a feature?",
          "description": "For <strong>Bug reports</strong> or <strong>Feature Requests</strong>, use the <a href='https://github.com/juliomrqz/statusfy/issues' target='_blank' rel='noopener'>Issues Section</a> at <a href='https://github.com/juliomrqz/statusfy' target='_blank' rel='noopener'>Github</a>."
        },
        "question2": {
          "title": "How do you make a question to the Community?",
          "description": "For questions, you can use the <a href='https://github.com/juliomrqz/statusfy/issues' target='_blank' rel='noopener'>Issues Section</a> at <a href='https://github.com/juliomrqz/statusfy' target='_blank' rel='noopener'>Github</a>."
        },
        "question3": {
          "title": "Where do you find tutorials, tips, and updates?",
          "description": "You can find useful articles in my <a href='/blog' rel='noopener'>Blog</a>. I post <strong>tutorials, tips, and updates</strong> related to Statusfy.<br><br>You can also follow me at <a href='https://www.twitter.com/juliomrqz' target='_blank' rel='noopener'>@juliomrqz</a>, where I post updates and news about Statusfy and other Topics."
        },
        "question4": {
          "title": "Where do you get Professional Assistance?",
          "description": "I provide <strong>Professional Support</strong> through Email. If you require Professional Assistance on your project(s) or want to ask general questions, <a href='mailto:statusfy@marquez.co'>email me directly</a>.<br><br>Professional Support starts from $100. Non-Profit And Student discounts available."
        }
      }
    }
  },
  "es": {
    "statusfy": {
      "links": {
        "docsHome": "https://docs.statusfy.co/es/guide/"
      },
      "title": "Un estupendo sistema de Página de Estado de código abierto",
      "description": "Statusfy es un Sistema de Página de Estado, fácil de usar y completamente de Código Abierto. Puedes crear fácilmente un Sistema Estático rápido e implementarlo fácilmente en una variedad de servicios de alojamiento.",
      "buttons": {
        "getStarted": "Empezar",
        "learnMore": "Aprende Más",
        "github": "1.9K+ Estrellas en Github"
      },
      "features": {
        "title": "Funcionalidades",
        "description": "Statusfy es realmente fácil, solo te concentras en escribir tus Reportes de Incidentes y dejas que la magia suceda.",
        "markdown": {
          "title": "Soporte para Markdown",
          "description": "Simplemente escribe los Incidentes con Markdown y Statusfy generará un conjunto de contenido HTML. Todas las características del <strong>formato de Markdown de GitHub</strong> son compatibles."
        },
        "pwa": {
          "title": "Aplicación Web Progresiva",
          "description": "Solo se cargan primero los archivos críticos de HTML, CSS, JavaScript y Datos. Por lo tanto, <strong>hacer clic en el sitio se siente increíblemente rápido</strong> sin recargar la página, incluso sin conexión."
        },
        "modern": {
          "title": "Stack Moderno",
          "description": "Disfruta del poder de las tecnologías web modernas: <strong>Vue.js, Webpack y JavaScript</strong>. Escribe estilos CSS con tus preprocesadores favoritos como Sass, Less o Stylus con prefijo automático."
        },
        "customization": {
          "title": "Fácil Personalización",
          "description": "Personaliza tu sistema con cualquier especificación de estilo que puedas necesitar. Utilice <strong>tu propio logotipo</strong> y fácilmente <strong>cambia el tema predeterminado</strong> con variables CSS o preprocesadores. Statusfy te permite <strong>mantener los requerimientos de tu marca</strong>."
        },
        "i18n": {
          "title": "Soporte Multiidioma",
          "description": "Los idiomas son una parte clave de lo que somos. Statusfy fue diseñado teniendo en cuenta la Internacionalización, por lo que puedes <strong>mantener actualizados a tus usuarios en cualquier idioma</strong> con simplicidad y rapidez."
        },
        "hosting": {
          "title": "Flexibilidad de Alojamiento",
          "description": "Statusfy utiliza el poder de la <strong>Generación de Sitios Estáticos</strong>, de modo que puede implementarse fácilmente en una variedad de servicios de hospedaje <strong>sin costos elevados de servidor</strong>."
        }
      },
      "howToUse": {
        "title": "Cómo Usar Statusfy",
        "description": "Escribe, Previsualiza, Construye y Despliega. ¡Eso es Todo!.",
        "write": {
          "title": "Escribe",
          "description": "Escribe tus incidentes en <strong>formato Markdown</strong> con atributos adicionales.",
          "link": "https://docs.statusfy.co/es/guide/incidents/"
        },
        "preview": {
          "title": "Previsualiza",
          "description": "Obtén una vista previa de tu sitio en <strong>Modo de Desarrollo</strong> y asegúrate de que los cambios sean correctos.",
          "link": "https://docs.statusfy.co/es/guide/commands/#dev"
        },
        "build": {
          "title": "Construye",
          "description": "Crea un rápido sitio web de Generación <strong>Estática</strong>.",
          "link": "https://docs.statusfy.co/es/guide/commands.html#build"
        },
        "deploy": {
          "title": "Despliega",
          "description": "Despliega a una variedad de servicios de alojamiento <strong>sin costos elevados de servidor</strong>.",
          "link": "https://docs.statusfy.co/es/guide/deploy/"
        }
      },
      "sponsoring": {
        "title": "Patrocinio",
        "description": "Me encanta los Proyectos de Código Abierto, los use todos los días y <strong>Statusfy es una de mi contribución a la Comunidad</strong>, pero mis recursos son limitados. Si deseas apoyar mi trabajo y ayudarme a continuar desarrollando este Proyecto Íncreíble, <strong>puedes hacer una donación</strong>, <i>lo apreciaremos</i> ❤️.",
        "reasons": {
          "title": "Así es como utilizamos las donaciones",
          "reason1": "Permitir que el equipo central trabaje en Statusfy.",
          "reason2": "Apoyar proyectos externos en el ecosistema.",
          "reason3": "Cubrir cualquier otro gasto.",
          "reason4": "Agradecer a los colaboradores si invirtieron una gran cantidad de tiempo contribuyendo."
        },
        "plans": {
          "backers": {
            "title": "Backers",
            "description": "Apóyame con una donación mensual y ayúdame a continuar mis actividades. Puedes comprarme desde un café ☕️ hasta una muy buena hamburguesa 🍔.",
            "button": "Conviértete en Backer"
          },
          "sponsors": {
            "title": "Sponsors",
            "description": "Conviértete en Patrocinador y obtén tu logotipo en el <strong>README en Github</strong> con un enlace a tu sitio.",
            "button": "Conviértete en Patrocinador"
          },
          "partners": {
            "title": "Socios",
            "description": "Conviértete en Socio y obtén tu logotipo con un enlace a tu sitio en el <strong>README en Github</strong>, <strong>cada página</strong> del <strong>blog y los artículos de la documentación</strong> relacionados a Statusfy.",
            "button": "Conviértete en Socio"
          }
        }
      },
      "cta": {
        "title": "¿Todavía con Interés?",
        "description": "¡Solo toma unos minutos comenzar!"
      },
      "faq": {
        "title": "Preguntas Frecuentes",
        "question0": {
          "title": "¿Cómo configuras este Proyecto?",
          "description": "Si desea detalles adicionales sobre cómo configurar y usar este proyecto, la <strong>documentación completa</strong> está disponible en <a href='https://docs.statusfy.co/es/' target='_blank' rel='noopener'>https://docs.statusfy.co/es/</a>."
        },
        "question1": {
          "title": "¿Como reportas un Bug o solicitas un funcionalidad?",
          "description": "Para <strong>informes de errores</strong> o <strong>solicitudes de funcionalidades</strong>, usa la <a href='https://github.com/juliomrqz/statusfy/issues' target='_blank' rel='noopener'>Sección de Issues</a> en <a href='https://github.com/juliomrqz/statusfy' target='_blank' rel='noopener'>Github</a>."
        },
        "question2": {
          "title": "¿Cómo le hago una pregunta a la comunidad?",
          "description": "Si tienes alguna pregunta, usa la <a href='https://github.com/juliomrqz/statusfy/issues' target='_blank' rel='noopener'>Sección de Issues</a> en <a href='https://github.com/juliomrqz/statusfy' target='_blank' rel='noopener'>Github</a>."
        },
        "question3": {
          "title": "¿Dónde encuentras tutoriales, consejos y actualizaciones?",
          "description": "Puedes encontrar artículos útiles en mi <a href='/es/blog' rel='noopener'>Blog</a>. Publicamos <strong>tutoriales, consejos y actualizaciones</strong> relacionados con Statusfy.<br><br>También puedes seguirme en <a href='https://www.twitter.com/juliomrqz ' target='_ blank' rel='noopener'>@juliomrqz</a>, donde publicamos actualizaciones y noticias sobre Statusfy y otros temas."
        },
        "question4": {
          "title": "¿Cómo obtienes Asistencia Profesional?",
          "description": "Proporcionamos <strong>Soporte Profesional</strong> a través de Correo Electrónico. Si necesitas Asistencia Profesional en tu(s) proyecto(s) o quieres hacer preguntas generales, <a href='mailto:statusfy@marquez.co'>enviáme un correo electrónico</a>.<br><br>El Soporte Profesional comienza desde $100. Descuentos disponibles para organizaciones sin fines de lucro y estudiantes."
        }
      }
    }
  }
}
</i18n>
