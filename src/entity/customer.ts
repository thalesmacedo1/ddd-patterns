class Customer {
  _id: string;
  _name: string;
  _address: string;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get address(): string {
    return this._address;
  }
}
