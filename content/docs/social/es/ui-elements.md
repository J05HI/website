---
title: "Interfaz de Usuario"
description: "Componentes reutilizables creados para proporcionar alertas, modales, botones, breadcrumbs y mucho más."
created: "2015-03-09T00:00:00Z"
published: "2018-02-27T22:45:35Z"
modified: "2020-07-25T23:27:50Z"
position: 3
category: "Primeros Pasos"
---

<docs-social-warning></docs-social-warning>

Componentes reutilizables creados para proporcionar alertas, modales, botones, breadcrumbs y mucho más.

## General

### Modals

Los Modals son simplificados pero flexibles, con instrucciones de diálogo con la funcionalidad mínima requerida y los valores predeterminados inteligentes.

Para una documentación más detallada, verifica [Bootstrap Modals Official documentation](https://getbootstrap.com/docs/3.3/javascript/#modals)


#### PNotify

Notificaciones de JavaScript para Bootstrap, jQuery UI y el Web Draft de notificaciones.

Para una documentación más detallada, verifica [PNotify Official website](https://github.com/sciactive/pnotify)

### Tooltips

El tooltip tooltip o "consejo de información (sugerencia)" es un elemento de interfaz gráfica de usuario común. Se usa junto con un cursor, generalmente un puntero. El usuario coloca el puntero sobre un elemento, sin hacer clic en él, y puede aparecer una información sobre herramientas, un pequeño "recuadro de desplazamiento" con información sobre el elemento sobre el que se coloca el cursor.

Para una documentación más detallada, verifica [Bootstrap Tooltips Official documentation](https://getbootstrap.com/docs/3.3/javascript/#tooltips)

### Popovers

Agrega pequeñas superposiciones de contenido, como las del iPad, a cualquier elemento que contenga información secundaria.

Para una documentación más detallada, verifica [Bootstrap Popovers Official documentation](https://getbootstrap.com/docs/3.3/javascript/#popovers)

### Etiquetas y distintivos

**Dos nuevos estilos** han sido agregado a etiquetas e insignias: `.label-inverse`, `.label-neutral`, `.badge-inverse` y `.badge-neutral`.

Para una documentación más detallada, verifica  [Bootstrap Label & Badge documentation](https://getbootstrap.com/docs/3.3/components/#labels)

### Alertas

Proporciona mensajes de retroalimentación contextuales para las acciones típicas de los usuarios con un puñado de mensajes de alerta disponibles y flexibles. 
Para una documentación más detallada, verifica [Bootstrap Alert documentation](https://getbootstrap.com/docs/3.3/javascript/#alerts)


### Grupo de lista

Los grupos de listas son un componente flexible y poderoso para mostrar no solo listas simples de elementos, sino también elementos complejos con contenido personalizado. Para una documentación más detallada, verifica [Bootstrap List group documentation](https://getbootstrap.com/docs/3.3/components/#list-group)

### Breadcrumbs

Indique la ubicación de la página actual dentro de una jerarquía de navegación.

**Un nuevo estilo** ha sido creado para los Breadcrumbs, necesitas usar la clase `.breadcrumb-arrows`

<blog-image src="docs/social/new-breadcrumbs.png" width="826" height="51" alt="Nuevos Breadcrumbs"></blog-image>


Puedes elegir diferentes colores: `.breadcrumb-default`, `.breadcrumb-primary`, `.breadcrumb-success`, `.breadcrumb-info`, `.breadcrumb-warning`, `.breadcrumb-danger`, `.breadcrumb-inverse` y `.breadcrumb-neutral`

Para una documentación más detallada, verifica [Bootstrap Breadcrumbs documentation](https://getbootstrap.com/docs/3.3/components/#breadcrumbs)

#### Barras de progreso

Proporciona comentarios actualizados sobre el progreso de un flujo de trabajo o acción con barras de progreso simples y flexibles. 

Para una documentación más detallada, verifica [Bootstrap Progress bars documentation](https://getbootstrap.com/docs/3.3/components/#progress)

#### Panel de Feeds

##### Actividades Feed

<blog-image src="docs/social/activities-feed.jpg" width="515" height="359" alt="Actividades Feed"></blog-image>


##### Feed de Usuarios

<blog-image src="docs/social/users-feed.jpg" width="515" height="359" alt="Feed de Usuarios"></blog-image>

**Código base (Actividades Feed)**

```html
<div class="activities-feed">
    <ul class="list-group">
      ...
      <li class="list-group-item">
        <a href="#">
          <div class="label label-warning feed-icon">
            <i class="fa fa-warning"></i>
          </div>
          <span>Sistema sobrecargado</span>
          <span class="label label-success">advertencia</span>
          <span class="feed-time"><em>hace 2 minutos</em></span>
        </a>
      </li>
      ...
    </ul>
</div>
```

**Código base (Feed de Usuarios)**

```html
<div class="users-feed">
    <ul class="list-group">
      ... 
      <li class="list-group-item">
        <a href="#ignore">
          <img class="feed-avatar" src="./assets/img/avatars/user1_55.jpg" alt="John Doe">
          <span>Eliminando usuario</span>
          <span class="label label-success">terminado</span>
          <span class="feed-time"><em>25 de septiembre de 2013 a las 3:45 p.m.</em></span>
        </a>
      </li>
      ...
    </ul>
</div>
```

#### Panel de Chat

<blog-image src="docs/social/chat-panel.jpg" width="514" height="360" alt="Panel de Chat"></blog-image>

**Base code**

```html
<div class="panel panel-default panel-chat">
  <div class="panel-body">
      <ul class="scroll">
          <!-- Mensaje por el receptor -->
          <li class="left clearfix">
            <span class="chat-img pull-left">
              <img src="./assets/img/avatars/user1.jpg" alt="User Avatar"/>
            </span>
            <div class="chat-body clearfix">
                <div class="header">
                    <strong class="primary-font">Nombre de usuario</strong>
                    <small class="pull-right text-muted">
                        <span class="fa fa-clock-o"></span>
                        Hace 2 minutos
                    </small>
                </div>
                <p><!-- Mensaje --></p>
            </div>
          </li>
          <!-- Mensaje por el remitente -->
          <li class="right clearfix">
            <span class="chat-img pull-right">
              <img src="./assets/img/avatars/user2.jpg" alt="Avatar del Usuario"/>
            </span>
            <div id="chat_sender" class="chat-body clearfix">
                <div class="header">
                    <small class=" text-muted">
                      <span class="fa fa-clock-o"></span>
                      Hace 2 minutos
                    </small>
                    <strong class="pull-right primary-font">Nombre de usuario</strong>
                </div>
                <p><!-- Mensaje --></p>
            </div>
          </li>
      </ul>
  </div>
  <div class="panel-footer">
      <!-- Composer Box -->
      <div class="input-group">
          <input id="btn-input" type="text" class="form-control input-sm" placeholder="Escribe tu mensaje aquí..." />
          <span class="input-group-btn">
              <button class="btn btn-success btn-sm" id="btn-chat">Enviar</button>
          </span>
      </div>
  </div>
</div>
```

## Botones

Se han creado dos nuevos estilos para botones: `.btn-inverse` y `.btn-neutral`:

<blog-image src="docs/social/button-inverse-neutral.png" width="162" height="43" alt="Botón - Neutral Inverso"></blog-image>

Para una documentación más detallada, verifica [Bootstrap Buttons documentation](https://getbootstrap.com/docs/3.3/css/#buttons)

#### Grupo de Botones

<blog-image src="docs/social/buttons-group-large.png" width="295" height="53" alt="Grupo de Botones"></blog-image>

###### Código base

```html
<div class="btn-mini-group">
    <button type="button" class="btn btn-primary btn-lg">Botón grande</button>
    <div class="or or-lg"></div>
    <button type="button" class="btn btn-success btn-lg">Botón grande</button>
</div>
```

Más ejemplos [acá](#buttons)

#### Botones de icono

<blog-image src="docs/social/buttons-icon.png" width="831" height="85" alt="Botones de icono"></blog-image>

**Código base (icono a la izquierda)**

```html
<div class="btn-icon">
  <a href="#" class="btn btn-neutral" role="button">
    <i class="fa fa-tint fa-lg"></i>
    <div class="title">Ligero</div>
    <span class="label label-warning">6</span>
  </a>
</div>
```

**Código base (icono a la derecha)**

```html
<div class="btn-icon">
  <a href="#" class="btn btn-warning" role="button">
    <i class="fa fa-tint fa-lg"></i>
    <div class="title">naranja</div>
    <span class="label label-primary pull-right">26</span>
  </a>
</div>
```

##### Botones sociales

Los Botones sociales hecho en CSS puro basado en Bootstrap

<blog-image src="docs/social/social-buttons.jpg" width="372" height="591" alt="Botones sociales"></blog-image>

Más información en [el sitio web oficial](https://github.com/lipis/bootstrap-social)

#### Botones de lista

Los botones sociales realizados en CSS puro basado en Bootstrap

<blog-image src="docs/social/buttons-list.png" width="831" height="85" alt="Botones de lista"></blog-image>

**Código base**

```html
<div class="btn-list">
  <a class="btn btn-neutral" href="#">
    <i class="fa fa-link"></i>
    <span>Perfil del usuario<br>
    <small>Lorem ipsum dolor</small></span>
  </a>
</div>
<!-- O -->
<div class="btn-list">
  <a class="btn btn-danger" href="#">
    <i class="fa fa-tasks"></i>
    <span>Tareas diarias</span>
    <ul>
      <li>....</li>
    </ul>
  </a>
</div>
```

## Paneles

Puede encontrar la documentación oficial en [Bootstrap Panels documentation](https://getbootstrap.com/docs/3.3/components/#panels) 

**Se han realizado algunas mejoras** a los paneles:

### Cabecera personalizada

Un nuevo elemento en el encabezado del panel (`.panel-heading`) está disponible:`.panel-tools`. Puedes poner cualquier cosa ahí.

<blog-image src="docs/social/custom-header.jpg" width="748" height="281" alt="Cabecera Personalizada"></blog-image>

#### Plugin de Panel

Se ha generado un complemento para colapsar y eliminar paneles, puedes encontrarlo en

```
./assets/js/panels.js
```

Solo necesita indicar el contenedor de paneles

```javascript
$(function() {
    $('.main').panels();
});
```

El activador está definido por `data-option="collapse"` y activador de descarte (eliminar) por `data-dismiss="panel"`.

```html
<div class="panel panel-default">
    <div class="panel-heading">
      <div class="panel-title">
        <!-- title -->
      </div>
      <!-- BEGIN Plugin Elements -->
      <div class="panel-tools pull-right">
        <div class="icon-tools">
          <!--              -->
          <i class="fa fa-chevron-down" data-option="collapse"></i>
          <!--              -->
          <i class="fa fa-times" data-dismiss="panel"></i>
        </div>
      </div>
      <!-- END Plugin Elements -->
    </div>
    <div class="panel-body">
      <!-- Body -->
    </div>
</div>
```

## Pestañas y Acordeones

Documentación de Bootstrap [acá](https://getbootstrap.com/docs/3.3/components/#nav-tabs)

Documentación de Bootstrap Accordions [acá](https://getbootstrap.com/docs/3.3/javascript/#collapse)

#### Nuevos estilos de pestañas

Se ha generado un nuevo estilo de pestaña, solo usa `.nav-tabs-advanced`. 8 colores diferentes están disponibles: `.nav-tabs-default`, `.nav-tabs-primay`, `.nav-tabs-success`, `.nav-tabs-info`, `.nav-tabs-warning`, `.nav-tabs-danger`, `.nav-tabs-inverse` and `.nav-tabs-neutral`

<blog-image src="docs/social/tabs.jpg" width="424" height="460" alt="Pestañas"></blog-image>

## Cargadores de archivos

**Dos complementos** están disponibles:

### DropzoneJS

DropzoneJS es una biblioteca de código abierto que proporciona cargas de archivos del tipo "arrastrar y soltar" con vistas previas de imágenes.
[Sitio Web Oficial](https://github.com/enyo/dropzone)

### jQuery File Upload

Widget para jQuery de carga de archivos con selección de archivos múltiples, soporte para arrastrar y soltar, barras de progreso, validación e imágenes de vista previa, audio y video.
[Sitio Web Oficial](https://github.com/blueimp/jQuery-File-Upload)

## Editores WYSIWYG

**Tres complementos** están disponibles:

### Editor Bootstrap WYSIWYG5

Es un complemento de JavaScript que facilita la creación de editores wysiwyg simples y hermosos con la ayuda de wysihtml5 y Bootstrap 3
[Sitio Web Oficial](https://github.com/schnawel007/bootstrap3-wysihtml5)

### CKEditor

CKEditor es un editor de texto HTML listo para usar, diseñado para simplificar la creación de contenido web. Es un editor WYSIWYG que trae características comunes del procesador de textos directamente a sus páginas web.
[Sitio Web Oficial](https://github.com/ckeditor)

### Editor Markdown

Bootstrap-Markdown está diseñado para integrarse fácilmente con su proyecto bootstrap. Expone una API útil que te permite conectarte completamente al plugin
[Sitio Web Oficial](https://github.com/toopay/bootstrap-markdown)

## Paquetes de iconos

**Tres paquetes de iconos** están disponibles:

### Font Awesome

Font Awesome te ofrece iconos vectoriales escalables que se pueden personalizar al instante: tamaño, color, sombra paralela y cualquier cosa que se pueda hacer con el poder de CSS.
[Sitio Web Oficial](https://github.com/FortAwesome/Font-Awesome)

### Glyphicons - Versión gratuita

Incluye 200 glifos en formato de fuente del conjunto Glyphicon Halflings.
[Sitio Web Oficial](https://getbootstrap.com/docs/3.3/components/#glyphicons)

### Glyphicons - Versión Pro

GLYPHICONS es una biblioteca de iconos y símbolos monocromáticos preparados con precisión, creados con énfasis en la simplicidad y la orientación fácil.

La reventa de este activo está prohibida y la licencia no es transferible. Si desea utilizarlos como parte de su propio (otro) producto, debe comprar su propia licencia. [Sitio Web Oficial](https://glyphicons.com/)

## Tipografía

Hay buenos ejemplos de tipografía en el sitio web oficial de Bootstrap, vaya [allá](https://getbootstrap.com/docs/3.3/css/#type).
