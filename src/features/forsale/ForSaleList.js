import { useSelector } from 'react-redux';
import ForSaleCard from './ForSaleCard';
import { Col } from 'reactstrap';
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
        ): errMsg ? (
            <Error errMsg={errMsg} /> 
        ): (forSale && forSale.length > 0) ? (
            <Col md='4' className='m-1'>
                
                {forSale.map((item) => {
                    return (
                        
                        <Col md='4' className='col-sm-6 col-md-4 col-xl-3 m-4' key={item.id}>
                            <ForSaleCard item={item} />
                            
                        </Col>
                    );
                })}       
            </Col>
        ): (
            <Col md='5' className='mx-auto'>
                <h4>These machines sell fast, there are no machines for sale at this time. Click button below to List one of your own.</h4>
             <ForSaleForm forSale={forSale} />
            </Col>
        )
};    


    
    
    // if () {
    //     return (
    //         <Col md='5' className='m-1'>
    //             <h4>Machines for Sale</h4>
    //             {forSale.map((item) => {
    //                 return 
    //                 <ForSaleCard key={item.id} item={item} />;
    //             })}
    //             <ForSaleForm forSale={forSale} />
                
    //         </Col>
    //     );

        
    // }
         
    // return (
    //     
    // );

   

export default ForSaleList;