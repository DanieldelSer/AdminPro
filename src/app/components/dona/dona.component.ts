import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Sin titulo';
  @Input() labels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() data: number[] = [ 350, 450, 100 ];

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    '#9E120',
    '#FF5800',
    '#FFB414'
  ]

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartLabels = this.labels;
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.data }
    ]
    }
  }

}
