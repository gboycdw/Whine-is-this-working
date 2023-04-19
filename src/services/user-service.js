import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../db/index.js";

class UserService {
  //마지막 코드에서 클래스 생성 시 userModel을 인자로 받아옴
  constructor(userModel) {
    this.userModel = userModel;
  }

  // async findByEmail(email) {
  //   const userId = await this.userModel.findById(email);
  //   return userId;
  // }

  //회원가입
  async createUser(info) {
    const { name, email, password, address, postalCode, phoneNumber, role } =
      info;

    const usingIdCheck = await this.userModel.findById(email);

    // 가입된 이메일 확인
    if (usingIdCheck) {
      throw new Error("이미 사용중인 이메일입니다. 다시 입력해주세요.");
    }

    //해시 함수를 10번 반복, 소금을 10번 뿌린 해쉬포테이토
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

    //db 에 유저 정보생성
    const newUser = await this.userModel.createUser(newUserInfo);

    return newUser;
  }

  // 로그인
  async getUserToken(userId, userPw) {
    const userData = await this.userModel.findById(userId);

    if (!userData) {
      throw new Error("가입되지않은 회원입니다.");
    }

    if (userData.status === 0) {
      throw new Error("탈퇴한 회원입니다.");
    }

    const hashedUserPassword = userData.password;
    const comparePassword = await bcrypt.compare(userPw, hashedUserPassword);

    // 보안상 비밀번호만 틀렸다고 표시하지않는게 좋다고 알고있어요.
    // 비밀번호 일치하지 않을시
    if (!comparePassword) {
      throw new Error("아이디 또는 비밀번호가 일치하지않습니다.");
    }

    //비밀번호 일치시 JWT 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY;

    // id와 권한을  jwt페이로드에 포함시키고 , 서명키에 secretKey전달 , 토큰의 유효시간은 1시간
    const userToken = jwt.sign(
      { userId: userData.eamil, role: userData.role },
      secretKey,
      { expiresIn: "1h" } //토큰 유효시간 1시간 설정
    );

    if (userData.role === "admin") {
      console.log("✨ 관리자 로그인 성공! ✨");
      return { userToken };
    }
    return userToken;
  }
}

const userService = new UserService(userModel);
export { userService };
