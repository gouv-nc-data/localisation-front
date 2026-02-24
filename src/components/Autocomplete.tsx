import React, { useState, Fragment, useRef } from 'react';
// @ts-ignore
import {ApiNcLocalisation, getAutocompleteTypes, INDEXES, AUTOCOMPLETE_INDEXES} from '../api'
import type { GeoJsonFeatureCollection, Completion } from '../types/api';
import { AsyncTypeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';
import { useResultContext } from '../contexts/ResultContext';
import { useWindowContext } from "../contexts/WindowContext";
import { geoJsonToEsriJson } from '../utils/utils';

import { LuMapPinned } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { MdLocationCity } from "react-icons/md";




const _mapping: Record<string, string> = {
  "StreetAddress": "Adresse",
  "PositionOfInterest": "POI",
  "Cadastre": "Cadastre"
};

const _icons: Record<string, any> = {
  "Adresse": <MdLocationCity />,
  "POI": <LuMapPin />,
  "Cadastre": <LuMapPinned />
};



const Autocomplete: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  const { setSelection, isSidebarOpen, toggleSidebar, setSelectedFeature } = useResultContext();
  const { widthBreak, width } = useWindowContext();
  const typeHeadRef = useRef<any>(null);

  const [select, setSelect] = useState<any[]>([]);

  const api = new ApiNcLocalisation({});

  const search = (fulltext: string, index: string) => {
    if(!fulltext) return;

    // Changement d'index
    api.setIndexes([index]);

    // Lancement de la recherche sur le endpoint SEARCH
    api.search(fulltext).then((res: GeoJsonFeatureCollection) => {
        const selectedOption = geoJsonToEsriJson(res)
        setSelection(selectedOption);
        console.log("selectedOption", selectedOption)
        // Réinitialisation des indices
        api.setIndexes(INDEXES);
    }).catch((err: any) => {
      console.error("Erreur lors de la recherche:", err);
      api.setIndexes(INDEXES);
    });

    //Toggle du panneau au besoin
    if(!isSidebarOpen) toggleSidebar(); 

    setSelect([]);
      

  };

  const handleSearch = (query: string) => {
    console.log("=== Completion ===")
    setIsLoading(true);
    api.complete(query).then((completion: Completion[]) => {
        console.log("selectedCompletion", completion)
        const newOptions = processOptions(completion);
        console.log("new options", newOptions);
        setOptions(newOptions);
        setIsLoading(false);
    });
  };


  const handleChange = (selectedOptions: any) => {
    console.log("===HandleChange===");
    console.log("selectedOptions", selectedOptions);

    setSelect(selectedOptions);


    if(selectedOptions.length == 0) return;
    // Si un élément est sélectionné, on lance la recherche

    // Réinitialisation du selected feature à null
    setSelectedFeature(null);

    const selectedOption = selectedOptions[0];
    const fulltext = selectedOption.fulltext;
    const index = AUTOCOMPLETE_INDEXES[selectedOption.country];
    


    search(fulltext, index);
    console.log(typeHeadRef.current)
      
  };

  const handleEnter = (e:any) => {
    console.log("=====HandleEnter=====")
    console.log("available options", options)
    console.log(typeHeadRef.current)

    // Vérifie si la touche pressée est "Entrée"
    if (e.key !== "Enter") return;
    e.preventDefault();

    // Si aucun élément n'est sélectionné, prends le premier de la liste
    console.log(select)
    if (select.length !== 0 || options.length == 0) return;

    // Reinitialisation du selected feature à null
    setSelectedFeature(null);
  
    const firstOption = options[0].items[0];
    setSelect([firstOption])
    const fulltext = firstOption.fulltext;
    const index =  AUTOCOMPLETE_INDEXES[firstOption.country];
    typeHeadRef.current.state.selected = [firstOption];
    typeHeadRef.current.hideMenu();

    

    search(fulltext, index);
  };

  const processOptions = (rawOptions: Completion[]) => {
    const grouped: Record<string, Completion[]> = {};
    rawOptions.forEach(option => {
      if (!grouped[_mapping[option.country]]) {
        grouped[_mapping[option.country]] = [];
      }
      grouped[_mapping[option.country]].push(option);
      
    });

    return Object.keys(grouped)
      .sort((a, b) => a.localeCompare(b))
      .map(group => ({
        type: group,
        items: grouped[group].sort((a, b) => a.fulltext.localeCompare(b.fulltext)),
      }));
  };

  const props: any = {};
    props.renderMenu = (results: any[], menuProps: any) => {
   
    let key = 0;
    const items = results
      .sort()
      .map((group, index) => (
        <Fragment key={group.type}>
          {index !== 0 && <Menu.Divider />}
          <Menu.Header>{group.type} {_icons[group.type]}</Menu.Header>
          {group.items.map((i: Completion) => {

            const item = (
              <MenuItem key={key} option={i} position={key}>
                {i.fulltext} 
              </MenuItem>
            );

            index += 1;
            key += 1;
            return item;
          })}
        </Fragment>
      ));

    return <Menu {...menuProps}>{items}</Menu>;
  };


  const filterBy = () => true;

  return (
    <div className="recherche"
         style={width < widthBreak ? {width: "90%"} : {width: "30%"}}
         >
      <AsyncTypeahead
        ref={typeHeadRef}
        className="autocompletion"
        filterBy={filterBy}
        id="async-example"
        isLoading={isLoading}
        labelKey="fulltext"
        minLength={3}
        onSearch={handleSearch}
        onChange={handleChange}
        onKeyDown={handleEnter}
        options={options}
        placeholder="Recherche..."
        renderMenuItemChildren={(option: any) => (
        <>
          <span>{option.fulltext}</span>
        </>
        )}
        {...props}
      />
    </div>
  );

};

export default Autocomplete;