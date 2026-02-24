import Panneau from "../components/Panneau";
import Carte from "../components/Carte";
import Autocomplete from "../components/Autocomplete";
import { ResultProvider } from "../contexts/ResultContext";



const Home: React.FC = () => {


    return(
        <ResultProvider>
            <Autocomplete></Autocomplete>
            <Panneau></Panneau>
            <Carte></Carte>
        </ResultProvider>
    )
};

export default Home;