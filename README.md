# 🍷와인..게 되네? : 와인 쇼핑몰 프로젝트

![1682964447993](image/README/1682964447993.png)

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

### 구성원 / 역할

|  이름  |   파트   | 담당 업무                                                                                                                                                            |
| :----: | :-------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 최도원 | Back-End | 👑팀장, 🔊발표, VM 서버 배포&관리, 주문 파트  API 구현, 에러핸들러 제작,<br />이미지 업로드용 Multer 제작, 백엔드 소통 담당, ~~드립, 사운드 채우기, 일정 알림봇~~ |
| 연정환 | Back-End | 회원파트, 로그인, 회원가입, 수정, 탈퇴, 토큰 발급 및 검증, 관리자&사용자 구분                                                                                        |
| 신민석 | Back-End | 상품&카테고리 파트 API 구현, JOI 구현, GitLab Wiki 및 노션 회의록 작성, 서비스 개요 작성                                                                            |
| 장윤수 | Front-End | 전체적인 레이아웃, 관리자페이지 구현 및 공용 API, context 설계, 디테일한 디자인작업                                                                                  |
| 고병욱 | Front-End | 상품세부정보, 마이페이지 관련 페이지 제작                                                                                                                            |
| 이수현 | Front-End | 상품목록, 회원가입, 로그인, 장바구니, 주문/결제, 상품세부정보 페이지 제작, PPT 제작                                                                                  |

### 폴더 구조

```
witw
├── backend
│   ├── src
│   │   ├── db
│   │   │   ├── schemas
│   │   │   ├── models
│   │   │   └── index.js
│   │   ├── middlewares
│   │   ├── routers
│   │   ├── services
│   │   └── app.js
│   └── index.js
└── FrontEnd
    ├── public
    ├── src
    │   ├── api
    │   ├── components
    │   │   ├── admin
    │   │   ├── store
    │   │   ├── UI
    │   │   └── user
    │   ├── pages
    │   │   ├── admin
    │   │   ├── auth
    │   │   ├── user
    │   │   └── main-pages.jsx
    │   ├── App.jsx
    │   ├── index.js
    │   └── reportWebVitals.js
    └── postcss.config.js
```

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

## API 명세

### 🖥️ BackEnd Server : 34.22.85.44:5000

### 💻 FrontEnd Server : 34.22.85.44

### ⛏️ 설치해야 하는 패키지 `node.js version : v18.16.0`

1. npm install express
2. npm install cors
3. npm install bcrypt
4. npm install nanoid
5. npm install dayjs
6. npm install jsonwebtoken
7. npm install dotenv

### API 명세

|        | API Address                      | Request       | Params               | Description                                      |
| ------ | -------------------------------- | ------------- | -------------------- | ------------------------------------------------ |
|        | —————`<Orders>`————— |               |                      |                                                  |
| GET    | /api/orders                      |               |                      | **`admin`** 모든 주문 정보 조회         |
| GET    | /api/orders/:userid              |               | E-mail ID            | 해당 ID를 쓰는 유저의 주문 정보 조회             |
| GET    | /api/orders/order/:index         |               | 주문 번호            | 주문번호로 주문정보 조회 (상세검색)              |
| POST   | /api/orders                      | 주문 정보     |                      | 새 주문정보 생성                                 |
| DELETE | /api/orders/admin/:number        |               | 주문 번호            | `admin` 주문 삭제                              |
| DELETE | /api/orders/:number              |               | 주문 번호            | 배송 시작 전 주문 건의 주문 취소                 |
| PATCH  | /api/orders/information          | 주문 변경내역 |                      | 배송 시작 전 주문 건의 주문 내용 변경            |
| PATCH  | /api/orders/shippingstatus       | 배송 상태     |                      | `admin` 배송 시작 전 주문 건의 배송 상태 변경 |
| PATCH  | /api/orders/waybill              | 운송장 번호   |                      | `admin` 배송 중인 주문 건의 운송장 번호 변경   |
|        | —————`<Users>`—————  |               |                      |                                                  |
| POST   | /api/users/signup                |               |                      | 회원가입                                         |
| POST   | /api/users/login                 |               |                      | 로그인                                           |
| PATCH  | /api/users                       |               |                      | 유저정보수정                                     |
| DELETE | /api/users                       |               |                      | 회원 탈퇴                                        |
| PATCH  | /api/users/role-info             |               |                      | `super-admin` 사용자 권한 변경                 |
| GET    | /api/users/alluser               |               |                      | 전체 유저 조회                                   |
|        | ————`<Products>`————   |               |                      |                                                  |
| GET    | /api/products                    |               |                      | 상품 목록 전체 조회                              |
| GET    | /api/products/:id                |               | 상품 ID              | 상품 ID로 상품 상세 조회                         |
| GET    | /api/products/types/:type        |               | 상품 타입            | 상품 타입별로 상품 목록 조회                     |
| GET    | /api/products/countries/:country |               | 상품 나라            | 상품 나라별로 상품 목록 조회                     |
| GET    | /api/products/prices/:min/:max   |               | 상품 가격(최소-최대) | 가격의 최솟값, 최댓값 사이의 상품 목록 조회      |
| GET    | /api/products/lists/picked       |               |                      | Picked 상품 조회                                 |
| GET    | /api/products/lists/best         |               |                      | Best 상품 조회                                   |
| POST   | /api/products                    | 새 상품 정보  |                      | 상품 추가                                        |
| PUT    | /api/products/:id                | 변경할 정보   | 상품 ID              | ID에 맞는 상품 수정                              |
| PATCH  | /api/products/images/:id         | 변경할 이미지 | 상품 ID              | ID에 맞는 상품 이미지 수정                       |
| PATCH  | /api/products/:id/:saleState     | 판매 상태     | 상품 ID, 판매 상태   | ID에 맞는 상품의 판매 상태만 수정                |
| DELETE | /api/products/:id                |               |                      | ID에 맞는 상품 삭제                              |
|        | ————`<Categories>`———— |               |                      |                                                  |
| GET    | /api/categories                  |               |                      | 카테고리 목록 조회                               |
| GET    | /api/categories/:title           |               |                      | 카테고리 이름으로 카테고리 조회                  |
| POST   | /api/categories                  | 카테고리 정보 |                      | 카테고리 추가                                    |
| PATCH  | /api/categories/:id              | 카테고리 정보 | 카테고리 ID          | ID에 맞는 카테고리 수정                          |
| DELETE | /api/categories/:id              |               | 카테고리 ID          | ID에 맞는 카테고리 삭제                          |

## 사용 기술 스택

**Front - End**

- React
- tailwindcss
- JavaScript
- styled components

**Back - End**

- Node.js
- Express.js
- MongoDB

## 서비스 개요

피그마 링크 : [https://www.figma.com/file/EM4HvIdJLbfFOG4d9AZCv8/Untitled?node-id=0-1t=FLTBiv5qqQpDmWJf-0](https://www.figma.com/file/EM4HvIdJLbfFOG4d9AZCv8/Untitled?node-id=0-1&t=FLTBiv5qqQpDmWJf-0)

## 코드 컨벤션

1. URL, URI는 REST API 규칙에 따른다.
2. 파일명의 띄어쓰기는 "-" (하이픈) 으로 연결한다.
3. Class는 대문자로 시작하는 Upper Camel Case를 사용한다.
4. 일반 변수명은 소문자로 시작하는 Lower Camel Case로 통일한다.
5. 백엔드는 3계층 구조로 설계한다. (Router, Service, Model)

## Branch 구조

```
              feature#FE
             /
master -----dev
             \
              feature#BE - feature#BE#order / feature#BE#user / feature#BE#product
```

## 기타 사항
