import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Credentials} from '../../auth/model/credentials.model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../../auth/model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  public loading: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.form = this.fb.group ( {
      username: [null , Validators.compose ( [ Validators.required ] )] ,
      email: [null , Validators.compose ( [ Validators.required ] )],
      phone: [null , Validators.compose ( [ Validators.required ])],
      password: [null , Validators.compose ( [ Validators.required ] )],
      repeatPassword: [null , Validators.compose ( [ Validators.required ] )],
    });
  }

  onSubmit() {
    const user: User = this.form.value;
    this.loading = true;
    console.log(user);
    this.form.disable();
  }
}
