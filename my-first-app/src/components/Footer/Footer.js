import "./footer.css"

const Footer = () => {
  return (
    <div>
      <div className="footer">
          <div className="footerContainer">
            <img className="logo" src="./images/logo.png" />
    
            <div className="helpList comp">

              <h3>Help</h3>
              <ul>
                <li>Support</li>
                <li>FAQs</li>
                <li>Follow</li>
                <li>Collections</li>
                <li>Support</li>
              </ul>
            </div>


            <div className="companyList comp">

              <h3>Company</h3>
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>What's new</li>
              </ul>
            </div>

            <div className="socialMedia comp">

                <h4>Social Media</h4>
                <img className="socialLogo" src="./images/socialLogo.png" alt="" />

                <div className="qbtn">
                  <button>Any Questions ?</button>
                </div>
            </div>



            


          </div>

          <div className="cpt">
              <p>copyrights © 2023</p>
            </div>


      </div>
      

      
    </div>
  )
}

export default Footer
