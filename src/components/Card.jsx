const Card = (props) => {
  console.log("card props", props)
  return (
    <div className="card">
      <img
      src={""}
      alt={""}
      className="card-img-top" 
      />
      <div className="card-body">
        <h3 className="card-title"></h3>
        <p className="card-text"></p>
      </div>
    </div>
  )
};

export default Card;