import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Create from './Create';
import Nav from './Nav';
import SinglePost from './SinglePost';
import Update from './Update';
const RoutedApp = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" exact="true" element={<App />} />
                <Route path="/create" exact="true" element={<Create />} />
                <Route path="/post/:slug" exact="true" element={<SinglePost />} />
                <Route path="/post/update/:slug" exact="true" element={<Update />} />
            </Routes>
        </Router>
    )
}

export default RoutedApp