import style from "../CSS/Card.module.css"
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import Photo from "../AniketZadeProfessional.png"

const Card = () => {

    return <div
        className={style.card}

    >

        <div
            className={style.cardS1}
            style={{
                backgroundImage:`url(${Photo})`
            }}
        >
            <div className={style.cardInnerSection}>
                <div className={style.details}>
                    <p>
                        Sumit comes with capital markets expertise with coverage extending to Europe and the Middle East. He comes with 14+ years’ experience in structured credit, derivatives, corporate finance and asset management with a focus on emerging markets accompanied by a broad institutional network. He worked at JP Morgan and a Buy side boutique PE, a private equity firm in London He is also an investor in Daksfirst and Co-CEO of Maystone Capital a UK focussed merchant bank. He holds a Bachelor and Masters in engineering from IIT Bombay, an MBA from IIM Lucknow and CFA and FRM certifications
                        Sumit comes with capital markets expertise with coverage extending to Europe and the Middle East. He comes with 14+ years’ experience in structured credit, derivatives, corporate finance and asset management with a focus on emerging markets accompanied by a broad institutional network. He worked at JP Morgan and a Buy side boutique PE, a private equity firm in London He is also an investor in Daksfirst and Co-CEO of Maystone Capital a UK focussed merchant bank. He holds a Bachelor and Masters in engineering from IIT Bombay, an MBA from IIM Lucknow and CFA and FRM certifications
                    </p>
                    <h3>Aniket Zade</h3>
                    <div className={style.socialIcons}>
                        <IoLogoLinkedin className={style.icons} />
                        <IoLogoTwitter className={style.icons} />
                        <IoLogoGithub className={style.icons} />
                    </div>
                </div>
                <div className={style.CIS1}>
                    <h1>Aniket Zade</h1>
                    {/* <hr /> */}
                    <p>Vice President, Investment Team</p>
                </div>
            </div>
        </div>

    </div>

}

export default Card;


















