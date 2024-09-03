import {
    Formik,
    Form,
    Field,
} from 'formik';

interface MyFormValues {
    nombre: string;
}

export default function AddCategory() {

    const initialValues: MyFormValues = { nombre: '' };

    return (
        <div className="flex flex-col">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);

                }}
            >
                <Form className='flex flex-col items-center mt-5 px-8 py-5 border-2 rounded-md'>
                    <h1 className='pb-10'>Agregar categoría</h1>
                    <div className='h-20 '>
                        <Field id="name" name="name" placeholder="Nombre" className={`w-96 self-center p-2 border rounded-md`} />
                    </div>
                    <button type="submit" className="w-96 bg-neutral-200 p-2 mt-3 rounded-md">Guardar</button>
                </Form>
            </Formik>
        </div>
    )

}

