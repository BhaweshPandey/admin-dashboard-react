import React from 'react'
import './Tickets.css'
import user1 from "../../../image/user1.png";
import user2 from "../../../image/w 3.jpg";
import user3 from "../../../image/m 4.png";
import user4 from "../../../image/m 5.png";
import user5 from "../../../image/m 7.png";
import user6 from "../../../image/w 5.png";
import user7 from "../../../image/w 6.png";
import user8 from "../../../image/w 7.png";

const Tickets = () => {
  return (
    <div className='mid'>
    <div className='Tickets-top'><h3>Tickets</h3></div>
    <div className='mid-box'>
         <header className='header'>
            <li>All tickets</li>
            <ul>
                <li>Sort</li>
                <li>Filter</li>
            </ul>
        </header>
        <table>
            <tr className='tr-heading'>
                <td>Ticket details</td>
                <td>Customer name</td>
                <td>Date</td>
                <td>Priority</td>
            </tr><br/>
            <tr>
                <td>Contact Email not Linked
                <p className="query-desc">
                        Updated 1 day ago
                    </p></td>
                <td>Tom Cruise
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td>May 26, 2019
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td><button className="button-class">
                    High
                </button></td>
            </tr><br/>
            <tr>
                <td>Adding Images to Featured Posts
                <p className="query-desc">
                        Updated 1 day ago
                    </p></td>
                <td>Matt Damon<p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td>may 26, 2019
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td><button className="button-class-L">
                    LOW
                </button></td>
            </tr><br/>
            <tr>
                <td>When will I be charged this month?
                <p className="query-desc">
                        Updated 1 day ago
                    </p></td>
                <td>Robert Downey<p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td>May 26, 2019
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td><button className="button-class-N">
                    NORMAL
                </button></td>
            </tr><br/>
            <tr>
                <td>Payment not going through
                <p className="query-desc">
                        Updated 1 day ago
                    </p></td>
                <td>Christian Bale
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td>May 25, 2019
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td><button className="button-class">
                    High
                </button></td>
            </tr><br/>
            <tr>
                <td>Unable to add replies
                <p className="query-desc">
                        Updated 1 day ago
                    </p></td>
                <td>Henry cavil
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td>May 25, 2019
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td><button className="button-class-L">
                    LOW
                </button></td>
            </tr><br/>
            <tr>
                <td>Downtime since last week
                <p className="query-desc">
                        Updated 1 day ago
                    </p></td>
                <td>Chris Evans
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td>May 25, 2019
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td><button className="button-class">
                    High
                </button></td>
            </tr><br/>
            <tr>
                <td>Referral Bonus
                <p className="query-desc">
                        Updated 1 day ago
                    </p></td>
                <td>Sam Smith
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td>May 25, 2019
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td><button className="button-class-N">
                    NORMAL
                </button></td>
            </tr><br/>
            <tr>
                <td>How do I change my password?
                <p className="query-desc">
                        Updated 1 day ago
                    </p></td>
                <td>Steve Rogers
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td>May 24, 2019
                <p className="ticket-date-time">
                    6:30 pm
                </p></td>
                <td><button className="button-class">
                    High
                </button></td>
            </tr>
        </table>
        </div>
    </div>
  )
}

export default Tickets