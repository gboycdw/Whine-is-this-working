import "dotenv/config";
import jwt from "jsonwebtoken";

async function loginRequired(req, res, next) {
  //req 헤더에 auth-token가 있는지 체크 후 공백으로 split 후 토큰 추출
  const userToken = req.headers["auth-token"]?.split(" ")[1];

  //토큰이 없으면 로그인 페이지로
  if (!userToken) {
    res.redirect("/loginPage");
    return;
  }

  try {
    //환경변수에 저장된 JWT_SECRET_KEY로 userToken을 디코딩 후 확인 , sign이 유효하면 jwtDecoded 변수에 저장
    const jwtDecoded = jwt.verify(userToken, process.env.JWT_SECRET_KEY);
    const { userId, role } = jwtDecoded;

    req.userId = userId;
    req.role = role;

    next();
  } catch (err) {
    res.json(err);
  }
}

export { loginRequired };
