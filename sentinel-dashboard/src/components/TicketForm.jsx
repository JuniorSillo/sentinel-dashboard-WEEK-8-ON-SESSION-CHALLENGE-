import React from 'react';
import { useState } from 'react';

const [description, setDescription] = useState('');
const [priority, setPriority] = useState('Low');
const [formError, setFormError] = useState(null);
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (m) =>{
    m.preventDefault();
    setFormError(null);
    setIsSubmitting(true);

    try{
        await onAddTicket({ description, priority});
        setDescription('');
        setPriority('Low');
    }catch(error){
        setFormError(error.message);
    }
    finally{
        setIsSubmitting(false);
    }
}

const TicketForm = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add New Ticket</h2>
        <div>
            <label>Description: </label>
            <input required type='text' value={description} onChange={(m) => setDescription(m.target.value)}/>
            {formError && <p>{formError}</p>}
        </div>
        <div>
            <label>Priority: </label>
            <select name="" id="" value={priority} onChange={(m) => setPriority(m.target.value)}>
            <option value='Low'></option>
            <option value='Medium'></option>
            <option value='High'></option>
            </select>
        </div>
        <button>{isSubmitting ? 'Ticket saving...' : 'Add New Ticket'}</button>
      </form>
    </div>
  )
}

export default TicketForm
