import { render, screen } from '@testing-library/react';
import Categories  from "../app/backoffice/admin/categories/page";
import CategoriesList from "../app/backoffice/admin/categories/categoriesList"
import AddCategory from "../app/backoffice/admin/categories/addCategory"
import userEvent from '@testing-library/user-event'
import CategoriesProvider from '@/app/context/CategoriesProvider';



describe('Categories Backoffice Page', () => {
    beforeEach(() => {
        render(
            <CategoriesProvider>
                <Categories />
            </CategoriesProvider>
        )
    })
    
    it('renders categories backoffice page', () => {
        const getStarted = screen.getByText("Administracion de categorías");
        expect(getStarted).toBeInTheDocument();
    })

    it('can save a category', async () => {
        const input = screen.getByPlaceholderText("Nombre");
        await userEvent.type(input, "Categoria de ejemplo")
        await userEvent.click(screen.getByText("Guardar"))
        expect(screen.getByText("Categoria de ejemplo")).toBeInTheDocument()
    })

    it('exist a category list', () => {
        const list = screen.getByTestId("categories-list");
        expect(list).toBeInTheDocument();
    })
})