import {Validators} from '@angular/forms';

export class User {
  firstname: string;
  lastname: string;
  DOB: string;
  country: string;
  address: string;
  gender: string;
  phone: string;
  email: string;
  medicalDetails: MedicalDetails;
  emergencyDetails: EmergencyDetails;

  constructor() {}
}

export class MedicalDetails {
  allergies: string;
  bloodType: string;
  healthCondition: string;
  treatments: string;

  constructor() {}
}

export class EmergencyDetails {
  firstname: string;
  lastname: string;
  address: string;
  email: string;
  phone: string;

  constructor() {}
}
