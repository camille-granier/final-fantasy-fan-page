import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default  function ScrollToTop ({ ScrollTo = window.scrollTo }) {
    const { pathname } = useNavigate();
    
    useEffect(() => {
        ScrollTo(0, 0);
    }, [pathname, ScrollTo])
    return null;
};