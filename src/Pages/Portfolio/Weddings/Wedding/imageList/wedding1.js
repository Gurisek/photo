function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../../../../Images/Weddings/1", false, /\.(jpg|jpeg|png)$/)
);

const wedding1 = images.map((image, index) => ({
  id: index + 1,
  img: image,
}));

export default wedding1;
