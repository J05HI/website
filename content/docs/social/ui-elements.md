---
title: "UI Elements"
description: "Reusable components built to provide alerts, modals, buttons, breadcrumbs, and much more."
created: "2015-03-09T00:00:00Z"
published: "2018-02-27T22:45:35Z"
modified: "2020-07-25T23:27:50Z"
position: 3
category: "Getting started"
---

<docs-social-warning></docs-social-warning>

Reusable components built to provide alerts, modals, buttons, breadcrumbs, and much more.

## General

### Modals

Modals are streamlined but flexible, dialog prompts with the minimum required functionality and smart defaults. 

For more detailed documentation check [Bootstrap Modals Official documentation](https://getbootstrap.com/docs/3.3/javascript/#modals)


#### PNotify

JavaScript notifications for Bootstrap, jQuery UI, and theWeb Notifications Draft. 

For more detailed documentation check [PNotify Official website](https://github.com/sciactive/pnotify)

### Tooltips

The tooltip or info tip (hint) is a common graphical user interface element. It is used in conjunction with a cursor, usually a pointer. The user hovers the pointer over an item, without clicking it, and a tooltip may appear—a small "hover box" with information about the item being hovered over. 

For more detailed documentation check [Bootstrap Tooltips Official documentation](https://getbootstrap.com/docs/3.3/javascript/#tooltips)

### Popovers

Add small overlays of content, like those on the iPad,to any element for housing secondary information. 

For more detailed documentation check [Bootstrap Popovers Official documentation](https://getbootstrap.com/docs/3.3/javascript/#popovers)

### Label & Badges

**Two new styles** has been added to labels and badges: `.label-inverse`, `.label-neutral`, `.badge-inverse` and `.badge-neutral`.

For more detailed documentation check  [Bootstrap Label & Badge documentation](https://getbootstrap.com/docs/3.3/components/#labels)

### Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. For more detailed documentation check [Bootstrap Alert documentation](https://getbootstrap.com/docs/3.3/javascript/#alerts).

### List group

List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.
For more detailed documentation check [Bootstrap List group documentation](https://getbootstrap.com/docs/3.3/components/#list-group)

### Breadcrumbs

Indicate the current page's location within a navigational hierarchy. 

**A new style** has been created for breadcrumbs, you need use the class `.breadcrumb-arrows`

<blog-image src="docs/social/new-breadcrumbs.png" width="826" height="51" alt="New Breadcrumbs"></blog-image>

You can choose different colors: `.breadcrumb-default`, `.breadcrumb-primary`, `.breadcrumb-success`, `.breadcrumb-info`, `.breadcrumb-warning`, `.breadcrumb-danger`, `.breadcrumb-inverse` and `.breadcrumb-neutral`

 For more detailed documentation check [Bootstrap Breadcrumbs documentation](https://getbootstrap.com/docs/3.3/components/#breadcrumbs)

#### Progress bars

Provide up-to-date feedback on the progress of a workflow or action with a simple and flexible progress bars. 

For more detailed documentation check [Bootstrap Progress bars documentation](https://getbootstrap.com/docs/3.3/components/#progress)

#### Feeds Panel

##### Activities Feed

<blog-image src="docs/social/activities-feed.jpg" width="515" height="359" alt="Activities Feed"></blog-image>

##### Users Feed

<blog-image src="docs/social/users-feed.jpg" width="515" height="359" alt="Users Feed"></blog-image>

**Base code (Activities Feed)**

```html
<div class="activities-feed">
    <ul class="list-group">
      ...
      <li class="list-group-item">
        <a href="#">
          <div class="label label-warning feed-icon">
            <i class="fa fa-warning"></i>
          </div>
          <span>System overload</span>
          <span class="label label-success">warning</span>
          <span class="feed-time"><em>2 minutes ago</em></span>
        </a>
      </li>
      ...
    </ul>
</div>
```

**Base code (Users Feed)**

```html
<div class="users-feed">
    <ul class="list-group">
      ... 
      <li class="list-group-item">
        <a href="#ignore">
          <img class="feed-avatar" src="./assets/img/avatars/user1_55.jpg" alt="John Doe">
          <span>Removing user</span>
          <span class="label label-success">completed</span>
          <span class="feed-time"><em>25 Sept 2013 3:45pm</em></span>
        </a>
      </li>
      ...
    </ul>
</div>
```

#### Chat Panel

<blog-image src="docs/social/chat-panel.jpg" width="514" height="360" alt="Chat Panel"></blog-image>

**Base code**

```html
<div class="panel panel-default panel-chat">
  <div class="panel-body">
      <ul class="scroll">
          <!-- Message by receiver -->
          <li class="left clearfix">
            <span class="chat-img pull-left">
              <img src="./assets/img/avatars/user1.jpg" alt="User Avatar"/>
            </span>
            <div class="chat-body clearfix">
                <div class="header">
                    <strong class="primary-font">User Name </strong>
                    <small class="pull-right text-muted">
                        <span class="fa fa-clock-o"></span>
                        2 mins ago
                    </small>
                </div>
                <p><!-- Message --></p>
            </div>
          </li>
          <!-- Message by sender -->
          <li class="right clearfix">
            <span class="chat-img pull-right">
              <img src="./assets/img/avatars/user2.jpg" alt="User Avatar"/>
            </span>
            <div id="chat_sender" class="chat-body clearfix">
                <div class="header">
                    <small class=" text-muted">
                      <span class="fa fa-clock-o"></span>
                      2 mins ago
                    </small>
                    <strong class="pull-right primary-font"> User Name </strong>
                </div>
                <p><!-- Message --></p>
            </div>
          </li>
      </ul>
  </div>
  <div class="panel-footer">
      <!-- Composer Box -->
      <div class="input-group">
          <input id="btn-input" type="text" class="form-control input-sm" placeholder="Type your message here..." />
          <span class="input-group-btn">
              <button class="btn btn-success btn-sm" id="btn-chat">
                Send
              </button>
          </span>
      </div>
  </div>
</div>
```

## Buttons

Two new styles has been created for buttons: `.btn-inverse` and `.btn-neutral`:

<blog-image src="docs/social/button-inverse-neutral.png" width="162" height="43" alt="Button - Inverse Neutral"></blog-image>

For more detailed documentation check [Bootstrap Buttons documentation](https://getbootstrap.com/docs/3.3/css/#buttons)

#### Group Buttons

<blog-image src="docs/social/buttons-group-large.png" width="295" height="53" alt="Group Buttons Large"></blog-image>

###### Base code

```html
<div class="btn-mini-group">
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <div class="or or-lg"></div>
    <button type="button" class="btn btn-success btn-lg">Large button</button>
</div>
```

More examples [here](#buttons)

#### Icon Buttons

<blog-image src="docs/social/buttons-icon.png" width="831" height="85" alt="Icon Buttons"></blog-image>

**Base code (icon left)**

```html
<div class="btn-icon">
  <a href="#" class="btn btn-neutral" role="button">
    <i class="fa fa-tint fa-lg"></i>
    <div class="title">Light</div>
    <span class="label label-warning">6</span>
  </a>
</div>
```

**Base code (icon right)**

```html
<div class="btn-icon">
  <a href="#" class="btn btn-warning" role="button">
    <i class="fa fa-tint fa-lg"></i>
    <div class="title">Orange</div>
    <span class="label label-primary pull-right">26</span>
  </a>
</div>
```

##### Social Buttons

Social Buttons made in pure CSS based on Bootstrap

<blog-image src="docs/social/social-buttons.jpg" width="372" height="591" alt="Social Buttons"></blog-image>

More information in [the official website](https://github.com/lipis/bootstrap-social)

#### List Buttons

Social Buttons made in pure CSS based on Bootstrap

<blog-image src="docs/social/buttons-list.png" width="831" height="85" alt="List Buttons"></blog-image>

**Base code**

```html
<div class="btn-list">
  <a class="btn btn-neutral" href="#">
    <i class="fa fa-link"></i>
    <span>User Profile<br>
    <small>Lorem ipsum dolor</small></span>
  </a>
</div>
<!-- OR -->
<div class="btn-list">
  <a class="btn btn-danger" href="#">
    <i class="fa fa-tasks"></i>
    <span>Daily Tasks</span>
    <ul>
      <li>....</li>
    </ul>
  </a>
</div>
```

## Panels

You can find the official documentation in the [Bootstrap Panels documentation](https://getbootstrap.com/docs/3.3/components/#panels) 

**Some improvements** have been made to Panels:

### Custom header

A new element in the panel heading (`.panel-heading`) is available:`.panel-tools`. You can put anything in there.

<blog-image src="docs/social/custom-header.jpg" width="748" height="281" alt="Custom Header"></blog-image>

#### Panel plugin

A plugin for collapsing and deleting panels have been generated, you can find it in

```
./assets/js/panels.js
```

You just need to indicate the panels container

```javascript
$(function() {
    $('.main').panels();
});
```

The collapse trigger is defined by `data-option="collapse"` and the dismiss (delete) trigger by `data-dismiss="panel"`.

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

## Tabs & Accordions

Bootstrap Tabs Documentation [here](https://getbootstrap.com/docs/3.3/components/#nav-tabs)

Bootstrap Accordions Documentation [here](https://getbootstrap.com/docs/3.3/javascript/#collapse)

#### New tabs styles

A new tab style has been generated, just use `.nav-tabs-advanced`. 8 different colors are available: `.nav-tabs-default`, `.nav-tabs-primay`, `.nav-tabs-success`, `.nav-tabs-info`, `.nav-tabs-warning`, `.nav-tabs-danger`, `.nav-tabs-inverse` and `.nav-tabs-neutral`

<blog-image src="docs/social/tabs.jpg" width="424" height="460" alt="Tabs"></blog-image>

## Files Uploaders

**Two plugins** are available:

### DropzoneJS

DropzoneJS is an open source library that provides drag 'n' drop file uploads with image previews. 
[Official Website](https://github.com/enyo/dropzone)

### jQuery File Upload

File Upload widget with multiple file selection, drag & drop support, progress bars, validation and preview images, audio and video for jQuery. 
[Official Website](https://github.com/blueimp/jQuery-File-Upload)

## WYSIWYG Editors

**Three plugins** are available:

### Bootstrap WYSIWYG5 Editor

It's a javascript plugin that makes it easy to create simple, beautiful wysiwyg editors with the help of wysihtml5 and Bootstrap 3 
[Official Website](https://github.com/schnawel007/bootstrap3-wysihtml5)

### CKEditor

CKEditor is a ready-for-use HTML text editor designed to simplify web content creation. It's a WYSIWYG editor that brings common word processor features directly to your web pages. 
[Official Website](https://github.com/ckeditor)

### Markdown Editor

Bootstrap-Markdown designed to be easily integrated with your bootstrap project. It exposes useful API that allow you to fully hook-in into the plugin 
[Official Website](https://github.com/toopay/bootstrap-markdown)

## Icons Packs

**Three icons packs** are available:

### Font Awesome

Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS. 
[Official Website](https://github.com/FortAwesome/Font-Awesome)

### Glyphicons - Free Version

Includes 200 glyphs in font format from the Glyphicon Halflings set. 
[Official Website](https://getbootstrap.com/docs/3.3/components/#glyphicons)

### Glyphicons - Pro Version

GLYPHICONS is a library of precisely prepared monochromatic icons and symbols, created with an emphasis on simplicity and easy orientation. 
Reselling of this asset is prohibited and the license is non transferable. If you would like to use them as a part of your own (another) product, you have to buy your own license.[Official Website](https://glyphicons.com/)

## Typography

There are good typography examples in Bootstrap official website, go [there](https://getbootstrap.com/docs/3.3/css/#type).
