import LegalNotices from '../pages/LegalNotices';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import About from '../pages/About';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Testing Footer component', () => {
    test('clicking Legal Notices link should redirect to legal notices component and update DOM', async () => {
        render(<BrowserRouter>
                <Routes>
                    <Route path="/" element={ <About/> } />
                    <Route path='/LegalNotices' element={<LegalNotices/>}/>
                    <Route path="/PrivacyPolicy" element={ <PrivacyPolicy/> }/>
                </Routes>
                </BrowserRouter>);
                
                const legal = screen.getByText(/Legal Notices/i);
                userEvent.click(legal);
                const endorsed = await screen.findByText(/It is not/i)
                expect(endorsed).toBeInTheDocument();
    });

    test('clicking Privacy Policy link should redirect to privacy policy component and update DOM', async () => {
        render(<BrowserRouter>
                <Routes>
                    <Route path="/" element={ <About/> } />
                    <Route path='/LegalNotices' element={<LegalNotices/>}/>
                    <Route path="/PrivacyPolicy" element={ <PrivacyPolicy/> }/>
                </Routes>
                </BrowserRouter>);
                
                const privacy = screen.getByText(/Privacy Policy/i);
                userEvent.click(privacy);
                const updated= await screen.findByText(/Last updated:/i)
                expect(updated).toBeInTheDocument();
    });

    test('clicking About link should redirect to about component and update DOM', async () => {
        render(<BrowserRouter>
                <Routes>
                    <Route path="/" element={ <LegalNotices/> } />
                    <Route path='/About' element={<About/>}/>
                    <Route path="/PrivacyPolicy" element={ <PrivacyPolicy/> }/>
                </Routes>
                </BrowserRouter>);
                
                const about = screen.getByText('Contact');
                userEvent.click(about);
                const cam= await screen.findByText(/Camille Granier/i)
                expect(cam).toBeInTheDocument();
    });

});