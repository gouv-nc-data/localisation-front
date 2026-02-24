import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Feature, esriJSON } from '../types/api';



interface ResultContextProps {
  selection: esriJSON
  setSelection: (suggestion: esriJSON) => void;
  goTo: boolean;
  toggleGoTo: () => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  selectedFeature: Feature | null;
  setSelectedFeature: (selected: Feature | null) => void;
  handleFeature: (feature: Feature) => void;

}

interface ResultProviderProps {
    children: ReactNode;
}

const ResultContext = createContext<ResultContextProps | null>(null);

export const ResultProvider: React.FC<ResultProviderProps> = ({ children }) => {
    
    const [selection, setSelection] = useState<esriJSON>({
      spatialReference: { wkid: 4326 },
      features: [],
    });
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
    const [goTo, setGoTo] = useState<boolean>(false);

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleGoTo = () => {
      setGoTo(!goTo);
    };

    const handleFeature = (feature: Feature) => {
      setSelectedFeature(feature);
      setGoTo(!goTo);
    }


    
    const contextValues = {
      selection,
      setSelection,
      goTo,
      toggleGoTo,
      isSidebarOpen,
      toggleSidebar,
      selectedFeature,
      setSelectedFeature,
      handleFeature
    };

  
    return (
      <ResultContext.Provider value={contextValues}>
        {children}
      </ResultContext.Provider>
    );

};



export const useResultContext = () => {
    const context = useContext(ResultContext);
    if (!context) {
      throw new Error("useResultContext doit être utilisé dans un ResultProvider");
    }
    return context;
};