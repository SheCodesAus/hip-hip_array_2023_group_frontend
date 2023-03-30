import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";
import "./EditUserForm.css";

function EditUserForm() {
    const [ FormData, setFormData ] = useState({
        first_name: '',
        last_name: '', 
        username: '',
        password: '',
        is_python_mentor: false,
        is_django_mentor: false,
        is_react_mentor: false,
        is_javascript_mentor: false,
        is_htmlcss_mentor: false,
    }); 
    const navigate = useNavigate();

        
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
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
            navigate(`/login`);

            });

    };

const postData = async () => {

    const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
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
                                <h2>My User Account</h2>
                                <p>Please fill out the form below:</p>
                            </div>
                            <div className="new-workshop-4a">
                                <label htmlFor='first_name'>First Name:</label>
                                <input onChange={handleChange} type="text" id='first_name' placeholder='Enter first name'></input>
                            </div>
                            <div className="new-workshop-4a">
                                <label htmlFor='last_name'>Last Name:</label>
                                <input onChange={handleChange} type="text" id='last_name' placeholder='Enter last name'></input>
                            </div>
                             <div className="new-workshop-4a">
                                <label htmlFor='Email'>Email:</label>
                                <input onChange={handleChange} type="text" id='email' placeholder='Enter email'></input>
                            </div>
                            <div className="new-workshop-4a">
                                <label htmlFor='password'>Password:</label>
                                <input onChange={handleChange} type="text" id='password' placeholder='Enter password'></input>
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
                            
            
                            <div className="new-workshop-4g"><button type="submit" onClick={handleSubmit} className="btn-4">Save</button></div>

                        </div>
                        

                     </div>
                </div>
            </div>
            
            
        </form>

    )
};

export default NewUserForm;