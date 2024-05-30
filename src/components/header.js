import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderStyle from '../style/header.css';
import icon from '../icons/phone.png';
import menu from '../icons/menu.png';

function Header() {
    return (
<div>
  <header style={HeaderStyle}>
    <div class="container" id="main-header" >
      <div class="row">
        <div class="col order-first">
          <button  style={{border: "none", marginLeft: "10px"}} class="d-flex d-lg-none" id="offcanvasButton" type="button" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              <img src={menu} id="logo"  />
            </button>
          <h5 class="d-none d-lg-flex">elenamed-krasnodar</h5>
        </div>
        <div class="col">
          <div class="container" id="middleBlock" style={{minWidth: '310px'}}>
            <div class="row">
              <a class="col order-first" href="" >Отзывы</a>
              <a  class="col" href="">О себе</a>
              <a class="col order-last " href="">Контакты</a>
            </div>
          </div>
        </div>
        <div class="col order-last " style={{paddingRight: '0px'}} >
          <button id="btn" >
            <div id="btndiv">
                <img src={icon} id="phone"/> 
                <p class="d-none d-lg-flex">СВЯЗАТЬСЯ</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
  <div class="offcanvas offcanvas-start" tabindex="-1" style={{zIndex: "3001", width: "100%"}} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">elenamed-krasnodar</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body" id="offcanvasContent">
        <div style={{width: "100%", marginTop: "25%"}} id="off">
        
          <button   data-bs-dismiss="offcanvas"  id="offcanvasbtn" >О себе</button><br />
          <button  data-bs-dismiss="offcanvas"  id="offcanvasbtn" >Услуги</button><br />
          <button  data-bs-dismiss="offcanvas"  id="offcanvasbtn">Запись</button><br />
          <button  data-bs-dismiss="offcanvas"  id="offcanvasbtn" >Контакты</button><br />
          
        </div>
        <div class="dropdown mt-3">
      </div>
    </div>
  </div>
</div>
    );
  }
  
  export default Header;