import React from 'react';

// import { Container } from './styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function Toast(...props) {
    const showToast = ({ type, message } = props) => {
        switch (type) {
            case 'success':
                toast.success(message);
                break;
            case 'warn':
                toast.warn(message);
                break;
            case 'error':
                toast.error(message);
                break;
            default:
                toast.info(message);
        }
    };
  return <ToastContainer />;
}

export { Toast };