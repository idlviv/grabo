import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { IUser } from './interfaces/user-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from './services/catalog.service';
import { ICatalog } from './interfaces/catalog-interface';
// import { Cloudinary } from '@cloudinary/angular-5.x';
import { MatDialog, MatMenuTrigger } from '@angular/material';
// import { SharedService } from './services/shared.service';
// import { mergeMap } from 'rxjs/operators';
// import { SystemService } from './services/system.service';
import { config } from './app.config';
import { DesignService } from './services/design.service';
import { IDesign } from './interfaces/interface';
import { map, startWith, tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/index';
import { DesignPopupComponent } from './components/shared/design-popup/design-popup.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  config = config;
  user: IUser;
  mainMenuCommonItems: ICatalog[];
  // mainMenuBlogsItems: ICatalog[];
  mainMenuSystemItems: ICatalog[];
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild('settingsMenuTrigger') settingsMenuTrigger: MatMenuTrigger;
  @ViewChild('settingsSideMenuTrigger') settingsSideMenuTrigger: MatMenuTrigger;

  subCategoryItems: ICatalog;
  category: any;
  category_id: string;

  designs: IDesign[];
  designs_id = [];
  filteredDesigns: Observable<string[]>;
  designValidity = false;
  findDesignForm: FormGroup;

  currentCategory: any;
  hierarchyCategory = [];


  constructor(
    private userService: UserService,
    private router: Router,
    private catalogService: CatalogService,
    private designService: DesignService,
    private productService: ProductService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.findDesignForm = new FormGroup({
      findDesign: new FormControl('', [
      ]),
    });

    // initial subscribe on user
    this.userService.getUserLocal()
      .subscribe(user => this.user = user);


    // initial login user, token will be taken from localStorage
    this.userService.userLocalLogin(null);

    // get main menu items
    this.catalogService.getMainMenu()
      .subscribe(menuItems => {
          this.mainMenuCommonItems = menuItems.data.common;
          // this.mainMenuBlogsItems = menuItems.data.blogs;
          this.mainMenuSystemItems = menuItems.data.system;
        },
        err => {
          console.log(err.error);
        });

    // Design finder
    this.designService.getDesigns()
      .subscribe(result => {
          this.designs = result.data;
          this.designs.map(design => this.designs_id.push(design._id));
        },
        err => console.log('Помилка завантеження дизайнів', err)
      );

    this.filteredDesigns = this.findDesignForm.get('findDesign').valueChanges.pipe(
      startWith(''),
      tap(value => this.designValidity = this._checkDesignValidity(value)),
      map(value => this._filter(value))
    );

  }

  // Design finder
  private _filter(filterValue: string): string[] {
    // const designsFrom = this.findDesignForm.get('designs').value;
    return this.designs_id
      // .filter(option => designsFrom.indexOf(option) === -1) // remove designs, which already in form
      .filter(option => option.indexOf(filterValue) === 0 ); // filter by input value
  }

  private _checkDesignValidity(value: string): boolean {
    return this.designs_id.indexOf(value) !== -1;
  }

  _getDesign(_id) {
    return this.designs.filter(design => design._id === _id)[0];
  }

  onSelectDesign(design) {
    this.productService.getProductsByDesignId(design._id)
      .subscribe(result => {
          const imageObject = {
            image: design.image,
            designProducts: result.data,
            _id: design._id
          };

        const dialogRef = this.dialog.open(DesignPopupComponent, {
          // height: '80vh',
          data: imageObject,
          panelClass: 'custom-dialog-container'
        });

        dialogRef.afterClosed()
          .subscribe(() => {
            },
            err => console.log('err delete', err)
          );
        },
        err => console.log('Помилка',  err)
      );
  }

  userLocalLogout() {
    this.userService.userLocalLogout();
    this.router.navigate(['/user', 'login']);
  }

  onSettingsMenuMouseover() {
    this.settingsMenuTrigger.openMenu();
  }

  onSettingsMenuMouseleave() {
    this.settingsMenuTrigger.closeMenu();
  }

  onSettingsSideMenuMouseover() {
    this.settingsSideMenuTrigger.openMenu();
  }

  onSettingsSideMenuMouseleave() {
    this.settingsSideMenuTrigger.closeMenu();
  }

}
