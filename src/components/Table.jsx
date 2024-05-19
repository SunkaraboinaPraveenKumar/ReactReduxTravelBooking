import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { deleteBooking } from '../redux/action';

const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBooking(id));
  }

  return (
    <>
      {data.length > 0 && (
        <div className='max-w-6xl mx-auto mt-5 bg-white'>
          <div className="overflow-x-auto">
            <table className="table">
              {/* table header */}
              <thead>
                <tr>
                  <th className="table-heading">Destination From</th>
                  <th className="table-heading">Destination To</th>
                  <th className="table-heading">Journey Date</th>
                  <th className="table-heading">Guests</th>
                  <th className="table-heading">Travel Class</th>
                  <th className="table-heading">DELETE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((booking) => (
                  <tr key={booking.id}>
                    <td className='text-black'><b>{booking.from}</b></td>
                    <td>{booking.to}</td>
                    <td>{booking.date}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.travelclass}</td>
                    <td>
                      <button 
                        onClick={() => handleDelete(booking.id)} 
                        className='btn-xs bg-red-500 text-white'
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )
}

export default Table;
