function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../../../Images/Personal/1", false, /\.(jpg|jpeg|png)$/)
);

const pers1 = images.map((image, index) => ({
  id: index + 1,
  img: image,
}));
export default pers1;
