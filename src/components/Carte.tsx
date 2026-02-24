
import { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import Zoom from "@arcgis/core/widgets/Zoom";
import { useWindowContext } from "../contexts/WindowContext";
import { useResultContext } from '../contexts/ResultContext';


import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Point from "@arcgis/core/geometry/Point.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Graphic from "@arcgis/core/Graphic";


import esriConfig from "@arcgis/core/config.js";

esriConfig.portalUrl = "https://dtsi-sgt.maps.arcgis.com";

import { WIDGETS_POS } from "../config";

type MarkerSymbolKey = "address" | "poi" | "cadastre";

const markerSymbol: Record<MarkerSymbolKey, SimpleMarkerSymbol> = {
    "address": new SimpleMarkerSymbol({
                color: [24, 117, 60],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
              }),
    "poi": new SimpleMarkerSymbol({
            color: [230, 159, 0],
            outline: {
                color: [255, 255, 255],
                width: 1
            }
            }),
    "cadastre": new SimpleMarkerSymbol({
                    color: [0, 0, 145],
                    outline: {
                        color: [255, 255, 255],
                        width: 1
                    }
                    }) 
}


const Carte: React.FC = () => {

    const { widthBreak, width } = useWindowContext();
    const { selection, goTo, toggleGoTo, isSidebarOpen, selectedFeature } = useResultContext();
    
    
    const mapRef = useRef<HTMLDivElement>(null);
    const viewRef = useRef<MapView | null>(null);
    const graphicsLayerRef = useRef<GraphicsLayer | null>(null);


    // Au montage du composant
     useEffect(() => {
        if (!mapRef.current) return;

         
        const map = new Map({
            basemap: "topo"
        });

        const view = new MapView({
            container: mapRef.current,
            map: map,
            zoom: 10,
            center: [166.4423, -22.2758],
        });

        const graphicsLayer = new GraphicsLayer();
        
        //Ajout des widgets
        const basemapGallery = new BasemapGallery({
             view: view
         });
        const basemapExpand = new Expand({ view, content: basemapGallery });
        const zoomWidget = new Zoom({view});
        view.ui.components = [];

        if(width >= widthBreak){
            view.ui.add(zoomWidget, WIDGETS_POS);
        }
        view.ui.add(basemapExpand, WIDGETS_POS);

        viewRef.current = view;
        graphicsLayerRef.current = graphicsLayer;
        viewRef.current?.map?.add(graphicsLayerRef.current);


        return () => {
            if (view) view.destroy();
            if (viewRef.current) viewRef.current.destroy();
        };

    }, []);

    // Quand la sélection change
    useEffect(() => {
        if (!viewRef.current || !selection || !selection.features[0]) return;

        if (graphicsLayerRef.current) {
            graphicsLayerRef.current.removeAll();
        }

        selection.features.map((ft) => {
            const point = new Point({
                longitude: ft.geometry.x as number,
                latitude: ft.geometry.y as number,
                spatialReference: { wkid: 4326 }
            });

            const key = ft.attributes._type as MarkerSymbolKey;
            const pointGraphic = new Graphic({
                geometry: point,
                symbol: markerSymbol[key]
            });

            graphicsLayerRef.current?.add(pointGraphic);
        });

        toggleGoTo();

    },[selection])

    //goTo
    useEffect(() => {
        if (!viewRef.current || !selection || !goTo) return;

        if(!selectedFeature){
            if (selection.features.length > 1){
                viewRef.current.goTo(graphicsLayerRef.current?.graphics);
            }else{
                 viewRef.current.goTo({
                    target: graphicsLayerRef.current?.graphics,
                    zoom: 20
                 });
            }
        }else{
            const point = new Point({
                longitude: selectedFeature.geometry.x,
                latitude: selectedFeature.geometry.y,
                spatialReference: { wkid: 4326 }
            });

            viewRef.current.goTo({
                target: point,
                zoom: 20
            });
        }
        toggleGoTo();
    },[goTo])
    
   

    return (
        <div className="mapView"
              ref={mapRef}
              style={{width: isSidebarOpen && width > widthBreak ? "70%" : "100%",
                      transform: isSidebarOpen && width > widthBreak ? "translateX(43%)" : "translateX(0)",
                      transition: "width 0.3s ease, transform 0.3s ease"}}>
        </div>
    );
};


export default Carte;