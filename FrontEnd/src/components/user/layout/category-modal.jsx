import { useEffect, useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import CategoryModalList from "./category-modal-list";

import classes from "./category-modal.module.css";

const CategoryModal = (props) => {
  const { categories, id } = props.categoryBundle;
  const [isCategoryModal, setIsCategoryModal] = useState(false);
  const categoryIndex = props.categoryIndex;

  useEffect(() => {
    if (id === categoryIndex) {
      setIsCategoryModal(true);
    } else {
      setIsCategoryModal(false);
    }
  }, [categoryIndex, id]);

  const CategoryModalUl = styled.ul`
    display: flex;
    flex-direction: column;
    ${categories.length > 1 ? "margin-bottom:15px;" : ""}
  `;

  return (
    <>
      {isCategoryModal ? (
        <div key={categories.id} className={classes.category_modal}>
          <CategoryModalUl>
            {categories.map((category) => {
              return <CategoryModalList key={uuid()} category={category} />;
            })}
          </CategoryModalUl>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CategoryModal;
