import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import workshopPhoto from  "../assets/workshop1.jpg";

function WorkshopDetail(){
    const [projectData, setProjectData] = useState ({mentors:[]});
    const { id } = useParams();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        fetch(`${import.meta.env.VITE_API_URL}workshops/${id}`,{
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`,
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data)
        })
    }, []);
    // console.log(projectData);

    const handleSubmit = (event) => {
        event.preventDefault();

            postData().then((response) => {
                console.log(response)
                // navigate(`/workshop/${response.id}`);
                alert(response)
            });

    };

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_API_URL}workshops/${id}/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`,
            },
            body: JSON.stringify(projectData) 
    
        });
        // console.log(response)
        return response.json();
        };
    

    return (
        <div>
            <div className="workshop-block">
            <div className="block1">
            <img src={ workshopPhoto } alt="workshop-graphic" />
            </div>
            <div className="block2">
                <div>
                    <div className="profilepic"><img src={projectData.image}/></div>
                    <div><h4>{projectData.title}</h4></div> 
                    <div><h6>{projectData.description}</h6></div>
                    {/* <div><img{projectData.image}</h6></div> */}
                    <div><h4>Curent mentors:{projectData.mentors}</h4></div>
                    <div className="register"><button type="submit" onClick={handleSubmit}>Sign up as a mentor</button></div>

                    
                   
                    
                </div>
                
            </div>

            </div>
            
            
            
        </div>
        

    )
};

export default WorkshopDetail;