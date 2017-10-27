//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT

import { Aurelia } from 'aurelia-framework';
import { UIConstants } from 'aurelia-ui-framework'
import environment from '../environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-ui-framework', config => {
      UIConstants['themes'] = 'light,dark,primary,secondary,info,danger,success,warning';
      UIConstants['colors'] = 'red,pink,violet,purple,indigo,blue,cyan,teal,green,lime,yellow,amber,orange,brown,gray';
    })
    .plugin('aurelia-animator-css')
    .feature('./src/resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
