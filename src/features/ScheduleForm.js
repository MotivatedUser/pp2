import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";



const ScheduleForm = () => {
    const handleSubmit = (values, {resetForm}) => {
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
                machineType: '',
                issueDescription: '',
                scheduleTimeToPickUp: '',
                scheduleTimeToDropOff: '',
                budget: '',
                addlComments: ''
            }}
            onSubmit={handleSubmit}
            // validate={validateScheduleForm}
        >
            <Form>
            <h1>Schedule Form</h1>

            <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='firstName' 
                        placeholder='First Name' 
                        className='form-control' />
                        {/* <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage> */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='lastName'
                        placeholder='Last Name'
                        className='form-control' />
                        {/* <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage> */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='phoneNum'
                        placeholder='Phone'
                        className='form-control' />
                        {/* <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage> */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='email'
                        placeholder='Email'
                        type='email'
                        className='form-control' />
                        {/* <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage> */}
                    </Col>
                </FormGroup>



                <FormGroup row>
                    <Label htmlFor='machineType' check md={{ size: 4, offset: 2 }}>
                        
                        Machine Type (Pick One)
                    </Label>
                    <Col md='4'>
                        <Field 
                        name='machineType'
                        as='select'
                        className='form-control' >
                            <option>Mower</option>
                            <option>Snow Blower</option>
                            <option>Tiller</option>
                            <option>Other</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='issueDescription' md-2>
                        Please describe any issues with the machine here.
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='issueDescription'
                        as='textarea'
                        rows='10'
                        className='form-control' />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='budget' check md={{ size: 4, offset: 2 }}>
                        
                        Budget (Pick One)
                    </Label>
                    <Col md='4'>
                        <Field 
                        name='budget'
                        as='select'
                        className='form-control' >
                            <option>Fix it all</option>
                            <option>Make it run good</option>
                            <option>Make it work</option>
                            <option>Bare Min to make run.</option>
                        </Field>
                    </Col>
                </FormGroup>


                {/* <FormGroup row>
                    <Label htmlFor='oilCondition' check md={{ size: 4, offset: 2 }}>
                        <Field name='oilCondition' type='checkbox' className='form-check-input'
                        /> {' '}
                        Oil Condition
                    </Label>
                    <Col md='4'>
                        <Field 
                        name='oilCondition'
                        as='select'
                        className='form-control' >
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
                        className='form-control' >
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
                        className='form-control' >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>Missing</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='machineCondition' check md={{ size: 4, offset: 2 }}>
                        <Field name='machineCondition' type='checkbox' className='form-check-input'
                        /> {' '}
                        General Machine Condition
                    </Label>
                    <Col md='4'>
                        <Field 
                        name='machineCondition'
                        as='select'
                        className='form-control' >
                            <option>Good</option>
                            <option>OK</option>
                            <option>Rough</option>
                            <option>How does it stay together when it runs?</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='model' md-2>
                        Your Machine Model Number
                    </Label>
                    <Col md='10'>
                        <Field 
                        name='model'
                        as='textarea'
                        rows='1'
                        className='form-control' />
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
                        className='form-control' />
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
                </FormGroup> */}
            </Form>
        </Formik>
    )
};

export default ScheduleForm;