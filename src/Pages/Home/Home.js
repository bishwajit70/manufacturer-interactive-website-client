import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Equipments from './Equipments';
import Footer from './Footer';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <Welcome></Welcome>
            <Equipments></Equipments>
            {/* <Contact></Contact> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;