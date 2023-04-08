import "./home.css";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <br />
      <br />

      <div className="topPhotographers">
        <h1>Top Photographers</h1>
      </div>

      <br />

      <div className="cardSection">
        <div className="card">
          <Card
            bimage="../images/wick.jpg"
            title="ROBERT FRANK"
            image="../images/robert.jpg"
            body="I am a professional Wedding and Family Photographer with over 8 years of experience retouching & post-processing images from many different Genres like Weddings, Baptism and others."
          />
        </div>

        <div className="card">
          <Card
            title="RICHARD AVADON"
            image="../images/richard.jpg"
            body="We plan sophisticated shoots, producing engaging photo which is tailored individually to the chosen platform/s to best gain conversions. We source the right location, model & influencer for your products, social media, lifestyle"
          />
        </div>

        <div className="card">
          <Card
            title="WALKER EVANS"
            image="../images/wick.jpg"
            body="I have been a professional lifestyle photographer and videographer for the past 20 years. I have hundreds of baby, toddler, child, teen, adult, senior, puppy and dog models, all with beautiful, amazing lighting and sharp photos."
          />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
