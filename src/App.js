import './styles/App.css';
import React from "react";
import {BrowserRouter} from 'react-router-dom'
import Posts from "./components/Pages/Posts";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Posts/>
            </BrowserRouter>
        </div>
    )
}

export default App;
