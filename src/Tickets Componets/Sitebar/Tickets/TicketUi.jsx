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

export const TicketRow = () => {

    const ticketData = [
        {
            userprofile:"user1" 

        }

    ]

    return (
        <div className='ticket-box'>
            <div className="header-class">
                <div className="title">
                    All Tickets
                </div>
                <div className="filter">
                    <p>sort</p>
                    <p>filter</p>
                </div>
            </div>
            <div className="table-heading">
                <div className="query-header">
                    Ticket details
                </div>
                <div className="customer">
                    Customer name
                </div>
                <div className="date">
                    Date
                </div>
                <div className="priority">
                    Priority
                </div>
                <div></div>
            </div>
            {
                ticketData.map((item,setitem) => (
                    <div className='ticket-table'>
                        <div
                            className="query-container">
                            <img src={user1} alt="user-profile" />
                            <div className="user-query">
                                <p className="query-heading">
                                    Contact Email not Linked
                                </p>
                                <p className="query-desc">
                                    Updated 1 day ago
                                </p>
                            </div>
                        </div>
                        <div className="costomer-class">
                            <p className="customer-name">
                                Tom Cruise
                            </p>
                            <p className="query-date">
                                on 24.05.2019
                            </p>
                        </div>
                        <div className="ticket-date">
                            <p className="ticket-date-title">
                                May 26, 2019
                            </p>
                            <p className="ticket-date-time">
                                6:30 pm
                            </p>
                        </div>
                        <div className="urgency">
                            <button className="button-class">
                                High
                            </button>
                        </div>
                        <div className='m-n'>
                            ⋮
                        </div>
                    </div>
                ))
            }
        </div>
    )

}
