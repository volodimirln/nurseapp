import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import MainPage from './components/MainBlock/main_page_home';
import ServiceBlock from './components/ServiceBlock';
import FactsBlock from './components/Facts/facts';
import ReviewsBlock from './components/Reviews/ReviewsBlock'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <MainPage/>
    <ServiceBlock/>
    <FactsBlock/>
    <ReviewsBlock/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
