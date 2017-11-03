//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT

import { autoinject } from 'aurelia-framework';
import { UIHttpService } from 'aurelia-ui-framework';

@autoinject()
export class HttpService {
  constructor(public httpClient: UIHttpService) { }

  container;
  basicUsage;
  attached() {
    this.httpClient.text('wiki/api/http.md').then(md => this.basicUsage.innerHTML = this.container.renderHtml(md));
  }
}
