import Games from './Games';
import CardG from '../components/CardG';
import LoadingSpinner from '../UI/Loadingspinner';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

describe('Games component', () => {

    test('renders games if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post' }],
        });
        render(<BrowserRouter>
                <Games/>
               </BrowserRouter>)

        const cardGElements = await screen.findAllByRole('listitem');
        expect(cardGElements).not.toHaveLength(0);
    });

    test('renders Loading Spinner only before data is loaded', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post' }],
        });
        render(<BrowserRouter>
                <Games/>
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
                <Games/>
               </BrowserRouter>)
            
            await waitFor(() => {
                expect(screen.getByText('Legal Notices')).toBeInTheDocument();
             })
    });

});

