import DeliveryInfo from "./manage-order-detail/delivery-info";
import OrderInfo from "./manage-order-detail/order-info";
import PaymentInfo from "./manage-order-detail/payment-info";
import ProductInfo from "./manage-order-detail/product-info";

const ManageOrderDetail = (props) => {
  const order = props.order;

  console.log(order);

  return (
    <div className="flex p-6 justify-center bg-[#ffffff] mb-10">
      <div className="flex text-sm justify-center m-auto">
        <div className="flex flex-col gap-8">
          <div className="flex">
            <OrderInfo order={order} />
            <DeliveryInfo order={order} />
          </div>
          <PaymentInfo order={order} />
          <ProductInfo order={order} />
        </div>
      </div>
    </div>
  );
};

export default ManageOrderDetail;
