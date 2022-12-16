import { useSelector } from 'react-redux';
import ForSaleCard from './ForSaleCard';
import { Col, Row } from 'reactstrap';
import { selectAllForSale } from './forSaleSlice';
import ForSaleForm from './ForSaleForm';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


const ForSaleList = () => {

    const forSale = useSelector(selectAllForSale);
    console.log('forsale:', forSale);

    const isLoading = useSelector((state) => state.forSale.isLoading);
    const errMsg = useSelector((state) => state.forSale.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (forSale && forSale.length > 0) ? (
        <Row className='flex1'>

            {forSale.map((item) => {
                return (

                    <Col className='forSaleContainers' key={item.id}>
                        <ForSaleCard className='' item={item} key={item.id} />
                    </Col>
                );
            })}
        </Row>
    ) : (
        <Col md='5' className='mx-auto'>
            <h4>These machines sell fast, there are no machines for sale at this time. Click button below to List one of your own.</h4>
            <ForSaleForm forSale={forSale} />
        </Col>
    )
};

export default ForSaleList;