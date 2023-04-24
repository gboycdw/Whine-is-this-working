import { Fragment, useEffect, useRef, useState } from "react";

const CategoryManageForm = (props) => {
  const categoryName = props.categoryName;
  const categoryId = props.categoryId;
  const categoryBundleId = props.categoryBundleId;
  const inputRef = useRef();

  const [enteredCategory, setEnteredCategory] = useState(categoryName);
  const [isInput, setIsInput] = useState(
    categoryName === "" || categoryName === "최소 카테고리 하나를 입력해주세요."
      ? true
      : false
  ); /* 받아온 카테고리가 정의되어있지 않으면 인풋창, 있으면 리스트로 상태를 관리 */

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const categoryCancelHandler = (event) => {
    event.preventDefault();
    setIsInput(false);
    if (categoryName === "") {
      props.categoryDeleteHandler(categoryBundleId, categoryId);
    } else {
      setEnteredCategory(categoryName);
    }
  };

  const categoryConfirmHandler = (event) => {
    event.preventDefault();
    if (enteredCategory.trim().length === 0) {
      alert("카테고리 이름을 입력해주세요.");
      return;
    }
    props.categoryPushHandler(categoryBundleId, {
      id: categoryId,
      name: enteredCategory,
    });
    setIsInput(false);
  };

  const categoryEditHandler = (event) => {
    event.preventDefault();
    setIsInput(true);
  };

  const categoryDeleteHandler = (event) => {
    event.preventDefault();
    props.categoryDeleteHandler(categoryBundleId, categoryId);
    console.log("hi");
  };

  useEffect(() => {
    if (isInput === true) {
      inputRef.current.focus();
    }
  });

  return (
    <div class=" h-10 flex gap-10 justify-between items-center border-b border-color2">
      {isInput ? (
        <Fragment>
          <input
            type="text"
            value={enteredCategory}
            onChange={categoryChangeHandler}
            class="flex-grow h-8 px-1"
            ref={inputRef}
          />
          <div class="flex gap-2 px-1">
            <button
              class="py-1 px-3  border border-color2"
              onClick={categoryCancelHandler}
            >
              취소
            </button>
            <button
              class="py-1 px-3  border border-color2"
              onClick={categoryConfirmHandler}
            >
              확인
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <span class="w-48 px-1">{categoryName}</span>
          <div class="flex gap-2 px-1">
            <button
              class="py-1 px-3  border border-color2"
              onClick={categoryEditHandler}
            >
              수정
            </button>
            <button
              class="py-1 px-3  border border-color2"
              onClick={categoryDeleteHandler}
            >
              삭제
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default CategoryManageForm;
