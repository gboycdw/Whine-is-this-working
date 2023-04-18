import { model } from "mongoose";
import { UserSchema } from "../schemas/user-shema.js";

//UserSchema를 기준으러 User라는 모델 생성
const User = model("User", UserSchema);

export class UserModel {
  //가입 시 이메일 중복확인 && 아이디 찾기?
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  // 전달받은 info param을 통해 DB에 사용자 추가
  async createUser(info) {
    const newUser = await User.create(info);
    return newUser;
  }
}

const userModel = new UserModel();

export { userModel };
