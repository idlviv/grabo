import { Component, OnInit } from '@angular/core';
import { config } from '../../../app.config';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  config = config;
  iconFilename: string;

  constructor() { }

  ngOnInit() {
    this.iconFilename = 'icon-650x650.png';
  }

}