export const getAllProduct = () => {
  const products = [
    {
      id: 0,
      name: "까베르네 소비뇽",
      nameEng: "Cabernet Sauvignon 2020",
      brand: "Vinum Cellars",
      price: 53000,
      imgUrl:
        "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png", // 이미지 여러개업로드 가능할경우 배열로저장 or 썸네일이미지 따로저장
      tags: ["미국", "레드"], // 관리자페이지에서 태그들을 추가해서 넣을수있음
      feature: {
        color: "red",
        country: "United States",
        area: "Paso Robles", // 와인은 국가만큼이나 생산지도 중요함 ex) 샴페인, 보르도, 버건디 등은 프랑스지명
        sugar: "s2", // 1~ 5까지 단계로 당도
        acidity: "a3", // 1~ 5까지 단계로 산도
        tannic: "t3", // 1~ 5까지 단계로 탄닌
        body: "b5", // 1~ 5까지 단계로 바디감
        alcoholDegree: 13,
      },
      info: "제품 상세 설명", //상세페이지에 들어가는 설명
      inventory: 3, // 재고
      saleCount: 0, // 판매량
      isPicked: true, // 관리자 픽 여부
      isBest: false, // 베스트상품 여부
    },
    {
      id: 1,
      name: "까베르네 소비뇽",
      nameEng: "Cabernet Sauvignon 2020",
      brand: "Vinum Cellars",
      price: 53000,
      imgUrl:
        "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png", // 이미지 여러개업로드 가능할경우 배열로저장 or 썸네일이미지 따로저장
      tags: ["미국", "레드"], // 관리자페이지에서 태그들을 추가해서 넣을수있음
      feature: {
        color: "red",
        country: "United States",
        area: "Paso Robles", // 와인은 국가만큼이나 생산지도 중요함 ex) 샴페인, 보르도, 버건디 등은 프랑스지명
        sugar: "s2", // 1~ 5까지 단계로 당도
        acidity: "a3", // 1~ 5까지 단계로 산도
        tannic: "t3", // 1~ 5까지 단계로 탄닌
        body: "b5", // 1~ 5까지 단계로 바디감
        alcoholDegree: 13,
      },
      info: "제품 상세 설명", //상세페이지에 들어가는 설명
      inventory: 3, // 재고
      saleCount: 0, // 판매량
      isPicked: true, // 관리자 픽 여부
      isBest: false, // 베스트상품 여부
    },
    {
      id: 2,
      name: "까베르네 소비뇽",
      nameEng: "Cabernet Sauvignon 2020",
      brand: "Vinum Cellars",
      price: 53000,
      imgUrl:
        "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png", // 이미지 여러개업로드 가능할경우 배열로저장 or 썸네일이미지 따로저장
      tags: ["미국", "레드"], // 관리자페이지에서 태그들을 추가해서 넣을수있음
      feature: {
        color: "red",
        country: "United States",
        area: "Paso Robles", // 와인은 국가만큼이나 생산지도 중요함 ex) 샴페인, 보르도, 버건디 등은 프랑스지명
        sugar: "s2", // 1~ 5까지 단계로 당도
        acidity: "a3", // 1~ 5까지 단계로 산도
        tannic: "t3", // 1~ 5까지 단계로 탄닌
        body: "b5", // 1~ 5까지 단계로 바디감
        alcoholDegree: 13,
      },
      info: "제품 상세 설명", //상세페이지에 들어가는 설명
      inventory: 3, // 재고
      saleCount: 0, // 판매량
      isPicked: true, // 관리자 픽 여부
      isBest: false, // 베스트상품 여부
    },
    {
      id: 3,
      name: "까베르네 소비뇽",
      nameEng: "Cabernet Sauvignon 2020",
      brand: "Vinum Cellars",
      price: 53000,
      imgUrl:
        "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png", // 이미지 여러개업로드 가능할경우 배열로저장 or 썸네일이미지 따로저장
      tags: ["미국", "레드"], // 관리자페이지에서 태그들을 추가해서 넣을수있음
      feature: {
        color: "red",
        country: "United States",
        area: "Paso Robles", // 와인은 국가만큼이나 생산지도 중요함 ex) 샴페인, 보르도, 버건디 등은 프랑스지명
        sugar: "s2", // 1~ 5까지 단계로 당도
        acidity: "a3", // 1~ 5까지 단계로 산도
        tannic: "t3", // 1~ 5까지 단계로 탄닌
        body: "b5", // 1~ 5까지 단계로 바디감
        alcoholDegree: 13,
      },
      info: "제품 상세 설명", //상세페이지에 들어가는 설명
      inventory: 3, // 재고
      saleCount: 0, // 판매량
      isPicked: true, // 관리자 픽 여부
      isBest: false, // 베스트상품 여부
    },
    {
      id: 4,
      name: "까베르네 소비뇽",
      nameEng: "Cabernet Sauvignon 2020",
      brand: "Vinum Cellars",
      price: 53000,
      imgUrl:
        "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png", // 이미지 여러개업로드 가능할경우 배열로저장 or 썸네일이미지 따로저장
      tags: ["미국", "레드"], // 관리자페이지에서 태그들을 추가해서 넣을수있음
      feature: {
        color: "red",
        country: "United States",
        area: "Paso Robles", // 와인은 국가만큼이나 생산지도 중요함 ex) 샴페인, 보르도, 버건디 등은 프랑스지명
        sugar: "s2", // 1~ 5까지 단계로 당도
        acidity: "a3", // 1~ 5까지 단계로 산도
        tannic: "t3", // 1~ 5까지 단계로 탄닌
        body: "b5", // 1~ 5까지 단계로 바디감
        alcoholDegree: 13,
      },
      info: "제품 상세 설명", //상세페이지에 들어가는 설명
      inventory: 3, // 재고
      saleCount: 0, // 판매량
      isPicked: true, // 관리자 픽 여부
      isBest: false, // 베스트상품 여부
    },
  ];

  return products;
};
