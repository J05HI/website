---
title: "Statusfy: Actualización v0.2.0"
slug: statusfy-release-0-2-0
description: "Una nueva versión de Statusfy acaba de ser lanzada con nuevas funciones que pueden mejorar la experiencia de los usuarios/clientes de tu Sistema de Páginas de estado: Mantenimiento Programado, Notificaciones y Mapa de Sitio."
cover: blog/statusfy-release-0-2-0-cover.png
created: 2018-06-25T03:00:00Z
published: 2018-06-25T03:00:00Z
updatedAt: 2020-07-18T15:41:57Z
---


Acaba de ser lanzada una [nueva versión](https://github.com/juliomrqz/statusfy/releases/tag/v0.2.0) de Statusfy con nuevas funciones que pueden mejorar la experiencia de los usuarios de tu Sistema de Páginas de estado: ***Mantenimiento Programado\***, ***Notificaciones\*** y ***Mapa de Sitio\***.

## Mantenimiento Programado

<blog-image src="blog/statusfy-release-0-2-0-scheduled-maintenance-es.png" width="2306" height="985" alt="Statusfy - Mantenimiento Programado"></blog-image>

La definición de [Mantenimiento Programados](https://docs.statusfy.co/es/guide/incidents.html#mantenimiento-programado) es una forma de informar con anticipación a tus usuarios cuando su sistema no puede manejar solicitudes debido a una actualización de mantenimiento temporal.

Trato de mantener la definición de Mantenimiento Programado lo más simple posible, compartiendo los mismos parámetros de los incidentes regulares pero agregando dos nuevos parámetros: [***scheduled\***](https://docs.statusfy.co/es/guide/incidents.html#mantenimiento-programado) y [***duration\***](https://docs.statusfy.co/es/guide/incidents.html#mantenimiento-programado).

## Notificaciones

Con la nueva [funcionalidad de Notificaciones](https://docs.statusfy.co/es/guide/notifications.html) puedes mantener a tus usuarios notificados con cualquier actualización de Incidentes que pueda tener tu Sistema. Los espectadores de su página de estado pueden acceder a las siguientes opciones haciendo clic en el botón Suscribirse.

- **Feeds Atom y RSS:** Estos feeds incluyen todos los incidentes Mantenimientos Programados que han pasado. Tus usuarios pueden usar lectores de feeds o herramientas como [IFTT](https://ifttt.com/feed) y [Zapier](https://zapier.com/apps/rss/integrations) para recibir notidicaciones de estos feeds..
- **iCalendar:** Tus usuarios pueden suscribirse a un calendario que contiene todos tus Mantenimientos Programados futuros y pasados. El calendario se publica utilizando iCalendar, un formato popular que es compatible con la mayoría de las aplicaciones de calendario modernas.
- **Twitter:** Define cuentas de Twitter a las que tus usuarios pueden acceder para recibir actualizaciones.
- **Support Site:** Define Sitios de Soporte externos que puedan acceder tus usuarios para recibir actualizaciones de otras fuentes que desees proporcionar.

***La mayoría de estas opciones de notificación están habilitadas de forma predeterminada, pero puedes deshabilitarlas en tu archivo de configuración. Más información\*** ***[aquí](https://docs.statusfy.co/es/config/#notifications).\***

## Mapa de Sitio

Ahora puedes indicarle a los bots de los motores de búsqueda las páginas disponible en tu Sistema de Pagina de Estado con el **Mapa de Sitio**. Esto puede ayudar a que todas las páginas de tu sistema puedan ser encontradas con más facilidad.

## Contribuye a Statusfy

Statusfy es un proyecto completamente abierto, creado y actualizado por mí (Julio Márquez), Desarrollador Full-Stack. Todavía es un trabajo en progreso, por lo que cualquier contribución es bienvenida. Me apasiona construir una solución versátil y de menor costo.

También puedes ayudar al proyecto dando una [estrella en GitHub ★](https://github.com/juliomrqz/statusfy), corriendo la voz o [dando una donación](https://statusfy.co/es/support#sponsoring) 🤓.