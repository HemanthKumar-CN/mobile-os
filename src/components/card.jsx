import React from "react";

const List=(props)=> {
    return (<li>{props.from}</li>)
}

export default List;



const Items=()=> {
    const MobileManufacturers=["Samsung","HTC","Micromax","Apple"];

    return (
        <div>
            {
                MobileManufacturers.map(item=> 
                
                        <li key={item}>{item}</li>
                     )
            }
        </div>
    )
}

export {Items};

 