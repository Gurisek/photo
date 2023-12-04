import "./css/Weddings.css";
import { Link } from "react-router-dom";
import pic1 from "../../Images/Personal/1/DSC_4489.jpg";

export default function Personal() {
  return (
    <div className="Weddings">
      <h1>Portrety</h1>
      <div className="gallery_weddings">
        <div className="gallery_item">
          <Link to="/svatba/1b47h">
            <img src={pic1} alt="1" />
            <h2>Pár 1</h2>
          </Link>
        </div>
        <div className="gallery_item">
          <Link to="/svatba/1b88a">
            <img src={pic1} alt="2" />
            <h2>Manželé 2</h2>
          </Link>
        </div>
        <div className="gallery_item">
          <Link to="/svatba/65SB7">
            <img src={pic1} alt="3" />
            <h2>Manželé 3</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
