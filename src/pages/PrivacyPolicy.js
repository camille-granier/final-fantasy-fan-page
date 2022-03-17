import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className='privacy-policy'>
            <Header />
            <div className='privacy-policy-container'>
                <img src="./img/tomberry.jpg" alt="tomberry" />
                <div className='privacy-policy-text'><h1>Legal Notices</h1>
                    <p>Final Fantasy Notes is a fan-made website. It is a personnal project made for fans to enjoy information about the games, and isn't for commercial use.</p>
                    <p>It is not endorsed, sanctioned or in any other way supported directly or indirectly by Square Enix, and its respected partners. Final Fantasy, characters, names and related indicia are trademarks and copyright of SQUARE ENIX CO., LTD.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;