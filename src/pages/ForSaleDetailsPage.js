import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectForSaleById } from '..features/forSale/forSaleSlice';
import ForSaleDetails from "../features/forsale/ForSaleDetails";
import ForSaleList from '..features/forSale/ForSaleList';
import SubHeader from "../components/SubHeader";
import Error from "../components/Error";
import Loading from "../components/Loading";

const ForSaleDetailsPage = () => {
    const {itemId} = useParams();
    const item = useSelector(selectForSaleById(itemId));

    const isLoading = useSelector((state) => state.forSale.isLoading);
    const errMsg = useSelector((state) => state.forSale.errMsg);
    let content = null;
    
   if (isLoading) {
           content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <ForSaleDetails item={item} />
            </>
        )
    } 
    return (
        <Container>
            {item && <SubHeader current={item.name}
            detail={true} />}
            <Row>{content}</Row>
        </Container>
    )

}

export default ForSaleDetailsPage;