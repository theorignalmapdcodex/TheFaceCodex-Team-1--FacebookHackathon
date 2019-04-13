import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user.service';
import {User} from './user.model';
import {ActivatedRoute, Data, Router} from '@angular/router';

@Component({
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

  form: FormGroup;
  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';
  userData: User = new User();


  constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group ( {
      firstname: [null , Validators.compose ( [ Validators.required ] )] ,
      lastname: [null , Validators.compose ( [ Validators.required ] )],
      picture: [null , Validators.compose ( [ ] )],
      gender: [null , Validators.compose ( [ ] )],
      DOB: [null , Validators.compose ( [ Validators.required] )],
      country: [null , Validators.compose ( [ Validators.required] )],
      address: [null , Validators.compose ( [ Validators.required] )],
      phone: [null , Validators.compose ( [ Validators.required] )],
      email: [null , Validators.compose ( [ Validators.required] )],
      medicalDetails: this.fb.group({
        allergies: [null , Validators.compose ( [ Validators.required] )],
        bloodType: [null , Validators.compose ( [ Validators.required] )],
        healthCondition: [null , Validators.compose ( [ Validators.required] )],
        treatments: [null , Validators.compose ( [ Validators.required] )],
      }),
      emergencyDetails: this.fb.group({
        firstname: [null , Validators.compose ( [ Validators.required] )],
        lastname: [null , Validators.compose ( [ Validators.required] )],
        address: [null , Validators.compose ( [ Validators.required] )],
        email: [null , Validators.compose ( [ Validators.required] )],
        phone: [null , Validators.compose ( [ Validators.required] )],
      }),
    } );

    const that = this;
    this.userService.getUserData().subscribe(function (response) {
      const queryUserData = response.payload.val();
      that.form.patchValue(queryUserData);
    });
  }

  onSubmit() {
    const userData = this.form.value;
    const that = this;
    this.userService.postUserData(userData).then(function (response) {
      that.router.navigate(['/']);
    });
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
