
export class User {
  public username: string;
  public email: string;
  public phone: string;
  public password: string;

  constructor(username: string = '', email: string = '', phone: string = '', password: string = '') {
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}
