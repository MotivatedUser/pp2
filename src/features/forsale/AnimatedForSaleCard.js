import { Card, CardImg, CardImgOverlay, CardTitle, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useSpring, animated } from '@react-spring/web';


const AnimatedForSaleCard = ({item}) => {
    const { id, image, name } = item;

    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,1)',
        config: { duration: 1000 }
    })

    useEffect(() => {
        setToggle(true);
    }, []);
    
    return (
        <Link to={`${id}`} >
            <Col className='' >
                <animated.div style={animatedStyle}>
                    <Card  className='forSaleCard' >
                        <CardImg src={image} alt={name} />
                        <CardImgOverlay className='card-header-text' >
                            <CardTitle className='titleFontStyle'>{name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </animated.div>
            </Col>
        </Link>
    );
};

export default AnimatedForSaleCard;