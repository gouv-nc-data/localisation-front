
import { useWindowContext } from "../contexts/WindowContext";
import { useResultContext } from '../contexts/ResultContext';

import ListGroup from 'react-bootstrap/ListGroup';

import FeatureDisplay from "./FeatureDisplay";

const noResult = <>
  <h3>Résultats de votre recherche</h3>
  <p> Aucun résultats ...</p>
</>



const Panneau: React.FC = () => {

  const { widthBreak, width } = useWindowContext();
  const { selection, isSidebarOpen, handleFeature, toggleSidebar} = useResultContext();

  const buttonOpen = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={width < widthBreak ? "M18 15l-6 -6 -6 6" : "M9 5l7 7-7 7"} stroke="currentColor" strokeWidth="2" />
    </svg>  
  );

  const buttonClose = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={width < widthBreak ? "M6 9l6 6 6-6" : "M15 19l-7-7 7-7"} stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  
    return(
        <div
          className={`panneau ${isSidebarOpen ? 'ouvert' : ''}`}
          style={width < widthBreak ? {width: "100%"} : {width: "32%"}}
        >
           <button className="toggle-panneau" onClick={toggleSidebar}>
                {isSidebarOpen ? buttonClose : buttonOpen}
            </button>
          {isSidebarOpen && (
            <div className="contenu-panneau"
            style={width < widthBreak ? {top: "0%"} : {top: "10%"}}>
              {!selection.features.length ? noResult:
              <ListGroup>
                {selection.features.map((ft, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    onClick={() => {handleFeature(ft)}}
                  >
                    <FeatureDisplay feature={ft}/>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              }
            </div>
          )}
        </div>
    )
};


export default Panneau;