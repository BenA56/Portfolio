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

const router = createBrowserRouter([
  {
    path: "/Summary",
    element: <App/>,
  },
  {
    path: "/ReportRedesign",
    element: <ReportRedesign />,
  },
  {
    path: "/ShotDoctorCardRedesign",
    element: <ShotDoctorCardRedesign />,
  },
  {
    path: "/AIManualReviewTool",
    element: <AIManualReviewTool />,
  },
  {
    path: "/SignUpRedesign",
    element: <SignUpRedesign />,
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
