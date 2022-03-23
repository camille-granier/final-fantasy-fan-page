import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const LegalNotices = () => {
    return (
        <div className='legal-notices'>
            <Helmet>
                <html lang="en" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Disclaimer and legal information" />
                <title>Legal Notices</title>
            </Helmet>
            <Header />
            <div className='legal-notices-container'>
                <img src="./img/tomberry.jpg" alt="tomberry" />
                <div className='legal-notices-text'><h1>Legal Notices</h1>
                    <p>Final Fantasy Notes is a fan-made website. It is a personnal project made for fans to enjoy information about the games, and isn't for commercial use.</p>
                    <p>It is not endorsed, sanctioned or in any other way supported directly or indirectly by Square Enix, and its respected partners. Final Fantasy, characters, names and related indicia are trademarks and copyright of SQUARE ENIX CO., LTD.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LegalNotices;