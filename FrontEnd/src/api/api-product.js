import axios from "axios";

export const getAllProducts = async () => {
  const data = await axios.get(`http://34.22.85.44:5000/api/products`);
  return data.data.reverse();
};

export const getProductById = async (productId) => {
  const data = await axios.get(
    `http://34.22.85.44:5000/api/products/${productId}`
  );
  return data.data;
};

export const getProductsByCategory = async (
  categoryBundleTitle,
  categoryName
) => {
  const data = await axios.get(
    `http://34.22.85.44:5000/api/products/${categoryBundleTitle}/${categoryName}`
  );
  return data.data;
};

export const getProductsByCategoryPrice = async (price1, price2) => {
  const data = await axios.get(
    `http://34.22.85.44:5000/api/products/prices/${price1}/${price2}`
  );
  return data.data;
};

export const getProductsByIsBest = async () => {
  const data = await axios.get(
    "http://34.22.85.44:5000/api/products/lists/best"
  );
  return data.data;
};

export const getProductsByIsPicked = async () => {
  const data = await axios.get(
    "http://34.22.85.44:5000/api/products/lists/picked"
  );
  return data.data;
};

export const editProductById = async (productId, data) => {
  const result = await axios.put(
    `http://34.22.85.44:5000/api/products/${productId}`,
    {
      _id: data.productId,
      name: data.name,
      brand: data.brand,
      type: data.type,
      country: data.country,
      region: data.region,
      imgUrl: data.imgUrl,
      info: data.info,
      price: data.price,
      discountPrice: data.discountPrice,
      saleCount: 0,
      saleState: "판매중",
      isPicked: data.isPicked,
      isBest: data.isBest,
      inventory: data.inventory,
      tags: data.tags,
      features: data.features,
    }
  );
  return result;
};

export const changeSaleStateById = async (productId, saleState) => {
  const result = await axios.patch(
    `http://34.22.85.44:5000/api/products/${productId}/${saleState}`,
    {
      saleState: saleState, // 체크된 상품들의 id 배열을 엑시오스로 넘겨줌
    }
  );
  return result;
};

export const deleteCheckedProductsById = async (checkedProductIds) => {
  const result = await checkedProductIds.forEach((id) => {
    axios.delete(`http://34.22.85.44:5000/api/products/${id}`);
  });
  return result;
};
