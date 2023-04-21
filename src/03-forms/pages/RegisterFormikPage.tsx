import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
            }}
            onSubmit={ (values) => {
                console.log(values);
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                               .min(2, "Debe de tener 2 caracteres o más")
                               .max(15, "Debe de tener 15 caracteres o menos")
                               .required("Requerido"),
                    email: Yup.string()
                                .email("El correo no tiene un formato válido")
                                .required("Requerido"),
                    password1: Yup.string()
                                .min(6, "Debe de tener 6 caracteres")
                                .required("Requerido"),
                    password2: Yup.string()
                                .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
                                .required("Requerido"),
            })}
        >
            { ({ handleReset }) => (
            <Form>
                <MyTextInput
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Harry"
                />

                <MyTextInput
                    label="Email Adress"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                />

                <MyTextInput
                    label="Password"
                    name="password1"
                    type="password"
                    placeholder="******"
                />

                <MyTextInput
                    label="Confirm Password"
                    name="password2"
                    type="password"
                    placeholder="******"
                />

                <button type="submit">Create</button>

                <button type='button' onClick={ handleReset }>Reset Form</button>

            </Form>
            )}
        </Formik>
        </div>
    );
};
