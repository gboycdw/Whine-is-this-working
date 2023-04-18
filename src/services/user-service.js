import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { userModel } from "../db/index.js";

class UserService {
  //마지막에서 클래스 생성 시 userModel을 인자로 받아옴
  constructor(userModel) {
    this.userModel = userModel;
  }

  async createUser(info) {
    const { name, email, password, address, postalCode, phoneNumber, role } =
      info;

    //해시 함수를 10번 반복, 소금을 10번 뿌려 만든 해쉬포테이토라고 할까요?
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserInfo = {
      name,
      email,
      password: hashedPassword,
      address,
      postalCode,
      phoneNumber,
      role,
    };
    //db 에 create
    const newUser = await this.userModel.createUser(newUserInfo);

    return newUser;
  }
}

const userService = new UserService(userModel);
export { userService };
