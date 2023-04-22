const Button = (props) => {
  const { isConfirm } = props;

  return (
    <>
      {isConfirm ? (
        <button class="py-2 px-4 bg-color1 rounded-lg text-[#ffffff] font-bold text-sm">
          {props.children}
        </button>
      ) : (
        <button class="py-2 px-4 border border-color1 border-2 text-color1 font-bold rounded-lg text-sm">
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
