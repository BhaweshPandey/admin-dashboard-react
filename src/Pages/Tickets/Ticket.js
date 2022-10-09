import React from 'react';
import './Ticket.css';
import Sitebar from '../../Tickets Componets/Sitebar/Sitebar';
import Tickets from '../../Tickets Componets/Sitebar/Tickets/Tickets';
import { TicketRow } from '../../Tickets Componets/Sitebar/Tickets/TicketUi';


const Ticket = () => {
  return (
    <div className='Ticket-page'>
      <Sitebar />
      {/*<Tickets/>*/}
      <TicketRow />
    </div>
  )
}

export default Ticket