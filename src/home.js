import './home.css'

import BannerHome from './componetsHome/bannerHome'
import SlideCategories from './componetsHome/slideCategories'
import ProductSpotlight from './componetsHome/productSpotlight'

function Home() {
  return (
    <div className="home">
      <div className="home-container">
				<BannerHome />
        <SlideCategories />
        <ProductSpotlight />
        <BannerHome />
			</div>
    </div>
  );
}

export default Home;
