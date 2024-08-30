import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Create from './Create';
import Nav from './Nav';
const RoutedApp = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" exact="true" element={<App />} />
                <Route path="/create" exact="true" element={<Create />} />
            </Routes>
        </Router>
    )
}

export default RoutedApp