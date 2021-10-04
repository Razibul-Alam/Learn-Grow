import React from 'react';
import FooterSocial from './FooterSocial';
import FooterOthers from './FooterOthers';

const Footer = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
            <FooterSocial/>  
            </div>
         <div className="col-lg-8">
         <FooterOthers/>
         </div>
          
        </div>
    );
};

export default Footer;