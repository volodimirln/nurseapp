import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceStyle from '../../style/servicesStyle.css';
import points from './points.png'
import loc from './location.png'
import rightmainpage from './mainright.png'
import "@fontsource/montserrat";
import main_page_block from './main_page_home.module.css'
import rightImage from './mainright.png'
import av1 from '../Reviews/review1.png'
import av2 from '../Reviews/review2.png'
import happyPatients from '../Reviews/happyPatients.png'
import rightPodBlock from './rightpodblock.png'

const main_block = () => {
    return(
        <div className={main_page_block.ServiceBlockStart} style={ServiceStyle}>
            <div class="container" id="aboutQ">
                <div class="row justify-content-center">
                        <div id={main_page_block.leftBlock} class="col-10 col-sm-5 col-lg">
                            <div className={main_page_block.MainInfo}>
                                <p className={main_page_block.nameCompany}>КАПЕЛЬНИЦЫ<br/> НА ДОМУ</p>
                                <p className={main_page_block.nameEmployee}>Слесарева Елена</p>
                            </div>
                            <div className={main_page_block.location}>
                                <img src={loc}/>
                                <p>Краснодар</p>
                            </div>
                            <div className={main_page_block.buttons}>
                                <button className={main_page_block.mainBlockButton} data-bs-toggle="modal">Подробнее</button>
                                <button className={main_page_block.mainBlockButtonSecond} data-bs-toggle="modal">Далее</button>
                            </div>
                            <div className={main_page_block.points}>
                                <div className={main_page_block.PointsBlockList}>
                                    <ul>
                                        <li>
                                            <div className={main_page_block['li-points']}>
                                                <img src={points}/>
                                                <p>Квалифицированный специалист</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={main_page_block['li-points']}>
                                                <img src={points}/>
                                                <p>Полный пакет документов</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={main_page_block['li-points']}>
                                                <img src={points}/>
                                                <p>Медсестра высшей категории</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={main_page_block.rightBlock} class="col-10 col-sm-5 col-lg">
                            <div>
                                <img id={main_page_block.mainimg} src={rightImage}/>
                            </div>
                            <div id={main_page_block.rightSecondBlock} class="d-flex flex-row">
                                <div id={main_page_block.leftpodBlock} class="p-2">
                                    <span className={main_page_block.leftpodBlockSpan}>
                                        <img src={happyPatients}/>
                                    </span>
                                    <p>Десятки довольных пациентов</p>
                                </div>
                                <div id={main_page_block.rightpodBlock} class="p-2">

                                    <p>Оставьте и Вы свой отзыв</p>
                                    <div>
                                        <button className={main_page_block.mainBlockButtonThird} data-bs-toggle="modal">Отзывы</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default main_block;