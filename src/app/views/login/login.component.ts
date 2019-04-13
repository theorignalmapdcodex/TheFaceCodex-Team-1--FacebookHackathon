import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {AuthService} from '../../auth/auth.service';
import {Credentials} from '../../auth/model/credentials.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public loading: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.form = this.fb.group ( {
      login: [null , Validators.compose ( [ Validators.required ] )] ,
      password: [null , Validators.compose ( [ Validators.required ] )],
      rememberMe: [null , Validators.compose ( [] )],
    } );
  }

  onSubmit() {
    const credentials: Credentials = this.form.value;
    this.loading = true;
    console.log(credentials);
    this.form.disable();
    /*
    this.authService.signingUser(credentials).subscribe(
      /!*(user: User) => {
        this.router.navigate ( [ '/user' ] );
      },
      (error) => {
        this.formErrors.pop();
        if (error.message === 'INVALID CREDENTIALS') {
          this.formErrors.push('Téléphone ou PIN incorrect');
        } else {
          this.formErrors.push(error.message);
        }
        this.form.controls['password'].setValue(null);
        this.loading = false;
        this.form.enable();
      }*!/
    );*/

  }

}
