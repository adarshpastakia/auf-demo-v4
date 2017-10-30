#### `ui-menubar`
Menubar to display horizontally aligned menus

* Events
  * `click.delegate`: Menu item clicked `$event.detail = menuItem.id`

---

#### `ui-menu`
Menubar to display vertically aligned menus

* Events
  * `click.delegate`: Menu item clicked `$event.detail = menuItem.id`

---

#### `ui-menu-group`
Menu groups

* Attributes
  * `label = ''`: Group label
  * `collapsible = bool`: Enable accordion style collapsing menu group
  * `collapsed = bool`: Menu group collapsed

---

#### `ui-menu-item`
Menu item

* Attributes
  * `id = ''`
  * `glyph = ''`: Menu icon
  * `class = ''`: Menu classname
  * `href = ''`: Make menu item a link
  * `active = bool`: Is active menu item
  * `disabled = bool`: Disable menu item

* Events
  * `click.trigger`: Menu item clicked `$event.detail = menuItem.id`
