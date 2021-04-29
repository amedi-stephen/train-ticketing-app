import React from 'react';
import Navbar from './Navbar';
import SearchTrainContainer from './SearchTrainContainer';

const LandingPage = () => {
    return (
        <div className="Home">
            <Navbar />
            <SearchTrainContainer />
        </div>
    );
}
 
export default LandingPage;