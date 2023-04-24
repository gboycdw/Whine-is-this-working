import { Router } from "express";
import jwt from "jsonwebtoken";
import { userService } from "../services/index.js";
import { loginRequired } from "../middlewares/login-required.js";
import { adminLoginRequired } from "../middlewares/admin-required.js";

//express의 Router를 통해 userRouter 생성
const userRouter = Router();

// 가입시 POST 요청에 대한 라우팅 , /register 이라는 경로로 요청 시
userRouter.post("/signUp", async (req, res, next) => {
  try {
    //요청으로 전달된 body의 값들을 변수에 저장 !
    const {
      name,
      email,
      password,
      address1,
      address2,
      postalCode,
      phoneNumber,
    } = req.body;

    // userSerivce의 createUser 메소드를 통해 사용자를 생성
    const newUser = await userService.createUser({
      name,
      email,
      password,
      address1,
      address2,
      postalCode,
      phoneNumber,
    });
    // 생성된 사용자 정보를 json형태로 res에 전달.
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

//로그인
userRouter.post("/login", adminLoginRequired, async (req, res, next) => {
  console.log("로그인 시도 🌸");
  const { email, password } = req.body;

  const userToken = await userService.getUserToken(email, password);

  res.status(200).json(userToken);
});

//탈퇴
userRouter.delete("/", loginRequired, async (req, res, next) => {
  const token = req.header("auth-token");
  // 토큰의 secret key와 발급할때의 secre_key 값 비교
  console.log(req.userId);
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

  //토큰에서 추출한 유저 아이디
  const userId = decodedToken.userId;
  try {
    await userService.deleteUser(userId);
    return res.json({ result: "탈퇴되었습니다. 이용해주셔서 감사합니다." });
  } catch (err) {
    console.log("탈퇴 실패! 🚫");
    next(err);
  }
});

//업데이트
userRouter.patch("/", loginRequired, async (req, res, next) => {
  //req 헤더의 autho token
  const token = req.header("auth-token");

  const password = req.body.password;
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const postalCode = req.body.postalCode;
  const phoneNumber = req.body.phoneNumber;

  const toUpdateInfo = {
    //password값이 있을 경우(true), password 속성: req.body에서 받은 password 변수 값 --> ex) {password : "myPassword1234"}
    //false인 경우 toUpdateInfo Object에 추가되지 않음.
    ...(password && { password }),
    ...(address1 && { address1 }),
    ...(address2 && { address2 }),
    ...(postalCode && { postalCode }),
    ...(phoneNumber && { phoneNumber }),
  };

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodedToken.userId);
    const updatedUser = await userService.updateUser(
      decodedToken.userId,
      toUpdateInfo
    );
    return res.json(updatedUser);
  } catch (err) {
    console.log("업데이트 실패! 💧");
    next(err);
  }
});

export { userRouter };
