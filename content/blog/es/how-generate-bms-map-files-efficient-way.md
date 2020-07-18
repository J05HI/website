---
title: "Cómo generar archivos de mapas BMS de una manera eficiente"
slug: how-generate-bms-map-files-efficient-way
description: "La Edición de archivos de Mainframe es generalmente una tarea abrumadora. Por lo general, toma tiempo valioso detectar errores y realizar cambios importantes."
cover: blog/how-generate-bms-map-files-efficient-way-cover.png
created: 2018-06-25T03:00:00Z
published: 2018-06-25T03:00:00Z
updatedAt: 2020-07-18T15:24:02Z
---



La Edición de archivos de Mainframe es generalmente una tarea abrumadora. Por lo general, toma tiempo valioso detectar errores y realizar cambios importantes. En general, un ingeniero experimentado podría tomar alrededor de 5 días para crear una pantalla de mainframe sin ningún error.

Por suerte, [Mapset](/es/blog/mapset), una herramienta nueva, innovadora y dinámica diseñada para administrar pantallas en diferentes lenguajes de codificación de mainframe, puede ayudar con esta tareas. Con [Mapset](/es/blog/mapset), la edición de los archivos BMS puede ir desde unos pocos días hasta unas pocas horas.



## El Editor

El Editor es una herramienta innovadora, versátil y dinámica que te permite diseñar de forma muy sencilla, pantallas en diferentes lenguajes de codificación de mainframe. *Actualmente, sólo está soportando la edición de Archivos BMS.*

<blog-image src="blog/how-generate-bms-map-files-efficient-way-editor.png" width="1287" height="712" alt="Editor BMS"></blog-image>

## Opciones Disponibles

En el área superior del Editor, existe una barra con todas las opciones que pueden ser utilizadas para la manipulación, creación y/o modificación de cada uno de los campos en tu archivo BMS.

<blog-image src="blog/how-generate-bms-map-files-efficient-way-properties.png" width="1015" height="56" alt="Propiedades del Mapa en el Editor"></blog-image>

- De izquierda a derecha, se indica el significado de cada una de las opciones:
  - **Proyecto Padre:** permite ir a la página donde se muestran los Archivos BMS del proyecto al cual pertenece el archivo actualmente en edición.
  - **Nuevo Archivo:** permite crear de un nuevo BMS y abrirlo en una nueva pestaña.
  - **Propiedades del Mapa:** permite editar las propiedad del Mapa. Más información en la sección **Propiedades del Map** ubicado más abajo.
  - **Abrir:** permite abrir, desde cualquier Proyecto (al cual se tenga acceso), y ubicar en otra pestaña un BMS existente para hacer modificaciones o copiar campos de éste para otro BMS que se esté abierto en el editor.
  - **Deshacer:** permite volver un cambio realizado previamente en el área de trabajo, ya sea por desplazamientos o modificaciones que hayan no resultaron exitosas.
  - **Rehacer:** permite volver a tener un cambio realizado en el área de trabajo, que pudo ser borrado o modificado sin intención.
  - **Guardar:** permite salvar todo lo creado y/o modificado en el Área de Trabajo.
  - **Guardar como:** permite salvar todo lo creado y/o modificado en el Archivo BMS activo, con un nombre diferente en el Proyecto deseado.
  - **Descargar:** permite descargar en texto plano los últimos cambios salvados en formato de BMS válido. Esta opción sólo está activa si el BMS en edición no tiene ningún error. Puedes ver un archivo de ejemplo generado por el editor [acá](https://media.bazzite.com/blog/2018/06/how-generate-bms-map-files-efficient-way-bms-example.txt).
  - **Generar PDF:** permite generar un BMS en formato PDF, para ser evaluado o comentado por otra persona. Puedes ver un archivo de ejemplo generado por el editor [acá](https://media.bazzite.com/blog/2018/06/how-generate-bms-map-files-efficient-way-pdf-report-example.pdf).
  - **Añadir Nuevos Campos:** permite crear de forma rápida nuevos campos en el Área de Trabajo.
  - **Eliminar Campos:** permite eliminar uno o más campos que hayan sido definidos en el Área de trabajo.
  - **Seleccionar Múltiples Campos:** mientras esta opción esté activa, se pueden seleccionar uno o varios campos para ser cambiados de posición o ser eliminado de forma más rápida y conveniente.
  - **Borrar Campos en Blanco:** permite eliminar todos los campos que están como separadores y en blanco.
  - **Añadir Campos en Blanco:** permite añadir campos en blanco entre las posiciones vacías existentes entre las variables que están creadas en el BMS en edición.
  - **Copiar Campos:** cuando esta opción esté activa, permite al usuario elegir uno o varios campos que se deseen copiar en el Área de Trabajo.
  - **Pegar Campos:** después de usar la opción anterior, el usuario posiciona el cursor en la zona donde se quiere copiar los campos copiado y con sólo hacer clic, se realiza la copia de estos campos.
  - **Validar Errores:** permite al usuario validar los errores de sintaxis que pudiese tener el BMS en edición y así evitar retrasos innecesarios al cargarlo en un ambiente de desarrollo o producción.
  - **Modo Edición:** esta opción indica que se está trabajando en el modo de diseño del BMS en el Área de trabajo.
  - **Modo Vista Previa:** esta opción muestra el BMS de la misma forma como se vería en la pantalla 3270 de CICS.



**Modo Edición**



<blog-image src="blog/how-generate-bms-map-files-efficient-way-edit-mode.png" width="720" height="504" alt="Modo Edición"></blog-image>

**Modo Vista Previa**

<blog-image src="blog/how-generate-bms-map-files-efficient-way-preview-mode.png" width="720" height="504" alt="Modo Vista Previa"></blog-image>

Cuando se está en el **Modo Vista Previa** la única opción que se puede usar es: *Generar PDF*.

Cuando se está en el **Modo Edición**, la única opción no disponible es *Generar PDF*. Las demás opciones estarán disponibles si su uso es permitido en la acción que el usuario esté realizando en ese momento.

## Propiedades de los Campos

El Panel izquierdo permite definir las propiedades de las campos del BMS en edición. Son las mismas propiedades que son usadas para crear un BMS y con las mismas características como se describen en los [manuales de BMS de IBM](https://www.ibm.com/support/knowledgecenter/SSQ2R2_9.0.1/com.ibm.etools.bmseditor.doc/topics/tbm013.html).

## Propiedades del Mapa

La opción **Propiedades del Mapa** en la barra de herramientas te abre una nueva ventana en donde se indican las Propiedades Generales del BMS que se está editando.

Se pueden modificar los siguientes parámetros:

- Tamaño del BMS:
  - Número de Filas (Alto): desde 2 hasta 24.
  - Número de Columnas (Ancho) desde 11 hasta 80.
- Posición física del BMS en la pantalla 3270:
  - Líneas: desde 1 hasta la 23.
  - Columnas: desde 1 hasta la 80.
- Estilo
  - Color por defecto de todos los campos incluido en el BMS: Neutral, Azul, Turquesa, Verde, Rosado, Rojo y Amarillo.
- Estándar del encabezado: Al activar esta opción, se creará en el área de trabajo, un encabezado estándar con campos que incluyen: código de la transacción (TRANID), nombre de la empresa (TC-EMPRESA), fecha (AC-DATE), nombre del programa (AC-PRGM), código del usuario (AC-USER), hora (AC-HORAE) y el número del terminal (AC-TERM).
- PFS: Al activar esta opción, se creará en el área de trabajo, dos líneas: una que indica las PFS disponibles y otra línea en la parte inferior para ser llenada por el usuario en la posición de cada PF.
- Mensaje: Esta opción crea en la fila 24 del BMS, una línea en blanco de 64 posiciones que estará disponible como un área de mensaje.



Como puede ver, este editor es versátil y fácil de usar, es similar a Microsoft PowerPoint © pero más simple. **No tengas miedo y pruébalo**.