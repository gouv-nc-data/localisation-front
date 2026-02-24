



import { Card, Row, Col } from "react-bootstrap";
import type { Feature } from "../types/api";


import { GiPositionMarker } from "react-icons/gi";
import { IoMdKey } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { PiAlignBottomSimpleFill } from "react-icons/pi";
import { GrValidate } from "react-icons/gr";
import { IoInformationCircleSharp } from "react-icons/io5";
import { BsGeoAltFill } from "react-icons/bs";
import { MdLocationCity } from "react-icons/md";
import { BsDot } from "react-icons/bs";

import CopyValue from './CopyValue';



interface AttributeDisplayProps{
    icon: React.ElementType;
    label?: string;
    value: string | number;
    isCopyable?: string | number;
}


const AttributeDisplay: React.FC<AttributeDisplayProps> = ({ icon: Icon, label, value, isCopyable}) => {

   return (
    <Row className="mb-2 align-items-center">
        <Col xs="auto">
            <Icon className="text-muted" />
        </Col>
        <Col>
            <span className="d-flex align-items-center gap-1">
                {label ? <>{label}: {value}</> :<>{value}</>}
                {isCopyable && <CopyValue value={value} />}
            </span>
        </Col>
    </Row>
   );
}

interface FeatureProps{
    feature: Feature
}

const FeatureDisplay: React.FC<FeatureProps> = ({feature}) => {

    const attributes = feature.attributes;
    const position = feature.geometry;
    const title = attributes._type=="address" ? attributes.label : attributes.name

    return(
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title className="mb-3">
                <>
                {title}
                <CopyValue value={title} />
                </>
            </Card.Title>

            {/** Commune */}
            <AttributeDisplay
                icon={MdLocationCity}
                value={attributes.city}
                isCopyable={attributes.city}
            />

            {/** name */}
            <AttributeDisplay
                icon={BsDot}
                label="'name'"
                value={attributes.name}
                isCopyable={attributes.name}
            />

            {/** Code Commune */}
            <AttributeDisplay
                icon={BsDot}
                label="Code commune"
                value={attributes.citycode}
                isCopyable={attributes.citycode}
            />


            {/** Adresse */}
            {
                attributes._type == "address" &&
                <> 
                    {/** Numéro de rue */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'housenumber'"
                        value={attributes.housenumber}
                        isCopyable={attributes.housenumber}
                    />

                    {/** Nom de rue */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'street'"
                        value={attributes.street}
                        isCopyable={attributes.street}
                    />

                    {/** Label */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'label'"
                        value={attributes.label}
                        isCopyable={attributes.label}
                    />

                    {/** Context */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'context'"
                        value={attributes.context}
                        isCopyable={attributes.context}
                    />

                    {/** Type */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'type'"
                        value={attributes.type}
                        isCopyable={attributes.type}
                    />

                    {/** Code Commune */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="Code postale"
                        value={attributes.postcode}
                        isCopyable={attributes.postcode}
                    />
                </>
            }



            

            
            <hr />
            {/** Certification */}
            <Row className={`mb-2 align-items-center ${attributes._type}-color fw-bold`}>
            <Col xs="auto">
                {attributes._type=="address" ? <GrValidate /> : <BsGeoAltFill />}
            </Col>
            <Col>
                {attributes._type=="address" && <>Cette adresse est certifiée</>}
                {attributes._type=="cadastre" && <>Cette localisation n’est pas une adresse certifiée mais un point cadastral</>}
                {attributes._type=="poi" && <>Cette localisation n’est pas une adresse certifiée mais un point d’intérêt</>}
            </Col>
            </Row>

           

            {/** Adresse */}
            {
                attributes._type == "address" &&
                <> 
                    {/** ID BAN */}
                    <AttributeDisplay
                        icon={IoMdKey}
                        label="Identifiant BAN"
                        value={attributes.banId}
                        isCopyable={attributes.banId}
                    />
                    {/** Clé interopérabilté */}
                    <AttributeDisplay
                        icon={FaLink}
                        label="Clé d’interopérabilité"
                        value={attributes.id}
                        isCopyable={attributes.id}
                    />
                </>
            }

            {/** Cadastre */}
            {
                attributes._type == "cadastre" &&
                <> 
                    {/** Typologie */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="Typologie"
                        value={attributes.typologie}
                        isCopyable={attributes.typologie}
                    />
                    {/** NIC */}
                    <AttributeDisplay
                        icon={FaLink}
                        label="NIC"
                        value={attributes.nic}
                        isCopyable={attributes.nic}
                    />
                    {/** Surface cadastrale */}
                    <AttributeDisplay
                        icon={PiAlignBottomSimpleFill}
                        label="Surface"
                        value={attributes.surf_cad}
                        isCopyable={attributes.surf_cad}
                    />

                    {/** section */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'section'"
                        value={attributes.section}
                        isCopyable={attributes.section}
                    />

                    {/** lot */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'lot'"
                        value={attributes.lot}
                        isCopyable={attributes.lot}
                    />

                    {/** lotissement */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'lotissement'"
                        value={attributes.lotissement}
                        isCopyable={attributes.lotissement}
                    />

                    {/** category */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'category'"
                        value={attributes.category}
                        isCopyable={attributes.category}
                    />

                    {/** toponym */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'toponym'"
                        value={attributes.toponym}
                        isCopyable={attributes.toponym}
                    />

                     {/** id */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'id'= nic ?"
                        value={attributes.id}
                        isCopyable={attributes.id}
                    />
                </>
            }

            {/** POI */}
            {
                attributes._type == "poi" &&
                <> 
                    {/** Type */}
                    <AttributeDisplay
                        icon={IoInformationCircleSharp}
                        label="Type"
                        value={attributes.type}
                    />
                    {/** Clé interopérabilté */}
                    <AttributeDisplay
                        icon={IoMdKey}
                        label="Clé d’interopérabilité"
                        value={attributes.id}
                        isCopyable={attributes.id}
                    />

                    {/** Category */}
                    <AttributeDisplay
                        icon={BsDot}
                        label="'category"
                        value={attributes.category}
                        isCopyable={attributes.category}
                    />
                </>
            }
                    

            {/** Position */}
            <AttributeDisplay
                icon={GiPositionMarker}
                label="Position"
                value={String(position.y)+"°N, "+String(position.x)+"°E"}
                isCopyable={String(position.y).concat(",", String(position.x))}
            />
          </Card.Body>
        </Card>
    )
};


export default FeatureDisplay;