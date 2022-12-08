import { Col } from "reactstrap";

const Loading = () => {
    return (
        <Col>
            <i className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary' />
            <p>Please wait while content is loading...</p>
        </Col>
    );
};

export default Loading;