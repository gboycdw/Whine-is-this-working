import { useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { deleteCheckedOrdersByOrderIndex } from "../../../api/api-order";
import Button from "../../UI/button";
import Pagination from "../../user/product/pagination";
import ManageOrderListItem from "./manage-order-list-item";

const ManageOrderList = (props) => {
  const orders = props.orders;

  console.log(orders);

  const [checkedOrderIndexes, setCheckedOrderIndexes] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1); // 페이징처리를 위한 현재 페이지
  const limit = 10; // 페이징처리를 위한 한화면 게시글 리밋
  const offset = (page - 1) * limit; // 페이징처리를위한 배열 슬라이스를 위한 오프셋

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
    if (window.confirm("선택한 주문을 삭제하시겠습니까?")) {
      try {
        const result = await deleteCheckedOrdersByOrderIndex(
          checkedOrderIndexes
        );
        queryClient.invalidateQueries("orders");

        alert("선택한 주문이 삭제되었습니다.");
        navigate("/manage/order_list");
      } catch (error) {
        console.log(error);
      }
    }
    return;
  };

  return (
    <div className="flex flex-col p-6 min-h-screen">
      <span className="text-xl mb-3 font-bold px-5">주문 내역</span>
      <div className="mx-5 border-b">
        <span>전체 {orders.length}</span>
        <span> | </span>
        <span>
          상품준비중&nbsp;
          {
            orders.filter((order) => order.shippingStatus === "상품준비중")
              .length
          }
        </span>
        <span> | </span>
        <span>
          배송준비중&nbsp;
          {
            orders.filter((order) => order.shippingStatus === "배송준비중")
              .length
          }
        </span>
        <span> | </span>
        <span>
          배송중&nbsp;
          {orders.filter((order) => order.shippingStatus === "배송중").length}
        </span>
        <span> | </span>
        <span>
          배송완료&nbsp;
          {orders.filter((order) => order.shippingStatus === "배송완료").length}
        </span>
      </div>
      <div className="py-1 flex gap-4 text-sm">
        {/* <div className="w-32 h-11 bg-[#ffffff] flex justify-center px-3 border border-color2 rounded">
          <select className="w-full">
            <option value="카테고리선택">카테고리 선택</option>
            <option value="주문자명">주문자명</option>
            <option value="주문번호">주문번호</option>
            <option value="주문일자">주문일자</option>
            <option value="주문상태">주문상태</option>
            <option value="기간내 검색">기간내 검색</option>
          </select>
        </div>
        <input
          className="flex-grow h-11 px-3 border border-color2 rounded"
          type="text"
          placeholder="상품명 검색"
        />
        <div className="w-32 h-11 flex justify-center bg-[#ffffff] px-3 border border-color2 rounded items-center">
          엑셀 다운로드 | v
        </div> */}
      </div>
      <div className="flex flex-col py-2 px-5 bg-[#ffffff] min-h-[631px]">
        <ul>
          <li className=" flex text-center border-b w-full pt-2 pb-3 gap-3 text-sm font-bold">
            <input onChange={clickAllHandler} type="checkbox" />
            <span className="w-24 ">주문번호</span>
            <span className="w-24">아이디</span>
            <span className="w-24 ">주문자명</span>
            <span className="w-24 ">주문금액</span>
            <span className="w-24 ">배송상태</span>
            <span className="flex-grow ">요청사항</span>
            <span className="w-32 ">주문날짜</span>
            <button className="w-20">비고</button>
          </li>
          {orders.slice(offset, offset + limit).map((item) => {
            return (
              <ManageOrderListItem
                key={item._id}
                order={item}
                checkedOrderIndexes={checkedOrderIndexes}
                setCheckedOrderIndexes={setCheckedOrderIndexes}
                isCheckAll={isCheckAll}
              />
            );
          })}
        </ul>
        <div className="relative flex justify-between items-center h-20">
          <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
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
