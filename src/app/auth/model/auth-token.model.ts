
export class AuthToken {

  public reference: string;
  public created_at: string;
  public value: string;

  constructor(reference: string = null, created_at: string = null, value: string = null) {
    this.reference = reference;
    this.created_at = created_at;
    this.value = value;
  }

}
