define("environment",["require","exports"],function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={debug:!1,testing:!1}});var __decorate=this&&this.__decorate||function(e,i,t,u){var o,n=arguments.length,a=n<3?i:null===u?u=Object.getOwnPropertyDescriptor(i,t):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,t,u);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(i,t,a):o(i,t))||a);return n>3&&a&&Object.defineProperty(i,t,a),a};define("src/app",["require","exports","aurelia-framework","aurelia-ui-framework","../environment"],function(e,i,t,u,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function e(){this.constants=u.UIConstants}return e.prototype.configureRouter=function(e,i){this.router=i,e.title=u.UIConstants.Title,e.options.root=o.default.debug?"/":"/auf-demo-v4",e.options.pushState=!0,e.mapUnknownRoutes("src/home/unknown"),e.map([{route:["","home"],moduleId:"./home/view",nav:!1,auth:!1,name:"home"},{route:"404",moduleId:"./home/unknown",nav:!1,auth:!1,name:"404"},{route:"viewport",moduleId:"./core/viewport",title:"Viewport",nav:!0,auth:!1,settings:{section:"Core"},name:"core:viewport"},{route:"page",moduleId:"./core/page",title:"Page",nav:!0,auth:!1,settings:{section:"Core"},name:"core:page"},{route:"grid",moduleId:"./core/grid",title:"Responsive Grid",nav:!0,auth:!1,settings:{section:"Core"},name:"core:grid"},{route:"buttons",moduleId:"./inputs/buttons",title:"Buttons",nav:!0,auth:!1,settings:{section:"Inputs"},name:"inputs:buttons"}]),console.log(this.router)},e=__decorate([t.autoinject()],e)}();i.App=n}),define("src/main",["require","exports","aurelia-ui-framework","../environment"],function(e,i,t,u){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.configure=function(e){e.use.standardConfiguration().plugin("aurelia-ui-framework",function(e){t.UIConstants.themes="light,dark,primary,secondary,info,danger,success,warning",t.UIConstants.colors="red,pink,violet,purple,indigo,blue,cyan,teal,green,lime,yellow,amber,orange,brown,gray"}).plugin("aurelia-animator-css").feature("./src/resources"),u.default.debug&&e.use.developmentLogging(),u.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}}),define("src/core/grid",["require","exports"],function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=function(){return function(){}}();i.CoreGrid=t});var __decorate=this&&this.__decorate||function(e,i,t,u){var o,n=arguments.length,a=n<3?i:null===u?u=Object.getOwnPropertyDescriptor(i,t):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,t,u);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(i,t,a):o(i,t))||a);return n>3&&a&&Object.defineProperty(i,t,a),a},__metadata=this&&this.__metadata||function(e,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,i)};define("src/core/page",["require","exports","aurelia-framework","aurelia-ui-framework"],function(e,i,t,u){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e){this.httpClient=e,this.wiki="",this.source=""}return e.prototype.activate=function(){var e=this;this.httpClient.text("wiki/core/page.md").then(function(i){return e.wiki=i}),this.httpClient.text("wiki/core/page.example.md").then(function(i){return e.source=i})},e=__decorate([t.autoinject(),__metadata("design:paramtypes",[u.UIHttpService])],e)}();i.Page=o});var __decorate=this&&this.__decorate||function(e,i,t,u){var o,n=arguments.length,a=n<3?i:null===u?u=Object.getOwnPropertyDescriptor(i,t):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,t,u);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(i,t,a):o(i,t))||a);return n>3&&a&&Object.defineProperty(i,t,a),a},__metadata=this&&this.__metadata||function(e,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,i)};define("src/core/viewport",["require","exports","aurelia-framework","aurelia-ui-framework"],function(e,i,t,u){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e){this.httpClient=e,this.wiki="",this.source=""}return e.prototype.activate=function(){var e=this;this.httpClient.text("wiki/core/viewport.md").then(function(i){return e.wiki=i}),this.httpClient.text("wiki/core/viewport.example.md").then(function(i){return e.source=i})},e=__decorate([t.autoinject(),__metadata("design:paramtypes",[u.UIHttpService])],e)}();i.Viewport=o});var __decorate=this&&this.__decorate||function(e,i,t,u){var o,n=arguments.length,a=n<3?i:null===u?u=Object.getOwnPropertyDescriptor(i,t):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,t,u);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(i,t,a):o(i,t))||a);return n>3&&a&&Object.defineProperty(i,t,a),a};define("src/home/unknown",["require","exports","aurelia-framework"],function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var u=function(){function e(){}return e=__decorate([t.inlineView('<template><div class="page-404 ui-container">\n  <h1 class="ui-display-1">TODO</h1>\n  <h6 class="ui-text-muted ui-font-big">Due to work schedule certain sections are pending...will get to it soon</h6>\n  <hr/><a href="javascript:history.back()" class="ui-font-large">&laquo; Go back</a>\n  </div></template>')],e)}();i.View404=u}),define("src/home/view",["require","exports"],function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=function(){return function(){}}();i.Home=t});var __decorate=this&&this.__decorate||function(e,i,t,u){var o,n=arguments.length,a=n<3?i:null===u?u=Object.getOwnPropertyDescriptor(i,t):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,t,u);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(i,t,a):o(i,t))||a);return n>3&&a&&Object.defineProperty(i,t,a),a},__metadata=this&&this.__metadata||function(e,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,i)};define("src/inputs/buttons",["require","exports","aurelia-framework","aurelia-ui-framework"],function(e,i,t,u){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e){this.httpClient=e,this.wiki="",this.source="",this.themes=u.UIConstants.themes.split(","),this.colors=u.UIConstants.colors.split(",")}return e.prototype.activate=function(){var e=this;this.httpClient.text("wiki/inputs/button.md").then(function(i){return e.wiki=i}),this.httpClient.text("wiki/inputs/button.example.md").then(function(i){return e.source=i})},e=__decorate([t.autoinject(),__metadata("design:paramtypes",[u.UIHttpService])],e)}();i.Buttons=o}),define("src/resources/index",["require","exports","aurelia-pal"],function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.configure=function(e){e.globalResources(t.PLATFORM.moduleName("./elements/container"))}});var __decorate=this&&this.__decorate||function(e,i,t,u){var o,n=arguments.length,a=n<3?i:null===u?u=Object.getOwnPropertyDescriptor(i,t):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,t,u);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(i,t,a):o(i,t))||a);return n>3&&a&&Object.defineProperty(i,t,a),a},__metadata=this&&this.__metadata||function(e,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,i)};define("src/resources/elements/container",["require","exports","aurelia-framework","kramed"],function(e,i,t,u){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(){this.source="",this.wiki="",this.currentView=0,this.elSource={},this.elWiki={}}return e.prototype.attached=function(){this.elSource.innerHTML=this.renderHtml(this.source),this.elWiki.innerHTML=this.renderHtml(this.wiki)},e.prototype.sourceChanged=function(e){this.elSource.innerHTML=this.renderHtml(e)},e.prototype.wikiChanged=function(e){this.elWiki.innerHTML=this.renderHtml(e)},e.prototype.renderHtml=function(e){var i=new u.Renderer;return i.code=function(e,i){return e=e.replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&"),window.hljs?(window.hljs.configure({useBR:!0,tabReplace:"    "}),'<pre><code class="hljs '+i+" lang-"+i+'">'+window.hljs.highlightAuto(e,[i]).value+"</code></pre>"):'<pre><code class="hljs '+i+" lang-"+i+'"><xmp>'+e+"</xmp></code></pre>"},u(e,{gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,renderer:i})},__decorate([t.bindable(),__metadata("design:type",Object)],e.prototype,"pageTitle",void 0),__decorate([t.bindable(),__metadata("design:type",Object)],e.prototype,"source",void 0),__decorate([t.bindable(),__metadata("design:type",Object)],e.prototype,"wiki",void 0),e=__decorate([t.containerless(),t.customElement("x-container")],e)}();i.Container=o}),define("text!src/app.html",["module"],function(e){e.exports='<template><compose view=../glyphs/icomoon.svg></compose><compose view=../glyphs/hawcons-linear.svg></compose><compose view=../glyphs/hawcons-filled.svg></compose><ui-drawer ref=appDrawer close-on-click close-glyph=glyph-none><ui-row><ui-column auto class=ui-pad-h><img src=examples/images/logo.png width=36></ui-column><ui-column fill class=ui-margin-none><h6 class="ui-text-secondary ui-strong">${constants.Title}<small class=ui-text-gray>Version ${constants.Version}</small></h6></ui-column></ui-row><hr><ul><li><a href=/viewport>Viewport</a></li><li><a href=/page>Page</a></li><li><a href=/grid>Responsive Grid</a></li><li><a href=/buttons>Buttons</a></li></ul></ui-drawer><ui-viewport><div class=x-fixed-banner>V4 Work in Progress!!</div><ui-app-header><ui-drawer-toggle drawer.bind=appDrawer></ui-drawer-toggle><ui-app-title class="${router.currentInstruction.fragment==\'/\'?\'x-hide\':\'\'}" src=examples/images/logo.png>${constants.Title}</ui-app-title></ui-app-header><ui-router-view></ui-router-view><ui-app-footer><span>&copy; 2017, Adarsh Pastakia<br><small>Version ${constants.Version}</small></span><div><a class="ui-link ui-hover-warning" href=# css.bind="{fontSize: \'2rem\'}"><ui-glyph glyph=icon-moon-stackoverflow></ui-glyph></a><span css.bind="{fontSize: \'2rem\'}">&nbsp;&nbsp;</span><a class="ui-link ui-hover-info" href=# css.bind="{fontSize: \'2rem\'}"><ui-glyph glyph=icon-moon-github></ui-glyph></a><span css.bind="{fontSize: \'2rem\'}">&nbsp;&nbsp;</span></div></ui-app-footer></ui-viewport></template>'}),define("text!src/core/grid.html",["module"],function(e){e.exports='<template><ui-page page-title="Responsive Layout" animate><style>.col-view{border:1px solid #e5e5e5;background:#a86688;min-height:3rem;line-height:3rem;text-align:center;color:#fff}.col-visi{border:1px dashed #a86688;background:#c7b5d1;line-height:3rem;text-align:center;color:#fff}</style><ui-content padded scroll><ui-container><h4>Responsive Layout</h4><hr><ui-row><ui-column full padded><h6>X-Large Viewport</h6></ui-column><ui-column size=xl-3 padded><div class=col-view>X-Large 3</div></ui-column><ui-column size=xl-3 padded><div class=col-view>X-Large 3</div></ui-column><ui-column size=xl-3 padded><div class=col-view>X-Large 3</div></ui-column><ui-column size=xl-3 padded><div class=col-view>X-Large 3</div></ui-column></ui-row><ui-row><ui-column full padded><h6>Large Viewport</h6></ui-column><ui-column size=lg-3 padded><div class=col-view>Large 3</div></ui-column><ui-column size=lg-3 padded><div class=col-view>Large 3</div></ui-column><ui-column size=lg-3 padded><div class=col-view>Large 3</div></ui-column><ui-column size=lg-3 padded><div class=col-view>Large 3</div></ui-column></ui-row><ui-row><ui-column full padded><h6>Medium Viewport</h6></ui-column><ui-column size=md-3 padded><div class=col-view>Medium 3</div></ui-column><ui-column size=md-3 padded><div class=col-view>Medium 3</div></ui-column><ui-column size=md-3 padded><div class=col-view>Medium 3</div></ui-column><ui-column size=md-3 padded><div class=col-view>Medium 3</div></ui-column></ui-row><ui-row><ui-column full padded><h6>Small Viewport</h6></ui-column><ui-column size=sm-3 padded><div class=col-view>Small 3</div></ui-column><ui-column size=sm-3 padded><div class=col-view>Small 3</div></ui-column><ui-column size=sm-3 padded><div class=col-view>Small 3</div></ui-column><ui-column size=sm-3 padded><div class=col-view>Small 3</div></ui-column></ui-row><hr><ui-row><ui-column full padded><h6>Visibility</h6></ui-column><ui-column size=sm-3 padded><div class="col-visi ui-hidden-sm-down">Hidden >SM</div><div class="col-view ui-hidden-sm-up">Visible &lt;SM</div><p class="ui-font-small ui-text-center ui-text-primary">ui-hidden-sm-up</p></ui-column><ui-column size=sm-3 padded><div class="col-visi ui-hidden-md-down">Hidden >MD</div><div class="col-view ui-hidden-md-up">Visible &lt;MD</div><p class="ui-font-small ui-text-center ui-text-primary">ui-hidden-md-up</p></ui-column><ui-column size=sm-3 padded><div class="col-visi ui-hidden-lg-down">Hidden >LG</div><div class="col-view ui-hidden-lg-up">Visible &lt;LG</div><p class="ui-font-small ui-text-center ui-text-primary">ui-hidden-lg-up</p></ui-column><ui-column size=sm-3 padded><div class="col-visi ui-hidden-xl-down">Hidden >XL</div><div class="col-view ui-hidden-xl-up">Visible &lt;XL</div><p class="ui-font-small ui-text-center ui-text-primary">ui-hidden-xl-up</p></ui-column></ui-row><ui-row><ui-column size=sm-3 padded><div class="col-visi ui-hidden-sm-up">Hidden &lt;SM</div><div class="col-view ui-hidden-sm-down">Visible >SM</div><p class="ui-font-small ui-text-center ui-text-primary">ui-hidden-sm-down</p></ui-column><ui-column size=sm-3 padded><div class="col-visi ui-hidden-md-up">Hidden &lt;MD</div><div class="col-view ui-hidden-md-down">Visible >MD</div><p class="ui-font-small ui-text-center ui-text-primary">ui-hidden-md-down</p></ui-column><ui-column size=sm-3 padded><div class="col-visi ui-hidden-lg-up">Hidden &lt;LG</div><div class="col-view ui-hidden-lg-down">Visible >LG</div><p class="ui-font-small ui-text-center ui-text-primary" id=test>ui-hidden-lg-down</p></ui-column><ui-column size=sm-3 padded><div class="col-visi ui-hidden-xl-up">Hidden &lt;XL</div><div class="col-view ui-hidden-xl-down">Visible >XL</div><p class="ui-font-small ui-text-center ui-text-primary">ui-hidden-xl-down</p></ui-column></ui-row></ui-container></ui-content></ui-page></template>'}),define("text!src/core/page.html",["module"],function(e){e.exports='<template><ui-page animate><x-container source.bind=source wiki.bind=wiki page-title=UIPage><h4 class=x-title>Simple Page</h4><div class=x-view><ui-page page-title="My Title"><ui-content padded scroll><compose view=../home/lipsum-big.html></compose></ui-content></ui-page></div><h4 class=x-title>Page w/ Sidebar</h4><div class=x-view><ui-page page-title="My Title"><ui-section row-layout><ui-sidebar collapsible label=Sidebar padded scroll><compose view=../home/lipsum-small.html></compose></ui-sidebar><ui-content padded scroll><compose view=../home/lipsum-small.html></compose></ui-content><ui-sidebar position=end collapsible label=Sidebar padded scroll><compose view=../home/lipsum-small.html></compose></ui-sidebar></ui-section></ui-page></div><h4 class=x-title>Page w/ Toolbar</h4><div class=x-view><ui-page page-title="My Title"><ui-section column-layout><ui-content padded scroll><compose view=../home/lipsum-big.html></compose></ui-content><ui-row end middle class=ui-bg-light><ui-button dark>Save</ui-button><ui-button>Cancel</ui-button></ui-row></ui-section></ui-page></div><h4 class=x-title>Page w/ multiple sections</h4><div class=x-view><ui-page page-title="My Title"><ui-section column-layout><ui-section row-layout><ui-sidebar collapsible label=Sidebar padded scroll><compose view=../home/lipsum-small.html></compose></ui-sidebar><ui-content padded scroll><compose view=../home/lipsum-small.html></compose></ui-content><ui-sidebar position=end collapsible label=Sidebar padded scroll><compose view=../home/lipsum-small.html></compose></ui-sidebar></ui-section><ui-row end middle class=ui-bg-light><ui-button dark>Save</ui-button><ui-button>Cancel</ui-button></ui-row></ui-section></ui-page></div><br><br></x-container></ui-page></template>'}),define("text!src/core/viewport.html",["module"],function(e){e.exports="<template><ui-page animate><x-container source.bind=source wiki.bind=wiki page-title=UIViewport><div class=x-view><div class=ui-viewport css.bind=\"{position: 'relative', width:'100%', height:'100%'}\"><ui-app-header><ui-app-title>Application</ui-app-title></ui-app-header><ui-content padded><h6>Router View goes here</h6></ui-content><ui-app-footer><span>&copy; 2017, Company</span></ui-app-footer></div></div></x-container></ui-page></template>"}),define("text!src/home/lipsum-big.html",["module"],function(e){e.exports='<template><p class="ui-para emphasis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac enim eget lectus consequat feugiat. Integer eu fermentum lacus, et feugiat mi. Mauris quis ex odio. Nulla ex ex, suscipit quis purus ut, sollicitudin consequat nulla. Vivamus pretium tellus dolor. Nulla ex mi, faucibus ut rhoncus quis, rhoncus ut lorem. In interdum id neque in dapibus. Nulla dignissim sagittis luctus. Quisque odio enim, vehicula vel lectus vel, scelerisque elementum felis. Aliquam pulvinar, ex eu pharetra consectetur, mi arcu consectetur ex, quis euismod nibh magna vitae ante. Maecenas finibus finibus ligula, ut ultrices sem convallis vel. Curabitur neque neque, bibendum ut est non, dapibus egestas eros. Suspendisse potenti. Maecenas tristique suscipit quam, quis consectetur ante. Morbi a mi eu dolor condimentum accumsan id in tellus. Cras mi mauris, egestas sit amet tortor faucibus, sagittis euismod metus.</p><p class=ui-para>Aliquam vestibulum vestibulum mauris. Sed nisl ipsum, consectetur vel purus eget, euismod aliquam velit. Suspendisse id consequat magna. Cras ultrices libero eu maximus ornare. Vivamus vulputate ipsum ut scelerisque pellentesque. Praesent sed est urna. Curabitur venenatis laoreet urna at rhoncus. Integer blandit eros mollis, sagittis sem id, dictum tortor. Quisque convallis ornare erat ut laoreet.</p><p class=ui-para>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris nec neque rhoncus, sollicitudin purus lacinia, aliquam nibh. Nunc aliquam ex sed ligula varius, in porttitor ipsum feugiat. Pellentesque gravida enim ipsum, in fermentum felis ullamcorper id. Sed leo nibh, rutrum vitae dapibus eget, fermentum in diam. Maecenas dignissim ante et lorem ornare, at bibendum tellus tristique. Mauris sagittis erat tellus, ac accumsan sapien tristique ac. Duis nibh nisl, imperdiet non egestas eget, blandit id orci. Vivamus luctus sit amet dolor eget cursus. Maecenas orci nulla, rhoncus quis erat in, ornare euismod neque. Quisque vulputate elementum turpis, ac finibus leo. Donec nec nibh suscipit purus tristique elementum ac sed massa. Suspendisse sit amet dapibus ligula. Quisque lacinia erat vitae odio porttitor, nec dictum justo imperdiet.</p><p class=ui-para>Phasellus dolor tortor, scelerisque id rhoncus volutpat, scelerisque eu lorem. Quisque id nisi eget justo laoreet suscipit. Donec porttitor enim ipsum, sed semper urna gravida sed. Fusce scelerisque nisi sit amet massa imperdiet, a sollicitudin purus elementum. Sed justo nibh, mollis sed venenatis at, blandit vitae ligula. Vestibulum ac diam venenatis, lobortis metus vel, gravida mauris. Morbi porta, nisi sit amet efficitur dignissim, ex mauris dapibus metus, quis interdum massa urna quis purus. Fusce consectetur dolor et nunc pharetra gravida. Aliquam tempor, est eget tempus faucibus, magna turpis pharetra tortor, at accumsan enim leo vel ex. Cras malesuada libero vehicula erat vestibulum, in rhoncus magna rutrum.</p><p class=ui-para>Aliquam erat volutpat. Nunc mollis venenatis porttitor. Etiam bibendum sapien sit amet justo ultricies, nec pretium nibh dignissim. Vivamus efficitur dictum urna, ut posuere nunc hendrerit nec. Nullam pellentesque enim orci, non scelerisque eros ornare ac. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ac lorem sapien. Vestibulum sed elit eu arcu euismod sodales a quis lorem. Nunc gravida ac lectus non tempus. Aliquam id vestibulum ex. Aenean egestas rutrum dignissim. Donec et lacus et mauris porttitor commodo. Vestibulum massa orci, egestas ac aliquam id, vestibulum et erat.</p></template>'}),define("text!src/home/lipsum-small.html",["module"],function(e){e.exports='<template><p class="ui-para emphasis"><span class="ui-text-info ui-bold">Lorem ipsum</span>&nbsp;dolor sit amet, consectetur adipiscing elit. Duis ac enim eget lectus consequat feugiat. Integer eu fermentum lacus, et feugiat mi. Mauris quis ex odio. Nulla ex ex, suscipit quis purus ut, sollicitudin consequat nulla. Vivamus pretium tellus dolor. Nulla ex mi, faucibus ut rhoncus quis, rhoncus ut lorem. In interdum id neque in dapibus. Nulla dignissim sagittis luctus. Quisque odio enim, vehicula vel lectus vel, scelerisque elementum felis. Aliquam pulvinar, ex eu pharetra consectetur, mi arcu consectetur ex, quis euismod nibh magna vitae ante. Maecenas finibus finibus ligula, ut ultrices sem convallis vel. Curabitur neque neque, bibendum ut est non, dapibus egestas eros. Suspendisse potenti. Maecenas tristique suscipit quam, quis consectetur ante. Morbi a mi eu dolor condimentum accumsan id in tellus. Cras mi mauris, egestas sit amet tortor faucibus, sagittis euismod metus.</p></template>'}),define("text!src/home/view.html",["module"],function(e){e.exports='<template><ui-page animate class=x-home-page><ui-content scroll><div class=x-banner><ui-container padded><h1 class="ui-display-1 ui-text-center"><img src=examples/images/logo.png height=72 align=absmiddle> Aurelia UI Framework</h1><hr><h1 class="ui-display-3 ui-text-center ui-text-light">A bespoke UI Framework for business applications</h1></ui-container></div><div class="x-banner ui-bg-secondary"><ui-container padded><h4 class=ui-text-center>Features</h4><br><ui-row class="ui-text-start ui-pad-h" middle><ui-column size="md-6 sm-12" class="ui-row ui-row-middle"><ui-column padded auto><img align=left src=examples/images/feature-layout.svg width=64></ui-column><ui-column padded fill>Layout elements for creating pages with drawers, sidebars, tabs</ui-column></ui-column><ui-divider></ui-divider><ui-column size="md-6 sm-12" class="ui-row ui-row-middle"><ui-column padded auto><img align=left src=examples/images/feature-input.svg width=64></ui-column><ui-column padded fill>Custom input elements for dates, phone numbers and markdown content</ui-column></ui-column></ui-row><ui-row class="ui-text-start ui-pad-h" middle><ui-column size="md-6 sm-12" class="ui-row ui-row-middle"><ui-column padded auto><img align=left src=examples/images/feature-grid.svg width=64></ui-column><ui-column padded fill>Functional datagrid with sorting and resizeable column</ui-column></ui-column><ui-divider></ui-divider><ui-column size="md-6 sm-12" class="ui-row ui-row-middle"><ui-column padded auto><img align=left src=examples/images/feature-theme.svg width=64></ui-column><ui-column padded fill>Completely themeable</ui-column></ui-column></ui-row><br><br><ui-row center middle><a href=#/start class=big-button><span t=home:start.title>Getting Started</span></a><a href=#/example class=big-button badge-danger=NEW tooltip=message:Examples><span t=home:examples.title>Examples</span></a><a href=https://github.com/adarshpastakia/aurelia-ui-framework/wiki target=_blank class="noarrow big-button"><span>Help Wiki</span></a></ui-row></ui-container></div><div class=x-body><ui-container padded><div class=ui-pad-all><h4 class=ui-text-primary>Core Components</h4></div><ui-row><ui-column padded auto><a href=/viewport>Viewport</a></ui-column><ui-column padded auto><a href=/page>Page</a></ui-column><ui-column padded auto><a href=/grid>Responsive Grid</a></ui-column></ui-row><hr><div class=ui-pad-all><h4 class=ui-text-primary>Input Elements</h4></div><ui-row><ui-column padded auto><a href=/buttons>Buttons</a></ui-column><ui-column padded auto><a href=/inputs>Textual Inputs</a></ui-column><ui-column padded auto><a href=/lists>Lists &amp; Selects</a></ui-column></ui-row><hr><div class=ui-pad-all><h4 class=ui-text-primary>Components</h4></div><ui-row><ui-column padded auto><a href=/drawer>Drawer</a></ui-column><ui-column padded auto><a href=/sidebar>Sidebar</a></ui-column><ui-column padded auto><a href=/menu>Menus</a></ui-column></ui-row></ui-container></div></ui-content></ui-page></template>'}),define("text!src/inputs/buttons.html",["module"],function(e){e.exports='<template><ui-page animate><x-container source.bind=source wiki.bind=wiki page-title=UIButton><h4 class=x-title>Themes</h4><ui-row class=ui-titlecase><ui-button width=8em repeat.for="c of themes" theme.bind=c>${c}</ui-button></ui-row><h6 class=x-title>Extras</h6><ui-row class=ui-titlecase><ui-button width=8em repeat.for="c of colors" theme.bind=c>${c}</ui-button></ui-row><hr><h4 class=x-title>Variations</h4><h6 class=x-title>Sizes</h6><ui-row bottom class=x-cards><ui-column auto><ui-button small>Click</ui-button><p>small</p></ui-column><ui-column auto><ui-button normal>Click</ui-button><p>normal</p></ui-column><ui-column auto><ui-button large>Click</ui-button><p>large</p></ui-column><ui-column auto><ui-button xlarge>Click</ui-button><p>xlarge</p></ui-column></ui-row><h6 class=x-title>Icons</h6><ui-row middle class=x-cards><ui-column auto><ui-button glyph=glyph-icon-page></ui-button><p>only glyph</p></ui-column><ui-column auto><ui-button glyph=glyph-icon-page>Click</ui-button><p>glyph</p></ui-column><ui-column auto><ui-button glyph=glyph-icon-page>Click</ui-button><p>icon-start</p></ui-column><ui-column auto><ui-button glyph=glyph-icon-page icon-end>Click</ui-button><p>icon-end</p></ui-column><ui-column auto><ui-button glyph=glyph-icon-page icon-hilight>Click</ui-button><p>icon-hilight</p></ui-column><ui-column auto><ui-button glyph=glyph-icon-page icon-hilight icon-end>Click</ui-button><p>icon-hilight</p></ui-column><ui-column auto><ui-button glyph=glyph-icon-page icon-top>Click</ui-button><p>icon-top</p></ui-column></ui-row><h6 class=x-title>Other Variants</h6><ui-row middle class=x-cards><ui-column auto><ui-button glyph=glyph-icon-page dropdown=s theme=indigo split-theme=gray>Click</ui-button><p>dropdown</p></ui-column><ui-column auto><ui-button glyph=glyph-icon-page split theme=teal split-theme=gray>Click</ui-button><p>split</p></ui-column><ui-column auto><ui-button-group separator=or><ui-button success width="">Proceed</ui-button><ui-button info width="">Recheck</ui-button><ui-button danger width="">Cancel</ui-button></ui-button-group><p>grouped with separator</p></ui-column></ui-row><h4 class=x-title>Button Groups</h4><ui-row middle class=x-cards><ui-column auto><ui-button-group><ui-button secondary>Grouped</ui-button><ui-button success>Grouped</ui-button><ui-button warning>Grouped</ui-button><ui-button danger>Grouped</ui-button></ui-button-group><p>horizontal</p></ui-column><ui-column auto><ui-button-group vertical><ui-button secondary>Grouped</ui-button><ui-button success>Grouped</ui-button><ui-button warning>Grouped</ui-button><ui-button danger>Grouped</ui-button></ui-button-group><p>vertical</p></ui-column><ui-column auto><ui-button-group value=1 toggle><ui-button value=0 secondary>Grouped</ui-button><ui-button value=1 success>Grouped</ui-button><ui-button value=2 warning>Grouped</ui-button><ui-button value=3 danger>Grouped</ui-button></ui-button-group><p>toggle</p></ui-column></ui-row></x-container></ui-page></template>'}),define("text!src/resources/elements/container.html",["module"],function(e){e.exports='<template><ui-section column-layout><ui-row class="ui-bg-light ui-pad-h" middle><ui-column fill><h4 class=ui-text-secondary>${pageTitle}</h4></ui-column><a class="x-tab ${currentView==0?\'x-tab-active\':\'\'}" click.trigger="currentView=0"><ui-glyph glyph=icon-moon-eye></ui-glyph></a><a class="x-tab ${currentView==1?\'x-tab-active\':\'\'}" click.trigger="currentView=1"><ui-glyph glyph=icon-moon-embed2></ui-glyph></a><a class="x-tab ${currentView==2?\'x-tab-active\':\'\'}" click.trigger="currentView=2"><ui-glyph glyph=icon-moon-lab></ui-glyph></a></ui-row><ui-content padded scroll show.bind="currentView===0"><ui-container><slot></slot></ui-container></ui-content><ui-content padded scroll show.bind="currentView===1"><ui-container><div class="x-section ui-markdown" ref=elSource></div></ui-container></ui-content><ui-content padded scroll show.bind="currentView===2"><ui-container><div class="x-section ui-markdown" ref=elWiki></div></ui-container></ui-content></ui-section></template>'});