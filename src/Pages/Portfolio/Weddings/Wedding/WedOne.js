import "../../css/WedOne.css";
import React, { useState } from "react";
import data_1 from "../data/data_1";

// export const WedOne = () => {
//   return (
//     <div className="">
//       <h1>Wedding 1</h1>
//       <div className="">
        
//         {data_1.map((onePic) => {
//           const { id, img } = onePic;
//           return (
//             <div className="pic">
//               <img src={img} alt={id} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export const WedOne = () => {

  const [selectedImage, setSelectedImage] = useState(null);



  const openImage = (onePic) => {
    setSelectedImage(onePic);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {data_1.map((onePic) => {
          const { id, img } = onePic;
          return (
        <img
          key={id}
          src={img}
          alt={id}
          onClick={() => openImage(onePic)}
        />
          )})}

      {selectedImage && (
        <div className="fullscreen-overlay" onClick={closeImage}>
          <img src={selectedImage.img} alt={selectedImage.img} id="fullscreen-image" />
          <span className="close-button">&times;</span>
        </div>
      )}
    </div>
  );
};