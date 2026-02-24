import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useWindowSize } from "react-use";



interface WindowContextProps {
  widthBreak: number
  width: number
}

interface WindowProviderProps {
    children: ReactNode;
}

const WindowContext = createContext<WindowContextProps | null>(null);

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {

  const { width } = useWindowSize();
    
    const contextValues = {widthBreak:799, width};
  

    return (
      <WindowContext.Provider value={contextValues}>
        {children}
      </WindowContext.Provider>
    );

};



export const useWindowContext = () => {
    const context = useContext(WindowContext);
    if (!context) {
      throw new Error("useWindowContext doit être utilisé dans un WindowProvider");
    }
    return context;
};