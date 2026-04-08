import React from 'react'
import MonitoringHeader from './components/MonitoringHeader'

const Monitoring = ({ date }) => {
  return (
    <div className='min-h-full shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-sm flex flex-col p-1 bg-linear-to-br'>
      <div className='flex'>
        <MonitoringHeader />
      </div>
      <div>Monitoring  </div>
      <p>Date: {date}</p>
    </div>
  )
}

export default Monitoring

