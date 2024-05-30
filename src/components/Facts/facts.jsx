import factsCss from './facts.module.css'
import img_fact1 from './fact1.png'
import img_fact2 from './fact2.png'
import img_fact3 from './fact3.png'

const FactsBlock = () => {
    return(
        <div class="container" >
            <div class="row justify-content-center" >
                <div class="d-flex col-10 col-sm-5 col-lg" id={factsCss.FactsBlockCurrent}>
                    <div className={factsCss.ReviewerInfo}>
                            <img src={img_fact1}/>
                        </div>
                    <p>Выезд в любые районы. Свой расходный материал. Соблюдение стерильности.</p>
                </div>
                <div class="d-flex col-10 col-sm-5 col-lg" id={factsCss.FactsBlockCurrent}>
                    <div className={factsCss.ReviewerInfo}>
                            <img src={img_fact2}/>
                        </div>
                    <p>Профессиональная работа со сложными венами.</p>
                </div>
                <div class="d-flex col-10 col-sm-5 col-lg" id={factsCss.FactsBlockCurrent}>
                    <div className={factsCss.ReviewerInfo}>
                            <img src={img_fact3}/>
                        </div>
                    <p>Квалифицированный специалист. Полный пакет документов. Большой опыт работы</p>
                </div>
            </div>
        </div>
    );
}

export default FactsBlock;