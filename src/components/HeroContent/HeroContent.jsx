import style from "./HeroContent.module.css"
import backImg from "../../../public/assets/head-back.jpg"
import logo from "../../../public/assets/cropped-logo_knu_fin_150_150-на-сайте-с-23.01.2024-.png"

const HeroContent = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
        <div className={style.backImg}>
            <img src={backImg} alt="" /> 
            </div>   
            <div className={style.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={style.infoKNU}>
                <h2>Миссия КНУ - опираясь на классические и инновационные достижения, сохранить и приумножить
образовательный и научный потенциал университета. Быть центром генерации национальных
‚ идей, реализации национальных проектов и формирования национальной интеллигенции</h2>
            </div>
        </div>
    </div>
  )
}

export default HeroContent