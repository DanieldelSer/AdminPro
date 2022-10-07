import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios => console.log(usuarios));
    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hola');
    //   } else {
    //     reject('Mal')
    //   }
    // });
    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // })
    //   .catch(error => console.log('Error', error));
    // console.log('Fin Init');
  }

  getUsuarios() {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    });
  }

}
