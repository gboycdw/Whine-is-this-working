import classes from "./pagination.module.css";

const Pagination = (props) => {
  const { total, limit, page, setPage } = props;
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <nav className={classes.page_div}>
        {/* 좌측 이동 버튼 */}
        <button
          className={classes.page_btn}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              className={classes.page_btn}
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </button>
          ))}
        {/* 우측 이동 버튼 */}
        <button
          className={classes.page_btn}
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </button>
      </nav>
    </>
  );
};

export default Pagination;
