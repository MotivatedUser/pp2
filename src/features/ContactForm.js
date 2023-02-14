import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";

// import { validateContactForm } from "../utils/validateContactForm";


const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                contactType: 'By Phone',
                model: '',
                feedback: ''
            }}
            onSubmit={handleSubmit}
        // validate={validateContactForm}
        >
            <Form className='mx-auto' >
                <h1 className='largeTitleFontStyle' >Contact Form</h1>
                <FormGroup row>
                    <Label htmlFor='firstName' md='4'>
                        First Name
                    </Label>
                    <Col md='3'>
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control' 
                            required />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='4'>
                        Last Name
                    </Label>
                    <Col md='3'>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                            required />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='4'>
                        Phone
                    </Label>
                    <Col md='3'>
                        <Field
                            name='phoneNum'
                            placeholder='Phone'
                            className='form-control'
                            required />
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='4'>
                        Email
                    </Label>
                    <Col md='3'>
                        <Field
                            name='email'
                            placeholder='Email'
                            type='email'
                            className='form-control'
                            required />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label check md='4'>

                        Best way to contact you?
                    </Label>
                    <Col md='3'>
                        <Field
                            name='contactType'
                            as='select'
                            className='form-control'
                            required >
                            <option>By Phone</option>
                            <option>By Text</option>
                            <option>By Email</option>
                            <option>By Smoke Signal</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='model' md='4'>
                        Your Machine Model Number
                    </Label>
                    <Col md='3'>
                        <Field
                            name='model'
                            as='textarea'
                            rows='1'
                            className='form-control'/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='feedback' md='4'>
                        Your Feedback
                    </Label>
                    <Col md='6'>
                        <Field
                            name='feedback'
                            as='textarea'
                            rows='12'
                            className='form-control' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }} >
                        <Button type='submit' color='danger'> Send Contact Request</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
};

export default ContactForm;