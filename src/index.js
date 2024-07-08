import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyHello from './components/MyHello';
import EventBasic from './components/EventBasic';
import StateForm from './components/StateForm'
import FormTextarea from './components/FormTextarea'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render(
  <>
    <MyHello myName="鈴木" />
    <EventBasic type="time" />
    <StateForm />
    <FormTextarea />
  </>
);
reportWebVitals();
