import { useState } from 'react';

export default function TicketForm({ onAddTicket }) {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [formError, setFormError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (m) => {
    m.preventDefault();
    setFormError(null);
    setIsSubmitting(true);

    try {
      await onAddTicket({ description, priority });
      setDescription('');
      setPriority('Low');
    } catch (err) {
      setFormError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Ticket</h2>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(m) => setDescription(m.target.value)}
          required
        />
        {formError && <p className="error-message">{formError}</p>} 
      </div>
      <div>
        <label>Priority:</label>
        <select value={priority} onChange={(m) => setPriority(m.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Add Ticket'}
      </button>
    </form>
  );
}