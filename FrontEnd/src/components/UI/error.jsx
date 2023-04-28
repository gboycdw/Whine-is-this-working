const Error = (error) => {
  return (
    <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
      {error.message}
    </div>
  );
};

export default Error;
