import React from "react"
import "./photographer.css"

const Photographer = () => {

    return (

        <div className="profile">
            
            <div className="upper">
                <h3>Overview</h3>
                <h3>About photographer</h3>
                <h3>Reviews</h3>
            </div>

            <div className="pName">
                <h3>ROBERT FRANK</h3>

                <h6>Level 1 photographer</h6>
            </div>


            <div className="about">

                {/* <img className="pimg" src="./robert"/> */}

                <p>I am a professional Wedding and Family Photographer 
                    with over 8 years of experience retouching & postprocessing images from many different Genres like 
                    Weddings, Baptism and others</p>
            </div>


        </div>
    )
}

export default Photographer