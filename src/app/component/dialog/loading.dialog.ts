import {Component} from "@angular/core";
import {MatDialog} from "@angular/material";

@Component({
  selector : 'loading-dialog',
  template: `    
     <div class="loading-dialog">
       <loading></loading>
     </div>
  `
})

export class LoadingDialog {

  dialogRef = null;

  constructor(private dialog:MatDialog){}

  public show() {
    this.dialogRef = this.dialog.open(LoadingDialog);

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }

  public close() {
    this.dialogRef.close()
  }
}
