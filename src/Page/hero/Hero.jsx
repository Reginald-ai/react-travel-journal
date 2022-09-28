import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Data from "../../store/data";
import "./hero.css";
const Hero = () => {
  const cardMap = Data.map((t) => <Card key={t.id} world={t} />);
  return (
    <div>
      <Header />
      <div className="card-wrapper  ">
        <div className="container">
          <div className="row">
            <div className="cards">{cardMap}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
