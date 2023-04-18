import "./packageList.css";
import Package from "../../components/Package/package";

const PackageList = () => {
  return (
    <div className="list">
      <div>
        <Package title="Silver" 
        body="body container" 
        price="20000LKR" />
      </div>

      <div>
        <Package title="Gold" 
        body="body container" 
        price="50000LKR" />
      </div>

      <div>
        <Package title="Platinum" 
        body="body container" 
        price="120000LKR" />
      </div>

      {/* <h3>Car</h3> */}
    </div>
  );
};

export default PackageList;
