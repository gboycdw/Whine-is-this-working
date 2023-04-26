import axios from "axios";

export const getAllOrders = async () => {
  const data = await axios.get("http://34.22.85.44:5000/api/orders");
  return data.data;
};

export const getOrdersByBuyerEmail = async (buyerEmail) => {
  const data = await axios.get(
    `http://34.22.85.44:5000/api/orders/${buyerEmail}`
  );
  return data.data;
};

export const getOrderByOrderIndex = async (OrderIndex) => {
  const data = await axios.get(`http://34.22.85.44:5000/api/orders/`);
  return data.data;
};

export const deleteOrderByOrderIndex = async (orderIndex) => {
  const result = await axios.get(
    `http://34.22.85.44:5000/api/orders/admin/${orderIndex}`
  );
  return result;
};

export const changeShippingStatusByOrderIndex = async (
  orderIndex,
  shippingStatus
) => {
  const result = await axios.patch(
    `http://34.22.85.44:5000/api/orders/${orderIndex}/${shippingStatus}`,
    {
      orderIndex,
      shippingStatus,
    }
  );
  return result;
};
