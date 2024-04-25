import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary flex-column">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Survey</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Add Survey Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SurveyQuestion">View Survey Questions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SurveyResponse">View Survey Response</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ViewSurvey">View Survey Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Search">Search Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Delete">Delete Details</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
