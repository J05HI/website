---
title: "Visión General"
description: "Social es una plantilla de administración/frontend compatible con Bootstrap v3 y las versiones más recientes de jQuery, desarrollada para sus aplicaciones administrativas y frontend."
created: "2015-03-09T00:00:00Z"
published: "2018-02-27T22:30:14Z"
modified: "2020-07-25T23:27:50Z"
position: 1
category: "Primeros Pasos"
---

<docs-social-warning></docs-social-warning>

# Social Admin Template

Social es una plantilla de administración/frontend compatible con Bootstrap v3 y las versiones más recientes de jQuery. Social fue desarrollada para sus aplicaciones administrativas y frontend. Esta plantilla viene con componentes fáciles de usar y una gran colección de complementos para personalizar algunos elementos como menús desplegables, formularios, botones, tablas, cajas modales, gráficos avanzados y más, compatibles con todos los principales navegadores, tabletas (iPads y otros) y dispositivos móviles, iPhone y Android.

Por favor, si encuentra algún error o tiene alguna sugerencia, no dude en hacérnoslo saber. Haremos todo lo posible para solucionarlos lo antes posible.


## Problemas en Internet Explorer y Firefox

Internet Explorer 7 (y versiones anteriores) y Firefox 3.x **no son compatibles**.


## Descripción de las Carpetas

La estructura de carpetas de **Social** está muy bien organizada, algunas de ellas son específicas para ciertas cosas. Hay una lista de estas carpetas a continuación:


<div class="table-responsive">
  <table class="table table-striped table-bordered table-sm">
    <thead class="text-center">
      <tr>
        <td colspan="4"><strong>Carpetas</strong>
        </td>
        <td><strong>Descripción</strong>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>CARPETA PRINCIPAL</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>assets</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>css</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>font-awesome</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>glyphicons_free</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>glyphicons_pro</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>layouts</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>plugins</td>
        <td>Estilos personalizados para algunos complementos</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>theme</td>
        <td>Archivos temáticos</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>font</td>
        <td>&nbsp;</td>
        <td>Una variedad de fuentes de iconos</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>img</td>
        <td>&nbsp;</td>
        <td>Archivos de imágenes</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>js</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>demo</td>
        <td>Archivos de JavaScript utilizados para las demostraciones</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>layouts</td>
        <td>Archivos de JavaScript utilizados en el diseño de las páginas</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>plugins</td>
        <td>El código fuente para los complementos utilizados</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>less</td>
        <td>&nbsp;</td>
        <td>Archivos less para los temas</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>demo</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>Vista previa en vivo de la demostración de administrador y frontend</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>docs</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>Documentación</td>
      </tr>
    </tbody>
  </table>
</div>


## Activos Premium

La **Reventa** de estos activos está ** prohibida ** y la licencia no es transferible. Si desea utilizarlos como parte de otro producto propio, debe comprar otra licencia.

### GlyphiconsPRO

Esta plantilla incluye Glyphicons PRO, un conjunto de iconos con un valor de USD 59, pero totalmente gratuito con esta compra.

Puede encontrar las hojas de estilo y los archivos de iconos de fuente en:

```
./assets/css/glyphicons/
./assets/fonts/glyphicons/
```

### Isotope

Un plugin jQuery para diseños mágicos

Isótopo es un complemento gratuito, pero si desea utilizarlo en proyectos y aplicaciones comerciales, es necesario comprar una licencia comercial. Más información [aquí](https://isotope.metafizzy.co/license.html).


## Diseño básico

El contenido de la barra lateral **debe colocarse** antes del contenido de la barra superior.

```html
<html>
   <head>
      <!-- Contenido de la Cabecera -->
   </head>

   <body>
      <div class="wrapper">
          <aside class="social-sidebar">
             <!-- Contenido de la barra lateral -->
          </aside>

          <header>
             <nav class="social-navbar">
                <!-- Contenido de la barra superior -->
             </nav>
          </header>

          <div class="main">
             <!-- Contenido -->
          </div>
      </div>
   </body>
</html>
```

## Hojas de estilo

Hay dos temas importantes a considerar:

- Los diseños de administrador y frontend tienen su propio archivo de hoja de estilo.
- El estilo para la versión gratuita del icono de Bootstrap Glyphicons está separado.

Necesita incluir el núcleo

`<link href="./assets/css/social.core.css" rel="stylesheet">` 

Dependiendo de si está codificando una página frontend o back-end (admin), debe elegir el archivo css apropiado:

```html
<!-- Admin -->
<link href="./assets/css/social.admin.css" rel="stylesheet" />

<!-- Frontend -->
<link href="./assets/css/social.frontend.css"rel="stylesheet" />
```


## Temas

**Las plantillas de administrador** y **las plantillas de interfaz** tienen **cuatro temas** cada una. **Los archivos LESS** están incluidos para que puedas diseñar tus propios temas fácilmente.

#### Admin

- Inverse
- Green
- Facebook
- Blue Sidebar

#### Frontend

- Blue
- Green
- Orange
- Red
