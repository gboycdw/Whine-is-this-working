import { model } from "mongoose";
import { UserSchema } from "../schemas/user-shema.js";

// UserSchema를 기준으로 User라는 모델 생성
const User = model("User", UserSchema);

export class UserModel {
  // 로그인
  async findById(email) {
    const user = await User.findOne({ email });
    return user;
  }

  // 회원가입
  async createUser(userInfo) {
    try {
      const newUser = await User.create(userInfo);
      return newUser;
    } catch (err) {
      throw new Error("유저 회원가입 중 에러가 발생했습니다. models");
    }
  }

  // 탈퇴
  async deleteUser(userId) {
    try {
      await User.findOneAndUpdate({ email: userId }, { status: 0 });
    } catch (err) {
      throw new Error("유저 삭제 중 에러가 발생했습니다. models");
    }
  }

  // 유저 정보 수정
  async updateUser(userId, toUpdateInfo) {
    try {
      // returnOriginal 옵션을 false로 설정되면 업데이트된 사용자 리턴
      const updatedUser = await User.findOneAndUpdate(
        { email: userId },
        toUpdateInfo,
        {
          returnOriginal: false,
        }
      );
      return updatedUser;
    } catch (err) {
      throw new Error("유저 정보 업데이트 중 에러가 발생했습니다. models");
    }
  }

  //전체 유저 정보 불러오기
  async getAllUser() {
    try {
      const allUser = await User.find(
        {},
        { name: 1, email: 1, phoneNumber: 1, role: 1 }
      ).lean();
      return allUser;
    } catch (err) {
      throw new Error("전체 유저 불러오기 중 에러가 발생했습니다. models");
    }
  }
}

export const userModel = new UserModel();
