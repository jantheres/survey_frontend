import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from './NavBar';

export const AddSurvey = () => {
    const navigate = useNavigate();
    const [inputField, changeinputField] = useState(
        {
            "Title": "",
            "Description": ""
        }
    );

    const inputHandler = (event) => {
        changeinputField({ ...inputField, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(inputField);
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1>Add Survey Details</h1>
                            <div className="card text-center">
                                <div className="card-header">
                                    Please enter Survey details
                                </div>
                                <div className="card-body">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Title</label>
                                        <input type="text" name="Title" value={inputField.Title} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Description</label>
                                        <textarea name="Description" value={inputField.Description} onChange={inputHandler} className="form-control" rows="4"></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button onClick={readValue} className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
