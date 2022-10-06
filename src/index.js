import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from 'Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'css/app.scss';
import 'css/style.scss';
import 'commons/auth';

//React 18
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Router />
    </div>
);


//React 17
//createRoot.render(<Router />, document.getElementById('root'));   