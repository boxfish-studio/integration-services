import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './global.styles';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App></App>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
