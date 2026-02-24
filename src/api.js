
let API_URL = "https://localisation.gouv.nc/api/"
/** 
if(window.location.origin.indexOf("carto.valid-province-nord.nc") != -1){
    API_URL = "";
}
*/

export const INDEXES = ["address", "poi", "cadastre"];
export const AUTOCOMPLETE_INDEXES = {
    StreetAddress: 'address',
    PositionOfInterest: 'poi',
    Cadastre: 'cadastre'
}

const _base_options = {
    url: API_URL,
    indexes: ["address", "poi", "cadastre"],
    communes: null,
    limit: 10
} 

export const getAutocompleteTypes = (indexes) => {
    let types = [];
    for(let t in AUTOCOMPLETE_INDEXES){
        const idx = AUTOCOMPLETE_INDEXES[t];
        if(indexes.indexOf(idx) != -1){
            types.push(t);
        }
    }
    return types;
}

export class ApiNcLocalisation{
    indexes = _base_options.indexes.map(idx=>idx);
    options = {};
    url = _base_options.url;
    capabilities = null;

    constructor(options) {
        if(!options){
            options = {}
        }
        this.options = {..._base_options, ...options};
        this.url = this.options.url;
        if(!this.url.endsWith("/")){
            this.url += "/";
        }

        if(this.options.indexes){
            this.indexes = this.options.indexes;
        }
        

        this.load();
    }

    setLimit = (limit) => {
        this.options.limit = limit;
    }

    setUrl = async(url) => {
        const previous = this.url;

        try{
            this.url = url;
            await this.load(true);
        }
        catch(error){
            console.warn("Failed to set API URL:", previous, error);
            this.url = previous;
        }
    } 

    setIndexes = (indexes) => {
        if(!indexes){
            this.indexes = INDEXES.map(idx=>idx);
        }
        indexes.forEach(idx => {
            idx = idx.toLowerCase();
            if(INDEXES.indexOf(idx) === -1){
                throw new Error(`Unsupported index: ${idx}. Should be one of: ${INDEXES.join(", ")}.`);
            }
        })
        this.indexes = indexes.map(idx=>idx.toLowerCase());
    }

    _api = async(endpoint, params=null)=>{
        let url = this.url + endpoint;
        if (params) url += "?" + new URLSearchParams(params);
        try{
            const response = await fetch(url);
            //console.log("API Response", response);
            //console.log("response", response.ok);
            if (!response.ok) throw new Error('API Error');
            return response.json();
        }
        catch(error){
            console.warn("Localisation API Error:", endpoint, params);
            throw error;
        }
    }

    load = async (force=false) => {
        if(!this._promise_capabilities || force){
            this._promise_capabilities = this._api("getCapabilities");
            this._promise_capabilities = this._promise_capabilities.then(c=>{
                this.capabilities = c;
            });
        }
        return this._promise_capabilities;
    }

    search = async(text, location) => {
        let params = {
            q: text,
            index: this.indexes.join(","),
            limit: this.options.limit
        }
        if(location){
            params.lon = location.longitude || location.lon || location.lng;
            params.lat = location.lattitude || location.lat;
        }
        return this._api("search", params);
    }

    complete = async (text, location)=>{
        if(!text) return [];
        if(!text.trim() || text.length < 3) return [];
        let params = {
            text,
            type: getAutocompleteTypes(this.indexes).join(","),
            limit: this.options.limit
        }
        if(location){
            params.lon = location.longitude || location.lon || location.lng;
            params.lat = location.lattitude || location.lat;
        }
       const data = await this._api("completion", params);
       return data.results
    }

    reverse = async(location) => {
        let params = {
            lon: location.longitude || location.lon || location.lng,
            lat: location.lattitude || location.lat,
            index: this.indexes.join(","),
            limit: this.options.limit
        }
        return this._api("reverse", params);
    }
}