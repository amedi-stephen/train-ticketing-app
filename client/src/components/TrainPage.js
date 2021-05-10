import React from 'react';
import Navbar from './Navbar';
// import SearchTrainForm from "./SearchTrainForm";
import TrainContainer from './TrainContainer';
import { filterTrainDestination } from "../actions//trainActions";

const TrainPage = () => {
    return (
        <div className="train-section">
            <Navbar />
            {/* TODO: <SearchTrainForm /> */}
            {/* TODO: also an error message component that alerts no train */}
            <TrainContainer />
        </div>
    );
}
 
export default TrainPage;