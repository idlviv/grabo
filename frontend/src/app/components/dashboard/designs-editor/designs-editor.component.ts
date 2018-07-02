import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../../services/design.service';

@Component({
  selector: 'app-designs-editor',
  templateUrl: './designs-editor.component.html',
  styleUrls: ['./designs-editor.component.scss']
})
export class DesignsEditorComponent implements OnInit {
  designs: any;
  constructor(
    private designService: DesignService,
  ) { }

  ngOnInit() {
    this.designService.getDesigns()
      .subscribe(result => this.designs = result.data,
        err => console.log('помилка завантаження дизайнів', err)
      )
  }

}
