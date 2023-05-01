import { Link } from "react-router-dom";
import classes from "./category-modal-list.module.css";

const CategoryModalList = (props) => {
  const { _id, name } = props.category;
  const title = props.title;

  let linkTag = "";
  if (title === "WINE") {
    linkTag = `/category/types/${name}`;
  }
  if (title === "COUNTRY") {
    linkTag = `/category/countries/${name}`;
  }
  if (title === "PRICE") {
    linkTag = `/category/prices/${+name.split("~")[0].slice(0, -2) * 10000}/${
      +name.split("~")[1].slice(0, -2) * 10000
    }`;
  }
  return (
    <>
      <li key={_id} className={classes.category_modal_li}>
        <Link to={linkTag}>{name}</Link>
      </li>
    </>
  );
};

export default CategoryModalList;
