import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme!.setAttribute('href', theme);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme!.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    // NodeListOf<Element>

    links.forEach((elem: any) => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme?.getAttribute('href');
      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });

  }
}
