import { Component, Inject, OnInit } from '@angular/core';
import { IConfirmPopupData, IDesign } from '../../../interfaces/interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { config } from '../../../app.config';

@Component({
  selector: 'app-design-popup',
  templateUrl: './design-popup.component.html',
  styleUrls: ['./design-popup.component.scss']
})

export class DesignPopupComponent implements OnInit {
  confirmPopupData: IConfirmPopupData;
  config = config;

  constructor(
    public dialogRef: MatDialogRef<DesignPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDesign
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }
}
