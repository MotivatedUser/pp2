import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Col} from 'reactstrap';


const ForSaleCard = ({item}) => {
    const { id, image, name } = item;
    return (
        <Link to={`${id}`} >
            <Card  className='forSaleCard' >
                <CardImg src={image} alt={name} />
                <CardImgOverlay className='card-header-text' >
                    <CardTitle className='titleFontStyle'>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
};

export default ForSaleCard;






// import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
// import { Link } from 'react-router-dom';

// const ForSaleCard = ({item}) => {
//     const { id, image, name } = item;
//     return (
//         <Link to={`${id}`} >
//             <Card>
//                 <CardImg width='100%' src={image} alt={name} />
//                 <CardImgOverlay>
//                     <CardTitle>{name}</CardTitle>
//                 </CardImgOverlay>
//             </Card>
//         </Link>
//     );
// };

// export default ForSaleCard;