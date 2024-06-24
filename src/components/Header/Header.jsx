import style from "./Header.module.css" 
import kg from "../../../public/assets/1f1ec-1f1e7.svg"
import usa from "../../../public/assets/1f1f0-1f1ec.svg"
import instg from "../../../public/assets/icons8-instagram-48.png"
import facebook from "../../../public/assets/icons8-facebook-48.png"
import youtube from "../../../public/assets/icons8-youtube-48.png"

const Header = () => {
  return (
    <>
        <section className={style.container}>
            <div className={style.Header}>
                <a href="#">Факультеты</a>
                <a href="#">Институты</a>
                <a href="#">Колледжи</a>
                <a href="#">Телефоны</a>
                <a href="#">Старый сайт</a>
                <div className={style.changeLang}>
                    <img src={kg} alt="" />
                    <img src={usa} alt="" />
                </div>
                <div className={style.socialMedia}>
                    <a href="https://www.facebook.com/kg.knu/" target="_blank">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.instagram.com/knu.official.page/" target="_blank">
                        <img src={instg} alt="" />
                    </a>
                    <a href="https://www.youtube.com/@jeenbek-eraliev/videos" target="_blank">
                        <img src={youtube} alt="" />
                    </a>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Header