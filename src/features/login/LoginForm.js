import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLogin, selectCurrentLogin } from "./loginSlice";
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateLoginForm } from "../../utils/validateLoginForm";

const LoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const currentLogin = useSelector(selectCurrentLogin);

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        // resetForm();
    }

    const dispatch = useDispatch();

    const handleLogin = (values) => {
        const currentLogin = {
            username: values.username,
            password: values.password
        }
        dispatch(setCurrentLogin(currentLogin));
        setLoginModalOpen(false);
        
    }
    return (
        <>
            <span className='navbar-text ml-auto login-btn'>
                <Button
                    className='btn btn-sm'
                    outline
                    onClick={() => setLoginModalOpen(true)}
                    style={{ color: 'yellow', border: '1px solid white' }}
                >
                    <i className='fa fa-sign-in fa-lg' /> Login
                </Button>
            </span>
            <Modal isOpen={loginModalOpen} >
                <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        onSubmit={handleLogin}
                        validate={validateLoginForm} >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='username' >Username</Label>
                                <Field id="username" name='username' placeholder='Username' className="form-control" />
                                <ErrorMessage name='username' >
                                    {(msg) => <p className='text-danger'>
                                        {msg}
                                    </p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password' >Password</Label>
                                <Field id='password' name='password' placeholder='Password' type='password' className='form-control' />
                                <ErrorMessage name='password' >
                                    {(msg) => <p className='text-danger'>
                                        {msg}
                                    </p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type='submit' color='primary'>Login</Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )

};
export default LoginForm;