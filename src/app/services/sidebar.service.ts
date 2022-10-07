import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url:'/' },
        { titulo: 'Progressbar', url:'/dashboard/progress' },
        { titulo: 'Gráficas', url:'/dashboard/grafica1' },
        { titulo: 'Promesas', url:'/dashboard/promesas' },
        { titulo: 'Rxjs', url:'/dashboard/rxjs' },
      ]
    }
  ]

  constructor() { }
}