import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'confirm-identify-dialog',
    templateUrl: './confirm-identify-dialog.component.html',
    styleUrls: ['./confirm-identify-dialog.component.scss']
  })
  export class ConfirmIdentifyDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
      
    }
  }