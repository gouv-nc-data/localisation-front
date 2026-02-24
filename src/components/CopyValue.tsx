
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Tooltip } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import { RiFileCopyLine } from "react-icons/ri";


interface CopyValueProps{
    value: any;
}

const CopyValue: React.FC<CopyValueProps> = (props) => {

    const [copyIsDone, setCopyIsDone] = useState<boolean>(false);
    const target = useRef(null);
    
    const handleCopiedValue = async (valueToCopy: string) => {

        try {
            await navigator.clipboard.writeText(valueToCopy);
            setCopyIsDone(true);
            setTimeout(() => setCopyIsDone(false), 1000);
        } catch (err) {
            console.error("Erreur lors de la copie : ", err);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        handleCopiedValue(props.value as string);
    };

    

    return(
        <>
            <Button ref={target}
                        variant="light"
                        size="sm"
                        onClick={handleClick}
            >
                <RiFileCopyLine />
            </Button>
            <Overlay target={target.current} show={copyIsDone} placement="right">
                <Tooltip id="tt">
                    Copié
                </Tooltip>
            </Overlay>
        </>
        
    )
};


export default CopyValue;