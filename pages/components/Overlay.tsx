import { useState } from "react";

const Overlay = (props: any) => {
    const [enabled, setEnabled] = useState(props.enabled || true);

    const bgClickHandler = (e:any) => {
        if(e.target.id == "overlayContainer"){
            if(props.close) props.close();
            else setEnabled(false); 
        }
    }

    return(
        <>
        {enabled &&
        <div id="overlayContainer" className="overlayContainer" onClick={bgClickHandler} onTouchStart={bgClickHandler}>
            {props.children}
        </div>}
        </>
    )
}

export default Overlay;