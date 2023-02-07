import { Col } from 'reactstrap';
import BigLawn from '../app/assets/BigLawn.jpg';

const Banner = () => (

  <Col>
    <span>
      <img src={BigLawn} alt="A golden sunset" className="banner" />
      <h2 className="bannerH2">You break it, We fix it!</h2>
    </span>
  </Col>
);
export default Banner;
