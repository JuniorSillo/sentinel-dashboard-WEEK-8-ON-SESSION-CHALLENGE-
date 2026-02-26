import DashboardLayout from './components/DashboardLayout';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import { useTickets } from './hooks/useTickets';
import './App.css';

function App() {
  const { tickets, isLoading, error, addTicket } = useTickets();

  return (
    <DashboardLayout>
      {error && <p className="error-message">Error: {error}</p>}
      {isLoading && <p>Loading...</p>}
      <TicketForm onAddTicket={addTicket} />
      <TicketList tickets={tickets} />
    </DashboardLayout>
  );
}

export default App;