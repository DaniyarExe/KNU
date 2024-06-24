import style from "./Navbar.module.css";
import home from "../../../public/assets/icons8-home-64.png";
import search from "../../../public/assets/icons8-search-50.png";
import Ticket from "./Ticket/Ticket";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <a href="">
          <img src={home} alt="Home" />
        </a>
        <div className={style.navigation}>
          <a href="">О КНУ</a>
          <a href="">НАУКА</a>
          <a href="">ОБРАЗОВАНИЕ</a>
          <a href="">НПА</a>
          <a href="">AVN</a>
          <a href="">ОБРАТНАЯ СВЯЗЬ</a>
          <a href="">МЕДИА</a>
          <a href="">КОНТАКТЫ</a>
          <a href="">ВОПРОСЫ ИГА</a>
        </div>
        <div className={style.search}>
          <img src={search} alt="Search" />
        </div>
      </div>
      <Ticket />
    </div>
  );
};

export default Navbar;
