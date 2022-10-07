import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;

  constructor() {
    // let i = -1;
    // const obs$ = new Observable<number>( observer => {

    //   const intervalo =  setInterval( () => {
    //     i++;
    //     observer.next(i);

    //     if (i === 4) {
    //       clearInterval( intervalo );
    //       observer.complete();
    //     }

    //     if (i === 2) {
    //       console.log('i = 2');
    //       observer.error('i llego a 2');
    //     }
    //   }, 1000)
    // });

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe( {
    //   next: (valor) => console.log('Subs', valor),
    //   error: (error) => console.warn('Error', error),
    //   complete: () => console.info('Obs terminado')
    // }
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(250)
      .pipe(
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0) ? true : false),
        // take(10),
      );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    // const obs$ = new Observable<number>( observer => {
    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          console.log('i = 2');
          observer.error('i llego a 2');
        }
      }, 1000)
    });
    // return obs$;
  }

}
