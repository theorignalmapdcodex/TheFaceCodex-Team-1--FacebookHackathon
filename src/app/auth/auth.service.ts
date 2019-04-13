import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Credentials} from './model/credentials.model';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  private loginUrl: string = '/auth-tokens';
  private subscriptionUrl: string = '/logged-out/inscription';

  constructor(private http: HttpClient) {
  }

  signingUser(credentials: Credentials) {
    return new Observable();
  }

  signupUser() {
  }

  signOutUser() {
  }

  isAuthenticated() {
    return true;
  }

}
