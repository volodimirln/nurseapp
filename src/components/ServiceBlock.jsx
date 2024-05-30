import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceStyle from '../style/servicesStyle.css';
import Service from "./Service";
import "@fontsource/montserrat";

let data = [
    {name: 'Капельницы на дому', price: 1000, plus1: 'с любыми венами', plus2: 'все виды капельниц', plus3: 'в удобное время'},
    {name: 'Уколы на дому', price: 500, plus1: 'внутривенные', plus2: 'внутримышечные', plus3: 'без следов'},
    {name: 'Катетеры на дому', price: 700, plus1: 'любой сложности', plus2: 'с любыми венами', plus3: 'на дому'},
    {name: 'Капельница Золушка', price: 1200, plus1: 'глутатион', plus2: 'альфа липоевая кислота', plus3: 'витамин С'}
];

const service_block = () => {
    return(
        <div id="ServiceBlockStart" style={ServiceStyle}>
            <div class="container" id="aboutQ">
                <div class="row justify-content-center">
                        <Service name={data[0].name} price={data[0].price} plus1={data[0].plus1} plus2={data[0].plus2} plus3={data[0].plus3}/>
                        <Service name={data[1].name} price={data[1].price} plus1={data[1].plus1} plus2={data[1].plus2} plus3={data[1].plus3}/>
                        <Service name={data[2].name} price={data[2].price} plus1={data[2].plus1} plus2={data[2].plus2} plus3={data[2].plus3}/>
                        <Service name={data[3].name} price={data[3].price} plus1={data[3].plus1} plus2={data[3].plus2} plus3={data[3].plus3}/>
                </div>
            </div>
        </div>
    );
}

export default service_block;