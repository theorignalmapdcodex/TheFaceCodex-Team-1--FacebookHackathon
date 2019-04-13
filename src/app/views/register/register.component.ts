import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Credentials} from '../../auth/model/credentials.model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user/user.service';
import {EmergencyDetails, MedicalDetails, User} from '../user/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  public loading: boolean = false;
  userData: User = new User();
  userLoaded: boolean = false;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userData.medicalDetails = new MedicalDetails();
    this.userData.emergencyDetails = new EmergencyDetails();
  }

  ngOnInit() {

    this.form = this.fb.group ( {
      code: [null , Validators.compose ( [ Validators.required ] )] ,
    } );

  }

  onSubmit() {
    this.userLoaded = false;
    const code = this.form.value.code;

    const that = this;
    this.userService.getUserDataFromCode(code).subscribe(function (response) {
      that.userData = <User>response.payload.val();
      if (that.userData === null) {
        that.userLoaded = false;
      } else {
        that.userLoaded = true;
      }
    }, function (error) {
      that.userLoaded = false;
    });
  }
}
