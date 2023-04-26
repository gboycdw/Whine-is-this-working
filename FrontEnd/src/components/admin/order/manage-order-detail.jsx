import DeliveryInfo from "./manage-order-detail/delivery-info";
import OrderInfo from "./manage-order-detail/order-info";
import PaymentInfo from "./manage-order-detail/payment-info";
import ProductInfo from "./manage-order-detail/product-info";

const ManageOrderDetail = (props) => {
  const order = props.order[0];

  return (
    <div class="flex p-6 justify-center bg-[#ffffff] mb-10">
      <div class="flex text-sm justify-center m-auto">
        <div class="flex flex-col gap-8">
          <div class="flex">
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
