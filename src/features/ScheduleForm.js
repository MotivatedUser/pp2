import React from "react";
import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import image from '../app/shared/logo512.png';




const ScheduleForm = () => {
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
                phone: '',
                address: '',
                machineType: '',
                issueDescription: '',
                scheduleTimeToPickUp: '',
                scheduleTimeToDropOff: '',
                budget: '',
                flexible: '',
                appt: '',
                addlComments: ''
            }}
            onSubmit={handleSubmit}
        // validate={validateScheduleForm}
        >
            <Form style={{ backgroundImage:`url(${image})`, backgroundSize:'contain', height:800, width:800}}>
                <h1>Schedule Form</h1>

                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        Name
                    </Label>
                    <Col md='6'>
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                            required />
                        
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 4, offset: 2 }}>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                            required />
                        
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phone' md='2'>
                        Phone
                    </Label>
                    <Col md='10'>
                        <Field
                            name='phone'
                            type='tel'
                            placeholder='Phone'
                            className='form-control'
                            required />
                        {/* <ErrorMessage name='phone'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage> */}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='address' md='2'>
                        Address
                    </Label>
                    <Col md='3'>
                        <Field
                            name='address'
                            placeholder='Address'
                            type='address'
                            required
                             />
                        {/* <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage> */}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md='7'>
                        <Field
                            name='addressCity'
                            placeholder='City / Town'
                            type='addressCity'
                            required
                             />
                        {/* <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage> */}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='4'>
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
                    <Label htmlFor='machineType' check md='2'>

                        Machine Type (Pick One)
                    </Label>
                    <Col md='4'>
                        <Field
                            name='machineType'
                            as='select'
                            className='form-control'
                            required >
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
                    <Col md='12'>
                        <Field
                            name='issueDescription'
                            as='textarea'
                            rows='2'
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
                <FormGroup row>
                    <Label htmlFor='appt' >Make an appointment</Label>
                    <Col >
                        <Field type='datetime-local' id='appt' name='appt' />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='dropOrPick' >Are you droping off or are we transporting the machine($80)</Label>
                    <Col>
                    <Field
                            name='dropOrPick'
                            as='select'
                            className='form-control'
                            required >
                            <option>We will drop it off</option>
                            <option>We need transportation for the machine ($80 within 15 miles)</option>
                            <option>Machine Donation / Recycling (No pickup Fee)</option>
                            
                        </Field>
                    </Col>
                </FormGroup>

                {/* This range input really shouldn't be here but I wanted to learn how to use it. The range / slider doesn't seem to have much support. From what I researched its becuase it is used so little. */}
                <FormGroup row>   
                    <Label for='flexible'> Flexibility with Schedule (between not and Very Flexible)</Label>
                    <Col>
                        <Field type='range' id='flexible' name='flexible' step='1' min='Not Flexible' max='Flexible' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}} >
                        <Button className='btn btn-lg btn-primary' type='submit' color='primary'  > Submit Scheduling Request </Button>
                        
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
};

<script>

</script>

export default ScheduleForm;