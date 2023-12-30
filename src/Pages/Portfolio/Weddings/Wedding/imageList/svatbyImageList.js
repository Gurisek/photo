function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../../../../Images/Weddings/Svatby", false, /\.(jpg|jpeg|png)$/)
);

const svatbyImageList = images.map((image, index) => ({
  id: index + 1,
  img: image,
}));

export default svatbyImageList;
