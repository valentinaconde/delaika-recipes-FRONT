import { CategoriesContext } from '@/app/context/CategoriesContext';
import { Category } from '@/app/interfaces/categories';
import { Recipe, Step } from '@/app/interfaces/recipes';
import { RecipeIngredient } from '@/app/interfaces/ingredient';
import { Ingredient } from '@/app/interfaces/ingredient';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useIngredientsStore } from '@/app/store/ingredientsStore';

export default function AddRecipe() {
    const { categories, handleSetCategories } = useContext(CategoriesContext);
    const addIngredients = useIngredientsStore(state => state.addIngredient);
    const setIngredients = useIngredientsStore(state => state.setIngredients);
    const consoleIngredients = useIngredientsStore(state => state.consoleIngredients);
    const ingredients = useIngredientsStore(state => state.ingredients);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>([]);

    // const [ingredients, setIngredients] = useState<RecipeIngredient[]>([]);
    const [newIngredientName, setNewIngredientName] = useState<string>('');
    const [newIngredientQuantity, setNewIngredientQuantity] = useState<string>('');
    const [steps, setSteps] = useState<Step[]>([]);
    const [newStep, setNewStep] = useState<string>('');
    const [newInfo, setNewInfo] = useState<string>('');
    const ingredientslist: Ingredient[] = [
        {
            id: 1,
            name: 'Tomate',
        },
        {
            id: 2,
            name: 'Cebolla',
        },
        {
            id: 3,
            name: 'Papa',
        },
        {
            id: 4,
            name: 'Zanahoria',
        },
        {
            id: 5,
            name: 'Lechuga',
        },
        {
            id: 6,
            name: 'Pepino',
        },
        {
            id: 7,
            name: 'Ajo',
        },
        {
            id: 8,
            name: 'Cilantro',
        },
        {
            id: 9,
            name: 'Perejil',
        },
        {
            id: 10,
            name: 'Apio',
        },
        {
            id: 11,
            name: 'Pimiento',
        },
        {
            id: 12,
            name: 'Espinaca',
        },
        {
            id: 13,
            name: 'Aguacate',
        },
        {
            id: 14,
            name: 'Chile',
        },
        {
            id: 15,
            name: 'Pimienta',
        },
        {
            id: 16,
            name: 'Sal',
        },
        {
            id: 17,
            name: 'Azucar',
        },
        {
            id: 18,
            name: 'Aceite',
        },
        {
            id: 19,
            name: 'Mantequilla',
        },
        {
            id: 20,
            name: 'Harina',
        },
        {
            id: 21,
            name: 'Huevo',
        },
        {
            id: 22,
            name: 'Leche',
        },
        {
            id: 23,
            name: 'Queso',
        },
        {
            id: 24,
            name: 'Pollo',
        },
        {
            id: 25,
            name: 'Carne',
        },
        {
            id: 26,
            name: 'Pescado',
        },
        {
            id: 27,
            name: 'Mariscos',
        },
        {
            id: 28,
            name: 'Camarones',
        },
        {
            id: 29,
            name: 'Langosta',
        },
        {
            id: 30,
            name: 'Cangrejo',
        }
    ]
    const initialValues: Recipe = {
        id: 0,
        name: '',
        categoryId: 0,
        imageUrl: '',
        ingredients: [],
        steps: []
    }

    const handleSubmit = (recipe: any) => {
        consoleIngredients(ingredients)
    }

    const handleAddIngredient = () => {
        const ingredient = {
            id: ingredients.length + 1,
            name: newIngredientName,
            quantity: newIngredientQuantity
        }
        addIngredients(ingredient)
    }

    const handleAddStep = () => {

    }

    const filterDropdown = (event: any) => {
        setFilteredIngredients(ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(event.target.value.toLowerCase())))

    }


    useEffect(() => {
        handleSetCategories(categories)
        setIngredients(ingredientslist)
        setFilteredIngredients(ingredientslist)
    }, [])


    return (
        <div className="flex flex-col relative">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values);
                    resetForm();
                }}
            >
                <Form className='flex flex-col items-center mt-2 px-8 py-5 border-2 rounded-md'>
                    <h1 className='pb-10'>Agregar receta</h1>
                    <div className='h-20'>
                        <Field id="name" name="name" placeholder="Nombre" className={`w-96 self-center p-2 border rounded-md`} />
                    </div>
                    <div className='h-20'>
                        <Field as="select" id="categoryId" name="categoryId" className={`w-96 self-center p-2 border rounded-md`}>
                            <option value="" label="Seleccionar categoría" />
                            {categories.map((category: Category) => (
                                <option key={category.id} value={category.id} label={category.name} />
                            ))}
                        </Field>
                    </div>

                    <div className='z-10'>
                        <div className="dropdown border-2">
                            {/* <button onClick={() => myFunction()} className="dropbtn bg-emerald-100">Dropdown</button> */}
                            <div id="myDropdown" className="dropdown-content " >
                                <input className="m-4" type="text" placeholder="Search.." id="myInput" onChange={() => setShowDropdown(true)} onKeyUp={filterDropdown} onClick={() => setShowDropdown(false)} />
                                <ul
                                    className="overflow-y-auto max-h-44"
                                >
                                    {
                                        showDropdown &&
                                        filteredIngredients.map((ingredient: Ingredient) => (
                                            <li className='p-2 pointer-events-auto border-2 bg-slate-50 cursor-pointer hover:bg-slate-200' key={ingredient.id} onClick={() => console.log(ingredient)}>{ingredient.name}</li>
                                        ))

                                    }
                                </ul>


                            </div>
                        </div>
                    </div>
                    <div className='flex'>

                        <div className='flex flex-col w-96'>

                            <input
                                type="text"
                                value={newIngredientName}
                                onChange={(e) => setNewIngredientName(e.target.value)}
                                placeholder="Nombre del ingrediente"
                                className='w-96 self-center p-2 border rounded-md'
                            />

                            <input
                                type="text"
                                value={newIngredientQuantity}
                                onChange={(e) => setNewIngredientQuantity(e.target.value)}
                                placeholder="Cantidad del ingrediente"
                                className={`w-96 self-center p-2 border rounded-md mt-2`}
                            />
                            <button type="button" onClick={handleAddIngredient} className="w-96 bg-neutral-200 p-2 mt-3 rounded-md">Agregar Ingrediente</button>
                            <div className='mt-3'>
                                <ul>
                                    {ingredients.map((ingredient, index) => (
                                        <li key={index}><span className="text-sky-600 font-semibold">{ingredient.name}</span> {ingredient.amount}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* <div className='flex flex-col ms-5 w-96'>
                            <input
                                type="text"
                                value={newStep}
                                onChange={(e) => setNewStep(e.target.value)}
                                placeholder="Paso de la preparación"
                                className={`w-96 self-center p-2 border rounded-md`}
                            />
                            <input
                                type="text"
                                value={newInfo}
                                onChange={(e) => setNewInfo(e.target.value)}
                                placeholder="Información del paso"
                                className={`w-96 self-center p-2 border rounded-md mt-2`}
                            />
                            <button type="button" onClick={handleAddStep} className="w-96 bg-neutral-200 p-2 mt-3 rounded-md">Agregar Paso</button>
                            <div className=' mt-3'>
                                <ul>
                                    {steps.map((step, index) => (
                                        <li key={index}><span className="text-sky-600 font-semibold">{step.id })</span> {step.info}</li>
                                    ))}
                                </ul>
                            </div>
                        </div> */}
                    </div>

                    <button type="submit" className="w-96 bg-neutral-200 p-2 mt-3 rounded-md">Guardar</button>
                </Form>
            </Formik>
        </div>
    )
}