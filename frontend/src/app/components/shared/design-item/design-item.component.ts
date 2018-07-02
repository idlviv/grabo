import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../app.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-design-item',
  templateUrl: './design-item.component.html',
  styleUrls: ['./design-item.component.scss']
})
export class DesignItemComponent implements OnInit {
  @Input() design;
  config = config;
  designForm: FormGroup;
  processingLoadFile = -1;
  editMode = false;
  edited_id: string;

  constructor(
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

  }
}
