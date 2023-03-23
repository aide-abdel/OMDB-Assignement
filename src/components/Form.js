import React from 'react'
import '../styles.css'
import { useState } from 'react'

function Form({movieSearch}) {

    const [formData,setFormData] = useState({
        searchterm:"",
    });

    const handleChange=(event) =>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        movieSearch(formData.searchterm,"s")
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="search-form">
            <input type="text" name="searchterm" className = "text-form" onChange={handleChange} value={formData.searchterm}/>
            <input type="submit" value="Search" className='submit-form'/>
        </form>
    </div>
  )
}

export default Form