import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterStyle from '../style/footer.css';


function Footer() {
    return (
      <footer style={FooterStyle}>
        <div id="dv1">
          <div id="dv2">
            <a href="" id="footeritem" >КОНТАКТЫ</a>
            <a href=""  id="footeritem" >НАВИГАЦИЯ</a>
            <a href=""  id="footeritem" >УСЛУГИ</a>
          </div>
          <div>
            <button>
              <p style={{margin:"0px"}}>
              Документы
              </p>
            </button>
          </div>
        </div>
        <div id="line"/>
        <div id="footerBottom">
          <h6> © 2024 Все права защищены</h6>
        </div>
      </footer>
    );
  }
  
  export default Footer;