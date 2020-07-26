---
title: "Barra Lateral y de Navegación"
description: "Las barras laterales y las barras de navegación son componentes que sirven como navegación para su aplicación o sitio."
created: "2015-03-09T00:00:00Z"
published: "2018-02-27T22:43:39Z"
modified: "2020-07-25T23:27:50Z"
position: 2
category: "Primeros Pasos"
---

<docs-social-warning></docs-social-warning>

Las barras laterales y las barras de navegación son componentes que sirven como navegación para su aplicación o sitio.

## Barra Lateral

### Estructura basica

```html
<aside class="social-sidebar">
  <!-- Ahora tenemos el contenido de la barra lateral de Social -->
  <div class="social-sidebar-content">
      <!-- El nombre de usuario y la sección avatar -->
      <div class="user">
        <img class="avatar" width="25" height="25" src="./assets/img/avatars/avatar.png" alt="Julio Marquez">
        <span>Julio Marquez</span>
        <!-- Este es el activador del menú de configuración del usuario -->
        <i class="trigger-user-settings fa fa-user" data-toggle="dropdown"></i>
        <!-- EMPIEZA la sección de configuración del usuario -->
        <div class="user-settings">
        ...
        </div>
        <!-- TERMINA la sección de configuración del usuario -->
      </div>
      <!-- La sección del campo de búsqueda -->
      <div class="search-sidebar">
        ...
      </div>
      <!-- EMPIEZA la sección de contenido del menú -->
      <section class="menu">
        <div class="menu-content">
          ...
        </div>
      </section>
      <!-- TERMINA la sección de contenido del menú -->
  </div>
</aside>
```

### Ancho

La barra lateral se expande de forma predeterminada, pero si desea que se reduzca, solo agregue `.reduced-sidebar` a la etiqueta del cuerpo.

|                                       Reducida                                       |                                        Expandida                                       |
|:------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------:|
| <blog-image src="docs/social/reduced-sidebar.jpg" width="247" height="401" alt="Barra lateral reducida"></blog-image> | <blog-image src="docs/social/expanded-sidebar.jpg" width="248" height="402" alt="Barra lateral expandida"></blog-image> |

#### Accesos directos de configuración de usuario

<blog-image src="docs/social/usersettings-sidebar.jpg" width="439" height="361" alt="Configuración del usuario de la barra lateral"></blog-image>


**Estructura**

```html
<!-- EMPIEZA la sección de configuración del usuario -->
<div class="user-settings">
  <div class="arrow"></div>
  <!-- Título de configuración de usuario -->
  <h3 class="user-settings-title">Accesos directos de configuración</h3>
  <!-- Contenido de configuración del usuario -->
  <div class="user-settings-content">
    <!-- No es necesaria ninguna clase adicional para 
        indicar el contenido de la opción de configuración 
        del usuario en el menú -->
    <a href="#my-profile">
      <div class="icon">
        <i class="fa fa-user"></i>
      </div>
      <div class="title">Mi perfil</div>
      <div class="content">Ver tu perfil</div>
    </a>
    <a href="#view-messages">
      <div class="icon">
        <i class="fa fa-envelope-o"></i>
      </div>
      <div class="title">Ver mensajes</div>
      <div class="content">Tienes <strong>17</strong> nuevos mensajes</div>
    </a>
    <a href="#view-pending-tasks">
      <div class="icon">
        <i class="fa fa-tasks"></i>
      </div>
      <div class="title">Ver tareas</div>
      <div class="content">Tienes <strong>8</strong> tareas pendientes</div>
    </a>
  </div><!-- /Contenido de configuración del usuario -->
  <!-- Configuración de usuario Pie de página -->
  <div class="user-settings-footer">
    <a href="#more-settings">Ver más configuraciones</a>
  </div>
</div>
<!-- TERMINA la sección de configuración del usuario -->
```

### Formulario de búsqueda

<blog-image src="docs/social/searchform-sidebar.jpg" width="203" height="65" alt="Formulario de búsqueda de la barra lateral"></blog-image>


**Estructura**

```html
<div class="search-sidebar">  
  <form class="search-sidebar-form has-icon">    
    <label class="fa fa-search" for="sidebar-query"></label>    
    <input id="sidebar-query" type="text" class="search-query" placeholder="Buscar">  
  </form>
</div>
```

### Elementos de menú

Para una mejor comprensión de esta sección, vea el código fuente de este diseño de página `../demo/admin/layouts/reduced-sidebar.html`


## Plugin

Social Sidebar necesita el complemento de la barra lateral para funcionar, el se encuentra en `./assets/js/sidebar.js`. Este plugin es un **Plugin para jQuery**y ha sido optimizado a partir de la versión v1.x.

Uso básico

```javascript
$(function() {
  $(".social-sidebar").socialSidebar();
});
```

**Opciones**

```javascript
$(function() {
  $(".social-sidebar").socialSidebar(options);
});
```

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Nombre</th>
        <th style="width: 50px;">tipo</th>
        <th style="width: 250px;">valor por defecto</th>
        <th>descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>toggler</td>
        <td>cadena de texto</td>
        <td>.social-navbar .navbar-toggle</td>
        <td>El elemento que activa la barra lateral.</td>
      </tr>
      <tr>
        <td>position</td>
        <td>cadena de texto</td>
        <td>front</td>
        <td>Esto le permite elegir la posición de la barra lateral en un dispositivo móvil, <code>al lado</code> del contenido de la página o <code>al frente</code> del contenido de la página. Puedes elegir dos valores: siguiente y delantero <code>next</code> and <code>front</code>
        </td>
      </tr>
      <tr>
        <td>reducedWidth</td>
        <td>cadena de texto</td>
        <td>54px</td>
        <td>
        Una cadena que determina el ancho cuando se reduce la barra lateral. <strong class="text-danger">Si cambia esto, debe cambiar la duración de la transición en el código css para la barra lateral y la barra de navegación.</strong>
        </td>
      </tr>
      <tr>
        <td>expandedWidth</td>
        <td>cadena de texto</td>
        <td>200px</td>
        <td>Una cadena de texto que determina el ancho cuando la barra lateral se expande. <strong class="text-danger">Si cambia esto, debe cambiar la duración de la transición en el código css para la barra lateral y la barra de navegación.</strong>
        </td>
      </tr>
      <tr>
        <td>duration</td>
        <td>número</td>
        <td>200</td>
        <td>Un número que determina cuánto tiempo se ejecutará la animación. <strong class="text-danger">Si cambia esto, debe cambiar la duración de la transición en el código css para la barra lateral y la barra de navegación.</strong>
        </td>
      </tr>
    </tbody>
  </table>
</div>


### Posición (dispositivos pequeños)

Puede elegir dos posiciones diferentes para la barra lateral en dispositivos pequeños:

|                                               Frente                                               |                                             Lateral                                             |
|:--------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| <blog-image src="docs/social/front-sidebar.jpg" width="394" height="655" alt="Posición delantera de la barra lateral"></blog-image> | <blog-image src="docs/social/next-sidebar.jpg" width="394" height="656" alt="Posición Lateral de la Barra Lateral"></blog-image> |

## Barra de Navegación

**3 nuevos menús desplegables** se agregaron para las notificaciones, tareas y mensajes de los usuarios. Se usa el mismo concepto de [Bootstrap Navbar Dropdown Menus](https://getbootstrap.com/docs/3.3/components/#navbar) pero tienen su propia estructura simple. Antes de usar este nuevo menú desplegable, debes agregar `.social-navbar` al lado de la clase `navbar`.

## Notificación

<blog-image src="docs/social/navbar-notifications.jpg" width="261" height="391" alt="Notificaciones Navbar"></blog-image>

**Estructura**

```html
<nav class="navbar social-navbar">
  <div>
    <div class="nav-indicators">
      <ul class="nav navbar-nav navbar-right nav-indicators-body">
        <!-- BEGIN DROPDOWN NOTIFICATIONS -->
        <li class="dropdown nav-notifications open">
          <!-- BEGIN DROPDOWN TOGGLE -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
            <span class="badge">9</span>
            <i class="fa fa-warning fa-lg"></i>
          </a>
          <!-- TERMINA DROPDOWN TOGGLE -->
          <!-- BEGIN DROPDOWN MENU -->
          <ul class="dropdown-menu">
            <!-- BEGIN DROPDOWN HEADER -->
            <li class="nav-notifications-header">
              <a tabindex="-1" href="#">
                Tienes <strong>9</strong> nuevas notificaciones
              </a>
            </li>
            <!-- TERMINA DROPDOWN HEADER -->
            <!-- BEGIN NOTIFICATION ITEMS -->
            <li class="nav-notifications-body">
              ...
              <!-- BEGIN message -->
              <a href="#" class="text-info">
                <i class="fa fa-user"></i> Nuevo usuario
                <small class="pull-right">Justo ahora</small>
              </a>
              <!-- ÈND message -->
              ...
            </li>
            <!-- TERMINA NOTIFICATION ITEMS -->
            <!-- BEGIN DROPDOWN FOOTER -->
            <li class="nav-notifications-footer">
              <a href="#">Ver todos los mensajes
              </a>
            </li>
            <!-- TERMINA DROPDOWN FOOTER -->
          </ul>
          <!-- TERMINA DROPDOWN MENU -->
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Tareas

<blog-image src="docs/social/navbar-tasks.jpg" width="350" height="383" alt="Tareas Navbar"></blog-image>


**Estructura**

```html
<nav class="navbar social-navbar">
  <div>
    <div class="nav-indicators">
      <ul class="nav navbar-nav navbar-right nav-indicators-body">
        <!-- BEGIN DROPDOWN TASKS -->
        <li class="dropdown nav-tasks">
          <!-- BEGIN DROPDOWN TOGGLE -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
            <span class="badge">13</span>
            <i class="fa fa-tasks fa-lg"></i>
          </a>
          <!-- TERMINA DROPDOWN TOGGLE -->
          <!-- BEGIN DROPDOWN MENU -->
          <ul class="dropdown-menu">
            <!-- BEGIN DROPDOWN HEADER -->
            <li class="nav-tasks-header">
              <a href="#">Tienes <strong>13</strong> tareas en progreso</a>
            </li>
            <!-- TERMINA DROPDOWN HEADER -->
            <!-- BEGIN DROPDOWN ITEMS -->
            <li class="nav-tasks-body">
              ...
              <!-- BEGIN task -->
              <a href="#">
                Preparar informe
                <span class="pull-right">30%</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                    <span class="sr-only">30% Completo</span>
                  </div>
                </div>
              </a>
              <!-- TERMINA task -->
              ...
            </li>
            <!-- TERMINA DROPDOWN ITEMS -->
            <!-- BEGIN DROPDOWN FOOTER -->
            <li class="nav-tasks-footer">
              <a href="#">Ver todas las tareas
              </a>
            </li>
            <!-- TERMINA DROPDOWN FOOTER -->
          </ul>
          <!-- TERMINA DROPDOWN MENU -->
        </li>
      </ul>
    </div>
  </div>
</nav>
```

#### Mensajes

<blog-image src="docs/social/navbar-msgs.jpg" width="280" height="398" alt="Mensajes de Navbar"></blog-image>

**Estructura**

```html
 <nav class="navbar social-navbar">
  <div>
    <div class="nav-indicators">
      <ul class="nav navbar-nav navbar-right nav-indicators-body">
        <!-- BEGIN DROPDOWN MESSAGES -->
        <li class="dropdown nav-messages">
          <!-- BEGIN DROPDOWN TOGGLE -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
            <span class="badge">8</span>
            <i class="fa fa-envelope fa-lg"></i>
          </a>
          <!-- TERMINA DROPDOWN TOGGLE -->
          <!-- BEGIN DROPDOWN MENU -->
          <ul class="dropdown-menu">
            <!-- BEGIN DROPDOWN HEADER -->
            <li class="nav-messages-header">
              <a tabindex="-1" href="#">Tienes <strong>8</strong> nuevos mensajes</a>
            </li>
            <!-- TERMINA DROPDOWN HEADER -->
            <!-- BEGIN DROPDOWN ITEMS -->
            <li class="nav-messages-body">
              ...
              <!-- BEGIN Message -->
              <a href="#">
                  <img class="avatar" src="./assets/img/avatars/user1_55.jpg" alt="User">
                  <div class="title">
                    <small class="pull-right">Justo ahora</small>
                    <strong>Yadra Abels</strong>
                  </div>
                  <div class="message">
                    Lorem ipsum dolor sit amet, consectetur...
                  </div>
              </a>
              <!-- TERMINA Message -->
              ...
            </li>
            <!-- TERMINA DROPDOWN ITEMS -->
            <!-- BEGIN DROPDOWN FOOTER -->
            <li class="nav-messages-footer">
              <a tabindex="-1" href="#"> Ver todos los mensajes</a>
            </li>
            <!-- TERMINA DROPDOWN FOOTER -->
          </ul>
          <!-- TERMINA DROPDOWN MENU -->
        </li>
      </ul>
    </div>
  </div>
</nav>
```
