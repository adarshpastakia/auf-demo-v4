define("environment",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={debug:!1,testing:!1}});var __decorate=this&&this.__decorate||function(e,t,i,o){var n,u=arguments.length,r=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(u<3?n(r):u>3?n(t,i,r):n(t,i))||r);return u>3&&r&&Object.defineProperty(t,i,r),r};define("src/app",["require","exports","aurelia-framework","aurelia-ui-framework"],function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.constants=o.UIConstants}return e.prototype.configureRouter=function(e,t){this.router=t,e.title=o.UIConstants.Title,e.options.root="/auf-demo-v4",e.options.pushState=!0,e.mapUnknownRoutes("src/home/unknown"),e.map([{route:["","home"],moduleId:"./home/view",nav:!1,auth:!1,name:"home"},{route:"404",moduleId:"./home/unknown",nav:!1,auth:!1,name:"404"},{route:"viewport",moduleId:"./core/viewport",title:"Viewport",nav:!0,auth:!1,settings:{section:"Core"},name:"core:viewport"},{route:"page",moduleId:"./core/page",title:"Page",nav:!0,auth:!1,settings:{section:"Core"},name:"core:page"},{route:"buttons",moduleId:"./inputs/buttons",title:"Buttons",nav:!0,auth:!1,settings:{section:"Inputs"},name:"inputs:buttons"}]),console.log(this.router)},e=__decorate([i.autoinject()],e)}();t.App=n}),define("src/main",["require","exports","aurelia-ui-framework","../environment"],function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configure=function(e){e.use.standardConfiguration().plugin("aurelia-ui-framework",function(e){i.UIConstants.themes="light,dark,primary,secondary,info,danger,success,warning",i.UIConstants.colors="red,pink,violet,purple,indigo,blue,cyan,teal,green,lime,yellow,amber,orange,brown,gray"}).plugin("aurelia-animator-css").feature("./src/resources"),o.default.debug&&e.use.developmentLogging(),o.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}});var __decorate=this&&this.__decorate||function(e,t,i,o){var n,u=arguments.length,r=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(u<3?n(r):u>3?n(t,i,r):n(t,i))||r);return u>3&&r&&Object.defineProperty(t,i,r),r},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};define("src/core/page",["require","exports","aurelia-framework","aurelia-ui-framework"],function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.httpClient=e,this.wiki="",this.source=""}return e.prototype.activate=function(){var e=this;this.httpClient.text("wiki/core/page.md").then(function(t){return e.wiki=t}),this.httpClient.text("wiki/core/page.example.md").then(function(t){return e.source=t})},e=__decorate([i.autoinject(),__metadata("design:paramtypes",[o.UIHttpService])],e)}();t.Page=n});var __decorate=this&&this.__decorate||function(e,t,i,o){var n,u=arguments.length,r=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(u<3?n(r):u>3?n(t,i,r):n(t,i))||r);return u>3&&r&&Object.defineProperty(t,i,r),r},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};define("src/core/viewport",["require","exports","aurelia-framework","aurelia-ui-framework"],function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.httpClient=e,this.wiki="",this.source=""}return e.prototype.activate=function(){var e=this;this.httpClient.text("wiki/core/viewport.md").then(function(t){return e.wiki=t}),this.httpClient.text("wiki/core/viewport.example.md").then(function(t){return e.source=t})},e=__decorate([i.autoinject(),__metadata("design:paramtypes",[o.UIHttpService])],e)}();t.Viewport=n});var __decorate=this&&this.__decorate||function(e,t,i,o){var n,u=arguments.length,r=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(u<3?n(r):u>3?n(t,i,r):n(t,i))||r);return u>3&&r&&Object.defineProperty(t,i,r),r};define("src/home/unknown",["require","exports","aurelia-framework"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e=__decorate([i.inlineView('<template><div class="page-404 ui-container">\n  <h1 class="ui-display-1">TODO</h1>\n  <h6 class="ui-text-muted ui-font-big">Due to work schedule certain sections are pending...will get to it soon</h6>\n  <hr/><a href="javascript:history.back()" class="ui-font-large">&laquo; Go back</a>\n  </div></template>')],e)}();t.View404=o}),define("src/home/view",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){return function(){}}();t.Home=i});var __decorate=this&&this.__decorate||function(e,t,i,o){var n,u=arguments.length,r=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(u<3?n(r):u>3?n(t,i,r):n(t,i))||r);return u>3&&r&&Object.defineProperty(t,i,r),r},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};define("src/inputs/buttons",["require","exports","aurelia-framework","aurelia-ui-framework"],function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.httpClient=e,this.wiki="",this.source="",this.themes=o.UIConstants.themes.split(","),this.colors=o.UIConstants.colors.split(",")}return e.prototype.activate=function(){var e=this;this.httpClient.text("wiki/inputs/button.md").then(function(t){return e.wiki=t}),this.httpClient.text("wiki/inputs/button.example.md").then(function(t){return e.source=t})},e=__decorate([i.autoinject(),__metadata("design:paramtypes",[o.UIHttpService])],e)}();t.Buttons=n}),define("src/resources/index",["require","exports","aurelia-pal"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configure=function(e){e.globalResources(i.PLATFORM.moduleName("./elements/container"))}});var __decorate=this&&this.__decorate||function(e,t,i,o){var n,u=arguments.length,r=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(u<3?n(r):u>3?n(t,i,r):n(t,i))||r);return u>3&&r&&Object.defineProperty(t,i,r),r},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};define("src/resources/elements/container",["require","exports","aurelia-framework","kramed"],function(e,t,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.source="",this.wiki="",this.currentView=0,this.elSource={},this.elWiki={}}return e.prototype.attached=function(){this.elSource.innerHTML=this.renderHtml(this.source),this.elWiki.innerHTML=this.renderHtml(this.wiki)},e.prototype.sourceChanged=function(e){this.elSource.innerHTML=this.renderHtml(e)},e.prototype.wikiChanged=function(e){this.elWiki.innerHTML=this.renderHtml(e)},e.prototype.renderHtml=function(e){var t=new o.Renderer;return t.code=function(e,t){return e=e.replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&"),window.hljs?(window.hljs.configure({useBR:!0,tabReplace:"    "}),'<pre><code class="hljs '+t+" lang-"+t+'">'+window.hljs.highlightAuto(e,[t]).value+"</code></pre>"):'<pre><code class="hljs '+t+" lang-"+t+'"><xmp>'+e+"</xmp></code></pre>"},o(e,{gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,renderer:t})},__decorate([i.bindable(),__metadata("design:type",Object)],e.prototype,"pageTitle",void 0),__decorate([i.bindable(),__metadata("design:type",Object)],e.prototype,"source",void 0),__decorate([i.bindable(),__metadata("design:type",Object)],e.prototype,"wiki",void 0),e=__decorate([i.containerless(),i.customElement("x-container")],e)}();t.Container=n}),define("text!src/app.html",["module"],function(e){e.exports="<template><compose view=../glyphs/icomoon.svg></compose><compose view=../glyphs/hawcons-linear.svg></compose><compose view=../glyphs/hawcons-filled.svg></compose><ui-drawer ref=appDrawer close-on-click><ul><li><a href=/viewport>Viewport</a></li><li><a href=/page>Page</a></li><li><a href=/grid>Responsive Grid</a></li><li><a href=/buttons>Buttons</a></li></ul></ui-drawer><ui-viewport><div class=x-fixed-banner>V4 Work in Progress!!</div><ui-app-header><ui-drawer-toggle drawer.bind=appDrawer></ui-drawer-toggle><ui-app-title class=\"${router.currentInstruction.fragment=='/'?'x-hide':''}\" src=examples/images/logo.png>${constants.Title}</ui-app-title></ui-app-header><ui-router-view></ui-router-view><ui-app-footer><span>&copy; 2017, Adarsh Pastakia<br><small>Version ${constants.Version}</small></span><div><a class=\"ui-link ui-hover-warning\" href=# css.bind=\"{fontSize: '2rem'}\"><ui-glyph glyph=icon-moon-stackoverflow></ui-glyph></a><span css.bind=\"{fontSize: '2rem'}\">&nbsp;&nbsp;</span><a class=\"ui-link ui-hover-info\" href=# css.bind=\"{fontSize: '2rem'}\"><ui-glyph glyph=icon-moon-github></ui-glyph></a><span css.bind=\"{fontSize: '2rem'}\">&nbsp;&nbsp;</span></div></ui-app-footer></ui-viewport></template>"}),define("text!src/home/view.html",["module"],function(e){e.exports='<template><ui-page animate class=x-home-page><ui-content scroll><div class="x-banner ui-bg-primary"><ui-container padded><h1 class="ui-display-1 ui-text-center"><img src=examples/images/logo.png height=72 align=absmiddle> Aurelia UI Framework</h1><hr><h1 class="ui-display-3 ui-text-center ui-text-light">A bespoke UI Framework for business applications</h1></ui-container></div><div class="x-banner ui-bg-secondary"><ui-container padded><h4 class=ui-text-center>Features</h4><br><ui-row class="ui-text-start ui-pad-h" middle><ui-column size="md-6 sm-12" class="ui-row ui-row-middle"><ui-column padded auto><img align=left src=examples/images/feature-layout.svg width=64></ui-column><ui-column padded fill>Layout elements for creating pages with drawers, sidebars, tabs</ui-column></ui-column><ui-divider></ui-divider><ui-column size="md-6 sm-12" class="ui-row ui-row-middle"><ui-column padded auto><img align=left src=examples/images/feature-input.svg width=64></ui-column><ui-column padded fill>Custom input elements for dates, phone numbers and markdown content</ui-column></ui-column></ui-row><ui-row class="ui-text-start ui-pad-h" middle><ui-column size="md-6 sm-12" class="ui-row ui-row-middle"><ui-column padded auto><img align=left src=examples/images/feature-grid.svg width=64></ui-column><ui-column padded fill>Functional datagrid with sorting and resizeable column</ui-column></ui-column><ui-divider></ui-divider><ui-column size="md-6 sm-12" class="ui-row ui-row-middle"><ui-column padded auto><img align=left src=examples/images/feature-theme.svg width=64></ui-column><ui-column padded fill>Completely themeable</ui-column></ui-column></ui-row><br><br><ui-row center middle><a href=#/start class=big-button><span t=home:start.title>Getting Started</span></a><a href=#/example class=big-button badge-danger=NEW tooltip=message:Examples><span t=home:examples.title>Examples</span></a><a href=https://github.com/adarshpastakia/aurelia-ui-framework/wiki target=_blank class="noarrow big-button"><span>Help Wiki</span></a></ui-row></ui-container></div><div class=x-body><ui-container padded><div class=ui-pad-all><h4 class=ui-text-primary>Core Components</h4></div><ui-row><ui-column padded auto><a href=/viewport>Viewport</a></ui-column><ui-column padded auto><a href=/page>Page</a></ui-column><ui-column padded auto><a href=/grid>Responsive Grid</a></ui-column></ui-row><hr><div class=ui-pad-all><h4 class=ui-text-primary>Input Elements</h4></div><ui-row><ui-column padded auto><a href=/buttons>Buttons</a></ui-column><ui-column padded auto><a href=/inputs>Textual Inputs</a></ui-column><ui-column padded auto><a href=/lists>Lists &amp; Selects</a></ui-column></ui-row><hr><div class=ui-pad-all><h4 class=ui-text-primary>Components</h4></div><ui-row><ui-column padded auto><a href=/drawer>Drawer</a></ui-column><ui-column padded auto><a href=/sidebar>Sidebar</a></ui-column><ui-column padded auto><a href=/menu>Menus</a></ui-column></ui-row></ui-container></div></ui-content></ui-page></template>'}),define("text!src/core/page.html",["module"],function(e){e.exports='<template><ui-page animate><x-container source.bind=source wiki.bind=wiki page-title=UIPage><h4 class=x-title>Simple Page</h4><div class=x-view><ui-page page-title="My Title"><ui-content padded scroll><h6>Page content goes here</h6></ui-content></ui-page></div></x-container></ui-page></template>'}),define("text!src/core/viewport.html",["module"],function(e){e.exports="<template><ui-page animate><x-container source.bind=source wiki.bind=wiki page-title=UIViewport><div class=x-view><div class=ui-viewport css.bind=\"{position: 'relative', width:'100%', height:'100%'}\"><ui-app-header><ui-app-title>Application</ui-app-title></ui-app-header><ui-content padded><h6>Router View goes here</h6></ui-content><ui-app-footer><span>&copy; 2017, Company</span></ui-app-footer></div></div></x-container></ui-page></template>"}),define("text!src/inputs/buttons.html",["module"],function(e){e.exports='<template><ui-page animate><x-container source.bind=source wiki.bind=wiki page-title=UIButton><h4 class=x-title>Themes</h4><ui-row class=ui-titlecase><ui-button width=8em repeat.for="c of themes" theme.bind=c>${c}</ui-button></ui-row><h6 class=x-title>Extras</h6><ui-row class=ui-titlecase><ui-button width=8em repeat.for="c of colors" theme.bind=c>${c}</ui-button></ui-row><hr><h4 class=x-title>Variations</h4><h6 class=x-title>Sizes</h6><ui-row bottom class=x-cards><ui-column><ui-button small>Click</ui-button><p>small</p></ui-column><ui-column><ui-button normal>Click</ui-button><p>normal</p></ui-column><ui-column><ui-button large>Click</ui-button><p>large</p></ui-column><ui-column><ui-button xlarge>Click</ui-button><p>xlarge</p></ui-column></ui-row><h6 class=x-title>Icons</h6><ui-row middle class=x-cards><ui-column><ui-button glyph=glyph-icon-page></ui-button><p>only glyph</p></ui-column><ui-column><ui-button glyph=glyph-icon-page>Click</ui-button><p>glyph</p></ui-column><ui-column><ui-button glyph=glyph-icon-page>Click</ui-button><p>icon-start</p></ui-column><ui-column><ui-button glyph=glyph-icon-page icon-end>Click</ui-button><p>icon-end</p></ui-column><ui-column><ui-button glyph=glyph-icon-page icon-hilight>Click</ui-button><p>icon-hilight</p></ui-column><ui-column><ui-button glyph=glyph-icon-page icon-hilight icon-end>Click</ui-button><p>icon-hilight</p></ui-column><ui-column><ui-button glyph=glyph-icon-page icon-top>Click</ui-button><p>icon-top</p></ui-column></ui-row><h6 class=x-title>Other Variants</h6><ui-row middle class=x-cards><ui-column><ui-button glyph=glyph-icon-page dropdown=s theme=indigo split-theme=gray>Click</ui-button><p>dropdown</p></ui-column><ui-column><ui-button glyph=glyph-icon-page split theme=teal split-theme=gray>Click</ui-button><p>split</p></ui-column><ui-column><ui-button-group separator=or><ui-button success width="">Proceed</ui-button><ui-button info width="">Recheck</ui-button><ui-button danger width="">Cancel</ui-button></ui-button-group><p>grouped with separator</p></ui-column></ui-row><h4 class=x-title>Button Groups</h4><ui-row middle class=x-cards><ui-column><ui-button-group><ui-button secondary>Grouped</ui-button><ui-button success>Grouped</ui-button><ui-button warning>Grouped</ui-button><ui-button danger>Grouped</ui-button></ui-button-group><p>horizontal</p></ui-column><ui-column><ui-button-group vertical><ui-button secondary>Grouped</ui-button><ui-button success>Grouped</ui-button><ui-button warning>Grouped</ui-button><ui-button danger>Grouped</ui-button></ui-button-group><p>vertical</p></ui-column><ui-column><ui-button-group value=1 toggle><ui-button value=0 secondary>Grouped</ui-button><ui-button value=1 success>Grouped</ui-button><ui-button value=2 warning>Grouped</ui-button><ui-button value=3 danger>Grouped</ui-button></ui-button-group><p>toggle</p></ui-column></ui-row></x-container></ui-page></template>'}),define("text!src/resources/elements/container.html",["module"],function(e){e.exports='<template><ui-section column-layout><ui-row class="ui-bg-light ui-pad-h" middle><ui-column fill><h4 class=ui-text-secondary>${pageTitle}</h4></ui-column><a class="x-tab ${currentView==0?\'x-tab-active\':\'\'}" click.trigger="currentView=0"><ui-glyph glyph=icon-moon-eye></ui-glyph></a><a class="x-tab ${currentView==1?\'x-tab-active\':\'\'}" click.trigger="currentView=1"><ui-glyph glyph=icon-moon-embed2></ui-glyph></a><a class="x-tab ${currentView==2?\'x-tab-active\':\'\'}" click.trigger="currentView=2"><ui-glyph glyph=icon-moon-lab></ui-glyph></a></ui-row><ui-content padded scroll show.bind="currentView===0"><ui-container><slot></slot></ui-container></ui-content><ui-content padded scroll show.bind="currentView===1"><ui-container><div class="x-section ui-markdown" ref=elSource></div></ui-container></ui-content><ui-content padded scroll show.bind="currentView===2"><ui-container><div class="x-section ui-markdown" ref=elWiki></div></ui-container></ui-content></ui-section></template>'});