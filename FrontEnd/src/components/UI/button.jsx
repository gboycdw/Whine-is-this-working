const Button = (props) => {
  const { isConfirm } = props;

  return (
    <>
      {isConfirm ? (
        <div class="py-[8px] px-4 bg-color1 rounded-lg text-[#ffffff] box-border font-bold text-sm hover:cursor-pointer hover:bg-color0">
          {props.children}
        </div>
      ) : (
        <div class="py-[6px] px-4 border border-color1 border-2 box-border text-color1 font-bold rounded-lg text-sm hover:cursor-pointer hover:bg-color2">
          {props.children}
        </div>
      )}
    </>
  );
};

export default Button;
