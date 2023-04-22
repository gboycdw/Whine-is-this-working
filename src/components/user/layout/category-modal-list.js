import { Link } from "react-router-dom";
import classes from "./category-modal-list.module.css";

const CategoryModalList = (props) => {
  const category = props.category;

  return (
    <>
      <li key={category.id} className={classes.category_modal_li}>
        <Link to={category.link}>{category.name}</Link>
      </li>
    </>
  );
};

export default CategoryModalList;
