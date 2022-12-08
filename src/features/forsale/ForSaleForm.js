import { newItem } from "./forSaleSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";

const ForSaleForm = ({forSaleId}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const item = {
            id: parseInt(forSaleId),
            name: values.name,
            cut: values.cut,
            ready: values.ready,
            description: values.description,
            
        };
        console.log('item:', item);
        dispatch(newItem(item));
        setModalOpen(false);
    } 

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> List Machine Here
            </Button>
            <Modal isOpen={modalOpen} >
                <ModalHeader toggle={() => setModalOpen(false)} >
                    For Sale Form
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={{id: '', name: '', cut: '', ready: '', description: ''}} onSubmit={handleSubmit} >
                        <Form className='mx-auto'>
                            <FormGroup>
                                <Label htmlFor='id' >Unique ID</Label>
                                
                                <Field
                                    name='id'
                                    placeholder='Unique ID'
                                    className='form-control'
                                    required
                                />
                                                                
                            </FormGroup>
                            <FormGroup>
                                <Label  htmlFor='name'>Your Name</Label>
                                <Field
                                    name='name'
                                    placeholder='Machine Name / Model'
                                    className='form-control'
                                    required
                                />
                                 
                            </FormGroup>
                            <FormGroup>
                                <Label  htmlFor='cut'>Mower Cut</Label>
                                <Field
                                    name='cut'
                                    placeholder='Machine Cutting Width'
                                    className='form-control'
                                    required
                                />
                                 
                            </FormGroup>
                            <FormGroup>
                                <Label  htmlFor='ready'>Machine is Ready to use</Label>
                                <Field
                                    name='ready'
                                    placeholder='Is it ready to use?'
                                    className='form-control'
                                    required
                                />
                                 
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='imageUpload' >Pics sell! Upload your images here!</Label>
                                <Field name='imageUpload' accept="image/*"  type='file' />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='description'>Description of the Machine (Size, Condition, Aprox Age and any other information you think might help it sell.</Label>
                                <Field
                                    name='description'
                                    as='textarea'
                                    rows='4'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
};

export default ForSaleForm;