import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from './NavBar';

export const SurveyQuestion = () => {
    const navigate = useNavigate();
    const [inputField, changeinputField] = useState(
        {
            "Survey": "",
            "Text": "",
            "QuestionType": ""
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
                            <h1>Add Survey Question</h1>
                            <div className="card text-center">
                                <div className="card-header">
                                    Please enter Survey details
                                </div>
                                <div className="card-body">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Survey</label>
                                        <input type="text" name="Survey" value={inputField.Survey} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Text</label>
                                        <input type="text" name="Text" value={inputField.Text} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Question Type</label>
                                        <select name="QuestionType" value={inputField.QuestionType} onChange={inputHandler} className="form-select">
                                            <option value="">Select Question Type</option>
                                            <option value="Multiple Choice">Multiple Choice</option>
                                            <option value="True/False">True/False</option>
                                            {/* Add more options as needed */}
                                        </select>
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
