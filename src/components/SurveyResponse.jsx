import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from './NavBar';

export const SurveyResponse = () => {
    const navigate = useNavigate();
    const [inputField, changeinputField] = useState(
        {
            "Question": "",
            "Response": "",
            "Text": "",
            "Choice": ""
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
                                        <label htmlFor="" className="form-label">Question</label>
                                        <select name="Question" value={inputField.Question} onChange={inputHandler} className="form-select">
                                            <option value="">Select Question</option>
                                            <option value="Question 1">Question 1</option>
                                            <option value="Question 2">Question 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Response</label>
                                        <select name="Response" value={inputField.Response} onChange={inputHandler} className="form-select">
                                            <option value="">Select Response</option>
                                            <option value="Response 1">Response 1</option>
                                            <option value="Response 2">Response 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Text</label>
                                        <input type="text" name="Text" value={inputField.Text} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Choice</label>
                                        <input type="text" name="Choice" value={inputField.Choice} onChange={inputHandler} className="form-control" />
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
