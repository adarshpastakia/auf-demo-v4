//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT
import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";

@autoinject()
export class Home {
  constructor(public router: Router) { }
}
