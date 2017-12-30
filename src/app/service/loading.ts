import {Component, Input} from "@angular/core";

@Component({
  selector: 'loading',
  template: `
    <div class="loading isCenter" [hidden]="hide"
         style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%)">
      <img src="https://s3-ap-southeast-1.amazonaws.com/finandesk-static/assets/images/icon/loading.svg" alt=""
           height="50">
    </div>`
})

export class Loading {
  @Input('hide') hide : boolean;
}
