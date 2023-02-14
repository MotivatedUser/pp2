import React from "react";
import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";

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
            <Form className='formControl' >
                <h1 className='largeTitleFontStyle'>Schedule Form</h1>

                <FormGroup row>
                    <Label htmlFor='firstName' md='4'>
                        Name
                    </Label>
                    <Col md='3'>
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                            required />
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 3, offset: 4 }}>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                            required />
                        
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phone' md='4'>
                        Phone
                    </Label>
                    <Col md='2'>
                        <Field
                            name='phone'
                            type='tel'
                            placeholder='Phone'
                            className='form-control'
                            required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='address' md='4'>
                        Address
                    </Label>
                    <Col md='1'>
                        <Field
                            name='address'
                            placeholder='Address'
                            type='address'
                            required
                             />
                            <Field
                            name='addressCity'
                            placeholder='City / Town'
                            type='addressCity'
                            required
                             /> 
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
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='machineType' check md='4'>

                        Machine Type (Pick One)
                    </Label>
                    <Col md='2'>
                        <Field
                            name='machineType'
                            as='select'
                            className='form-control'
                            required >
                            <option>Select an option</option>
                            <option>Mower</option>
                            <option>Snow Blower</option>
                            <option>Tiller</option>
                            <option>Other</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='issueDescription' md='4'>
                        Please describe any issues with the machine here.
                    </Label>
                    <Col md='6'>
                        <Field
                            name='issueDescription'
                            placeholder='Please describe any issues your machine is experiencing and / or the purpose of the appointment.'
                            as='textarea'
                            rows='2'
                            className='form-control' />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='budget' check md='4'>

                        Budget (Pick One)
                    </Label>
                    <Col md='2'>
                        <Field
                            name='budget'
                            as='select'
                            className='form-control' >
                            <option>Select an option</option>
                            <option>Fix it all</option>
                            <option>Make it run good</option>
                            <option>Make it work</option>
                            <option>Bare Min to make run.</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='appt'  md='4'>Make an appointment</Label>
                    <Col className='col-1'>
                        <Field type='datetime-local' id='appt' name='appt' />
                    </Col>

                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='dropOrPick' md='4'>Are you droping off or are we transporting the machine($80)</Label>
                    <Col md='6'>
                        <Field
                            name='dropOrPick'
                            as='select'
                            className='form-control'
                            required >
                            <option>Select an option</option>
                            <option>We will drop it off at the shop</option>
                            <option>We need transportation for the machine both ways ($80 within 15 miles)</option>
                            <option>Machine Donation / Recycling (No pickup Fee)</option>
                            
                        </Field>
                    </Col>
                </FormGroup>

                {/* This range input really shouldn't be here but I wanted to learn how to use it. The range / slider doesn't seem to have much support. From what I researched its becuase it is used so little. */}
                <FormGroup row>   
                    <Label for='flexible' md='4'> Flexibility with Schedule (between not and Very Flexible)</Label>
                    <Col md='5' className='slideInput' >
                        Not Flexible
                            <Field type='range' id='flexible' name='flexible' step='1' min='Not Flexible' max='Flexible' style={{ marginRight: 10, marginLeft: 10 }} />
                        Flexible
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 10, offset: 1}} >
                        <Button className='btn btn-lg btn-primary submit-scheduling-btn' type='submit' color='primary'> Submit Scheduling Request </Button>
                        <p className='disclaimer mt-2' >If you selected Transportation for your machine, the Transportation Fee will be due at the time of scheduling confirmation.(Aprox 24-48 Hours) <br/> There are no fee's for transportation of donated machines. </p>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
}


export default ScheduleForm