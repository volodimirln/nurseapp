import ReviewsCss from './ReviewsBlock.module.css'
import av1 from './review1.png'
import av2 from './review2.png'

const ReviewsBlock = () => {
    return(
        <div class="container"  id={ReviewsCss.MainBlock}>
            <div class="row justify-content-center">
                <p className={ReviewsCss.NameMainBlock}>отзывы моих клиентов</p>
                <div  className={ReviewsCss.ReviewBlock}>
                    <div className={ReviewsCss.ReviewBlockCurrent}>
                        <p>В результате обращения к Елене мы получили не только высококвалифици-рованные медицинские услуги, 
                            но и необычайно терпеливое отношение к пациенту и его окружению..</p>
                            <div className={ReviewsCss.ReviewerInfo}>
                                <img src={av1}/>
                                <p>Елена н.</p>
                            </div>
                    </div>
                    <div className={ReviewsCss.ReviewBlockCurrent}>
                        <p>Очень хороший специалист!! Все профес-сионально и быстро. Если даже нет стойки для капельницы, 
                            Люда всегда что-нибудь придумает, куда ее повесить. Общительная, во время....</p>
                            <div className={ReviewsCss.ReviewerInfo}>
                                <img src={av2}/>
                                <p>Нина</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewsBlock;