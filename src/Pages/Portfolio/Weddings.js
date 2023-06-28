import "./css/Weddings.css";
import pic1 from "../../Images/Weddings/1/0840-min.jpg";
import { Link } from "react-router-dom";

export default function Weddings() {
  return (
    <div className="Weddings">
      <h1>Weddings</h1>
      <div className="gallery_weddings">
      <Link to="/weddings/1b47h">
            <img src={pic1} alt="1" />

            <h2>Manželé 1</h2>
          </Link>
        <div className="gallery_item">
          <img src={pic1} alt="1" />
          <h2>Manželé 2</h2>
        </div>
        <div className="gallery_item">

        </div>
      </div>
    </div>
  );
}
