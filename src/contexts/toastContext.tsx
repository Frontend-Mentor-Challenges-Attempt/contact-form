import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";

interface ToastContextType {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

interface ToastContextProviderType {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastContextProvider = (props: ToastContextProviderType) => {
  const [show, setShow] = useState(false);
  
  const value = useMemo(()=>{
    return{
        show,
        setShow
    }
  },[show,setShow])
  return (
    <ToastContext.Provider value={value}>
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastContext;
