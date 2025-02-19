import * as C from "./styles";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <C.Section>
        <C.Footer>
          <div className="footer-content">
          <div class="funeraria-container">
           <img src="https://i.ibb.co/CKvgJnF6/pomba-5.png" />
             <h4 className="fune">Funerária Barra da Tijuca</h4>
              </div>

            <div class="icons">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="footer-content">
            <h4>Páginas</h4>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Service">Serviço</a>
            </li>
            <li>
              <a href="/Contact">Contato</a>
            </li>
          </div>
          <div className="footer-content2">
            <h4>Endereço</h4>
            <li>
              <a>Av. das Américas, 2300 -
                Barra da Tijuca, 22640-101</a>

            </li>
          </div>
          <div className="footer-content3">
               <h4>Contato</h4>
              <li>
              <a>TEL: (21) 96837-1100 / (21) 3215-3762</a>
               </li>
          </div>

        </C.Footer>
      </C.Section>
    </>
  );
}

export default Footer;
