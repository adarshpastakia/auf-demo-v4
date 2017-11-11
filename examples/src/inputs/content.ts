//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT
import { autoinject, inject, NewInstance } from "aurelia-framework";
import { ValidationController, ValidationRules, ValidationControllerFactory } from "aurelia-validation";

@inject(NewInstance.of(ValidationController))
export class InputContent {
  constructor(public controller: ValidationController) {
    this.model = new DataModel();
    (this.model.languages['en'] = new LangModel()).description = `# English Content ${this.md}`;
  }

  // aurelia hooks
  // canActivate(model) { return true; }
  // activate(model) { return true; }
  // bind(bindingContext) { }
  // attached() { }
  // detached() { }
  // unbind() { }
  // deactivate() { }
  // end aurelia hooks

  errors;
  dir = 'ltr';
  plain = '';
  language = 'en';
  model: DataModel;
  addLanguage(model) {
    (this.model.languages[model.id] = new LangModel()).description = `# ${model.name} Content ${this.md}`;
  }
  removeLanguage(model) {
    delete this.model.languages[model.id];
  }

  validate() {
    this.controller.validate({ object: this.model });
  }

  md = `


##### I _Love_ ~~HTML~~ __Markdown__!

---

I can be __BOLD__, I can also be _ITALIC_, or you can ~~DELETE~~ me too!

Look at me I'm a list

-	Item
-	Item
-	Item

And I'm numbered

1.	Item
2.	Item
3.	Item

I can also be a link [Click Me](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or show the whole url http://google.com

![Image](examples/images/heart.png) Dont you just love images!
`;
}

export class DataModel {
  title: string = '';
  languages = {};

  constructor() {
    ValidationRules
      .ensure((m: DataModel) => m.languages)
      .satisfiesRule('language')
      .on(this);
  }
}

export class LangModel {
  summary: string = '';
  description: string = '';

  constructor() {
    ValidationRules
      .ensure((m: LangModel) => m.summary)
      .required()
      .ensure(m => m.description)
      .required()
      .on(this);
  }
}
