import { Link } from "react-router-dom";
import classes from "./product.module.css";

const Product = (props) => {
  const { id, name, nameEng, imgUrl, tags, price } = props.product;

  return (
    <li key={id} className={classes.product_item}>
      <Link to={`/product/${id}`}>
        <div>
          <div className={classes.product_box}>
            <img className={classes.product_img} src={imgUrl} alt={name}></img>
          </div>
          <h3 className={classes.product_name}>{name}</h3>
          <h3 className={classes.product_name_eng}>{nameEng}</h3>
          <div className={classes.cate_tag_list}>
            {tags.map((tag) => {
              return (
                <span key={tag} className={classes.tag_name}>
                  {tag}
                </span>
              );
            })}
          </div>
          <span className={classes.product_price}>
            {price.toLocaleString()}원
          </span>
        </div>
      </Link>
    </li>
  );
};

export default Product;
