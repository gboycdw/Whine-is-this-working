import mongoose from "mongoose";

const DB_URL = process.env.DB_URL || "서버 주소가 없습니다. .env 파일을 확인해주세요.";

mongoose.connect(DB_URL);

mongoose.connection.on("connected", () => {
    console.log("MongoDB 연결 성공");
});

mongoose.connection.on("error", () => {
    console.log("MongoDB 연결 실패");
});

export * from "./models/product-models.js";