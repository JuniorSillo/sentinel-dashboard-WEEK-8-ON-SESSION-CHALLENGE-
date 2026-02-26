import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchTickets = async () => {
      setIsLoading(true);
      try {
       
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setTickets([
          { id: 1, description: 'First Ticket', priority: 'Low' },
        ]);
      } catch (err) {
        setError(err.message || 'Failed to load tickets');
      } finally {
        setIsLoading(false);
      }
    };
    fetchTickets();

    // SignalR listener
    const intervalId = setInterval(() => {
      const randomizeTickets = {
        id: Date.now(),
        description: `Random IT issue: Server ${Math.floor(Math.random() * 10)} down`,
        priority: Math.random() > 0.5 ? 'High' : 'Low',
      };
      setTickets((prev) => [...prev, randomizeTickets]);
    }, 60000); 

    return () => clearInterval(intervalId);
  }, []);

  const addTicket = async (newTicket) => {
    setIsLoading(true);
    setError(null);
    try {
      
      if (newTicket.description.length < 20) {
        throw new Error('Description is too short: Kindly insert at least 20 characters');
      }

      
      await new Promise((resolve) => setTimeout(resolve, 2000));

      
      const addedTicket = { ...newTicket, id: Date.now() };
      setTickets((prev) => [...prev, addedTicket]);
    } catch (err) {
      
      setError(err.message);
      throw err; 
    } finally {
      setIsLoading(false);
    }
  };

  return { tickets, isLoading, error, addTicket };
};