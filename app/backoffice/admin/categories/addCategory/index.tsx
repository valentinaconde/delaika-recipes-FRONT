import { CategoriesContext } from '@/app/context/CategoriesContext';
import { Category } from '@/app/interfaces/categories';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import { useContext } from 'react';


export default function AddCategory() {

    const {handleAddCategory, categories} = useContext(CategoriesContext)

    const initialValues: Category = { id:0, name: '', hide: false };

    const handleSubmit = (category: Category) => {
        const lastAddedCategory = categories[categories.length - 1];
        category.id = lastAddedCategory.id + 1;
        handleAddCategory(category)
        localStorage.setItem('categories', JSON.stringify(categories))
    }

    return (
        <div className="flex flex-col">
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                <Form className='flex flex-col items-center mt-2 px-8 py-5 border-2 rounded-md'>
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

