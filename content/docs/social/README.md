---
title: "Overview"
description: "Social is a responsive admin/frontend template compatible with Bootstrap v3 and latest jQuery versions, developed for your admin and frontend applications."
createdAt: "2015-03-09T00:00:00Z"
publishedAt: "2018-02-27T22:30:14Z"
updatedAt: "2020-07-25T23:27:50Z"
position: 1
category: "Getting started"
---

<docs-social-warning></docs-social-warning>

# Social Admin Template

Social is a responsive admin/frontend template compatible with Bootstrap v3 and latest jQuery versions. Social was developed for your backend (admin) and frontend applications. This template comes with easy to use components and a huge collection of plugins to custom some stuffs like dropdown menus, forms,buttons, tables, modal boxes, advanced charts and more, supported by all major browsers, tablets (IPads & others) and mobiles devices such as IPhone andAndroids Phones.

Please, if you found any bugs or have any suggestions, don't hesitate to let us know. We'll do our best to fix them as soon as possible.


## Internet Explorer & Firefox Issues

Internet Explorer 7 (and lower) and Firefox 3.x are **not supported**.


## Folders description

The folder structure of **Social** is very well organized, some of them are specific to certain things. There is a list of this folders below:

<div class="table-responsive">
  <table class="table table-striped table-bordered table-sm">
    <thead class="text-center">
      <tr>
        <td colspan="4"><strong>Folders</strong>
        </td>
        <td><strong>Description</strong>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MAIN FOLDER</td>
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
        <td>Customized styles for some plugins</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>theme</td>
        <td>Theme files</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>font</td>
        <td>&nbsp;</td>
        <td>A variety of icon fonts</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>img</td>
        <td>&nbsp;</td>
        <td>Images files</td>
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
        <td>JavaScript files used for the demos</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>layouts</td>
        <td>JavaScript files used in the pages layouts</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>plugins</td>
        <td>The source code for the used plugins</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>less</td>
        <td>&nbsp;</td>
        <td>Themes less files</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>demo</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>Live preview of the admin &amp; frontend demonstration</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>docs</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>Documentation</td>
      </tr>
    </tbody>
  </table>
</div>


## Premium Assets

The **Reselling** of this assets is **prohibited** and the license is non transferable. If you would like to use them as a part of another product of your own, you have to buy another license.

### GlyphiconsPRO

This template includes Glyphicons PRO, an Icons Set with a USD 59 value, but totally free with this purchase. 

You can find the stylesheets and the font icons files in:

```
./assets/css/glyphicons/
./assets/fonts/glyphicons/
```

### Isotope

An jQuery plugin for magical layouts 

Isotope isa free plugin but if you want to use it in commercial projects and applications, it is necessary to purchase a commercial license. More info [here](https://isotope.metafizzy.co/license.html).


## Basic layout

The sidebar content **must be placed** before the Topbar content.

```html
<html>
   <head>
      <!-- Head content -->
   </head>

   <body>
      <div class="wrapper">
          <aside class="social-sidebar">
             <!-- Sidebar content -->
          </aside>

          <header>
             <nav class="social-navbar">
                <!-- Topbar content -->
             </nav>
          </header>

          <div class="main">
             <!-- Content -->
          </div>
      </div>
   </body>
</html>
```

## Stylesheets

There are two important topics to consider:

- The admin & frontend designs have their own stylesheet file.
- The Style for the free version of the Bootstrap Glyphicons icon has been separated.

You need the include the core

`<link href="./assets/css/social.core.css" rel="stylesheet">` 

Depending on whether you are coding a frontend or backend (admin) page, you must choose the appropriate css file:

```html
<!-- Admin -->
<link href="./assets/css/social.admin.css" rel="stylesheet" />

<!-- Frontend -->
<link href="./assets/css/social.frontend.css"rel="stylesheet" />
```


## Themes

**Admin Templates** and **Frontend Templates** have **four themes** each. **The LESS files** are included so you can design your own themes easily.

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
