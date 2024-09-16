import { render, screen } from '@testing-library/react';
import Home from '../app/home/page';


describe ('Home Page', () => {
    it('renders home page', () => {
        render(<Home />);
        const getStarted = screen.getByText("RECETAS");
        expect(getStarted).toBeInTheDocument();
    })
})