import MenuScroll from './MenuScroll';
import { BrowserRouter} from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

describe('MenuScroll component', () => {

    test('renders Games if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post' }],
        });
        render(<BrowserRouter>
                <MenuScroll/>
               </BrowserRouter>)

        const cardElements = await screen.findAllByLabelText('button');
        expect(cardElements).not.toHaveLength(0);
    });

    test('renders Loading logo only before data is loaded', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post' }],
        });
        render(<BrowserRouter>
                <MenuScroll/>
               </BrowserRouter>)
            
            await waitFor(() => {
                expect(screen.getByTestId('loading-logo')).not.toHaveClass('loading-button');
             })
    });
});
