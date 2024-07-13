import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyHello from './components/MyHello';
import EventBasic from './components/EventBasic';
import StateForm from './components/StateForm'
import FormTextarea from './components/FormTextarea'
import FormRadio from './components/FormRadio'
import StateNest from './components/StateNest';
import StateTodo from './components/StateTodo';
import FormBasic from './components/FormBasic';
import ProfilerBasic from './components/ProfilerBasic';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render(
  <>
    {/* <MyHello myName="鈴木" />
    <EventBasic type="time" />
    <StateForm />
    <FormTextarea />
    <FormRadio />
    <StateNest/>
    <StateTodo /> */}
    <FormBasic />
    <ProfilerBasic />
  </>
);
reportWebVitals();
