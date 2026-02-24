import Home from "./Home"
import Developpeur from "./Developpeur"
import About from "./About"
import Data from "./Data"
import Cookies from "./Cookies"
import Mentions from "./Mentions"
import Contact from "./Contact"

export const EXPAND_NAV = "xl"

export const HOME_ROOT = [
    { path: '/', header: "Accueil", element: <Home /> }
]
export const ROUTES = [
    { path: '/about', header: "A propos", element: <About /> },
    { path: '/developper', header: "Espace développeurs", element: <Developpeur /> },
]

export const SECONDARY_ROUTES = [
    { path: '/mention', header: "Mentions légales", element: <Mentions /> },
    { path: '/contact', header: "Contact", element: <Contact /> },
    { path: '/cookies', header: "Gestion des cookies", element: <Cookies /> },
    { path: '/personaldata', header: "Données personnelles", element: <Data /> },
]