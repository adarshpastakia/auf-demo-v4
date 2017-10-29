//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT
import { autoinject } from 'aurelia-framework';
import { UIConstants } from 'aurelia-ui-framework';

@autoinject()
export class StylesHome {
  constructor() { }

  // aurelia hooks
  // canActivate(model) { return true; }
  // activate(model) { return true; }
  // bind(bindingContext) { }
  // attached() { }
  // detached() { }
  // unbind() { }
  // deactivate() { }
  // end aurelia hooks
  themes = UIConstants['themes'].split(',');
  colors = UIConstants['colors'].split(',');

  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>1234567890!@#$%^&*()';
}
