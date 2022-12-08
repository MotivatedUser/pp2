import { Container } from "reactstrap";
import ForSaleList from '../features/forsale/ForSaleList';
import ForSaleForm from "../features/forsale/ForSaleForm";
import { useSelector } from "react-redux";
import { selectAllForSale } from "../features/forsale/forSaleSlice";

const ForSalePage = () => {
    const forSale = useSelector(selectAllForSale);

    return (
        <Container>
            <h1>Machines for Sale</h1>
            <ForSaleList />
            <ForSaleForm forSale={forSale} />
        </Container>
    );
};

export default ForSalePage;