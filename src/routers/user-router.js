import { Router } from "express";
import { userService } from "../services/index.js";

//express의 Router를 통해 userRouter 생성
const userRouter = Router();

// 가입시 POST 요청에 대한 라우팅 , /register 이라는 경로로 요청 시
userRouter.post("/register", async (req, res, next) => {
  try {
    //요청으로 전달된 body의 값들을 변수에 저장 !
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const postalCode = req.body.postalCode;
    const phoneNumber = req.body.phoneNumber;
    // userSerivce의 createUser 메소드를 통해 사용자를 생성
    const newUser = await userService.createUser({
      name,
      email,
      password,
      address,
      postalCode,
      phoneNumber,
    });
    // 생성된 사용자 정보를 json형태로 res에 전달.
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

userRouter.post("/login", async (req, res, next) => {
  console.log("로그인 시도 🌸");
  const { email, password } = req.body;

  const userToken = await userService.getUserToken(email, password);

  res.status(200).json(userToken);
});

export { userRouter };
