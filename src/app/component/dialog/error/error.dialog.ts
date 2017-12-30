import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector : 'error-dialog',
  templateUrl:'./error.dialog.html'
})

export class ErrorDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
