//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT
import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { UIConstants, UIApplication, UIEvent } from 'aurelia-ui-framework';
import environment from '../environment';

@autoinject()
export class App {
  router: Router;
  constants = UIConstants;

  constructor(public app: UIApplication) { }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = UIConstants.Title;
    // config.options.root = environment.debug ? '/' : '/auf-demo-v4';
    // config.options.pushState = true;
    config.mapUnknownRoutes('src/home/unknown');
    config.map([
      {
        route: ['', 'home'], moduleId: './home/view', nav: false, auth: false, name: 'home'
      }, {
        route: '404', moduleId: './home/unknown', nav: false, auth: false, name: '404'
      }, {
        route: 'docs', moduleId: './home/unknown', title: 'Getting Started', nav: true, auth: false, name: 'docs', settings: { section: '' }
      }, {
        route: 'examples', moduleId: './samples/admin/view', title: 'Examples', nav: true, auth: false, name: 'examples', settings: { section: '' }
      }, {
        route: 'styles/*path', moduleId: './styles/view', title: 'Styling', nav: false, auth: false, name: 'styles'
      }, {
        route: 'styles:home', redirect: 'styles/home', title: 'Overview', nav: true, auth: false, settings: { section: 'Styling' }, name: 'styles:home'
      }, {
        route: 'styles:typo', redirect: 'styles/typo', title: 'Typography', nav: true, auth: false, settings: { section: 'Styling' }, name: 'styles:typo'
      }, {
        route: 'styles:glyphs', redirect: 'styles/glyphs', title: 'SVG Gylphs', nav: true, auth: false, settings: { section: 'Styling' }, name: 'styles:glyphs'
      }, {
        route: 'styles:flags', redirect: 'styles/flags', title: 'Flag Icons', nav: true, auth: false, settings: { section: 'Styling' }, name: 'styles:flags'
      }, {
        route: 'styles:colors', redirect: 'styles/colors', title: 'Color Charts', nav: true, auth: false, settings: { section: 'Styling' }, name: 'styles:colors'
      }, {
        route: 'viewport', moduleId: './core/viewport', title: 'Viewport', nav: true, auth: false, settings: { section: 'Core' }, name: 'core:viewport'
      }, {
        route: 'page', moduleId: './core/page', title: 'Page', nav: true, auth: false, settings: { section: 'Core' }, name: 'core:page'
      }, {
        route: 'grid', moduleId: './core/grid', title: 'Responsive Grid', nav: true, auth: false, settings: { section: 'Core' }, name: 'core:grid'
      }, {
        route: 'buttons', moduleId: './inputs/buttons', title: 'Buttons', nav: true, auth: false, settings: { section: 'Inputs' }, name: 'inputs:buttons'
      }, {
        route: 'text', moduleId: './inputs/text', title: 'Textual Inputs', nav: true, auth: false, settings: { section: 'Inputs', disabled: true }, name: 'inputs:text'
      }, {
        route: 'lists', moduleId: './inputs/lists', title: 'Lists & Selects', nav: true, auth: false, settings: { section: 'Inputs', disabled: true }, name: 'inputs:lists'
      }, {
        route: 'datetime', moduleId: './inputs/datetime', title: 'Date/Time', nav: true, auth: false, settings: { section: 'Inputs', disabled: true }, name: 'inputs:datetime'
      }, {
        route: 'options', moduleId: './inputs/options', title: 'Options & Switches', nav: true, auth: false, settings: { section: 'Inputs' }, name: 'inputs:options'
      }, {
        route: 'content', moduleId: './inputs/content', title: 'Content Editor', nav: true, auth: false, settings: { section: 'Inputs', disabled: true }, name: 'inputs:content'
      }, {
        route: 'validation', moduleId: './inputs/validation', title: 'Validations', nav: true, auth: false, settings: { section: 'Inputs', disabled: true }, name: 'inputs:validation'
      }, {
        route: 'drawer', moduleId: './components/drawer', title: 'Drawer', nav: true, auth: false, settings: { section: 'Components' }, name: 'comps:buttons'
      }, {
        route: 'sidebar', moduleId: './components/sidebar', title: 'Sidebar', nav: true, auth: false, settings: { section: 'Components' }, name: 'comps:buttons'
      }, {
        route: 'menu', moduleId: './components/menu', title: 'Menus', nav: true, auth: false, settings: { section: 'Components' }, name: 'comps:menu'
      }, {
        route: 'toolbar', moduleId: './components/toolbar', title: 'Toolbar', nav: true, auth: false, settings: { section: 'Components' }, name: 'comps:toolbar'
      }, {
        route: 'statsbar', moduleId: './components/statsbar', title: 'Statsbar', nav: true, auth: false, settings: { section: 'Components' }, name: 'comps:statsbar'
      }, {
        route: 'panels', moduleId: './components/panel', title: 'Panel/Cards', nav: true, auth: false, settings: { section: 'Components' }, name: 'comps:panels'
      }, {
        route: 'tabs', moduleId: './components/tabs', title: 'Tab Panel', nav: true, auth: false, settings: { section: 'Components', disabled: true }, name: 'comps:tabs'
      }, {
        route: 'tree', moduleId: './components/tree', title: 'Tree Panel', nav: true, auth: false, settings: { section: 'Components', disabled: true }, name: 'comps:tree'
      }, {
        route: 'datagrid', moduleId: './components/datagrid', title: 'Datagrid', nav: true, auth: false, settings: { section: 'Components', disabled: true }, name: 'comps:datagrid'
      }, {
        route: 'breadcrumbs', moduleId: './components/breadcrumbs', title: 'Breadcrumbs & Chips', nav: true, auth: false, settings: { section: 'Components', disabled: true }, name: 'comps:breadcrumbs'
      }, {
        route: 'dialogs', moduleId: './components/dialogs', title: 'Dialogs', nav: true, auth: false, settings: { section: 'Components', disabled: true }, name: 'comps:dialogs'
      }, {
        route: 'alerts', moduleId: './components/alerts', title: 'Alerts & Toasts', nav: true, auth: false, settings: { section: 'Components', disabled: true }, name: 'comps:alerts'
      }, {
        route: 'api/*path', moduleId: './api/view', title: 'API Classes', nav: false, auth: false, name: 'api'
      }, , {
        route: 'api:application', redirect: 'api/application', title: 'Application', nav: true, auth: false, settings: { section: 'API Classes' }, name: 'api:application'
      }, {
        route: 'api:http', redirect: 'api/http', title: 'Http Client', nav: true, auth: false, settings: { section: 'API Classes' }, name: 'api:http'
      }, {
        route: 'event', redirect: 'api/event', title: 'Event Manager', nav: true, auth: false, settings: { section: 'API Classes' }, name: 'api:event'
      }, {
        route: 'api:datamodel', redirect: 'api/model', title: 'Data Model', nav: true, auth: false, settings: { section: 'API Classes', disabled: true }, name: 'api:datamodel'
      }, {
        route: 'api:datasource', redirect: 'api/datasource', title: 'Data Source', nav: true, auth: false, settings: { section: 'API Classes', disabled: true }, name: 'api:datasource'
      }
    ]);
  }

  hideTitle = false;

  activate() {
    UIEvent.subscribe('hidetitle', b => this.hideTitle = b);
  }
}
