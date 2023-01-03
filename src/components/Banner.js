import { Col } from 'reactstrap';
import BigLawn from '../app/assets/BigLawn.jpg';

const Banner = () => {
return (
    <div>
    <Col>
        <span>
            <img src={BigLawn} alt='A golden sunset' class='banner' />
            <h2 class='bannerH2' >You break it, We fix it!</h2>
        </span>
    </Col>
    </div>
)
}

export default Banner;