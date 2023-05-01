import { useState } from "react";
import CategoryManageForm from "./manage-category-form";
import uuid from "react-uuid";
import Button from "../../UI/button";
import axios from "axios";

const ManageCategory = (props) => {
  const [categoryBundle, setCategoryBundle] = useState(props.categoryBundle);
  console.log(categoryBundle);

  const categoryPushHandler = (categoryBundleId, enteredNewCategory) => {
    const enteredNewCategoryId = enteredNewCategory._id;
    const enteredNewCategoryName = enteredNewCategory.name;

    let copiedCategoryBundle = [...categoryBundle];
    const index = copiedCategoryBundle.findIndex(
      (bundle) => bundle._id === categoryBundleId
    );

    const newCategories = categoryBundle[index].categories.map((category) => {
      console.log(category._id, enteredNewCategoryId);
      return category._id === enteredNewCategoryId
        ? { ...category, name: enteredNewCategoryName }
        : category;
    });

    console.log(newCategories);

    const newBundle = categoryBundle.map((bundle) =>
      bundle._id === categoryBundleId
        ? { ...bundle, categories: newCategories }
        : bundle
    );

    setCategoryBundle(newBundle);
  };

  const categoryDeleteHandler = (categoryBundleId, categoryId) => {
    let copiedCategoryBundle = [...categoryBundle];
    const index = copiedCategoryBundle.findIndex(
      (bundle) => bundle._id === categoryBundleId
    );

    const editedcategories = copiedCategoryBundle[index].categories.filter(
      (category) => category._id !== categoryId
    );

    const newBundle = copiedCategoryBundle.map((bundle) =>
      bundle._id === categoryBundleId
        ? { ...bundle, categories: editedcategories }
        : bundle
    );

    setCategoryBundle(newBundle);
  };

  const categoryAddHandler = (e) => {
    e.preventDefault();
    let newArr = [...categoryBundle];
    newArr.map((bundle) => {
      if (bundle._id === e.target.id) {
        bundle.categories.push({ _id: uuid(), name: "" });
      }
    });
    setCategoryBundle(newArr);
  };

  const categorySaveHandler = async (event) => {
    event.preventDefault();

    if (
      categoryBundle.filter((bundle) => bundle.categories.length < 1).length > 0
    ) {
      alert("카테고리를 최소 한개 입력해주세요.");
      return;
    }

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

    categoryBundle.forEach((bundle) => {
      bundle.categories.forEach((categories) => {
        delete categories._id;
      });
    });

    try {
      categoryBundle.forEach(async (bundle) => {
        await axios.patch(
          `http://34.22.85.44:5000/api/categories/${bundle._id}`,
          {
            categories: bundle.categories,
          }
        );
      });
      // const response = await axios.put(
      //   `http://34.22.85.44:5000/api/categories/${categoryBundle}`,
      //   {
      //     categoryBundle,
      //   }
      // );
      // navigate("/manage/category");
    } catch (error) {
      console.log(error);
      return;
    }
    alert("카테고리 저장이 완료되었습니다.");

    // for (let i = 0; i < categories.length; i++) {
    //   if (category[i]) {
    //     // changeCategoryOfArticles(userId, categories[i].name, category[i].name);
    //   }
    // }
  };

  return (
    <div className="flex flex-col w-full p-6">
      <span className="text-xl mb-3 font-bold px-5">카테고리 관리</span>
      <div className="mx-5 border-b mb-5"></div>
      <div className="flex flex-col bg-[#ffffff] mx-5 px-8 py-4 min-h-[500px] border border-color2">
        <div className="grid grid-cols-2 gap-10">
          {categoryBundle.map((bundle) => {
            return (
              <div key={uuid()} className="flex flex-col w-[400px] text-sm">
                <div className="h-12 flex gap-10 justify-between items-center border-b border-color2 ">
                  <div className="flex items-center font-bold text-lg px-1">
                    {bundle.title}
                  </div>
                </div>

                <ul>
                  {bundle.categories.map((category) => {
                    return (
                      <CategoryManageForm
                        key={category._id}
                        categoryPushHandler={categoryPushHandler}
                        categoryDeleteHandler={categoryDeleteHandler}
                        categoryBundleId={bundle._id}
                        categoryId={category._id}
                        categoryName={category.name}
                      />
                    );
                  })}
                </ul>
                <div className="flex justify-end h-12 items-center px-1">
                  <button id={bundle._id} onClick={categoryAddHandler}>
                    카테고리 추가
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end">
          <div onClick={categorySaveHandler}>
            <Button isConfirm={true}>저장</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;
