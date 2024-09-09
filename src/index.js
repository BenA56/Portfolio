import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReportRedesign from "./Report Redesign/ReportRedesign"
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShotDoctorCardRedesign from './ShotDoctorCardRedesign/ShotDoctorCardRedesign';
import AIManualReviewTool from './AIManualReviewTool/AIManualReviewTool';
import SignUpRedesign from './SignUpRedesign/SignUpRedesign';
import ScrollToTop from './ScrollToTop';

const router = createBrowserRouter([
  {
    path: "/Summary",
    element: <React.Fragment>
      <ScrollToTop/>
      <App/>
    </React.Fragment>,
  },
  {
    path: "/BreastCancerReport",
    element: <React.Fragment>
      <ScrollToTop/>
      <ReportRedesign/>
    </React.Fragment>,
  },
  {
    path: "/ShotDoctorCards",
    element: <React.Fragment>
      <ScrollToTop/>
      <ShotDoctorCardRedesign />
    </React.Fragment>,
  },
  {
    path: "/AIManualReviewTool",
    element: <React.Fragment>
      <ScrollToTop/>
      <AIManualReviewTool />
    </React.Fragment>,
  },
  {
    path: "/EHRSignup",
    element: <React.Fragment>
      <ScrollToTop/>
      <SignUpRedesign />
    </React.Fragment>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
