// import laptops from './laptops/images/laptop-data';
// import cameras from './cameras/images/camera-data';
// import keyboards from './keyboards/images/keboards-data';
// import smartWatches from './smart-watches/images/smart-watches';
import laptops from "../laptops/images/laptop-data";
import cameras from "../cameras/images/camera-data";
import keyboards from "../keyboards/images/keboards-data";
import smartWatches from "../smart-watches/images/smart-watches";
import mobiles from "../mobiles/images/mobile-data";

const allProducts = [
  ...laptops,
  ...cameras,
  ...keyboards,
  ...smartWatches,
  ...mobiles
];

export default allProducts;