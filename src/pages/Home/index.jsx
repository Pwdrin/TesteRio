import Header from "../../components/header";
import Slide from "../../components/sliders";
import Footer from "../../components/footer";
import { GoArrowDown } from "react-icons/go";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import WhatsAppButton from "../../components/wppbtn";
import PopupWhatsApp from "../../components/pop";

function Home() {
  return (
    <>
      <Header />
      <Slide />

      <PopupWhatsApp/>

      <section className="topic">
        <h1 className="title2">Quem somos?</h1>
        <h2 className="subtitle2">
          Conheça um pouco sobre nós
        </h2>
        <p>A Funerária Santa Casa Barra da Tijuca é referência em serviços funerários, oferecendo atendimento humanizado, ágil e respeitoso. Cuidamos de todos os detalhes, desde cremação e sepultamento até translado e repatriação, garantindo tranquilidade às famílias. Com compromisso e profissionalismo, estamos ao seu lado nos momentos mais delicados.</p>
      </section>
     


      {/* FEEDBACK */}

      <section className="topic">
        <h1 className="title">FEEDBACK DE NOSSOS CLIENTES</h1>
        <h2 className="subtitle">
        </h2>
      </section>
      <section className="cards-feed">
        <ul>
          <li>
            <div>
              <img
                alt="CARD1"
                src="https://i.ibb.co/TBXyKtzF/perso2.png"
              />
              <h1>Laura Fonseca</h1>
              <p>
              Equipe atenciosa e organizada. Todo o processo foi conduzido com respeito e profissionalismo, o que nos trouxe conforto em um momento tão difícil. Excelente serviço!
              </p>
              <br/>
              <p>Avaliação:</p>
              <span className="stars">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </span>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="CARD2"
                src="https://i.ibb.co/YFZj3Nxy/perso4.png"
              />
              <h1>Cláudia Silva</h1>
              <p>
              A funerária foi extremamente cuidadosa e prestativa. Resolveram toda a burocracia rapidamente, permitindo que nos despedíssemos com paz e dignidade. Muito obrigado!
              </p>
              <br/>
              <p>Avaliação:</p>
              <span className="stars">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </span>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="CARD3"
                src="https://i.ibb.co/r2hHxLKV/perso1.png"
              />
              <h1>Johnny Rodrigues</h1>
              <p>
              Fomos atendidos com muito respeito e agilidade. A equipe nos deu todo o suporte necessário, tornando esse momento difícil um pouco mais tranquilo. Gratidão pelo profissionalismo.
              </p>
              <br/>
              <p>Avaliação:</p>
              <span className="stars">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </span>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="CARD4"
                src="https://i.ibb.co/jvNdsY1g/perso3.png"
              />
              <h1>Karol Duate</h1>
              <p>
              A funerária foi extremamente cuidadosa e prestativa. Resolveram toda a burocracia rapidamente, permitindo que nos despedíssemos com paz e dignidade. Muito obrigado!
              </p>
              <br/>
              <p>Avaliação:</p>
              <span className="stars">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </span>
            </div>
          </li>
        </ul>
      </section>


      


      {/* DIV IMG */}


      <section className="banner">
        <img src="" />
      </section>

      {/* CARDS INFOS */}

      <section className="topic">
        <h1 className="title">SERVIÇOS OFERECIDOS</h1>
        <h2 className="subtitle">
        </h2>
      </section>
      <section className="cards">
        <ul>
          <li>
            <div>
              <img
                alt="CARD1"
                src="https://i.ibb.co/Y7HnGTjF/carro-funebre-1.png"
              />
              <h1>Cremação</h1>
              <p>
              Oferecemos um serviço de cremação digno e respeitoso, proporcionando uma despedida serena e personalizada. Cuidamos de toda a documentação e do processo com transparência e acolhimento. As cinzas podem ser entregues à família em urna especial ou depositadas em locais apropriados.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="CARD2"
                src="https://i.ibb.co/DPMQkDr7/caixao-1.png"
              />
              <h1>Sepultamento</h1>
              <p>
              Prestamos um serviço completo de sepultamento, garantindo toda a assistência necessária para um adeus tranquilo e respeitoso. Cuidamos da organização, documentação e cerimonial, proporcionando conforto à família nesse momento difícil.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="CARD3"
                src="https://i.ibb.co/CKvgJnF6/pomba-5.png"
              />
              <h1>Translado nacional e internacional</h1>
              <p>
              Oferecemos serviço completo de translado nacional e internacional, garantindo o transporte seguro e respeitoso do ente querido para qualquer destino. Cuidamos de toda a documentação, burocracia e logística, proporcionando tranquilidade e agilidade nesse momento delicado. Conte conosco para um atendimento humanizado e eficiente.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="CARD4"
                src="https://i.ibb.co/9mptFyKr/velorio-1.png"
              />
              <h1>Repatriação</h1>
              <p>
              Oferecemos um serviço completo de repatriação funerária, garantindo o traslado seguro e digno do ente querido entre países. Cuidamos de toda a documentação, autorizações consulares e logística, proporcionando um processo ágil e sem preocupações para a família. Estamos aqui para oferecer suporte e acolhimento nesse momento delicado.
              </p>
            </div>
          </li>
        </ul>
      </section>

    <WhatsAppButton/>

      {/* cremação, translado nacional/internacional, sepultamento, repatriação */}
    
      <Footer />
    </>
  );
}

export default Home;
