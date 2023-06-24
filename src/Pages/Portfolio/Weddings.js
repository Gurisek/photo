import { useEffect, useState } from "react";
import "../Portfolio/css/Weddings.css";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase/config";

export default function Weddings() {
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "Svatba/1");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        console.log(item);
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const limitedImageList = imageList.slice(0, 32);

  return (
    <div className="Weddings">
      <h1>Weddings</h1>
      <div className="gallery_weddings">
        {limitedImageList.map((url, index) => {
          return (
            <img
              key={index}
              src={url}
              loading="lazy"
              alt={`wedding-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}
