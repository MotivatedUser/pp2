import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";



const InspectionForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    return (
        <Formik
            initialValues={{
                clientNumber: '',
                airFilter: '',
                oilCondition: '',
                bladeCondition: '',
                bladeNum: '',
                machineCondition: '',
                model: '',
                engineModel: '',
                techName: '',
                addlComments: ''
            }}
            onSubmit={handleSubmit}
            // validate={validateInspectionForm}
        >
            <Form className='mx-auto'>
            <h1>Inspection Form</h1>

                <FormGroup row>
                    <Label htmlFor='clientNumber' md-2>
                        Client Number
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='clientNumber'
                        id='clientNumber'
                        as='textarea'
                        rows='1'
                        className='form-control'
                        required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='airFilter' check md={{ size: 4, offset: 2 }}>
                        <Field name='airFilter' type='checkbox' className='form-check-input'
                        /> {' '}
                        Air Filter Condition
                    </Label>
                    <Col md='4'>
                        <Field 
                        name='airFilter'
                        as='select'
                        className='form-control' 
                        required>
                            <option>Good</option>
                            <option>OK</option>
                            <option>Needs Replaced</option>
                            <option>Missing</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='oilCondition' check md={{ size: 4, offset: 2 }}>
                        <Field name='oilCondition' type='checkbox' className='form-check-input'
                        /> {' '}
                        Oil Condition
                    </Label>
                    <Col md='4'>
                        <Field 
                        name='oilCondition'
                        as='select'
                        className='form-control'
                        required >
                            <option>Good / Clean</option>
                            <option>OK / Still Transparent</option>
                            <option>Needs Replaced / Dark</option>
                            <option>Under Fill Line</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='bladeCondition' check md={{ size: 4, offset: 2 }}>
                        <Field name='bladeCondition' type='checkbox' className='form-check-input'
                        /> {' '}
                        Blade(s) Condition
                    </Label>
                    <Col md='4'>
                        <Field 
                        name='bladeCondition'
                        as='select'
                        className='form-control' 
                        required>
                            <option>Good</option>
                            <option>OK</option>
                            <option>Needs Replaced</option>
                            <option>Missing / Damaged Spindle</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='bladeNum' check md={{ size: 4, offset: 2 }}>
                        <Field name='bladeNum' type='checkbox' className='form-check-input'
                        /> {' '}
                        Number of Blades
                    </Label>
                    <Col md='4'>
                        <Field 
                        name='bladeNum'
                        as='select'
                        className='form-control' 
                        required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>Missing</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='machineCondition' check md={{ size: 4, offset: 2 }}>
                       
                        General Machine Condition
                    </Label>
                    <Col md='4'>
                        <Field 
                        name='machineCondition'
                        as='select'
                        className='form-control' 
                        required>
                            <option>Good</option>
                            <option>OK</option>
                            <option>Rough</option>
                            <option>How does it stay together when it runs?</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='model' md-2>
                       Machine Model Number
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='model'
                        as='textarea'
                        rows='1'
                        className='form-control' 
                        required/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='engineModel' md-2>
                       Engine Model Number
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='engineModel'
                        as='textarea'
                        rows='1'
                        className='form-control' 
                        required/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='techName' md-2>
                        Inspection Completed By
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='techName'
                        as='textarea'
                        rows='1'
                        className='form-control' 
                        required/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='addlComments' md-2>
                        Any Additional Comments
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='addlComments'
                        as='textarea'
                        rows='6'
                        className='form-control' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}} >
                        <Button className='btn btn-lg btn-primary' type='submit' color='primary'> Submit Inspection Report</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
};

export default InspectionForm;