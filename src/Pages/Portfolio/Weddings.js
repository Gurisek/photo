import "./css/Weddings.css";
import { Link } from "react-router-dom";
import pic1 from "../../Images/Weddings/1/0840-min.jpg";
import pic2 from "../../Images/Weddings/2/0283-min.jpg";
import pic3 from "../../Images/Weddings/3/0129 cb.jpg";

export default function Weddings() {
  return (
    <div className="Weddings">
      <h1>Svatby</h1>
      <div className="gallery_weddings">
        <div className="gallery_item">
          <Link to="/svatba/1b47h">
            <img src={pic1} alt="1" />
            <h2>Manželé 1</h2>
          </Link>
        </div>
        <div className="gallery_item">
          <Link to="/svatba/1b88a">
            <img src={pic2} alt="2" />
            <h2>Manželé 2</h2>
          </Link>
        </div>
        <div className="gallery_item">
          <Link to="/svatba/65SB7">
            <img src={pic3} alt="3" />
            <h2>Manželé 3</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
