'use client'
import * as React from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import { SignupSchema } from './schema';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/utils/routes';

interface MyFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
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
          router.push(ROUTES.admin);
        }}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
          <Form className='flex flex-col items-center mt-5'>
            <Field id="email" name="email" placeholder="Email" className="w-96 self-center  p-2 border-2" />
            {errors.email && touched.email ? (<div className='text-red-500 mb-2'>{errors.email}</div>) : null}
            <Field id="password" name="password" placeholder="Password" className="w-96 self-center  p-2 border-2" />
            {errors.password && touched.password ? (<div className='text-red-500 mb-2'>{errors.password}</div>) : null}
            <button type="submit" className="w-96 bg-neutral-200 p-2 mt-3">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};