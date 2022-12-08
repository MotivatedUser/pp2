import { Container } from "reactstrap";
import ForSaleList from '../features/forsale/ForSaleList';

const ForSalePage = () => {

    return (
        <Container>
            <h1>Machines for Sale</h1>
            <ForSaleList />
        </Container>
    );
};

export default ForSalePage;