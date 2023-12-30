function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../../../Images/Personal/Portrety", false, /\.(jpg|jpeg|png)$/)
);

const portretyImageList = images.map((image, index) => ({
  id: index + 1,
  img: image,
}));
export default portretyImageList;
