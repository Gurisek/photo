import "../../css/WedOne.css";
import React from "react";
import data_1 from "../data/data_1";

export const WedOne = () => {
  return (
    <div className="">
      <h1>Wedding 1</h1>
      <div className="">
        
        {data_1.map((onePic) => {
          const { id, img } = onePic;
          return (
            <div className="pic">
              <img src={img} alt={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
