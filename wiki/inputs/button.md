#### `ui-button`
Button input

* Attributes
  * `theme = ''`: Button theme
  * `glyph = ''`: Button glyph
  * `small`, `large`, `xlarge`: Button size attribute
  * `split`: Create a split button. __Note__ must provide dropdown
  * `split-theme = ''`: Split button theme
  * `split-glyph = ''`: Split button glyph
  * `dropdown.ref = ''`: Dropdown menu reference
  * `form.ref = ''`: Form menu reference

* Events
  * `click.trigger = ''`: Button click event
  * `menuopen.trigger = ''`: Event when dropdown/form shown
  * `menuhide.trigger = ''`: Event when dropdown/form hidden

---

#### `ui-button-group`
Button group container

* Attributes
  * `theme = ''`: Button theme
  * `small`, `large`, `xlarge`: Button size attribute
  * `vertical`: Vertical orientation
  * `toggle`: Create a toggle button group. __Note__ buttons must have a value
  * `value = ''`: Value of active button

* Events
  * `change.trigger = ''`: Toggle value change event
  * `menuopen.trigger = ''`: Event when dropdown/form shown
  * `menuhide.trigger = ''`: Event when dropdown/form hidden
