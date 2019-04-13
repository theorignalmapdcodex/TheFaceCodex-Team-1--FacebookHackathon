import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {AuthService} from '../../auth/auth.service';
import {Credentials} from '../../auth/model/credentials.model';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

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
              private authService: AuthService,
              public afAuth:  AngularFireAuth) {
  }

  ngOnInit() {
    this.form = this.fb.group ( {
      login: [null , Validators.compose ( [ Validators.required, Validators.email ] )] ,
      password: [null , Validators.compose ( [ Validators.required, Validators.minLength(6) ] )],
      rememberMe: [null , Validators.compose ( [] )],
    } );
  }

  onSubmit() {
    const that = this;
    const credentials: Credentials = this.form.value;
    this.loading = true;
    this.form.disable();
    this.authService.signingUser(credentials).then(function (response) {
      that.router.navigate( [ '/' ]);
      that.form.enable();
    }).catch(
      function(error) {
        if (error.code === 'auth/user-not-found') {
          that.authService.signupUser(credentials).then(function (resp) {
              that.onSubmit();
            }
          );
        }
        that.form.enable();
      }
    );
  }

}
