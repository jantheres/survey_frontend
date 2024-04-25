import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';

export const ViewSurvey = () => {
    const [isLoading, changeLoading] = useState(false);

    const [data, changeData] = useState([
        { "Destination": "Manali", "Arrival Date": "02-10-2023", "Departure Date": "11-10-2023", "Transportation": "Car", "Budget": "1000" },
        { "Destination": "Dubai", "Arrival Date": "12-10-2023", "Departure Date": "14-10-2023", "Transportation": "Bus", "Budget": "2000" },
        { "Destination": "Thailand", "Arrival Date": "19-10-2023", "Departure Date": "16-10-2023", "Transportation": "Train", "Budget": "3000" },
        { "Destination": "Australia", "Arrival Date": "14-10-2023", "Departure Date": "15-10-2023", "Transportation": "Car", "Budget": "4000" },
        { "Destination": "America", "Arrival Date": "18-10-2023", "Departure Date": "17-10-2023", "Transportation": "Car", "Budget": "15000" },
        { "Destination": "China", "Arrival Date": "11-10-2023", "Departure Date": "18-10-2023", "Transportation": "Car", "Budget": "6000" },
    ]);

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1>View Travel Details</h1>

                            {isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                data.map((value, index) => (
                                    <div key={index} className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex align-items-stretch">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Destination: {value.Destination}</h5>
                                                <p className="card-text">Arrival Date: {value["Arrival Date"]}</p>
                                                <p className="card-text">Departure Date: {value["Departure Date"]}</p>
                                                <p className="card-text">Transportation: {value.Transportation}</p>
                                                <p className="card-text">Budget: {value.Budget}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
