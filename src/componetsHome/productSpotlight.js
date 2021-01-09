import "./productSpotlight.css";

import iconSpotlight from "../assets/icon-spotlight.svg";

function ProductSpotlight() {
  return (
    <div className="container-spotlight">
      <div className="icon-spotlight">
				<img src={ iconSpotlight } className="icon-descont" alt="Icon Spotlight" />
			</div>
      <div className="product-spotlight">
        <div className="img-product"></div>
        <div className="name-product"></div>
        <div className="price-product"></div>
        <div className="btn-product"></div>
      </div>
    </div>
  );
}

export default ProductSpotlight;
