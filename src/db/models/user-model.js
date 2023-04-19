import { model } from "mongoose";
import { UserSchema } from "../schemas/user-shema.js";

//UserSchema를 기준으로 User라는 모델 생성
const User = model("User", UserSchema);

export class UserModel {
  //전달받은 email을 데이터 select후 user변수에 저장하여 리턴
  async findById(email) {
    const user = await User.findOne({ email });
    return user;
  }

  // 전달받은 userInfo를 통해 DB에 사용자 추가
  async createUser(userInfo) {
    const newUser = await User.create(userInfo);
    return newUser;
  }
}

const userModel = new UserModel();

export { userModel };
