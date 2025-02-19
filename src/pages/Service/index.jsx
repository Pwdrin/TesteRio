import Footer from "../../components/footer";
import Header from "../../components/header";
import { GoArrowDown } from "react-icons/go";
import "./styles.css";

function Service() {
  return (
    <>
      <Header />
      <div className="banner">
        <img src="" />
      </div>
      <section className="cards2">
        <ul>
          <li>
            <div>
              <img
                alt="INFO1"
                src="https://i.ibb.co/GWqZX2t/icons8-dinheiro-100.png"
              />
              <h1>lorem</h1>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="INFO2"
                src="https://i.ibb.co/52wyQ5c/icons8-banho-de-sol-100.png"
              />
              <h1>lorem</h1>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="INFO3"
                src="https://i.ibb.co/gRzQcQy/icons8-lucro-100.png"
              />
              <h1>lOrem</h1>
            </div>
          </li>
        </ul>
      </section>

        
{/*       
      <Footer /> */}
    </>
  );
}

export default Service;
