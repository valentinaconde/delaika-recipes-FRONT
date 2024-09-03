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
    <div className='flex flex-col items-center mt-20'>
        <p className='text-2xl font-sans'>DELAIKA</p>

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
          <Form className='flex flex-col items-center mt-5 px-8 py-12 border-2 rounded-md'>
            <div className='h-20 '>
              <Field id="email" name="email" placeholder="Correo electrónico" className={`w-96 self-center p-2 border rounded-md ${(errors.email && touched.email ? ' border-rose-500' : "")}`} />
              {errors.email && touched.email ? (<div className='text-red-800 text-sm text-end'>{errors.email}</div>) : null}
            </div>
            <div className='h-20 '>
              <Field type="password" id="password" name="password" placeholder="Contraseña" className={`w-96 self-center  p-2 border rounded-md ${(errors.password && touched.password ? ' border-rose-500' : "")}`} />
              {errors.password && touched.password ? (<div className='text-red-800 text-sm text-end'>{errors.password}</div>) : null}
            </div>

            <button type="submit" className="w-96 bg-neutral-200 p-2 mt-3 rounded-md">Iniciar sesión</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};