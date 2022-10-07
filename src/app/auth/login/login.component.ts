import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2'

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('googleBtn')
  googleBtn!: ElementRef;

  public formSubmitted = false;

  public loginForm: FormGroup = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit() {
    google.accounts.id.initialize({
      client_id: "1076287726089-7krii8dccgufivgcdbc32k28r8ukmi4k.apps.googleusercontent.com",
      callback: (response: any) => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      // document.getElementById("buttonDiv"),
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  handleCredentialResponse(response: any) {
    // console.log("Encoded JWT ID token: " + response.credential);
    this.usuarioService.loginGoogle(response.credential).subscribe(
      resp => {
        // this.router.navigateByUrl('/');
        this.router.navigateByUrl('/dashboard');
      }
    )
  }

  login() {
    this.usuarioService.loginUsuario(this.loginForm.value).subscribe({
      next: resp => {
        console.log(resp);
        if (this.loginForm.get('remember')?.value) {
          localStorage.setItem('email', this.loginForm.get('remember')?.value);
        } else {
          localStorage.removeItem('email');
        }
        this.router.navigateByUrl('/dashboard');
      },
      error: err => {
        Swal.fire('Error', err.error.msg, 'error');
      }
    });
  }
}
