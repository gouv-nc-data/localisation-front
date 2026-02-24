import { Link,  } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { SECONDARY_ROUTES } from '../routes/routes';


const Footer: React.FC = () => {
   
    return(
       <footer className="footer">
          <Nav className="bg-body-tertiary justify-content-end footer">
                    {SECONDARY_ROUTES.map((route, index) => (
                      <Nav.Link key={index} as={Link} to={route.path}>{route.header}</Nav.Link>
                    ))}
          </Nav>
       </footer>
    )
};


export default Footer;