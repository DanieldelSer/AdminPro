import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interface/registerForm.interface';
import { environment } from '../../environments/environment.prod';
import { LoginForm } from '../interface/login-form.interface';
import { tap, map, Observable, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

declare const google: any;

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      }),
      map(resp => true),
      catchError(error => of(false))
    );
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token)
      })
    )
  }

  loginUsuario(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token)
      })
    )
  }

  loginGoogle(token: string) {
    return this.http.post(`${base_url}/login/google`, {token})
      .pipe(
        tap( (resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      )
  }

  logOut() {
    localStorage.removeItem('token');
    google.acounts.id.revoke('correo', () => {
      this.router.navigateByUrl('/login');
    })
  }
}
