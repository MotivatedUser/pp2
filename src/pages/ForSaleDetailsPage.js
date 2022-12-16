import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";

import { selectForSaleById } from "../features/forsale/forSaleSlice";
import ForSaleDetails from "../features/forsale/ForSaleDetails";



const ForSaleDetailsPage = () => {
    const {itemId} = useParams();
    const item = useSelector(selectForSaleById(itemId));

    return (
        <Container>
            <Row>
                <ForSaleDetails item={item} />
            </Row>
        </Container>
    );
};

export default ForSaleDetailsPage;