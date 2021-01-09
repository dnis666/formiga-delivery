import './home.css'

import BannerHome from './componetsHome/bannerHome'
import SlideCategories from './componetsHome/slideCategories'

function Home() {
  return (
    <div className="home">
      <div className="home-container">
				<BannerHome />
        <SlideCategories />
			</div>
    </div>
  );
}

export default Home;
