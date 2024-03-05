function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(
    require.context("../../../Images/Rodinne", false, /\.(jpg|jpeg|png)$/)
  );
  
  const rodinneImageList = images.map((image, index) => ({
    id: index + 1,
    img: image,
  }));
  export default rodinneImageList;