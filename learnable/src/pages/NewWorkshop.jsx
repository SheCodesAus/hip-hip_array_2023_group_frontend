import React from 'react'
import CreateWorkshopForm from '../components/CreateWorkshopForm/CreateWorkshopForm';

// function NewWorkshopPage() {
//     return <CreateWorkshopForm />

// };

function NewWorkshopPage() {
    const token = window.localStorage.getItem("token")
    // console.log( token !== null)
    return token !== null ? <CreateWorkshopForm /> :    
        <p>You are not logged in </p>
};

export default NewWorkshopPage;