import { newItem } from "./forSaleSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form } from "formik";

const ForSaleForm = ({ forSaleId }) => {
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
                    <Formik initialValues={{ id: '', name: '', cut: '', ready: '', description: '' }} onSubmit={handleSubmit} >
                        <Form className='mx-auto' action='/imageUpload' method='post' enctype='multipart/form-data'>
                            <FormGroup>
                                {/* <Label htmlFor='id' >Title</Label> */}

                                <Field
                                    name='id'
                                    placeholder='Title'
                                    className='form-control'
                                    required
                                />

                            </FormGroup>

                            <FormGroup>
                                {/* <Label htmlFor='name'>Brand and Model</Label> */}
                                <Field
                                    name='name'
                                    placeholder='Brand and Model'
                                    className='form-control'
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Field
                                    name='price'
                                    placeholder='Asking Price'
                                    className='form-control'
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Field
                                    name='seller'
                                    placeholder='Contacts Name'
                                    className='form-control'
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Field
                                    name='sellerContact'
                                    placeholder='Phone / Email of Seller'
                                    className='form-control'
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='imageUpload' >Pics sell! Upload up to 4 images here!</Label>
                                <input type='file' name='imageUpload1' accept='image/*' />
                                <input type='file' name='imageUpload2' accept='image/*' />
                                <input type='file' name='imageUpload3' accept='image/*' />
                                <input type='file' name='imageUpload4' accept='image/*' />
                            </FormGroup>

                            <FormGroup>
                                <Field
                                    name='cut'
                                    placeholder='Machine Cutting Width'
                                    className='form-control'
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='ready'>Is this machine ready to use?</Label>
                                <Field
                                    name='ready'
                                    placeholder='Yes or No'
                                    className='form-control'
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='description'>Description of the Machine - Size, Condition, Aprox Age and any other information you think might help it sell.</Label>
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