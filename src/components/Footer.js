import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='site-footer' >
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='3'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/aboutPage'>About Us</Link>
                            </li>
                            <li>
                                <Link to='/contactPage'>Contact Us</Link>
                            </li>
                            <li>
                                <Link to='/schedulePage'>Schedule Now</Link>
                            </li>
                            <li>
                                <Link to='/forSalePage'>Machines for Sale</Link>
                            </li>
                            <li>
                                <Link to='/inspectionPage'>Techs Only</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='4' className='text-center'>
                        
                        <h5>Social Media Links</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                        <br />
                        <a class='top' href='#'><i className='fa fa-chevron-up'></i></a>
                    </Col>
                    <Col sm='4' className='text-center'>                        
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+15095551212'
                        >
                            <i className='fa fa-phone' /> 1-509-555-1212
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link custom-btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> MowerGuy@MowerTech.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default Footer;