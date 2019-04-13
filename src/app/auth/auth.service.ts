import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Credentials} from './model/credentials.model';
import {Observable} from 'rxjs';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  authState: any = null;
  private loginUrl: string = '/auth-tokens';
  private subscriptionUrl: string = '/logged-out/inscription';

  constructor(private http: HttpClient, public afAuth:  AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  signingUser(credentials: Credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.login, credentials.password);
  }

  signupUser(credentials: Credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.login, credentials.password);
  }

  signOutUser() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.authState !== null;
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  getCurrentUser() {
    return this.authenticated ? this.authState : null;
  }

}
