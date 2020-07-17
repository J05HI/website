import { Project, DocsProject } from '~/interfaces'

export const projects: Project[] = [
  {
    id: 'statusfy',
    version: '0.5.0',
    title: {
      en: 'Statusfy: A marvelous Open Source Status Page system',
      es:
        'Statusfy: Un estupendo sistema de Página de Estado de código abierto',
    },
    description: {
      en:
        'Statusfy is a Status Page System, easy to use and deploy to a variety of hosting services. The goal behind is to lower costs and complexity providing a simpler and versatile Open Source alternative.',
      es:
        'Statusfy es un Sistema de Páginas de Estado, fácil de usar e implementar en una variedad de servicios de hosting. El objetivo es reducir los costos y la complejidad proporcionando una alternativa de código abierto más simple y versátil.',
    },
    url: 'https://github.com/aceforth/statusfy',
    category: 'open-source',
  },
  {
    id: 'nuxt-optimized-images',
    version: '1.0.1',
    title: {
      en: 'Nuxt Optimized Images',
      es: 'Nuxt Optimized Images',
    },
    description: {
      en:
        'Automatically optimizes images used in Nuxt.js projects (JPEG, PNG, SVG, WebP and GIF).',
      es:
        'Optimiza automáticamente las imágenes utilizadas en los proyectos en Nuxt.js (JPEG, PNG, SVG, WebP y GIF).',
    },
    url: 'https://github.com/aceforth/nuxt-optimized-images',
    category: 'open-source',
  },
  {
    id: 'mapset',
    title: {
      en:
        'Mapset: Design, Create and Convert mainframe files through our dynamic interface',
      es:
        'Mapset: Diseñe, cree y convierta archivos mainframe a través de nuestra interfaz dinámica',
    },
    description: {
      en:
        'When we started creating Mapset, we focused on three things: Innovation, Efficiency, and Convenience. Mapset became 15x faster than conventional methods or any other tool available.',
      es:
        'Cuando comenzamos a crear Mapset, nos enfocamos en tres cosas: Innovación, Eficiencia y Conveniencia. Mapset se volvió 15 veces más rápido que los métodos convencionales o cualquier otra herramienta disponible.',
    },
    url: 'https://youtu.be/orNVuOp31Lc',
    category: 'closed-source',
  },
  {
    id: 'vue-warehouse',
    version: '2.1.0',
    title: {
      en: 'Vue.js Warehouse',
      es: 'Vue.js Warehouse',
    },
    description: {
      en:
        'A Cross-browser storage for Vue.js and Nuxt.js, with plugins support and easy extensibility based on Store.js.',
      es:
        'Almacenamiento entre navegadores para Vue.js and Nuxt.js, con soporte de complementos y fácil extensibilidad basado en Store.js.',
    },
    url: 'https://github.com/aceforth/vue-warehouse',
    category: 'open-source',
  },
  {
    id: 'scientific-article',
    title: {
      en:
        'The North Andes & the Caribbean and South American plates interaction',
      es:
        'Interacción entre las placas Andes del Norte y el Caribe y las placas de América del Sur',
    },
    description: {
      en:
        'On the interaction of the North Andes plate with the Caribbean and South American plates in northwestern South America from GPS geodesy and seismic data.',
      es:
        'Sobre la interacción de la placa de los Andes del Norte con las placas del Caribe y Sudamérica en el noroeste de Sudamérica a partir de datos geodésicos GPS y sísmicos.',
    },
    url: 'https://academic.oup.com/gji/article/214/3/1986/5035819',
    category: 'research',
  },
  {
    id: 'bs-thesis',
    title: {
      en:
        'Reservoir characterization using seismic attributes with Bayesian classification',
      es:
        'Caracterización de yacimientos utilizando atributos sísmicos con clasificación Bayesiana',
    },
    description: {
      en:
        'Interpretation of well logs, Bayesian decision theory and the generation and interpretation of seismic attributes applied to the Blackfoot Field, Alberta, Canada.',
      es:
        'Interpretación de registros de pozos, teoría de decisión bayesiana y a generación e interpretación de atributos sísmicos aplicados al Campo Blackfoot, Alberta, Canadá.',
    },
    url: '/files/bs-thesis.pdf',
    category: 'research',
  },
  {
    id: 'equilibria',
    title: {
      en:
        'Equilibria: multi-phases flash calculation with aqueous speciation and mineral precipitation',
      es:
        'Equilibria: cálculo flash multifásico con especiación acuosa y precipitación de minerales',
    },
    description: {
      en:
        'The only software in the market that combines, single, two phase, and three phase flash calculation with aqueous speciation and mineral precipitation or dissolution.',
      es:
        'El único software en el mercado que combina el cálculo flash monofásico, bifásico y trifásico con la especiación acuosa y la precipitación o disolución de minerales.',
    },
    url: 'http://www.geochemicalengineering.com/Equilibria.html',
    category: 'closed-source',
  },
]

export const docsProjects: DocsProject[] = [
  ...projects.filter((p) => p.category === 'open-source' && p.id !== 'statusfy'),
  {
    id: 'nuxt-netlify',
    version: '1.0.0',
    title: {
      en: 'Nuxt Netlify',
      es: 'Nuxt Netlify',
    },
    description: {
      en:
        'Dynamically generate "_headers" and "_redirects" files for Netlify in your Nuxt.js projects.',
      es:
        'Genera dinámicamente archivos "_headers" y "_redirects" para Netlify en tus proyectos de Nuxt.js.',
    },
    url: 'https://github.com/juliomrqz/nuxt-netlify',
    category: 'open-source',
  },
  {
    id: 'nativescript-vibrate',
    version: '3.0.0',
    title: {
      en: 'NativeScript Vibrate',
      es: 'NativeScript Vibrate',
    },
    description: {
      en: 'A vibrate NativeScript plugin for Android and iOS.',
      es:
        'Un plugin para NativeScript que facilita la vibración de dispositivos Android e iOS.',
    },
    url: 'https://github.com/juliomrqz/nativescript-vibrate',
    category: 'open-source',
  },
  // {
  //   id: 'social',
  //   version: '2.1.3',
  //   title: {
  //     en: 'Social Template',
  //     es: 'Social Template',
  //   },

  //   description: {
  //     en:
  //       'A responsive admin & frontend template compatible with Bootstrap and the latest versions of jQuery. This template comes with easy to use components and a huge collection of plugins.',
  //     es:
  //       'Un Template de administración y para el frontend compatible compatible con Bootstrap y las últimas versiones de jQuery. Este Template viene con componentes fáciles de usar y una gran colección de complementos.',
  //   },
  //   category: 'closed-source',
  //   url:
  //     'https://themeforest.net/item/social-premium-responsive-admin-template/4611337?ref=julio-marquez',
  // },
]
