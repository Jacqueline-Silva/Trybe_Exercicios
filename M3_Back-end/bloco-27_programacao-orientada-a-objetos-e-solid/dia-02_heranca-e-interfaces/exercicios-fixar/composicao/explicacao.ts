interface User {
  id?: number;
  name: string;
  age: number;
}

class UserModel {
  private _database: User[] = [];
  private _lastId = 0;

  create(user: User) {
    const newUser = { ...user, id: this._lastId++ };
    this._database.push(newUser);

    return newUser;
  }

  getAll():User[] {
    return [... this._database];
  }
}

class UserService {
  constructor(protected userModel: UserModel) { }

  create(user: User): User {
    if ( user.age > 200) throw new Error('idade avançada')
    return this.userModel.create(user);
  }

  getAll() {
    return this.userModel.getAll();
  }
}

const userModel = new UserModel();
const userService = new UserService(userModel);

const usuario1 = userService.create({
  name: "Capi",
  age: 100,
})

const usuario2 = userService.create({
  name: "André",
  age: 100,
})

console.log(userService.getAll())