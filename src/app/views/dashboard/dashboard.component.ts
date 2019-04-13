import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {EmergencyDetails, MedicalDetails, User} from '../user/user.model';
import {UserService} from '../user/user.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  isCollapsed: boolean = false;
  userData: User;
  userUid: string = '';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  constructor(private userService: UserService) {
    this.userData = new User();
    this.userData.medicalDetails = new MedicalDetails();
    this.userData.emergencyDetails = new EmergencyDetails();
  }

  ngOnInit() {
    this.userUid = this.userService.user.uid;
    const that = this ;
    this.userService.getUserData().subscribe(function (response) {
      const queryUserData = <User>response.payload.val();
      if (queryUserData.medicalDetails === undefined) {
        queryUserData.medicalDetails = new MedicalDetails();
      }
      if (queryUserData.emergencyDetails === undefined) {
        queryUserData.emergencyDetails = new EmergencyDetails();
      }
      that.userData = <User>queryUserData;
    });
  }

}
