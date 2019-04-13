
export class Credentials {
  public login: string;
  public password: string;
  public rememberMe: boolean = false;

  constructor(login: string = '', password: string = '', rememberMe: boolean = false) {
    this.login = login;
    this.password = password;
    this.rememberMe = rememberMe;
  }
}
