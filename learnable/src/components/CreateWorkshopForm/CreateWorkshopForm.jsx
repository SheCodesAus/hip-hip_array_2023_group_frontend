import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";
import "./CreateWorkshopForm.css";

function NewWorkshopForm() {
    const [ FormData, setFormData ] = useState({
        title: '',
        is_python_mentor: false,
        is_django_mentor: false,
        is_react_mentor: false,
        is_javascript_mentor: false,
        is_htmlcss_mentor: false,
        workshop_date: '',
        created_at: '',
        description: '',
        image: '',
        is_open: true,
        max_mentor_num: '',
        owner: '',
        // current_mentor_num: '',
        mentor: '',
        
    }); 
    const navigate = useNavigate();

        
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        // console.log(id, value, type, checked);
        if (type=="checkbox"){
            setFormData((prevFormData) => ({
                ...prevFormData,
                [id]: checked,
            }));

        }
        else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [id]: value,
            }));

        }
            
            
        
    };
   
    const handleSubmit = (event) => {
        event.preventDefault();

            postData().then((response) => {
                console.log(response)
                navigate(`/workshop/${response.id}`);
            });

    };

const postData = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}workshops/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${token}`,
        },
        body: JSON.stringify(FormData)
    });
    return response.json();
    };


    return (
        <form>
            <div className="new-workshop-1">
                <div className="new-workshop-1b">
                    <div className="new-workshop-2">
                        <div className="new-workshop-3">
                            <div className="new-workshop-3b">
                                <h2>Create a Workshop</h2>
                                <p>Please fill out the form below:</p>
                            </div>
                            <div className="new-workshop-4a">
                                <label htmlFor='title'>Title:  </label>
                                <input onChange={handleChange} type="text" id='title' placeholder='Name for Workshop'></input>
                            </div>
                            
                            <div className="new-workshop-4b">
                                <label htmlFor='Skills'>Skills:  </label>
                                <div className="checkboxes">
                                    <label><input onChange={handleChange} type="checkbox" id='is_python_mentor'></input><span>Python</span></label>
                                    <label><input onChange={handleChange} type="checkbox" id='is_django_mentor'></input><span>Django</span></label>
                                    <label><input onChange={handleChange} type="checkbox" id='is_htmlcss_mentor'></input><span>HTML/CSS</span></label>
                                    <label><input onChange={handleChange} type="checkbox" id='is_react_mentor'></input><span>React</span></label>
                                    <label><input onChange={handleChange} type="checkbox" id='is_javascript_mentor'></input><span>Javascript</span></label>
                                </div>
                            </div>

                            <div className="new-workshop-4a">
                                <label htmlFor='workshop_date'>Workshop Date: </label>
                                <input onChange={handleChange} type="date" id='workshop_date' placeholder='Workshop Date'></input>
                            </div>
                            <div className="new-workshop-4a">
                                <label htmlFor='description'>Description:</label>
                                <textarea onChange={handleChange} type="text" id='description' placeholder='Enter description'></textarea>
                            </div>
                            <div className="new-workshop-4a">
                                <label htmlFor='image'>Workshop Photo:</label>
                                <input onChange={handleChange} type="url" id='image' placeholder='Paste image url'></input>
                            </div>

                            <div className="new-workshop-4a">
                                <label htmlFor='max_mentor_num'>Mentors needed:</label>
                                <input onChange={handleChange} type="number" id='max_mentor_num' placeholder='Enter number'></input>
                            </div>
            
            
                            <div className="new-workshop-4g"><button type="submit" onClick={handleSubmit} className="btn-4">Submit</button></div>

                        </div>
                        

                     </div>
                </div>
            </div>
            
            
        </form>

    )
};

export default NewWorkshopForm;