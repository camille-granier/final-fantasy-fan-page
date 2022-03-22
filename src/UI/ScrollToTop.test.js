import ScrollToTop from './ScrollToTop';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';

test('scrolls to top on route change change', async function test() {
    const ScrollTo = jest.fn()

    render(
        <BrowserRouter>
            <ScrollToTop ScrollTo={ScrollTo}/>
              <Routes>
                <Route path="/" 
                       element={<NavLink to="/other">Change Route</NavLink>}>
                </Route>
                <Route path="/other"
                       element={<p>Other Route</p>}>
                </Route>
               </Routes>
        </BrowserRouter>
    )
    const changeRoute = screen.getByText("Change Route");
    userEvent.click(changeRoute);
    await screen.findByText("Other Route")

    expect(ScrollTo).toHaveBeenCalledTimes(1)
    expect(ScrollTo).toHaveBeenLastCalledWith(0, 0)

})