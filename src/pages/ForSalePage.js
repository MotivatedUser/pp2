import { Container } from "reactstrap";
import ForSaleList from '../features/forsale/ForSaleList';
import ForSaleForm from "../features/forsale/ForSaleForm";
import { useSelector } from "react-redux";
import { selectAllForSale } from "../features/forsale/forSaleSlice";
import styled from "styled-components";

const Div = styled.div`
display: flex;
flex-direction: row;
`


const ForSalePage = () => {
    const forSale = useSelector(selectAllForSale);

    return (
        <Container>
            <h1 className='largeTitleFontStyle' >Machines for Sale</h1>
            <Div>
            <ForSaleList />
            </Div>
            <ForSaleForm forSale={forSale} />
        </Container>
    );
};

export default ForSalePage;