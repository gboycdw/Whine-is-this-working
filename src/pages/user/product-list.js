import Product from "../../components/UI/product/product";
import classes from "./product-list.module.css";
import Pagination from "../../components/UI/product/pagination";
import { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";

const ProductList = () => {
  // 상품, 카테고리명 (ex. 화이트) 더미데이터 (추후 받아올 예정)
  const data = [
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
    {
      name: "맛있는 와인",
      nameEng: "delicious wine",
      imgUrl:
        "https://www.winenara.com/uploads/product/550/a560576f8ce8b659af5d6908b0d9b60f.png",
      tags: ["미국", "화이트"],
      price: "53,000원",
    },
  ];
  const categoryName = "WHITE";
  const [productData, setProductData] = useState(data);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <>
      <Layout>
        <div className={classes.container}>
          <div>
            <h1 className={classes.categoryName}>{categoryName}</h1>
          </div>
          <ul>
            {productData.slice(offset, offset + limit).map((product) => {
              return <Product product={product} />;
            })}
          </ul>
          <div>
            <Pagination
              total={productData.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductList;
