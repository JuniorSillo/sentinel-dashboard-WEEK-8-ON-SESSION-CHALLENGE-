export default function TicketItem({ ticket }) {
  return (
    <div className={`ticket-item ${ticket.priority === 'High' ? 'ticket-item-high' : ''}`}>
      <p><strong>ID:</strong> {ticket.id}</p>
      <p><strong>Desscription:</strong> {ticket.description}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
    </div>
  );
}