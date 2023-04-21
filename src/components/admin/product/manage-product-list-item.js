const ManageProductListItem = (props) => {
  const {
    no,
    imgUrl,
    name,
    price,
    category,
    state,
    inventory,
    registerDay,
    editDay,
  } = props.product;

  return (
    <li class="flex text-center items-center border-b border-color2 w-full py-1 gap-3 text-sm">
      <input type="checkbox" />
      <span class="w-10 ">{no}</span>
      <img class="h-10" src={imgUrl} alt={name} />
      <span class="grow ">{name}</span>
      <span class="w-24 ">{price.toLocaleString()}원</span>
      <span class="w-20 ">{category}</span>
      <span class="w-20 ">{state} v</span>
      <span class="w-16 ">{inventory}</span>
      <span class="w-32 ">{registerDay}</span>
      <span class="w-32 ">{editDay}</span>
      <button class="w-20 ">수정하기</button>
    </li>
  );
};

export default ManageProductListItem;
