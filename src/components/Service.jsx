import image from '../style/liimage20px.png'

const Service = (props) => {
    return(
            <div id="ServiceBlock"  class="col-10 col-sm-5 col-lg">
                <div data-aos="fade-bottom">
                    <div id="name-service-block">
                        <h3>{props.name}</h3>
                    </div>
                    <div>
                        <h5>от</h5>
                    </div>
                    <h3 id="priceInfo">{props.price} ₽</h3>
                    <hr style={{borderWidth: 3 }}></hr>
                </div>
                <div id="ServiceBlockList">
                    <ul>
                        <li>
                            <div id="li-pluses">
                                <img src={image}/>
                                <p>{props.plus1}</p>
                            </div>
                        </li>
                        <li>
                            <div id="li-pluses">
                                <img src={image}/>
                                <p>{props.plus2}</p>
                            </div>
                        </li>
                        <li>
                            <div id="li-pluses">
                                <img src={image}/>
                                <p>{props.plus3}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <button id="ServiceButton" data-bs-toggle="modal">Связаться</button>
            </div>
    );
}

export default Service;