import { useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { deleteOrderByOrderIndex } from "../../../api/api-order";
import Button from "../../UI/button";
import Pagination from "../../user/product/pagination";
import ManageOrderListItem from "./manage-order-list-item";

const ManageOrderList = (props) => {
  const orders = props.orders;

  const [checkedOrderIndexes, setCheckedOrderIndexes] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1); // 페이징처리를 위한 현재 페이지
  const limit = 10; // 페이징처리를 위한 한화면 게시글 리밋
  const offset = (page - 1) * limit; // 페이징처리를위한 배열 슬라이스를 위한 오프셋

  console.log(checkedOrderIndexes);
  const clickAllHandler = () => {
    if (isCheckAll) {
      setIsCheckAll(false);
      setCheckedOrderIndexes([]);
    } else {
      let arr = [];
      orders.slice(offset, offset + limit).forEach((item) => {
        arr.push(item.orderIndex);
      });
      setIsCheckAll(true);
      setCheckedOrderIndexes(arr);
    }
  };

  const deleteCheckedOrdersHandler = async () => {
    try {
      const result = await deleteOrderByOrderIndex(checkedOrderIndexes);
      console.log(result);
      queryClient.invalidateQueries("orders");
      alert("선택한 주문이 삭제되었습니다.");
      navigate("/manage/order_list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="flex flex-col p-6 min-h-screen">
      <div class="border-b">
        <span>전체 {orders.length}</span>
        <span> | </span>
        <span>
          상품준비중&nbsp;
          {
            orders.filter((order) => order.shippingState === "상품준비중")
              .length
          }
        </span>
        <span> | </span>
        <span>
          배송준비중&nbsp;
          {
            orders.filter((order) => order.shippingState === "배송준비중")
              .length
          }
        </span>
        <span> | </span>
        <span>
          배송중&nbsp;
          {orders.filter((order) => order.shippingState === "배송중").length}
        </span>
        <span> | </span>
        <span>
          배송완료&nbsp;
          {orders.filter((order) => order.shippingState === "배송완료").length}
        </span>
      </div>
      <div class="py-4 flex gap-4 text-sm">
        <div class="w-32 h-11 bg-[#ffffff] flex justify-center px-3 border border-color2 rounded">
          <select class="w-full">
            <option value="카테고리선택">카테고리 선택</option>
            <option value="주문자명">주문자명</option>
            <option value="주문번호">주문번호</option>
            <option value="주문일자">주문일자</option>
            <option value="주문상태">주문상태</option>
            <option value="기간내 검색">기간내 검색</option>
          </select>
        </div>
        <input
          class="flex-grow h-11 px-3 border border-color2 rounded"
          type="text"
          placeholder="상품명 검색"
        />
        <div class="w-32 h-11 flex justify-center bg-[#ffffff] px-3 border border-color2 rounded items-center">
          엑셀 다운로드 | v
        </div>
      </div>
      <div class="flex flex-col py-2 px-5 bg-[#ffffff] min-h-[631px]">
        <ul>
          <li class=" flex text-center border-b w-full pt-2 pb-3 gap-3 text-sm font-bold">
            <input onChange={clickAllHandler} type="checkbox" />
            <span class="w-24 ">주문번호</span>
            <span class="w-24">아이디</span>
            <span class="w-24 ">주문자명</span>
            <span class="w-24 ">주문금액</span>
            <span class="w-24 ">배송상태</span>
            <span class="flex-grow ">요청사항</span>
            <span class="w-32 ">주문날짜</span>
            <button class="w-20">비고</button>
          </li>
          {orders.slice(offset, offset + limit).map((item) => {
            return (
              <ManageOrderListItem
                order={item}
                checkedOrderIndexes={checkedOrderIndexes}
                setCheckedOrderIndexes={setCheckedOrderIndexes}
                isCheckAll={isCheckAll}
              />
            );
          })}
        </ul>
        <div class="relative flex justify-between items-center h-20">
          <div class="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
            <Pagination
              total={orders.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
          <div onClick={deleteCheckedOrdersHandler}>
            <Button isConfirm={false}>선택 상품 삭제</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrderList;
