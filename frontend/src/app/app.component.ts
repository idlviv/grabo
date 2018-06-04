import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { IUser } from './interfaces/user-interface';
import { Router } from '@angular/router';
import { CatalogService } from './services/catalog.service';
import { ICatalog } from './interfaces/catalog-interface';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { MatMenuTrigger } from '@angular/material';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: IUser;
  mainMenuProductsItems: ICatalog[];
  mainMenuBlogsItems: ICatalog[];
  mainMenuSystemItems: ICatalog[];
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild('settingsMenuTrigger') settingsMenuTrigger: MatMenuTrigger;
  @ViewChild('settingsSideMenuTrigger') settingsSideMenuTrigger: MatMenuTrigger;

  subCategoryItems: ICatalog;
  category: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private catalogService: CatalogService,
    private sharedService: SharedService,

  ) { }

  ngOnInit() {
    // subscribe on submenu
    this.sharedService.getSharingEvent()
      .subscribe(data => {
        if (data[0] === 'subCategoryItems') {
          this.subCategoryItems = data[1];
          this.category = data[3];
        }
      });

    // initial subscribe on user
    this.userService.getUserLocal()
      .subscribe(
        user => this.user = user
      );
    // initial login user, token will be taken from localStorage
    this.userService.userLocalLogin(null);

    // get main menu items
    this.catalogService.getMainMenu()
      .subscribe(menuItems => {
          this.mainMenuProductsItems = menuItems.data.products;
          this.mainMenuBlogsItems = menuItems.data.blogs;
          this.mainMenuSystemItems = menuItems.data.system;
        },
        err => {
          console.log(err.error);
        });

    // this.catalogService.getDescendants('common')
    //   .subscribe(menuItems => {
    //     this.mainCommonMenuItems = menuItems.data;
    // },
    //   err => {
    //     console.log(err.error);
    //   });

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
