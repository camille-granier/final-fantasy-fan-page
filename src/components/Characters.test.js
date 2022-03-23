import Characters from './Characters';
import { BrowserRouter} from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

describe('Characters component', () => {

    test('renders Characters if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post' }],
        });
        render(<BrowserRouter>
                <Characters/>
               </BrowserRouter>)

        const cardElements = await screen.findAllByRole('listitem');
        expect(cardElements).not.toHaveLength(0);
    });

    test('renders Loading Spinner only before data is loaded', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post' }],
        });
        render(<BrowserRouter>
                <Characters/>
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
                <Characters/>
               </BrowserRouter>)
            
            await waitFor(() => {
                expect(screen.getByText('Legal Notices')).toBeInTheDocument();
             })
    });

});
