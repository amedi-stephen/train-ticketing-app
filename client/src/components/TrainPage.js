import React from 'react';
import Navbar from './Navbar';
// import SearchTrainForm from "./SearchTrainForm";
import TrainContainer from './TrainContainer';

const TrainPage = () => {
    return (
        <div className="train-section">
            <Navbar />
            {/* TODO: <SearchTrainForm /> */}
            <TrainContainer />
        </div>
    );
}
 
export default TrainPage;