import { Card, CardImg, CardText, CardBody, Col, CardTitle } from 'reactstrap';

const ForSaleDetails = ({ item }) => {
    const { image, name, price, seller, sellerContact, cut, ready, description } = item;

    return (
        <Col className='col-md-6 col-lg-4 forSaleCardCol'>
            <Card className=''>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardTitle className='titleFontStyle' >{name}<br/>{price}</CardTitle>
                    <CardText className='pFontStyle' >{description} <br /> Width of cut: {cut}" <br /> Ready to use: {ready} <br /> <strong>Interested? If so Contact:</strong> <br />                      {seller}<br />{sellerContact}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ForSaleDetails;