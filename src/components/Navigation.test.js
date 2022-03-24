import Creatures from '../pages/Creatures';
import Games from '../pages/Games';
import About from '../pages/About';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

describe('Testing Navigation component', () => {
    test('clicking Games link should redirect to games component and update DOM', async () => {
        render(<BrowserRouter>
            <Routes>
                <Route path="/" element={ <About/> } />
                <Route path='/Creatures' element={<Creatures/>}/>
                <Route path="/Games" element={ <Games/> }/>
            </Routes>
            </BrowserRouter>);
                
                const games = screen.getByText("GAMES");
                userEvent.click(games);
                const hiro = await screen.findByText(/-Hironobu/i)
                expect(hiro).toBeInTheDocument();
    });

    test('clicking Creatures link should redirect to creatures component and update DOM', async () => {
        render(<BrowserRouter>
            <Routes>
                <Route path="/" element={ <About/> } />
                <Route path='/Creatures' element={<Creatures/>}/>
                <Route path="/Games" element={ <Games/> }/>
            </Routes>
            </BrowserRouter>);
                
                const crea = screen.getByText(/CREATURES/i);
                userEvent.click(crea);
                const kweh = await screen.findByText(/" Kweh! "/i)
                expect(kweh).toBeInTheDocument();
    });

    test('clicking About link should redirect to About component and update DOM', async () => {
        render(<BrowserRouter>
            <Routes>
                <Route path="/" element={ <Creatures/> } />
                <Route path='/Creatures' element={<Creatures/>}/>
                <Route path="/Games" element={ <Games/> }/>
                <Route path="/About" element={ <About/> }/>
            </Routes>
            </BrowserRouter>);
                
                const about = screen.getByText(/ABOUT/i);
                userEvent.click(about);
                const cam = await screen.findByText(/Camille Granier/i)
                expect(cam).toBeInTheDocument();
    });
});