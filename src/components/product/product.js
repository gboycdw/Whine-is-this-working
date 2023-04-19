import classes from "./product.module.css";

const Product = (props) => {
  const { id, name, nameEng, imgUrl, tags, price } = props.product;

  return (
    <li key={id} className={classes.product_item}>
      <div>
        <div className={classes.product_box}>
          <img className={classes.product_img} src={imgUrl} alt={name}></img>
        </div>
        <h3 className={classes.product_name}>{name}</h3>
        <h3 className={classes.product_name_eng}>{nameEng}</h3>
        <div className={classes.cate_tag_list}>
          {tags.map((tag) => {
            return <span className={classes.tag_name}>{tag}</span>;
          })}
        </div>
        <span className={classes.product_price}>{price}</span>
      </div>
    </li>
  );
};

export default Product;
