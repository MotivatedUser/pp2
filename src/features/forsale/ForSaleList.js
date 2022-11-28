import { useSelector } from 'react-redux';
import ForSaleCard from './ForSaleCard';
import { Col } from 'reactstrap';
import { selectForSaleById } from './forSaleSlice';
import ForSaleForm from './ForSaleForm';



const ForSaleList = ({ forSaleId }) => {
    // useSelector needs to be updated to selectAllForSale ... last try errored out.
    const forSale = useSelector(selectForSaleById(forSaleId));
    
   
    if (forSale && forSale.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Items for Sale</h4>
                {forSale.map((item) => {
                    return <ForSaleCard key={item.id} item={item} />;
                })}
                <ForSaleForm forSale={forSale} />
                
            </Col>
        );
    }
         
    return (
        <Col md='5' className='mx-auto'>
            <h4>These machines sell fast, there are no machines for sale at this time. Click button below to List one of your own.</h4>
            <ForSaleForm forSale={forSale} />
        </Col>
    );
};
   

export default ForSaleList;