import axios from 'axios'
import React, {useState, useEffect} from 'react'

const GetSummary = () => {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
      getSummary()
    }, [])
    const Token = JSON.parse(sessionStorage.getItem("token"))

   
    const getSummary = async()=> {
        const response = await axios.get('http://localhost:3001/ticket/summary',{
            headers : {
                'Authorization' : `bearer ${Token}` 
            }
        })
        console.log(response.data.data)
        setTickets(response.data.data)
    }
    


  return (
    <div>
      <div>
        <table  className="table">
            <thead className="thead-dark">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>type</th>
                    <th>description</th>
                    <th>creator</th>
                </tr>
            </thead>
            <tbody>
             {tickets.map((ticket, index) => (
                <tr key={ticket.ticket_id}>
                    <td>{index +1}</td>
                    <td>{ticket.ticket_name}</td>
                    <td>{ticket.ticket_type}</td>
                    <td>{ticket.description}</td>
                    <td>{ticket.created_by}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default GetSummary
