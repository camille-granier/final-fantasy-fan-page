import Creatures from './Creatures';
import { BrowserRouter, } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

describe('Creatures component', () => {

    test('renders Creatures if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post' }],
        });
        render(<BrowserRouter>
                <Creatures/>
               </BrowserRouter>)

        const cardCElements = await screen.findAllByRole('listitem');
        expect(cardCElements).not.toHaveLength(0);
    });

    test('renders Loading Spinner only before data is loaded', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post' }],
        });
        render(<BrowserRouter>
                <Creatures/>
               </BrowserRouter>)
            
            await waitFor(() => {
                expect(screen.queryByTestId('loading')).toBeNull();
             })
    });

    test('renders Footer only after data is loaded', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post' }],
        });
        render(<BrowserRouter>
                <Creatures/>
               </BrowserRouter>)
            
            await waitFor(() => {
                expect(screen.getByText('Legal Notices')).toBeInTheDocument();
             })
    });

});