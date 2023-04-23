import AdminLayout from "../../../components/admin/layout/admin-layout";
import ManageProductList from "../../../components/admin/product/manage-product-list";

const products = [
  {
    id: 0,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 1,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 2,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 3,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 4,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 5,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 6,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 7,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 8,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 9,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 0,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 1,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 2,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 3,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 4,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 5,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 6,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 7,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 8,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 9,
    no: 1,
    name: "와인",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    saleState: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
];

const ManageProductListPage = (props) => {
  return (
    <>
      <AdminLayout title={"상품 관리"}>
        <ManageProductList products={products} />
      </AdminLayout>
    </>
  );
};

export default ManageProductListPage;
