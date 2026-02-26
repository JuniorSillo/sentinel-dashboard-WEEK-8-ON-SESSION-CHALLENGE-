import React from 'react'
import TicketItem from './TicketItem'

const TicketList = () => {
  return (
    <div>
      <h2>Ticketss</h2>
      {TicketList.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket}/>
      ))}
    </div>
  )
}

export default TicketList
