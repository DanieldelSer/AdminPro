import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customInitFunctions(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(
    private settingService: SettingService
  ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
