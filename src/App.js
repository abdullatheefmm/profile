import React from "react";
import ProfilePage from './ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProfilePage/>}/>
            </Routes>
        </Router>
  );
}

export default App;