import DeliveryInfo from "./manage-order-detail/delivery-info";
import OrderInfo from "./manage-order-detail/order-info";
import PaymentInfo from "./manage-order-detail/payment-info";
import ProductInfo from "./manage-order-detail/product-info";

const ManageOrderDetail = (props) => {
  return (
    <div class="flex p-6 justify-center bg-[#ffffff] mb-10">
      <div class="flex text-sm justify-center m-auto">
        <div class="flex flex-col gap-8">
          <div class="flex">
            <OrderInfo />
            <DeliveryInfo />
          </div>
          <PaymentInfo />
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default ManageOrderDetail;
