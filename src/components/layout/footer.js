import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_content}>
        <p>프로젝트명 : 와인 쇼핑몰 제작 | 팀명 : 와인..게되네</p>
        <p>팀리더 : 최도원 </p>
        <p>백엔드 : 최도원, 신민석, 연정환</p>
        <p>프론트 : 이수현, 장윤수, 고병욱</p>
      </div>
    </div>
  );
};

export default Footer;
