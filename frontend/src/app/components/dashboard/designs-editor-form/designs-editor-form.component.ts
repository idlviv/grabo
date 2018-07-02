import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { config } from '../../../app.config';


@Component({
  selector: 'app-designs-editor-form',
  templateUrl: './designs-editor-form.component.html',
  styleUrls: ['./designs-editor-form.component.scss']
})
export class DesignsEditorFormComponent implements OnInit {
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

    this.designForm = new FormGroup({
      _id: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(12),
      ]),
      structure: new FormControl('', [
        Validators.required,
      ]),
      files: new FormControl('file', [
      ])
    });

    this.route.paramMap
      .subscribe(paramMap => {
        if (paramMap.get('_id')) {
          this.edited_id = paramMap.get('_id');
          this.editMode = true;
        }
      });
  }

  onDesignFormSubmit() {
    console.log('design form submit');
  }
}
