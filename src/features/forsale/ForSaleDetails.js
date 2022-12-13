import {Card, CardImg, CardText, CardBody, Col, CardTitle } from 'reactstrap';

const ForSaleDetails = ({item}) => {
    const { image, name, seller, cut, ready, description } = item;

    return (
        <Col className='col-md-6 col-lg-4 forSaleCardCol'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardTitle className='titleFontStyle' >{name}</CardTitle>
                    <CardText className='pFontStyle' >{description} <br /> Width of cut: {cut}" <br /> Ready to use: {ready} <br /> Interested? If so Contact: <br />{seller}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ForSaleDetails;