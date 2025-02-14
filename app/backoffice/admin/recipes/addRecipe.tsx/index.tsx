import { CategoriesContext } from '@/app/context/CategoriesContext';
import { Category } from '@/app/interfaces/categories';
import { Recipe, Step } from '@/app/interfaces/recipes';
import { Ingredient } from '@/app/interfaces/ingredient';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useIngredientsStore } from '@/app/store/ingredientsStore';
import { useStepStore } from '@/app/store/stepStore';
import { useRecipesStore } from '@/app/store/recipesStore';

export default function AddRecipe() {
    const [recipeId, setRecipeId] = useState<number>(0);
    
    const { categories, handleSetCategories } = useContext(CategoriesContext);
    const addIngredients = useIngredientsStore(state => state.addIngredient);
    const setIngredients = useIngredientsStore(state => state.setIngredients);
    const ingredients = useIngredientsStore(state => state.ingredients);

    const addSteps = useStepStore(state => state.addStep);
    const setSteps = useStepStore(state => state.setSteps);
    const steps = useStepStore(state => state.steps);

    const addRecipe = useRecipesStore(state => state.addRecipe);
    const recipes = useRecipesStore(state => state.recipes);

    const [newIngredientName, setNewIngredientName] = useState<string>('');
    const [newIngredientQuantity, setNewIngredientQuantity] = useState<string>('');

    const [newInfo, setNewInfo] = useState<string>('');
  
    const initialValues: Recipe = {
        id: 0,
        name: '',
        categoryId: 0,
        imageUrl: '',
        ingredients: [],
        steps: []
    }

    const handleSubmit = (recipe: Recipe) => {
        recipe.ingredients = ingredients;
        recipe.steps = steps
        recipe.categoryId = Number(recipe.categoryId)
        addRecipe(recipe)
    }


    const handleAddStep = () => {
        addSteps({
            id: steps.length + 1,
            recipeId: recipeId,
            info: newInfo
        })

    }


    const handleAddIngredient = () => {
        addIngredients({
            id: ingredients.length + 1,
            name: newIngredientName,
            amount: newIngredientQuantity,
            recipeId: recipeId
        })


    }


    useEffect(() => {
        setIngredients([])
        setSteps([])
        setRecipeId(recipes.length + 1)
        handleSetCategories()
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
                        <Field id="imageUrl" name="imageUrl" placeholder="URL de imagen" className={`w-96 self-center p-2 border rounded-md`} />
                    </div>
                    <div className='h-20'>
                        <Field type="number" as="select" id="categoryId" name="categoryId" className={`w-96 self-center p-2 border rounded-md`}>
                            <option value="id" label="Seleccionar categoría" />
                            {categories.map((category: Category) => (
                                <option key={category.id} value={category.id} label={category.name} />
                            ))}
                        </Field>
                    </div>

                    <div className='flex '>

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



                        <div className='flex flex-col ms-5 w-96'>
                       
                            <textarea
                                value={newInfo}
                                onChange={(e) => setNewInfo(e.target.value)}
                                placeholder="Información del paso"
                                className={`w-96 self-center p-2 border rounded-md  h-[92px] `}
                            />
                            <button type="button" onClick={handleAddStep} className="w-96 bg-neutral-200 p-2 mt-3 rounded-md">Agregar Paso</button>
                            <div className=' mt-3'>
                                <ul>
                                    {steps.map((step, index) => (
                                        <li key={index} className="break-all"><span className="text-sky-600 font-semibold ">{step.id })</span> {step.info}</li>
                                    ))}
                                </ul>
                            </div>
                        </div> 
                    </div>

                    <button type="submit" className="w-96 bg-neutral-200 p-2 mt-3 rounded-md">Guardar</button>
                </Form>
            </Formik>
        </div>
    )
}