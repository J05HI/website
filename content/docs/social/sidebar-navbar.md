---
title: "Sidebar & Navbar"
description: "Sidebars & Navbars are responsive meta components that serve as navigation for your application or site."
created: "2015-03-09T00:00:00Z"
published: "2018-02-27T22:43:39Z"
modified: "2020-07-25T23:27:50Z"
position: 2
category: "Getting started"
---

<docs-social-warning></docs-social-warning>

Sidebars & Navbars are responsive meta components that serve as navigation for your application or site.

## Sidebar

### Basic structure

```html
<aside class="social-sidebar">
  <!-- Now we have the social sidebar content -->
  <div class="social-sidebar-content">
      <!-- The user name and avatar section -->
      <div class="user">
        <img class="avatar" width="25" height="25" src="./assets/img/avatars/avatar.png" alt="Julio Marquez">
        <span>Julio Marquez</span>
        <!-- This is the trigger for the user settings menu -->
        <i class="trigger-user-settings fa fa-user" data-toggle="dropdown"></i>
        <!-- START the user settings section -->
        <div class="user-settings">
        ...
        </div>
        <!-- END the user settings section -->
      </div>
      <!-- The search field section -->
      <div class="search-sidebar">
        ...
      </div>
      <!-- START the menu content section -->
      <section class="menu">
        <div class="menu-content">
          ...
        </div>
      </section>
      <!-- END the menu content section -->
  </div>
</aside>
```

### Width

The sidebar is expanded by default but if you want it reduced, just add `.reduced-sidebar` to the body tag.


#### Reduced

<blog-image src="docs/social/reduced-sidebar.jpg" width="247" height="401" alt="Reduced Sidebar"></blog-image>

#### Expanded

<blog-image src="docs/social/expanded-sidebar.jpg" width="248" height="402" alt="Expanded Sidebar"></blog-image>


#### User Settings shortcuts

<blog-image src="docs/social/usersettings-sidebar.jpg" width="439" height="361" alt="Sidebar User Settings"></blog-image>


**Structure**

```html
<!-- START the user settings section -->
<div class="user-settings">
  <div class="arrow"></div>
  <!-- User Setting title -->
  <h3 class="user-settings-title">Settings shortcuts</h3>
  <!-- User Setting Content -->
  <div class="user-settings-content">
    <!-- It's not necessary any extra class to indicate
         the content of user setting option in the menu -->
    <a href="#my-profile">
      <div class="icon">
        <i class="fa fa-user"></i>
      </div>
      <div class="title">My Profile</div>
      <div class="content">View your profile</div>
    </a>
    <a href="#view-messages">
      <div class="icon">
        <i class="fa fa-envelope-o"></i>
      </div>
      <div class="title">View Messages</div>
      <div class="content">You have <strong>17</strong> new messages</div>
    </a>
    <a href="#view-pending-tasks">
      <div class="icon">
        <i class="fa fa-tasks"></i>
      </div>
      <div class="title">View Tasks</div>
      <div class="content">You have <strong>8</strong> pending tasks</div>
    </a>
  </div><!-- /User Setting Content -->
  <!-- User settings Footer -->
  <div class="user-settings-footer">
    <a href="#more-settings">See more settings</a>
  </div>
</div>
<!-- END the user settings section -->
```

### Search form

<blog-image src="docs/social/searchform-sidebar.jpg" width="203" height="65" alt="Sidebar Search Form"></blog-image>

**Structure**

```html
<div class="search-sidebar">  
  <form class="search-sidebar-form has-icon">    
    <label class="fa fa-search" for="sidebar-query"></label>    
    <input id="sidebar-query" type="text" class="search-query" placeholder="Search">  
  </form>
</div>
```

### Menu Items

For a better understanding of this section, view the source code of this page layout `../demo/admin/layouts/reduced-sidebar.html`


## Plugin

Social Sidebar needs the sidebar plugin for working, it can be found in `./assets/js/sidebar.js`. This plugin is a **jQuery Plugin** and has been optimized from version v1.x.

Basic use

```javascript
$(function() {
  $(".social-sidebar").socialSidebar();
});
```

**Options**

```javascript
$(function() {
  $(".social-sidebar").socialSidebar(options);
});
```

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 250px;">default</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>toggler</td>
        <td>string</td>
        <td>.social-navbar .navbar-toggle</td>
        <td>The element that trigger the sidebar.</td>
      </tr>
      <tr>
        <td>position</td>
        <td>string</td>
        <td>front</td>
        <td>This let you choose the position of the sidebar in a mobile devices, <code>next</code> to the page content or in <code>front</code> of the page content. You can chose two values: <code>next</code> and <code>front</code>
        </td>
      </tr>
      <tr>
        <td>reducedWidth</td>
        <td>string</td>
        <td>54px</td>
        <td>A string determining the width when the sidebar is reduced. <strong class="text-danger">If you change this you have to change the transition duration in the css code for the sidebar and navbar.</strong>
        </td>
      </tr>
      <tr>
        <td>expandedWidth</td>
        <td>string</td>
        <td>200px</td>
        <td>A string determining the width when the sidebar is expanded. <strong class="text-danger">If you change this you have to change the transition duration in the css code for the sidebar and navbar.</strong>
        </td>
      </tr>
      <tr>
        <td>duration</td>
        <td>number</td>
        <td>200</td>
        <td>A number determining how long the animation will run. <strong class="text-danger">If you change this you have to change the transition duration in the css code for the sidebar and navbar.</strong>
        </td>
      </tr>
    </tbody>
  </table>
</div>


### Position (small devices)

You can choose two different position for the sidebar on small devices:

|                                        Front                                       |                                       Next                                       |
|:----------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------:|
| <blog-image src="docs/social/front-sidebar.jpg" width="394" height="655" alt="Sidebar Front Position"></blog-image>  | <blog-image src="docs/social/next-sidebar.jpg" width="394" height="655" alt="Sidebar Next Position"></blog-image> |

## Navbar

**3 new dropdowns menus** were added for notifications, tasks and users messages. It is used the same concept of  [Bootstrap Navbar Dropdown Menus](https://getbootstrap.com/docs/3.3/components/#navbar) but they have their own simple structure. Before using this new dropdowns menus, you must add `.social-navbar` next to the `navbar` class.

## Notification

<blog-image src="docs/social/navbar-notifications.jpg" width="261" height="391" alt="Navbar Notifications"></blog-image>

**Structure**

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
          <!-- END DROPDOWN TOGGLE -->
          <!-- BEGIN DROPDOWN MENU -->
          <ul class="dropdown-menu">
            <!-- BEGIN DROPDOWN HEADER -->
            <li class="nav-notifications-header">
              <a tabindex="-1" href="#">
                You have <strong>9</strong> new notifications
              </a>
            </li>
            <!-- END DROPDOWN HEADER -->
            <!-- BEGIN NOTIFICATION ITEMS -->
            <li class="nav-notifications-body">
              ...
              <!-- BEGIN message -->
              <a href="#" class="text-info">
                <i class="fa fa-user"></i> New User
                <small class="pull-right">Just Now</small>
              </a>
              <!-- ÈND message -->
              ...
            </li>
            <!-- END NOTIFICATION ITEMS -->
            <!-- BEGIN DROPDOWN FOOTER -->
            <li class="nav-notifications-footer">
              <a href="#">View all messages
              </a>
            </li>
            <!-- END DROPDOWN FOOTER -->
          </ul>
          <!-- END DROPDOWN MENU -->
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Tasks

<blog-image src="docs/social/navbar-tasks.jpg" width="350" height="383" alt="Navbar Tasks"></blog-image>

**Structure**

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
          <!-- END DROPDOWN TOGGLE -->
          <!-- BEGIN DROPDOWN MENU -->
          <ul class="dropdown-menu">
            <!-- BEGIN DROPDOWN HEADER -->
            <li class="nav-tasks-header">
              <a href="#">You have <strong>13</strong> tasks in progress</a>
            </li>
            <!-- END DROPDOWN HEADER -->
            <!-- BEGIN DROPDOWN ITEMS -->
            <li class="nav-tasks-body">
              ...
              <!-- BEGIN task -->
              <a href="#">
                Prepare Report
                <span class="pull-right">30%</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                    <span class="sr-only">30% Complete</span>
                  </div>
                </div>
              </a>
              <!-- END task -->
              ...
            </li>
            <!-- END DROPDOWN ITEMS -->
            <!-- BEGIN DROPDOWN FOOTER -->
            <li class="nav-tasks-footer">
              <a href="#">View all tasks
              </a>
            </li>
            <!-- END DROPDOWN FOOTER -->
          </ul>
          <!-- END DROPDOWN MENU -->
        </li>
      </ul>
    </div>
  </div>
</nav>
```

#### Messages

<blog-image src="docs/social/navbar-msgs.jpg" width="280" height="398" alt="Navbar Messages"></blog-image>


**Structure**

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
          <!-- END DROPDOWN TOGGLE -->
          <!-- BEGIN DROPDOWN MENU -->
          <ul class="dropdown-menu">
            <!-- BEGIN DROPDOWN HEADER -->
            <li class="nav-messages-header">
              <a tabindex="-1" href="#">You have <strong>8</strong> new messages</a>
            </li>
            <!-- END DROPDOWN HEADER -->
            <!-- BEGIN DROPDOWN ITEMS -->
            <li class="nav-messages-body">
              ...
              <!-- BEGIN Message -->
              <a href="#">
                  <img class="avatar" src="./assets/img/avatars/user1_55.jpg" alt="User">
                  <div class="title">
                    <small class="pull-right">Just Now</small>
                    <strong>Yadra Abels</strong>
                  </div>
                  <div class="message">
                    Lorem ipsum dolor sit amet, consectetur...
                  </div>
              </a>
              <!-- END Message -->
              ...
            </li>
            <!-- END DROPDOWN ITEMS -->
            <!-- BEGIN DROPDOWN FOOTER -->
            <li class="nav-messages-footer">
              <a tabindex="-1" href="#">View all messages</a>
            </li>
            <!-- END DROPDOWN FOOTER -->
          </ul>
          <!-- END DROPDOWN MENU -->
        </li>
      </ul>
    </div>
  </div>
</nav>
```
