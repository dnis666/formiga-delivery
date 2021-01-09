import './bannerHome.css'

import bannerImg from '../assets/Asset 6.png'

function BannerHome() {
  return (
    <div className="banner-home">
      <div className="banner-img">
        <img src={bannerImg} className="banner-principal" alt="banner da home" />
      </div>
    </div>
  );
}

export default BannerHome;
