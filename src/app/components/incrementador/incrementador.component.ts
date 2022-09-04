import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  // @Input('valor') progreso: number = 25;
  @Input() progreso: number = 25;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  // get getPorcentaje() {
  //   return `${this.progreso}%`
  // }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    } else if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    } else {
      this.progreso = this.progreso + valor;
      return this.valorSalida.emit(this.progreso);
    }
  }

  onChange(nuevoValor: number) {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso);
  }

}
