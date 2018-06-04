import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public state = '';
  nullSubcategory = false;
  @ViewChild('sidenav') sidenav;

  constructor(
    public media: ObservableMedia,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    // this.sharedService.getSharingEvent()
    //   .subscribe(event => {
    //     if(event === 'onNullSubcategory') {
    //       this.sidenav.close();
    //       this.nullSubcategory = true;
    //     } else if(event === 'onNotNullSubcategory') {
    //       this.sidenav.open();
    //       this.nullSubcategory = false;
    //   }
    //   })
  }

}
