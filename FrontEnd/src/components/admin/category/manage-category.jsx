import { useState } from "react";
import CategoryManageForm from "./manage-category-form";
import uuid from "react-uuid";
import Button from "../../UI/button";

const categories = [
  // 카테고리 더미데이터 (각 카테고리의 타이틀이 있고 카테고리리스트들이 자식요소로있음)
  {
    id: 0,
    title: "wine", // 카테고리 번들의 타이틀//
    categories: [
      // 카테고리 번들의 각 카테고리 객체들
      { id: 1, name: "레드와인" },
      { id: 2, name: "화이트와인" },
      { id: 3, name: "로제와인" },
      { id: 4, name: "무알콜" },
      { id: 5, name: "스파클링" },
    ],
  },
  {
    id: 1,
    title: "country",
    categories: [
      { id: 1, name: "스페인" },
      { id: 2, name: "프랑스" },
      { id: 3, name: "미국" },
      { id: 4, name: "이탈리아" },
      { id: 5, name: "아르헨티나" },
    ],
  },
  {
    id: 2,
    title: "가격대별",
    categories: [
      { id: uuid(), name: "~1만원" },
      { id: uuid(), name: "1만원~3만원" },
      { id: uuid(), name: "3만원~5만원" },
      { id: uuid(), name: "5만원~10만원" },
      { id: uuid(), name: "10만원~50만원" },
      { id: uuid(), name: "100만원~500만원" },
      { id: uuid(), name: "500만원~" },
    ],
  },
];

const ManageCategory = (props) => {
  // const categoryBundle = props.categoryBundle;
  const [categoryBundle, setCategoryBundle] = useState(categories);

  const categoryPushHandler = (categoryBundleId, enteredNewCategory) => {
    const enteredNewCategoryId = enteredNewCategory.id;
    const enteredNewCategoryName = enteredNewCategory.name;

    let copiedCategoryBundle = [...categoryBundle];
    const index = copiedCategoryBundle.findIndex(
      (bundle) => bundle.id === categoryBundleId
    );

    const newCategories = categoryBundle[index].categories.map((category) =>
      category.id === enteredNewCategoryId
        ? { ...category, name: enteredNewCategoryName }
        : category
    );

    const newBundle = categoryBundle.map((bundle) =>
      bundle.id === categoryBundleId
        ? { ...bundle, categories: newCategories }
        : bundle
    );

    setCategoryBundle(newBundle);

    // const findIndex = newCategoryBundle.findIndex(
    //   (category) => category.id === id
    // );
    // let copiedCategory = [...category];
    // copiedCategory[findIndex] = {
    //   ...category[findIndex],
    //   name: enteredCategory.name,
    // };
    // setCategory(copiedCategory);
  };

  const categoryDeleteHandler = (categoryBundleId, categoryId) => {
    let copiedCategoryBundle = [...categoryBundle];
    const index = copiedCategoryBundle.findIndex(
      (bundle) => bundle.id === categoryBundleId
    );

    const editedcategories = copiedCategoryBundle[index].categories.filter(
      (category) => category.id !== categoryId
    );

    const newBundle = copiedCategoryBundle.map((bundle) =>
      bundle.id === categoryBundleId
        ? { ...bundle, categories: editedcategories }
        : bundle
    );

    setCategoryBundle(newBundle);
  };

  const categoryAddHandler = (e) => {
    e.preventDefault();
    let newArr = [...categoryBundle];
    newArr.map((bundle) => {
      if (bundle.id === +e.target.id) {
        bundle.categories.push({ id: uuid(), name: "" });
      }
    });
    setCategoryBundle(newArr);
  };

  const categorySaveHandler = async (event) => {
    event.preventDefault();

    console.log(categoryBundle);
    if (
      categoryBundle.filter((bundle) => bundle.categories.length < 1).length > 0
    ) {
      alert("카테고리를 최소 한개 입력해주세요.");
      return;
    }

    console.log(
      categoryBundle.filter((bundle) => {
        return (
          bundle.categories.filter((category) => {
            return category.name.trim().length === 0;
          }).length !== 0
        );
      })
    );
    if (
      categoryBundle.filter((bundle) => {
        return (
          bundle.categories.filter((category) => {
            return category.name.trim().length === 0;
          }).length !== 0
        );
      }).length !== 0
    ) {
      alert("카테고리 이름에 빈곳이 있습니다.");
      return;
    }
    console.log(categoryBundle);
    alert("카테고리 저장이 완료되었습니다.");

    // for (let i = 0; i < categories.length; i++) {
    //   if (category[i]) {
    //     // changeCategoryOfArticles(userId, categories[i].name, category[i].name);
    //   }
    // }
  };

  return (
    <div class="flex w-full p-6">
      <div class="flex flex-col bg-[#ffffff] px-8 py-4 min-h-[500px] border border-color2">
        <div class="grid grid-cols-2 gap-10">
          {categoryBundle.map((bundle) => {
            return (
              <div key={uuid()} class="flex flex-col w-[400px] text-sm">
                <div class="h-12 flex gap-10 justify-between items-center border-b border-color2 ">
                  <div class="flex items-center font-bold text-lg px-1">
                    {bundle.title}
                  </div>
                  {/* <div class="flex gap-2 px-1">
                    <button
                      class="py-1 px-3 "
                      // onClick={categoryEditHandler}
                    >
                      수정
                    </button>
                    <button
                      class="py-1 px-3 "
                      // onClick={categoryDeleteHandler}
                    >
                      삭제
                    </button>
                  </div> */}
                </div>

                <ul>
                  {bundle.categories.map((category) => {
                    return (
                      <CategoryManageForm
                        key={category.id}
                        categoryPushHandler={categoryPushHandler}
                        categoryDeleteHandler={categoryDeleteHandler}
                        categoryBundleId={bundle.id}
                        categoryId={category.id}
                        categoryName={category.name}
                      />
                    );
                  })}
                </ul>
                <div class="flex justify-end h-12 items-center px-1">
                  <button id={bundle.id} onClick={categoryAddHandler}>
                    카테고리 추가
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div class="flex justify-end">
          <div onClick={categorySaveHandler}>
            <Button isConfirm={true}>저장</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;
