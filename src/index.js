import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(
	// <React.StrictMode>
	// ! bad way of creating elements
// 	React.createElement('button', {
// 		onClick: () => console.log('click!') //* Use JSX instead
// 	}, React.createElement('div',
// 		{}, 'click!'))
//
// 	// <App />
// 	// </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root')); //* Use JSX instead
root.render(            // ! better way with JSX
	// <React.StrictMode>
		<App/>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
