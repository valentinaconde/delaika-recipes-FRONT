'use client'
import * as React from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';

interface MyFormValues {
  email: string;
  password: any;
}

export default function Login() {
  const initialValues: MyFormValues = { email: '', password: '' };
  return (
    <div className='flex flex-col items-center mt-5'>
      <p>INICIAR SESION</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className='flex flex-col items-center mt-5'>
          <Field id="email" name="email" placeholder="Email"  className="w-96 self-center mb-2 p-2 border-2"/>
          <Field id="password" name="password" placeholder="Password"  className="w-96 self-center mb-2 p-2 border-2"/>
          <button type="submit" className="w-96 bg-neutral-200 p-2">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};