import React, { useState, useContext, useCallback } from 'react';

import ToastContainer from '../ToastContainer';
import { uuidv4 } from '../../helpers';

const ToastContext = React.createContext(null);

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((content) => {
    setToasts(toasts => [...toasts, {
      id: uuidv4(),
      content,
    }]);
  }, [setToasts]);

  const removeToast = useCallback((id) => {
    setToasts(toasts => toasts.filter(toast => toast.id !== id));
  }, [setToasts]);

  return (
    <ToastContext.Provider value={{
      addToast,
      removeToast,
    }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
}

const useToast = () => {
  const { addToast, removeToast } = useContext(ToastContext);

  return { 
    addToast, 
    removeToast 
  };
}

export { useToast, ToastContext };
export default ToastProvider;