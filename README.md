# 🍷와인..게 되네? : 와인 쇼핑몰 프로젝트

---

## 프로젝트 주제

```
1. 우리 쇼핑몰은 와인 전문 판매 쇼핑몰입니다.
2. 구매자의 목적/성별/연령 등에 따라 Our Pick, Best Pick을 제안해줍니다.
3. 와인을 처음 접하는 사람도 친숙한 인터페이스와 카테고리화를 통해 쉽게 접근할 수 있습니다.
4. 와인을 잘 아는 사람을 위해 카테고리 세분화를 통해 원하는 상품을 쉽게 찾을 수 있습니다.
5. 이 쇼핑몰에서 와인을 처음 접한 사람이 계속해서 다시 방문하게 하는 것을 목표로 합니다.
```

## 팀 소개

### **팀명 : 와인..게 되네? (whine-is-this-working?)**

1. 우리는 와인을 판매합니다.
2. 와.. 이게 되네? (why is this working?)
3. whine : 불평하다 / wine : 와인 / why : 왜?
4. why + wine ⇒ (whine) ⇒ whine-is-this-working?

### 구성원 / 역할 (직접 채워주세요 - 드립도 가능. 자기 어필 가능. 억지 가능.)

| 이름   | 파트      | 담당 업무                                                          |
| ------ | --------- | ------------------------------------------------------------------ |
| 최도원 | Back-End  | 팀장, 발표, 서버 배포, 주문 파트, 드립, 사운드 채우기, 일정 알림봇 |
| 연정환 | Back-End  |                                                                    |
| 신민석 | Back-End  |                                                                    |
| 장윤수 | Front-End |                                                                    |
| 고병욱 | Front-End |                                                                    |
| 이수현 | Front-End |                                                                    |

### 폴더 구조

**Front - End (실제 사용한걸로 수정)**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9fb00c5b-d48d-4390-ba41-659d9b023723/Untitled.png)

**Back - End**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c288aa75-cd9c-4423-b45b-00441f6b5727/Untitled.png)

## 페르소나

```
이름 : 엘리스
나이 : 20대 후반 ~ 30대 초반
직업 : 직장인
- 와인에 대해 잘 모르지만 기념일에 쓸 와인을 사고 싶음,
- 지금은 와인을 잘 모르지만 괜찮다면 와인을 자주 구매할 의향이 있음
```

## 서비스 소개

1. 유저 관련 기능 : 회원가입, 로그인, 회원정보수정, 회원탈퇴가 가능합니다.
2. 상품 관련 기능 : 상품 목록 CRUD가 구현되어 있고, 관리자는 상품 목록 전체 조회 / 상품 추가&정&삭제 / 카테고리 추가&수정&삭제가 가능합니다. 사용자는 type / country / price / recomme ndation 등 조건에 맞는 상품을 조회할 수 있습니다.
3. 주문 관련 기능 : 장바구니 사용이 가능하고, 주문 관련 CRUD가 구현되어 있습니다. 관리자는 모든 주문내역을 확인할 수 있고, 주문내용 삭제 / 배송상태 변경 / 운송장번호 변경이 가능합니다. 사용자는 주문 / 주문내역 조회 / 배송정보 수정 / 주문 취소가 가능합니다.

## API 명세 (도메인 : asdfasdf) // 내용 각자 수정 보완 해주세요

|        | API Address                          | Request     | Description                                 | Response |
| ------ | ------------------------------------ | ----------- | ------------------------------------------- | -------- |
|        | —————`<Orders>`—————     |             |                                             |          |
| GET    | /api/orders                          |             | (admin) 모든 유저의 주문 정보 조회          |          |
| GET    | /api/orders/:userid                  |             | 해당 유저의 주문 정보 조회                  |          |
| POST   | /api/orders                          | 주문 정보   | 새 주문정보 생성                            |          |
| DELETE | /api/orders/admin/:number            |             | (admin) 주문 삭제                           |          |
| DELETE | /api/orders/:number                  |             | 주문 취소                                   |          |
| PUT    | /api/orders/:number                  | 변경 내용   | 주문 내용 변경                              |          |
| PUT    | /api/orders/:number/:status          |             | (admin) 배송 상태 변경                      |          |
| PUT    | /api/orders/:number/:waybill         |             | (admin) 운송장 번호 변경                    |          |
|        | —————`<Users>`—————      |             |                                             |          |
| POST   | /api/users/signUp                    |             | 회원가입                                    |          |
| POST   | /api/users/login                     |             | 로그인                                      |          |
| PATCH  | /api/users                           |             | 유저정보수정                                |          |
| DELETE | /api/users                           |             | 회원 탈퇴                                   |          |
|        | —————`<Products>`—————   |             |                                             |          |
| GET    | /api/products                        |             | 상품 목록 전체 조회                         |          |
| GET    | /api/products/:id                    |             | 상품 ID로 상품 상세 조회                    |          |
| GET    | /api/products/types/:type            |             | 상품 타입별로 상품 목록 조회                |          |
| GET    | /api/products/countries/:country     |             | 상품 나라별로 상품 목록 조회                |          |
| GET    | /api/products/prices/:min/:max       |             | 가격의 최솟값, 최댓값 사이의 상품 목록 조회 |          |
| GET    | /api/products/list/picked            |             | Picked 상품 조회                            |          |
| GET    | /api/products/list/best              |             | Best 상품 조회                              |          |
| POST   | /api/products                        | 새 상품정보 | 상품 추가                                   |          |
| PUT    | /api/products/:id                    | 변경할 정보 | ID에 맞는 상품 수정                         |          |
| PATCH  | /api/products/:id/:saleState         | 판매 상태   | ID에 맞는 상품의 판매 상태만 수정           |          |
| DELETE | /api/products/:id                    |             | ID에 맞는 상품 삭제                         |          |
|        | —————`<Categories>`————— |             |                                             |          |
| GET    | /api/categories                      |             | 카테고리 목록 조회                          |          |
| GET    | /api/categories/:name                |             | 카테고리 이름으로 상품 조회                 |          |
| POST   | /api/categories                      | 카테고리명  | 카테고리 추가                               |          |
| PUT    | /api/categories/:id                  | 카테고리명  | ID에 맞는 카테고리 수정                     |          |
| DELETE | /api/categories/:id                  |             | ID에 맞는 카테고리 삭제                     |          |

## 사용 기술 스택

**Front - End (실제 사용한걸로 수정해주세요)**

[](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)[https://img.shields.io/badge/HTML5-E34F26?style=flat-square&amp;logo=html5&amp;logoColor=white](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)

[](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)[https://img.shields.io/badge/CSS-1572B6?style=flat-square&amp;logo=css3&amp;logoColor=white](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)

[](https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)[https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&amp;logo=javascript&amp;logoColor=black](https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

**Back - End**

[](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)[https://img.shields.io/badge/Node.js-339933?style=flat-square&amp;logo=Node.js&amp;logoColor=white](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)

[](https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white)[https://img.shields.io/badge/Express-000000?style=flat-square&amp;logo=Express&amp;logoColor=white](https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white)

[](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)[https://img.shields.io/badge/MongoDB-47A248?style=flat-square&amp;logo=MongoDB&amp;logoColor=white](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)

## 서비스 개요 (지금 최신 상황에 맞게 수정할 수 있으면 좋겠습니다)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9bea4e52-7405-48cc-b39e-e40fc02afcc2/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3564d163-d108-4620-862a-254e167c128e/Untitled.png)

피그마 링크 : [](https://www.figma.com/file/EM4HvIdJLbfFOG4d9AZCv8/Untitled?node-id=0-1&t=FLTBiv5qqQpDmWJf-0)[https://www.figma.com/file/EM4HvIdJLbfFOG4d9AZCv8/Untitled?node-id=0-1&amp;t=FLTBiv5qqQpDmWJf-0](https://www.figma.com/file/EM4HvIdJLbfFOG4d9AZCv8/Untitled?node-id=0-1&t=FLTBiv5qqQpDmWJf-0)

## 코드 컨벤션

1. URL, URI는 REST API 규칙에 따른다.
2. 파일명의 띄어쓰기는 “-” (하이픈) 으로 연결한다.
3. Class는 대문자로 시작하는 Camel Case를 사용한다.
4. 일반 변수명은 Lower Camel Case로 통일한다.
5. 백엔드는 3계층 구조로 설계한다. (Router, Service, Model)

## Branch 구조

Master - dev - feature#BE - .…각 branch

……………………- feature#FE - ….각 branch
