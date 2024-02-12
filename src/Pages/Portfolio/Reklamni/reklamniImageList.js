
function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(
    require.context("../../../Images/Reklamni", false, /\.(jpg|jpeg|png)$/)
  );
  
  const reklamniImageList = images.map((image, index) => ({
    id: index + 1,
    img: image,
  }));
  export default reklamniImageList;