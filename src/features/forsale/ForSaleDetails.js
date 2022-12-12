import {Card, CardImg, CardText, CardBody, Col, CardTitle } from 'reactstrap';

const ForSaleDetails = ({item}) => {
    const { image, name, seller, cut, ready, description } = item;

    return (
        <Col md='5' className='m-1'>
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