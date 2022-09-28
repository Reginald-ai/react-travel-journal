import "./card.scss";
const Card = (props) => {
  console.log(props);
  return (
    <div className=" card row">
      <div className="left col-12 col-sm-4">
        <img
          className=""
          src={`../../../public/img/${props.world.location.img}`}
          alt=""
        />
      </div>
      <div className="right col-12 col-sm-8">
        <div className="location">
          <img src="../../../public/img/gps.png" alt="" />
          <p>{props.world.location.place}</p>
          <a href="#">View on Google Maps</a>
        </div>
        <h4>{props.world.title} </h4>
        <p className="date">{props.world.date}</p>
        <p className="information">{props.world.summary}</p>
      </div>
    </div>
  );
};

export default Card;
