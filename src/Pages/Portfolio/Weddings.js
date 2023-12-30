import "./css/Weddings.css";
//  Routy k obrazkum pro linky v temp.txt
// import { Link } from "react-router-dom";
// import pic1 from "../../Images/Weddings/1/0840-min.jpg";
// import pic2 from "../../Images/Weddings/2/0283-min.jpg";
// import pic3 from "../../Images/Weddings/3/0129 cb.jpg";
// import pic4 from "../../Images/Weddings/4/272-min.jpg";
import React from "react";
import ImageGallery from "./ImageGallery";
import svatbyImageList from "./Weddings/Wedding/imageList/svatbyImageList.js";

export default function Weddings() {
  return (
    <div className="Weddings">
      <ImageGallery data={svatbyImageList} />
    </div>
  );
}
