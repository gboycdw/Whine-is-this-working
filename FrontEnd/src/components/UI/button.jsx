const Button = (props) => {
  const { isConfirm } = props;

  return (
    <>
      {isConfirm ? (
        <div class="flex items-center justify-center py-[8px] px-4 bg-color1 rounded text-[#ffffff] box-border font-bold  hover:cursor-pointer hover:bg-color0">
          {props.children}
        </div>
      ) : (
        <div class="py-[7px] px-4 border border-color1 border-1 box-border text-color1 font-bold rounded hover:cursor-pointer hover:bg-color2">
          {props.children}
        </div>
      )}
    </>
  );
};

export default Button;
