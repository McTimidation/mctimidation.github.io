import React from 'react';
import Header from './header';
import Footer from './footer';



function PageLayout(props) {
    return(
        <>
            <Header />
            {props.children}
        </>
    )
}

export default PageLayout;