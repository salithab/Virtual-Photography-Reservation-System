import "./card.css"

function Card({title,image,body}) {
  return (
    <div>
        <div className="cardContainer">

            <div className="upprecontainer">
              <div className="imageContainer">
                  <img src={image} alt="" />
              </div>
            </div>         

            <br /><br />
            <div className="cardContent">
              <div className="cardTitle">
                <h3>{title}</h3>
              </div>

              <div className="cardBody">
                <p>{body}</p>
              </div>
            </div>

            

            <div className="btn">
              <button>
                <a>
                  view more
                </a>
              </button>
            </div>

        </div>
      


    </div>
  )
}

export default Card
