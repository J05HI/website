---
title: "Statusfy: Actualización v0.3.0"
slug: statusfy-release-0-3-0
description: "Una nueva versión de Statusfy acaba de ser lanzada, con nuevas características y mejoras de rendimiento: soporte para Docker, nuevos comandos, tres nuevos idiomas que traducen la interfaz y mucho más."
cover: blog/statusfy-release-0-3-0-cover.png
createdAt: 2019-03-21T17:45:00Z
publishedAt: 2019-03-21T17:45:00Z
updatedAt: 2020-04-19T14:23:46Z
---



Acaba de ser lanzada una [nueva versión](https://github.com/juliomrqz/statusfy/releases/tag/v0.3.0) de Statusfy con nuevas características y mejoras de rendimiento: soporte para Docker, nuevos comandos, tres nuevos idiomas que traducen la interfaz y mucho más.

## CLI

Hay dos nuevos comandos disponibles: [delete-incident](https://docs.statusfy.co/es/guide/commands.html#delete-incident) y [update-incident](https://docs.statusfy.co/es/guide/commands.html#delete-incident). Son útiles si estás gestionando una gran cantidad de incidentes o varios idiomas.

## Mantenimiento Programado

Aplicamos pequeñas mejoras en el diseño de los Incidentes Programados: ahora se muestra la fecha de finalización, así como el contenido del incidente. También puedes personalizar la [posición de esta sección](https://docs.statusfy.co/es/config/#scheduled), eligiendo una de estas opciones: belowSystems, aboveSystems y aboveGlobalStatus.

## Docker

Soportamos oficialmente a [Docker](https://hub.docker.com/r/bazzite/statusfy). Todavía no lo recomendamos su uso en producción, primero necesitamos tus comentarios para asegurarnos de que la imagen funciona correctamente.

## Nuevas traducciones:

Tres nuevos idiomas traducen la Interfaz:

- Alemán (gracias a [Dennis Herzberg](https://github.com/dennis47528))
- Húngaro (gracias a [Peter Borsa](https://github.com/asrob))
- Portugués de Brasil (gracias a [felipeklasen](https://github.com/felipeklasen))

Si utilizas uno de estos idiomas, ya no necesitas proporcionar manualmente un archivo de traducción 🤓.

## Usuarios de Statusfy

Si tu empresa u organización está utilizando Statusfy, te invitamos a dejar tus comentarios, opiniones, impresiones y sugerencias [aquí](https://github.com/juliomrqz/statusfy/issues/159).

Tus comentarios serán una gran motivación para mejorar Statusfy. Estaré muy agradecidos por tus respuestas y apoyo.

## Agradecimientos Especiales

Queremos agradecer a [Thomas Jensen](https://opencollective.com/thomasjsn) y [Janez Troha](https://opencollective.com/janez-troha) por haber contribuido financieramente al desarrollo de Statusfy a través de [OpenCollective](https://opencollective.com/statusfy). Estamos muy agradecidos por su contribución.

## Contribuye a Statusfy

Statusfy es un proyecto completamente de [código abierto](https://github.com/juliomrqz/statusfy), creado y mantenido por mí, un Desarrollador Full-Stack. Todavía es un trabajo en progreso, así que cualquier contribución es bienvenida. Nos apasiona construir una solución versátil y de bajo costo.

También puedes apoyarnos:

- Dando una [estrella ★ en GitHub](https://github.com/juliomrqz/statusfy).
- [Difundiendo el mensaje](https://twitter.com/intent/tweet?url=https%3A%2F%2Fmarquez.co%2Fes%2Fstatusfy&via=juliomrqz&text=Statusfy%3A%20Un%20estupendo%20sistema%20de%20P%E1gina%20de%20Estado%20de%20c%F3digo%20abierto&hashtags=statusfy%2C%20opensource).
- Haciendo una [donación](https://opencollective.com/statusfy).
- O convirtiéndote en [Patrocinador](/es/statusfy#sponsoring).
