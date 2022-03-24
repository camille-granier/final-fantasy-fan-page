import App from '../App';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter, } from 'react-router-dom';

describe('Testing Navigation component', () => {
    test('clicking Games link should redirect to games component and update DOM', async () => {
        render(<BrowserRouter>
                <App/>
                </BrowserRouter>);
                
                const games = screen.getByText("GAMES");
                fireEvent.click(games);
                const hiro = await screen.findByText(/-Hironobu/i)
                expect(hiro).toBeInTheDocument();
    });

    test('clicking Creatures link should redirect to creatures component and update DOM', async () => {
        render(<BrowserRouter>
                    <App/>
                </BrowserRouter>);
                
                const crea = screen.getByText(/CREATURES/i);
                fireEvent.click(crea);
                const kweh = await screen.findByText(/" Kweh! "/i)
                expect(kweh).toBeInTheDocument();
    });

    test('clicking About link should redirect to About component and update DOM', async () => {
        render(<BrowserRouter>
                    <App/>
                </BrowserRouter>);
                
                const about = screen.getByText(/ABOUT/i);
                fireEvent.click(about);
                const cam = await screen.findByText(/Camille Granier/i)
                expect(cam).toBeInTheDocument();
    });
});