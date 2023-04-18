import "./package.css";

import { useNavigate } from "react-router-dom";

function Package({ title, body, price }) {
  const navigate = useNavigate();

  return (
    <div className="fpage">
      <div className="packageContainer">

        {/* <div className="title">
          <img className="" src={image} alt="" />
        </div> */}

        <div className="main">
            <div className="title">
                <h2>{title}</h2>
            </div>

            <div className="body">
                <h3>{body}</h3>
            </div>

            <div className="price"> 
                <h4>{price}</h4>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Package;
