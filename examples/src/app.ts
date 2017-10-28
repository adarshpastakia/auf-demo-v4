//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT
import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { UIConstants } from 'aurelia-ui-framework';
import environment from '../environment';

@autoinject()
export class App {
  router: Router;
  constants = UIConstants;

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = UIConstants.Title;
    config.options.root = environment.debug ? '/' : '/auf-demo-v4';
    config.options.pushState = true;
    config.mapUnknownRoutes('src/home/unknown');
    config.map([
      {
        route: ['', 'home'], moduleId: './home/view', nav: false, auth: false, name: 'home'
      }, {
        route: '404', moduleId: './home/unknown', nav: false, auth: false, name: '404'
      }, {
        route: 'viewport', moduleId: './core/viewport', title: 'Viewport', nav: true, auth: false, settings: { section: 'Core' }, name: 'core:viewport'
      }, {
        route: 'page', moduleId: './core/page', title: 'Page', nav: true, auth: false, settings: { section: 'Core' }, name: 'core:page'
      }, {
        route: 'grid', moduleId: './core/grid', title: 'Responsive Grid', nav: true, auth: false, settings: { section: 'Core' }, name: 'core:grid'
      }, {
        route: 'buttons', moduleId: './inputs/buttons', title: 'Buttons', nav: true, auth: false, settings: { section: 'Inputs' }, name: 'inputs:buttons'
      }
    ]);
    console.log(this.router);
  }

}
