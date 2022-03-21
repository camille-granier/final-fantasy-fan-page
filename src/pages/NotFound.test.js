import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound component', () => {
    test('renders Error 404 as a text', () => {
        render(<NotFound/>);

        const Error = screen.getByText('Error 404');
        expect(Error).toBeInTheDocument();
    });
})