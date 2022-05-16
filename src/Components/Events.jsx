import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker';


export default function Events() {
  const [open, setopen] = useState(false);
  const ref = React.useRef(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="I'm a custom input"
      value={selectedDay ? `${selectedDay.day}/${selectedDay.mounse}` : ''}
      className='border mt-1 w-full border-gray-300 text-gray-700 text-sm rounded shadow-sm py-2 px-4'
    />
  )
  return (
    <div className='w-full lg:p-10 p-2'>
      <button onClick={() => setopen(!open)} className='lg:w-2/6 w-3/6 px-3 py-2 text-center text-sm bg-[#288CFF] text-white font-medium rounded shadow'>Create Appointment</button>
      <div className='flex lg:flex-row flex-col lg:justify-between justify-center lg:space-x-8 lg:space-y-0 space-y-4 items-center mt-4'>
        <div className='lg:w-8/12 w-full h-[27rem] overflow-y-auto text-sm bg-white p-5 rounded-sm shadow-sm'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
          />
        </div>
        <div className='lg:w-4/12 w-full h-[27rem] overflow-y-auto bg-white py-5 px-12 rounded-sm shadow-sm'>
          <p className='font-semibold text-lg text-gray-900 text-center'>Appointment Details</p>
          <div className='mt-10 text-center text-sm text-gray-600'>Select an appointment to view the details</div>
        </div>
      </div>
      {open && (
        <>
          <div className='z-20 lg:p-0 p-6 fixed inset-0 bg-black/50 w-full h-full flex justify-center items-start overflow-y-auto'>
            <div className='lg:w-3/6 w-full bg-white rounded shadow-lg p-4 my-10'>
              <div className='flex justify-between items-center'>
                <div></div>
                <div className='tet-gray-900'>Request INDECO slot</div>
                <button onClick={() => setopen(!open)}>
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <form className='w-full mt-6 flex justify-center items-center flex-col space-y-3'>
                <div></div>
                <div className='flex flex-col w-full'>
                  <label className='text-gray-600 text-sm'>Select Project</label>
                  <input type='text' className='border mt-1 border-gray-300 text-gray-700 text-sm rounded shadow-sm py-2 px-4' placeholder='Select' />
                </div>
                <div className='flex flex-col w-full relative'>
                <label className='text-gray-600 text-sm'>Appointment Date</label>
                  <DatePicker
                    value={selectedDay}
                    onChange={setSelectedDay}
                    renderInput={renderCustomInput} // render a custom input
                    shouldHighlightWeekends
                  />
                </div>
                <div className='flex flex-col w-full'>
                  <label className='text-gray-600 text-sm'>From :</label>
                  <input type='time' value='00:00:00' className='border mt-1 border-gray-300 text-gray-700 text-sm rounded shadow-sm py-2 px-4' placeholder='Select' />
                </div>
                <div className='flex flex-col w-full'>
                  <label className='text-gray-600 text-sm'>To :</label>
                  <input type='time' value='00:00:00' className='border mt-1 border-gray-300 text-gray-700 text-sm rounded shadow-sm py-2 px-4' placeholder='Select' />
                </div>
                <div className='flex flex-col w-full'>
                  <label className='text-gray-600 text-sm'>Client</label>
                  <input type='text' disabled className='border mt-1 bg-gray-100 border-gray-300 text-gray-700 text-sm rounded shadow-sm py-2 px-4'  />
                </div>
                <div className='flex flex-col w-full'>
                  <label className='text-gray-600 text-sm'>Description</label>
                  <textarea rows={5} className='border mt-1 border-gray-300 text-gray-700 text-sm rounded shadow-sm py-2 px-4'>

                  </textarea>
                </div>
              </form>
                <div className='flex justify-center items-center w-full space-x-4 mt-10'>
                <button onClick={() => console.log('Set Confirm Booking')} className='px-8 py-2 text-center text-sm bg-[#288CFF] text-white font-medium rounded shadow'>Confirm Booking</button>
                <button onClick={() => setopen(!open)} className='px-8 py-2 text-center text-sm bg-[#288CFF]/30 text-gray-900 font-medium rounded shadow'>Cancel</button>
                </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
