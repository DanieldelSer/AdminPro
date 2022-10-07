import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  labels1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  labels2 = ['Mikel', 'Rolo', 'PN'];
  labels3 = ['Pan', 'Agua', 'Sal'];
  labels4 = ['Zumo', 'Coca-cola', 'Cerveza'];
  data1 = [350, 450, 100];
  data2 = [100, 500, 400];
  data3 = [500, 250, 250];
  data4 = [350, 350, 300];

  constructor() { }

  ngOnInit(): void {
  }

}
