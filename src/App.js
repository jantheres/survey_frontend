import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Search } from './components/Search';
import { Delete } from './components/Delete';
import { SurveyQuestion } from './components/SurveyQuestion';
import { SurveyResponse } from './components/SurveyResponse';
import { ViewSurvey } from './components/ViewSurvey';
import { AddSurvey } from './components/AddSurvey';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      {/* <Route path='' element={<Login/>}/> */}
      <Route path='' element={<AddSurvey/>}/>
      <Route path='ViewSurvey' element={<ViewSurvey/>}/>
      <Route path='SurveyQuestion' element={<SurveyQuestion/>}/>
      <Route path='SurveyResponse' element={<SurveyResponse/>}/>
      <Route path='Search' element={<Search/>}/>
      <Route path='Delete' element={<Delete/>}/>
   
    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
