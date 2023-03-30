
import React, { useState, useEffect } from "react";
import WorkshopCard from "../components/WorkshopCard/WorkshopCard";

function Workshops(){
const [ workshopList, setWorkshopList ] = useState([]);

useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}workshops`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setWorkshopList(data)
    });
    
}, []);

    return (
        <div className="workshops-1">
            <div className="workshops-1b">
                <div className="workshops-2">
                { workshopList.map((workshopData, key) => {
                return <WorkshopCard key={key} workshopData={workshopData}/>

                })}
                </div>
            </div>
            
        </div>

    )
};

export default Workshops;