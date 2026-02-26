import TicketItem from './TicketItem';

export default function TicketList({ tickets }) {
  return (
    <div>
      <h2>Tickets</h2>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}