import { Link } from "react-router-dom";
import classes from "./category-modal-list.module.css";

const CategoryModalList = (props) => {
  const { id, category, name } = props.category;

  return (
    <>
      <li key={id} className={classes.category_modal_li}>
        <Link to={`/product/category/${name}`}>{name}</Link>
      </li>
    </>
  );
};

export default CategoryModalList;
