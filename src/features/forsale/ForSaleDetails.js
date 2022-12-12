import {Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const ForSaleDetails = ({item}) => {
    const { image, name, cut, ready, description } = item;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description} cut: {cut} Ready: {ready}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ForSaleDetails;