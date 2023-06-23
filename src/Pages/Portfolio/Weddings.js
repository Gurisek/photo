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
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="Weddings">
      <h1>Weddings</h1>

      {imageList.map((url) => {
        return <img src={url} loading="lazy" alt="weddings" />;
      })}
    </div>
  );
}
