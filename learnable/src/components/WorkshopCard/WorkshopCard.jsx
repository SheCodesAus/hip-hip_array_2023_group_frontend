import React from 'react';
import { Link } from 'react-router-dom';
import "./WorkshopCard.css";

function WorkshopCard(props) {
    const { workshopData } = props;
    return (
        <div className='all-workshops-1'>
            <Link to={`/workshop/${workshopData.id}`}>
                <div className='all-workshops-1a'>
                    <div>
                        <img src={workshopData.image}/>
                    </div>
                    <div className='all-workshops-1b'>
                        <h3>{workshopData.title}</h3>

                    </div>
                </div>
            </Link>
        </div>

    )
};

export default WorkshopCard;